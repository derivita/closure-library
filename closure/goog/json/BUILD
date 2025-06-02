load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "hybrid",
    srcs = ["hybrid.js", "hybrid.d.ts"],
    lenient = True,
    deps = [
        ":json",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "json",
    srcs = ["json.js", "json.d.ts"],
    lenient = True,
)

js_library(
    name = "jsonable",
    srcs = ["jsonable.js", "jsonable.d.ts"],
    lenient = True,
)

js_library(
    name = "nativejsonprocessor",
    srcs = ["nativejsonprocessor.js", "nativejsonprocessor.d.ts"],
    lenient = True,
    deps = [
        ":types",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "processor",
    srcs = ["processor.js", "processor.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/string:parser",
        "//closure/goog/string:stringifier",
    ],
)

js_library(
    name = "types",
    srcs = ["types.js", "types.d.ts"],
    lenient = True,
)
