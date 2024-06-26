load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "abstractchannel",
    srcs = ["abstractchannel.js", "abstractchannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "bufferedchannel",
    srcs = ["bufferedchannel.js", "bufferedchannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        ":multichannel",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/log",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "deferredchannel",
    srcs = ["deferredchannel.js", "deferredchannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "loggerclient",
    srcs = ["loggerclient.js", "loggerclient.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/debug",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "loggerserver",
    srcs = ["loggerserver.js", "loggerserver.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "messagechannel",
    srcs = ["messagechannel.js", "messagechannel.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "messaging",
    srcs = ["messaging.js", "messaging.clutz.d.ts"],
    lenient = True,
    deps = [":messagechannel"],
)

closure_js_library(
    name = "multichannel",
    srcs = ["multichannel.js", "multichannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "portcaller",
    srcs = ["portcaller.js", "portcaller.clutz.d.ts"],
    lenient = True,
    deps = [
        ":deferredchannel",
        ":messagechannel",
        ":portchannel",
        ":portnetwork",
        "//closure/goog/disposable",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "portchannel",
    srcs = ["portchannel.js", "portchannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractchannel",
        ":deferredchannel",
        ":messagechannel",
        "//closure/goog/array",
        "//closure/goog/debug",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "portnetwork",
    srcs = ["portnetwork.js", "portnetwork.clutz.d.ts"],
    lenient = True,
    deps = [":messagechannel"],
)

closure_js_library(
    name = "portoperator",
    srcs = ["portoperator.js", "portoperator.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        ":portchannel",
        ":portnetwork",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "respondingchannel",
    srcs = ["respondingchannel.js", "respondingchannel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        ":multichannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/promise",
    ],
)
