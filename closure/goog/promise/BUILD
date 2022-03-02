load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "nativeresolver",
    srcs = ["nativeresolver.js", "nativeresolver.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "promise",
    srcs = [
        "promise.js", "promise.clutz.d.ts",
        "resolver.js", "resolver.clutz.d.ts",
        "thenable.js", "thenable.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/async:freelist",
        "//closure/goog/async:nexttick",
        "//closure/goog/async:run",
        "//closure/goog/debug:error",
    ],
)

alias(
    name = "resolver",
    actual = ":promise",
)

closure_js_library(
    name = "testsuiteadapter",
    testonly = 1,
    srcs = ["testsuiteadapter.js", "testsuiteadapter.clutz.d.ts"],
    lenient = True,
    deps = [":promise"],
)

alias(
    name = "thenable",
    actual = ":promise",
)
