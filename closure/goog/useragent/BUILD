load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "adobereader",
    srcs = ["adobereader.js", "adobereader.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

js_library(
    name = "iphoto",
    srcs = ["iphoto.js", "iphoto.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

js_library(
    name = "jscript",
    srcs = ["jscript.js", "jscript.d.ts"],
    lenient = True,
    deps = ["//closure/goog/string"],
)

js_library(
    name = "keyboard",
    srcs = ["keyboard.js", "keyboard.d.ts"],
    lenient = True,
    deps = ["//closure/goog/labs/useragent:platform"],
)

js_library(
    name = "platform",
    srcs = ["platform.js", "platform.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/string",
    ],
)

js_library(
    name = "product",
    srcs = ["product.js", "product.d.ts"],
    lenient = True,
    deps = [
        ":useragent",
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/labs/useragent:platform",
    ],
)

js_library(
    name = "product_isversion",
    srcs = ["product_isversion.js", "product_isversion.d.ts"],
    lenient = True,
    deps = [
        ":product",
        ":useragent",
        "//closure/goog/labs/useragent:platform",
        "//closure/goog/string",
    ],
)

js_library(
    name = "useragent",
    srcs = ["useragent.js", "useragent.d.ts"],
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

js_library(
    name = "useragenttestutil",
    testonly = 1,
    srcs = ["useragenttestutil.js", "useragenttestutil.d.ts"],
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
