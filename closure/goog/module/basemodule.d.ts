import { Disposable } from '../disposable/disposable.js';
/**
 * A basic module object that represents a module of JavaScript code that can
 * be dynamically loaded.
 */
export declare class BaseModule extends Disposable {
    /**
     * A basic module object that represents a module of JavaScript code that can
     * be dynamically loaded.
     */
    constructor();
    private noStructuralTyping_closure_goog_module_basemodule_BaseModule;
    /**
     * Performs any load-time initialization that the module requires.
     * @param context The module context.
     */
    initialize(context: object | null): void;
}
