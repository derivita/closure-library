load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "jstests_deps",
    testonly = 1,
    lenient = True,
    deps = [
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

js_library(
    name = "bidi",
    srcs = ["bidi.js", "bidi.d.ts"],
    lenient = True,
)

js_library(
    name = "bidiformatter",
    srcs = ["bidiformatter.js", "bidiformatter.d.ts"],
    lenient = True,
    deps = [
        ":bidi",
        "//closure/goog/html:safehtml",
    ],
)

js_library(
    name = "charlistdecompressor",
    srcs = ["charlistdecompressor.js", "charlistdecompressor.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/array",
    ],
)

js_library(
    name = "charpickerdata",
    srcs = ["charpickerdata.js", "charpickerdata.d.ts"],
    lenient = True,
)

js_library(
    name = "cldrversion",
    srcs = ["cldrversion.js", "cldrversion.d.ts"],
    lenient = True,
)

js_library(
    name = "collation",
    srcs = ["collation.js", "collation.d.ts"],
    lenient = True,
)

js_library(
    name = "compactnumberformatsymbols",
    srcs = ["compactnumberformatsymbols.js", "compactnumberformatsymbols.d.ts"],
    lenient = True,
)

js_library(
    name = "compactnumberformatsymbolsext",
    srcs = ["compactnumberformatsymbolsext.js", "compactnumberformatsymbolsext.d.ts"],
    lenient = True,
    deps = [":compactnumberformatsymbols"],
)

js_library(
    name = "currency",
    srcs = ["currency.js", "currency.d.ts"],
    lenient = True,
)

js_library(
    name = "currencycodemap",
    srcs = ["currencycodemap.js", "currencycodemap.d.ts"],
    lenient = True,
)

js_library(
    name = "dateintervalformat",
    srcs = ["dateintervalformat.js", "dateintervalformat.d.ts"],
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

js_library(
    name = "dateintervalpatterns",
    srcs = ["dateintervalpatterns.js", "dateintervalpatterns.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalsymbols",
    ],
)

js_library(
    name = "dateintervalpatternsext",
    srcs = ["dateintervalpatternsext.js", "dateintervalpatternsext.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalpatterns",
    ],
)

js_library(
    name = "dateintervalsymbols",
    srcs = ["dateintervalsymbols.js", "dateintervalsymbols.d.ts"],
    lenient = True,
    deps = [":cldrversion"],
)

js_library(
    name = "dateintervalsymbolsext",
    srcs = ["dateintervalsymbolsext.js", "dateintervalsymbolsext.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":dateintervalsymbols",
    ],
)

js_library(
    name = "datetimeformat",
    srcs = ["datetimeformat.js", "datetimeformat.d.ts"],
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

js_library(
    name = "datetimeparse",
    srcs = ["datetimeparse.js", "datetimeparse.d.ts"],
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

js_library(
    name = "datetimepatternstype",
    srcs = ["datetimepatternstype.js", "datetimepatternstype.d.ts"],
    lenient = True,
)

js_library(
    name = "datetimepatterns",
    srcs = ["datetimepatterns.js", "datetimepatterns.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimepatternstype",
    ],
)

js_library(
    name = "datetimepatternsext",
    srcs = ["datetimepatternsext.js", "datetimepatternsext.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimepatterns",
        ":datetimepatternstype",
    ],
)

js_library(
    name = "datetimesymbols",
    srcs = ["datetimesymbols.js", "datetimesymbols.d.ts"],
    lenient = True,
    deps = [":cldrversion"],
)

js_library(
    name = "dayperiodsymbols",
    srcs = ["dayperiodsymbols.js", "dayperiodsymbols.d.ts"],
    lenient = True,
)

js_library(
    name = "datetimesymbolsext",
    srcs = ["datetimesymbolsext.js", "datetimesymbolsext.d.ts"],
    lenient = True,
    deps = [
        ":cldrversion",
        ":datetimesymbols",
    ],
)

js_library(
    name = "durationformat",
    srcs = ["durationformat.js", "durationformat.d.ts"],
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

js_library(
    name = "durationsymbols",
    srcs = ["durationsymbols.js", "durationsymbols.d.ts"],
    lenient = True,
    deps = [":durationsymboltypes"],
)

js_library(
    name = "durationsymbolsext",
    srcs = ["durationsymbolsext.js", "durationsymbolsext.d.ts"],
    lenient = True,
    deps = [
        ":durationsymbols",
        ":durationsymboltypes",
    ],
)

js_library(
    name = "durationsymboltypes",
    srcs = ["durationsymboltypes.js", "durationsymboltypes.d.ts"],
    lenient = True,
)

js_library(
    name = "graphemebreak",
    srcs = ["graphemebreak.js", "graphemebreak.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/asserts",
        "//closure/goog/structs:inversionmap",
    ],
)

js_library(
    name = "listformat",
    srcs = ["listformat.js", "listformat.d.ts"],
    lenient = True,
    deps = [
        ":listsymbols",
        ":listsymbolsext",
        ":localefeature",
        "//closure/goog/asserts",
        "//closure/goog/string",
    ],
)

js_library(
    name = "listsymbols",
    srcs = [
        "listsymbols.js", "listsymbols.d.ts",
    ],
    lenient = True,
)

js_library(
    name = "listsymbolsext",
    srcs = ["listsymbolsext.js", "listsymbolsext.d.ts"],
    lenient = True,
    deps = [":listsymbols"],
)

js_library(
    name = "localefeature",
    srcs = ["localefeature.js", "localefeature.d.ts"],
    lenient = True,
)

js_library(
    name = "messageformat",
    srcs = ["messageformat.js", "messageformat.d.ts"],
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

js_library(
    name = "messages",
    srcs = ["messages.js", "messages.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

js_library(
    name = "mime",
    srcs = ["mime.js", "mime.d.ts"],
    lenient = True,
    deps = [
        ":uchar",
        "//closure/goog/array",
    ],
)

js_library(
    name = "nativelocaledigits",
    srcs = ["nativelocaledigits.js", "nativelocaledigits.d.ts"],
    lenient = True,
)

js_library(
    name = "numberformat",
    srcs = ["numberformat.js", "numberformat.d.ts"],
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

js_library(
    name = "numberformatsymbols",
    srcs = [
        "numberformatsymbols.js", "numberformatsymbols.d.ts",
        "numberformatsymbolstype.js", "numberformatsymbolstype.d.ts",
    ],
    lenient = True,
)

js_library(
    name = "numberformatsymbolsext",
    srcs = ["numberformatsymbolsext.js", "numberformatsymbolsext.d.ts"],
    lenient = True,
    deps = [":numberformatsymbols"],
)

js_library(
    name = "ordinalrules",
    srcs = ["ordinalrules.js", "ordinalrules.d.ts"],
    lenient = True,
    deps = [":localefeature"],
)

js_library(
    name = "pluralrules",
    srcs = ["pluralrules.js", "pluralrules.d.ts"],
    lenient = True,
    deps = [":localefeature"],
)

js_library(
    name = "relativedatetimeformat",
    srcs = ["relativedatetimeformat.js", "relativedatetimeformat.d.ts"],
    lenient = True,
    deps = [
        ":localefeature",
        ":messageformat",
        ":relativedatetimesymbols",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "relativedatetimesymbols",
    srcs = ["relativedatetimesymbols.js", "relativedatetimesymbols.d.ts"],
    lenient = True,
)

js_library(
    name = "relativedatetimesymbolsext",
    srcs = ["relativedatetimesymbolsext.js", "relativedatetimesymbolsext.d.ts"],
    lenient = True,
    deps = [":relativedatetimesymbols"],
)

js_library(
    name = "timezone",
    srcs = ["timezone.js", "timezone.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/date:datelike",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

js_library(
    name = "uchar",
    srcs = ["uchar.js", "uchar.d.ts"],
    lenient = True,
)

js_library(
    name = "ucharnames",
    srcs = ["ucharnames.js", "ucharnames.d.ts"],
    lenient = True,
    deps = [":uchar"],
)
