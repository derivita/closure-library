load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "es6",
    srcs = ["es6.js", "es6.d.ts"],
    lenient = True,
    deps = [":iter"],
)

js_library(
    name = "iter",
    srcs = ["iter.js", "iter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/functions",
        "//closure/goog/math",
    ],
)
