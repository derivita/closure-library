load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "multimap",
    srcs = ["multimap.js", "multimap.d.ts"],
    lenient = True,
    deps = ["//closure/goog/array"],
)
