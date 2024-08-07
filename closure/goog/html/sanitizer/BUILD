load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "html_test_vectors_js",
    srcs = [
        "html_test_vectors.clutz.d.ts",
        "html_test_vectors.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "attributeallowlists",
    srcs = [
        "attributeallowlists.clutz.d.ts",
        "attributeallowlists.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "csspropertysanitizer",
    srcs = [
        "csspropertysanitizer.clutz.d.ts",
        "csspropertysanitizer.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/html:safeurl",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "csssanitizer",
    srcs = [
        "csssanitizer.clutz.d.ts",
        "csssanitizer.js",
    ],
    lenient = True,
    deps = [
        ":csspropertysanitizer",
        ":inertdocument",
        ":noclobber",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/html:cssspecificity",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "elementweakmap",
    srcs = [
        "elementweakmap.clutz.d.ts",
        "elementweakmap.js",
    ],
    lenient = True,
    deps = [":noclobber"],
)

closure_js_library(
    name = "htmlsanitizer",
    srcs = [
        "htmlsanitizer.clutz.d.ts",
        "htmlsanitizer.js",
    ],
    lenient = True,
    deps = [
        ":attributeallowlists",
        ":csssanitizer",
        ":noclobber",
        ":safedomtreeprocessor",
        ":tagblacklist",
        ":tagwhitelist",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "noclobber",
    srcs = [
        "noclobber.clutz.d.ts",
        "noclobber.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "inertdocument",
    srcs = [
        "inertdocument.clutz.d.ts",
        "inertdocument.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "safedomtreeprocessor",
    srcs = [
        "safedomtreeprocessor.clutz.d.ts",
        "safedomtreeprocessor.js",
    ],
    lenient = True,
    deps = [
        ":elementweakmap",
        ":inertdocument",
        ":noclobber",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/log",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "tagblacklist",
    srcs = [
        "tagblacklist.clutz.d.ts",
        "tagblacklist.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "tagwhitelist",
    srcs = [
        "tagwhitelist.clutz.d.ts",
        "tagwhitelist.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "unsafe",
    srcs = [
        "unsafe.clutz.d.ts",
        "unsafe.js",
    ],
    lenient = True,
    deps = [
        ":htmlsanitizer",
        "//closure/goog/asserts",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)
