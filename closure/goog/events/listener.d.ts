import { ListenableKey } from './listenablekey.js';
import type { Listenable } from './listenable.js';
/**
 * Simple class that stores information about a listener
 */
export declare class Listener implements ListenableKey {
    /**
     * Simple class that stores information about a listener
     * @param listener Callback function.
     * @param proxy Wrapper for the listener that patches the event.
     * @param src Source object for the event.
     * @param type Event type.
     * @param capture Whether in capture or bubble phase.
     * @param opt_handler Object in whose context to execute the callback.
     */
    constructor(listener: () => any, proxy: Function | null, src: EventTarget | Listenable | null, type: string, capture: boolean, opt_handler?: object | null);
    private noStructuralTyping_closure_goog_events_listener_Listener;
    listener: any;
    /**
     * A wrapper over the original listener. This is used solely to
     * handle native browser events (it is used to simulate the capture
     * phase and to patch the event object).
     */
    proxy: Function | null;
    /**
     * Object or node that callback is listening to
     */
    src: EventTarget | Listenable | null;
    /**
     * The event type.
     */
    type: string;
    /**
     * Whether the listener is being called in the capture or bubble phase
     */
    capture: boolean;
    /**
     * Optional object whose context to execute the listener in
     */
    handler: object | undefined | null;
    /**
     * The key of the listener.
     */
    key: number;
    /**
     * Whether to remove the listener after it has been called.
     */
    callOnce: boolean;
    /**
     * Whether the listener has been removed.
     */
    removed: boolean;
    static ENABLE_MONITORING: boolean;
    /**
     * If monitoring the Listener instances is enabled, stores the
     * creation stack trace of the Disposable instance.
     */
    creationStack: string;
    /**
     * Marks this listener as removed. This also remove references held by
     * this listener object (such as listener and event source).
     */
    markAsRemoved(): void;
}
