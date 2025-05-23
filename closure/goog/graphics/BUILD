load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractgraphics",
    srcs = [
        "abstractgraphics.js", "abstractgraphics.d.ts",
        "affinetransform.js", "affinetransform.d.ts",
        "element.js", "element.d.ts",
        "ellipseelement.js", "ellipseelement.d.ts",
        "fill.js", "fill.d.ts",
        "font.js", "font.d.ts",
        "groupelement.js", "groupelement.d.ts",
        "imageelement.js", "imageelement.d.ts",
        "path.js", "path.d.ts",
        "pathelement.js", "pathelement.d.ts",
        "rectelement.js", "rectelement.d.ts",
        "solidfill.js", "solidfill.d.ts",
        "stroke.js", "stroke.d.ts",
        "strokeandfillelement.js", "strokeandfillelement.d.ts",
        "textelement.js", "textelement.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:listenable",
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/ui:component",
    ],
)

alias(
    name = "affinetransform",
    actual = ":abstractgraphics",
)

alias(
    name = "canvaselement",
    actual = ":canvasgraphics",
)

js_library(
    name = "canvasgraphics",
    srcs = [
        "canvaselement.js", "canvaselement.d.ts",
        "canvasgraphics.js", "canvasgraphics.d.ts",
    ],
    lenient = True,
    deps = [
        ":abstractgraphics",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/style",
    ],
)

alias(
    name = "element",
    actual = ":abstractgraphics",
)

alias(
    name = "ellipseelement",
    actual = ":abstractgraphics",
)

alias(
    name = "fill",
    actual = ":abstractgraphics",
)

alias(
    name = "font",
    actual = ":abstractgraphics",
)

js_library(
    name = "graphics",
    srcs = [
        "graphics.js", "graphics.d.ts",
    ],
    lenient = True,
    deps = [
        ":abstractgraphics",
        ":canvasgraphics",
        ":svggraphics",
        "//closure/goog/dom",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "groupelement",
    actual = ":abstractgraphics",
)

alias(
    name = "imageelement",
    actual = ":abstractgraphics",
)

js_library(
    name = "lineargradient",
    srcs = ["lineargradient.js", "lineargradient.d.ts"],
    lenient = True,
    deps = [
        ":abstractgraphics",
        "//closure/goog/asserts",
    ],
)

alias(
    name = "path",
    actual = ":abstractgraphics",
)

alias(
    name = "pathelement",
    actual = ":abstractgraphics",
)

js_library(
    name = "paths",
    srcs = ["paths.js", "paths.d.ts"],
    lenient = True,
    deps = [
        ":abstractgraphics",
        "//closure/goog/math:coordinate",
    ],
)

alias(
    name = "rectelement",
    actual = ":abstractgraphics",
)

alias(
    name = "solidfill",
    actual = ":abstractgraphics",
)

alias(
    name = "stroke",
    actual = ":abstractgraphics",
)

alias(
    name = "strokeandfillelement",
    actual = ":abstractgraphics",
)

alias(
    name = "svgelement",
    actual = ":svggraphics",
)

js_library(
    name = "svggraphics",
    srcs = [
        "svgelement.js", "svgelement.d.ts",
        "svggraphics.js", "svggraphics.d.ts",
    ],
    lenient = True,
    deps = [
        ":abstractgraphics",
        ":lineargradient",
        "//closure/goog/dom",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/math",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "textelement",
    actual = ":graphics",
)
