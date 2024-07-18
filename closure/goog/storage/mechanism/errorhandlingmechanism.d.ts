import { Mechanism } from './mechanism.js';
/**
 * Wraps a storage mechanism with a custom error handler.
 */
export declare class ErrorHandlingMechanism extends Mechanism {
    /**
     * Wraps a storage mechanism with a custom error handler.
     * @param mechanism Underlying storage mechanism.
     * @param errorHandler An error handler.
     */
    constructor(mechanism: Mechanism, errorHandler: ErrorHandlingMechanism.ErrorHandler | null);
    private noStructuralTyping_closure_goog_storage_mechanism_errorhandlingmechanism_ErrorHandlingMechanism;
    set(key: any, value: any): any;
    get(key: any): string;
    remove(key: any): any;
}
export declare namespace ErrorHandlingMechanism {
    /**
     * Valid storage mechanism operations.
     */
    enum Operation {
        SET = "set",
        GET = "get",
        REMOVE = "remove"
    }
    /**
     * A function that handles errors raised in goog.storage.  Since some places in
     * the goog.storage codebase throw strings instead of Error objects, we accept
     * these as a valid parameter type.  It supports the following arguments:
     *
     * 1) The raised error (either in Error or string form);
     * 2) The operation name which triggered the error, as defined per the
     * ErrorHandlingMechanism.Operation enum;
     * 3) The key that is passed to a storage method;
     * 4) An optional value that is passed to a storage method (only used in set
     * operations).
     */
    type ErrorHandler = () => any;
}
