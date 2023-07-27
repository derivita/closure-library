load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "jstests_deps",
    testonly = 1,
    lenient = True,
    exports = [
        ":bidi",
        ":bidiformatter",
        ":charlistdecompressor",
        ":collation",
        ":compactnumberformatsymbols",
        ":compactnumberformatsymbolsext",
        ":currency",
        ":dateintervalformat",
        ":dateintervalpatterns",
        ":dateintervalsymbols",
        ":datetimeformat",
        ":datetimeparse",
        ":datetimepatterns",
        ":datetimepatternsext",
        ":datetimesymbols",
        ":datetimesymbolsext",
        ":dayperiodsymbols",
        ":durationformat",
        ":durationsymbols",
        ":durationsymbolsext",
        ":durationsymboltypes",
        ":graphemebreak",
        ":listformat",
        ":listsymbols",
        ":listsymbolsext",
        ":localefeature",
        ":messageformat",
        ":messages",
        ":mime",
        ":numberformat",
        ":numberformatsymbols",
        ":numberformatsymbolsext",
        ":ordinalrules",
        ":pluralrules",
        ":relativedatetimeformat",
        ":relativedatetimesymbols",
        ":relativedatetimesymbolsext",
        ":timezone",
        ":uchar",
        ":ucharnames",
        "//closure/goog/date",
        "//closure/goog/date:daterange",
        "//closure/goog/date:utcdatetime",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:testing",
        "//closure/goog/labs/useragent",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/testing:expectedfailures",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing:testsuite",
        "//closure/goog/testing/i18n:asserts",
        "//closure/goog/testing/i18n:whitespace",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
        "//closure/goog:base",
    ],
)

