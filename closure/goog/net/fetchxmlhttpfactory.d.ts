import { EventTarget } from '../events/eventtarget.js';
import { XhrLike } from './xhrlike.js';
import { XmlHttpFactory } from './xmlhttpfactory.js';
interface FetchXmlHttpFactoryOptions {
}
/**
 * Factory for creating Xhr objects that uses the native fetch() method.
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */
export declare class FetchXmlHttpFactory extends XmlHttpFactory {
    /**
     * Factory for creating Xhr objects that uses the native fetch() method.
     * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    constructor(opts: FetchXmlHttpFactoryOptions);
    private noStructuralTyping_closure_goog_net_fetchxmlhttpfactory_FetchXmlHttpFactory;
    createInstance(): XhrLike.OrNative;
    /**
     *
     * @param credentialsMode The credentials mode of the Service Worker fetch.
     */
    setCredentialsMode(credentialsMode: RequestCredentials): void;
    /**
     *
     * @param cacheMode The cache mode of the Service Worker fetch.
     */
    setCacheMode(cacheMode: RequestCache): void;
}
/**
 * FetchXmlHttp object constructor.
 */
export declare class FetchXmlHttp extends EventTarget implements XhrLike {
    /**
     * FetchXmlHttp object constructor.
     */
    constructor(worker: WorkerGlobalScope | null, streamBinaryChunks: boolean);
    private noStructuralTyping_closure_goog_net_fetchxmlhttpfactory_FetchXmlHttp;
    /**
     * Request state.
     */
    readyState: FetchXmlHttp.RequestState | null;
    /**
     * HTTP status.
     */
    status: number;
    /**
     * HTTP status string.
     */
    statusText: string;
    /**
     * Content of the response.
     */
    response: string | ArrayBuffer | Uint8Array[];
    /**
     * Content of the response.
     */
    responseText: string;
    /**
     * The type of the response.  If this is set to 'arraybuffer' the request will
     * be discrete, streaming is only supported for text encoded requests.
     */
    responseType: string;
    /**
     * Document response entity body.
     * NOTE: This is always null and not supported by this class.
     */
    responseXML: null;
    /**
     * Method to call when the state changes.
     */
    onreadystatechange: (() => any) | null;
    open(method: any, url: any, opt_async: any): any;
    send(opt_data: any): any;
    abort(): any;
    setRequestHeader(header: any, value: any): any;
    getResponseHeader(header: any): any;
    getAllResponseHeaders(): any;
    /**
     *
     * @param credentialsMode The credentials mode of the Service Worker fetch.
     */
    setCredentialsMode(credentialsMode: RequestCredentials): void;
    getCredentialsMode(): RequestCredentials | undefined;
    /**
     *
     * @param cacheMode The cache mode of the Service Worker fetch.
     */
    setCacheMode(cacheMode: RequestCache): void;
}
export declare namespace FetchXmlHttp {
    /**
     * State of the requests.
     */
    enum RequestState {
        UNSENT = 0,
        OPENED = 1,
        HEADER_RECEIVED = 2,
        LOADING = 3,
        DONE = 4
    }
}
export {};
