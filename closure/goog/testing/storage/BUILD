load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "fakemechanism",
    testonly = True,
    srcs = ["fakemechanism.js", "fakemechanism.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/iter",
        "//closure/goog/iter:es6",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)
