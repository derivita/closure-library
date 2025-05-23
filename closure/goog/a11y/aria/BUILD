load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "announcer",
    srcs = ["announcer.js", "announcer.d.ts"],
    lenient = True,
    deps = [
        ":aria",
        ":attributes",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

js_library(
    name = "aria",
    srcs = ["aria.js", "aria.d.ts"],
    lenient = True,
    deps = [
        ":attributes",
        ":datatables",
        ":roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

js_library(
    name = "attributes",
    srcs = ["attributes.js", "attributes.d.ts"],
    lenient = True,
)

js_library(
    name = "datatables",
    srcs = ["datatables.js", "datatables.d.ts"],
    lenient = True,
    deps = [
        ":attributes",
        "//closure/goog/object",
    ],
)

js_library(
    name = "roles",
    srcs = ["roles.js", "roles.d.ts"],
    lenient = True,
)
