load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "nativeresolver",
    srcs = ["nativeresolver.js", "nativeresolver.d.ts"],
    lenient = True,
)

js_library(
    name = "promise",
    srcs = [
        "promise.js", "promise.d.ts",
        "resolver.js", "resolver.d.ts",
        "thenable.js", "thenable.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:freelist",
        "//closure/goog/async:run",
        "//closure/goog/async:throwexception",
        "//closure/goog/debug:asyncstacktag",
        "//closure/goog/debug:error",
        "//closure/goog/functions",
    ],
)

alias(
    name = "resolver",
    actual = ":promise",
)

js_library(
    name = "testsuiteadapter",
    testonly = 1,
    srcs = ["testsuiteadapter.js", "testsuiteadapter.d.ts"],
    lenient = True,
    deps = [":promise"],
)

alias(
    name = "thenable",
    actual = ":promise",
)
