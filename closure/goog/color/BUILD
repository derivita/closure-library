load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "alpha",
    srcs = ["alpha.js", "alpha.d.ts"],
    lenient = True,
    deps = [":color"],
)

js_library(
    name = "color",
    srcs = ["color.js", "color.d.ts"],
    lenient = True,
    deps = [
        ":names",
        "//closure/goog/math",
    ],
)

js_library(
    name = "names",
    srcs = ["names.js", "names.d.ts"],
    lenient = True,
)
