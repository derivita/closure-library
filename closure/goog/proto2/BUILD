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
        "descriptor.js", "descriptor.clutz.d.ts",
        "fielddescriptor.js", "fielddescriptor.clutz.d.ts",
        "lazydeserializer.js", "lazydeserializer.clutz.d.ts",
        "message.js", "message.clutz.d.ts",
        "serializer.js", "serializer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "objectserializer",
    srcs = ["objectserializer.js", "objectserializer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":serializer",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "pbliteserializer",
    srcs = ["pbliteserializer.js", "pbliteserializer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":lazydeserializer",
        ":serializer",
        "//closure/goog/asserts",
    ],
)

alias(
    name = "serializer",
    actual = ":message",
)

closure_js_library(
    name = "textformatserializer",
    srcs = ["textformatserializer.js", "textformatserializer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":fielddescriptor",
        ":message",
        ":serializer",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "util",
    srcs = ["util.js", "util.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)
