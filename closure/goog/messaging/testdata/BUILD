load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "portchannel_worker",
    srcs = ["portchannel_worker.js", "portchannel_worker.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/messaging:portchannel"],
)

closure_js_library(
    name = "portnetwork_worker1",
    srcs = ["portnetwork_worker1.js", "portnetwork_worker1.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)

closure_js_library(
    name = "portnetwork_worker2",
    srcs = ["portnetwork_worker2.js", "portnetwork_worker2.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/messaging:portcaller",
        "//closure/goog/messaging:portchannel",
    ],
)
