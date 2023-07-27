load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "assertthat",
    testonly = True,
    srcs = [
        "assertthat.js", "assertthat.clutz.d.ts",
        "matchererror.js", "matchererror.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog/debug:error",
    ],
)

alias(
    name = "decoratormatcher",
    actual = ":matchers",
)

alias(
    name = "dictionarymatcher",
    actual = ":matchers",
)

closure_js_library(
    name = "environment",
    testonly = True,
    srcs = ["environment.js", "environment.clutz.d.ts"],
    lenient = True,
    deps = [
        ":environmentbase",
        "//closure/goog/debug:console",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:mockclock",
        "//closure/goog/testing:mockcontrol",
        "//closure/goog/testing:propertyreplacer",
    ],
)

closure_js_library(
    name = "json_fuzzing",
    testonly = True,
    srcs = ["json_fuzzing.js", "json_fuzzing.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/testing:pseudorandom",
    ],
)

alias(
    name = "logicmatcher",
    actual = ":matchers",
)

closure_js_library(
    name = "matcher",
    testonly = True,
    srcs = ["matcher.js", "matcher.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "matchers",
    testonly = True,
    srcs = [
        "decoratormatcher.js", "decoratormatcher.clutz.d.ts",
        "dictionarymatcher.js", "dictionarymatcher.clutz.d.ts",
        "logicmatcher.js", "logicmatcher.clutz.d.ts",
        "matchers.js", "matchers.clutz.d.ts",
        "numbermatcher.js", "numbermatcher.clutz.d.ts",
        "objectmatcher.js", "objectmatcher.clutz.d.ts",
        "stringmatcher.js", "stringmatcher.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":matcher",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "environmentbase",
    testonly = True,
    srcs = ["environmentbase.js", "environmentbase.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/promise",
        "//closure/goog/testing:testcase",
    ],
)

alias(
    name = "numbermatcher",
    actual = ":matchers",
)

alias(
    name = "objectmatcher",
    actual = ":matchers",
)

alias(
    name = "stringmatcher",
    actual = ":matchers",
)
