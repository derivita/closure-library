load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "uri",
    srcs = ["uri.js", "uri.d.ts"],
    lenient = True,
    deps = [
        ":utils",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/collections:maps",
        "//closure/goog/string",
        "//closure/goog/structs",
    ],
)

js_library(
    name = "utils",
    srcs = ["utils.js", "utils.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)
