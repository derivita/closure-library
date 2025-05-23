load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

alias(
    name = "abstractmultirange",
    actual = ":range",
)

js_library(
    name = "abstractrange",
    srcs = [
        "abstractrange.d.ts",
        "abstractrange.js",
        "savedrange.d.ts",
        "savedrange.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":tagiterator",
        "//closure/goog/disposable",
        "//closure/goog/log",
        "//closure/goog/math:coordinate",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "annotate",
    srcs = [
        "annotate.d.ts",
        "annotate.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":safe",
        ":tagname",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/html:safehtml",
        "//closure/goog/object",
    ],
)

js_library(
    name = "asserts",
    srcs = [
        "asserts.d.ts",
        "asserts.js",
    ],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

js_library(
    name = "attr",
    srcs = [
        "attr.d.ts",
        "attr.js",
    ],
    lenient = True,
)

js_library(
    name = "browserfeature",
    srcs = [
        "browserfeature.d.ts",
        "browserfeature.js",
    ],
    lenient = True,
    deps = ["//closure/goog/useragent"],
)

js_library(
    name = "bufferedviewportsizemonitor",
    srcs = [
        "bufferedviewportsizemonitor.d.ts",
        "bufferedviewportsizemonitor.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":viewportsizemonitor",
        "//closure/goog/asserts",
        "//closure/goog/async:delay",
        "//closure/goog/events",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "classes",
    srcs = [
        "classes.d.ts",
        "classes.js",
    ],
    lenient = True,
    deps = ["//closure/goog/array"],
)

js_library(
    name = "classlist",
    srcs = [
        "classlist.d.ts",
        "classlist.js",
    ],
    lenient = True,
    deps = ["//closure/goog/array"],
)

alias(
    name = "controlrange",
    actual = ":range",
)

js_library(
    name = "dataset",
    srcs = [
        "dataset.d.ts",
        "dataset.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/labs/useragent:browser",
        "//closure/goog/string",
        "//closure/goog/useragent:product",
    ],
)

js_library(
    name = "dom",
    srcs = [
        "dom.d.ts",
        "dom.js",
    ],
    lenient = True,
    deps = [
        ":browserfeature",
        ":nodetype",
        ":safe",
        ":tagname",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/asserts:dom",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/math:coordinate",
        "//closure/goog/math:size",
        "//closure/goog/object",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "element",
    srcs = [
        "element.d.ts",
        "element.js",
    ],
    lenient = True,
    deps = [
        ":nodetype",
        ":tagname",
    ],
)

js_library(
    name = "fontsizemonitor",
    srcs = [
        "fontsizemonitor.d.ts",
        "fontsizemonitor.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":tagname",
        "//closure/goog/events",
        "//closure/goog/events:browserevent",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "forms",
    srcs = [
        "forms.d.ts",
        "forms.js",
    ],
    lenient = True,
    deps = [
        ":inputtype",
        ":safe",
        ":tagname",
        "//closure/goog/structs:map",
        "//closure/goog/window",
    ],
)

js_library(
    name = "fullscreen",
    srcs = [
        "fullscreen.d.ts",
        "fullscreen.js",
    ],
    lenient = True,
    deps = [":dom"],
)

js_library(
    name = "htmlelement",
    srcs = [
        "htmlelement.d.ts",
        "htmlelement.js",
    ],
    lenient = True,
)

js_library(
    name = "iframe",
    srcs = [
        "iframe.d.ts",
        "iframe.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":safe",
        ":tagname",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/string:const",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "inputtype",
    srcs = [
        "inputtype.d.ts",
        "inputtype.js",
    ],
    lenient = True,
)

js_library(
    name = "iter",
    srcs = [
        "iter.d.ts",
        "iter.js",
    ],
    lenient = True,
    deps = ["//closure/goog/iter"],
)

alias(
    name = "multirange",
    actual = ":range",
)

js_library(
    name = "nodeiterator",
    srcs = [
        "nodeiterator.d.ts",
        "nodeiterator.js",
    ],
    lenient = True,
    deps = [
        ":tagiterator",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "nodeoffset",
    srcs = [
        "nodeoffset.d.ts",
        "nodeoffset.js",
    ],
    lenient = True,
    deps = [
        ":tagname",
        "//closure/goog/disposable",
    ],
)

js_library(
    name = "nodetype",
    srcs = [
        "nodetype.d.ts",
        "nodetype.js",
    ],
    lenient = True,
)

js_library(
    name = "range",
    srcs = [
        "abstractmultirange.d.ts",
        "abstractmultirange.js",
        "controlrange.d.ts",
        "controlrange.js",
        "multirange.d.ts",
        "multirange.js",
        "range.d.ts",
        "range.js",
        "savedcaretrange.d.ts",
        "savedcaretrange.js",
        "textrange.d.ts",
        "textrange.js",
    ],
    lenient = True,
    deps = [
        ":abstractrange",
        ":browserfeature",
        ":dom",
        ":nodetype",
        ":tagiterator",
        ":tagname",
        ":textrangeiterator",
        "//closure/goog/array",
        "//closure/goog/dom/browserrange",
        "//closure/goog/dom/browserrange:abstractrange",
        "//closure/goog/iter",
        "//closure/goog/log",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "rangeendpoint",
    srcs = [
        "rangeendpoint.d.ts",
        "rangeendpoint.js",
    ],
    lenient = True,
)

js_library(
    name = "safe",
    srcs = [
        "safe.d.ts",
        "safe.js",
    ],
    deprecation = "Please use 'safevalues/dom' instead",
    lenient = True,
    deps = [
        ":asserts",
        "//closure/goog/asserts",
        "//closure/goog/asserts:dom",
        "//closure/goog/functions",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
        "//closure/goog/string:internal",
    ],
)

alias(
    name = "savedcaretrange",
    actual = ":range",
)

alias(
    name = "savedrange",
    actual = ":abstractrange",
)

js_library(
    name = "selection",
    srcs = [
        "selection.d.ts",
        "selection.js",
    ],
    lenient = True,
    deps = [
        ":inputtype",
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "tagiterator",
    srcs = [
        "tagiterator.d.ts",
        "tagiterator.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "tagname",
    srcs = [
        "tagname.d.ts",
        "tagname.js",
    ],
    lenient = True,
    deps = [":htmlelement"],
)

js_library(
    name = "tags",
    srcs = [
        "tags.d.ts",
        "tags.js",
    ],
    lenient = True,
    deps = ["//closure/goog/object"],
)

js_library(
    name = "textassert",
    srcs = [
        "textassert.d.ts",
        "textassert.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":tagname",
        "//closure/goog/asserts",
    ],
)

alias(
    name = "textrange",
    actual = ":range",
)

js_library(
    name = "textrangeiterator",
    srcs = [
        "textrangeiterator.d.ts",
        "textrangeiterator.js",
    ],
    lenient = True,
    deps = [
        ":abstractrange",
        ":dom",
        ":nodetype",
        ":tagname",
        "//closure/goog/array",
        "//closure/goog/iter",
    ],
)

js_library(
    name = "uri",
    srcs = [
        "uri.d.ts",
        "uri.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":safe",
        ":tagname",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/string:const",
    ],
)

js_library(
    name = "vendor",
    srcs = [
        "vendor.d.ts",
        "vendor.js",
    ],
    lenient = True,
    deps = [
        "//closure/goog/string",
        "//closure/goog/useragent",
    ],
)

js_library(
    name = "viewportsizemonitor",
    srcs = [
        "viewportsizemonitor.d.ts",
        "viewportsizemonitor.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        "//closure/goog/disposable",
        "//closure/goog/events",
        "//closure/goog/events:event",
        "//closure/goog/events:eventtarget",
        "//closure/goog/events:eventtype",
        "//closure/goog/math:size",
    ],
)

js_library(
    name = "xml",
    srcs = [
        "xml.d.ts",
        "xml.js",
    ],
    lenient = True,
    deps = [
        ":dom",
        ":nodetype",
        ":safe",
        "//closure/goog/html:legacyconversions",
        "//closure/goog/useragent",
    ],
)
