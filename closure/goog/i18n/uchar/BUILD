load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "localnamefetcher",
    srcs = ["localnamefetcher.js", "localnamefetcher.d.ts"],
    lenient = True,
    deps = [
        ":namefetcher",
        "//closure/goog/i18n:ucharnames",
        "//closure/goog/log",
    ],
)

js_library(
    name = "namefetcher",
    srcs = ["namefetcher.js", "namefetcher.d.ts"],
    lenient = True,
)

js_library(
    name = "remotenamefetcher",
    srcs = ["remotenamefetcher.js", "remotenamefetcher.d.ts"],
    lenient = True,
    deps = [
        ":namefetcher",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/i18n:uchar",
        "//closure/goog/log",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/uri",
    ],
)
