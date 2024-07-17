/**
 * This interface represents a readable stream.
 */
export interface NodeReadableStream {
    /**
     * Register a callback to handle I/O events.
     *
     * See https://iojs.org/api/events.html
     *
     * Note that under the object mode, an event of DATA will deliver a message
     * of 1) JSON compliant JS object, including arrays; or 2) an ArrayBuffer.
     *
     * Ordering: messages will be delivered to callbacks in their registration
     * order. There is no ordering between on() and once() callbacks.
     *
     * Exceptions from callbacks will be caught and ignored.
     * @param eventType The event type
     * @param callback The call back to handle the event with an optional input object
     * @return this object
     */
    on(eventType: string, callback: () => any): NodeReadableStream | null;
    /**
     * Register a callback to handle I/O events. This is an alias to on().
     * @param eventType The event type
     * @param callback The call back to handle the event with an optional input object
     * @return this object
     */
    addListener(eventType: string, callback: () => any): NodeReadableStream | null;
    /**
     * Unregister an existing callback, including one-time callbacks.
     * @param eventType The event type
     * @param callback The call back to unregister
     * @return this object
     */
    removeListener(eventType: string, callback: () => any): NodeReadableStream | null;
    /**
     * Register a one-time callback to handle I/O events.
     * @param eventType The event type
     * @param callback The call back to handle the event with an optional input object
     * @return this object
     */
    once(eventType: string, callback: () => any): NodeReadableStream | null;
}
export declare namespace NodeReadableStream {
    /**
     * Read events for the stream.
     */
    enum EventType {
        READABLE = "readable",
        DATA = "data",
        END = "end",
        CLOSE = "close",
        ERROR = "error"
    }
}
