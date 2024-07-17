import { Uri } from '../uri/uri.js';
import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import { ErrorCode } from './errorcode.js';
import type { Map } from '../structs/map.js';
/**
 * Class for managing requests via iFrames.
 */
export declare class IframeIo extends EventTarget {
    /**
     * Class for managing requests via iFrames.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_iframeio_IframeIo;
    /**
     * Prefix for frame names
     */
    static FRAME_NAME_PREFIX: string;
    /**
     * Suffix that is added to inner frames used for sending requests in non-IE
     * browsers
     */
    static INNER_FRAME_SUFFIX: string;
    /**
     * The number of milliseconds after a request is completed to dispose the
     * iframes.  This can be done lazily so we wait long enough for any processing
     * that occurred as a result of the response to finish.
     */
    static IFRAME_DISPOSE_DELAY_MS: number;
    /**
     * Static send that creates a short lived instance of IframeIo to send the
     * request.
     * @param uri Uri of the request, it is up the caller to manage query string params.
     * @param opt_callback Event handler for when request is completed.
     * @param opt_method Default is GET, POST uses a form to submit the request.
     * @param opt_noCache Append a timestamp to the request to avoid caching.
     * @param opt_data Map of key-value pairs that will be posted to the server via the iframe's form.
     */
    static send(uri: Uri | string | null, opt_callback?: Function | null, opt_method?: string, opt_noCache?: boolean, opt_data?: object | Map | null): void;
    /**
     * Find an iframe by name (assumes the context is goog.global since that is
     * where IframeIo's iframes are kept).
     * @param fname The name to find.
     * @return The iframe element with that name.
     */
    static getIframeByName(fname: string): HTMLIFrameElement | null;
    /**
     * Find an instance of the IframeIo object by name.
     * @param fname The name to find.
     * @return The instance of IframeIo.
     */
    static getInstanceByName(fname: string): IframeIo | null;
    /**
     * Handles incremental data and routes it to the correct iframeIo instance.
     * The HTML page requested by the IframeIo instance should contain script blocks
     * that call an externed reference to this method.
     * @param win The window object.
     * @param data The data object.
     */
    static handleIncrementalData(win: Window | null, data: object | null): void;
    /**
     * Sends a request via an iframe.
     *
     * A HTML form is used and submitted to the iframe, this simplifies the
     * difference between GET and POST requests. The iframe needs to be created and
     * destroyed for each request otherwise the request will contribute to the
     * history stack.
     *
     * sendFromForm does some clever trickery (thanks jlim) in non-IE browsers to
     * stop a history entry being added for POST requests.
     * @param uri Uri of the request.
     * @param opt_method Default is GET, POST uses a form to submit the request.
     * @param opt_noCache Append a timestamp to the request to avoid caching.
     * @param opt_data Map of key-value pairs.
     */
    send(uri: Uri | string | null, opt_method?: string, opt_noCache?: boolean, opt_data?: object | Map | null): void;
    /**
     * Sends the data stored in an existing form to the server. The HTTP method
     * should be specified on the form, the action can also be specified but can
     * be overridden by the optional URI param.
     *
     * This can be used in conjunction will a file-upload input to upload a file in
     * the background without affecting history.
     *
     * Example form:
     * <pre>
     * &lt;form action="/server/" enctype="multipart/form-data" method="POST"&gt;
     * &lt;input name="userfile" type="file"&gt;
     * &lt;/form&gt;
     * </pre>
     * @param form Form element used to send the request to the server.
     * @param opt_uri Uri to set for the destination of the request, by default the uri will come from the form.
     * @param opt_noCache Append a timestamp to the request to avoid caching.
     */
    sendFromForm(form: HTMLFormElement | null, opt_uri?: string, opt_noCache?: boolean): void;
    /**
     * Abort the current Iframe request
     * @param opt_failureCode Optional error code to use - defaults to ABORT.
     */
    abort(opt_failureCode?: ErrorCode | null): void;
    disposeInternal(): void;
    isComplete(): boolean;
    isSuccess(): boolean;
    isActive(): boolean;
    /**
     * Returns the last response text (i.e. the text content of the iframe).
     * Assumes plain text!
     * @return Result from the server.
     */
    getResponseText(): string | null;
    /**
     * Returns the last response html (i.e. the innerHtml of the iframe).
     * @return Result from the server.
     */
    getResponseHtml(): string | null;
    /**
     * Parses the content as JSON. This is a legacy method for browsers without
     * JSON.parse or for responses that are not valid JSON (e.g. containing NaN).
     * Use JSON.parse(this.getResponseText()) in the other cases.
     * @return The parsed content.
     */
    getResponseJson(): object | null;
    /**
     * Returns the document object from the last request.  Not truly XML, but
     * used to mirror the XhrIo interface.
     * @return The document object from the last request.
     */
    getResponseXml(): HTMLDocument | null;
    /**
     * Get the uri of the last request.
     * @return Uri of last request.
     */
    getLastUri(): Uri | null;
    /**
     * Gets the last error code.
     * @return Last error code.
     */
    getLastErrorCode(): ErrorCode | null;
    /**
     * Gets the last error message.
     * @return Last error message.
     */
    getLastError(): string;
    /**
     * Gets the last custom error.
     * @return Last custom error.
     */
    getLastCustomError(): object | null;
    /**
     * Sets the callback function used to check if a loaded IFrame is in an error
     * state.
     * @param fn Callback that expects a document object as it's single argument.
     */
    setErrorChecker(fn: Function | null): void;
    /**
     * Gets the callback function used to check if a loaded IFrame is in an error
     * state.
     * @return A callback that expects a document object as it's single argument.
     */
    getErrorChecker(): Function | null;
    isIgnoringResponse(): boolean;
    /**
     * Sets whether to ignore the response from the server by not adding any event
     * handlers to fire when the iframe loads. This is necessary when using IframeIo
     * to submit to a server on another domain, to avoid same-origin violations when
     * trying to access the response. If this is set to true, the IframeIo instance
     * will be a single-use instance that is only usable for one request.  It will
     * only clean up its resources (iframes and forms) when it is disposed.
     * @param ignore Whether to ignore the server response.
     */
    setIgnoreResponse(ignore: boolean): void;
    getRequestIframe(): HTMLIFrameElement | null;
    /**
     * Test-only exports.
     */
    static TEST_ONLY: {
        getForm: any;
    };
}
export declare namespace IframeIo {
    /**
     * Class for representing incremental data events.
     */
    class IncrementalDataEvent extends Event {
        /**
         * Class for representing incremental data events.
         * @param data The data associated with the event.
         */
        constructor(data: object | null);
        private noStructuralTyping_closure_goog_net_iframeio_IncrementalDataEvent;
        /**
         * The data associated with the event.
         */
        data: object | null;
    }
}
