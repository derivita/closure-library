import { XhrIo } from '../xhrio.js';
/**
 * The XhrStreamReader class.
 *
 * The caller must check isStreamingSupported() first.
 */
export declare class XhrStreamReader {
    constructor(xhr: XhrIo);
    /**
     * Returns whether response streaming is supported on this browser.
     */
    static isStreamingSupported(): boolean;
    /**
     * Returns the XHR request object.
     */
    getXhr(): XhrIo | null;
    /**
     * Gets the current stream status.
     */
    getStatus(): XhrStreamReaderStatus;
    /**
     * Sets the status handler.
     */
    setStatusHandler(handler: () => any): void;
    /**
     * Sets the data handler.
     */
    setDataHandler(handler: () => any): void;
}
/**
 * Enum type for current stream status.
 */
export declare enum XhrStreamReaderStatus {
    INIT = 0,
    ACTIVE = 1,
    SUCCESS = 2,
    XHR_ERROR = 3,
    NO_DATA = 4,
    BAD_DATA = 5,
    HANDLER_EXCEPTION = 6,
    TIMEOUT = 7,
    CANCELLED = 8
}
declare const _default: {
    XhrStreamReader: typeof XhrStreamReader;
    XhrStreamReaderStatus: typeof XhrStreamReaderStatus;
};
export default _default;
