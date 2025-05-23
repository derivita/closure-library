load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "sets",
    srcs = ["sets.js", "sets.d.ts"],
    lenient = True,
    deps = ["//closure/goog/collections:iters"],
)

js_library(
    name = "iters",
    srcs = ["iters.js", "iters.d.ts"],
    lenient = True,
)

js_library(
    name = "maps",
    srcs = ["maps.js", "maps.d.ts"],
    lenient = True,
)
