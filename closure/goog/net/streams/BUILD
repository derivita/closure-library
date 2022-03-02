load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
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

closure_js_library(
    name = "base64pbstreamparser",
    srcs = ["base64pbstreamparser.js", "base64pbstreamparser.clutz.d.ts"],
    lenient = True,
    deps = [
        ":base64streamdecoder",
        ":pbstreamparser",
        ":streamparser",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "base64streamdecoder",
    srcs = ["base64streamdecoder.js", "base64streamdecoder.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/crypt:base64",
    ],
)

closure_js_library(
    name = "jsonstreamparser",
    srcs = ["jsonstreamparser.js", "jsonstreamparser.clutz.d.ts"],
    lenient = True,
    deps = [
        ":streamparser",
        ":utils",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "nodereadablestream",
    srcs = ["nodereadablestream.js", "nodereadablestream.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "pbjsonstreamparser",
    srcs = ["pbjsonstreamparser.js", "pbjsonstreamparser.clutz.d.ts"],
    lenient = True,
    deps = [
        ":jsonstreamparser",
        ":streamparser",
        ":utils",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "pbstreamparser",
    srcs = ["pbstreamparser.js", "pbstreamparser.clutz.d.ts"],
    lenient = True,
    deps = [
        ":streamparser",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "streamfactory",
    srcs = ["streamfactory.js", "streamfactory.clutz.d.ts"],
    lenient = True,
    deps = [
        ":nodereadablestream",
        ":xhrnodereadablestream",
        ":xhrstreamreader",
        "//closure/goog/asserts",
        "//closure/goog/net:xhrio",
    ],
)

closure_js_library(
    name = "streamparser",
    srcs = ["streamparser.js", "streamparser.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "streamparsers",
    srcs = ["streamparsers.js", "streamparsers.clutz.d.ts"],
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

closure_js_library(
    name = "utils",
    srcs = ["utils.js", "utils.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "xhrnodereadablestream",
    srcs = ["xhrnodereadablestream.js", "xhrnodereadablestream.clutz.d.ts"],
    lenient = True,
    deps = [
        ":nodereadablestream",
        ":xhrstreamreader",
        "//closure/goog/array",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "xhrstreamreader",
    srcs = ["xhrstreamreader.js", "xhrstreamreader.clutz.d.ts"],
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
