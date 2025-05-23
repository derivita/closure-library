load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "all_js",
    srcs = [],
    lenient = True,
    exports = [
        ":deferred",
        ":deferredlist",
    ],
)

js_library(
    name = "deferred",
    srcs = ["deferred.js", "deferred.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/promise",
    ],
)

js_library(
    name = "deferredlist",
    srcs = ["deferredlist.js", "deferredlist.d.ts"],
    lenient = True,
    deps = [":deferred"],
)
