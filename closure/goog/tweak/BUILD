load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "entries",
    srcs = ["entries.js", "entries.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

js_library(
    name = "registry",
    srcs = ["registry.js", "registry.d.ts"],
    lenient = True,
    deps = [
        ":entries",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/uri:utils",
    ],
)

js_library(
    name = "testhelpers",
    testonly = 1,
    srcs = ["testhelpers.js", "testhelpers.d.ts"],
    lenient = True,
    deps = [
        ":entries",
        ":registry",
        ":tweak",
    ],
)

js_library(
    name = "tweak",
    srcs = ["tweak.js", "tweak.d.ts"],
    lenient = True,
    deps = [
        ":entries",
        ":registry",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "tweakui",
    srcs = ["tweakui.js", "tweakui.d.ts"],
    lenient = True,
    deps = [
        ":entries",
        ":registry",
        ":tweak",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/ui:zippy",
        "//closure/goog/useragent",
    ],
)
