import { AbstractModuleLoader } from './abstractmoduleloader.js';
import { EventId } from '../events/eventid.js';
import { EventTarget } from '../events/eventtarget.js';
import { Event as GoogEvent } from '../events/event.js';
import { TrustedResourceUrl } from '../html/trustedresourceurl.js';
import * as log from '../log/log.js';
/**
 * A class that loads JavaScript modules.
 */
declare class ModuleLoader extends EventTarget implements AbstractModuleLoader {
    /**
     * A class that loads JavaScript modules.
     */
    constructor();
    private noStructuralTyping_closure_goog_module_moduleloader_ModuleLoader;
    /**
     * A logger.
     */
    protected logger: log.Logger | null;
    static supportsSourceUrlStackTraces(): boolean;
    static supportsSourceUrlDebugger(): boolean;
    /**
     * Gets the debug mode for the loader.
     * @return Whether the debug mode is enabled.
     */
    getDebugMode(): boolean;
    /**
     *
     * @param useScriptTags Whether or not to use script tags (with async=false) for loading.
     */
    setUseScriptTags(useScriptTags: boolean): void;
    /**
     * Gets whether we're using non-async script tags for loading.
     * @return Whether or not we're using non-async script tags for loading.
     */
    getUseScriptTags(): boolean;
    /**
     * Sets whether we're using non-async script tags for loading.
     * @param debugMode Whether the debug mode is enabled.
     */
    setDebugMode(debugMode: boolean): void;
    /**
     * When enabled, we will add a sourceURL comment to the end of all scripts
     * to mark their origin.
     *
     * On WebKit, stack traces will reflect the sourceURL comment, so this is
     * useful for debugging webkit stack traces in production.
     *
     * Notice that in debug mode, we will use source url injection + eval rather
     * then appending script nodes to the DOM, because the scripts will load far
     * faster.  (Appending script nodes is very slow, because we can't parallelize
     * the downloading and evaling of the script).
     *
     * The cost of appending sourceURL information is negligible when compared to
     * the cost of evaling the script. Almost all clients will want this on.
     *
     * TODO(nicksantos): Turn this on by default. We may want to turn this off
     * for clients that inject their own sourceURL.
     * @param enabled Whether source url injection is enabled.
     */
    setSourceUrlInjection(enabled: boolean): void;
    loadModules(ids: any, moduleInfoMap: any, { forceReload, onError, onSuccess, onTimeout }?: {
        forceReload: any;
        onError: any;
        onSuccess: any;
        onTimeout: any;
    }): any;
    prefetchModule(id: any, moduleInfo: any): any;
    /**
     * Events dispatched by the ModuleLoader.
     */
    static EventType: {
        EVALUATE_CODE: EventId<any>;
        REQUEST_SUCCESS: EventId<any>;
        REQUEST_ERROR: EventId<any>;
    };
}
declare namespace ModuleLoader {
    class EvaluateCodeEvent extends GoogEvent {
        /**
         *
         * @param moduleIds The ids of the modules being evaluated.
         */
        constructor(moduleIds: string[]);
        private noStructuralTyping_closure_goog_module_moduleloader_EvaluateCodeEvent;
        moduleIds: string[];
    }
    class RequestSuccessEvent extends GoogEvent {
        /**
         *
         * @param moduleIds The ids of the modules being evaluated.
         */
        constructor(moduleIds: string[]);
        private noStructuralTyping_closure_goog_module_moduleloader_RequestSuccessEvent;
        moduleIds: string[];
    }
    class RequestErrorEvent extends GoogEvent {
        /**
         *
         * @param moduleIds The ids of the modules being evaluated.
         * @param status The response status.
         * @param opt_error The error encountered, if available.
         */
        constructor(moduleIds: string[], status: number | null, opt_error?: Error);
        private noStructuralTyping_closure_goog_module_moduleloader_RequestErrorEvent;
        moduleIds: string[] | null;
        status: number | null;
        error: Error | null;
    }
    /**
     * A class that keeps the state of the module during the loading process. It is
     * used to save loading information between modules download and evaluation.
     */
    class LoadStatus {
        /**
         * A class that keeps the state of the module during the loading process. It is
         * used to save loading information between modules download and evaluation.
         * @param trustedRequestUris the uris containing the modules implementing ids.
         */
        constructor(trustedRequestUris: TrustedResourceUrl[]);
        private noStructuralTyping_closure_goog_module_moduleloader_LoadStatus;
        /**
         * The request uris.
         */
        requestUris: string[];
        /**
         * A TrustedResourceUrl version of `this.requestUris`
         */
        trustedRequestUris: TrustedResourceUrl[];
        /**
         * The response texts.
         */
        responseTexts: string[] | null;
        /**
         * Whether loadModules was called for the set of modules referred by this
         * status.
         */
        loadRequested: boolean;
        /**
         * Success callback.
         */
        successFn: (() => any) | null;
        /**
         * Error callback.
         */
        errorFn: (() => any) | null;
    }
}
export { ModuleLoader };
