load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "boundedcollectablestorage",
    srcs = ["boundedcollectablestorage.js", "boundedcollectablestorage.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/storage:collectablestorage",
        "//closure/goog/storage:errorcode",
        "//closure/goog/storage:expiringstorage",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)
