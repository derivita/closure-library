load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractbubbleplugin",
    srcs = ["abstractbubbleplugin.js", "abstractbubbleplugin.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:style",
        "//closure/goog/events",
        "//closure/goog/events:actioneventwrapper",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/ui:component",
        "//closure/goog/ui/editor:bubble",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "abstractdialogplugin",
    srcs = ["abstractdialogplugin.js", "abstractdialogplugin.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:range",
        "//closure/goog/editor:field",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/ui/editor:abstractdialog",
    ],
)

js_library(
    name = "abstracttabhandler",
    srcs = ["abstracttabhandler.js", "abstracttabhandler.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/editor:plugin",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:keycodes",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "basictextformatter",
    srcs = ["basictextformatter.js", "basictextformatter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/ui/editor:messages",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "blockquote",
    srcs = ["blockquote.js", "blockquote.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/functions",
        "//closure/goog/log",
    ],
)

js_library(
    name = "emoticons",
    srcs = ["emoticons.js", "emoticons.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/functions",
        "//closure/goog/ui/emoji",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "enterhandler",
    srcs = ["enterhandler.js", "enterhandler.d.ts"],
    lenient = True,
    deps = [
        ":blockquote",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodeoffset",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:browserfeature",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "firststrong",
    srcs = ["firststrong.js", "firststrong.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagiterator",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/i18n:bidi",
        "//closure/goog/i18n:uchar",
        "//closure/goog/iter",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "headerformatter",
    srcs = ["headerformatter.js", "headerformatter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/editor:command",
        "//closure/goog/editor:plugin",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "linkbubble",
    srcs = ["linkbubble.js", "linkbubble.d.ts"],
    lenient = True,
    deps = [
        ":abstractbubbleplugin",
        "//closure/goog/a11y/aria:announcer",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/events:browserevent",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui/editor:messages",
        "//closure/goog/uri:utils",
        "//closure/goog/window",
    ],
)

js_library(
    name = "linkdialogplugin",
    srcs = ["linkdialogplugin.js", "linkdialogplugin.d.ts"],
    lenient = True,
    deps = [
        ":abstractdialogplugin",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/ui/editor:abstractdialog",
        "//closure/goog/ui/editor:linkdialog",
        "//closure/goog/uri:utils",
    ],
)

js_library(
    name = "linkshortcutplugin",
    srcs = ["linkshortcutplugin.js", "linkshortcutplugin.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/editor:command",
        "//closure/goog/editor:link",
        "//closure/goog/editor:plugin",
    ],
)

js_library(
    name = "listtabhandler",
    srcs = ["listtabhandler.js", "listtabhandler.d.ts"],
    lenient = True,
    deps = [
        ":abstracttabhandler",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "loremipsum",
    srcs = ["loremipsum.js", "loremipsum.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "removeformatting",
    srcs = ["removeformatting.js", "removeformatting.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/html:safehtml",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "spacestabhandler",
    srcs = ["spacestabhandler.js", "spacestabhandler.d.ts"],
    lenient = True,
    deps = [
        ":abstracttabhandler",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:range",
    ],
)

js_library(
    name = "tableeditor",
    srcs = ["tableeditor.js", "tableeditor.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/editor:range",
        "//closure/goog/editor:table",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "tagonenterhandler",
    srcs = ["tagonenterhandler.js", "tagonenterhandler.d.ts"],
    lenient = True,
    deps = [
        ":enterhandler",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/dom:tagname",
        "//closure/goog/editor:command",
        "//closure/goog/editor:node",
        "//closure/goog/editor:range",
        "//closure/goog/editor:style",
        "//closure/goog/events:keycodes",
        "//closure/goog/functions",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "undoredo",
    srcs = ["undoredo.js", "undoredo.d.ts"],
    lenient = True,
    deps = [
        ":undoredomanager",
        ":undoredostate",
        "//closure/goog/dom",
        "//closure/goog/dom:abstractrange",
        "//closure/goog/dom:nodeoffset",
        "//closure/goog/dom:range",
        "//closure/goog/editor:command",
        "//closure/goog/editor:field",
        "//closure/goog/editor:node",
        "//closure/goog/editor:plugin",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/log",
        "//closure/goog/object",
    ],
)

js_library(
    name = "undoredomanager",
    srcs = ["undoredomanager.js", "undoredomanager.d.ts"],
    lenient = True,
    deps = [
        ":undoredostate",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
    ],
)

js_library(
    name = "undoredostate",
    srcs = ["undoredostate.js", "undoredostate.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:eventtarget"],
)
