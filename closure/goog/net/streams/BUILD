load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "streams",
    srcs = [],
    lenient = True,
    exports = [
        ":base64pbstreamparser",
        ":base64streamdecoder",
        ":jsonstreamparser",
        ":nodereadablestream",
        ":pbstreamparser",
        ":streamfactory",
        ":streamparser",
        ":xhrnodereadablestream",
        ":xhrstreamreader",
    ],
)

js_library(
    name = "base64pbstreamparser",
    srcs = ["base64pbstreamparser.js", "base64pbstreamparser.d.ts"],
    lenient = True,
    deps = [
        ":base64streamdecoder",
        ":pbstreamparser",
        ":streamparser",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "base64streamdecoder",
    srcs = ["base64streamdecoder.js", "base64streamdecoder.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt:base64",
    ],
)

js_library(
    name = "jsonstreamparser",
    srcs = ["jsonstreamparser.js", "jsonstreamparser.d.ts"],
    lenient = True,
    deps = [
        ":streamparser",
        ":utils",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "nodereadablestream",
    srcs = ["nodereadablestream.js", "nodereadablestream.d.ts"],
    lenient = True,
)

js_library(
    name = "pbjsonstreamparser",
    srcs = ["pbjsonstreamparser.js", "pbjsonstreamparser.d.ts"],
    lenient = True,
    deps = [
        ":jsonstreamparser",
        ":streamparser",
        ":utils",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "pbstreamparser",
    srcs = ["pbstreamparser.js", "pbstreamparser.d.ts"],
    lenient = True,
    deps = [
        ":streamparser",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "streamfactory",
    srcs = ["streamfactory.js", "streamfactory.d.ts"],
    lenient = True,
    deps = [
        ":nodereadablestream",
        ":xhrnodereadablestream",
        ":xhrstreamreader",
        "//closure/goog/asserts",
        "//closure/goog/net:xhrio",
    ],
)

js_library(
    name = "streamparser",
    srcs = ["streamparser.js", "streamparser.d.ts"],
    lenient = True,
)

js_library(
    name = "streamparsers",
    srcs = ["streamparsers.js", "streamparsers.d.ts"],
    lenient = True,
    deps = [
        ":base64pbstreamparser",
        ":jsonstreamparser",
        ":pbjsonstreamparser",
        ":pbstreamparser",
        ":streamparser",
        "//closure/goog/log",
        "//closure/goog/net:xhrio",
    ],
)

js_library(
    name = "utils",
    srcs = ["utils.js", "utils.d.ts"],
    lenient = True,
)

js_library(
    name = "xhrnodereadablestream",
    srcs = ["xhrnodereadablestream.js", "xhrnodereadablestream.d.ts"],
    lenient = True,
    deps = [
        ":nodereadablestream",
        ":xhrstreamreader",
        "//closure/goog/array",
        "//closure/goog/log",
    ],
)

js_library(
    name = "xhrstreamreader",
    srcs = ["xhrstreamreader.js", "xhrstreamreader.d.ts"],
    lenient = True,
    deps = [
        ":streamparser",
        ":streamparsers",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/log",
        "//closure/goog/net:errorcode",
        "//closure/goog/net:eventtype",
        "//closure/goog/net:httpstatus",
        "//closure/goog/net:xhrio",
        "//closure/goog/net:xmlhttp",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)
