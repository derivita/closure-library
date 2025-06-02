load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "nondisposableeventtarget",
    srcs = ["nondisposableeventtarget.js", "nondisposableeventtarget.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:event",
        "//closure/goog/events:listenable",
        "//closure/goog/events:listenermap",
        "//closure/goog/object",
    ],
)

js_library(
    name = "touch",
    srcs = ["touch.js", "touch.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtype",
        "//closure/goog/string",
    ],
)
