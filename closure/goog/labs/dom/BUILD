load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "pagevisibilitymonitor",
    srcs = [
        "pagevisibilityevent.js", "pagevisibilityevent.clutz.d.ts",
        "pagevisibilitymonitor.js", "pagevisibilitymonitor.clutz.d.ts",
        "pagevisibilitystate.js", "pagevisibilitystate.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:vendor",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/memoize",
    ],
)
