load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "assertionfailure",
    testonly = True,
    srcs = [
        "assertionfailure.clutz.d.ts",
        "assertionfailure.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "asserts",
    testonly = True,
    srcs = [
        "asserts.clutz.d.ts",
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

closure_js_library(
    name = "asynctestcase",
    testonly = True,
    srcs = [
        "asynctestcase.clutz.d.ts",
        "asynctestcase.js",
    ],
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
    srcs = [
        "benchmark.clutz.d.ts",
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

closure_js_library(
    name = "continuationtestcase",
    testonly = True,
    srcs = [
        "continuationtestcase.clutz.d.ts",
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

closure_js_library(
    name = "deferredtestcase",
    testonly = True,
    srcs = [
        "deferredtestcase.clutz.d.ts",
        "deferredtestcase.js",
    ],
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
    srcs = [
        "dom.clutz.d.ts",
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

closure_js_library(
    name = "expectedfailures",
    testonly = True,
    srcs = [
        "expectedfailures.clutz.d.ts",
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

closure_js_library(
    name = "functionmock",
    testonly = True,
    srcs = [
        "functionmock.clutz.d.ts",
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

closure_js_library(
    name = "graphics",
    testonly = True,
    srcs = [
        "graphics.clutz.d.ts",
        "graphics.js",
    ],
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/graphics:path",
    ],
)

closure_js_library(
    name = "jstdasyncwrapper",
    testonly = True,
    srcs = [
        "jstdasyncwrapper.clutz.d.ts",
        "jstdasyncwrapper.js",
    ],
    lenient = True,
    deps = ["//closure/goog/promise"],
)

closure_js_library(
    name = "jstdtestcaseadapter",
    testonly = True,
    srcs = [
        "jstdtestcaseadapter.clutz.d.ts",
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

closure_js_library(
    name = "jsunit",
    testonly = True,
    srcs = [
        "jsunit.clutz.d.ts",
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

closure_js_library(
    name = "jsunitexception",
    testonly = True,
    srcs = [
        "jsunitexception.clutz.d.ts",
        "jsunitexception.js",
    ],
    lenient = True,
    deps = [":stacktrace"],
)

closure_js_library(
    name = "loosemock",
    testonly = True,
    srcs = [
        "loosemock.clutz.d.ts",
        "loosemock.js",
    ],
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
        "mock.clutz.d.ts",
        "mock.js",
        "mockmatchers.clutz.d.ts",
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

closure_js_library(
    name = "mockclassfactory",
    testonly = True,
    srcs = [
        "mockclassfactory.clutz.d.ts",
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

closure_js_library(
    name = "mockclock",
    testonly = True,
    srcs = [
        "mockclock.clutz.d.ts",
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

closure_js_library(
    name = "mockcontrol",
    testonly = True,
    srcs = [
        "mockcontrol.clutz.d.ts",
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

closure_js_library(
    name = "mockinterface",
    testonly = True,
    srcs = [
        "mockinterface.clutz.d.ts",
        "mockinterface.js",
    ],
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
    srcs = [
        "mockrandom.clutz.d.ts",
        "mockrandom.js",
    ],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "mockrange",
    testonly = True,
    srcs = [
        "mockrange.clutz.d.ts",
        "mockrange.js",
    ],
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
    srcs = [
        "mockstorage.clutz.d.ts",
        "mockstorage.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "mockuseragent",
    testonly = True,
    srcs = [
        "mockuseragent.clutz.d.ts",
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

closure_js_library(
    name = "multitestrunner",
    testonly = True,
    srcs = [
        "multitestrunner.clutz.d.ts",
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

closure_js_library(
    name = "objectpropertystring",
    testonly = True,
    srcs = [
        "objectpropertystring.clutz.d.ts",
        "objectpropertystring.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "objects",
    testonly = True,
    srcs = [
        "objects.clutz.d.ts",
        "objects.js",
    ],
    lenient = True,
    deps = [":asserts"],
)

closure_js_library(
    name = "parallel_closure_test_suite",
    testonly = True,
    srcs = [
        "parallel_closure_test_suite.clutz.d.ts",
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

closure_js_library(
    name = "performancetable",
    testonly = True,
    srcs = [
        "performancetable.clutz.d.ts",
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

closure_js_library(
    name = "performancetimer",
    testonly = True,
    srcs = [
        "performancetimer.clutz.d.ts",
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

closure_js_library(
    name = "propertyreplacer",
    testonly = True,
    srcs = [
        "propertyreplacer.clutz.d.ts",
        "propertyreplacer.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "pseudorandom",
    testonly = True,
    srcs = [
        "pseudorandom.clutz.d.ts",
        "pseudorandom.js",
    ],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

closure_js_library(
    name = "recordfunction",
    testonly = True,
    srcs = [
        "functioncall.clutz.d.ts",
        "functioncall.js",
        "recordconstructor.clutz.d.ts",
        "recordconstructor.js",
        "recordfunction.clutz.d.ts",
        "recordfunction.js",
    ],
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
    srcs = [
        "shardingtestcase.clutz.d.ts",
        "shardingtestcase.js",
    ],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "singleton",
    testonly = True,
    srcs = [
        "singleton.clutz.d.ts",
        "singleton.js",
    ],
    lenient = True,
    deps = ["//closure/goog/singleton"],
)

closure_js_library(
    name = "stacktrace",
    testonly = True,
    srcs = [
        "stacktrace.clutz.d.ts",
        "stacktrace.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "strictmock",
    testonly = True,
    srcs = [
        "strictmock.clutz.d.ts",
        "strictmock.js",
    ],
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
    srcs = [
        "testcase.clutz.d.ts",
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

closure_js_library(
    name = "cspviolationobserver",
    testonly = True,
    srcs = [
        "cspviolationobserver.clutz.d.ts",
        "cspviolationobserver.js",
    ],
    lenient = True,
    deps = [":cspviolationobserver_externs"],
)

closure_js_library(
    name = "cspviolationobserver_externs",
    testonly = True,
    srcs = [
        "cspviolationobserver_externs.clutz.d.ts",
        "cspviolationobserver_externs.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "testqueue",
    testonly = True,
    srcs = [
        "testqueue.clutz.d.ts",
        "testqueue.js",
    ],
    lenient = True,
)

closure_js_library(
    name = "testrunner",
    testonly = True,
    srcs = [
        "testrunner.clutz.d.ts",
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

closure_js_library(
    name = "testsuite",
    testonly = True,
    srcs = [
        "testsuite.clutz.d.ts",
        "testsuite.js",
    ],
    lenient = True,
    deps = [
        ":testcase",
        "//closure/goog/labs/testing:environment",
    ],
)
