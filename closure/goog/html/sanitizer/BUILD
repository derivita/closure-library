load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "html_test_vectors_js",
    srcs = [
        "html_test_vectors.d.ts",
        "html_test_vectors.js",
    ],
    lenient = True,
)

js_library(
    name = "attributeallowlists",
    srcs = [
        "attributeallowlists.d.ts",
        "attributeallowlists.js",
    ],
    lenient = True,
)

js_library(
    name = "csspropertysanitizer",
    srcs = [
        "csspropertysanitizer.d.ts",
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

js_library(
    name = "csssanitizer",
    srcs = [
        "csssanitizer.d.ts",
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

js_library(
    name = "elementweakmap",
    srcs = [
        "elementweakmap.d.ts",
        "elementweakmap.js",
    ],
    lenient = True,
    deps = [":noclobber"],
)

js_library(
    name = "htmlsanitizer",
    srcs = [
        "htmlsanitizer.d.ts",
        "htmlsanitizer.js",
    ],
    deprecation = "Please use sanitizeHtml, HtmlSanitizer or HtmlSanitizerBuilder from 'safevalues' instead. " +
                  "Note: We are aware the safevalues sanitizer doesn't support more niche use cases (see b/298325699). " +
                  "If you believe you fall in this case, please add a clear explanation to the CL adding you to the visibility allowlist so that we can best help you.",
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

js_library(
    name = "noclobber",
    srcs = [
        "noclobber.d.ts",
        "noclobber.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom:nodetype",
        "//closure/goog/useragent:product",
    ],
)

js_library(
    name = "inertdocument",
    srcs = [
        "inertdocument.d.ts",
        "inertdocument.js",
    ],
    lenient = True,
)

js_library(
    name = "safedomtreeprocessor",
    srcs = [
        "safedomtreeprocessor.d.ts",
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

js_library(
    name = "tagblacklist",
    srcs = [
        "tagblacklist.d.ts",
        "tagblacklist.js",
    ],
    lenient = True,
)

js_library(
    name = "tagwhitelist",
    srcs = [
        "tagwhitelist.d.ts",
        "tagwhitelist.js",
    ],
    lenient = True,
)

js_library(
    name = "unsafe",
    srcs = [
        "unsafe.d.ts",
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
