load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "fakemechanism",
    testonly = True,
    srcs = ["fakemechanism.js", "fakemechanism.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/iter:es6",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)
