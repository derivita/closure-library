load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "alpha",
    srcs = ["alpha.js", "alpha.clutz.d.ts"],
    lenient = True,
    deps = [":color"],
)

closure_js_library(
    name = "color",
    srcs = ["color.js", "color.clutz.d.ts"],
    lenient = True,
    deps = [
        ":names",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "names",
    srcs = ["names.js", "names.clutz.d.ts"],
    lenient = True,
)
