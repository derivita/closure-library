load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "affinetransform",
    srcs = ["affinetransform.js", "affinetransform.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "bezier",
    srcs = ["bezier.js", "bezier.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

closure_js_library(
    name = "box",
    srcs = ["box.js", "box.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "coordinate",
    srcs = ["coordinate.js", "coordinate.clutz.d.ts"],
    lenient = True,
    deps = [":math"],
)

closure_js_library(
    name = "coordinate3",
    srcs = ["coordinate3.js", "coordinate3.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "exponentialbackoff",
    srcs = ["exponentialbackoff.js", "exponentialbackoff.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "integer",
    srcs = ["integer.js", "integer.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/reflect"],
)

closure_js_library(
    name = "irect",
    srcs = ["irect.js", "irect.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "line",
    srcs = ["line.js", "line.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

closure_js_library(
    name = "long",
    srcs = ["long.js", "long.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/reflect",
    ],
)

closure_js_library(
    name = "math",
    srcs = ["math.js", "math.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "matrix",
    srcs = ["matrix.js", "matrix.clutz.d.ts"],
    lenient = True,
    deps = [
        ":math",
        ":size",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "path",
    srcs = ["path.js", "path.clutz.d.ts"],
    lenient = True,
    deps = [
        ":affinetransform",
        ":math",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "paths",
    srcs = ["paths.js", "paths.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":path",
    ],
)

closure_js_library(
    name = "range",
    srcs = ["range.js", "range.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "rangeset",
    srcs = ["rangeset.js", "rangeset.clutz.d.ts"],
    lenient = True,
    deps = [
        ":range",
        "//closure/goog/array",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "rect",
    srcs = ["rect.js", "rect.clutz.d.ts"],
    lenient = True,
    deps = [
        ":box",
        ":coordinate",
        ":irect",
        ":size",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "size",
    srcs = ["size.js", "size.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "tdma",
    srcs = ["tdma.js", "tdma.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "vec2",
    srcs = ["vec2.js", "vec2.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

closure_js_library(
    name = "vec3",
    srcs = ["vec3.js", "vec3.clutz.d.ts"],
    lenient = True,
    deps = [
        ":coordinate3",
        ":math",
    ],
)
