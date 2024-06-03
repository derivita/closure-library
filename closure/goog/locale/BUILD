load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "countries",
    srcs = ["countries.js", "countries.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "defaultlocalenameconstants",
    srcs = ["defaultlocalenameconstants.js", "defaultlocalenameconstants.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "locale",
    srcs = ["locale.js", "locale.clutz.d.ts"],
    lenient = True,
    deps = [":nativenameconstants"],
)

closure_js_library(
    name = "nativenameconstants",
    srcs = ["nativenameconstants.js", "nativenameconstants.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "scriptToLanguages",
    srcs = ["scriptToLanguages.js", "scriptToLanguages.clutz.d.ts"],
    lenient = True,
    deps = [":locale"],
)

closure_js_library(
    name = "timezonedetection",
    srcs = ["timezonedetection.js", "timezonedetection.clutz.d.ts"],
    lenient = True,
    deps = [
        ":timezonefingerprint",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "timezonefingerprint",
    srcs = ["timezonefingerprint.js", "timezonefingerprint.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "timezonelist",
    srcs = ["timezonelist.js", "timezonelist.clutz.d.ts"],
    lenient = True,
    deps = [":locale"],
)
