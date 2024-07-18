/**
 * Base class for custom error objects.
 */
declare class DebugError extends Error {
    /**
     * Base class for custom error objects.
     * @param msg The message associated with the error.
     * @param cause The original error object to chain with.
     */
    constructor(msg?: any, cause?: {
        'message': any | undefined;
        'name': any | undefined;
        'lineNumber': any | undefined;
        'fileName': any | undefined;
        'stack': any | undefined;
        'cause': any | undefined;
    });
    private noStructuralTyping_closure_goog_debug_error_DebugError;
    stack: string;
    message: string;
    cause: any;
    /**
     * Whether to report this error to the server. Setting this to false will
     * cause the error reporter to not report the error back to the server,
     * which can be useful if the client knows that the error has already been
     * logged on the server.
     */
    reportErrorToServer: boolean;
    name: string;
}
export { DebugError };
