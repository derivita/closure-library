import { AbstractModuleLoader } from '../module/abstractmoduleloader.js';
import { ModuleInfo } from '../module/moduleinfo.js';
import { ModuleLoadCallback } from '../module/moduleloadcallback.js';
import type { TrustedResourceUrl } from '../html/trustedresourceurl.js';
import type { BaseModule } from '../module/basemodule.js';
/**
 * The ModuleManager keeps track of all modules in the environment.
 * Since modules may not have their code loaded, we must keep track of them.
 */
export declare abstract class AbstractModuleManager {
    /**
     * The ModuleManager keeps track of all modules in the environment.
     * Since modules may not have their code loaded, we must keep track of them.
     */
    constructor();
    private noStructuralTyping_closure_goog_loader_abstractmodulemanager_AbstractModuleManager;
    /**
     * A non-HTTP status code indicating a corruption in loaded module.
     * This should be used by a ModuleLoader as a replacement for the HTTP code
     * given to the error handler function to indicated that the module was
     * corrupted.
     * This will set the forceReload flag on the loadModules method when retrying
     * module loading.
     */
    static CORRUPT_RESPONSE_STATUS_CODE: number;
    /**
     * Sets the batch mode as enabled or disabled for the module manager.
     * @param enabled Whether the batch mode is to be enabled or not.
     */
    setBatchModeEnabled(enabled: boolean): void;
    /**
     * Sets the concurrent loading mode as enabled or disabled for the module
     * manager. Requires a moduleloader implementation that supports concurrent
     * loads. The default {@see goog.module.ModuleLoader} does not.
     */
    setConcurrentLoadingEnabled(enabled: boolean): void;
    /**
     * Sets the module info for all modules. Should only be called once.
     * @param infoMap An object that contains a mapping from module id (String) to list of required module ids (Array).
     */
    setAllModuleInfo(infoMap: {
        [key: string]: string[];
    }): void;
    /**
     * Sets the module info for all modules. Should only be called once. Also
     * marks modules that are currently being loaded.
     * @param opt_info A string representation of the module dependency graph, in the form: module1:dep1,dep2/module2:dep1,dep2 etc. Where depX is the base-36 encoded position of the dep in the module list.
     * @param opt_loadingModuleIds A list of moduleIds that are currently being loaded.
     */
    setAllModuleInfoString(opt_info?: string, opt_loadingModuleIds?: string[]): void;
    /**
     * Gets a module info object by id.
     * @param id A module identifier.
     * @return The module info.
     */
    abstract getModuleInfo(id: string): ModuleInfo;
    /**
     * Register an extra runtime module dependency. After an extra edge is added,
     * any subsequent calls to load or loadMultiple will fetch toModule if the
     * fromModule was loaded.
     *
     * The mechanism for this is implementation dependent. If the implementation
     * does not support extra edges, it will throw an error.
     * @param fromModule The dependent module of the extra edge.
     * @param toModule The module dependency of the extra edge.
     */
    addExtraEdge(fromModule: string, toModule: string): void;
    /**
     * Remove an existing extra edge previously added by `addExtraEdge`.
     *
     * If the implementation does not support extra edges, it will throw an error.
     * @param fromModule The dependent module of the extra edge.
     * @param toModule The module dependency of the extra edge.
     */
    removeExtraEdge(fromModule: string, toModule: string): void;
    /**
     * Sets the module uris.
     * @param moduleUriMap The map of id/uris pairs for each module.
     */
    setModuleTrustedUris(moduleUriMap: {
        [key: string]: TrustedResourceUrl[];
    }): void;
    /**
     * Gets the application-specific module loader.
     * @return the loader.
     */
    getLoader(): AbstractModuleLoader | null;
    /**
     * Sets the application-specific module loader.
     */
    setLoader(loader: AbstractModuleLoader): void;
    /**
     * Gets the module context to use to initialize the module.
     * @return The context.
     */
    getModuleContext(): object | null;
    /**
     * Sets the module context to use to initialize the module.
     * @param context The context.
     */
    setModuleContext(context: object): void;
    /**
     * Determines if the ModuleManager is active
     * @return TRUE iff the ModuleManager is active (i.e., not idle).
     */
    isActive(): boolean;
    /**
     * Determines if the ModuleManager is user active
     * @return TRUE iff the ModuleManager is user active (i.e., not idle).
     */
    isUserActive(): boolean;
    /**
     * Preloads a module after a short delay.
     * @param id The id of the module to preload.
     * @param opt_timeout The number of ms to wait before adding the module id to the loading queue (defaults to 0 ms). Note that the module will be loaded asynchronously regardless of the value of this parameter.
     */
    abstract preloadModule(id: string, opt_timeout?: number): PromiseLike<any>;
    /**
     * Prefetches a JavaScript module and its dependencies, which means that the
     * module will be downloaded, but not evaluated. To complete the module load,
     * the caller should also call load or execOnLoad after prefetching the module.
     * @param id The id of the module to prefetch.
     */
    prefetchModule(id: string): void;
    /**
     * Records that the currently loading module was loaded. Also initiates loading
     * the next module if any module requests are queued. This method is called by
     * code that is generated and appended to each dynamic module's code at
     * compilation time.
     */
    abstract setLoaded(): any;
    /**
     * Gets whether a module is currently loading or in the queue, waiting to be
     * loaded.
     * @param id A module id.
     * @return TRUE iff the module is loading.
     */
    abstract isModuleLoading(id: string): boolean;
    /**
     * Requests that a function be called once a particular module is loaded.
     * Client code can use this method to safely call into modules that may not yet
     * be loaded. For consistency, this method always calls the function
     * asynchronously -- even if the module is already loaded. Initiates loading of
     * the module if necessary, unless opt_noLoad is true.
     * @param moduleId A module id.
     * @param fn Function to execute when the module has loaded.
     * @param opt_handler Optional handler under whose scope to execute the callback.
     * @param opt_noLoad TRUE iff not to initiate loading of the module.
     * @param opt_userInitiated TRUE iff the loading of the module was user initiated.
     * @param opt_preferSynchronous TRUE iff the function should be executed synchronously if the module has already been loaded.
     * @return A callback wrapper that exposes an abort and execute method.
     */
    abstract execOnLoad(moduleId: string, fn: Function, opt_handler?: object, opt_noLoad?: boolean, opt_userInitiated?: boolean, opt_preferSynchronous?: boolean): ModuleLoadCallback;
    /**
     * Loads a module, returning an IThenable for keeping track of the result.
     * @param moduleId A module id.
     * @param opt_userInitiated If the load is a result of a user action.
     * @return A deferred object.
     */
    abstract load(moduleId: string, opt_userInitiated?: boolean): PromiseLike<any>;
    /**
     * Loads a list of modules, returning a map of IThenables for keeping track of
     * the results.
     * @param moduleIds A list of module ids.
     * @param opt_userInitiated If the load is a result of a user action.
     * @return A mapping from id (String) to deferred objects that will callback or errback when the load for that id is finished.
     */
    abstract loadMultiple(moduleIds: string[], opt_userInitiated?: boolean): {
        [key: string]: PromiseLike<any>;
    };
    /**
     * Method called just before module code is loaded.
     * @param id Identifier of the module.
     */
    abstract beforeLoadModuleCode(id: string): any;
    /**
     * Register an initialization callback for the currently loading module. This
     * should only be called by script that is executed during the evaluation of
     * a module's javascript. This is almost equivalent to calling the function
     * inline, but ensures that all the code from the currently loading module
     * has been loaded. This makes it cleaner and more robust than calling the
     * function inline.
     *
     * If this function is called from the base module (the one that contains
     * the module manager code), the callback is held until #setAllModuleInfo
     * is called, or until #setModuleContext is called, whichever happens first.
     * @param fn A callback function that takes a single argument which is the module context.
     * @param opt_handler Optional handler under whose scope to execute the callback.
     */
    registerInitializationCallback(fn: Function, opt_handler?: object): void;
    /**
     * Register a late initialization callback for the currently loading module.
     * Callbacks registered via this function are executed similar to
     * {@see registerInitializationCallback}, but they are fired after all
     * initialization callbacks are called.
     * @param fn A callback function that takes a single argument which is the module context.
     * @param opt_handler Optional handler under whose scope to execute the callback.
     */
    registerLateInitializationCallback(fn: Function, opt_handler?: object): void;
    /**
     * Sets the constructor to use for the module object for the currently
     * loading module. The constructor should derive from
     * {@see BaseModule}.
     * @param fn The constructor function.
     */
    setModuleConstructor(fn: {
        new (): BaseModule | null;
    }): void;
    /**
     * The function to call if the module manager is in error.
     * @param types The callback type.
     * @param fn The function to register as a callback.
     */
    registerCallback(types: AbstractModuleManager.CallbackType | AbstractModuleManager.CallbackType[], fn: Function): void;
}
export declare namespace AbstractModuleManager {
    /**
     * The type of callbacks that can be registered with the module manager,.
     */
    enum CallbackType {
        ERROR = "error",
        IDLE = "idle",
        ACTIVE = "active",
        USER_IDLE = "userIdle",
        USER_ACTIVE = "userActive"
    }
}
