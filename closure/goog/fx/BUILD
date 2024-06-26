load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "abstractdragdrop",
    srcs = ["abstractdragdrop.js", "abstractdragdrop.clutz.d.ts"],
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

closure_js_library(
    name = "animation",
    srcs = ["animation.js", "animation.clutz.d.ts"],
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

closure_js_library(
    name = "animationqueue",
    srcs = ["animationqueue.js", "animationqueue.clutz.d.ts"],
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

closure_js_library(
    name = "cssspriteanimation",
    srcs = ["cssspriteanimation.js", "cssspriteanimation.clutz.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        "//closure/goog/math:box",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "dom",
    srcs = ["dom.js", "dom.clutz.d.ts"],
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

closure_js_library(
    name = "dragdrop",
    srcs = ["dragdrop.js", "dragdrop.clutz.d.ts"],
    lenient = True,
    deps = [":abstractdragdrop"],
)

closure_js_library(
    name = "dragdropgroup",
    srcs = ["dragdropgroup.js", "dragdropgroup.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractdragdrop",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "dragger",
    srcs = ["dragger.js", "dragger.clutz.d.ts"],
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

closure_js_library(
    name = "draglistgroup",
    srcs = ["draglistgroup.js", "draglistgroup.clutz.d.ts"],
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

closure_js_library(
    name = "dragscrollsupport",
    srcs = ["dragscrollsupport.js", "dragscrollsupport.clutz.d.ts"],
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

closure_js_library(
    name = "easing",
    srcs = ["easing.js", "easing.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "fx",
    srcs = ["fx.js", "fx.clutz.d.ts"],
    lenient = True,
    deps = [
        ":animation",
        ":easing",
        ":transition",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "transition",
    srcs = ["transition.js", "transition.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "transitionbase",
    srcs = ["transitionbase.js", "transitionbase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":transition",
        "//closure/goog/events:eventtarget",
    ],
)
