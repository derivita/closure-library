load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "animationdelay",
    srcs = ["animationdelay.js", "animationdelay.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/functions",
    ],
)

js_library(
    name = "conditionaldelay",
    srcs = ["conditionaldelay.js", "conditionaldelay.d.ts"],
    lenient = True,
    deps = [
        ":delay",
        "//closure/goog/disposable",
    ],
)

js_library(
    name = "debouncer",
    srcs = ["debouncer.js", "debouncer.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

js_library(
    name = "delay",
    srcs = ["delay.js", "delay.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

js_library(
    name = "freelist",
    srcs = ["freelist.js", "freelist.d.ts"],
    lenient = True,
)

js_library(
    name = "nexttick",
    srcs = [
        "nexttick.js", "nexttick.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/functions",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
    ],
)

js_library(
    name = "throwexception",
    srcs = [
        "throwexception.js", "throwexception.d.ts",
    ],
    lenient = True,
)

js_library(
    name = "promises",
    srcs = ["promises.js", "promises.d.ts"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

js_library(
    name = "run",
    srcs = ["run.js", "run.d.ts"],
    lenient = True,
    deps = [
        ":nexttick",
        ":throwexception",
        ":workqueue",
        "//closure/goog/asserts",
        "//closure/goog/debug:asyncstacktag",
    ],
)

js_library(
    name = "throttle",
    srcs = [
        "legacy_throttle.js", "legacy_throttle.d.ts",
        "throttle.js", "throttle.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

js_library(
    name = "workqueue",
    srcs = ["workqueue.js", "workqueue.d.ts"],
    lenient = True,
    deps = [
        ":freelist",
        "//closure/goog/asserts",
    ],
)
