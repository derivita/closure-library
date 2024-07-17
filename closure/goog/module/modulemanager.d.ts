import { DebugError } from '../debug/error.js';
import { IDisposable } from '../disposable/idisposable.js';
import { AbstractModuleManager } from '../loader/abstractmodulemanager.js';
import { ModuleInfo } from './moduleinfo.js';
import { ModuleLoadCallback } from './moduleloadcallback.js';
import { ModuleLoadFailure } from './moduleloadfailure.js';
/**
 * The ModuleManager keeps track of all modules in the environment.
 * Since modules may not have their code loaded, we must keep track of them.
 */
export declare class ModuleManager extends AbstractModuleManager implements IDisposable {
    /**
     * The ModuleManager keeps track of all modules in the environment.
     * Since modules may not have their code loaded, we must keep track of them.
     */
    constructor();
    private noStructuralTyping_closure_goog_module_modulemanager_ModuleManager;
    /**
     * A mapping from module id to ModuleInfo object.
     */
    protected moduleInfoMap: {
        [key: string]: ModuleInfo;
    };
    /**
     * A non-HTTP status code indicating a corruption in loaded module.
     * This should be used by a ModuleLoader as a replacement for the HTTP code
     * given to the error handler function to indicated that the module was
     * corrupted.
     * This will set the forceReload flag on the loadModules method when retrying
     * module loading.
     */
    static CORRUPT_RESPONSE_STATUS_CODE: number;
    static getInstance(): AbstractModuleManager;
    setBatchModeEnabled(enabled: any): void;
    setConcurrentLoadingEnabled(enabled: any): void;
    setAllModuleInfo(infoMap: any): void;
    setAllModuleInfoString(opt_info: any, opt_loadingModuleIds: any): void;
    static SUBTRACTIVE_MODULE_LOADING: boolean;
    getModuleInfo(id: any): ModuleInfo;
    /**
     *
     */
    addExtraEdge(fromModule: string, toModule: string): void;
    /**
     *
     */
    removeExtraEdge(fromModule: string, toModule: string): void;
    setModuleTrustedUris(moduleUriMap: any): void;
    setModuleContext(context: any): void;
    isActive(): boolean;
    isUserActive(): boolean;
    preloadModule(id: any, opt_timeout: any): PromiseLike<any>;
    prefetchModule(id: any): void;
    setLoaded(): any;
    isModuleLoading(id: any): boolean;
    execOnLoad(moduleId: any, fn: any, opt_handler: any, opt_noLoad: any, opt_userInitiated: any, opt_preferSynchronous: any): ModuleLoadCallback;
    load(moduleId: any, opt_userInitiated: any): PromiseLike<any>;
    loadMultiple(moduleIds: any, opt_userInitiated: any): {
        [key: string]: PromiseLike<any>;
    };
    beforeLoadModuleCode(id: any): any;
    registerInitializationCallback(fn: any, opt_handler: any): void;
    registerLateInitializationCallback(fn: any, opt_handler: any): void;
    setModuleConstructor(fn: any): void;
    registerCallback(types: any, fn: any): void;
    dispose(): any;
    isDisposed(): any;
}
export declare namespace ModuleManager {
    /**
     * Error used to indicate a module has failed.
     */
    class ModuleFailureError extends DebugError {
        /**
         * Error used to indicate a module has failed.
         * @param moduleID The id of the module that didn't load.
         */
        constructor(moduleID: string, failureType: ModuleLoadFailure | null);
        private noStructuralTyping_closure_goog_module_modulemanager_ModuleFailureError;
        failureType: ModuleLoadFailure | null;
    }
    /**
     * The type of callbacks that can be registered with the module manager,.
     */
    type CallbackType = string;
    const CallbackType: typeof AbstractModuleManager.CallbackType;
}
