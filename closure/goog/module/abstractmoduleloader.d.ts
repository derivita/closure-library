import type { ModuleInfo } from './moduleinfo.js';
/**
 * An interface that loads JavaScript modules.
 */
interface AbstractModuleLoader {
    /**
     * Loads a list of JavaScript modules.
     */
    loadModules(ids: string[], moduleInfoMap: {
        [key: string]: ModuleInfo;
    }, loadOptions?: AbstractModuleLoader.LoadOptions): any;
    /**
     * Pre-fetches a JavaScript module.
     */
    prefetchModule(id: string, moduleInfo: ModuleInfo): any;
    /**
     * Whether or not the implementation supports extra edges.
     */
    supportsExtraEdges: boolean | undefined;
}
declare namespace AbstractModuleLoader {
    /**
     * A map of extra runtime module dependencies.
     * Since the polyfills for the ES6 Map/Set classes would cause a performance
     * regression, we are using plain Javascript objects to mimic their
     * functionality. The outer object will map a moduleId to another object, the
     * keys of which are the moduleIds of the modules it depends on: that is, if
     * `map['a']['b']` is true then module 'a' depends on module 'b'.
     */
    type ExtraEdgesMap = {
        [key: string]: {
            [key: string]: boolean;
        };
    };
    /**
     * Optional parameters for the loadModules method.
     */
    interface LoadOptions {
        /**
         * A map of extra runtime module dependencies.
         */
        extraEdges: AbstractModuleLoader.ExtraEdgesMap | undefined;
        /**
         * Whether to bypass cache while loading the module.
         */
        forceReload: boolean | undefined;
        /**
         * The callback if module loading is an error.
         */
        onError: any;
        /**
         * The callback if module loading is a success.
         */
        onSuccess: any;
        /**
         * The callback if module loading times out.
         */
        onTimeout: any;
    }
}
export { AbstractModuleLoader };
