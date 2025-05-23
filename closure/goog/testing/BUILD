load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "assertionfailure",
    testonly = True,
    srcs = [
        "assertionfailure.d.ts",
        "assertionfailure.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "asserts",
    testonly = True,
    srcs = [
        "asserts.d.ts",
        "asserts.js",
    ],
    lenient = True,
    deps = [
        ":jsunitexception",
        "//closure/goog/dom:safe",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string",
        "//closure/goog/string:const",
    ],
)

js_library(
    name = "asynctestcase",
    testonly = True,
    srcs = [
        "asynctestcase.d.ts",
        "asynctestcase.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "benchmark",
    testonly = True,
    srcs = [
        "benchmark.d.ts",
        "benchmark.js",
    ],
    lenient = True,
    deps = [
        ":performancetable",
        ":performancetimer",
        ":testcase",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

js_library(
    name = "continuationtestcase",
    testonly = True,
    srcs = [
        "continuationtestcase.d.ts",
        "continuationtestcase.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        "//closure/goog/array",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
    ],
)

js_library(
    name = "deferredtestcase",
    testonly = True,
    srcs = [
        "deferredtestcase.d.ts",
        "deferredtestcase.js",
    ],
    lenient = True,
    deps = [
        ":asynctestcase",
        ":testcase",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "dom",
    testonly = True,
    srcs = [
        "dom.d.ts",
        "dom.js",
    ],
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

js_library(
    name = "expectedfailures",
    testonly = True,
    srcs = [
        "expectedfailures.d.ts",
        "expectedfailures.js",
    ],
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

js_library(
    name = "functionmock",
    testonly = True,
    srcs = [
        "functionmock.d.ts",
        "functionmock.js",
    ],
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

js_library(
    name = "graphics",
    testonly = True,
    srcs = [
        "graphics.d.ts",
        "graphics.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/graphics:path",
    ],
)

js_library(
    name = "jstdasyncwrapper",
    testonly = True,
    srcs = [
        "jstdasyncwrapper.d.ts",
        "jstdasyncwrapper.js",
    ],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

js_library(
    name = "jstdtestcaseadapter",
    testonly = True,
    srcs = [
        "jstdtestcaseadapter.d.ts",
        "jstdtestcaseadapter.js",
    ],
    lenient = True,
    deps = [
        ":jstdasyncwrapper",
        ":jsunit",
        ":testcase",
        "//closure/goog/async:run",
        "//closure/goog/functions",
    ],
)

js_library(
    name = "jsunit",
    testonly = True,
    srcs = [
        "jsunit.d.ts",
        "jsunit.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        ":testcase",
        ":testrunner",
        "//closure/goog/dom:tagname",
    ],
)

js_library(
    name = "jsunitexception",
    testonly = True,
    srcs = [
        "jsunitexception.d.ts",
        "jsunitexception.js",
    ],
    lenient = True,
    deps = [":stacktrace"],
)

js_library(
    name = "loosemock",
    testonly = True,
    srcs = [
        "loosemock.d.ts",
        "loosemock.js",
    ],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "mock",
    testonly = True,
    srcs = [
        "mock.d.ts",
        "mock.js",
        "mockmatchers.d.ts",
        "mockmatchers.js",
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

js_library(
    name = "mockclassfactory",
    testonly = True,
    srcs = [
        "mockclassfactory.d.ts",
        "mockclassfactory.js",
    ],
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

js_library(
    name = "mockclock",
    testonly = True,
    srcs = [
        "mockclock.d.ts",
        "mockclock.js",
    ],
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

js_library(
    name = "mockcontrol",
    testonly = True,
    srcs = [
        "mockcontrol.d.ts",
        "mockcontrol.js",
    ],
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

js_library(
    name = "mockinterface",
    testonly = True,
    srcs = [
        "mockinterface.d.ts",
        "mockinterface.js",
    ],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

js_library(
    name = "mockmatchers",
    testonly = True,
    lenient = True,
    exports = [":mock"],
)

js_library(
    name = "mockrandom",
    testonly = True,
    srcs = [
        "mockrandom.d.ts",
        "mockrandom.js",
    ],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

js_library(
    name = "mockrange",
    testonly = True,
    srcs = [
        "mockrange.d.ts",
        "mockrange.js",
    ],
    lenient = True,
    deps = [
        ":loosemock",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:range",
    ],
)

js_library(
    name = "mockstorage",
    testonly = True,
    srcs = [
        "mockstorage.d.ts",
        "mockstorage.js",
    ],
    lenient = True,
)

js_library(
    name = "mockuseragent",
    testonly = True,
    srcs = [
        "mockuseragent.d.ts",
        "mockuseragent.js",
    ],
    lenient = True,
    deps = [
        ":propertyreplacer",
        "//closure/goog/disposable",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "multitestrunner",
    testonly = True,
    srcs = [
        "multitestrunner.d.ts",
        "multitestrunner.js",
    ],
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

js_library(
    name = "objectpropertystring",
    testonly = True,
    srcs = [
        "objectpropertystring.d.ts",
        "objectpropertystring.js",
    ],
    lenient = True,
)

js_library(
    name = "objects",
    testonly = True,
    srcs = [
        "objects.d.ts",
        "objects.js",
    ],
    lenient = True,
    deps = [":asserts"],
)

js_library(
    name = "parallel_closure_test_suite",
    testonly = True,
    srcs = [
        "parallel_closure_test_suite.d.ts",
        "parallel_closure_test_suite.js",
    ],
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

js_library(
    name = "performancetable",
    testonly = True,
    srcs = [
        "performancetable.d.ts",
        "performancetable.js",
    ],
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

js_library(
    name = "performancetimer",
    testonly = True,
    srcs = [
        "performancetimer.d.ts",
        "performancetimer.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math",
        "//closure/goog/promise",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

js_library(
    name = "propertyreplacer",
    testonly = True,
    srcs = [
        "propertyreplacer.d.ts",
        "propertyreplacer.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "pseudorandom",
    testonly = True,
    srcs = [
        "pseudorandom.d.ts",
        "pseudorandom.js",
    ],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

js_library(
    name = "recordfunction",
    testonly = True,
    srcs = [
        "functioncall.d.ts",
        "functioncall.js",
        "recordconstructor.d.ts",
        "recordconstructor.js",
        "recordfunction.d.ts",
        "recordfunction.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/functions",
        "//closure/goog/promise",
    ],
)

js_library(
    name = "shardingtestcase",
    testonly = True,
    srcs = [
        "shardingtestcase.d.ts",
        "shardingtestcase.js",
    ],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "singleton",
    testonly = True,
    srcs = [
        "singleton.d.ts",
        "singleton.js",
    ],
    lenient = True,
    deps = ["//closure/goog/singleton"],
)

js_library(
    name = "stacktrace",
    testonly = True,
    srcs = [
        "stacktrace.d.ts",
        "stacktrace.js",
    ],
    lenient = True,
)

js_library(
    name = "strictmock",
    testonly = True,
    srcs = [
        "strictmock.d.ts",
        "strictmock.js",
    ],
    lenient = True,
    deps = [
        ":mock",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "testcase",
    testonly = True,
    srcs = [
        "testcase.d.ts",
        "testcase.js",
    ],
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

js_library(
    name = "cspviolationobserver",
    testonly = True,
    srcs = [
        "cspviolationobserver.d.ts",
        "cspviolationobserver.js",
    ],
    lenient = True,
    deps = [":cspviolationobserver_externs"],
)

js_library(
    name = "cspviolationobserver_externs",
    testonly = True,
    srcs = [
        "cspviolationobserver_externs.d.ts",
        "cspviolationobserver_externs.js",
    ],
    lenient = True,
)

js_library(
    name = "testqueue",
    testonly = True,
    srcs = [
        "testqueue.d.ts",
        "testqueue.js",
    ],
    lenient = True,
)

js_library(
    name = "testrunner",
    testonly = True,
    srcs = [
        "testrunner.d.ts",
        "testrunner.js",
    ],
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

js_library(
    name = "testsuite",
    testonly = True,
    srcs = [
        "testsuite.d.ts",
        "testsuite.js",
    ],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/labs/testing:environment",
    ],
)
