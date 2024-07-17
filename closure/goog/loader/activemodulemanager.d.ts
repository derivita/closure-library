import { AbstractModuleManager } from './abstractmodulemanager.js';
/**
 * Applys a configuration function on moduleManager if it exists. Otherwise
 * store the configuration function inside of configureFunctions list so
 * that they can be applied when moduleManager is instantiated.
 */
declare function configure(configureFn: () => any): void;
/**
 * Gets the active module manager, instantiating one if necessary.
 */
declare function get(): AbstractModuleManager;
/**
 * Sets the active module manager. This should never be used to override an
 * existing manager.
 */
declare function set(newModuleManager: AbstractModuleManager): void;
/**
 * Stores a callback that will be used  to get an AbstractModuleManager instance
 * if set() is not called before the first get() call.
 */
declare function setDefault(fn: () => AbstractModuleManager): void;
/**
 * Method called just before module code is loaded.
 * @param id Identifier of the module.
 */
declare function beforeLoadModuleCode(id: string): void;
/**
 * Records that the currently loading module was loaded. Also initiates loading
 * the next module if any module requests are queued. This method is called by
 * code that is generated and appended to each dynamic module's code at
 * compilation time.
 */
declare function setLoaded(): void;
/**
 * Initialize the module manager.
 * @param info A string representation of the module dependency graph, in the form: module1:dep1,dep2/module2:dep1,dep2 etc. Where depX is the base-36 encoded position of the dep in the module list.
 * @param loadingModuleIds A list of moduleIds that are currently being loaded.
 */
declare function maybeInitialize(info?: string, loadingModuleIds?: string[]): void;
declare const _default: {
    get: typeof get;
    set: typeof set;
    setDefault: typeof setDefault;
    beforeLoadModuleCode: typeof beforeLoadModuleCode;
    setLoaded: typeof setLoaded;
    maybeInitialize: typeof maybeInitialize;
    reset: () => void;
    configure: typeof configure;
};
export default _default;
