load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "browserchannel",
    srcs = [
        "browserchannel.js", "browserchannel.clutz.d.ts",
        "browserchannelexecutionhooks.js", "browserchannelexecutionhooks.clutz.d.ts",
        "browserchannelserverreachability.js", "browserchannelserverreachability.clutz.d.ts",
        "browserchannelstats.js", "browserchannelstats.clutz.d.ts",
        "browsertestchannel.js", "browsertestchannel.clutz.d.ts",
        "channelrequest.js", "channelrequest.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        ":channeldebug",
        ":errorcode",
        ":eventtype",
        ":tmpnetwork",
        ":xhrio",
        ":xmlhttp",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/async:throttle",
        "//closure/goog/debug:formatter",
        "//closure/goog/disposable",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/json",
        "//closure/goog/json:nativejsonprocessor",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/string:parser",
        "//closure/goog/structs",
        "//closure/goog/structs:circularbuffer",
        "//closure/goog/structs:map",
        "//closure/goog/timer",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "browsertestchannel",
    actual = ":browserchannel",
)

closure_js_library(
    name = "bulkloader",
    srcs = ["bulkloader.js", "bulkloader.clutz.d.ts"],
    lenient = True,
    deps = [
        ":bulkloaderhelper",
        ":eventtype",
        ":xhrio",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "bulkloaderhelper",
    srcs = ["bulkloaderhelper.js", "bulkloaderhelper.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/disposable",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "channeldebug",
    srcs = ["channeldebug.js", "channeldebug.clutz.d.ts"],
    lenient = True,
    deps = [
        ":xmlhttp",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/uri",
    ],
)

alias(
    name = "channelrequest",
    actual = ":browserchannel",
)

closure_js_library(
    name = "cookies",
    srcs = [
        "cookies.js", "cookies.clutz.d.ts",
        "cookies_deprecated.js", "cookies_deprecated.clutz.d.ts",
    ],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "corsxmlhttpfactory",
    srcs = ["corsxmlhttpfactory.js", "corsxmlhttpfactory.clutz.d.ts"],
    lenient = True,
    deps = [
        ":httpstatus",
        ":xhrlike",
        ":xmlhttp",
        ":xmlhttpfactory",
    ],
)

closure_js_library(
    name = "crossdomainrpc",
    srcs = ["crossdomainrpc.js", "crossdomainrpc.clutz.d.ts"],
    lenient = True,
    deps = [
        ":eventtype",
        ":httpstatus",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:safehtml",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "errorcode",
    srcs = ["errorcode.js", "errorcode.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "eventtype",
    srcs = ["eventtype.js", "eventtype.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "fetchxmlhttpfactory",
    srcs = ["fetchxmlhttpfactory.js", "fetchxmlhttpfactory.clutz.d.ts"],
    lenient = True,
    deps = [
        ":xhrlike",
        ":xmlhttpfactory",
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/functions",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "filedownloader",
    srcs = ["filedownloader.js", "filedownloader.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":xhrio",
        ":xhriopool",
        "//closure/goog/asserts",
        "//closure/goog/crypt:hash32",
        "//closure/goog/debug:error",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:eventhandler",
        "//closure/goog/fs",
        "//closure/goog/fs:blob",
        "//closure/goog/fs:entry",
        "//closure/goog/fs:error",
        "//closure/goog/fs:filesaver",
        "//closure/goog/fs:filewriter",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "httpstatus",
    srcs = ["httpstatus.js", "httpstatus.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "httpstatusname",
    srcs = ["httpstatusname.js", "httpstatusname.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "iframeio",
    srcs = ["iframeio.js", "iframeio.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug:formatter",
        "//closure/goog/dom",
        "//closure/goog/dom:inputtype",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/json",
        "//closure/goog/log",
        "//closure/goog/reflect",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/structs",
        "//closure/goog/structs:map",
        "//closure/goog/timer",
        "//closure/goog/uri",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "iframeloadmonitor",
    srcs = ["iframeloadmonitor.js", "iframeloadmonitor.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "imageloader",
    srcs = ["imageloader.js", "imageloader.clutz.d.ts"],
    lenient = True,
    deps = [
        ":eventtype",
        "//closure/goog/array",
        "//closure/goog/disposable",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/object",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "ipaddress",
    srcs = ["ipaddress.js", "ipaddress.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/math:integer",
        "//closure/goog/object",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jsloader",
    srcs = ["jsloader.js", "jsloader.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/debug:error",
        "//closure/goog/dom",
        "//closure/goog/dom:safe",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/object",
        "//third_party/closure/goog/mochikit/async:deferred",
    ],
)

closure_js_library(
    name = "jsonp",
    srcs = ["jsonp.js", "jsonp.clutz.d.ts"],
    lenient = True,
    deps = [
        ":jsloader",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/object",
    ],
)

closure_js_library(
    name = "mockiframeio",
    srcs = ["mockiframeio.js", "mockiframeio.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":iframeio",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:map",
        "//closure/goog/testing:testqueue",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "multiiframeloadmonitor",
    srcs = ["multiiframeloadmonitor.js", "multiiframeloadmonitor.clutz.d.ts"],
    lenient = True,
    deps = [
        ":iframeloadmonitor",
        "//closure/goog/events",
        "//closure/goog/events:event",
    ],
)

closure_js_library(
    name = "networkstatusmonitor",
    srcs = ["networkstatusmonitor.js", "networkstatusmonitor.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/events:listenable"],
)

closure_js_library(
    name = "networktester",
    srcs = ["networktester.js", "networktester.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/dom:safe",
        "//closure/goog/log",
        "//closure/goog/timer",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "tmpnetwork",
    srcs = ["tmpnetwork.js", "tmpnetwork.clutz.d.ts"],
    lenient = True,
    deps = [
        ":channeldebug",
        "//closure/goog/dom:safe",
        "//closure/goog/uri",
    ],
)

closure_js_library(
    name = "websocket",
    srcs = ["websocket.js", "websocket.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/debug:errorhandler",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/log",
        "//closure/goog/timer",
    ],
)

closure_js_library(
    name = "wrapperxmlhttpfactory",
    srcs = ["wrapperxmlhttpfactory.js", "wrapperxmlhttpfactory.clutz.d.ts"],
    lenient = True,
    deps = [
        ":xhrlike",
        ":xmlhttpfactory",
    ],
)

closure_js_library(
    name = "xhrio",
    srcs = ["xhrio.js", "xhrio.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":httpstatus",
        ":xhrlike",
        ":xmlhttp",
        ":xmlhttpfactory",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/collections:maps",
        "//closure/goog/debug:entrypointregistry",
        "//closure/goog/debug:errorhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/json:hybrid",
        "//closure/goog/log",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/timer",
        "//closure/goog/uri",
        "//closure/goog/uri:utils",
        "//closure/goog/useragent",
    ],
)

closure_js_library(
    name = "xhriopool",
    srcs = ["xhriopool.js", "xhriopool.clutz.d.ts"],
    lenient = True,
    deps = [
        ":xhrio",
        "//closure/goog/structs:map",
        "//closure/goog/structs:prioritypool",
    ],
)

closure_js_library(
    name = "xhrlike",
    srcs = ["xhrlike.js", "xhrlike.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "xhrmanager",
    srcs = ["xhrmanager.js", "xhrmanager.clutz.d.ts"],
    lenient = True,
    deps = [
        ":errorcode",
        ":eventtype",
        ":xhrio",
        ":xhriopool",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventhandler",
        "//closure/goog/events:eventtarget",
        "//closure/goog/structs:map",
    ],
)

closure_js_library(
    name = "xmlhttp",
    srcs = ["xmlhttp.js", "xmlhttp.clutz.d.ts"],
    lenient = True,
    deps = [
        ":wrapperxmlhttpfactory",
        ":xhrlike",
        ":xmlhttpfactory",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "xmlhttpfactory",
    srcs = ["xmlhttpfactory.js", "xmlhttpfactory.clutz.d.ts"],
    lenient = True,
    deps = [":xhrlike"],
)
