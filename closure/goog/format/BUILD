load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "emailaddress",
    srcs = ["emailaddress.js", "emailaddress.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:bidi",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "format",
    srcs = ["format.js", "format.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:graphemebreak",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "htmlprettyprinter",
    srcs = ["htmlprettyprinter.js", "htmlprettyprinter.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string:stringbuffer",
    ],
)

closure_js_library(
    name = "internationalizedemailaddress",
    srcs = ["internationalizedemailaddress.js", "internationalizedemailaddress.clutz.d.ts"],
    lenient = True,
    deps = [
        ":emailaddress",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsonprettyprinter",
    srcs = ["jsonprettyprinter.js", "jsonprettyprinter.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/json",
        "//closure/goog/string",
        "//closure/goog/string:stringformat",
    ],
)
