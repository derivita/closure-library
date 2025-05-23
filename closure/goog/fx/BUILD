load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractdragdrop",
    srcs = ["abstractdragdrop.js", "abstractdragdrop.d.ts"],
    lenient = True,
    deps = [
        ":dragger",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
    ],
)

js_library(
    name = "animation",
    srcs = ["animation.js", "animation.d.ts"],
    lenient = True,
    deps = [
        ":transition",
        ":transitionbase",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events:event",
        "//closure/goog/fx/anim",
    ],
)

js_library(
    name = "animationqueue",
    srcs = ["animationqueue.js", "animationqueue.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        ":transition",
        ":transitionbase",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/events",
        "//closure/goog/events:event",
    ],
)

js_library(
    name = "cssspriteanimation",
    srcs = ["cssspriteanimation.js", "cssspriteanimation.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "dom",
    srcs = ["dom.js", "dom.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        ":transition",
        "//closure/goog/color",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
    ],
)

js_library(
    name = "dragdrop",
    srcs = ["dragdrop.js", "dragdrop.d.ts"],
    lenient = True,
    deps = [":abstractdragdrop"],
)

js_library(
    name = "dragdropgroup",
    srcs = ["dragdropgroup.js", "dragdropgroup.d.ts"],
    lenient = True,
    deps = [
        ":abstractdragdrop",
        "//closure/goog/dom",
    ],
)

js_library(
    name = "dragger",
    srcs = ["dragger.js", "dragger.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "draglistgroup",
    srcs = ["draglistgroup.js", "draglistgroup.d.ts"],
    lenient = True,
    deps = [
        ":dragger",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventid",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

js_library(
    name = "dragscrollsupport",
    srcs = ["dragscrollsupport.js", "dragscrollsupport.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

js_library(
    name = "easing",
    srcs = ["easing.js", "easing.d.ts"],
    lenient = True,
)

js_library(
    name = "fx",
    srcs = ["fx.js", "fx.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        ":easing",
        ":transition",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "transition",
    srcs = ["transition.js", "transition.d.ts"],
    lenient = True,
)

js_library(
    name = "transitionbase",
    srcs = ["transitionbase.js", "transitionbase.d.ts"],
    lenient = True,
    deps = [
        ":transition",
        "//closure/goog/events:eventtarget",
    ],
)
