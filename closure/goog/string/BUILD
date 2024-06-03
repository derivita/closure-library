load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "const",
    srcs = ["const.js", "const.clutz.d.ts"],
    lenient = True,
    deps = [
        ":typedstring",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "internal",
    srcs = ["internal.js", "internal.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "linkify",
    srcs = ["linkify.js", "linkify.clutz.d.ts"],
    lenient = True,
    deps = [
        ":const",
        ":string",
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
    ],
)

closure_js_library(
    name = "newlines",
    srcs = ["newlines.js", "newlines.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

closure_js_library(
    name = "parser",
    srcs = ["parser.js", "parser.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "path",
    srcs = ["path.js", "path.clutz.d.ts"],
    lenient = True,
    deps = [
        ":string",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "string",
    srcs = ["string.js", "string.clutz.d.ts"],
    lenient = True,
    deps = [
        ":const",
        ":internal",
        "//closure/goog/dom:safe",
        "//closure/goog/html:uncheckedconversions",
    ],
)

closure_js_library(
    name = "stringbuffer",
    srcs = ["stringbuffer.js", "stringbuffer.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "stringformat",
    srcs = ["stringformat.js", "stringformat.clutz.d.ts"],
    lenient = True,
    deps = [":string"],
)

closure_js_library(
    name = "stringifier",
    srcs = ["stringifier.js", "stringifier.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "typedstring",
    srcs = ["typedstring.js", "typedstring.clutz.d.ts"],
    lenient = True,
)
