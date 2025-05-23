load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "memoize",
    srcs = ["memoize.js", "memoize.d.ts"],
    lenient = True,
    deps = ["//closure/goog/reflect"],
)
