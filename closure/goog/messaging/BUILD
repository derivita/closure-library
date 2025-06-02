load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractchannel",
    srcs = ["abstractchannel.js", "abstractchannel.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/json",
        "//closure/goog/log",
    ],
)

js_library(
    name = "bufferedchannel",
    srcs = ["bufferedchannel.js", "bufferedchannel.d.ts"],
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

js_library(
    name = "deferredchannel",
    srcs = ["deferredchannel.js", "deferredchannel.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "loggerclient",
    srcs = ["loggerclient.js", "loggerclient.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/debug",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

js_library(
    name = "loggerserver",
    srcs = ["loggerserver.js", "loggerserver.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
    ],
)

js_library(
    name = "messagechannel",
    srcs = ["messagechannel.js", "messagechannel.d.ts"],
    lenient = True,
)

js_library(
    name = "messaging",
    srcs = ["messaging.js", "messaging.d.ts"],
    lenient = True,
    deps = [":messagechannel"],
)

js_library(
    name = "multichannel",
    srcs = ["multichannel.js", "multichannel.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

js_library(
    name = "portcaller",
    srcs = ["portcaller.js", "portcaller.d.ts"],
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

js_library(
    name = "portchannel",
    srcs = ["portchannel.js", "portchannel.d.ts"],
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

js_library(
    name = "portnetwork",
    srcs = ["portnetwork.js", "portnetwork.d.ts"],
    lenient = True,
    deps = [":messagechannel"],
)

js_library(
    name = "portoperator",
    srcs = ["portoperator.js", "portoperator.d.ts"],
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

js_library(
    name = "respondingchannel",
    srcs = ["respondingchannel.js", "respondingchannel.d.ts"],
    lenient = True,
    deps = [
        ":messagechannel",
        ":multichannel",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/promise",
    ],
)
