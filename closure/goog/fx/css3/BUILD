load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "fx",
    srcs = ["fx.js", "fx.d.ts"],
    lenient = True,
    deps = [":transition"],
)

js_library(
    name = "transition",
    srcs = ["transition.js", "transition.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/style",
        "//closure/goog/style:transition",
        "//closure/goog/timer",
    ],
)
