load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "es6",
    srcs = ["es6.js", "es6.clutz.d.ts"],
    lenient = True,
    deps = [":iter"],
)

closure_js_library(
    name = "iter",
    srcs = ["iter.js", "iter.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/functions",
        "//closure/goog/math",
    ],
)
