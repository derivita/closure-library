load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "console",
    srcs = ["console.js", "console.clutz.d.ts"],
    lenient = True,
    deps = [
        ":formatter",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "debug",
    srcs = ["debug.js", "debug.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcontext",
        "//closure/goog/array",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "deepfreeze",
    srcs = ["deepfreeze.js", "deepfreeze.clutz.d.ts"],
    lenient = True,
    deps = [":debug"],
)

closure_js_library(
    name = "debugwindow",
    srcs = ["debugwindow.js", "debugwindow.clutz.d.ts"],
    lenient = True,
    deps = [
        ":formatter",
        "//closure/goog/dom:safe",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/log",
        "//closure/goog/string:const",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "divconsole",
    srcs = ["divconsole.js", "divconsole.clutz.d.ts"],
    lenient = True,
    deps = [
        ":formatter",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/log",
        "//closure/goog/string:const",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "entrypointregistry",
    srcs = ["entrypointregistry.js", "entrypointregistry.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "error",
    srcs = ["error.js", "error.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "errorcontext",
    srcs = ["errorcontext.js", "errorcontext.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "errorhandler",
    srcs = ["errorhandler.js", "errorhandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":entrypointregistry",
        ":error",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "errorreporter",
    srcs = ["errorreporter.js", "errorreporter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":debug",
        ":entrypointregistry",
        ":error",
        ":errorcontext",
        ":errorhandler",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
        "//closure/goog/object",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "fancywindow",
    srcs = ["fancywindow.js", "fancywindow.clutz.d.ts"],
    lenient = True,
    deps = [
        ":debugwindow",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "formatter",
    srcs = ["formatter.js", "formatter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":debug",
        ":relativetimeprovider",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/log",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "relativetimeprovider",
    srcs = ["relativetimeprovider.js", "relativetimeprovider.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "tracer",
    srcs = ["tracer.js", "tracer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":debug",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/structs:map",
        "//closure/goog/structs:simplepool",
    ],
)
