load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "proto",
    srcs = ["proto.js", "proto.d.ts"],
    lenient = True,
    deps = [":serializer"],
)

js_library(
    name = "serializer",
    srcs = ["serializer.js", "serializer.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/json",
        "//closure/goog/string",
    ],
)
