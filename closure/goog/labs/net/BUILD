load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "net",
    srcs = [],
    lenient = True,
    exports = [
        ":image",
        ":webchannel",
        ":webchanneltransport",
        ":webchanneltransportfactory",
        ":xhr",
        "//closure/goog/labs/net/webchannel",
    ],
)

js_library(
    name = "image",
    srcs = ["image.js", "image.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safeurl",
        "//closure/goog/net:eventtype",
        "//closure/goog/promise",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "webchannel",
    srcs = ["webchannel.js", "webchannel.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:listenable",
        "//closure/goog/net:xmlhttpfactory",
    ],
)

js_library(
    name = "webchanneltransport",
    srcs = ["webchanneltransport.js", "webchanneltransport.d.ts"],
    lenient = True,
    deps = [":webchannel"],
)

js_library(
    name = "webchanneltransportfactory",
    srcs = ["webchanneltransportfactory.js", "webchanneltransportfactory.d.ts"],
    lenient = True,
    deps = [
        ":webchanneltransport",
        "//closure/goog/labs/net/webchannel:webchannelbasetransport",
    ],
)

js_library(
    name = "xhr",
    srcs = ["xhr.js", "xhr.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:error",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xhrlike",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/net:xmlhttpfactory",
        "//closure/goog/object",
        "//closure/goog/promise",
        "//closure/goog/string",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)
