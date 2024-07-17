import type { Uri } from '../uri/uri.js';
import type { BrowserChannel } from './browserchannel.js';
import type { BrowserTestChannel } from './browsertestchannel.js';
import type { ChannelDebug } from './channeldebug.js';
/**
 * Creates a ChannelRequest object which encapsulates a request to the server.
 * A new ChannelRequest is created for each request to the server.
 */
export declare class ChannelRequest {
    /**
     * Creates a ChannelRequest object which encapsulates a request to the server.
     * A new ChannelRequest is created for each request to the server.
     * @param channel The BrowserChannel that owns this request.
     * @param channelDebug A ChannelDebug to use for logging.
     * @param opt_sessionId The session id for the channel.
     * @param opt_requestId The request id for this request.
     * @param opt_retryId The retry id for this request.
     */
    constructor(channel: BrowserChannel | BrowserTestChannel | null, channelDebug: ChannelDebug | null, opt_sessionId?: string, opt_requestId?: string | number, opt_retryId?: number);
    private noStructuralTyping_closure_goog_net_channelrequest_ChannelRequest;
    /**
     * Default timeout in MS for a request. The server must return data within this
     * time limit for the request to not timeout.
     */
    static TIMEOUT_MS: number;
    /**
     * How often to poll (in MS) for changes to responseText in browsers that don't
     * fire onreadystatechange during incremental loading of responseText.
     */
    static POLLING_INTERVAL_MS: number;
    /**
     * Instantiates a ChannelRequest with the given parameters. Overidden in tests.
     * @param channel The BrowserChannel that owns this request.
     * @param channelDebug A ChannelDebug to use for logging.
     * @param opt_sessionId The session id for the channel.
     * @param opt_requestId The request id for this request.
     * @param opt_retryId The retry id for this request.
     * @return The created channel request.
     */
    static createChannelRequest(channel: BrowserChannel | BrowserTestChannel | null, channelDebug: ChannelDebug | null, opt_sessionId?: string, opt_requestId?: string | number, opt_retryId?: number): ChannelRequest;
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
     *
     * If XHR streaming is not supported, we will try to use an ActiveXObject
     * to create a Forever IFrame.
     * @return Whether XHR streaming is supported.
     */
    static supportsXhrStreaming(): boolean;
    /**
     * Sets extra HTTP headers to add to all the requests sent to the server.
     * @param extraHeaders The HTTP headers.
     */
    setExtraHeaders(extraHeaders: object | null): void;
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
     * Uses XMLHTTP to send an HTTP POST to the server.
     * @param uri The uri of the request.
     * @param postData The data for the post body.
     * @param decodeChunks Whether to the result is expected to be encoded for chunking and thus requires decoding.
     */
    xmlHttpPost(uri: Uri | null, postData: string, decodeChunks: boolean): void;
    /**
     * Uses XMLHTTP to send an HTTP GET to the server.
     * @param uri The uri of the request.
     * @param decodeChunks Whether to the result is expected to be encoded for chunking and thus requires decoding.
     * @param hostPrefix The host prefix, if we might be using a secondary domain.  Note that it should also be in the URL, adding this won't cause it to be added to the URL.
     * @param opt_noClose Whether to request that the tcp/ip connection should be closed.
     */
    xmlHttpGet(uri: Uri | null, decodeChunks: boolean, hostPrefix: string | null, opt_noClose?: boolean): void;
    /**
     * Uses the Trident htmlfile ActiveX control to send a GET request in IE. This
     * is the innovation discovered that lets us get intermediate results in
     * Internet Explorer.  Thanks to http://go/kev
     * @param uri The uri to request from.
     * @param usingSecondaryDomain Whether to use a secondary domain.
     */
    tridentGet(uri: Uri | null, usingSecondaryDomain: boolean): void;
    /**
     * Uses an IMG tag to send an HTTP get to the server. This is only currently
     * used to terminate the connection, as an IMG tag is the most reliable way to
     * send something to the server while the page is getting torn down.
     * @param uri The uri to send a request to.
     */
    sendUsingImgTag(uri: Uri | null): void;
    /**
     * Cancels the request no matter what the underlying transport is.
     */
    cancel(): void;
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
     * Returns the time that the request started, if it has started.
     * @return The time the request started, as returned by Date.now().
     */
    getRequestStartTime(): number | null;
}
export declare namespace ChannelRequest {
    /**
     * Enum for channel requests type
     */
    enum Type_ {
        XML_HTTP = 1,
        IMG = 2,
        TRIDENT = 3
    }
    /**
     * Enum type for identifying a ChannelRequest error.
     */
    enum Error {
        STATUS = 0,
        NO_DATA = 1,
        TIMEOUT = 2,
        UNKNOWN_SESSION_ID = 3,
        BAD_DATA = 4,
        HANDLER_EXCEPTION = 5,
        BROWSER_OFFLINE = 6,
        ACTIVE_X_BLOCKED = 7
    }
}
