load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "anim",
    srcs = ["anim.js", "anim.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/async:animationdelay",
        "//closure/goog/async:delay",
        "//closure/goog/disposable",
        "//closure/goog/object",
    ],
)
