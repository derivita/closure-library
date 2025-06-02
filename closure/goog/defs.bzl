load("@rules_derivita_ts//js:index.bzl", _real_js_library = "js_library")

def js_library(name, **kwargs):
    if kwargs.pop('lenient', False):
        kwargs['hide_warnings'] = True
    package = native.package_name()
    workspace = "closure-library"

    if package:
        module_name = workspace + "/" + package
    else:
        module_name = workspace
    _real_js_library(name = name, module_name = module_name, **kwargs)
