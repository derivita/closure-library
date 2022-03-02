load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "delegateregistry",
    srcs = ["delegateregistry.js", "delegateregistry.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
    ],
)

closure_js_library(
    name = "delegates",
    srcs = ["delegates.js", "delegates.clutz.d.ts"],
    lenient = True,
)
