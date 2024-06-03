load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "abstractspellchecker",
    srcs = ["abstractspellchecker.js", "abstractspellchecker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":menuitem",
        ":menuseparator",
        ":popupmenu",
        "//closure/goog/a11y/aria",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:selection",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/structs:set",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "activitymonitor",
    srcs = ["activitymonitor.js", "activitymonitor.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "advancedtooltip",
    srcs = ["advancedtooltip.js", "advancedtooltip.clutz.d.ts"],
    lenient = True,
    deps = [
        ":tooltip",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "animatedzippy",
    srcs = ["animatedzippy.js", "animatedzippy.clutz.d.ts"],
    lenient = True,
    deps = [
        ":zippy",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:easing",
        "//closure/goog/fx:transition",
    ],
)

closure_js_library(
    name = "attachablemenu",
    srcs = ["attachablemenu.js", "attachablemenu.clutz.d.ts"],
    lenient = True,
    deps = [
        ":itemevent",
        ":menubase",
        ":popupbase",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "bidiinput",
    srcs = ["bidiinput.js", "bidiinput.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:inputhandler",
        "//closure/goog/i18n:bidi",
    ],
)

closure_js_library(
    name = "bubble",
    srcs = ["bubble.js", "bubble.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":popup",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:absoluteposition",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/string:const",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "button",
    srcs = [
        "button.js", "button.clutz.d.ts",
        "buttonrenderer.js", "buttonrenderer.clutz.d.ts",
        "nativebuttonrenderer.js", "nativebuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":buttonside",
        ":component",
        ":control",
        ":controlcontent",
        ":registry",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
    ],
)

alias(
    name = "buttonrenderer",
    actual = ":button",
)

closure_js_library(
    name = "buttonside",
    srcs = ["buttonside.js", "buttonside.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "charcounter",
    srcs = ["charcounter.js", "charcounter.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:inputhandler",
    ],
)

closure_js_library(
    name = "charpicker",
    srcs = ["charpicker.js", "charpicker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":containerscroller",
        ":flatbuttonrenderer",
        ":hovercard",
        ":labelinput",
        ":menu",
        ":menubutton",
        ":menuitem",
        ":tooltip",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/i18n:charlistdecompressor",
        "//closure/goog/i18n:charpickerdata",
        "//closure/goog/i18n:uchar",
        "//closure/goog/i18n/uchar:namefetcher",
        "//closure/goog/structs:set",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "checkbox",
    srcs = [
        "checkbox.js", "checkbox.clutz.d.ts",
        "checkboxrenderer.js", "checkboxrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":registry",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "checkboxmenuitem",
    srcs = ["checkboxmenuitem.js", "checkboxmenuitem.clutz.d.ts"],
    lenient = True,
    deps = [
        ":controlcontent",
        ":menuitem",
        ":registry",
        "//closure/goog/dom",
    ],
)

alias(
    name = "checkboxrenderer",
    actual = ":checkbox",
)

closure_js_library(
    name = "colormenubutton",
    srcs = [
        "colormenubutton.js", "colormenubutton.clutz.d.ts",
        "colormenubuttonrenderer.js", "colormenubuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":colorpalette",
        ":component",
        ":control",
        ":controlcontent",
        ":menu",
        ":menubutton",
        ":registry",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/color",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/object",
    ],
)

alias(
    name = "colormenubuttonrenderer",
    actual = ":colormenubutton",
)

closure_js_library(
    name = "colorpalette",
    srcs = ["colorpalette.js", "colorpalette.clutz.d.ts"],
    lenient = True,
    deps = [
        ":palette",
        "//closure/goog/array",
        "//closure/goog/color",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "colorpicker",
    srcs = ["colorpicker.js", "colorpicker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":colorpalette",
        ":component",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/math:size",
    ],
)

closure_js_library(
    name = "combobox",
    srcs = ["combobox.js", "combobox.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":controlcontent",
        ":itemevent",
        ":labelinput",
        ":menu",
        ":menuitem",
        ":menuseparator",
        ":registry",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/log",
        "//closure/goog/positioning",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "component",
    srcs = [
        "component.js", "component.clutz.d.ts",
        "componentutil.js", "componentutil.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":idgenerator",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/object",
        "//closure/goog/style",
    ],
)

alias(
    name = "componentutil",
    actual = ":component",
)

closure_js_library(
    name = "container",
    srcs = [
        "container.js", "container.clutz.d.ts",
        "containerrenderer.js", "containerrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":componentutil",
        ":control",
        ":registry",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "containerrenderer",
    actual = ":container",
)

closure_js_library(
    name = "containerscroller",
    srcs = ["containerscroller.js", "containerscroller.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":container",
        "//closure/goog/disposable",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

alias(
    name = "control",
    actual = ":registry",
)

closure_js_library(
    name = "controlcontent",
    srcs = ["controlcontent.js", "controlcontent.clutz.d.ts"],
    lenient = True,
)

alias(
    name = "controlrenderer",
    actual = ":registry",
)

closure_js_library(
    name = "cookieeditor",
    srcs = ["cookieeditor.js", "cookieeditor.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/net:cookies",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "css3buttonrenderer",
    srcs = ["css3buttonrenderer.js", "css3buttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":control",
        ":cssnames",
        ":registry",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "css3menubuttonrenderer",
    srcs = ["css3menubuttonrenderer.js", "css3menubuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":controlcontent",
        ":cssnames",
        ":menubutton",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "cssnames",
    srcs = ["cssnames.js", "cssnames.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "custombutton",
    srcs = [
        "custombutton.js", "custombutton.clutz.d.ts",
        "custombuttonrenderer.js", "custombuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":button",
        ":control",
        ":controlcontent",
        ":cssnames",
        ":registry",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/string",
    ],
)

alias(
    name = "custombuttonrenderer",
    actual = ":custombutton",
)

closure_js_library(
    name = "customcolorpalette",
    srcs = ["customcolorpalette.js", "customcolorpalette.clutz.d.ts"],
    lenient = True,
    deps = [
        ":colorpalette",
        ":component",
        ":palette",
        "//closure/goog/color",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "datepicker",
    srcs = [
        "datepicker.js", "datepicker.clutz.d.ts",
        "datepickerrenderer.js", "datepickerrenderer.clutz.d.ts",
        "defaultdatepickerrenderer.js", "defaultdatepickerrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":idgenerator",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/date",
        "//closure/goog/date:daterange",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keyhandler",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimepatterns",
        "//closure/goog/i18n:datetimesymbols",
        "//closure/goog/style",
    ],
)

alias(
    name = "datepickerrenderer",
    actual = ":datepicker",
)

closure_js_library(
    name = "decorate",
    srcs = ["decorate.js", "decorate.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":registry",
    ],
)

alias(
    name = "defaultdatepickerrenderer",
    actual = ":datepicker",
)

closure_js_library(
    name = "dialog",
    srcs = ["dialog.js", "dialog.clutz.d.ts"],
    lenient = True,
    deps = [
        ":map",
        ":modalpopup",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keys",
        "//closure/goog/fx:dragger",
        "//closure/goog/html:safehtml",
        "//closure/goog/math:rect",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "dimensionpicker",
    srcs = [
        "dimensionpicker.js", "dimensionpicker.clutz.d.ts",
        "dimensionpickerrenderer.js", "dimensionpickerrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":componentutil",
        ":control",
        ":registry",
        "//closure/goog/a11y/aria:announcer",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/i18n:bidi",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "dimensionpickerrenderer",
    actual = ":dimensionpicker",
)

closure_js_library(
    name = "dragdropdetector",
    srcs = ["dragdropdetector.js", "dragdropdetector.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "drilldownrow",
    srcs = ["drilldownrow.js", "drilldownrow.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "filteredmenu",
    srcs = ["filteredmenu.js", "filteredmenu.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":filterobservingmenuitem",
        ":menu",
        ":menuitem",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "filterobservingmenuitem",
    srcs = [
        "filterobservingmenuitem.js", "filterobservingmenuitem.clutz.d.ts",
        "filterobservingmenuitemrenderer.js", "filterobservingmenuitemrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":controlcontent",
        ":menuitem",
        ":registry",
        "//closure/goog/dom",
    ],
)

alias(
    name = "filterobservingmenuitemrenderer",
    actual = ":filterobservingmenuitem",
)

closure_js_library(
    name = "flatbuttonrenderer",
    srcs = ["flatbuttonrenderer.js", "flatbuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":control",
        ":cssnames",
        ":registry",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "flatmenubuttonrenderer",
    srcs = ["flatmenubuttonrenderer.js", "flatmenubuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":control",
        ":controlcontent",
        ":cssnames",
        ":flatbuttonrenderer",
        ":menu",
        ":menubutton",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "formpost",
    srcs = ["formpost.js", "formpost.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:safehtml",
    ],
)

closure_js_library(
    name = "gauge",
    srcs = ["gauge.js", "gauge.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":gaugetheme",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:easing",
        "//closure/goog/fx:transition",
        "//closure/goog/graphics",
        "//closure/goog/graphics:font",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/math",
    ],
)

closure_js_library(
    name = "gaugetheme",
    srcs = ["gaugetheme.js", "gaugetheme.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:lineargradient",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
    ],
)

closure_js_library(
    name = "hovercard",
    srcs = ["hovercard.js", "hovercard.clutz.d.ts"],
    lenient = True,
    deps = [
        ":advancedtooltip",
        ":popupbase",
        ":tooltip",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning:abstractposition",
    ],
)

closure_js_library(
    name = "hsvapalette",
    srcs = ["hsvapalette.js", "hsvapalette.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":hsvpalette",
        "//closure/goog/array",
        "//closure/goog/color:alpha",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:rect",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "hsvpalette",
    srcs = ["hsvpalette.js", "hsvpalette.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/color",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:inputhandler",
        "//closure/goog/math:rect",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "idgenerator",
    srcs = ["idgenerator.js", "idgenerator.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "idletimer",
    srcs = ["idletimer.js", "idletimer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":activitymonitor",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:set",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "iframemask",
    srcs = ["iframemask.js", "iframemask.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:iframe",
        "//closure/goog/events:eventhandler",
        "//closure/goog/structs:pool",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "imagelessbuttonrenderer",
    srcs = ["imagelessbuttonrenderer.js", "imagelessbuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":controlcontent",
        ":cssnames",
        ":custombuttonrenderer",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "imagelessmenubuttonrenderer",
    srcs = ["imagelessmenubuttonrenderer.js", "imagelessmenubuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":controlcontent",
        ":cssnames",
        ":menubutton",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "inputdatepicker",
    srcs = ["inputdatepicker.js", "inputdatepicker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":datepicker",
        ":labelinput",
        ":popupbase",
        ":popupdatepicker",
        "//closure/goog/date",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/i18n:datetimeformat",
        "//closure/goog/i18n:datetimeparse",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "itemevent",
    srcs = ["itemevent.js", "itemevent.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

closure_js_library(
    name = "keyboardeventdata",
    srcs = ["keyboardeventdata.js", "keyboardeventdata.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:browserevent",
    ],
)

closure_js_library(
    name = "keyboardshortcuthandler",
    srcs = [
        "keyboardshortcutevent.js", "keyboardshortcutevent.clutz.d.ts",
        "keyboardshortcuthandler.js", "keyboardshortcuthandler.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":keyboardeventdata",
        ":synthetickeyboardevent",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keynames",
        "//closure/goog/events:keys",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "labelinput",
    srcs = ["labelinput.js", "labelinput.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "linkbuttonrenderer",
    srcs = ["linkbuttonrenderer.js", "linkbuttonrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":flatbuttonrenderer",
        ":registry",
    ],
)

closure_js_library(
    name = "map",
    srcs = ["map.js", "map.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "menu",
    srcs = [
        "menu.js", "menu.clutz.d.ts",
        "menuitem.js", "menuitem.clutz.d.ts",
        "menuitemrenderer.js", "menuitemrenderer.clutz.d.ts",
        "menurenderer.js", "menurenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":container",
        ":control",
        ":controlcontent",
        ":menuheader",
        ":menuseparator",
        ":registry",
        ":separator",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/math:coordinate",
        "//closure/goog/string",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "menubar",
    srcs = [
        "menubar.js", "menubar.clutz.d.ts",
        "menubarrenderer.js", "menubarrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":container",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "menubardecorator",
    srcs = ["menubardecorator.js", "menubardecorator.clutz.d.ts"],
    lenient = True,
    deps = [
        ":menubar",
        ":registry",
    ],
)

alias(
    name = "menubarrenderer",
    actual = ":menubar",
)

closure_js_library(
    name = "menubase",
    srcs = ["menubase.js", "menubase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":popup",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keyhandler",
    ],
)

closure_js_library(
    name = "menubutton",
    srcs = [
        "menubutton.js", "menubutton.clutz.d.ts",
        "menubuttonrenderer.js", "menubuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":control",
        ":controlcontent",
        ":cssnames",
        ":custombutton",
        ":idgenerator",
        ":menu",
        ":menuitem",
        ":menuseparator",
        ":registry",
        ":submenu",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

alias(
    name = "menubuttonrenderer",
    actual = ":menubutton",
)

closure_js_library(
    name = "menuheader",
    srcs = [
        "menuheader.js", "menuheader.clutz.d.ts",
        "menuheaderrenderer.js", "menuheaderrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":controlcontent",
        ":registry",
        "//closure/goog/dom",
    ],
)

alias(
    name = "menuheaderrenderer",
    actual = ":menuheader",
)

alias(
    name = "menuitem",
    actual = ":menu",
)

alias(
    name = "menuitemrenderer",
    actual = ":menu",
)

alias(
    name = "menurenderer",
    actual = ":menu",
)

alias(
    name = "menuseparator",
    actual = ":separator",
)

alias(
    name = "menuseparatorrenderer",
    actual = ":separator",
)

closure_js_library(
    name = "mockactivitymonitor",
    srcs = ["mockactivitymonitor.js", "mockactivitymonitor.clutz.d.ts"],
    lenient = True,
    deps = [
        ":activitymonitor",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "modalariavisibilityhelper",
    srcs = ["modalariavisibilityhelper.js", "modalariavisibilityhelper.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "modalpopup",
    srcs = ["modalpopup.js", "modalpopup.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":modalariavisibilityhelper",
        ":popupbase",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:iframe",
        "//closure/goog/dom:tagname",
        "//closure/goog/dom/animationframe",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/fx:transition",
        "//closure/goog/math:size",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "nativebuttonrenderer",
    actual = ":button",
)

closure_js_library(
    name = "option",
    srcs = ["option.js", "option.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":controlcontent",
        ":menuitem",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "palette",
    srcs = [
        "palette.js", "palette.clutz.d.ts",
        "paletterenderer.js", "paletterenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":controlcontent",
        ":selectionmodel",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:dataset",
        "//closure/goog/dom:nodeiterator",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/iter",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "paletterenderer",
    actual = ":palette",
)

closure_js_library(
    name = "plaintextspellchecker",
    srcs = ["plaintextspellchecker.js", "plaintextspellchecker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractspellchecker",
        ":component",
        ":popupmenu",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/math:size",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "popup",
    srcs = ["popup.js", "popup.clutz.d.ts"],
    lenient = True,
    deps = [
        ":popupbase",
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "popupbase",
    srcs = ["popupbase.js", "popupbase.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/fx:transition",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "popupcolorpicker",
    srcs = ["popupcolorpicker.js", "popupcolorpicker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":colorpicker",
        ":component",
        ":popup",
        ":popupbase",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredposition",
    ],
)

closure_js_library(
    name = "popupdatepicker",
    srcs = ["popupdatepicker.js", "popupdatepicker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":datepicker",
        ":popup",
        ":popupbase",
        "//closure/goog/date",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredviewportposition",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "popupmenu",
    srcs = ["popupmenu.js", "popupmenu.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":menu",
        ":popupbase",
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/positioning:anchoredviewportposition",
        "//closure/goog/positioning:menuanchoredposition",
        "//closure/goog/positioning:viewportclientposition",
        "//closure/goog/structs:map",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "progressbar",
    srcs = ["progressbar.js", "progressbar.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":rangemodel",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "prompt",
    srcs = ["prompt.js", "prompt.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":dialog",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "rangemodel",
    srcs = ["rangemodel.js", "rangemodel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/events:eventtarget",
    ],
)

closure_js_library(
    name = "ratings",
    srcs = ["ratings.js", "ratings.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "registry",
    srcs = [
        "control.js", "control.clutz.d.ts",
        "controlrenderer.js", "controlrenderer.clutz.d.ts",
        "registry.js", "registry.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":controlcontent",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/functions",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "richtextspellchecker",
    srcs = ["richtextspellchecker.js", "richtextspellchecker.clutz.d.ts"],
    lenient = True,
    deps = [
        ":abstractspellchecker",
        ":component",
        ":popupmenu",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:range",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/math:coordinate",
        "//closure/goog/spell:spellcheck",
        "//closure/goog/string:stringbuffer",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "roundedpanel",
    srcs = ["roundedpanel.js", "roundedpanel.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/graphics",
        "//closure/goog/graphics:path",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "roundedtabrenderer",
    srcs = ["roundedtabrenderer.js", "roundedtabrenderer.clutz.d.ts"],
    lenient = True,
    deps = [
        ":control",
        ":controlcontent",
        ":registry",
        ":tab",
        ":tabbar",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "scrollfloater",
    srcs = ["scrollfloater.js", "scrollfloater.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:rect",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "select",
    srcs = ["select.js", "select.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":control",
        ":controlcontent",
        ":idgenerator",
        ":menu",
        ":menubutton",
        ":menuitem",
        ":menuseparator",
        ":registry",
        ":selectionmodel",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "selectionmenubutton",
    srcs = ["selectionmenubutton.js", "selectionmenubutton.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":menubutton",
        ":menuitem",
        ":registry",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "selectionmodel",
    srcs = ["selectionmodel.js", "selectionmodel.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

closure_js_library(
    name = "separator",
    srcs = [
        "menuseparator.js", "menuseparator.clutz.d.ts",
        "menuseparatorrenderer.js", "menuseparatorrenderer.clutz.d.ts",
        "separator.js", "separator.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":controlcontent",
        ":registry",
        "//closure/goog/a11y/aria",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "serverchart",
    srcs = ["serverchart.js", "serverchart.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/asserts:dom",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/string",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "slider",
    srcs = ["slider.js", "slider.clutz.d.ts"],
    lenient = True,
    deps = [
        ":sliderbase",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "sliderbase",
    srcs = ["sliderbase.js", "sliderbase.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        ":rangemodel",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/events:mousewheelhandler",
        "//closure/goog/functions",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:animationqueue",
        "//closure/goog/fx:dom",
        "//closure/goog/fx:dragger",
        "//closure/goog/fx:transition",
        "//closure/goog/fx:transitionbase",
        "//closure/goog/math",
        "//closure/goog/math:coordinate",
        "//closure/goog/style",
        "//closure/goog/style:bidi",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "splitpane",
    srcs = ["splitpane.js", "splitpane.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/fx:dragger",
        "//closure/goog/math:rect",
        "//closure/goog/math:size",
        "//closure/goog/style",
    ],
)

closure_js_library(
    name = "submenu",
    srcs = [
        "submenu.js", "submenu.clutz.d.ts",
        "submenurenderer.js", "submenurenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":controlcontent",
        ":menu",
        ":menuheader",
        ":menuitem",
        ":menuseparator",
        ":registry",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/positioning",
        "//closure/goog/positioning:anchoredviewportposition",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

alias(
    name = "submenurenderer",
    actual = ":submenu",
)

closure_js_library(
    name = "synthetickeyboardevent",
    srcs = ["synthetickeyboardevent.js", "synthetickeyboardevent.clutz.d.ts"],
    lenient = True,
    deps = [
        ":keyboardeventdata",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "tab",
    srcs = [
        "tab.js", "tab.clutz.d.ts",
        "tabrenderer.js", "tabrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        ":controlcontent",
        ":registry",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "tabbar",
    srcs = [
        "tabbar.js", "tabbar.clutz.d.ts",
        "tabbarrenderer.js", "tabbarrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":container",
        ":control",
        ":registry",
        ":tab",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/object",
    ],
)

alias(
    name = "tabbarrenderer",
    actual = ":tabbar",
)

closure_js_library(
    name = "tablesorter",
    srcs = ["tablesorter.js", "tablesorter.clutz.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/functions",
    ],
)

closure_js_library(
    name = "tabpane",
    srcs = ["tabpane.js", "tabpane.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/style",
    ],
)

alias(
    name = "tabrenderer",
    actual = ":tab",
)

closure_js_library(
    name = "textarea",
    srcs = [
        "textarea.js", "textarea.clutz.d.ts",
        "textarearenderer.js", "textarearenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":control",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:box",
        "//closure/goog/style",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "textarearenderer",
    actual = ":textarea",
)

closure_js_library(
    name = "togglebutton",
    srcs = ["togglebutton.js", "togglebutton.clutz.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":component",
        ":controlcontent",
        ":custombuttonrenderer",
        ":registry",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "toolbar",
    srcs = [
        "toolbar.js", "toolbar.clutz.d.ts",
        "toolbarrenderer.js", "toolbarrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":container",
        ":control",
        ":separator",
        ":toolbarseparator",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "toolbarbutton",
    srcs = [
        "toolbarbutton.js", "toolbarbutton.clutz.d.ts",
        "toolbarbuttonrenderer.js", "toolbarbuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":button",
        ":controlcontent",
        ":custombutton",
        ":registry",
        ":toolbarseparator",
        "//closure/goog/dom",
    ],
)

alias(
    name = "toolbarbuttonrenderer",
    actual = ":toolbarbutton",
)

closure_js_library(
    name = "toolbarcolormenubutton",
    srcs = [
        "toolbarcolormenubutton.js", "toolbarcolormenubutton.clutz.d.ts",
        "toolbarcolormenubuttonrenderer.js", "toolbarcolormenubuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":colormenubutton",
        ":control",
        ":controlcontent",
        ":menu",
        ":menubutton",
        ":registry",
        ":toolbarmenubutton",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
    ],
)

alias(
    name = "toolbarcolormenubuttonrenderer",
    actual = ":toolbarcolormenubutton",
)

closure_js_library(
    name = "toolbarmenubutton",
    srcs = [
        "toolbarmenubutton.js", "toolbarmenubutton.clutz.d.ts",
        "toolbarmenubuttonrenderer.js", "toolbarmenubuttonrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":button",
        ":controlcontent",
        ":menu",
        ":menubutton",
        ":registry",
        "//closure/goog/dom",
    ],
)

alias(
    name = "toolbarmenubuttonrenderer",
    actual = ":toolbarmenubutton",
)

alias(
    name = "toolbarrenderer",
    actual = ":toolbar",
)

closure_js_library(
    name = "toolbarselect",
    srcs = ["toolbarselect.js", "toolbarselect.clutz.d.ts"],
    lenient = True,
    deps = [
        ":controlcontent",
        ":menu",
        ":menubutton",
        ":registry",
        ":select",
        ":toolbarmenubutton",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "toolbarseparator",
    srcs = [
        "toolbarseparator.js", "toolbarseparator.clutz.d.ts",
        "toolbarseparatorrenderer.js", "toolbarseparatorrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":control",
        ":cssnames",
        ":registry",
        ":separator",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:tagname",
    ],
)

alias(
    name = "toolbarseparatorrenderer",
    actual = ":toolbarseparator",
)

closure_js_library(
    name = "toolbartogglebutton",
    srcs = ["toolbartogglebutton.js", "toolbartogglebutton.clutz.d.ts"],
    lenient = True,
    deps = [
        ":controlcontent",
        ":registry",
        ":togglebutton",
        ":toolbarbutton",
        "//closure/goog/dom",
    ],
)

closure_js_library(
    name = "tooltip",
    srcs = ["tooltip.js", "tooltip.clutz.d.ts"],
    lenient = True,
    deps = [
        ":popup",
        ":popupbase",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/html:safehtml",
        "//closure/goog/math:box",
        "//closure/goog/math:coordinate",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/positioning:anchoredposition",
        "//closure/goog/positioning:viewportposition",
        "//closure/goog/structs:set",
        "//closure/goog/style",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "tristatemenuitem",
    srcs = [
        "tristatemenuitem.js", "tristatemenuitem.clutz.d.ts",
        "tristatemenuitemrenderer.js", "tristatemenuitemrenderer.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":component",
        ":controlcontent",
        ":menuitem",
        ":registry",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
    ],
)

alias(
    name = "tristatemenuitemrenderer",
    actual = ":tristatemenuitem",
)

closure_js_library(
    name = "twothumbslider",
    srcs = ["twothumbslider.js", "twothumbslider.clutz.d.ts"],
    lenient = True,
    deps = [
        ":sliderbase",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

closure_js_library(
    name = "zippy",
    srcs = ["zippy.js", "zippy.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/style",
    ],
)
