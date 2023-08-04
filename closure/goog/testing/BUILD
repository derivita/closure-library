load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "assertionfailure",
    testonly = True,
    srcs = ["assertionfailure.js", "assertionfailure.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "asserts",
    testonly = True,
    srcs = ["asserts.js", "asserts.clutz.d.ts"],
    lenient = True,
    deps = [
        ":jsunitexception",
        "//closure/goog/dom:safe",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "asynctestcase",
    testonly = True,
    srcs = ["asynctestcase.js", "asynctestcase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "benchmark",
    testonly = True,
    srcs = ["benchmark.js", "benchmark.clutz.d.ts"],
    lenient = True,
    deps = [
        ":performancetable",
        ":performancetimer",
        ":testcase",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "continuationtestcase",
    testonly = True,
    srcs = ["continuationtestcase.js", "continuationtestcase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog/array",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "deferredtestcase",
    testonly = True,
    srcs = ["deferredtestcase.js", "deferredtestcase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asynctestcase",
        ":testcase",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "dom",
    testonly = True,
    srcs = ["dom.js", "dom.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:nodeiterator",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/iter",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "expectedfailures",
    testonly = True,
    srcs = ["expectedfailures.js", "expectedfailures.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        ":jsunitexception",
        ":testcase",
        "//closure/goog/asserts",
        "//closure/goog/debug:divconsole",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/log",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "functionmock",
    testonly = True,
    srcs = ["functionmock.js", "functionmock.clutz.d.ts"],
    lenient = True,
    deps = [
        ":loosemock",
        ":mock",
        ":mockinterface",
        ":propertyreplacer",
        ":strictmock",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "graphics",
    testonly = True,
    srcs = ["graphics.js", "graphics.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/graphics:path",
    ],
)

closure_js_library(
    name = "jstdasyncwrapper",
    testonly = True,
    srcs = ["jstdasyncwrapper.js", "jstdasyncwrapper.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "jstdtestcaseadapter",
    testonly = True,
    srcs = ["jstdtestcaseadapter.js", "jstdtestcaseadapter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":jstdasyncwrapper",
        ":jsunit",
        ":testcase",
        "//closure/goog/async:run",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "jsunit",
    testonly = True,
    srcs = ["jsunit.js", "jsunit.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        ":testrunner",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "jsunitexception",
    testonly = True,
    srcs = ["jsunitexception.js", "jsunitexception.clutz.d.ts"],
    lenient = True,
    deps = [":stacktrace"],
)

closure_js_library(
    name = "loosemock",
    testonly = True,
    srcs = ["loosemock.js", "loosemock.clutz.d.ts"],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "mock",
    testonly = True,
    srcs = [
        "mock.js", "mock.clutz.d.ts",
        "mockmatchers.js", "mockmatchers.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":asserts",
        ":jsunitexception",
        ":mockinterface",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/promise:resolver",
    ],
)

closure_js_library(
    name = "mockclassfactory",
    testonly = True,
    srcs = ["mockclassfactory.js", "mockclassfactory.clutz.d.ts"],
    lenient = True,
    deps = [
        ":loosemock",
        ":mockmatchers",
        ":strictmock",
        ":testcase",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mockclock",
    testonly = True,
    srcs = ["mockclock.js", "mockclock.clutz.d.ts"],
    lenient = True,
    deps = [
        ":propertyreplacer",
        "//closure/goog/asserts",
        "//closure/goog/async:nexttick",
        "//closure/goog/async:run",
        "//closure/goog/disposable",
        "//closure/goog/promise",
        "//closure/goog/promise:thenable",
        "//closure/goog/testing/events",
    ],
)

closure_js_library(
    name = "mockcontrol",
    testonly = True,
    srcs = ["mockcontrol.js", "mockcontrol.clutz.d.ts"],
    lenient = True,
    deps = [
        ":functionmock",
        ":loosemock",
        ":mockinterface",
        ":strictmock",
        "//closure/goog/array",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "mockinterface",
    testonly = True,
    srcs = ["mockinterface.js", "mockinterface.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "mockmatchers",
    testonly = True,
    lenient = True,
    exports = [":mock"],
)

closure_js_library(
    name = "mockrandom",
    testonly = True,
    srcs = ["mockrandom.js", "mockrandom.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "mockrange",
    testonly = True,
    srcs = ["mockrange.js", "mockrange.clutz.d.ts"],
    lenient = True,
    deps = [
        ":loosemock",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:range",
    ],
)

closure_js_library(
    name = "mockstorage",
    testonly = True,
    srcs = ["mockstorage.js", "mockstorage.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "mockuseragent",
    testonly = True,
    srcs = ["mockuseragent.js", "mockuseragent.clutz.d.ts"],
    lenient = True,
    deps = [
        ":propertyreplacer",
        "//closure/goog/disposable",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "multitestrunner",
    testonly = True,
    srcs = ["multitestrunner.js", "multitestrunner.clutz.d.ts"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/ui:serverchart",
        "//closure/goog/ui:tablesorter",
    ],
)

closure_js_library(
    name = "objectpropertystring",
    testonly = True,
    srcs = ["objectpropertystring.js", "objectpropertystring.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "objects",
    testonly = True,
    srcs = ["objects.js", "objects.clutz.d.ts"],
    lenient = True,
    deps = [":asserts"],
)

closure_js_library(
    name = "parallel_closure_test_suite",
    testonly = True,
    srcs = ["parallel_closure_test_suite.js", "parallel_closure_test_suite.clutz.d.ts"],
    lenient = True,
    deps = [
        ":multitestrunner",
        ":testcase",
        ":testsuite",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/json",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "performancetable",
    testonly = True,
    srcs = ["performancetable.js", "performancetable.clutz.d.ts"],
    lenient = True,
    deps = [
        ":performancetimer",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/string:const",
    ],
)

closure_js_library(
    name = "performancetimer",
    testonly = True,
    srcs = ["performancetimer.js", "performancetimer.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math",
        "//closure/goog/promise",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "propertyreplacer",
    testonly = True,
    srcs = ["propertyreplacer.js", "propertyreplacer.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "pseudorandom",
    testonly = True,
    srcs = ["pseudorandom.js", "pseudorandom.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "recordfunction",
    testonly = True,
    srcs = ["recordfunction.js", "recordfunction.clutz.d.ts"],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/functions",
        "//closure/goog/promise",
    ],
)

closure_js_library(
    name = "shardingtestcase",
    testonly = True,
    srcs = ["shardingtestcase.js", "shardingtestcase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "singleton",
    testonly = True,
    srcs = ["singleton.js", "singleton.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/singleton"],
)

closure_js_library(
    name = "stacktrace",
    testonly = True,
    srcs = ["stacktrace.js", "stacktrace.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "strictmock",
    testonly = True,
    srcs = ["strictmock.js", "strictmock.clutz.d.ts"],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "testcase",
    testonly = True,
    srcs = ["testcase.js", "testcase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cspviolationobserver",
        ":jsunitexception",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/url",
    ],
)

closure_js_library(
    name = "cspviolationobserver",
    testonly = True,
    srcs = ["cspviolationobserver.js", "cspviolationobserver.clutz.d.ts"],
    lenient = True,
    deps = [":cspviolationobserver_externs"],
)

closure_js_library(
    name = "cspviolationobserver_externs",
    testonly = True,
    srcs = ["cspviolationobserver_externs.js", "cspviolationobserver_externs.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "testqueue",
    testonly = True,
    srcs = ["testqueue.js", "testqueue.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "testrunner",
    testonly = True,
    srcs = ["testrunner.js", "testrunner.clutz.d.ts"],
    lenient = True,
    deps = [
        ":cspviolationobserver",
        ":testcase",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/json",
    ],
)

closure_js_library(
    name = "testsuite",
    testonly = True,
    srcs = ["testsuite.js", "testsuite.clutz.d.ts"],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/labs/testing:environment",
    ],
)
