load("@rules_derivita_ts//js:index.bzl", "js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

js_library(
    name = "float32array",
    srcs = ["float32array.js", "float32array.d.ts"],
    lenient = True,
)

js_library(
    name = "float64array",
    srcs = ["float64array.js", "float64array.d.ts"],
    lenient = True,
)

js_library(
    name = "mat3",
    srcs = ["mat3.js", "mat3.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
    ],
)

js_library(
    name = "mat3d",
    srcs = ["mat3d.js", "mat3d.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3d",
    ],
)

js_library(
    name = "mat3f",
    srcs = ["mat3f.js", "mat3f.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3f",
    ],
)

js_library(
    name = "mat4",
    srcs = ["mat4.js", "mat4.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
        ":vec4",
    ],
)

js_library(
    name = "mat4d",
    srcs = ["mat4d.js", "mat4d.d.ts"],
    lenient = True,
    deps = [
        ":quaternion",
        ":vec",
        ":vec3d",
        ":vec4d",
    ],
)

js_library(
    name = "mat4f",
    srcs = ["mat4f.js", "mat4f.d.ts"],
    lenient = True,
    deps = [
        ":quaternion",
        ":vec",
        ":vec3f",
        ":vec4f",
    ],
)

js_library(
    name = "quaternion",
    srcs = ["quaternion.js", "quaternion.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
        ":vec4",
    ],
)

js_library(
    name = "ray",
    srcs = ["ray.js", "ray.d.ts"],
    lenient = True,
    deps = [
        ":vec",
        ":vec3",
    ],
)

js_library(
    name = "vec",
    srcs = ["vec.js", "vec.d.ts"],
    lenient = True,
    deps = [
        ":float32array",
        ":float64array",
    ],
)

js_library(
    name = "vec2",
    srcs = ["vec2.js", "vec2.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec2d",
    srcs = ["vec2d.js", "vec2d.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec2f",
    srcs = ["vec2f.js", "vec2f.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec3",
    srcs = ["vec3.js", "vec3.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec3d",
    srcs = ["vec3d.js", "vec3d.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec3f",
    srcs = ["vec3f.js", "vec3f.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec4",
    srcs = ["vec4.js", "vec4.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec4d",
    srcs = ["vec4d.js", "vec4d.d.ts"],
    lenient = True,
    deps = [":vec"],
)

js_library(
    name = "vec4f",
    srcs = ["vec4f.js", "vec4f.d.ts"],
    lenient = True,
    deps = [":vec"],
)
