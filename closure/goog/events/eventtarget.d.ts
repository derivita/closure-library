import { Disposable } from '../disposable/disposable.js';
import { Listenable } from './listenable.js';
import type { EventId } from './eventid.js';
import type { EventLike } from './eventlike.js';
import type { ListenableKey } from './listenablekey.js';
/**
 * An implementation of `Listenable` with full W3C
 * EventTarget-like support (capture/bubble mechanism, stopping event
 * propagation, preventing default actions).
 *
 * You may subclass this class to turn your class into a Listenable.
 *
 * Unless propagation is stopped, an event dispatched by an
 * EventTarget will bubble to the parent returned by
 * `getParentEventTarget`. To set the parent, call
 * `setParentEventTarget`. Subclasses that don't support
 * changing the parent can override the setter to throw an error.
 *
 * Example usage:
 * <pre>
 * var source = new EventTarget();
 * function handleEvent(e) {
 * alert('Type: ' + e.type + '; Target: ' + e.target);
 * }
 * source.listen('foo', handleEvent);
 * // Or: events.listen(source, 'foo', handleEvent);
 * ...
 * source.dispatchEvent('foo');  // will call handleEvent
 * ...
 * source.unlisten('foo', handleEvent);
 * // Or: events.unlisten(source, 'foo', handleEvent);
 * </pre>
 */
export declare class EventTarget extends Disposable implements Listenable {
    /**
     * An implementation of `Listenable` with full W3C
     * EventTarget-like support (capture/bubble mechanism, stopping event
     * propagation, preventing default actions).
     *
     * You may subclass this class to turn your class into a Listenable.
     *
     * Unless propagation is stopped, an event dispatched by an
     * EventTarget will bubble to the parent returned by
     * `getParentEventTarget`. To set the parent, call
     * `setParentEventTarget`. Subclasses that don't support
     * changing the parent can override the setter to throw an error.
     *
     * Example usage:
     * <pre>
     * var source = new EventTarget();
     * function handleEvent(e) {
     * alert('Type: ' + e.type + '; Target: ' + e.target);
     * }
     * source.listen('foo', handleEvent);
     * // Or: events.listen(source, 'foo', handleEvent);
     * ...
     * source.dispatchEvent('foo');  // will call handleEvent
     * ...
     * source.unlisten('foo', handleEvent);
     * // Or: events.unlisten(source, 'foo', handleEvent);
     * </pre>
     */
    constructor();
    private noStructuralTyping_closure_goog_events_eventtarget_EventTarget;
    /**
     * Returns the parent of this event target to use for bubbling.
     * @return The parent EventTarget or null if there is no parent.
     */
    getParentEventTarget(): EventTarget | null;
    /**
     * Sets the parent of this event target to use for capture/bubble
     * mechanism.
     * @param parent Parent listenable (null if none).
     */
    setParentEventTarget(parent: EventTarget | null): void;
    /**
     * Adds an event listener to the event target. The same handler can only be
     * added once per the type. Even if you add the same handler multiple times
     * using the same type then it will only be called once when the event is
     * dispatched.
     * @param type The type of the event to listen for
     * @param handler The function to handle the event. The handler can also be an object that implements the handleEvent method which takes the event object as argument.
     * @param opt_capture In DOM-compliant browsers, this determines whether the listener is fired during the capture or bubble phase of the event.
     * @param opt_handlerScope Object in whose scope to call the listener.
     */
    addEventListener(type: string | EventId, handler: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capture?: boolean, opt_handlerScope?: object | null): void;
    /**
     * Removes an event listener from the event target. The handler must be the
     * same object as the one added. If the handler has not been added then
     * nothing is done.
     * @param type The type of the event to listen for
     * @param handler The function to handle the event. The handler can also be an object that implements the handleEvent method which takes the event object as argument.
     * @param opt_capture In DOM-compliant browsers, this determines whether the listener is fired during the capture or bubble phase of the event.
     * @param opt_handlerScope Object in whose scope to call the listener.
     */
    removeEventListener(type: string | EventId, handler: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capture?: boolean, opt_handlerScope?: object | null): void;
    /**
     *
     * @param e Event object.
     * @return If anyone called preventDefault on the event object (or if any of the listeners returns false) this will also return false.
     */
    dispatchEvent(e: EventLike | null): boolean;
    /**
     * Removes listeners from this object.  Classes that extend EventTarget may
     * need to override this method in order to remove references to DOM Elements
     * and additional listeners.
     */
    disposeInternal(): void;
    /**
     *
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Unique key for the listener.
     */
    listen<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): ListenableKey;
    /**
     *
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Unique key for the listener.
     */
    listenOnce<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): ListenableKey;
    /**
     *
     * @param type The event type id.
     * @param listener Callback method.
     * @param opt_useCapture Whether to fire in capture phase (defaults to false).
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return Whether any listener was removed.
     */
    unlisten<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), opt_useCapture?: boolean, opt_listenerScope?: SCOPE | null): boolean;
    /**
     *
     * @param key The key returned by listen() or listenOnce().
     * @return Whether any listener was removed.
     */
    unlistenByKey(key: ListenableKey): boolean;
    /**
     *
     * @param opt_type Type of event to remove, default is to remove all types.
     * @return Number of listeners removed.
     */
    removeAllListeners(opt_type?: string | EventId): number;
    /**
     *
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     * @param eventObject The event object to fire.
     * @return Whether all listeners succeeded without attempting to prevent default behavior. If any listener returns false or called Event#preventDefault, this returns false.
     */
    fireListeners<EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, capture: boolean, eventObject: EVENTOBJ | null): boolean;
    /**
     *
     * @param type The type of the listeners to fire.
     * @param capture The capture mode of the listeners to fire.
     * @return An array of registered listeners.
     */
    getListeners<EVENTOBJ = any>(type: string | EventId, capture: boolean): ListenableKey[];
    /**
     *
     * @param type The name of the event without the 'on' prefix.
     * @param listener The listener function to get.
     * @param capture Whether the listener is a capturing listener.
     * @param opt_listenerScope Object in whose scope to call the listener.
     * @return the found listener or null if not found.
     */
    getListener<SCOPE = any, EVENTOBJ = any>(type: string | EventId<EVENTOBJ | null>, listener: (this: SCOPE | null) => (boolean | undefined), capture: boolean, opt_listenerScope?: SCOPE | null): ListenableKey | null;
    /**
     *
     * @param opt_type Event type.
     * @param opt_capture Whether to check for capture or bubble listeners.
     * @return Whether there is any active listeners matching the requested type and/or capture phase.
     */
    hasListener<EVENTOBJ = any>(opt_type?: string | EventId<EVENTOBJ | null>, opt_capture?: boolean): boolean;
    /**
     * Sets the target to be used for `event.target` when firing
     * event. Mainly used for testing. For example, see
     * `goog.testing.events.mixinListenable`.
     * @param target The target.
     */
    setTargetForTesting(target: object): void;
}
