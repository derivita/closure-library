load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "countries",
    srcs = ["countries.js", "countries.d.ts"],
    lenient = True,
)

js_library(
    name = "defaultlocalenameconstants",
    srcs = ["defaultlocalenameconstants.js", "defaultlocalenameconstants.d.ts"],
    lenient = True,
)

js_library(
    name = "locale",
    srcs = ["locale.js", "locale.d.ts"],
    lenient = True,
    deps = [":nativenameconstants"],
)

js_library(
    name = "nativenameconstants",
    srcs = ["nativenameconstants.js", "nativenameconstants.d.ts"],
    lenient = True,
)

js_library(
    name = "scriptToLanguages",
    srcs = ["scriptToLanguages.js", "scriptToLanguages.d.ts"],
    lenient = True,
    deps = [":locale"],
)

js_library(
    name = "timezonedetection",
    srcs = ["timezonedetection.js", "timezonedetection.d.ts"],
    lenient = True,
    deps = [
        ":timezonefingerprint",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "timezonefingerprint",
    srcs = ["timezonefingerprint.js", "timezonefingerprint.d.ts"],
    lenient = True,
)

js_library(
    name = "timezonelist",
    srcs = ["timezonelist.js", "timezonelist.d.ts"],
    lenient = True,
    deps = [":locale"],
)
