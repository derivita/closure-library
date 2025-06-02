load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "blob",
    srcs = ["blob.js", "blob.d.ts"],
    lenient = True,
)

alias(
    name = "entry",
    actual = ":filesystem",
)

js_library(
    name = "entryimpl",
    srcs = ["entryimpl.js", "entryimpl.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":filesystem",
        ":filewriter",
        "//closure/goog/array",
        "//closure/goog/functions",
        "//closure/goog/string",
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
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

js_library(
    name = "filereader",
    srcs = ["filereader.js", "filereader.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "filesaver",
    srcs = ["filesaver.js", "filesaver.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog/events:eventtarget",
    ],
)

js_library(
    name = "filesystem",
    srcs = [
        "entry.js", "entry.d.ts",
        "filesystem.js", "filesystem.d.ts",
    ],
    lenient = True,
    deps = [
        ":error",
        ":filewriter",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "filesystemimpl",
    srcs = ["filesystemimpl.js", "filesystemimpl.d.ts"],
    lenient = True,
    deps = [
        ":entryimpl",
        ":filesystem",
    ],
)

js_library(
    name = "filewriter",
    srcs = ["filewriter.js", "filewriter.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":filesaver",
    ],
)

js_library(
    name = "fs",
    srcs = ["fs.js", "fs.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":filereader",
        ":filesystemimpl",
        ":url",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "progressevent",
    srcs = ["progressevent.js", "progressevent.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

js_library(
    name = "url",
    srcs = ["url.js", "url.d.ts"],
    lenient = True,
)
