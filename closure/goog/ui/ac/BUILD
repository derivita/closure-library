load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "ac",
    srcs = ["ac.js", "ac.d.ts"],
    lenient = True,
    deps = [
        ":arraymatcher",
        ":autocomplete",
        ":inputhandler",
        ":renderer",
    ],
)

js_library(
    name = "arraymatcher",
    srcs = ["arraymatcher.js", "arraymatcher.d.ts"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

js_library(
    name = "autocomplete",
    srcs = [
        "autocomplete.js", "autocomplete.d.ts",
        "inputhandler.js", "inputhandler.d.ts",
    ],
    lenient = True,
    deps = [
        ":renderoptions",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:selection",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "cachingmatcher",
    srcs = ["cachingmatcher.js", "cachingmatcher.d.ts"],
    lenient = True,
    deps = [
        ":arraymatcher",
        ":renderoptions",
        "//closure/goog/array",
        "//closure/goog/async:throttle",
    ],
)

alias(
    name = "inputhandler",
    actual = ":autocomplete",
)

js_library(
    name = "remote",
    srcs = ["remote.js", "remote.d.ts"],
    lenient = True,
    deps = [
        ":autocomplete",
        ":inputhandler",
        ":remotearraymatcher",
        ":renderer",
        "//closure/goog/structs:map",
    ],
)

js_library(
    name = "remotearraymatcher",
    srcs = ["remotearraymatcher.js", "remotearraymatcher.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttpfactory",
        "//closure/goog/structs:map",
        "//closure/goog/uri",
    ],
)

js_library(
    name = "renderer",
    srcs = ["renderer.js", "renderer.d.ts"],
    lenient = True,
    deps = [
        ":autocomplete",
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/a11y/aria:roles",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:nodetype",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/fx:animation",
        "//closure/goog/fx:dom",
        "//closure/goog/positioning",
        "//closure/goog/string",
        "//closure/goog/style",
        "//closure/goog/ui:idgenerator",
    ],
)

js_library(
    name = "renderoptions",
    srcs = ["renderoptions.js", "renderoptions.d.ts"],
    lenient = True,
)

js_library(
    name = "richinputhandler",
    srcs = ["richinputhandler.js", "richinputhandler.d.ts"],
    lenient = True,
    deps = [":inputhandler"],
)

js_library(
    name = "richremote",
    srcs = ["richremote.js", "richremote.d.ts"],
    lenient = True,
    deps = [
        ":autocomplete",
        ":remote",
        ":renderer",
        ":richinputhandler",
        ":richremotearraymatcher",
    ],
)

js_library(
    name = "richremotearraymatcher",
    srcs = ["richremotearraymatcher.js", "richremotearraymatcher.d.ts"],
    lenient = True,
    deps = [
        ":remotearraymatcher",
        "//closure/goog/dom",
    ],
)
