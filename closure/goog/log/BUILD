load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "log",
    srcs = [
        "log.js", "log.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug",
    ],
)
