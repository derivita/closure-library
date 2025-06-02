load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "asserts",
    testonly = True,
    srcs = ["asserts.js", "asserts.d.ts"],
    lenient = True,
    deps = [
        ":whitespace",
        "//closure/goog/testing:asserts",
    ],
)

js_library(
    name = "whitespace",
    testonly = True,
    srcs = ["whitespace.js", "whitespace.d.ts"],
    lenient = True,
)
