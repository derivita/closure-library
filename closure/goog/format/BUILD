load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "emailaddress",
    srcs = ["emailaddress.js", "emailaddress.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:bidi",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

js_library(
    name = "format",
    srcs = ["format.js", "format.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:graphemebreak",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "htmlprettyprinter",
    srcs = ["htmlprettyprinter.js", "htmlprettyprinter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/string:stringbuffer",
    ],
)

js_library(
    name = "internationalizedemailaddress",
    srcs = ["internationalizedemailaddress.js", "internationalizedemailaddress.d.ts"],
    lenient = True,
    deps = [
        ":emailaddress",
        "//closure/goog/string",
    ],
)

js_library(
    name = "jsonprettyprinter",
    srcs = ["jsonprettyprinter.js", "jsonprettyprinter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/html:safehtml",
        "//closure/goog/json",
        "//closure/goog/string",
        "//closure/goog/string:stringformat",
    ],
)
