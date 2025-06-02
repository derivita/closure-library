load("//closure/goog:defs.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "avltree",
    srcs = ["avltree.js", "avltree.d.ts"],
    lenient = True,
    deps = [
        ":collection",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "circularbuffer",
    srcs = ["circularbuffer.js", "circularbuffer.d.ts"],
    lenient = True,
)

js_library(
    name = "collection",
    srcs = ["collection.js", "collection.d.ts"],
    lenient = True,
)

js_library(
    name = "heap",
    srcs = ["heap.js", "heap.d.ts"],
    lenient = True,
    deps = [
        ":node",
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

js_library(
    name = "inversionmap",
    srcs = ["inversionmap.js", "inversionmap.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "linkedmap",
    srcs = ["linkedmap.js", "linkedmap.d.ts"],
    lenient = True,
    deps = [":map"],
)

js_library(
    name = "map",
    srcs = ["map.js", "map.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/collections:iters",
        "//closure/goog/iter",
        "//closure/goog/iter:es6",
    ],
)

js_library(
    name = "node",
    srcs = ["node.js", "node.d.ts"],
    lenient = True,
)

js_library(
    name = "pool",
    srcs = ["pool.js", "pool.d.ts"],
    lenient = True,
    deps = [
        ":queue",
        ":set",
        "//closure/goog/disposable",
    ],
)

js_library(
    name = "prioritypool",
    srcs = ["prioritypool.js", "prioritypool.d.ts"],
    lenient = True,
    deps = [
        ":pool",
        ":priorityqueue",
    ],
)

js_library(
    name = "priorityqueue",
    srcs = ["priorityqueue.js", "priorityqueue.d.ts"],
    lenient = True,
    deps = [":heap"],
)

js_library(
    name = "quadtree",
    srcs = ["quadtree.js", "quadtree.d.ts"],
    lenient = True,
    deps = ["//closure/goog/math:coordinate"],
)

js_library(
    name = "queue",
    srcs = ["queue.js", "queue.d.ts"],
    lenient = True,
    deps = ["//closure/goog/array"],
)

js_library(
    name = "set",
    srcs = ["set.js", "set.d.ts"],
    lenient = True,
    deps = [
        ":collection",
        ":map",
        ":structs",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "simplepool",
    srcs = ["simplepool.js", "simplepool.d.ts"],
    lenient = True,
    deps = ["//closure/goog/disposable"],
)

js_library(
    name = "stringset",
    srcs = ["stringset.js", "stringset.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "structs",
    srcs = ["structs.js", "structs.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/object",
    ],
)

js_library(
    name = "treenode",
    srcs = ["treenode.js", "treenode.d.ts"],
    lenient = True,
    deps = [
        ":node",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

js_library(
    name = "trie",
    srcs = ["trie.js", "trie.d.ts"],
    lenient = True,
    deps = [
        ":structs",
        "//closure/goog/object",
    ],
)
