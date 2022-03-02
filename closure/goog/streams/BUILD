load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "defines",
    srcs = ["defines.js", "defines.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "full",
    srcs = ["full.js", "full.clutz.d.ts"],
    lenient = True,
    deps = [
        ":defines",
        ":full_impl",
        ":full_native_impl",
        ":full_types",
    ],
)

closure_js_library(
    name = "full_impl",
    srcs = ["full_impl.js", "full_impl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_impl",
        "//closure/goog/asserts",
        "//closure/goog/promise:nativeresolver",
    ],
)

closure_js_library(
    name = "full_native_impl",
    srcs = ["full_native_impl.js", "full_native_impl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_native_impl",
    ],
)

closure_js_library(
    name = "full_test_cases",
    testonly = 1,
    srcs = ["full_test_cases.js", "full_test_cases.clutz.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_test_cases",
        "//closure/goog/testing:recordfunction",
    ],
)

closure_js_library(
    name = "full_types",
    srcs = ["full_types.js", "full_types.clutz.d.ts"],
    lenient = True,
    deps = [":lite_types"],
)

closure_js_library(
    name = "lite",
    srcs = ["lite.js", "lite.clutz.d.ts"],
    lenient = True,
    deps = [
        ":defines",
        ":lite_impl",
        ":lite_native_impl",
        ":lite_types",
    ],
)

closure_js_library(
    name = "lite_impl",
    srcs = ["lite_impl.js", "lite_impl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":lite_types",
        "//closure/goog/asserts",
        "//closure/goog/promise:nativeresolver",
    ],
)

closure_js_library(
    name = "lite_native_impl",
    srcs = ["lite_native_impl.js", "lite_native_impl.clutz.d.ts"],
    lenient = True,
    deps = [":lite_types"],
)

closure_js_library(
    name = "lite_test_cases",
    testonly = 1,
    srcs = ["lite_test_cases.js", "lite_test_cases.clutz.d.ts"],
    lenient = True,
    deps = [
        ":lite_types",
        "//closure/goog/testing:jsunit",
    ],
)

closure_js_library(
    name = "lite_types",
    srcs = ["lite_types.js", "lite_types.clutz.d.ts"],
    lenient = True,
)
