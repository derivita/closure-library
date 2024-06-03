load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

alias(
    name = "basenode",
    actual = ":treecontrol",
)

closure_js_library(
    name = "treecontrol",
    srcs = [
        "basenode.js", "basenode.clutz.d.ts",
        "treecontrol.js", "treecontrol.clutz.d.ts",
        "treenode.js", "treenode.clutz.d.ts",
        "typeahead.js", "typeahead.clutz.d.ts",
    ],
    lenient = True,
    deps = [
        "//closure/goog/a11y/aria",
        "//closure/goog/a11y/aria:attributes",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/dom",
        "//closure/goog/dom:classlist",
        "//closure/goog/dom:safe",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtype",
        "//closure/goog/events:focushandler",
        "//closure/goog/events:keycodes",
        "//closure/goog/events:keyhandler",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/string:stringbuffer",
        "//closure/goog/structs:trie",
        "//closure/goog/style",
        "//closure/goog/timer",
        "//closure/goog/ui:component",
        "//closure/goog/useragent",
    ],
)

alias(
    name = "treenode",
    actual = ":treecontrol",
)

alias(
    name = "typeahead",
    actual = ":treecontrol",
)
