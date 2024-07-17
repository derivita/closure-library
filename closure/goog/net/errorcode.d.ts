/**
 * Error codes
 */
export declare enum ErrorCode {
    NO_ERROR = 0,
    ACCESS_DENIED = 1,
    FILE_NOT_FOUND = 2,
    FF_SILENT_ERROR = 3,
    CUSTOM_ERROR = 4,
    EXCEPTION = 5,
    HTTP_ERROR = 6,
    ABORT = 7,
    TIMEOUT = 8,
    OFFLINE = 9
}
export declare namespace ErrorCode {
    /**
     * Returns a friendly error message for an error code. These messages are for
     * debugging and are not localized.
     * @param errorCode An error code.
     * @return A message for debugging.
     */
    var getDebugMessage: string;
}
