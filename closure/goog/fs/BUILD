load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "blob",
    srcs = ["blob.js", "blob.clutz.d.ts"],
    lenient = True,
)

alias(
    name = "entry",
    actual = ":filesystem",
)

closure_js_library(
    name = "entryimpl",
    srcs = ["entryimpl.js", "entryimpl.clutz.d.ts"],
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

closure_js_library(
    name = "error",
    srcs = ["error.js", "error.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "filereader",
    srcs = ["filereader.js", "filereader.clutz.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog/events:eventtarget",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "filesaver",
    srcs = ["filesaver.js", "filesaver.clutz.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":progressevent",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "filesystem",
    srcs = [
        "entry.js", "entry.clutz.d.ts",
        "filesystem.js", "filesystem.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":error",
        ":filewriter",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "filesystemimpl",
    srcs = ["filesystemimpl.js", "filesystemimpl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":entryimpl",
        ":filesystem",
    ],
)

closure_js_library(
    name = "filewriter",
    srcs = ["filewriter.js", "filewriter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":filesaver",
    ],
)

closure_js_library(
    name = "fs",
    srcs = ["fs.js", "fs.clutz.d.ts"],
    lenient = True,
    deps = [
        ":error",
        ":filereader",
        ":filesystemimpl",
        ":url",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "progressevent",
    srcs = ["progressevent.js", "progressevent.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

closure_js_library(
    name = "url",
    srcs = ["url.js", "url.clutz.d.ts"],
    lenient = True,
)
