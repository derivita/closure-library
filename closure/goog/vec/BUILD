load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "float32array",
    srcs = ["float32array.js", "float32array.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "float64array",
    srcs = ["float64array.js", "float64array.clutz.d.ts"],
    lenient = True,
)

closure_js_library(
    name = "mat3",
    srcs = ["mat3.js", "mat3.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "mat3d",
    srcs = ["mat3d.js", "mat3d.clutz.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3d",
    ],
)

closure_js_library(
    name = "mat3f",
    srcs = ["mat3f.js", "mat3f.clutz.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3f",
    ],
)

closure_js_library(
    name = "mat4",
    srcs = ["mat4.js", "mat4.clutz.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
        ":vec4",
    ],
)

closure_js_library(
    name = "mat4d",
    srcs = ["mat4d.js", "mat4d.clutz.d.ts"],
    lenient = True,
    deps = [
        ":quaternion",
        ":vec",
        ":vec3d",
        ":vec4d",
    ],
)

closure_js_library(
    name = "mat4f",
    srcs = ["mat4f.js", "mat4f.clutz.d.ts"],
    lenient = True,
    deps = [
        ":quaternion",
        ":vec",
        ":vec3f",
        ":vec4f",
    ],
)

closure_js_library(
    name = "quaternion",
    srcs = ["quaternion.js", "quaternion.clutz.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
        ":vec4",
    ],
)

closure_js_library(
    name = "ray",
    srcs = ["ray.js", "ray.clutz.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
    ],
)

closure_js_library(
    name = "vec",
    srcs = ["vec.js", "vec.clutz.d.ts"],
    lenient = True,
    deps = [
        ":float32array",
        ":float64array",
    ],
)

closure_js_library(
    name = "vec2",
    srcs = ["vec2.js", "vec2.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec2d",
    srcs = ["vec2d.js", "vec2d.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec2f",
    srcs = ["vec2f.js", "vec2f.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec3",
    srcs = ["vec3.js", "vec3.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec3d",
    srcs = ["vec3d.js", "vec3d.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec3f",
    srcs = ["vec3f.js", "vec3f.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec4",
    srcs = ["vec4.js", "vec4.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec4d",
    srcs = ["vec4d.js", "vec4d.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)

closure_js_library(
    name = "vec4f",
    srcs = ["vec4f.js", "vec4f.clutz.d.ts"],
    lenient = True,
    deps = [":vec"],
)
