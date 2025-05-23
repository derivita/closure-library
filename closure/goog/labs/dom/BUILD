load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "pagevisibilitymonitor",
    srcs = [
        "pagevisibilityevent.js", "pagevisibilityevent.d.ts",
        "pagevisibilitymonitor.js", "pagevisibilitymonitor.d.ts",
        "pagevisibilitystate.js", "pagevisibilitystate.d.ts",
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
