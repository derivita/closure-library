load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "blob",
    testonly = True,
    srcs = ["blob.js", "blob.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/crypt",
        "//closure/goog/crypt:base64",
    ],
)

js_library(
    name = "filesystem",
    testonly = True,
    srcs = [
        "entry.js", "entry.d.ts",
        "filesystem.js", "filesystem.d.ts",
        "filewriter.js", "filewriter.d.ts",
    ],
    lenient = True,
    deps = [
        ":blob",
        ":file",
        ":progressevent",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:entryimpl",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filesaver",
        "//closure/goog/fs:filesystem",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "file",
    testonly = True,
    srcs = ["file.js", "file.d.ts"],
    lenient = True,
    deps = [":blob"],
)

js_library(
    name = "filereader",
    testonly = True,
    srcs = ["filereader.js", "filereader.d.ts"],
    lenient = True,
    deps = [
        ":blob",
        ":progressevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filereader",
        "//closure/goog/timer",
    ],
)

alias(
    name = "entry",
    actual = ":filesystem",
)

alias(
    name = "filewriter",
    actual = ":filesystem",
)

js_library(
    name = "fs",
    testonly = True,
    srcs = ["fs.js", "fs.d.ts"],
    lenient = True,
    deps = [
        ":blob",
        ":filesystem",
        "//closure/goog/array",
        "//closure/goog/fs",
        "//closure/goog/fs:url",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/timer",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "progressevent",
    testonly = True,
    srcs = ["progressevent.js", "progressevent.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/events:event",
        "//closure/goog/fs:filereader",
        "//closure/goog/fs:filesaver",
    ],
)
