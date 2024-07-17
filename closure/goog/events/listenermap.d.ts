import { Listener } from './listener.js';
import type { EventId } from './eventid.js';
import type { Listenable } from './listenable.js';
import type { ListenableKey } from './listenablekey.js';
/**
 * Creates a new listener map.
 */
export declare class ListenerMap {
    /**
     * Creates a new listener map.
     * @param src The src object.
     */
    constructor(src: EventTarget | Listenable | null);
    private noStructuralTyping_closure_goog_events_listenermap_ListenerMap;
    src: EventTarget | Listenable | null;
    /**
     * Maps of event type to an array of listeners.
     */
    listeners: {
        [key: string]: Listener[];
    };
    getTypeCount(): number;
    getListenerCount(): number;
    /**
     * Adds an event listener. A listener can only be added once to an
     * object and if it is added again the key for the listener is
     * returned.
     *
     * Note that a one-off listener will not change an existing listener,
     * if any. On the other hand a normal listener will change existing
     * one-off listener to become a normal listener.
     * @param type The listener event type.
     * @param listener This listener callback method.
     * @param callOnce Whether the listener is a one-off listener.
     * @param opt_useCapture The capture mode of the listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Unique key for the listener.
     */
    add(type: string | EventId, listener: Function, callOnce: boolean, opt_useCapture?: boolean, opt_listenerScope?: object | null): ListenableKey;
    /**
     * Removes a matching listener.
     * @param type The listener event type.
     * @param listener This listener callback method.
     * @param opt_useCapture The capture mode of the listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Whether any listener was removed.
     */
    remove(type: string | EventId, listener: Function, opt_useCapture?: boolean, opt_listenerScope?: object | null): boolean;
    /**
     * Removes the given listener object.
     * @param listener The listener to remove.
     * @return Whether the listener is removed.
     */
    removeByKey(listener: ListenableKey): boolean;
    /**
     * Removes all listeners from this map. If opt_type is provided, only
     * listeners that match the given type are removed.
     * @param opt_type Type of event to remove.
     * @return Number of listeners removed.
     */
    removeAll(opt_type?: string | EventId): number;
    /**
     * Gets all listeners that match the given type and capture mode. The
     * returned array is a copy (but the listener objects are not).
     * @param type The type of the listeners to retrieve.
     * @param capture The capture mode of the listeners to retrieve.
     * @return An array of matching listeners.
     */
    getListeners(type: string | EventId, capture: boolean): ListenableKey[];
    /**
     * Gets the ListenableKey for the event or null if no such
     * listener is in use.
     * @param type The type of the listener to retrieve.
     * @param listener The listener function to get.
     * @param capture Whether the listener is a capturing listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return the found listener or null if not found.
     */
    getListener(type: string | EventId, listener: Function, capture: boolean, opt_listenerScope?: object | null): ListenableKey | null;
    /**
     * Whether there is a matching listener. If either the type or capture
     * parameters are unspecified, the function will match on the
     * remaining criteria.
     * @param opt_type The type of the listener.
     * @param opt_capture The capture mode of the listener.
     * @return Whether there is an active listener matching the requested type and/or capture phase.
     */
    hasListener(opt_type?: string | EventId, opt_capture?: boolean): boolean;
}
