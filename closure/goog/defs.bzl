
def unfurl(deps, provider=""):
  """Returns deps as well as deps exported by parent rules."""
  res = []
  for dep in deps:
    if not provider or hasattr(dep, provider):
      res.append(dep)
    if hasattr(dep, "exports"):
      for edep in dep.exports:
        if not provider or hasattr(edep, provider):
          res.append(edep)
  return res

def collect_js(ctx, deps,
               has_direct_srcs=False,
               no_closure_library=False,
               css=None):
  """Aggregates transitive JavaScript source files from unfurled deps."""
  srcs = set()
  ijs_files = set()
  infos = set()
  modules = set()
  descriptors = set()
  stylesheets = set()
  js_module_roots = set()
  has_closure_library = False
  for dep in deps:
    srcs += getattr(dep.closure_js_library, "srcs", [])
    ijs_files += getattr(dep.closure_js_library, "ijs_files", [])
    infos += getattr(dep.closure_js_library, "infos", [])
    modules += getattr(dep.closure_js_library, "modules", [])
    descriptors += getattr(dep.closure_js_library, "descriptors", [])
    stylesheets += getattr(dep.closure_js_library, "stylesheets", [])
    js_module_roots += getattr(dep.closure_js_library, "js_module_roots", [])
    has_closure_library = (
        has_closure_library or
        getattr(dep.closure_js_library, "has_closure_library", False))
  if no_closure_library:
    if has_closure_library:
      fail("no_closure_library can't be used when Closure Library is " +
           "already part of the transitive closure")
  elif has_direct_srcs and not has_closure_library:
    tmp = set([ctx.file._closure_library_base,
               ctx.file._closure_library_deps])
    tmp += srcs
    srcs = tmp
    has_closure_library = True
  if css:
    tmp = set([ctx.file._closure_library_base,
               css.closure_css_binary.renaming_map])
    tmp += srcs
    srcs = tmp
  return struct(
      srcs=srcs,
      js_module_roots=js_module_roots,
      ijs_files=ijs_files,
      infos=infos,
      modules=modules,
      descriptors=descriptors,
      stylesheets=stylesheets,
      has_closure_library=has_closure_library)

def create_closure_js_library(
        ctx,
        srcs = [],
        deps = [],
        exports = [],
        suppress = [],
        lenient = False,
        convention = "CLOSURE"):

    if not hasattr(ctx.files, "_closure_library_base"):
        fail("Closure toolchain undefined; rule should include CLOSURE_JS_TOOLCHAIN_ATTRS")

    # testonly exist for all rules but if it is an aspect it need to accessed over ctx.rule.
    testonly = ctx.attr.testonly if hasattr(ctx.attr, "testonly") else ctx.rule.attr.testonly

    return _closure_js_library_impl(
        ctx,
        srcs = srcs,
        deps = deps,
        exports = exports,
        suppress = suppress,
        lenient = lenient,
        convention = convention,
        testonly = testonly,
    )

