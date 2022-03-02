load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "aes",
    srcs = ["aes.js", "aes.clutz.d.ts"],
    lenient = True,
    deps = [
        ":blockcipher",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "arc4",
    srcs = ["arc4.js", "arc4.clutz.d.ts"],
    lenient = True,
    deps = ["//closure/goog/asserts"],
)

closure_js_library(
    name = "base64",
    srcs = ["base64.js", "base64.clutz.d.ts"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog/asserts",
        "//closure/goog/string:internal",
        "//closure/goog/useragent",
        "//closure/goog/useragent:product",
    ],
)

closure_js_library(
    name = "basen",
    srcs = ["basen.js", "basen.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "blobhasher",
    srcs = ["blobhasher.js", "blobhasher.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/asserts",
        "//closure/goog/events:eventtarget",
        "//closure/goog/fs",
        "//closure/goog/log",
    ],
)

closure_js_library(
    name = "blockcipher",
    srcs = ["blockcipher.js", "blockcipher.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "bytestring_perf",
    testonly = 1,
    srcs = ["bytestring_perf.js", "bytestring_perf.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/testing:performancetable",
    ],
)

closure_js_library(
    name = "cbc",
    srcs = ["cbc.js", "cbc.clutz.d.ts"],
    lenient = True,
    deps = [
        ":blockcipher",
        ":crypt",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "crypt",
    srcs = ["crypt.js", "crypt.clutz.d.ts"],
    lenient = True,
    deps = [
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "ctr",
    srcs = ["ctr.js", "ctr.clutz.d.ts"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "hash",
    srcs = ["hash.js", "hash.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "hash32",
    srcs = ["hash32.js", "hash32.clutz.d.ts"],
    lenient = True,
    deps = [":crypt"],
)

closure_js_library(
    name = "hashtester",
    testonly = 1,
    srcs = ["hashtester.js", "hashtester.clutz.d.ts"],
    lenient = True,
    deps = [
        ":crypt",
        "//closure/goog/array",
        "//closure/goog/dom",
        "//closure/goog/dom:tagname",
        "//closure/goog/reflect",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:pseudorandom",
    ],
)

closure_js_library(
    name = "hmac",
    srcs = ["hmac.js", "hmac.clutz.d.ts"],
    lenient = True,
    deps = [":hash"],
)

closure_js_library(
    name = "md5",
    srcs = ["md5.js", "md5.clutz.d.ts"],
    lenient = True,
    deps = [":hash"],
)

closure_js_library(
    name = "pbkdf2",
    srcs = ["pbkdf2.js", "pbkdf2.clutz.d.ts"],
    lenient = True,
    deps = [
        ":crypt",
        ":hmac",
        ":sha1",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "sha1",
    srcs = ["sha1.js", "sha1.clutz.d.ts"],
    lenient = True,
    deps = [":hash"],
)

closure_js_library(
    name = "sha2",
    srcs = ["sha2.js", "sha2.clutz.d.ts"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog/array",
        "//closure/goog/asserts",
    ],
)

closure_js_library(
    name = "sha2_64bit",
    srcs = ["sha2_64bit.js", "sha2_64bit.clutz.d.ts"],
    lenient = True,
    deps = [
        ":hash",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/math:long",
    ],
)

closure_js_library(
    name = "sha224",
    srcs = ["sha224.js", "sha224.clutz.d.ts"],
    lenient = True,
    deps = [":sha2"],
)

closure_js_library(
    name = "sha256",
    srcs = ["sha256.js", "sha256.clutz.d.ts"],
    lenient = True,
    deps = [":sha2"],
)

closure_js_library(
    name = "sha384",
    srcs = ["sha384.js", "sha384.clutz.d.ts"],
    lenient = True,
    deps = [":sha2_64bit"],
)

closure_js_library(
    name = "sha512",
    srcs = ["sha512.js", "sha512.clutz.d.ts"],
    lenient = True,
    deps = [":sha2_64bit"],
)

closure_js_library(
    name = "sha512_256",
    srcs = ["sha512_256.js", "sha512_256.clutz.d.ts"],
    lenient = True,
    deps = [":sha2_64bit"],
)
