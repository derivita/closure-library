import { XhrLike } from './xhrlike.js';
import { XmlHttpFactory } from './xmlhttpfactory.js';
/**
 * A factory of XML http request objects that supports cross domain requests.
 * This class should be instantiated and passed as the parameter of a
 * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
 */
export declare class CorsXmlHttpFactory extends XmlHttpFactory {
    /**
     * A factory of XML http request objects that supports cross domain requests.
     * This class should be instantiated and passed as the parameter of a
     * goog.net.XhrIo constructor to allow cross-domain requests in every browser.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_corsxmlhttpfactory_CorsXmlHttpFactory;
    createInstance(): XhrLike.OrNative;
    internalGetOptions(): object;
}
/**
 * An adapter around Internet Explorer's XDomainRequest object that makes it
 * look like a standard XMLHttpRequest. This can be used instead of
 * XMLHttpRequest to support CORS.
 */
export declare class IeCorsXhrAdapter implements XhrLike {
    /**
     * An adapter around Internet Explorer's XDomainRequest object that makes it
     * look like a standard XMLHttpRequest. This can be used instead of
     * XMLHttpRequest to support CORS.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_corsxmlhttpfactory_IeCorsXhrAdapter;
    /**
     * The simulated ready state.
     */
    readyState: number;
    /**
     * The simulated ready state change callback function.
     */
    onreadystatechange: ((() => any) | null) | undefined | null;
    response: any;
    /**
     * The simulated response text parameter.
     */
    responseText: string;
    /**
     * This implementation only supports text response.
     */
    responseType: string;
    /**
     * The simulated status code
     */
    status: number;
    responseXML: any;
    statusText: any;
    /**
     * Opens a connection to the provided URL.
     * @param method The HTTP method to use. Valid methods include GET and POST.
     * @param url The URL to contact. The authority of this URL must match the authority of the current page's URL (e.g. http or https).
     * @param opt_async Whether the request is asynchronous, defaulting to true. XDomainRequest does not support syncronous requests, so setting it to false will actually raise an exception.
     */
    open(method: string, url: string, opt_async?: boolean | null): any;
    /**
     * Sends the request to the remote server. Before calling this function, always
     * call {@link open}.
     * @param opt_content The content to send as POSTDATA, if any. Only string data is supported by this implementation.
     */
    send(opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | null | string | null): any;
    abort(): any;
    /**
     * Sets a request header to send to the remote server. Because this
     * implementation does not support request headers, this function does nothing.
     * @param key The name of the HTTP header to set. Ignored.
     * @param value The value to set for the HTTP header. Ignored.
     */
    setRequestHeader(key: string, value: string): any;
    /**
     * Returns the value of the response header identified by key. This
     * implementation only supports the 'content-type' header.
     * @param key The request header to fetch. If this parameter is set to 'content-type' (case-insensitive), this function returns the value of the 'content-type' request header. If this parameter is set to any other value, this function always returns an empty string.
     * @return The value of the response header, or an empty string if key is not 'content-type' (case-insensitive).
     */
    getResponseHeader(key: string): string;
    /**
     * Returns the response headers from the server. This implemntation only returns
     * the 'content-type' header.
     * @return The headers returned from the server.
     */
    getAllResponseHeaders(): string;
}
