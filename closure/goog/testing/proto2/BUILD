load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "proto2",
    testonly = True,
    srcs = ["proto2.js", "proto2.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/proto2:message",
        "//closure/goog/proto2:objectserializer",
        "//closure/goog/testing:asserts",
    ],
)
