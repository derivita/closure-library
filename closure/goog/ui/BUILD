load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractspellchecker",
    srcs = ["abstractspellchecker.js", "abstractspellchecker.d.ts"],
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

js_library(
    name = "activitymonitor",
    srcs = ["activitymonitor.js", "activitymonitor.d.ts"],
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

js_library(
    name = "advancedtooltip",
    srcs = ["advancedtooltip.js", "advancedtooltip.d.ts"],
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

js_library(
    name = "animatedzippy",
    srcs = ["animatedzippy.js", "animatedzippy.d.ts"],
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

js_library(
    name = "attachablemenu",
    srcs = ["attachablemenu.js", "attachablemenu.d.ts"],
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

js_library(
    name = "bidiinput",
    srcs = ["bidiinput.js", "bidiinput.d.ts"],
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

js_library(
    name = "bubble",
    srcs = ["bubble.js", "bubble.d.ts"],
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

js_library(
    name = "button",
    srcs = [
        "button.js", "button.d.ts",
        "buttonrenderer.js", "buttonrenderer.d.ts",
        "nativebuttonrenderer.js", "nativebuttonrenderer.d.ts",
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

js_library(
    name = "buttonside",
    srcs = ["buttonside.js", "buttonside.d.ts"],
    lenient = True,
)

js_library(
    name = "charcounter",
    srcs = ["charcounter.js", "charcounter.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:inputhandler",
    ],
)

js_library(
    name = "charpicker",
    srcs = ["charpicker.js", "charpicker.d.ts"],
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

js_library(
    name = "checkbox",
    srcs = [
        "checkbox.js", "checkbox.d.ts",
        "checkboxrenderer.js", "checkboxrenderer.d.ts",
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

js_library(
    name = "checkboxmenuitem",
    srcs = ["checkboxmenuitem.js", "checkboxmenuitem.d.ts"],
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

js_library(
    name = "colormenubutton",
    srcs = [
        "colormenubutton.js", "colormenubutton.d.ts",
        "colormenubuttonrenderer.js", "colormenubuttonrenderer.d.ts",
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

js_library(
    name = "colorpalette",
    srcs = ["colorpalette.js", "colorpalette.d.ts"],
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

js_library(
    name = "colorpicker",
    srcs = ["colorpicker.js", "colorpicker.d.ts"],
    lenient = True,
    deps = [
        ":colorpalette",
        ":component",
        "//closure/goog/dom",
        "//closure/goog/events:event",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "combobox",
    srcs = ["combobox.js", "combobox.d.ts"],
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

js_library(
    name = "component",
    srcs = [
        "component.js", "component.d.ts",
        "componentutil.js", "componentutil.d.ts",
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

js_library(
    name = "container",
    srcs = [
        "container.js", "container.d.ts",
        "containerrenderer.js", "containerrenderer.d.ts",
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

js_library(
    name = "containerscroller",
    srcs = ["containerscroller.js", "containerscroller.d.ts"],
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

js_library(
    name = "controlcontent",
    srcs = ["controlcontent.js", "controlcontent.d.ts"],
    lenient = True,
)

alias(
    name = "controlrenderer",
    actual = ":registry",
)

js_library(
    name = "cookieeditor",
    srcs = ["cookieeditor.js", "cookieeditor.d.ts"],
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

js_library(
    name = "css3buttonrenderer",
    srcs = ["css3buttonrenderer.js", "css3buttonrenderer.d.ts"],
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

js_library(
    name = "css3menubuttonrenderer",
    srcs = ["css3menubuttonrenderer.js", "css3menubuttonrenderer.d.ts"],
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

js_library(
    name = "cssnames",
    srcs = ["cssnames.js", "cssnames.d.ts"],
    lenient = True,
)

js_library(
    name = "custombutton",
    srcs = [
        "custombutton.js", "custombutton.d.ts",
        "custombuttonrenderer.js", "custombuttonrenderer.d.ts",
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

js_library(
    name = "customcolorpalette",
    srcs = ["customcolorpalette.js", "customcolorpalette.d.ts"],
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

js_library(
    name = "datepicker",
    srcs = [
        "datepicker.js", "datepicker.d.ts",
        "datepickerrenderer.js", "datepickerrenderer.d.ts",
        "defaultdatepickerrenderer.js", "defaultdatepickerrenderer.d.ts",
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

js_library(
    name = "decorate",
    srcs = ["decorate.js", "decorate.d.ts"],
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

js_library(
    name = "dialog",
    srcs = ["dialog.js", "dialog.d.ts"],
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

js_library(
    name = "dimensionpicker",
    srcs = [
        "dimensionpicker.js", "dimensionpicker.d.ts",
        "dimensionpickerrenderer.js", "dimensionpickerrenderer.d.ts",
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

js_library(
    name = "dragdropdetector",
    srcs = ["dragdropdetector.js", "dragdropdetector.d.ts"],
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

js_library(
    name = "drilldownrow",
    srcs = ["drilldownrow.js", "drilldownrow.d.ts"],
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

js_library(
    name = "filteredmenu",
    srcs = ["filteredmenu.js", "filteredmenu.d.ts"],
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

js_library(
    name = "filterobservingmenuitem",
    srcs = [
        "filterobservingmenuitem.js", "filterobservingmenuitem.d.ts",
        "filterobservingmenuitemrenderer.js", "filterobservingmenuitemrenderer.d.ts",
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

js_library(
    name = "flatbuttonrenderer",
    srcs = ["flatbuttonrenderer.js", "flatbuttonrenderer.d.ts"],
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

js_library(
    name = "flatmenubuttonrenderer",
    srcs = ["flatmenubuttonrenderer.js", "flatmenubuttonrenderer.d.ts"],
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

js_library(
    name = "formpost",
    srcs = ["formpost.js", "formpost.d.ts"],
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

js_library(
    name = "gauge",
    srcs = ["gauge.js", "gauge.d.ts"],
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

js_library(
    name = "gaugetheme",
    srcs = ["gaugetheme.js", "gaugetheme.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/graphics:lineargradient",
        "//closure/goog/graphics:solidfill",
        "//closure/goog/graphics:stroke",
    ],
)

js_library(
    name = "hovercard",
    srcs = ["hovercard.js", "hovercard.d.ts"],
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

js_library(
    name = "hsvapalette",
    srcs = ["hsvapalette.js", "hsvapalette.d.ts"],
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

js_library(
    name = "hsvpalette",
    srcs = ["hsvpalette.js", "hsvpalette.d.ts"],
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

js_library(
    name = "idgenerator",
    srcs = ["idgenerator.js", "idgenerator.d.ts"],
    lenient = True,
)

js_library(
    name = "idletimer",
    srcs = ["idletimer.js", "idletimer.d.ts"],
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

js_library(
    name = "iframemask",
    srcs = ["iframemask.js", "iframemask.d.ts"],
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

js_library(
    name = "imagelessbuttonrenderer",
    srcs = ["imagelessbuttonrenderer.js", "imagelessbuttonrenderer.d.ts"],
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

js_library(
    name = "imagelessmenubuttonrenderer",
    srcs = ["imagelessmenubuttonrenderer.js", "imagelessmenubuttonrenderer.d.ts"],
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

js_library(
    name = "inputdatepicker",
    srcs = ["inputdatepicker.js", "inputdatepicker.d.ts"],
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

js_library(
    name = "itemevent",
    srcs = ["itemevent.js", "itemevent.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:event"],
)

js_library(
    name = "keyboardeventdata",
    srcs = ["keyboardeventdata.js", "keyboardeventdata.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:browserevent",
    ],
)

js_library(
    name = "keyboardshortcuthandler",
    srcs = [
        "keyboardshortcutevent.js", "keyboardshortcutevent.d.ts",
        "keyboardshortcuthandler.js", "keyboardshortcuthandler.d.ts",
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

js_library(
    name = "labelinput",
    srcs = ["labelinput.js", "labelinput.d.ts"],
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

js_library(
    name = "linkbuttonrenderer",
    srcs = ["linkbuttonrenderer.js", "linkbuttonrenderer.d.ts"],
    lenient = True,
    deps = [
        ":button",
        ":flatbuttonrenderer",
        ":registry",
    ],
)

js_library(
    name = "map",
    srcs = ["map.js", "map.d.ts"],
    lenient = True,
)

js_library(
    name = "menu",
    srcs = [
        "menu.js", "menu.d.ts",
        "menuitem.js", "menuitem.d.ts",
        "menuitemrenderer.js", "menuitemrenderer.d.ts",
        "menurenderer.js", "menurenderer.d.ts",
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

js_library(
    name = "menubar",
    srcs = [
        "menubar.js", "menubar.d.ts",
        "menubarrenderer.js", "menubarrenderer.d.ts",
    ],
    lenient = True,
    deps = [
        ":container",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
    ],
)

js_library(
    name = "menubardecorator",
    srcs = ["menubardecorator.js", "menubardecorator.d.ts"],
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

js_library(
    name = "menubase",
    srcs = ["menubase.js", "menubase.d.ts"],
    lenient = True,
    deps = [
        ":popup",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keyhandler",
    ],
)

js_library(
    name = "menubutton",
    srcs = [
        "menubutton.js", "menubutton.d.ts",
        "menubuttonrenderer.js", "menubuttonrenderer.d.ts",
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

js_library(
    name = "menuheader",
    srcs = [
        "menuheader.js", "menuheader.d.ts",
        "menuheaderrenderer.js", "menuheaderrenderer.d.ts",
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

js_library(
    name = "mockactivitymonitor",
    srcs = ["mockactivitymonitor.js", "mockactivitymonitor.d.ts"],
    lenient = True,
    deps = [
        ":activitymonitor",
        "//closure/goog/events:eventtype",
    ],
)

js_library(
    name = "modalariavisibilityhelper",
    srcs = ["modalariavisibilityhelper.js", "modalariavisibilityhelper.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/dom",
    ],
)

js_library(
    name = "modalpopup",
    srcs = ["modalpopup.js", "modalpopup.d.ts"],
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

js_library(
    name = "option",
    srcs = ["option.js", "option.d.ts"],
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

js_library(
    name = "palette",
    srcs = [
        "palette.js", "palette.d.ts",
        "paletterenderer.js", "paletterenderer.d.ts",
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

js_library(
    name = "plaintextspellchecker",
    srcs = ["plaintextspellchecker.js", "plaintextspellchecker.d.ts"],
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

js_library(
    name = "popup",
    srcs = ["popup.js", "popup.d.ts"],
    lenient = True,
    deps = [
        ":popupbase",
        "//closure/goog/math:box",
        "//closure/goog/positioning",
        "//closure/goog/positioning:abstractposition",
        "//closure/goog/style",
    ],
)

js_library(
    name = "popupbase",
    srcs = ["popupbase.js", "popupbase.d.ts"],
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

js_library(
    name = "popupcolorpicker",
    srcs = ["popupcolorpicker.js", "popupcolorpicker.d.ts"],
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

js_library(
    name = "popupdatepicker",
    srcs = ["popupdatepicker.js", "popupdatepicker.d.ts"],
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

js_library(
    name = "popupmenu",
    srcs = ["popupmenu.js", "popupmenu.d.ts"],
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

js_library(
    name = "progressbar",
    srcs = ["progressbar.js", "progressbar.d.ts"],
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

js_library(
    name = "prompt",
    srcs = ["prompt.js", "prompt.d.ts"],
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

js_library(
    name = "rangemodel",
    srcs = ["rangemodel.js", "rangemodel.d.ts"],
    lenient = True,
    deps = [
        ":component",
        "//closure/goog/events:eventtarget",
    ],
)

js_library(
    name = "ratings",
    srcs = ["ratings.js", "ratings.d.ts"],
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

js_library(
    name = "registry",
    srcs = [
        "control.js", "control.d.ts",
        "controlrenderer.js", "controlrenderer.d.ts",
        "registry.js", "registry.d.ts",
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

js_library(
    name = "richtextspellchecker",
    srcs = ["richtextspellchecker.js", "richtextspellchecker.d.ts"],
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

js_library(
    name = "roundedpanel",
    srcs = ["roundedpanel.js", "roundedpanel.d.ts"],
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

js_library(
    name = "roundedtabrenderer",
    srcs = ["roundedtabrenderer.js", "roundedtabrenderer.d.ts"],
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

js_library(
    name = "scrollfloater",
    srcs = ["scrollfloater.js", "scrollfloater.d.ts"],
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

js_library(
    name = "select",
    srcs = ["select.js", "select.d.ts"],
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

js_library(
    name = "selectionmenubutton",
    srcs = ["selectionmenubutton.js", "selectionmenubutton.d.ts"],
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

js_library(
    name = "selectionmodel",
    srcs = ["selectionmodel.js", "selectionmodel.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
    ],
)

js_library(
    name = "separator",
    srcs = [
        "menuseparator.js", "menuseparator.d.ts",
        "menuseparatorrenderer.js", "menuseparatorrenderer.d.ts",
        "separator.js", "separator.d.ts",
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

js_library(
    name = "serverchart",
    srcs = ["serverchart.js", "serverchart.d.ts"],
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

js_library(
    name = "slider",
    srcs = ["slider.js", "slider.d.ts"],
    lenient = True,
    deps = [
        ":sliderbase",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

js_library(
    name = "sliderbase",
    srcs = ["sliderbase.js", "sliderbase.d.ts"],
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

js_library(
    name = "splitpane",
    srcs = ["splitpane.js", "splitpane.d.ts"],
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

js_library(
    name = "submenu",
    srcs = [
        "submenu.js", "submenu.d.ts",
        "submenurenderer.js", "submenurenderer.d.ts",
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

js_library(
    name = "synthetickeyboardevent",
    srcs = ["synthetickeyboardevent.js", "synthetickeyboardevent.d.ts"],
    lenient = True,
    deps = [
        ":keyboardeventdata",
        "//closure/goog/events:event",
    ],
)

js_library(
    name = "tab",
    srcs = [
        "tab.js", "tab.d.ts",
        "tabrenderer.js", "tabrenderer.d.ts",
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

js_library(
    name = "tabbar",
    srcs = [
        "tabbar.js", "tabbar.d.ts",
        "tabbarrenderer.js", "tabbarrenderer.d.ts",
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

js_library(
    name = "tablesorter",
    srcs = ["tablesorter.js", "tablesorter.d.ts"],
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

js_library(
    name = "tabpane",
    srcs = ["tabpane.js", "tabpane.d.ts"],
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

js_library(
    name = "textarea",
    srcs = [
        "textarea.js", "textarea.d.ts",
        "textarearenderer.js", "textarearenderer.d.ts",
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

js_library(
    name = "togglebutton",
    srcs = ["togglebutton.js", "togglebutton.d.ts"],
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

js_library(
    name = "toolbar",
    srcs = [
        "toolbar.js", "toolbar.d.ts",
        "toolbarrenderer.js", "toolbarrenderer.d.ts",
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

js_library(
    name = "toolbarbutton",
    srcs = [
        "toolbarbutton.js", "toolbarbutton.d.ts",
        "toolbarbuttonrenderer.js", "toolbarbuttonrenderer.d.ts",
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

js_library(
    name = "toolbarcolormenubutton",
    srcs = [
        "toolbarcolormenubutton.js", "toolbarcolormenubutton.d.ts",
        "toolbarcolormenubuttonrenderer.js", "toolbarcolormenubuttonrenderer.d.ts",
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

js_library(
    name = "toolbarmenubutton",
    srcs = [
        "toolbarmenubutton.js", "toolbarmenubutton.d.ts",
        "toolbarmenubuttonrenderer.js", "toolbarmenubuttonrenderer.d.ts",
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

js_library(
    name = "toolbarselect",
    srcs = ["toolbarselect.js", "toolbarselect.d.ts"],
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

js_library(
    name = "toolbarseparator",
    srcs = [
        "toolbarseparator.js", "toolbarseparator.d.ts",
        "toolbarseparatorrenderer.js", "toolbarseparatorrenderer.d.ts",
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

js_library(
    name = "toolbartogglebutton",
    srcs = ["toolbartogglebutton.js", "toolbartogglebutton.d.ts"],
    lenient = True,
    deps = [
        ":controlcontent",
        ":registry",
        ":togglebutton",
        ":toolbarbutton",
        "//closure/goog/dom",
    ],
)

js_library(
    name = "tooltip",
    srcs = ["tooltip.js", "tooltip.d.ts"],
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

js_library(
    name = "tristatemenuitem",
    srcs = [
        "tristatemenuitem.js", "tristatemenuitem.d.ts",
        "tristatemenuitemrenderer.js", "tristatemenuitemrenderer.d.ts",
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

js_library(
    name = "twothumbslider",
    srcs = ["twothumbslider.js", "twothumbslider.d.ts"],
    lenient = True,
    deps = [
        ":sliderbase",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
    ],
)

js_library(
    name = "zippy",
    srcs = ["zippy.js", "zippy.d.ts"],
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
