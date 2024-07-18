import { Listenable } from './listenable.js';
import type { ErrorHandler } from '../debug/errorhandler.js';
import type { EventId } from './eventid.js';
import type { EventLike } from './eventlike.js';
import type { EventWrapper } from './eventwrapper.js';
import type { ListenableKey } from './listenablekey.js';
import type { Listener } from './listener.js';
export type Key = number | ListenableKey | null;
export type ListenableType = EventTarget | Listenable | null;
export declare enum CaptureSimulationMode {
    OFF_AND_FAIL = 0,
    OFF_AND_SILENT = 1,
    ON = 2
}
export declare var CAPTURE_SIMULATION_MODE: number;
/**
 * Adds an event listener for a specific event on a native event
 * target (such as a DOM element) or an object that has implemented
 * {@link Listenable}. A listener can only be added once
 * to an object and if it is added again the key for the listener is
 * returned. Note that if the existing listener is a one-off listener
 * (registered via listenOnce), it will no longer be a one-off
 * listener after a call to listen().
 * @param src The node to listen to events on.
 * @param type Event type or array of event types.
 * @param listener Callback method, or an object with a handleEvent function. WARNING: passing an Object is now softly deprecated.
 * @param opt_handler Element in whose scope to call the listener.
 * @return Unique key for the listener.
 */
export declare function listen<T = any, EVENTOBJ = any>(src: EventTarget | Listenable | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, listener: ((this: T | null) => any) | {
    'handleEvent': () => any;
} | null, opt_options?: boolean | AddEventListenerOptions, opt_handler?: T | null): Key | null;
/**
 * Helper function for returning a proxy function.
 * @return A new or reused function object.
 */
export declare function getProxy(): Function;
/**
 * Adds an event listener for a specific event on a native event
 * target (such as a DOM element) or an object that has implemented
 * {@link Listenable}. After the event has fired the event
 * listener is removed from the target.
 *
 * If an existing listener already exists, listenOnce will do
 * nothing. In particular, if the listener was previously registered
 * via listen(), listenOnce() will not turn the listener into a
 * one-off listener. Similarly, if there is already an existing
 * one-off listener, listenOnce does not modify the listeners (it is
 * still a once listener).
 * @param src The node to listen to events on.
 * @param type Event type or array of event types.
 * @param listener Callback method.
 * @param opt_handler Element in whose scope to call the listener.
 * @return Unique key for the listener.
 */
export declare function listenOnce<T = any, EVENTOBJ = any>(src: EventTarget | Listenable | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, listener: ((this: T | null) => any) | {
    'handleEvent': () => any;
} | null, opt_options?: boolean | AddEventListenerOptions, opt_handler?: T | null): Key | null;
/**
 * Adds an event listener with a specific event wrapper on a DOM Node or an
 * object that has implemented {@link Listenable}. A listener can
 * only be added once to an object.
 * @param src The target to listen to events on.
 * @param wrapper Event wrapper to use.
 * @param listener Callback method, or an object with a handleEvent function.
 * @param opt_capt Whether to fire in capture phase (defaults to false).
 * @param opt_handler Element in whose scope to call the listener.
 */
export declare function listenWithWrapper<T = any>(src: EventTarget | Listenable | null, wrapper: EventWrapper | null, listener: ((this: T | null) => any) | {
    'handleEvent': () => any;
} | null, opt_capt?: boolean, opt_handler?: T | null): void;
/**
 * Removes an event listener which was added with listen().
 * @param src The target to stop listening to events on.
 * @param type Event type or array of event types to unlisten to.
 * @param listener The listener function to remove.
 * @param opt_options whether the listener is fired during the capture or bubble phase of the event.
 * @param opt_handler Element in whose scope to call the listener.
 * @return indicating whether the listener was there to remove.
 */
export declare function unlisten<EVENTOBJ = any>(src: EventTarget | Listenable | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, listener: (() => any) | {
    'handleEvent': () => any;
} | null, opt_options?: boolean | EventListenerOptions, opt_handler?: object | null): boolean | null;
/**
 * Removes an event listener which was added with listen() by the key
 * returned by listen().
 * @param key The key returned by listen() for this event listener.
 * @return indicating whether the listener was there to remove.
 */
export declare function unlistenByKey(key: Key | null): boolean;
/**
 * Removes an event listener which was added with listenWithWrapper().
 * @param src The target to stop listening to events on.
 * @param wrapper Event wrapper to use.
 * @param listener The listener function to remove.
 * @param opt_capt In DOM-compliant browsers, this determines whether the listener is fired during the capture or bubble phase of the event.
 * @param opt_handler Element in whose scope to call the listener.
 */