def _closure_js_library_impl(
        ctx,
        srcs,
        deps,
        testonly,
        suppress,
        lenient,
        convention,
        includes = (),
        exports = depset(),
        internal_descriptors = depset(),
        no_closure_library = False,
        internal_expect_failure = False,

        # These file definitions for our outputs are deprecated,
        # and will be replaced with |actions.declare_file()| soon.
        deprecated_info_file = None,
        deprecated_stderr_file = None,
        deprecated_ijs_file = None,
        deprecated_typecheck_file = None):
    if not no_closure_library:
        deps = deps + ctx.attr._closure_library_base

    srcs_it = srcs
    if type(srcs) == "depset":
        srcs_it = srcs.to_list()

    dts_srcs = [f for f in srcs_it if f.path.endswith(".d.ts")]
    srcs_it = [f for f in srcs_it if f.path.endswith(".js") or f.path.endswith(".mjs")]

    # don't pass protofire deps to declaration_info
    declarations = declaration_info(depset(dts_srcs), [d for d in deps if type(d) != "struct"])

    # Create a list of direct children of this rule. If any direct dependencies
    # have the exports attribute, those labels become direct dependencies here.
    deps = unfurl(deps, provider = "closure_js_library")

    # Collect all the transitive stuff the child rules have propagated. Bazel has
    # a special nested set data structure that makes this efficient.
    js = collect_js(deps, bool(srcs), no_closure_library)

    # If closure_js_library depends on closure_css_library, that means
    # goog.getCssName() is being used in srcs to reference CSS names in the
    # dependent library. In order to guarantee renaming works, we're going to
    # pass along all those CSS library labels to closure_js_binary. Then when the
    # JS binary is compiled, we'll make sure it's linked against a CSS binary
    # which is a superset of the CSS libraries in its transitive closure.
    stylesheets = []
    for dep in deps:
        if hasattr(dep, "closure_css_library"):
            stylesheets.append(dep.label)

    if type(internal_descriptors) == "list":
        internal_descriptors = depset(internal_descriptors.to_list())

    direct_srcs = depset(srcs_it)
    transitive_srcs = depset(srcs_it, transitive = [js.srcs])

    # We now export providers to any parent Target. This is considered a public
    # interface because other Starlark rules can be designed to do things with
    # this data. Other Starlark rules can even export their own provider with the
    # same name to become polymorphically compatible with this one.
    return struct(
        # Iterable<Target> of deps that should only become deps in parent rules.
        # Exports are not deps of the Target to which they belong. The exports
        # provider does not contain the exports its deps export. Targets in this
        # provider are not necessarily guaranteed to have a closure_js_library
        # provider. Rules allowing closure_js_library deps MUST also treat
        # exports of those deps as direct dependencies of the Target. If those
        # rules are library rules, then they SHOULD also provide an exports
        # attribute of their own which is propagated to parent targets via the
        # exports provider, along with any exports those exports export. The
        # exports attribute MUST NOT contain files and SHOULD NOT impose
        # restrictions on what providers a Target must have. Rules exporting this
        # provider MUST NOT allow deps to be set if srcs is empty. Aspects
        # exporting this provider MAY turn deps into exports if srcs is empty and
        # the exports attribute does not exist. The exports feature can be abused
        # by users to circumvent strict deps checking and therefore should be
        # used with caution.
        exports = unfurl(exports),
        # All of the subproviders below are considered optional and MUST be
        # accessed using getattr(x, y, default). See collect_js() in defs.bzl.
        closure_js_library = struct(
            # File pointing to a ClosureJsLibrary protobuf file in pbtxt format
            # that's generated by this specific Target. It contains some metadata
            # as well as information extracted from inside the srcs files, e.g.
            # goog.provide'd namespaces. It is used for strict dependency
            # checking, a.k.a. layering checks.
            info = None,
            # NestedSet<File> of all info files in the transitive closure. This
            # is used by JsCompiler to apply error suppression on a file-by-file
            # basis.
            infos = depset(),
            ijs = None,
            ijs_files = depset(),
            # NestedSet<File> of all JavaScript source File artifacts in the
            # transitive closure. These files MUST be JavaScript.
            srcs = transitive_srcs,
            # NestedSet<String> of all execroot path prefixes in the transitive
            # closure. For very simple projects, it will be empty. It is useful
            # for getting rid of Bazel generated directories, workspace names,
            # etc. out of module paths.  It contains the cartesian product of
            # generated roots, external repository roots, and includes
            # prefixes. This is passed to JSCompiler via the --js_module_root
            # flag. See find_js_module_roots() in defs.bzl.
            js_module_roots = depset(),
            # NestedSet<String> of all ES6 module name strings in the transitive
            # closure. These are generated from the source file path relative to
            # the longest matching root prefix. It is used to guarantee that
            # within any given transitive closure, no namespace collisions
            # exist. These MUST NOT begin with "/" or ".", or contain "..".
            modules = depset(),
            # NestedSet<File> of all protobuf definitions in the transitive
            # closure. It is used so Closure Templates can have information about
            # the structure of protobufs so they can be easily rendered in .soy
            # files with type safety. See closure_js_template_library.bzl.
            descriptors = depset(transitive = [js.descriptors, internal_descriptors]),
            # NestedSet<Label> of all closure_css_library rules in the transitive
            # closure. This is used by closure_js_binary can guarantee the
            # completeness of goog.getCssName() substitutions.
            stylesheets = depset(stylesheets, transitive = [js.stylesheets]),
            # Boolean indicating indicating if Closure Library's base.js is part
            # of the srcs subprovider. This field exists for optimization.
            has_closure_library = js.has_closure_library,
        ),
        typescript = struct(
            es5_sources = direct_srcs,
            es6_sources = direct_srcs,
            transitive_es5_sources = transitive_srcs,
            transitive_es6_sources = transitive_srcs,
        ),
        providers = [declarations],
    )

