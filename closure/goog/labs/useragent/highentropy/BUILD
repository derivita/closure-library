load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

js_library(
    name = "highentropydata",
    srcs = ["highentropydata.js", "highentropydata.d.ts"],
    lenient = True,
    deps = [":highentropyvalue"],
)

js_library(
    name = "highentropyvalue",
    srcs = ["highentropyvalue.js", "highentropyvalue.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:util",
        "//closure/goog/string:internal",
    ],
)
