load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "absoluteposition",
    srcs = ["absoluteposition.js", "absoluteposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "abstractposition",
    srcs = ["abstractposition.js", "abstractposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "anchoredposition",
    srcs = ["anchoredposition.js", "anchoredposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "anchoredviewportposition",
    srcs = ["anchoredviewportposition.js", "anchoredviewportposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":anchoredposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "clientposition",
    srcs = ["clientposition.js", "clientposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "menuanchoredposition",
    srcs = ["menuanchoredposition.js", "menuanchoredposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":anchoredviewportposition",
        ":positioning",
    ],
)

closure_js_library(
    name = "positioning",
    srcs = ["positioning.js", "positioning.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
    ],
)

closure_js_library(
    name = "viewportclientposition",
    srcs = ["viewportclientposition.js", "viewportclientposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":clientposition",
        ":positioning",
        "//closure/goog/dom",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "viewportposition",
    srcs = ["viewportposition.js", "viewportposition.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)
