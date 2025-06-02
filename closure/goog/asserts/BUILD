load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "asserts",
    srcs = ["asserts.js", "asserts.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/debug:error",
        "//closure/goog/dom:nodetype",
    ],
)

js_library(
    name = "dom",
    srcs = ["dom.js", "dom.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/dom:element",
        "//closure/goog/dom:tagname",
    ],
)
