load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "collectablestorage",
    srcs = ["collectablestorage.js", "collectablestorage.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":expiringstorage",
        ":richstorage",
        "//closure/goog/array",
        "//closure/goog/iter",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)

js_library(
    name = "collectablestoragetester",
    testonly = True,
    srcs = ["collectablestoragetester.js", "collectablestoragetester.d.ts"],
    lenient = True,
    deps = [
        ":collectablestorage",
        "//closure/goog/storage/mechanism:iterablemechanism",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:mockclock",
    ],
)

js_library(
    name = "encryptedstorage",
    srcs = ["encryptedstorage.js", "encryptedstorage.d.ts"],
    lenient = True,
    deps = [
        ":collectablestorage",
        ":errorcode",
        ":richstorage",
        "//closure/goog/crypt",
        "//closure/goog/crypt:arc4",
        "//closure/goog/crypt:base64",
        "//closure/goog/crypt:sha1",
        "//closure/goog/json",
        "//closure/goog/storage/mechanism:iterablemechanism",
    ],
)

js_library(
    name = "errorcode",
    srcs = ["errorcode.js", "errorcode.d.ts"],
    lenient = True,
)

js_library(
    name = "expiringstorage",
    srcs = ["expiringstorage.js", "expiringstorage.d.ts"],
    lenient = True,
    deps = [
        ":richstorage",
        "//closure/goog/storage/mechanism",
    ],
)

js_library(
    name = "richstorage",
    srcs = ["richstorage.js", "richstorage.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":storage",
        "//closure/goog/storage/mechanism",
    ],
)

js_library(
    name = "storage",
    srcs = ["storage.js", "storage.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        "//closure/goog/json",
        "//closure/goog/storage/mechanism",
    ],
)

js_library(
    name = "storagetester",
    testonly = True,
    srcs = ["storagetester.js", "storagetester.d.ts"],
    lenient = True,
    deps = [
        ":storage",
        "//closure/goog/structs:map",
        "//closure/goog/testing:asserts",
    ],
)
