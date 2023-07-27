load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "cssspecificity",
    srcs = ["cssspecificity.js", "cssspecificity.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "legacyconversions",
    srcs = ["legacyconversions.js", "legacyconversions.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
    ],
)

closure_js_library(
    name = "safehtml",
    srcs = ["safehtml.js", "safehtml.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        ":trustedtypes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom:tags",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safehtmlformatter",
    srcs = ["safehtmlformatter.js", "safehtmlformatter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safehtml",
        "//closure/goog/asserts",
        "//closure/goog/dom:tags",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "safescript",
    srcs = ["safescript.js", "safescript.clutz.d.ts"],
    lenient = True,
    deps = [
        ":trustedtypes",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestyle",
    srcs = ["safestyle.js", "safestyle.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safeurl",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safestylesheet",
    srcs = ["safestylesheet.js", "safestylesheet.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safestyle",
        "//closure/goog/asserts",
        "//closure/goog/object",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safeurl",
    srcs = ["safeurl.js", "safeurl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":trustedresourceurl",
        "//closure/goog/asserts",
        "//closure/goog/fs:url",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "safeurl_test_vectors",
    testonly = 1,
    srcs = [
        "javascript_url_test_vectors.js", "javascript_url_test_vectors.clutz.d.ts",
        "safeurl_test_vectors.js", "safeurl_test_vectors.clutz.d.ts",
    ],
    lenient = True,
)

closure_js_library(
    name = "testing",
    testonly = True,
    srcs = ["testing.js", "testing.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        "//closure/goog/testing:mockmatchers",
    ],
)

closure_js_library(
    name = "textextractor",
    srcs = ["textextractor.js", "textextractor.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/html/sanitizer:htmlsanitizer",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "trustedresourceurl",
    srcs = ["trustedresourceurl.js", "trustedresourceurl.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safescript",
        ":trustedtypes",
        "//closure/goog/asserts",
        "//closure/goog/fs:blob",
        "//closure/goog/fs:url",
        "//closure/goog/string:const",
        "//closure/goog/string:typedstring",
    ],
)

closure_js_library(
    name = "trustedtypes",
    srcs = ["trustedtypes.js", "trustedtypes.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/memoize"],
)

closure_js_library(
    name = "uncheckedconversions",
    srcs = ["uncheckedconversions.js", "uncheckedconversions.clutz.d.ts"],
    lenient = True,
    deps = [
        ":safehtml",
        ":safescript",
        ":safestyle",
        ":safestylesheet",
        ":safeurl",
        ":trustedresourceurl",
        "//closure/goog/asserts",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "utils",
    srcs = ["utils.js", "utils.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/string"],
)
