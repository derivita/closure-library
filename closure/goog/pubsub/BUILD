load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "pubsub",
    srcs = ["pubsub.js", "pubsub.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
    ],
)

js_library(
    name = "topicid",
    srcs = ["topicid.js", "topicid.d.ts"],
    lenient = True,
)

js_library(
    name = "typedpubsub",
    srcs = ["typedpubsub.js", "typedpubsub.d.ts"],
    lenient = True,
    deps = [
        ":pubsub",
        ":topicid",
        "//closure/goog/disposable",
    ],
)
