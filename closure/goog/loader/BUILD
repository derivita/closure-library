load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "abstractmodulemanager",
    srcs = ["abstractmodulemanager.js", "abstractmodulemanager.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/module:abstractmoduleloader",
        "//closure/goog/module:basemodule",
        "//closure/goog/module:moduleinfo",
        "//closure/goog/module:moduleloadcallback",
    ],
)

js_library(
    name = "activemodulemanager",
    srcs = ["activemodulemanager.js", "activemodulemanager.d.ts"],
    lenient = True,
    deps = [
        ":abstractmodulemanager",
        "//closure/goog/asserts",
    ],
)
