load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "proto",
    srcs = ["proto.js", "proto.clutz.d.ts"],
    lenient = True,
    deps = [":serializer"],
)

closure_js_library(
    name = "serializer",
    srcs = ["serializer.js", "serializer.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/string",
    ],
)
