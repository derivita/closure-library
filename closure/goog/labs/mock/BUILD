load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "mock",
    srcs = ["mock.js", "mock.d.ts"],
    lenient = True,
    deps = [
        ":timeoutmode",
        ":verificationmode",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/debug:error",
        "//closure/goog/functions",
        "//closure/goog/object",
    ],
)

js_library(
    name = "timeoutmode",
    srcs = ["timeoutmode.js", "timeoutmode.d.ts"],
    lenient = True,
)

js_library(
    name = "verificationmode",
    srcs = ["verificationmode.js", "verificationmode.d.ts"],
    lenient = True,
)
