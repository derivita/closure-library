import { Uri } from '../../uri/uri.js';
import * as maps from '../../collections/maps.js';
import { ErrorCode } from '../../net/errorcode.js';
import { XhrIo as netXhrIo } from '../../net/xhrio.js';
import { XmlHttp } from '../../net/xmlhttp.js';
import { TestQueue } from '../testqueue.js';
import type { XhrLike } from '../../net/xhrlike.js';
/**
 * Mock implementation of netXhrIo. This doesn't provide a mock
 * implementation for all cases, but it's not too hard to add them as needed.
 */
declare class XhrIo_ extends netXhrIo {
    /**
     * Mock implementation of netXhrIo. This doesn't provide a mock
     * implementation for all cases, but it's not too hard to add them as needed.
     * @param opt_testQueue Test queue for inserting test events.
     */
    constructor(opt_testQueue?: TestQueue | null);
    private noStructuralTyping_closure_goog_testing_net_xhrio_XhrIo_;
    /**
     * Map of default headers to add to every request, use:
     * XhrIo.headers.set(name, value)
     */
    headers: Map<string, string>;
    /**
     * Some compiled tests replace netXhrIo with XhrIo_,
     * which would cause a circular constructor loop.
     */
    static base: typeof netXhrIo;
    /**
     * To emulate the behavior of the actual XhrIo, we do not allow access to the
     * XhrIo's properties outside the event callbacks. For backwards compatibility,
     * we allow tests to allow access by setting this value to true.
     */
    static allowUnsafeAccessToXhrIoOutsideCallbacks: boolean;
    /**
     * Alias this array here to make mocking of netXhrIo easier.
     */
    static METHODS_WITH_FORM_DATA: string[];
    /**
     * Returns an Array containing all non-disposed instances of
     * XhrIo_ created by {@link XhrIo_.send}.
     * @return Array of XhrIo_ instances.
     */
    static getSendInstances(): XhrIo_[];
    /**
     * Disposes all non-disposed instances of XhrIo_ created by
     * {@link XhrIo_.send}.
     */
    static cleanup(): void;
    /**
     * Simulates the static XhrIo send method.
     * @param url Uri to make request to.
     * @param opt_callback Callback function for when request is complete.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     * @param opt_timeoutInterval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     * @param opt_withCredentials Whether to send credentials with the request. Default to false. See {@link netXhrIo#setWithCredentials}.
     * @return The mocked sent XhrIo.
     */
    static send(url: string, opt_callback?: Function | null, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | maps.MapLike<string, string> | null, opt_timeoutInterval?: number, opt_withCredentials?: boolean): XhrIo_;
    /**
     * Returns the number of milliseconds after which an incomplete request will be
     * aborted, or 0 if no timeout is set.
     * @return Timeout interval in milliseconds.
     */
    getTimeoutInterval(): number;
    /**
     * Sets the number of milliseconds after which an incomplete request will be
     * aborted and a {@link EventType.TIMEOUT} event raised; 0 means no
     * timeout is set.
     * @param ms Timeout interval in milliseconds; 0 means none.
     */
    setTimeoutInterval(ms: number): void;
    /**
     * Causes timeout events to be fired.
     */
    simulateTimeout(): void;
    /**
     * Sets the desired type for the response. At time of writing, this is only
     * supported in very recent versions of WebKit (10.0.612.1 dev and later).
     *
     * If this is used, the response may only be accessed via {@link #getResponse}.
     * @param type The desired type for the response.
     */
    setResponseType(type: netXhrIo.ResponseType | null): void;
    /**
     * Gets the desired type for the response.
     * @return The desired type for the response.
     */
    getResponseType(): netXhrIo.ResponseType;
    /**
     * Sets whether a "credentialed" request that is aware of cookie and
     * authentication information should be made. This option is only supported by
     * browsers that support HTTP Access Control. As of this writing, this option
     * is not supported in IE.
     * @param withCredentials Whether this should be a "credentialed" request.
     */
    setWithCredentials(withCredentials: boolean): void;
    /**
     * Gets whether a "credentialed" request is to be sent.
     * @return The desired type for the response.
     */
    getWithCredentials(): boolean;
    /**
     * Specify a Trust Tokens operation to execute alongside the request.
     * @param trustToken a Trust Tokens operation to execute.
     */
    setTrustToken(trustToken: TrustTokenAttributeType): void;
    /**
     * Sets whether progress events are enabled for this request. Note
     * that progress events require pre-flight OPTIONS request handling
     * for CORS requests, and may cause trouble with older browsers. See
     * netXhrIo.progressEventsEnabled_ for details.
     * @param enabled Whether progress events should be enabled.
     */
    setProgressEventsEnabled(enabled: boolean): void;
    /**
     * Gets whether progress events are enabled.
     * @return Whether progress events are enabled for this request.
     */
    getProgressEventsEnabled(): boolean;
    /**
     * Abort the current XMLHttpRequest
     * @param opt_failureCode Optional error code to use - defaults to ABORT.
     */
    abort(opt_failureCode?: ErrorCode): void;
    /**
     * Simulates the XhrIo send.
     * @param url Uri to make request too.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     */
    send(url: Uri | string | null, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | maps.MapLike<string, string> | null): void;
    /**
     * Creates a new XHR object.
     * @return The newly created XHR object.
     */
    createXhr(): XhrLike.OrNative;
    /**
     * Simulates changing to the new ready state.
     * @param readyState Ready state to change to.
     */
    simulateReadyStateChange(readyState: number): void;
    /**
     * Simulate receiving some bytes but the request not fully completing, and
     * the XHR entering the 'INTERACTIVE' state.
     * @param partialResponse A string to append to the response text.
     * @param opt_headers Simulated response headers.
     */
    simulatePartialResponse(partialResponse: string, opt_headers?: object | null): void;
    /**
     * Simulates receiving a response.
     * @param statusCode Simulated status code.
     * @param response Simulated response.
     * @param opt_headers Simulated response headers.
     */
    simulateResponse(statusCode: number, response: string | Document | ArrayBuffer | Blob | null, opt_headers?: object | null): void;
    /**
     * Simulates the Xhr is ready for the next request.
     */
    simulateReady(): void;
    /**
     * Simulates the Xhr progress event.
     * @param lengthComputable Whether progress is measurable.
     * @param loaded Amount of work already performed.
     * @param total Total amount of work to perform.
     * @param opt_isDownload Whether the progress is from a download or upload.
     */
    simulateProgress(lengthComputable: boolean, loaded: number, total: number, opt_isDownload?: boolean): void;
    isActive(): boolean;
    /**
     * Has the request completed.
     * @return Whether the request has completed.
     */
    isComplete(): boolean;
    /**
     * Has the request compeleted with a success.
     * @return Whether the request compeleted successfully.
     */
    isSuccess(): boolean;
    /**
     * Returns the readystate.
     * @return XmlHttp.ReadyState.*.
     */
    getReadyState(): XmlHttp.ReadyState;
    /**
     * Get the status from the Xhr object.  Will only return correct result when
     * called from the context of a callback.
     * @return Http status.
     */
    getStatus(): number;
    /**
     * Get the status text from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     * @return Status text.
     */
    getStatusText(): string;
    /**
     * Gets the last error message.
     * @return Last error code.
     */
    getLastErrorCode(): ErrorCode;
    /**
     * Gets the last URI that was requested.
     * @return Last URI.
     */
    getLastUri(): string;
    /**
     * Gets the last HTTP method that was requested.
     * @return Last HTTP method used by send.
     */
    getLastMethod(): string | undefined;
    /**
     * Gets the last POST content that was requested.
     * @return Last POST content or undefined if last request was a GET.
     */
    getLastContent(): ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | undefined | null;
    /**
     * Gets the headers of the last request.
     * @return Last headers manually set in send call or undefined if no additional headers were specified.
     */
    getLastRequestHeaders(): object | maps.MapLike<string, string> | undefined | null;
    /**
     * Gets the response text from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     * @return Result from the server.
     */
    getResponseText(): string;
    /**
     * Gets the response body from the Xhr object. Will only return correct result
     * when called from the context of a callback.
     * @return Binary result from the server or null.
     */
    getResponseBody(): object | null;
    /**
     * Gets the response and evaluates it as JSON from the Xhr object.  Will only
     * return correct result when called from the context of a callback.
     * @param opt_xssiPrefix Optional XSSI prefix string to use for stripping of the response before parsing. This needs to be set only if your backend server prepends the same prefix string to the JSON response.
     * @return JavaScript object.
     */
    getResponseJson(opt_xssiPrefix?: string): object | undefined;
    /**
     * Gets the response XML from the Xhr object.  Will only return correct result
     * when called from the context of a callback.
     * @return Result from the server if it was XML.
     */
    getResponseXml(): Document | null;
    /**
     * Get the response as the type specificed by {@link #setResponseType}. At time
     * of writing, this is only supported in very recent versions of WebKit
     * (10.0.612.1 dev and later).
     * @return The response.
     */
    getResponse(): any;
    /**
     * Get the value of the response-header with the given name from the Xhr object
     * Will only return correct result when called from the context of a callback
     * and the request has completed
     * @param key The name of the response-header to retrieve.
     * @return The value of the response-header named key.
     */
    getResponseHeader(key: string): string | undefined;
    /**
     * Gets the text of all the headers in the response.
     * Will only return correct result when called from the context of a callback
     * and the request has completed
     * @return The string containing all the response headers.
     */
    getAllResponseHeaders(): string;
    /**
     * Returns all response headers as a key-value map.
     * Multiple values for the same header key can be combined into one,
     * separated by a comma and a space.
     * Note that the native getResponseHeader method for retrieving a single header
     * does a case insensitive match on the header name. This method does not
     * include any case normalization logic, it will just return a key-value
     * representation of the headers.
     * See: http://www.w3.org/TR/XMLHttpRequest/#the-getresponseheader()-method
     * @return An object with the header keys as keys and header values as values.
     */
    getResponseHeaders(): {
        [key: string]: string;
    };
    /**
     * Get the value of the response-header with the given name from the Xhr object.
     * As opposed to {@link #getResponseHeader}, this method does not require that
     * the request has completed.
     * @param key The name of the response-header to retrieve.
     * @return The value of the response-header, or null if it is unavailable.
     */
    getStreamingResponseHeader(key: string): string | null;
    /**
     * Gets the text of all the headers in the response. As opposed to
     * {@link #getAllResponseHeaders}, this method does not require that the request
     * has completed.
     * @return The value of the response headers or empty string.
     */
    getAllStreamingResponseHeaders(): string;
}
declare namespace XhrIo_ {
    /**
     * Alias this enum here to make mocking of netXhrIo easier.
     */
    type ResponseType = string;
    const ResponseType: typeof netXhrIo.ResponseType;
}
export { XhrIo_ as XhrIo };
