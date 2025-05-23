load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "portchannel_worker",
    srcs = ["portchannel_worker.js", "portchannel_worker.d.ts"],
    lenient = True,
    deps = ["//closure/goog/messaging:portchannel"],
)

js_library(
    name = "portnetwork_worker1",
    srcs = ["portnetwork_worker1.js", "portnetwork_worker1.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)

js_library(
    name = "portnetwork_worker2",
    srcs = ["portnetwork_worker2.js", "portnetwork_worker2.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)
