load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "countries",
    srcs = ["countries.js", "countries.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "defaultlocalenameconstants",
    srcs = ["defaultlocalenameconstants.js", "defaultlocalenameconstants.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "locale",
    srcs = ["locale.js", "locale.d.ts"],
    lenient = True,
    deps = [":nativenameconstants"],
)

closure_js_library(
    name = "nativenameconstants",
    srcs = ["nativenameconstants.js", "nativenameconstants.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "scriptToLanguages",
    srcs = ["scriptToLanguages.js", "scriptToLanguages.d.ts"],
    lenient = True,
    deps = [":locale"],
)

closure_js_library(
    name = "timezonedetection",
    srcs = ["timezonedetection.js", "timezonedetection.d.ts"],
    lenient = True,
    deps = [
        ":timezonefingerprint",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "timezonefingerprint",
    srcs = ["timezonefingerprint.js", "timezonefingerprint.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "timezonelist",
    srcs = ["timezonelist.js", "timezonelist.d.ts"],
    lenient = True,
    deps = [":locale"],
)
