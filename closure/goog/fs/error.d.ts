import { DebugError } from '../debug/error.js';
export interface DOMErrorLike {
    name: string | undefined;
    code: Error_.ErrorCode | undefined;
}
/**
 * A filesystem error. Since the filesystem API is asynchronous, stack traces
 * are less useful for identifying where errors come from, so this includes a
 * large amount of metadata in the message.
 */
declare class Error_ extends DebugError {
    /**
     * A filesystem error. Since the filesystem API is asynchronous, stack traces
     * are less useful for identifying where errors come from, so this includes a
     * large amount of metadata in the message.
     * @param action The action being undertaken when the error was raised.
     */
    constructor(error: DOMException | DOMErrorLike, action: string);
    private noStructuralTyping_closure_goog_fs_error_Error_;
    name: string;
    code: Error_.ErrorCode;
    code: Error_.ErrorCode;
}
declare namespace Error_ {
    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     */
    enum ErrorName {
        ABORT = "AbortError",
        ENCODING = "EncodingError",
        INVALID_MODIFICATION = "InvalidModificationError",
        INVALID_STATE = "InvalidStateError",
        NOT_FOUND = "NotFoundError",
        NOT_READABLE = "NotReadableError",
        NO_MODIFICATION_ALLOWED = "NoModificationAllowedError",
        PATH_EXISTS = "PathExistsError",
        QUOTA_EXCEEDED = "QuotaExceededError",
        SECURITY = "SecurityError",
        SYNTAX = "SyntaxError",
        TYPE_MISMATCH = "TypeMismatchError"
    }
    /**
     * Error codes for file errors.
     */
    enum ErrorCode {
        NOT_FOUND = 1,
        SECURITY = 2,
        ABORT = 3,
        NOT_READABLE = 4,
        ENCODING = 5,
        NO_MODIFICATION_ALLOWED = 6,
        INVALID_STATE = 7,
        SYNTAX = 8,
        INVALID_MODIFICATION = 9,
        QUOTA_EXCEEDED = 10,
        TYPE_MISMATCH = 11,
        PATH_EXISTS = 12
    }
}
export { Error_ as Error };
