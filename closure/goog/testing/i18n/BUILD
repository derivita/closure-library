load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "asserts",
    testonly = True,
    srcs = ["asserts.js", "asserts.clutz.d.ts"],
    lenient = True,
    deps = [
        ":whitespace",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "whitespace",
    testonly = True,
    srcs = ["whitespace.js", "whitespace.clutz.d.ts"],
    lenient = True,
)
