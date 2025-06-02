load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "mediamodel",
    srcs = ["mediamodel.js", "mediamodel.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "youtube",
    srcs = ["youtube.js", "youtube.d.ts"],
    lenient = True,
    deps = [
        ":mediamodel",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/ui:component",
        "//closure/goog/ui:control",
    ],
)
