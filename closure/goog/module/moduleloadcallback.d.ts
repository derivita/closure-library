/**
 * Class used to encapsulate the callbacks to be called when a module loads.
 */
export declare class ModuleLoadCallback {
    /**
     * Class used to encapsulate the callbacks to be called when a module loads.
     * @param fn Callback function.
     * @param opt_handler Optional handler under whose scope to execute the callback.
     */
    constructor(fn: Function | null, opt_handler?: object | null);
    private noStructuralTyping_closure_goog_module_moduleloadcallback_ModuleLoadCallback;
    /**
     * Completes the operation and calls the callback function if appropriate.
     * @param context The module context.
     */
    execute(context: any): void;
    /**
     * Abort the callback, but not the actual module load.
     */
    abort(): void;
}
