load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

alias(
    name = "descriptor",
    actual = ":message",
)

alias(
    name = "fielddescriptor",
    actual = ":message",
)

alias(
    name = "lazydeserializer",
    actual = ":message",
)

closure_js_library(
    name = "message",
    srcs = [
        "descriptor.js", "descriptor.d.ts",
        "fielddescriptor.js", "fielddescriptor.d.ts",
        "lazydeserializer.js", "lazydeserializer.d.ts",
        "message.js", "message.d.ts",
        "serializer.js", "serializer.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "objectserializer",
    srcs = ["objectserializer.js", "objectserializer.d.ts"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "pbliteserializer",
    srcs = ["pbliteserializer.js", "pbliteserializer.d.ts"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        "//closure/goog/asserts",
    ],
)

alias(
    name = "serializer",
    actual = ":message",
)

closure_js_library(
    name = "textformatserializer",
    srcs = ["textformatserializer.js", "textformatserializer.d.ts"],
    lenient = True,
    deps = [
        ":message",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/math:long",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "util",
    srcs = ["util.js", "util.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)
