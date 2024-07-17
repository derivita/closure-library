import { Promise } from '../../promise/promise.js';
import { DebugError } from '../../debug/error.js';
import type { XhrLike } from '../../net/xhrlike.js';
import type { XmlHttpFactory } from '../../net/xmlhttpfactory.js';
/**
 * Configuration options for an XMLHttpRequest.
 * - headers: map of header key/value pairs.
 * - timeoutMs: number of milliseconds after which the request will be timed
 * out by the client. Default is to allow the browser to handle timeouts.
 * - withCredentials: whether user credentials are to be included in a
 * cross-origin request. See:
 * http://www.w3.org/TR/XMLHttpRequest/#the-withcredentials-attribute
 * - mimeType: allows the caller to override the content-type and charset for
 * the request. See:
 * http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-overridemimetype
 * - responseType: may be set to change the response type to an arraybuffer or
 * blob for downloading binary data. See:
 * http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-responsetype]
 * - xmlHttpFactory: allows the caller to override the factory used to create
 * XMLHttpRequest objects.
 * - xssiPrefix: Prefix used for protecting against XSSI attacks, which should
 * be removed before parsing the response as JSON.
 */
export type Options = {
    'headers': {
        [key: string]: string;
    } | undefined | null;
    'mimeType': string | undefined;
    'responseType': ResponseType | undefined | null;
    'timeoutMs': number | undefined;
    'withCredentials': boolean | undefined;
    'xmlHttpFactory': XmlHttpFactory | undefined | null;
    'xssiPrefix': string | undefined;
};
/**
 * Defines the types that are allowed as post data.
 */
export type PostData = ArrayBuffer | ArrayBufferView | Blob | Document | FormData | null | string | undefined | null;
/**
 * The Content-Type HTTP header name.
 */
export declare var CONTENT_TYPE_HEADER: string;
/**
 * The Content-Type HTTP header value for a url-encoded form.
 */
export declare var FORM_CONTENT_TYPE: string;
/**
 * Supported data types for the responseType field.
 * See: http://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-response
 */
export declare enum ResponseType {
    ARRAYBUFFER = "arraybuffer",
    BLOB = "blob",
    DOCUMENT = "document",
    JSON = "json",
    TEXT = "text"
}
/**
 * Sends a get request, returning a promise that will be resolved
 * with the response text once the request completes.
 * @param url The URL to request.
 * @param opt_options Configuration options for the request.
 * @return A promise that will be resolved with the response text once the request completes.
 */
export declare function get(url: string, opt_options?: Options | null): Promise<string>;
/**
 * Sends a post request, returning a promise that will be resolved
 * with the response text once the request completes.
 * @param url The URL to request.
 * @param data The body of the post request.
 * @param opt_options Configuration options for the request.
 * @return A promise that will be resolved with the response text once the request completes.
 */
export declare function post(url: string, data: PostData | null, opt_options?: Options | null): Promise<string>;
/**
 * Sends a get request, returning a promise that will be resolved with
 * the parsed response text once the request completes.
 * @param url The URL to request.
 * @param opt_options Configuration options for the request.
 * @return A promise that will be resolved with the response JSON once the request completes.
 */
export declare function getJson(url: string, opt_options?: Options | null): Promise<object | null>;
/**
 * Sends a get request, returning a promise that will be resolved with the
 * response as a Blob.
 * @param url The URL to request.
 * @param opt_options Configuration options for the request. If responseType is set, it will be ignored for this request.
 * @return A promise that will be resolved with an immutable Blob representing the file once the request completes.
 */
export declare function getBlob(url: string, opt_options?: Options | null): Promise<Blob>;
/**
 * Sends a get request, returning a promise that will be resolved with the
 * response as an array of bytes.
 *
 * Supported in all XMLHttpRequest level 2 browsers, as well as IE9. IE8 and
 * earlier are not supported.
 * @param url The URL to request.
 * @param opt_options Configuration options for the request. If responseType is set, it will be ignored for this request.
 * @return A promise that will be resolved with an array of bytes once the request completes.
 */
export declare function getBytes(url: string, opt_options?: Options | null): Promise<Uint8Array | number[]>;
/**
 * Sends a post request, returning a promise that will be resolved with
 * the parsed response text once the request completes.
 * @param url The URL to request.
 * @param data The body of the post request.
 * @param opt_options Configuration options for the request.
 * @return A promise that will be resolved with the response JSON once the request completes.
 */
export declare function postJson(url: string, data: PostData | null, opt_options?: Options | null): Promise<object | null>;
/**
 * Sends a request, returning a promise that will be resolved
 * with the XHR object once the request completes.
 *
 * If content type hasn't been set in opt_options headers, and hasn't been
 * explicitly set to null, default to form-urlencoded/UTF8 for POSTs.
 * @param method The HTTP method for the request.
 * @param url The URL to request.
 * @param data The body of the post request.
 * @param opt_options Configuration options for the request.
 * @return A promise that will be resolved with the XHR object once the request completes.
 */
export declare function send(method: string, url: string, data: PostData | null, opt_options?: Options | null): Promise<XhrLike.OrNative>;
/**
 *
 * @param opt_xssiPrefix Prefix used for protecting against XSSI attacks, which should be removed before parsing the response as JSON.
 * @return JSON-parsed value of the original responseText.
 */
export declare function parseJson(responseText: string, opt_xssiPrefix?: string): object;
/**
 * Generic error that may occur during a request.
 */
export declare class Error extends DebugError {
    /**
     * Generic error that may occur during a request.
     * @param message The error message.
     * @param url The URL that was being requested.
     * @param request The XHR that failed.
     */
    constructor(message: string, url: string, request: XhrLike.OrNative);
    private noStructuralTyping_closure_goog_labs_net_xhr_Error;
    /**
     * The URL that was requested.
     */
    url: string;
    /**
     * The XMLHttpRequest corresponding with the failed request.
     */
    xhr: XhrLike.OrNative;
}
/**
 * Class for HTTP errors.
 */
export declare class HttpError extends Error {
    /**
     * Class for HTTP errors.
     * @param status The HTTP status code of the response.
     * @param url The URL that was being requested.
     * @param request The XHR that failed.
     */
    constructor(status: number, url: string, request: XhrLike.OrNative);
    private noStructuralTyping_closure_goog_labs_net_xhr_HttpError;
    /**
     * The HTTP status code for the error.
     */
    status: number;
}
/**
 * Class for Timeout errors.
 */
export declare class TimeoutError extends Error {
    /**
     * Class for Timeout errors.
     * @param url The URL that timed out.
     * @param request The XHR that failed.
     */
    constructor(url: string, request: XhrLike.OrNative);
    private noStructuralTyping_closure_goog_labs_net_xhr_TimeoutError;
}
