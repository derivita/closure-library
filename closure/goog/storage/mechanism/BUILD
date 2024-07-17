load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "errorcode",
    srcs = ["errorcode.js", "errorcode.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "errorhandlingmechanism",
    srcs = ["errorhandlingmechanism.js", "errorhandlingmechanism.d.ts"],
    lenient = True,
    deps = [":mechanism"],
)

closure_js_library(
    name = "html5localstorage",
    srcs = ["html5localstorage.js", "html5localstorage.d.ts"],
    lenient = True,
    deps = [":html5webstorage"],
)

closure_js_library(
    name = "html5sessionstorage",
    srcs = ["html5sessionstorage.js", "html5sessionstorage.d.ts"],
    lenient = True,
    deps = [":html5webstorage"],
)

closure_js_library(
    name = "html5webstorage",
    srcs = ["html5webstorage.js", "html5webstorage.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":iterablemechanism",
        "//closure/goog/asserts",
        "//closure/goog/iter",
    ],
)

closure_js_library(
    name = "ieuserdata",
    srcs = ["ieuserdata.js", "ieuserdata.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":iterablemechanism",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/structs:map",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "iterablemechanism",
    srcs = ["iterablemechanism.js", "iterablemechanism.d.ts"],
    lenient = True,
    deps = [
        ":mechanism",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/iter",
        "//closure/goog/iter:es6",
    ],
)

closure_js_library(
    name = "iterablemechanismtests",
    testonly = 1,
    srcs = ["iterablemechanismtests.js", "iterablemechanismtests.d.ts"],
    lenient = True,
    deps = [
        ":iterablemechanism",
        ":mechanismtestdefinition",
        "//closure/goog/iter",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanism",
    srcs = ["mechanism.js", "mechanism.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "mechanismfactory",
    srcs = ["mechanismfactory.js", "mechanismfactory.d.ts"],
    lenient = True,
    deps = [
        ":html5localstorage",
        ":html5sessionstorage",
        ":ieuserdata",
        ":iterablemechanism",
        ":prefixedmechanism",
    ],
)

closure_js_library(
    name = "mechanismseparationtests",
    testonly = 1,
    srcs = ["mechanismseparationtests.js", "mechanismseparationtests.d.ts"],
    lenient = True,
    deps = [
        ":iterablemechanism",
        ":mechanismtestdefinition",
        "//closure/goog/iter",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanismsharingtests",
    testonly = 1,
    srcs = ["mechanismsharingtests.js", "mechanismsharingtests.d.ts"],
    lenient = True,
    deps = [
        ":iterablemechanism",
        ":mechanismtestdefinition",
        "//closure/goog/iter",
        "//closure/goog/testing:asserts",
    ],
)

closure_js_library(
    name = "mechanismtestdefinition",
    testonly = 1,
    srcs = ["mechanismtestdefinition.js", "mechanismtestdefinition.d.ts"],
    lenient = True,
    deps = ["//closure/goog/debug"],
)

closure_js_library(
    name = "mechanismtests",
    testonly = 1,
    srcs = ["mechanismtests.js", "mechanismtests.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":mechanism",
        ":mechanismtestdefinition",
        "//closure/goog/testing:asserts",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
        "//closure/goog/useragent:product_isversion",
    ],
)

closure_js_library(
    name = "prefixedmechanism",
    srcs = ["prefixedmechanism.js", "prefixedmechanism.d.ts"],
    lenient = True,
    deps = [
        ":iterablemechanism",
        "//closure/goog/iter",
    ],
)