export declare function unlistenWithWrapper(src: EventTarget | Listenable | null, wrapper: EventWrapper | null, listener: (() => any) | {
    'handleEvent': () => any;
} | null, opt_capt?: boolean, opt_handler?: object | null): void;
/**
 * Removes all listeners from an object. You can also optionally
 * remove listeners of a particular type.
 * @param obj Object to remove listeners from. Must be an EventTarget or a Listenable.
 * @param opt_type Type of event to remove. Default is all types.
 * @return Number of listeners removed.
 */
export declare function removeAll(obj: object | undefined | null, opt_type?: string | EventId): number;
/**
 * Gets the listeners for a given object, type and capture phase.
 * @param obj Object to get listeners for.
 * @param type Event type.
 * @param capture Capture phase?.
 * @return Array of listener objects.
 */
export declare function getListeners(obj: object | null, type: string | EventId, capture: boolean): Listener[];
/**
 * Gets the Listener for the event or null if no such listener is
 * in use.
 * @param src The target from which to get listeners.
 * @param type The type of the event.
 * @param listener The listener function to get.
 * @param opt_capt In DOM-compliant browsers, this determines whether the listener is fired during the capture or bubble phase of the event.
 * @param opt_handler Element in whose scope to call the listener.
 * @return the found listener or null if not found.
 */
export declare function getListener<EVENTOBJ = any>(src: EventTarget | Listenable | null, type: string | EventId<EVENTOBJ | null> | null, listener: (() => any) | {
    'handleEvent': () => any;
} | null, opt_capt?: boolean, opt_handler?: object | null): ListenableKey | null;
/**
 * Returns whether an event target has any active listeners matching the
 * specified signature. If either the type or capture parameters are
 * unspecified, the function will match on the remaining criteria.
 * @param obj Target to get listeners for.
 * @param opt_type Event type.
 * @param opt_capture Whether to check for capture or bubble-phase listeners.
 * @return Whether an event target has one or more listeners matching the requested type and/or capture phase.
 */
export declare function hasListener(obj: EventTarget | Listenable | null, opt_type?: string | EventId, opt_capture?: boolean): boolean;
/**
 * Provides a nice string showing the normalized event objects public members
 * @param e Event Object.
 * @return String of the public members of the normalized event object.
 */
export declare function expose(e: object | null): string;
/**
 * Fires an object's listeners of a particular type and phase
 * @param obj Object whose listeners to call.
 * @param type Event type.
 * @param capture Which event phase.
 * @param eventObject Event object to be passed to listener.
 * @return True if all listeners returned true else false.
 */
export declare function fireListeners(obj: object | null, type: string | EventId, capture: boolean, eventObject: object | null): boolean;
/**
 * Fires a listener with a set of arguments
 * @param listener The listener object to call.
 * @param eventObject The event object to pass to the listener.
 * @return Result of listener.
 */
export declare function fireListener(listener: Listener | null, eventObject: object | null): any;
/**
 * Gets the total number of listeners currently in the system.
 * @return Number of listeners.
 */
export declare function getTotalListenerCount(): number;
/**
 * Dispatches an event (or event like object) and calls all listeners
 * listening for events of this type. The type of the event is decided by the
 * type property on the event object.
 *
 * If any of the listeners returns false OR calls preventDefault then this
 * function will return false.  If one of the capture listeners calls
 * stopPropagation, then the bubble listeners won't fire.
 * @param src The event target.
 * @param e Event object.
 * @return If anyone called preventDefault on the event object (or if any of the handlers returns false) this will also return false. If there are no handlers, or if all handlers return true, this returns true.
 */
export declare function dispatchEvent(src: Listenable | null, e: EventLike | null): boolean;
/**
 * Installs exception protection for the browser event entry point using the
 * given error handler.
 * @param errorHandler Error handler with which to protect the entry point.
 */
export declare function protectBrowserEventEntryPoint(errorHandler: ErrorHandler | null): void;
/**
 * Creates a unique event id.
 * @param identifier The identifier.
 * @return A unique identifier.
 */
export declare function getUniqueId(identifier: string): string;
/**
 *
 * @param listener The listener function or an object that contains handleEvent method.
 * @return Either the original function or a function that calls obj.handleEvent. If the same listener is passed to this function more than once, the same function is guaranteed to be returned.
 */
export declare function wrapListener(listener: object | Function | null): Function;
export declare function setHandlerForTests_(handle: any): void;
export declare function getHandlerForTests_(): void;
