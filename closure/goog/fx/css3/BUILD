load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "fx",
    srcs = ["fx.js", "fx.clutz.d.ts"],
    lenient = True,
    deps = [":transition"],
)

closure_js_library(
    name = "transition",
    srcs = ["transition.js", "transition.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/style",
        "//closure/goog/style:transition",
        "//closure/goog/timer",
    ],
)
