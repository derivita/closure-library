import { Uri as GoogUri } from '../../uri/uri.js';
/**
 * The default URL parameter name to overwrite http headers with a URL param
 * to avoid CORS preflight.
 *
 * See https://github.com/whatwg/fetch/issues/210#issue-129531743 for the spec.
 */
export declare let HTTP_HEADERS_PARAM_NAME: string;
/**
 * The default URL parameter name to overwrite http method with a URL param
 * to avoid CORS preflight.
 *
 * See https://github.com/whatwg/fetch/issues/210#issue-129531743 for the spec.
 */
export declare let HTTP_METHOD_PARAM_NAME: string;
/**
 * Generates the URL parameter value with custom headers encoded as
 * HTTP/1.1 headers block.
 * @param headers The custom headers.
 * @return The URL param to overwrite custom HTTP headers.
 */
export declare function generateHttpHeadersOverwriteParam(headers: {
    [key: string]: string;
}): string;
/**
 * Generates the URL-encoded URL parameter value with custom headers encoded as
 * HTTP/1.1 headers block.
 * @param headers The custom headers.
 * @return The URL param to overwrite custom HTTP headers.
 */
export declare function generateEncodedHttpHeadersOverwriteParam(headers: {
    [key: string]: string;
}): string;
/**
 * Sets custom HTTP headers via an overwrite URL param.
 * @param url The URI object or a string path.
 * @param urlParam The URL param name.
 * @param extraHeaders The HTTP headers.
 * @return The URI object or a string path with headers encoded as a url param.
 */
export declare function setHttpHeadersWithOverwriteParam(url: GoogUri | string, urlParam: string, extraHeaders: {
    [key: string]: string;
}): GoogUri | string;
