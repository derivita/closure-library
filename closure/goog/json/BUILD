load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "hybrid",
    srcs = ["hybrid.js", "hybrid.clutz.d.ts"],
    lenient = True,
    deps = [
        ":json",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "json",
    srcs = ["json.js", "json.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "jsonable",
    srcs = ["jsonable.js", "jsonable.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "nativejsonprocessor",
    srcs = ["nativejsonprocessor.js", "nativejsonprocessor.clutz.d.ts"],
    lenient = True,
    deps = [
        ":types",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "processor",
    srcs = ["processor.js", "processor.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/string:parser",
        "//closure/goog/string:stringifier",
    ],
)

closure_js_library(
    name = "types",
    srcs = ["types.js", "types.clutz.d.ts"],
    lenient = True,
)
