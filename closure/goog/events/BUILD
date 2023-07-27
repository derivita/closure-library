load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "actioneventwrapper",
    srcs = ["actioneventwrapper.js", "actioneventwrapper.clutz.d.ts"],
    lenient = True,
    deps = [
        ":eventhandler",
        ":events",
        ":eventtype",
        ":eventwrapper",
        ":keycodes",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "actionhandler",
    srcs = ["actionhandler.js", "actionhandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserevent",
    srcs = ["browserevent.js", "browserevent.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserfeature",
        ":event",
        ":eventtype",
        "//closure/goog/debug",
        "//closure/goog/reflect",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "browserfeature",
    srcs = ["browserfeature.js", "browserfeature.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "event",
    srcs = [
        "event.js", "event.clutz.d.ts",
        "eventlike.js", "eventlike.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":eventid",
        "//closure/goog/disposable",
    ],
)

alias(
    name = "eventhandler",
    actual = ":events",
)

closure_js_library(
    name = "eventid",
    srcs = ["eventid.js", "eventid.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "events",
    srcs = [
        "eventhandler.js", "eventhandler.clutz.d.ts",
        "events.js", "events.clutz.d.ts",
        "eventtarget.js", "eventtarget.clutz.d.ts",
        "eventwrapper.js", "eventwrapper.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":browserevent",
        ":browserfeature",
        ":event",
        ":eventid",
        ":listenable",
        ":listener",
        ":listenermap",
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/debug:errorhandler",
        "//closure/goog/disposable",
        "//closure/goog/object",
    ],
)

alias(
    name = "eventtarget",
    actual = ":events",
)

closure_js_library(
    name = "eventtargettester",
    testonly = 1,
    srcs = ["eventtargettester.js", "eventtargettester.clutz.d.ts"],
    lenient = True,
    deps = [
        ":event",
        ":eventtarget",
        ":listenable",
        "//closure/goog/array",
        "//closure/goog/disposable",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:recordfunction",
    ],
)

closure_js_library(
    name = "eventtype",
    srcs = [
        "eventtype.js", "eventtype.clutz.d.ts",
        "mouseasmouseeventtype.js", "mouseasmouseeventtype.clutz.d.ts",
        "mouseevents.js", "mouseevents.clutz.d.ts",
        "pointerasmouseeventtype.js", "pointerasmouseeventtype.clutz.d.ts",
        "pointerastoucheventtype.js", "pointerastoucheventtype.clutz.d.ts",
        "pointerfallbackeventtype.js", "pointerfallbackeventtype.clutz.d.ts",
        "pointertouchfallbackeventtype.js", "pointertouchfallbackeventtype.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":eventtypehelpers",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "eventtypehelpers",
    srcs = ["eventtypehelpers.js", "eventtypehelpers.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserfeature",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "eventwrapper",
    actual = ":events",
)

closure_js_library(
    name = "filedrophandler",
    srcs = ["filedrophandler.js", "filedrophandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "focushandler",
    srcs = ["focushandler.js", "focushandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imehandler",
    srcs = ["imehandler.js", "imehandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":event",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "inputhandler",
    srcs = ["inputhandler.js", "inputhandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":keycodes",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keycodes",
    srcs = ["keycodes.js", "keycodes.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keyhandler",
    srcs = [
        "keyevent.js", "keyevent.clutz.d.ts",
        "keyhandler.js", "keyhandler.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "keynames",
    srcs = ["keynames.js", "keynames.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "keys",
    srcs = ["keys.js", "keys.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "listenable",
    srcs = [
        "listenable.js", "listenable.clutz.d.ts",
        "listenablekey.js", "listenablekey.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":event",
        ":eventid",
    ],
)

closure_js_library(
    name = "listener",
    srcs = ["listener.js", "listener.clutz.d.ts"],
    lenient = True,
    deps = [":listenable"],
)

closure_js_library(
    name = "listenermap",
    srcs = ["listenermap.js", "listenermap.clutz.d.ts"],
    lenient = True,
    deps = [
        ":eventid",
        ":listenable",
        ":listener",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mousewheelhandler",
    srcs = ["mousewheelhandler.js", "mousewheelhandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        "//closure/goog/dom",
        "//closure/goog/math",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "onlinehandler",
    srcs = ["onlinehandler.js", "onlinehandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        "//closure/goog/net:networkstatusmonitor",
    ],
)

closure_js_library(
    name = "pastehandler",
    srcs = ["pastehandler.js", "pastehandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        ":keycodes",
        "//closure/goog/async:conditionaldelay",
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "wheelevent",
    srcs = ["wheelevent.js", "wheelevent.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "wheelhandler",
    srcs = ["wheelhandler.js", "wheelhandler.clutz.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":wheelevent",
        "//closure/goog/dom",
        "//closure/goog/style",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)
