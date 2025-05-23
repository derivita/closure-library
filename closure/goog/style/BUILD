load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "bidi",
    srcs = ["bidi.js", "bidi.d.ts"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog/dom",
        "//closure/goog/useragent",
        "//closure/goog/useragent:platform",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)

js_library(
    name = "cursor",
    srcs = ["cursor.js", "cursor.d.ts"],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

js_library(
    name = "style",
    srcs = ["style.js", "style.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:vendor",
        "//closure/goog/events:event",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/object",
        "//closure/goog/reflect",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "stylescrollbartester",
    testonly = 1,
    srcs = ["stylescrollbartester.js", "stylescrollbartester.d.ts"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/testing:asserts",
    ],
)

js_library(
    name = "transform",
    srcs = ["transform.js", "transform.d.ts"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog/functions",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:coordinate3",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "transition",
    srcs = ["transition.js", "transition.d.ts"],
    lenient = True,
    deps = [
        ":style",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:vendor",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/useragent",
    ],
)
