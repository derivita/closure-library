load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "defines",
    srcs = ["defines.js", "defines.d.ts"],
    lenient = True,
)

js_library(
    name = "full",
    srcs = ["full.js", "full.d.ts"],
    lenient = True,
    deps = [
        ":defines",
        ":full_impl",
        ":full_native_impl",
        ":full_types",
    ],
)

js_library(
    name = "full_impl",
    srcs = ["full_impl.js", "full_impl.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_impl",
        "//closure/goog/asserts",
        "//closure/goog/promise:nativeresolver",
    ],
)

js_library(
    name = "full_native_impl",
    srcs = ["full_native_impl.js", "full_native_impl.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_native_impl",
    ],
)

js_library(
    name = "full_test_cases",
    testonly = 1,
    srcs = ["full_test_cases.js", "full_test_cases.d.ts"],
    lenient = True,
    deps = [
        ":full_types",
        ":lite_test_cases",
        "//closure/goog/testing:recordfunction",
    ],
)

js_library(
    name = "full_types",
    srcs = ["full_types.js", "full_types.d.ts"],
    lenient = True,
    deps = [":lite_types"],
)

js_library(
    name = "lite",
    srcs = ["lite.js", "lite.d.ts"],
    lenient = True,
    deps = [
        ":defines",
        ":lite_impl",
        ":lite_native_impl",
        ":lite_types",
    ],
)

js_library(
    name = "lite_impl",
    srcs = ["lite_impl.js", "lite_impl.d.ts"],
    lenient = True,
    deps = [
        ":lite_types",
        "//closure/goog/asserts",
        "//closure/goog/promise:nativeresolver",
    ],
)

js_library(
    name = "lite_native_impl",
    srcs = ["lite_native_impl.js", "lite_native_impl.d.ts"],
    lenient = True,
    deps = [":lite_types"],
)

js_library(
    name = "lite_test_cases",
    testonly = 1,
    srcs = ["lite_test_cases.js", "lite_test_cases.d.ts"],
    lenient = True,
    deps = [
        ":lite_types",
        "//closure/goog/testing:jsunit",
    ],
)

js_library(
    name = "lite_types",
    srcs = ["lite_types.js", "lite_types.d.ts"],
    lenient = True,
)