def _closure_js_library(ctx):
    if not ctx.files.srcs and not ctx.files.externs and not ctx.attr.exports:
        fail("Either 'srcs' or 'exports' must be specified")
    if not ctx.files.srcs and ctx.attr.deps:
        fail("'srcs' must be set when using 'deps', otherwise consider 'exports'")
    if not ctx.files.srcs and (ctx.attr.suppress or ctx.attr.lenient):
        fail("'srcs' must be set when using 'suppress' or 'lenient'")
    if ctx.attr.language:
        print("The closure_js_library 'language' attribute is now removed and " +
              "is always set to " + JS_LANGUAGE_IN)

    # Create a list of the sources defined by this specific rule.
    srcs = ctx.files.srcs
    if ctx.files.externs:
        print("closure_js_library 'externs' is deprecated; just use 'srcs'")
        srcs = ctx.files.externs + srcs

    library = _closure_js_library_impl(
        ctx,
        srcs = srcs,
        deps = ctx.attr.deps,
        testonly = ctx.attr.testonly,
        suppress = ctx.attr.suppress,
        lenient = ctx.attr.lenient,
        convention = ctx.attr.convention,
        includes = getattr(ctx.attr, "includes", []),
        exports = ctx.attr.exports,
        internal_descriptors = depset(ctx.files.internal_descriptors),
        no_closure_library = ctx.attr.no_closure_library,
        internal_expect_failure = ctx.attr.internal_expect_failure,
    )

    return struct(
        files = depset(),
        exports = library.exports,
        closure_js_library = library.closure_js_library,
        # The usual suspects are exported as runfiles, in addition to raw source.
        runfiles = ctx.runfiles(
            files = srcs + ctx.files.data,
            transitive_files = depset(
                transitive = [
                    collect_runfiles(unfurl(ctx.attr.deps, provider = "closure_js_library")),
                    collect_runfiles(ctx.attr.data),
                    collect_runfiles(library.exports),
                ],
            ),
        ),
        providers = library.providers,
    )

closure_js_library = rule(
    implementation = _closure_js_library,
    attrs = dict({
        "convention": attr.string(
            default = "CLOSURE",
            # TODO(yannic): Define valid values.
            # values=["CLOSURE"],
        ),
        "data": attr.label_list(allow_files = True),
        "deps": attr.label_list(
            providers = ["closure_js_library"],
        ),
        "exports": attr.label_list(
            providers = ["closure_js_library"],
        ),
        "includes": attr.string_list(),
        "no_closure_library": attr.bool(),
        "srcs": attr.label_list(allow_files = JS_FILE_TYPE + [".mjs", ".d.ts"]),
        "suppress": attr.string_list(),
        "lenient": attr.bool(),

        # deprecated
        "externs": attr.label_list(allow_files = JS_FILE_TYPE),
        "language": attr.string(),

        # internal only
        "internal_descriptors": attr.label_list(allow_files = True),
        "internal_expect_failure": attr.bool(default = False),
    }, **CLOSURE_JS_TOOLCHAIN_ATTRS),
    provides = ["exports", "closure_js_library", DeclarationInfo],
)