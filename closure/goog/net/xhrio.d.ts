import * as maps from '../collections/maps.js';
import { EventTarget } from '../events/eventtarget.js';
import { ErrorCode } from './errorcode.js';
import { XmlHttp } from './xmlhttp.js';
import type { Uri } from '../uri/uri.js';
import type { ErrorHandler } from '../debug/errorhandler.js';
import type { XhrLike } from './xhrlike.js';
import type { XmlHttpFactory } from './xmlhttpfactory.js';
/**
 * Basic class for handling XMLHttpRequests.
 */
export declare class XhrIo extends EventTarget {
    /**
     * Basic class for handling XMLHttpRequests.
     * @param opt_xmlHttpFactory Factory to use when creating XMLHttpRequest objects.
     */
    constructor(opt_xmlHttpFactory?: XmlHttpFactory | null);
    private noStructuralTyping_closure_goog_net_xhrio_XhrIo;
    /**
     * Map of default headers to add to every request, use:
     * XhrIo.headers.set(name, value)
     */
    headers: Map<string, string>;
    /**
     * The Content-Type HTTP header name
     */
    static CONTENT_TYPE_HEADER: string;
    /**
     * The Content-Transfer-Encoding HTTP header name
     */
    static CONTENT_TRANSFER_ENCODING: string;
    /**
     * The pattern matching the 'http' and 'https' URI schemes
     */
    static HTTP_SCHEME_PATTERN: RegExp;
    /**
     * The methods that typically come along with form data.  We set different
     * headers depending on whether the HTTP action is one of these.
     */
    static METHODS_WITH_FORM_DATA: string[];
    /**
     * The Content-Type HTTP header value for a url-encoded form
     */
    static FORM_CONTENT_TYPE: string;
    /**
     * Static send that creates a short lived instance of XhrIo to send the
     * request.
     * @param url Uri to make request to.
     * @param opt_callback Callback function for when request is complete.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     * @param opt_timeoutInterval Number of milliseconds after which an incomplete request will be aborted; 0 means no timeout is set.
     * @param opt_withCredentials Whether to send credentials with the request. Default to false. See {@link XhrIo#setWithCredentials}.
     * @return The sent XhrIo.
     */
    static send(url: string | Uri | null, opt_callback?: ((this: XhrIo | null) => any) | null, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | maps.MapLike<string, string> | null, opt_timeoutInterval?: number, opt_withCredentials?: boolean): XhrIo;
    /**
     * Disposes all non-disposed instances of XhrIo created by
     * {@link XhrIo.send}.
     * {@link XhrIo.send} cleans up the XhrIo instance
     * it creates when the request completes or fails.  However, if
     * the request never completes, then the XhrIo is not disposed.
     * This can occur if the window is unloaded before the request completes.
     * We could have {@link XhrIo.send} return the XhrIo
     * it creates and make the client of {@link XhrIo.send} be
     * responsible for disposing it in this case.  However, this makes things
     * significantly more complicated for the client, and the whole point
     * of {@link XhrIo.send} is that it's simple and easy to use.
     * Clients of {@link XhrIo.send} should call
     * {@link XhrIo.cleanup} when doing final
     * cleanup on window unload.
     */
    static cleanup(): void;
    /**
     * Installs exception protection for all entry point introduced by
     * XhrIo instances which are not protected by
     * {@link ErrorHandler#protectWindowSetTimeout},
     * {@link ErrorHandler#protectWindowSetInterval}, or
     * {@link goog.events.protectBrowserEventEntryPoint}.
     * @param errorHandler Error handler with which to protect the entry point(s).
     */
    static protectEntryPoints(errorHandler: ErrorHandler | null): void;
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
     * Sets the desired type for the response. At time of writing, this is only
     * supported in very recent versions of WebKit (10.0.612.1 dev and later).
     *
     * If this is used, the response may only be accessed via {@link #getResponse}.
     * @param type The desired type for the response.
     */
    setResponseType(type: XhrIo.ResponseType | null): void;
    /**
     * Gets the desired type for the response.
     * @return The desired type for the response.
     */
    getResponseType(): XhrIo.ResponseType | null;
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
     * Sets whether progress events are enabled for this request. Note
     * that progress events require pre-flight OPTIONS request handling
     * for CORS requests, and may cause trouble with older browsers. See
     * progressEventsEnabled_ for details.
     * @param enabled Whether progress events should be enabled.
     */
    setProgressEventsEnabled(enabled: boolean): void;
    /**
     * Gets whether progress events are enabled.
     * @return Whether progress events are enabled for this request.
     */
    getProgressEventsEnabled(): boolean;
    /**
     * Specify a Trust Tokens operation to execute alongside the request.
     * @param trustToken a Trust Tokens operation to execute.
     */
    setTrustToken(trustToken: TrustTokenAttributeType): void;
    /**
     * Instance send that actually uses XMLHttpRequest to make a server call.
     * @param url Uri to make request to.
     * @param opt_method Send method, default: GET.
     * @param opt_content Body data.
     * @param opt_headers Map of headers to add to the request.
     */
    send(url: string | Uri | null, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | maps.MapLike<string, string> | null): void;
    /**
     * Creates a new XHR object.
     * @return The newly created XHR object.
     */
    protected createXhr(): XhrLike.OrNative;
    /**
     * Abort the current XMLHttpRequest
     * @param opt_failureCode Optional error code to use - defaults to ABORT.
     */
    abort(opt_failureCode?: ErrorCode | null): void;
    /**
     * Nullifies all callbacks to reduce risks of leaks.
     */
    disposeInternal(): void;
    isActive(): boolean;
    isComplete(): boolean;
    isSuccess(): boolean;
    /**
     * Get the readystate from the Xhr object
     * Will only return correct result when called from the context of a callback
     * @return XmlHttp.ReadyState.*.
     */
    getReadyState(): XmlHttp.ReadyState | null;
    /**
     * Get the status from the Xhr object
     * Will only return correct result when called from the context of a callback
     * @return Http status.
     */
    getStatus(): number;
    /**
     * Get the status text from the Xhr object
     * Will only return correct result when called from the context of a callback
     * @return Status text.
     */
    getStatusText(): string;
    /**
     * Get the last Uri that was requested
     * @return Last Uri.
     */
    getLastUri(): string;
    /**
     * Get the response text from the Xhr object
     * Will only return correct result when called from the context of a callback.
     * @return Result from the server, or '' if no result available.
     */
    getResponseText(): string;
    /**
     * Get the response body from the Xhr object. This property is only available
     * in IE since version 7 according to MSDN:
     * http://msdn.microsoft.com/en-us/library/ie/ms534368(v=vs.85).aspx
     * Will only return correct result when called from the context of a callback.
     *
     * One option is to construct a VBArray from the returned object and convert
     * it to a JavaScript array using the toArray method:
     * `(new window['VBArray'](xhrIo.getResponseBody())).toArray()`
     * This will result in an array of numbers in the range of [0..255]
     *
     * Another option is to use the VBScript CStr method to convert it into a
     * string as outlined in http://stackoverflow.com/questions/1919972
     * @return Binary result from the server or null if not available.
     */
    getResponseBody(): object | null;
    /**
     * Get the response XML from the Xhr object
     * Will only return correct result when called from the context of a callback.
     * @return The DOM Document representing the XML file, or null if no result available.
     */
    getResponseXml(): Document | null;
    /**
     * Get the response and evaluates it as JSON from the Xhr object
     * Will only return correct result when called from the context of a callback
     * @param opt_xssiPrefix Optional XSSI prefix string to use for stripping of the response before parsing. This needs to be set only if your backend server prepends the same prefix string to the JSON response.
     * @return JavaScript object.
     */
    getResponseJson(opt_xssiPrefix?: string): object | undefined | null;
    /**
     * Get the response as the type specificed by {@link #setResponseType}. At time
     * of writing, this is only directly supported in very recent versions of WebKit
     * (10.0.612.1 dev and later). If the field is not supported directly, we will
     * try to emulate it.
     *
     * Emulating the response means following the rules laid out at
     * http://www.w3.org/TR/XMLHttpRequest/#the-response-attribute
     *
     * On browsers with no support for this (Chrome < 10, Firefox < 4, etc), only
     * response types of DEFAULT or TEXT may be used, and the response returned will
     * be the text response.
     *
     * On browsers with Mozilla's draft support for array buffers (Firefox 4, 5),
     * only response types of DEFAULT, TEXT, and ARRAY_BUFFER may be used, and the
     * response returned will be either the text response or the Mozilla
     * implementation of the array buffer response.
     *
     * On browsers will full support, any valid response type supported by the
     * browser may be used, and the response provided by the browser will be
     * returned.
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
     * Will only return correct result after ready state reaches `LOADED` (i.e.
     * `HEADERS_RECEIVED` as per MDN).
     * @return The value of the response headers or empty string.
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
    /**
     * Get the last error message
     * @return Last error code.
     */
    getLastErrorCode(): ErrorCode;
    /**
     * Get the last error message
     * @return Last error message.
     */
    getLastError(): string;
}
export declare namespace XhrIo {
    /**
     * Response types that may be requested for XMLHttpRequests.
     */
    enum ResponseType {
        DEFAULT = "",
        TEXT = "text",
        DOCUMENT = "document",
        BLOB = "blob",
        ARRAY_BUFFER = "arraybuffer"
    }
}
