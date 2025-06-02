load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "layoutasserts",
    testonly = True,
    srcs = ["layoutasserts.js", "layoutasserts.d.ts"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog/style",
        "//closure/goog/testing:asserts",
    ],
)

js_library(
    name = "style",
    testonly = True,
    srcs = ["style.js", "style.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/math:rect",
        "//closure/goog/style",
    ],
)
