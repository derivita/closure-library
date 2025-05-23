load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "actioneventwrapper",
    srcs = ["actioneventwrapper.js", "actioneventwrapper.d.ts"],
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

js_library(
    name = "actionhandler",
    srcs = ["actionhandler.js", "actionhandler.d.ts"],
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

js_library(
    name = "browserevent",
    srcs = ["browserevent.js", "browserevent.d.ts"],
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

js_library(
    name = "browserfeature",
    srcs = ["browserfeature.js", "browserfeature.d.ts"],
    lenient = True,
)

js_library(
    name = "event",
    srcs = [
        "event.js", "event.d.ts",
        "eventlike.js", "eventlike.d.ts",
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

js_library(
    name = "eventid",
    srcs = ["eventid.js", "eventid.d.ts"],
    lenient = True,
)

js_library(
    name = "events",
    srcs = [
        "eventhandler.js", "eventhandler.d.ts",
        "events.js", "events.d.ts",
        "eventtarget.js", "eventtarget.d.ts",
        "eventwrapper.js", "eventwrapper.d.ts",
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

js_library(
    name = "eventtargettester",
    testonly = 1,
    srcs = ["eventtargettester.js", "eventtargettester.d.ts"],
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

js_library(
    name = "eventtype",
    srcs = [
        "eventtype.js", "eventtype.d.ts",
        "mouseasmouseeventtype.js", "mouseasmouseeventtype.d.ts",
        "mouseevents.js", "mouseevents.d.ts",
        "pointerasmouseeventtype.js", "pointerasmouseeventtype.d.ts",
        "pointerastoucheventtype.js", "pointerastoucheventtype.d.ts",
        "pointerfallbackeventtype.js", "pointerfallbackeventtype.d.ts",
        "pointertouchfallbackeventtype.js", "pointertouchfallbackeventtype.d.ts",
    ],
    lenient = True,
    deps = [
        ":eventtypehelpers",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "eventtypehelpers",
    srcs = ["eventtypehelpers.js", "eventtypehelpers.d.ts"],
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

js_library(
    name = "filedrophandler",
    srcs = ["filedrophandler.js", "filedrophandler.d.ts"],
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

js_library(
    name = "focushandler",
    srcs = ["focushandler.js", "focushandler.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":events",
        ":eventtarget",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "imehandler",
    srcs = ["imehandler.js", "imehandler.d.ts"],
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

js_library(
    name = "inputhandler",
    srcs = ["inputhandler.js", "inputhandler.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        ":eventhandler",
        ":keycodes",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "keycodes",
    srcs = ["keycodes.js", "keycodes.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "keyhandler",
    srcs = [
        "keyevent.js", "keyevent.d.ts",
        "keyhandler.js", "keyhandler.d.ts",
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

js_library(
    name = "keynames",
    srcs = ["keynames.js", "keynames.d.ts"],
    lenient = True,
)

js_library(
    name = "keys",
    srcs = ["keys.js", "keys.d.ts"],
    lenient = True,
)

js_library(
    name = "listenable",
    srcs = [
        "listenable.js", "listenable.d.ts",
        "listenablekey.js", "listenablekey.d.ts",
    ],
    lenient = True,
    deps = [
        ":event",
        ":eventid",
    ],
)

js_library(
    name = "listener",
    srcs = ["listener.js", "listener.d.ts"],
    lenient = True,
    deps = [":listenable"],
)

js_library(
    name = "listenermap",
    srcs = ["listenermap.js", "listenermap.d.ts"],
    lenient = True,
    deps = [
        ":eventid",
        ":listenable",
        ":listener",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

js_library(
    name = "mousewheelhandler",
    srcs = ["mousewheelhandler.js", "mousewheelhandler.d.ts"],
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

js_library(
    name = "onlinehandler",
    srcs = ["onlinehandler.js", "onlinehandler.d.ts"],
    lenient = True,
    deps = [
        ":eventhandler",
        ":eventtarget",
        ":eventtype",
        "//closure/goog/net:networkstatusmonitor",
    ],
)

js_library(
    name = "pastehandler",
    srcs = ["pastehandler.js", "pastehandler.d.ts"],
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

js_library(
    name = "wheelevent",
    srcs = ["wheelevent.js", "wheelevent.d.ts"],
    lenient = True,
    deps = [
        ":browserevent",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "wheelhandler",
    srcs = ["wheelhandler.js", "wheelhandler.d.ts"],
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
