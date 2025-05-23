load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "pixeldensitymonitor",
    srcs = ["pixeldensitymonitor.js", "pixeldensitymonitor.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)
