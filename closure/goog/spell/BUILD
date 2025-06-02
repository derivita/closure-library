load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "spellcheck",
    srcs = ["spellcheck.js", "spellcheck.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:set",
        "//closure/goog/timer",
    ],
)
