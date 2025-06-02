load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "disposable",
    srcs = [
        "disposable.js", "disposable.d.ts",
        "dispose.js", "dispose.d.ts",
        "disposeall.js", "disposeall.d.ts",
    ],
    lenient = True,
    deps = [":idisposable"],
)

js_library(
    name = "idisposable",
    srcs = ["idisposable.js", "idisposable.d.ts"],
    lenient = True,
)
