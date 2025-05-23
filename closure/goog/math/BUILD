load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "affinetransform",
    srcs = ["affinetransform.js", "affinetransform.d.ts"],
    lenient = True,
)

js_library(
    name = "bezier",
    srcs = ["bezier.js", "bezier.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

js_library(
    name = "box",
    srcs = ["box.js", "box.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "coordinate",
    srcs = ["coordinate.js", "coordinate.d.ts"],
    lenient = True,
    deps = [":math"],
)

js_library(
    name = "coordinate3",
    srcs = ["coordinate3.js", "coordinate3.d.ts"],
    lenient = True,
)

js_library(
    name = "exponentialbackoff",
    srcs = ["exponentialbackoff.js", "exponentialbackoff.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

js_library(
    name = "integer",
    srcs = ["integer.js", "integer.d.ts"],
    lenient = True,
    deps = ["//closure/goog/reflect"],
)

js_library(
    name = "irect",
    srcs = ["irect.js", "irect.d.ts"],
    lenient = True,
)

js_library(
    name = "line",
    srcs = ["line.js", "line.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

js_library(
    name = "long",
    srcs = ["long.js", "long.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/reflect",
    ],
)

js_library(
    name = "math",
    srcs = ["math.js", "math.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

js_library(
    name = "matrix",
    srcs = ["matrix.js", "matrix.d.ts"],
    lenient = True,
    deps = [
        ":math",
        ":size",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

js_library(
    name = "path",
    srcs = ["path.js", "path.d.ts"],
    lenient = True,
    deps = [
        ":affinetransform",
        ":math",
        "//closure/goog/array",
    ],
)

js_library(
    name = "paths",
    srcs = ["paths.js", "paths.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":path",
    ],
)

js_library(
    name = "range",
    srcs = ["range.js", "range.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

js_library(
    name = "rangeset",
    srcs = ["rangeset.js", "rangeset.d.ts"],
    lenient = True,
    deps = [
        ":range",
        "//closure/goog/array",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "rect",
    srcs = ["rect.js", "rect.d.ts"],
    lenient = True,
    deps = [
        ":box",
        ":coordinate",
        ":irect",
        ":size",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "size",
    srcs = ["size.js", "size.d.ts"],
    lenient = True,
)

js_library(
    name = "tdma",
    srcs = ["tdma.js", "tdma.d.ts"],
    lenient = True,
)

js_library(
    name = "vec2",
    srcs = ["vec2.js", "vec2.d.ts"],
    lenient = True,
    deps = [
        ":coordinate",
        ":math",
    ],
)

js_library(
    name = "vec3",
    srcs = ["vec3.js", "vec3.d.ts"],
    lenient = True,
    deps = [
        ":coordinate3",
        ":math",
    ],
)
