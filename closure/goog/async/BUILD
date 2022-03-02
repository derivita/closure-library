load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "animationdelay",
    srcs = ["animationdelay.js", "animationdelay.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "conditionaldelay",
    srcs = ["conditionaldelay.js", "conditionaldelay.clutz.d.ts"],
    lenient = True,
    deps = [
        ":delay",
        "//closure/goog/disposable",
    ],
)

closure_js_library(
    name = "debouncer",
    srcs = ["debouncer.js", "debouncer.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "delay",
    srcs = ["delay.js", "delay.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "freelist",
    srcs = ["freelist.js", "freelist.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "nexttick",
    srcs = [
        "nexttick.js", "nexttick.clutz.d.ts",
        "throwexception.js", "throwexception.clutz.d.ts",
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

closure_js_library(
    name = "promises",
    srcs = ["promises.js", "promises.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "run",
    srcs = ["run.js", "run.clutz.d.ts"],
    lenient = True,
    deps = [
        ":nexttick",
        ":workqueue",
    ],
)

closure_js_library(
    name = "throttle",
    srcs = [
        "legacy_throttle.js", "legacy_throttle.clutz.d.ts",
        "throttle.js", "throttle.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "workqueue",
    srcs = ["workqueue.js", "workqueue.clutz.d.ts"],
    lenient = True,
    deps = [
        ":freelist",
        "//closure/goog/asserts",
    ],
)
