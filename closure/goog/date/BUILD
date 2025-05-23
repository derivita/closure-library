load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "date",
    srcs = ["date.js", "date.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/string",
    ],
)

alias(
    name = "datelike",
    actual = ":date",
)

js_library(
    name = "daterange",
    srcs = ["daterange.js", "daterange.d.ts"],
    lenient = True,
    deps = [
        ":date",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "duration",
    srcs = ["duration.js", "duration.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:messageformat",
    ],
)

js_library(
    name = "relative",
    srcs = ["relative.js", "relative.d.ts"],
    lenient = True,
    deps = [
        ":date",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:relativedatetimeformat",
    ],
)

js_library(
    name = "relativecommontests",
    testonly = 1,
    srcs = ["relativecommontests.js", "relativecommontests.d.ts"],
    lenient = True,
    deps = [
        ":date",
        ":relative",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/i18n:numberformatsymbols",
        "//closure/goog/i18n:relativedatetimesymbols",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing:testsuite",
        "//closure/goog/testing/i18n:asserts",
    ],
)

js_library(
    name = "utcdatetime",
    srcs = ["utcdatetime.js", "utcdatetime.d.ts"],
    lenient = True,
    deps = [":date"],
)
