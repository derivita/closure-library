load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "fakewebchannel",
    testonly = True,
    srcs = ["fakewebchannel.js", "fakewebchannel.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events",
        "//closure/goog/labs/net:webchannel",
        "//closure/goog/testing:asserts",
    ],
)
