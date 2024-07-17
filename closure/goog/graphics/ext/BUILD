load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "coordinates",
    srcs = ["coordinates.js", "coordinates.d.ts"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

alias(
    name = "element",
    actual = ":graphics",
)

closure_js_library(
    name = "ellipse",
    srcs = ["ellipse.js", "ellipse.d.ts"],
    lenient = True,
    deps = [
        ":group",
        ":strokeandfillelement",
    ],
)

closure_js_library(
    name = "ext",
    srcs = ["ext.js", "ext.d.ts"],
    lenient = True,
    deps = [
        ":coordinates",
        ":ellipse",
        ":graphics",
        ":image",
        ":rectangle",
        ":shape",
    ],
)

closure_js_library(
    name = "graphics",
    srcs = [
        "element.js", "element.d.ts",
        "graphics.js", "graphics.d.ts",
        "group.js", "group.d.ts",
    ],
    lenient = True,
    deps = [
        ":coordinates",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
        "//closure/goog/graphics",
        "//closure/goog/graphics:abstractgraphics",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
    ],
)

alias(
    name = "group",
    actual = ":graphics",
)

closure_js_library(
    name = "image",
    srcs = ["image.js", "image.d.ts"],
    lenient = True,
    deps = [":element"],
)

closure_js_library(
    name = "path",
    srcs = ["path.js", "path.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:affinetransform",
        "//closure/goog/graphics:path",
        "//closure/goog/math:rect",
    ],
)

closure_js_library(
    name = "rectangle",
    srcs = ["rectangle.js", "rectangle.d.ts"],
    lenient = True,
    deps = [
        ":group",
        ":strokeandfillelement",
    ],
)

closure_js_library(
    name = "shape",
    srcs = ["shape.js", "shape.d.ts"],
    lenient = True,
    deps = [
        ":group",
        ":path",
        ":strokeandfillelement",
        "//closure/goog/graphics:abstractgraphics",
        "//closure/goog/math:rect",
    ],
)

closure_js_library(
    name = "strokeandfillelement",
    srcs = ["strokeandfillelement.js", "strokeandfillelement.d.ts"],
    lenient = True,
    deps = [
        ":element",
        ":group",
        "//closure/goog/graphics:abstractgraphics",
    ],
)
