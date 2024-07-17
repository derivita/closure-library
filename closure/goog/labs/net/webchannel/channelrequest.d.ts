import { Channel as webChannelChannel } from './channel.js';
import { WebChannelDebug as webChannelWebChannelDebug } from './webchanneldebug.js';
import type { Uri } from '../../../uri/uri.js';
import type { Wire } from './wire.js';
import type { XhrIo } from '../../../net/xhrio.js';
/**
 * A new ChannelRequest is created for each request to the server.
 */
export declare class ChannelRequest {
    /**
     * A new ChannelRequest is created for each request to the server.
     * @param channel The channel that owns this request.
     * @param channelDebug A WebChannelDebug to use for logging.
     * @param opt_sessionId The session id for the channel.
     * @param opt_requestId The request id for this request.
     * @param opt_retryId The retry id for this request.
     */
    constructor(channel: webChannelChannel | null, channelDebug: webChannelWebChannelDebug | null, opt_sessionId?: string, opt_requestId?: string | number, opt_retryId?: number);
    private noStructuralTyping_closure_goog_labs_net_webchannel_channelrequest_ChannelRequest;
    /**
     * Returns a useful error string for debugging based on the specified error
     * code.
     * @param errorCode The error code.
     * @param statusCode The HTTP status code.
     * @return The error string for the given code combination.
     */
    static errorStringFromCode(errorCode: ChannelRequest.Error | null, statusCode: number): string;
    /**
     * Returns whether XHR streaming is supported on this browser.
     * @return Whether XHR streaming is supported.
     */
    static supportsXhrStreaming(): boolean;
    /**
     * Sets extra HTTP headers to add to all the requests sent to the server.
     * @param extraHeaders The HTTP headers.
     */
    setExtraHeaders(extraHeaders: object | null): void;
    /**
     * Overrides the default HTTP method.
     * @param verb The HTTP method
     */
    setVerb(verb: string): void;
    /**
     * Sets the timeout for a request
     * @param timeout The timeout in MS for when we fail the request.
     */
    setTimeout(timeout: number): void;
    /**
     * Sets the throttle for handling onreadystatechange events for the request.
     * @param throttle The throttle in ms.  A value of zero indicates no throttle.
     */
    setReadyStateChangeThrottle(throttle: number): void;
    /**
     * Sets the pending messages that this request is handling.
     * @param pendingMessages The pending messages for this request.
     */
    setPendingMessages(pendingMessages: (Wire.QueuedMap | null)[]): void;
    /**
     * Gets the pending messages that this request is handling, in case of a retry.
     * @return The pending messages for this request.
     */
    getPendingMessages(): (Wire.QueuedMap | null)[];
    /**
     * Uses XMLHTTP to send an HTTP POST to the server.
     * @param uri The uri of the request.
     * @param postData The data for the post body.
     * @param decodeChunks Whether to the result is expected to be encoded for chunking and thus requires decoding.
     */
    xmlHttpPost(uri: Uri | null, postData: string | null, decodeChunks: boolean): void;
    /**
     * Uses XMLHTTP to send an HTTP GET to the server.
     * @param uri The uri of the request.
     * @param decodeChunks Whether to the result is expected to be encoded for chunking and thus requires decoding.
     * @param hostPrefix The host prefix, if we might be using a secondary domain.  Note that it should also be in the URL, adding this won't cause it to be added to the URL.
     */
    xmlHttpGet(uri: Uri | null, decodeChunks: boolean, hostPrefix: string | null): void;
    /**
     * Check if the initial response header has been handled.
     * @return true if X_HTTP_INITIAL_RESPONSE has been handled.
     */
    isInitialResponseDecoded(): boolean;
    /**
     * Decodes X_HTTP_INITIAL_RESPONSE if present.
     */
    setDecodeInitialResponse(): void;
    /**
     * Uses an IMG tag or navigator.sendBeacon to send an HTTP get to the server.
     *
     * This is only currently used to terminate the connection, as an IMG tag is
     * the most reliable way to send something to the server while the page
     * is getting torn down.
     *
     * Navigator.sendBeacon is available on Chrome and Firefox as a formal
     * solution to ensure delivery without blocking window close. See
     * https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
     *
     * For Chrome Apps, sendBeacon is always necessary due to Content Security
     * Policy (CSP) violation of using an IMG tag.
     *
     * For react-native, we use xhr to send the actual close request, and assume
     * there is no page-close issue with react-native.
     * @param uri The uri to send a request to.
     */
    sendCloseRequest(uri: Uri | null): void;
    /**
     * Cancels the request no matter what the underlying transport is.
     */
    cancel(): void;
    /**
     * Resets the timeout.
     * @param opt_timeout The new timeout
     */
    resetTimeout(opt_timeout?: number): void;
    /**
     * Indicates whether the request was successful. Only valid after the handler
     * is called to indicate completion of the request.
     * @return True if the request succeeded.
     */
    getSuccess(): boolean;
    /**
     * If the request was not successful, returns the reason.
     * @return The last error.
     */
    getLastError(): ChannelRequest.Error | null;
    getErrorResponseHeaders(): {
        [key: string]: string;
    } | undefined;
    /**
     * Returns the status code of the last request.
     * @return The status code of the last request.
     */
    getLastStatusCode(): number;
    /**
     * Returns the session id for this channel.
     * @return The session ID.
     */
    getSessionId(): string | undefined;
    /**
     * Returns the request id for this request. Each request has a unique request
     * id and the request IDs are a sequential increasing count.
     * @return The request ID.
     */
    getRequestId(): string | number | undefined;
    /**
     * Returns the data for a post, if this request is a post.
     * @return The POST data provided by the request initiator.
     */
    getPostData(): string | null;
    /**
     * Returns the XhrIo request object.
     * @return Any XhrIo request created for this object.
     */
    getXhr(): XhrIo | null;
    /**
     * Returns the time that the request started, if it has started.
     * @return The time the request started, as returned by Date.now().
     */
    getRequestStartTime(): number | null;
    /**
     * Convenience factory method.
     * @param channel The channel object that owns this request.
     * @param channelDebug A WebChannelDebug to use for logging.
     * @param opt_sessionId The session id for the channel.
     * @param opt_requestId The request id for this request.
     * @param opt_retryId The retry id for this request.
     * @return The created channel request.
     */
    static createChannelRequest(channel: Channel | null, channelDebug: WebChannelDebug | null, opt_sessionId?: string, opt_requestId?: string | number, opt_retryId?: number): ChannelRequest;
}
export declare namespace ChannelRequest {
    /**
     * Enum for channel requests type
     */
    enum Type_ {
        XML_HTTP = 1,
        CLOSE_REQUEST = 2
    }
    /**
     * Enum type for identifying an error.
     */
    enum Error {
        STATUS = 0,
        NO_DATA = 1,
        TIMEOUT = 2,
        UNKNOWN_SESSION_ID = 3,
        BAD_DATA = 4,
        HANDLER_EXCEPTION = 5,
        BROWSER_OFFLINE = 6
    }
}
