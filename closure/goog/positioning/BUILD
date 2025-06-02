load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "absoluteposition",
    srcs = ["absoluteposition.js", "absoluteposition.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "abstractposition",
    srcs = ["abstractposition.js", "abstractposition.d.ts"],
    lenient = True,
    deps = [
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "anchoredposition",
    srcs = ["anchoredposition.js", "anchoredposition.d.ts"],
    lenient = True,
    deps = [
        ":abstractposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "anchoredviewportposition",
    srcs = ["anchoredviewportposition.js", "anchoredviewportposition.d.ts"],
    lenient = True,
    deps = [
        ":anchoredposition",
        ":positioning",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "clientposition",
    srcs = ["clientposition.js", "clientposition.d.ts"],
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

js_library(
    name = "menuanchoredposition",
    srcs = ["menuanchoredposition.js", "menuanchoredposition.d.ts"],
    lenient = True,
    deps = [
        ":anchoredviewportposition",
        ":positioning",
    ],
)

js_library(
    name = "positioning",
    srcs = ["positioning.js", "positioning.d.ts"],
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

js_library(
    name = "viewportclientposition",
    srcs = ["viewportclientposition.js", "viewportclientposition.d.ts"],
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

js_library(
    name = "viewportposition",
    srcs = ["viewportposition.js", "viewportposition.d.ts"],
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
