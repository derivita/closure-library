load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "cursor",
    srcs = ["cursor.js", "cursor.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":keyrange",
        "//closure/goog/debug",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "db",
    srcs = ["db.js", "db.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":indexeddb",
        ":transaction",
        "//closure/goog/asserts",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "error",
    srcs = ["error.js", "error.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
    ],
)

js_library(
    name = "index",
    srcs = ["index.js", "index.d.ts"],
    lenient = True,
    deps = [
        ":cursor",
        ":error",
        ":keyrange",
        "//closure/goog/debug",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "indexeddb",
    srcs = [
        "indexeddb.js",  "indexeddb.d.ts",
        "transaction.js", "transaction.d.ts",
    ],
    lenient = True,
    deps = [
        ":error",
        ":objectstore",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "keyrange",
    srcs = ["keyrange.js", "keyrange.d.ts"],
    lenient = True,
)

js_library(
    name = "objectstore",
    srcs = ["objectstore.js", "objectstore.d.ts"],
    lenient = True,
    deps = [
        ":cursor",
        ":error",
        ":index",
        ":keyrange",
        "//closure/goog/debug",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

alias(
    name = "transaction",
    actual = ":indexeddb",
)
