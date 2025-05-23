load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "devcss",
    srcs = ["devcss.js", "devcss.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/cssom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "devcssrunner",
    srcs = ["devcssrunner.js", "devcssrunner.d.ts"],
    lenient = True,
    deps = [":devcss"],
)
