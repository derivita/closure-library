import type { EventId } from './eventid.js';
import type { EventLike } from './eventlike.js';
import type { ListenableKey } from './listenablekey.js';
/**
 * A listenable interface. A listenable is an object with the ability
 * to dispatch/broadcast events to "event listeners" registered via
 * listen/listenOnce.
 *
 * The interface allows for an event propagation mechanism similar
 * to one offered by native browser event targets, such as
 * capture/bubble mechanism, stopping propagation, and preventing
 * default actions. Capture/bubble mechanism depends on the ancestor
 * tree constructed via `#getParentEventTarget`; this tree
 * must be directed acyclic graph. The meaning of default action(s)
 * in preventDefault is specific to a particular use case.
 *
 * Implementations that do not support capture/bubble or can not have
 * a parent listenable can simply not implement any ability to set the
 * parent listenable (and have `#getParentEventTarget` return
 * null).
 *
 * Implementation of this class can be used with or independently from
 * goog.events.
 *
 * Implementation must call `#addImplementation(implClass)`.
 */
export interface Listenable {
    /**
     * Adds an event listener. A listener can only be added once to an
     * object and if it is added again the key for the listener is
     * returned. Note that if the existing listener is a one-off listener
     * (registered via listenOnce), it will no longer be a one-off
     * listener after a call to listen().
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Unique key for the listener.
     */
    listen<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): ListenableKey;
    /**
     * Adds an event listener that is removed automatically after the
     * listener fired once.
     *
     * If an existing listener already exists, listenOnce will do
     * nothing. In particular, if the listener was previously registered
     * via listen(), listenOnce() will not turn the listener into a
     * one-off listener. Similarly, if there is already an existing
     * one-off listener, listenOnce does not modify the listeners (it is
     * still a once listener).
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Unique key for the listener.
     */
    listenOnce<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): ListenableKey;
    /**
     * Removes an event listener which was added with listen() or listenOnce().
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Whether any listener was removed.
     */
    unlisten<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): boolean;
    /**
     * Removes an event listener which was added with listen() by the key
     * returned by listen().
     * @param key The key returned by listen() or listenOnce().
     * @return Whether any listener was removed.
     */
    unlistenByKey(key: ListenableKey): boolean;
    /**
     * Dispatches an event (or event like object) and calls all listeners
     * listening for events of this type. The type of the event is decided by the
     * type property on the event object.
     *
     * If any of the listeners returns false OR calls preventDefault then this
     * function will return false.  If one of the capture listeners calls
     * stopPropagation, then the bubble listeners won't fire.
     * @param e Event object.
     * @return If anyone called preventDefault on the event object (or if any of the listeners returns false) this will also return false.
     */
    dispatchEvent(e: EventLike | null): boolean;
    /**
     * Removes all listeners from this listenable. If type is specified,
     * it will only remove listeners of the particular type. otherwise all
     * registered listeners will be removed.
     * @param opt_type Type of event to remove, default is to remove all types.
     * @return Number of listeners removed.
     */
    removeAllListeners(opt_type?: string | EventId): number;
    /**
     * Returns the parent of this event target to use for capture/bubble
     * mechanism.
     *
     * NOTE(chrishenry): The name reflects the original implementation of
     * custom event target (`EventTarget`). We decided
     * that changing the name is not worth it.
     * @return The parent EventTarget or null if there is no parent.
     */
    getParentEventTarget(): Listenable | null;
    /**
     * Fires all registered listeners in this listenable for the given
     * type and capture mode, passing them the given eventObject. This
     * does not perform actual capture/bubble. Only implementors of the
     * interface should be using this.
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     * @param eventObject The event object to fire.
     * @return Whether all listeners succeeded without attempting to prevent default behavior. If any listener returns false or called Event#preventDefault, this returns false.
     */
    fireListeners<EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, capture: boolean, eventObject: EVENTOBJ | null): boolean;
    /**
     * Gets all listeners in this listenable for the given type and
     * capture mode.
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     * @return An array of registered listeners.
     */
    getListeners<EVENTOBJ = any>(type: string | EventId, capture: boolean): ListenableKey[];
    /**
     * Gets the ListenableKey for the event or null if no such
     * listener is in use.
     * @param type The name of the event without the 'on' prefix.
     * @param listener The listener function to get.
     * @param capture Whether the listener is a capturing listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return the found listener or null if not found.
     */
    getListener<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), capture: boolean, opt_listenerScope?: SCOPE | null): ListenableKey | null;
    /**
     * Whether there is any active listeners matching the specified
     * signature. If either the type or capture parameters are
     * unspecified, the function will match on the remaining criteria.
     * @param opt_type Event type.
     * @param opt_capture Whether to check for capture or bubble listeners.
     * @return Whether there is any active listeners matching the requested type and/or capture phase.
     */
    hasListener<EVENTOBJ = any>(opt_type?: string | EventId<EVENTOBJ | null>, opt_capture?: boolean): boolean;
}
export declare namespace Listenable {
    /**
     * An expando property to indicate that an object implements
     * Listenable.
     *
     * See addImplementation/isImplementedBy.
     */
    const IMPLEMENTED_BY_PROP: string;
    /**
     * Marks a given class (constructor) as an implementation of
     * Listenable, so that we can query that fact at runtime. The class
     * must have already implemented the interface.
     * @param cls The class constructor. The corresponding class must have already implemented the interface.
     */
    var addImplementation: (cls: {
        new (): Listenable | null;
    }) => void;
    /**
     *
     * @param obj The object to check.
     * @return Whether a given instance implements Listenable. The class/superclass of the instance must call addImplementation.
     */
    var isImplementedBy: boolean;
}
