load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "timer",
    srcs = ["timer.js", "timer.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/events:eventtarget",
        "//closure/goog/promise",
    ],
)
