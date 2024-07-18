import { DebugError } from '../debug/error.js';
/**
 * A database error. Since the stack trace can be unhelpful in an asynchronous
 * context, the error provides a message about where it was produced.
 */
export declare class Error extends DebugError {
    /**
     * A database error. Since the stack trace can be unhelpful in an asynchronous
     * context, the error provides a message about where it was produced.
     * @param error The DOMError instance returned by the browser for Chrome22+, or an error code for previous versions.
     * @param context A description of where the error occurred.
     * @param opt_message Additional message.
     */
    constructor(error: number | DOMException | Error.DOMErrorLike, context: string, opt_message?: string);
    private noStructuralTyping_closure_goog_db_error_Error;
    /**
     * The code for this error.
     */
    code: number;
    getName(): string;
    /**
     * Translates an error code into a more useful message.
     * @param code Error code.
     * @return A debug message.
     */
    static getMessage(code: number): string;
    /**
     * Translates an error name to an error code. This is purely kept for backwards
     * compatibility with Chrome21.
     * @param name The name of the erorr.
     * @return The error code corresponding to the error.
     */
    static getCode(name: string | undefined): number;
    /**
     * Converts an error code used by the old spec, to an error name used by the
     * latest spec.
     * @param code The error code to convert.
     * @return The corresponding name of the error.
     */
    static getName(code: Error.ErrorCode | number): Error.ErrorName;
    /**
     * Constructs an Error instance from an IDBRequest. This abstraction is
     * necessary to provide backwards compatibility with Chrome21.
     * @param request The request that failed.
     * @param message The error message to add to err if it's wrapped.
     * @return The error that caused the failure.
     */
    static fromRequest(request: IDBRequest, message: string): Error;
    /**
     * Constructs an Error instance from an DOMException. This abstraction
     * is necessary to provide backwards compatibility with Chrome21.
     * @param ex The exception that was thrown.
     * @param message The error message to add to err if it's wrapped.
     * @return The error that caused the failure.
     */
    static fromException(ex: DOMException | DOMException, message: string): Error;
}
export declare namespace Error {
    /**
     * A specific kind of database error. If a Version Change is unable to proceed
     * due to other open database connections, it will block and this error will be
     * thrown.
     */
    class VersionChangeBlockedError extends DebugError {
        /**
         * A specific kind of database error. If a Version Change is unable to proceed
         * due to other open database connections, it will block and this error will be
         * thrown.
         */
        constructor();
        private noStructuralTyping_closure_goog_db_error_VersionChangeBlockedError;
    }
    /**
     * Synthetic error codes for database errors, for use when IndexedDB
     * support is not available. This numbering differs in practice
     * from the browser implementations, but it is not meant to be reliable:
     * this object merely ensures that Error is loadable on platforms
     * that do not support IndexedDB.
     */
    enum DatabaseErrorCode_ {
        UNKNOWN_ERR = 1,
        NON_TRANSIENT_ERR = 2,
        NOT_FOUND_ERR = 3,
        CONSTRAINT_ERR = 4,
        DATA_ERR = 5,
        NOT_ALLOWED_ERR = 6,
        TRANSACTION_INACTIVE_ERR = 7,
        ABORT_ERR = 8,
        READ_ONLY_ERR = 9,
        TRANSIENT_ERR = 10,
        TIMEOUT_ERR = 11,
        QUOTA_ERR = 12,
        INVALID_ACCESS_ERR = 13,
        INVALID_STATE_ERR = 14
    }
    /**
     * Error codes for database errors.
     */
    type ErrorCode = number;
    const ErrorCode: {
        UNKNOWN_ERR: any;
        NON_TRANSIENT_ERR: any;
        NOT_FOUND_ERR: any;
        CONSTRAINT_ERR: any;
        DATA_ERR: any;
        NOT_ALLOWED_ERR: any;
        TRANSACTION_INACTIVE_ERR: any;
        ABORT_ERR: any;
        READ_ONLY_ERR: any;
        TIMEOUT_ERR: any;
        QUOTA_ERR: any;
        INVALID_ACCESS_ERR: 15 | DatabaseErrorCode_;
        INVALID_STATE_ERR: 11 | DatabaseErrorCode_;
    };
    interface DOMErrorLike {
        name: string | undefined;
    }
    /**
     * Names of all possible errors as returned from the browser.
     */
    enum ErrorName {
        ABORT_ERR = "AbortError",
        CONSTRAINT_ERR = "ConstraintError",
        DATA_CLONE_ERR = "DataCloneError",
        DATA_ERR = "DataError",
        INVALID_ACCESS_ERR = "InvalidAccessError",
        INVALID_STATE_ERR = "InvalidStateError",
        NOT_FOUND_ERR = "NotFoundError",
        QUOTA_EXCEEDED_ERR = "QuotaExceededError",
        READ_ONLY_ERR = "ReadOnlyError",
        SYNTAX_ERROR = "SyntaxError",
        TIMEOUT_ERR = "TimeoutError",
        TRANSACTION_INACTIVE_ERR = "TransactionInactiveError",
        UNKNOWN_ERR = "UnknownError",
        VERSION_ERR = "VersionError"
    }
}
