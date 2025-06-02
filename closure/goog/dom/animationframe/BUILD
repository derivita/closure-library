load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "animationframe",
    srcs = ["animationframe.js", "animationframe.d.ts"],
    lenient = True,
    deps = [":polyfill"],
)

js_library(
    name = "polyfill",
    srcs = ["polyfill.js", "polyfill.d.ts"],
    lenient = True,
)
