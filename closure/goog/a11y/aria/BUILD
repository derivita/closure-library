load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "announcer",
    srcs = ["announcer.js", "announcer.clutz.d.ts"],
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

closure_js_library(
    name = "aria",
    srcs = ["aria.js", "aria.clutz.d.ts"],
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

closure_js_library(
    name = "attributes",
    srcs = ["attributes.js", "attributes.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "datatables",
    srcs = ["datatables.js", "datatables.clutz.d.ts"],
    lenient = True,
    deps = [
        ":attributes",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "roles",
    srcs = ["roles.js", "roles.clutz.d.ts"],
    lenient = True,
)
