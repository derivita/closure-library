load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "basicstat",
    srcs = ["basicstat.js", "basicstat.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/string:stringformat",
        "//closure/goog/structs:circularbuffer",
    ],
)
