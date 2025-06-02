load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "useragent",
    srcs = [],
    lenient = True,
    exports = [
        ":browser",
        ":device",
        ":engine",
        ":extra",
        ":platform",
        ":verifier",
    ],
)

js_library(
    name = "browser",
    srcs = [
        "browser.d.ts",
        "browser.js",
    ],
    lenient = True,
    deps = [
        ":chromium_rebrands",
        ":util",
        "//closure/goog/asserts",
        "//closure/goog/labs/useragent/highentropy:highentropydata",
        "//closure/goog/labs/useragent/highentropy:highentropyvalue",
        "//closure/goog/string:internal",
    ],
)

js_library(
    name = "chromium_rebrands",
    srcs = [
        "chromium_rebrands.d.ts",
        "chromium_rebrands.js",
    ],
    lenient = True,
)

js_library(
    name = "device",
    srcs = [
        "device.d.ts",
        "device.js",
    ],
    lenient = True,
    deps = [":util"],
)

js_library(
    name = "engine",
    srcs = [
        "engine.d.ts",
        "engine.js",
    ],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog/array",
        "//closure/goog/string:internal",
    ],
)

js_library(
    name = "extra",
    srcs = [
        "extra.d.ts",
        "extra.js",
    ],
    lenient = True,
    deps = [
        ":browser",
        ":platform",
    ],
)

js_library(
    name = "platform",
    srcs = [
        "platform.d.ts",
        "platform.js",
    ],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog/asserts",
        "//closure/goog/labs/useragent/highentropy:highentropydata",
        "//closure/goog/labs/useragent/highentropy:highentropyvalue",
        "//closure/goog/string:internal",
    ],
)

js_library(
    name = "test_agents",
    testonly = 1,
    srcs = [
        "test_agents.d.ts",
        "test_agents.js",
    ],
    lenient = True,
)

js_library(
    name = "test_agentdata",
    testonly = 1,
    srcs = [
        "test_agentdata.d.ts",
        "test_agentdata.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug:deepfreeze",
    ],
)

js_library(
    name = "testutil",
    srcs = [
        "testutil.d.ts",
        "testutil.js",
    ],
    lenient = True,
    deps = [
        ":browser",
        ":platform",
        ":util",
    ],
)

js_library(
    name = "util",
    srcs = [
        "useragent.d.ts",
        "useragent.js",
        "util.d.ts",
        "util.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/flags",
        "//closure/goog/string:internal",
    ],
)

js_library(
    name = "verifier",
    srcs = [
        "verifier.d.ts",
        "verifier.js",
    ],
    lenient = True,
)
