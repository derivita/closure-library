import { Event as GEvent } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import type { ErrorHandler } from '../debug/errorhandler.js';
/**
 * Class encapsulating the logic for using a WebSocket.
 */
declare class WebSocket_ extends EventTarget {
    /**
     * Class encapsulating the logic for using a WebSocket.
     * @param opt_params Parameters describing behavior of the WebSocket.
     */
    constructor(opt_params?: WebSocket_.Options);
    private noStructuralTyping_closure_goog_net_websocket_WebSocket_;
    /**
     * Installs exception protection for all entry points introduced by
     * WebSocket_ instances which are not protected by
     * {@link ErrorHandler#protectWindowSetTimeout},
     * {@link ErrorHandler#protectWindowSetInterval}, or
     * {@link events.protectBrowserEventEntryPoint}.
     * @param errorHandler Error handler with which to protect the entry points.
     */
    static protectEntryPoints(errorHandler: ErrorHandler): void;
    /**
     * Creates and opens the actual WebSocket.  Only call this after attaching the
     * appropriate listeners to this object.  If listeners aren't registered, then
     * the `WebSocket_.EventType.OPENED` event might be missed.
     * @param url The URL to which to connect.
     * @param opt_protocol The subprotocol to use.  The connection will only be established if the server reports that it has selected this subprotocol. The subprotocol name must all be a non-empty ASCII string with no control characters and no spaces in them (i.e. only characters in the range U+0021 to U+007E).
     */
    open(url: string, opt_protocol?: string): void;
    /**
     * Closes the web socket connection.
     */
    close(): void;
    /**
     * Sends the message over the web socket.
     * @param message The message to send.
     */
    send(message: string | ArrayBuffer | ArrayBufferView): void;
    /**
     * Checks to see if the web socket is open or not.
     * @return True if the web socket is open, false otherwise.
     */
    isOpen(): boolean;
    /**
     * Gets the number of bytes of data that have been queued using calls to send()
     * but not yet transmitted to the network.
     * @return Number of bytes of data that have been queued.
     */
    getBufferedAmount(): number;
    disposeInternal(): void;
}
declare namespace WebSocket_ {
    enum BinaryType {
        ARRAY_BUFFER = "arraybuffer",
        BLOB = "blob"
    }
    interface Options {
    }
    /**
     * The events fired by the web socket.
     */
    type EventType = string;
    const EventType: {
        CLOSED: string;
        ERROR: string;
        MESSAGE: string;
        OPENED: string;
    };
    /**
     * The various states of the web socket.
     */
    enum ReadyState_ {
        CONNECTING = 0,
        OPEN = 1,
        CLOSING = 2,
        CLOSED = 3
    }
    /**
     * Object representing a closed event.
     */
    class ClosedEvent extends GEvent {
        /**
         * Object representing a closed event.
         */
        constructor(code: number, reason: string, wasClean: boolean);
        private noStructuralTyping_closure_goog_net_websocket_ClosedEvent;
        code: number;
        reason: string;
        wasClean: boolean;
    }
    /**
     * Object representing a new incoming message event.
     */
    class MessageEvent extends GEvent {
        /**
         * Object representing a new incoming message event.
         * @param message The raw message coming from the web socket.
         */
        constructor(message: string | ArrayBuffer | Blob);
        private noStructuralTyping_closure_goog_net_websocket_MessageEvent;
        /**
         * The new message from the web socket.
         */
        message: any;
    }
    /**
     * Object representing an error event. This is fired whenever an error occurs
     * on the web socket.
     */
    class ErrorEvent extends GEvent {
        /**
         * Object representing an error event. This is fired whenever an error occurs
         * on the web socket.
         * @param data The error data.
         */
        constructor(data: string);
        private noStructuralTyping_closure_goog_net_websocket_ErrorEvent;
        /**
         * The error data coming from the web socket.
         */
        data: string;
    }
}
export { WebSocket_ as WebSocket };
