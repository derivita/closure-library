load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
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

closure_js_library(
    name = "browser",
    srcs = ["browser.js", "browser.clutz.d.ts"],
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

closure_js_library(
    name = "chromium_rebrands",
    srcs = [
        "chromium_rebrands.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "device",
    srcs = ["device.js", "device.clutz.d.ts"],
    lenient = True,
    deps = [":util"],
)

closure_js_library(
    name = "engine",
    srcs = ["engine.js", "engine.clutz.d.ts"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog/array",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "extra",
    srcs = ["extra.js", "extra.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browser",
        ":platform",
    ],
)

closure_js_library(
    name = "platform",
    srcs = ["platform.js", "platform.clutz.d.ts"],
    lenient = True,
    deps = [
        ":util",
        "//closure/goog/asserts",
        "//closure/goog/labs/useragent/highentropy:highentropydata",
        "//closure/goog/labs/useragent/highentropy:highentropyvalue",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "test_agents",
    testonly = 1,
    srcs = ["test_agents.js", "test_agents.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "test_agentdata",
    testonly = 1,
    srcs = ["test_agentdata.js", "test_agentdata.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug:deepfreeze",
        "//closure/goog/debug:deepfreeze_js",
    ],
)

closure_js_library(
    name = "testutil",
    srcs = [
        "testutil.js", "testutil.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":browser",
        ":platform",
        ":util",
    ],
)

closure_js_library(
    name = "util",
    srcs = [
        "useragent.js", "useragent.clutz.d.ts",
        "util.js", "util.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/flags",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "verifier",
    srcs = ["verifier.js", "verifier.clutz.d.ts"],
    lenient = True,
)
