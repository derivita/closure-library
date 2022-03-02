load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "adobereader",
    srcs = ["adobereader.js", "adobereader.clutz.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "iphoto",
    srcs = ["iphoto.js", "iphoto.clutz.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "jscript",
    srcs = ["jscript.js", "jscript.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

closure_js_library(
    name = "keyboard",
    srcs = ["keyboard.js", "keyboard.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/labs/useragent:platform"],
)

closure_js_library(
    name = "platform",
    srcs = ["platform.js", "platform.clutz.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "product",
    srcs = ["product.js", "product.clutz.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:platform",
    ],
)

closure_js_library(
    name = "product_isversion",
    srcs = ["product_isversion.js", "product_isversion.clutz.d.ts"],
    lenient = True,
    deps = [
        ":product",
        ":useragent",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/string",
    ],
)

closure_js_library(
    name = "useragent",
    srcs = ["useragent.js", "useragent.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/labs/useragent:util",
        "//closure/goog/reflect",
        "//closure/goog/string:internal",
    ],
)

closure_js_library(
    name = "useragenttestutil",
    testonly = 1,
    srcs = ["useragenttestutil.js", "useragenttestutil.clutz.d.ts"],
    lenient = True,
    deps = [
        ":keyboard",
        ":platform",
        ":product",
        ":product_isversion",
        ":useragent",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:engine",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/object",
    ],
)