closure_js_library(
    name = "bidi",
    srcs = ["bidi.js", "bidi.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "bidiformatter",
    srcs = ["bidiformatter.js", "bidiformatter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":bidi",
        "//closure/goog/html:safehtml",
    ],
)

closure_js_library(
    name = "charlistdecompressor",
    srcs = ["charlistdecompressor.js", "charlistdecompressor.clutz.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "charpickerdata",
    srcs = ["charpickerdata.js", "charpickerdata.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "cldrversion",
    srcs = ["cldrversion.js"],
    lenient = True,
)

closure_js_library(
    name = "collation",
    srcs = ["collation.js", "collation.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "compactnumberformatsymbols",
    srcs = ["compactnumberformatsymbols.js", "compactnumberformatsymbols.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "compactnumberformatsymbolsext",
    srcs = ["compactnumberformatsymbolsext.js", "compactnumberformatsymbolsext.clutz.d.ts"],
    lenient = True,
    deps = [":compactnumberformatsymbols"],
)

closure_js_library(
    name = "currency",
    srcs = ["currency.js", "currency.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "currencycodemap",
    srcs = ["currencycodemap.js", "currencycodemap.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "dateintervalformat",
    srcs = ["dateintervalformat.js", "dateintervalformat.clutz.d.ts"],
    lenient = True,
    deps = [
        ":dateintervalsymbols",
        ":datetimeformat",
        ":datetimesymbols",
        ":localefeature",
        ":timezone",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:datelike",
        "//closure/goog/date:daterange",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "dateintervalpatterns",
    srcs = ["dateintervalpatterns.js", "dateintervalpatterns.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalsymbols",
    ],
)

closure_js_library(
    name = "dateintervalpatternsext",
    srcs = ["dateintervalpatternsext.js", "dateintervalpatternsext.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalpatterns",
    ],
)

closure_js_library(
    name = "dateintervalsymbols",
    srcs = ["dateintervalsymbols.js", "dateintervalsymbols.clutz.d.ts"],
    lenient = True,
    deps = [":cldrversion"],
)

closure_js_library(
    name = "dateintervalsymbolsext",
    srcs = ["dateintervalsymbolsext.js", "dateintervalsymbolsext.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalsymbols",
    ],
)

closure_js_library(
    name = "datetimeformat",
    srcs = ["datetimeformat.js", "datetimeformat.clutz.d.ts"],
    lenient = True,
    deps = [
        ":datetimepatterns",
        ":datetimesymbols",
        ":dayperiodsymbols",
        ":localefeature",
        ":nativelocaledigits",
        ":timezone",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:utcdatetime",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "datetimeparse",
    srcs = ["datetimeparse.js", "datetimeparse.clutz.d.ts"],
    lenient = True,
    deps = [
        ":datetimeformat",
        ":datetimesymbols",
        ":dayperiodsymbols",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "datetimepatternstype",
    srcs = ["datetimepatternstype.js", "datetimepatternstype.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "datetimepatterns",
    srcs = ["datetimepatterns.js", "datetimepatterns.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimepatternstype",
    ],
)

closure_js_library(
    name = "datetimepatternsext",
    srcs = ["datetimepatternsext.js", "datetimepatternsext.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimepatterns",
        ":datetimepatternstype",
    ],
)

closure_js_library(
    name = "datetimesymbols",
    srcs = ["datetimesymbols.js", "datetimesymbols.clutz.d.ts"],
    lenient = True,
    deps = [":cldrversion"],
)

closure_js_library(
    name = "dayperiodsymbols",
    srcs = ["dayperiodsymbols.js"],
    lenient = True,
)

closure_js_library(
    name = "datetimesymbolsext",
    srcs = ["datetimesymbolsext.js", "datetimesymbolsext.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimesymbols",
    ],
)

closure_js_library(
    name = "durationformat",
    srcs = ["durationformat.js"],
    lenient = True,
    deps = [
        ":durationsymbols",
        ":durationsymboltypes",
        ":listformat",
        ":localefeature",
        ":messageformat",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "durationsymbols",
    srcs = ["durationsymbols.js"],
    lenient = True,
    deps = [":durationsymboltypes"],
)

closure_js_library(
    name = "durationsymbolsext",
    srcs = ["durationsymbolsext.js"],
    lenient = True,
    deps = [
        ":durationsymbols",
        ":durationsymboltypes",
    ],
)

closure_js_library(
    name = "durationsymboltypes",
    srcs = ["durationsymboltypes.js"],
    lenient = True,
)

closure_js_library(
    name = "graphemebreak",
    srcs = ["graphemebreak.js", "graphemebreak.clutz.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/asserts",
        "//closure/goog/structs:inversionmap",
    ],
)

closure_js_library(
    name = "listformat",
    srcs = ["listformat.js"],
    lenient = True,
    deps = [
        ":listsymbols",
        ":listsymbolsext",
        ":localefeature",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "listsymbols",
    srcs = [
        "listsymbols.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "listsymbolsext",
    srcs = ["listsymbolsext.js"],
    lenient = True,
    deps = [":listsymbols"],
)

closure_js_library(
    name = "localefeature",
    srcs = ["localefeature.js", "localefeature.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "messageformat",
    srcs = ["messageformat.js", "messageformat.clutz.d.ts"],
    lenient = True,
    deps = [
        ":compactnumberformatsymbols",
        ":numberformat",
        ":numberformatsymbols",
        ":ordinalrules",
        ":pluralrules",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "messages",
    srcs = ["messages.js"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "mime",
    srcs = ["mime.js", "mime.clutz.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/array",
    ],
)

closure_js_library(
    name = "nativelocaledigits",
    srcs = ["nativelocaledigits.js", "nativelocaledigits.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "numberformat",
    srcs = ["numberformat.js", "numberformat.clutz.d.ts"],
    lenient = True,
    deps = [
        ":compactnumberformatsymbols",
        ":currency",
        ":localefeature",
        ":nativelocaledigits",
        ":numberformatsymbols",
        "//closure/goog/asserts",
        "//closure/goog/math",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "numberformatsymbols",
    srcs = [
        "numberformatsymbols.js", "numberformatsymbols.clutz.d.ts",
        "numberformatsymbolstype.js", "numberformatsymbolstype.clutz.d.ts",
    ],
    lenient = True,
)

closure_js_library(
    name = "numberformatsymbolsext",
    srcs = ["numberformatsymbolsext.js", "numberformatsymbolsext.clutz.d.ts"],
    lenient = True,
    deps = [":numberformatsymbols"],
)

closure_js_library(
    name = "ordinalrules",
    srcs = ["ordinalrules.js", "ordinalrules.clutz.d.ts"],
    lenient = True,
    deps = [":localefeature"],
)

closure_js_library(
    name = "pluralrules",
    srcs = ["pluralrules.js", "pluralrules.clutz.d.ts"],
    lenient = True,
    deps = [":localefeature"],
)

closure_js_library(
    name = "relativedatetimeformat",
    srcs = ["relativedatetimeformat.js", "relativedatetimeformat.clutz.d.ts"],
    lenient = True,
    deps = [
        ":localefeature",
        ":messageformat",
        ":relativedatetimesymbols",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "relativedatetimesymbols",
    srcs = ["relativedatetimesymbols.js", "relativedatetimesymbols.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "relativedatetimesymbolsext",
    srcs = ["relativedatetimesymbolsext.js", "relativedatetimesymbolsext.clutz.d.ts"],
    lenient = True,
    deps = [":relativedatetimesymbols"],
)

closure_js_library(
    name = "timezone",
    srcs = ["timezone.js", "timezone.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/date:datelike",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "uchar",
    srcs = ["uchar.js", "uchar.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "ucharnames",
    srcs = ["ucharnames.js", "ucharnames.clutz.d.ts"],
    lenient = True,
    deps = [":uchar"],
)
