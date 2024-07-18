import { EventTarget } from '../events/eventtarget.js';
import { EventType } from './eventtype.js';
import { XhrIo } from './xhrio.js';
import { XhrIoPool } from './xhriopool.js';
import { Map } from '../structs/map.js';
/**
 * A manager of an XhrIoPool.
 */
export declare class XhrManager extends EventTarget {
    /**
     * A manager of an XhrIoPool.
     * @param opt_maxRetries Max. number of retries (Default: 1).
     * @param opt_headers Map of default headers to add to every request.
     * @param opt_minCount Min. number of objects (Default: 0).
     * @param opt_maxCount Max. number of objects (Default: 10).
     * @param opt_timeoutInterval Timeout (in ms) before aborting an attempt (Default: 0ms).
     * @param opt_withCredentials Add credentials to every request (Default: false).
     */
    constructor(opt_maxRetries?: number, opt_headers?: Map | null, opt_minCount?: number, opt_maxCount?: number, opt_timeoutInterval?: number, opt_withCredentials?: boolean);
    private noStructuralTyping_closure_goog_net_xhrmanager_XhrManager;
    /**
     * Sets the number of milliseconds after which an incomplete request will be
     * aborted. Zero means no timeout is set.
     * @param ms Timeout interval in milliseconds; 0 means none.
     */
    setTimeoutInterval(ms: number): void;
    /**
     * Returns the number of requests either in flight, or waiting to be sent.
     * The count will include the current request if used within a COMPLETE event
     * handler or callback.
     * @return The number of requests in flight or pending send.
     */
    getOutstandingCount(): number;
    /**
     * Returns an array of request ids that are either in flight, or waiting to
     * be sent. The id of the current request will be included if used within a
     * COMPLETE event handler or callback.
     * @return Request ids in flight or pending send.
     */
    getOutstandingRequestIds(): string[];
    /**
     * Registers the given request to be sent. Throws an error if a request
     * already exists with the given ID.
     * NOTE: It is not sent immediately. It is buffered and will be sent when an
     * XhrIo object becomes available, taking into account the request's
     * priority. Note also that requests of equal priority are sent in an
     * implementation specific order - to get FIFO queue semantics use a
     * monotonically increasing priority for successive requests.
     * @param id The id of the request.
     * @param url Uri to make the request to.
     * @param opt_method Send method, default: GET.
     * @param opt_content Post data.
     * @param opt_headers Map of headers to add to the request.
     * @param opt_priority The priority of the request. A smaller value means a higher priority.
     * @param opt_callback Callback function for when request is complete. The only param is the event object from the COMPLETE event.
     * @param opt_maxRetries The maximum number of times the request should be retried.
     * @param opt_responseType The response type of this request; defaults to XhrIo.ResponseType.DEFAULT.
     * @param opt_withCredentials Add credentials to this request, default: false.
     * @return The queued request object.
     */
    send(id: string, url: string, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | Map | null, opt_priority?: number, opt_callback?: Function | null, opt_maxRetries?: number, opt_responseType?: XhrIo.ResponseType | null, opt_withCredentials?: boolean): XhrManager.Request;
    /**
     * Aborts the request associated with id.
     * @param id The id of the request to abort.
     * @param opt_force If true, remove the id now so it can be reused. No events are fired and the callback is not called when forced.
     */
    abort(id: string, opt_force?: boolean): void;
    /**
     * Overrides the XhrIoPool for testing, to be used with
     * goog.testing.net.XhrIoPool.
     */
    setXhrPoolForTesting(testingPool: XhrIoPool): void;
    disposeInternal(): void;
}
export declare namespace XhrManager {
    /**
     * An event dispatched by XhrManager.
     */
    class Event extends Event {
        /**
         * An event dispatched by XhrManager.
         * @param type Event Type.
         * @param target Reference to the object that is the target of this event.
         * @param id The id of the request this event is for.
         * @param xhrIo The XhrIo object of the request.
         */
        constructor(type: EventType | null, target: XhrManager | null, id: string, xhrIo: XhrIo | null);
        private noStructuralTyping_closure_goog_net_xhrmanager_Event;
        /**
         * The id of the request this event is for.
         */
        id: string;
        /**
         * The XhrIo object of the request.
         */
        xhrIo: XhrIo | null;
    }
    /**
     * An encapsulation of everything needed to make a Xhr request.
     * NOTE: This is used internal to the XhrManager.
     */
    class Request {
        /**
         * An encapsulation of everything needed to make a Xhr request.
         * NOTE: This is used internal to the XhrManager.
         * @param url Uri to make the request too.
         * @param xhrEventCallback Callback attached to the events of the XhrIo object of the request.
         * @param opt_method Send method, default: GET.
         * @param opt_content Post data.
         * @param opt_headers Map of headers to add to the request.
         * @param opt_callback Callback function for when request is complete. NOTE: Only 1 callback supported across all events.
         * @param opt_maxRetries The maximum number of times the request should be retried (Default: 1).
         * @param opt_responseType The response type of this request; defaults to XhrIo.ResponseType.DEFAULT.
         * @param opt_withCredentials Add credentials to this request, default: false.
         */
        constructor(url: string, xhrEventCallback: Function | null, opt_method?: string, opt_content?: ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | null, opt_headers?: object | Map | null, opt_callback?: Function | null, opt_maxRetries?: number, opt_responseType?: XhrIo.ResponseType | null, opt_withCredentials?: boolean);
        private noStructuralTyping_closure_goog_net_xhrmanager_Request;
        /**
         * The XhrIo instance handling this request. Set in handleAvailableXhr.
         */
        xhrIo: XhrIo | null;
        /**
         * Gets the uri.
         * @return The uri to make the request to.
         */
        getUrl(): string;
        /**
         * Gets the send method.
         * @return The send method.
         */
        getMethod(): string;
        /**
         * Gets the post data.
         * @return The post data.
         */
        getContent(): ArrayBuffer | ArrayBufferView | Blob | Document | FormData | string | undefined | null;
        /**
         * Gets the map of headers.
         * @return The map of headers.
         */
        getHeaders(): object | Map | null;
        /**
         * Gets the withCredentials flag.
         * @return Add credentials, or not.
         */
        getWithCredentials(): boolean;
        /**
         * Gets the maximum number of times the request should be retried.
         * @return The maximum number of times the request should be retried.
         */
        getMaxRetries(): number;
        /**
         * Gets the number of attempts so far.
         * @return The number of attempts so far.
         */
        getAttemptCount(): number;
        /**
         * Increases the number of attempts so far.
         */
        increaseAttemptCount(): void;
        /**
         * Returns whether the request has reached the maximum number of retries.
         * @return Whether the request has reached the maximum number of retries.
         */
        hasReachedMaxRetries(): boolean;
        /**
         * Sets the completed status.
         * @param complete The completed status.
         */
        setCompleted(complete: boolean): void;
        /**
         * Gets the completed status.
         * @return The completed status.
         */
        getCompleted(): boolean;
        /**
         * Sets the aborted status.
         * @param aborted True if the request was aborted, otherwise False.
         */
        setAborted(aborted: boolean): void;
        /**
         * Gets the aborted status.
         * @return True if request was aborted, otherwise False.
         */
        getAborted(): boolean;
        /**
         * Gets the callback attached to the events of the XhrIo object.
         * @return The callback attached to the events of the XhrIo object.
         */
        getXhrEventCallback(): Function | null;
        /**
         * Gets the callback for when the request is complete.
         * @return The callback for when the request is complete.
         */
        getCompleteCallback(): Function | undefined | null;
        /**
         * Gets the response type that will be set on this request's XhrIo when it's
         * available.
         * @return The response type to be set when an XhrIo becomes available to this request.
         */
        getResponseType(): XhrIo.ResponseType;
    }
}
