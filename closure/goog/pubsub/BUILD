load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "pubsub",
    srcs = ["pubsub.js", "pubsub.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "topicid",
    srcs = ["topicid.js", "topicid.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "typedpubsub",
    srcs = ["typedpubsub.js", "typedpubsub.clutz.d.ts"],
    lenient = True,
    deps = [
        ":pubsub",
        ":topicid",
        "//closure/goog/disposable",
    ],
)
