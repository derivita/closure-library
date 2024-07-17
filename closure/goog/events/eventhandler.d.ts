import { Disposable } from '../disposable/disposable.js';
import * as events from './events.js';
import type { Event } from './event.js';
import type { EventId } from './eventid.js';
import type * as eventtarget from './eventtarget.js';
import type { EventWrapper } from './eventwrapper.js';
/**
 * Super class for objects that want to easily manage a number of event
 * listeners.  It allows a short cut to listen and also provides a quick way
 * to remove all events listeners belonging to this object.
 */
export declare class EventHandler<SCOPE = any> extends Disposable {
    /**
     * Super class for objects that want to easily manage a number of event
     * listeners.  It allows a short cut to listen and also provides a quick way
     * to remove all events listeners belonging to this object.
     * @param opt_scope Object in whose scope to call the listeners.
     */
    constructor(opt_scope?: SCOPE | null);
    private noStructuralTyping_closure_goog_events_eventhandler_EventHandler;
    /**
     * Listen to an event on a Listenable.  If the function is omitted then the
     * EventHandler's handleEvent method will be used.
     * @param src Event source.
     * @param type Event type to listen for or array of event types.
     * @param opt_fn Optional callback function to be used as the listener or an object with handleEvent function.
     * @return This object, allowing for chaining of calls.
     */
    listen<EVENTOBJ = any, THIS = any>(src: events.ListenableType | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, opt_fn?: ((this: SCOPE | null) => any) | {
        'handleEvent': () => any;
    } | null, opt_options?: boolean | AddEventListenerOptions): this;
    /**
     * Listen to an event on a Listenable.  If the function is omitted then the
     * EventHandler's handleEvent method will be used.
     * @param src Event source.
     * @param type Event type to listen for or array of event types.
     * @param fn Optional callback function to be used as the listener or an object with handleEvent function.
     * @param scope Object in whose scope to call the listener.
     * @return This object, allowing for chaining of calls.
     */
    listenWithScope<T = any, EVENTOBJ = any, THIS = any>(src: events.ListenableType | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, fn: ((this: T | null) => any) | {
        'handleEvent': (this: T | null) => any;
    } | null | undefined, options: boolean | AddEventListenerOptions | undefined, scope: T | null): this;
    /**
     * Listen to an event on a Listenable.  If the function is omitted, then the
     * EventHandler's handleEvent method will be used. After the event has fired the
     * event listener is removed from the target. If an array of event types is
     * provided, each event type will be listened to once.
     * @param src Event source.
     * @param type Event type to listen for or array of event types.
     * @param opt_fn Optional callback function to be used as the listener or an object with handleEvent function.
     * @return This object, allowing for chaining of calls.
     */
    listenOnce<EVENTOBJ = any, THIS = any>(src: events.ListenableType | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, opt_fn?: ((this: SCOPE | null) => any) | {
        'handleEvent': () => any;
    } | null, opt_options?: boolean | AddEventListenerOptions): this;
    /**
     * Listen to an event on a Listenable.  If the function is omitted, then the
     * EventHandler's handleEvent method will be used. After the event has fired the
     * event listener is removed from the target. If an array of event types is
     * provided, each event type will be listened to once.
     * @param src Event source.
     * @param type Event type to listen for or array of event types.
     * @param fn Optional callback function to be used as the listener or an object with handleEvent function.
     * @param capture Optional whether to use capture phase.
     * @param scope Object in whose scope to call the listener.
     * @return This object, allowing for chaining of calls.
     */
    listenOnceWithScope<T = any, EVENTOBJ = any, THIS = any>(src: events.ListenableType | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, fn: ((this: T | null) => any) | {
        'handleEvent': (this: T | null) => any;
    } | null | undefined, capture: boolean | undefined, scope: T | null): this;
    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link eventtarget.EventTarget}. A listener can
     * only be added once to an object.
     * @param src The node to listen to events on.
     * @param wrapper Event wrapper to use.
     * @param listener Callback method, or an object with a handleEvent function.
     * @param opt_capt Whether to fire in capture phase (defaults to false).
     * @return This object, allowing for chaining of calls.
     */
    listenWithWrapper(src: EventTarget | eventtarget.EventTarget | null, wrapper: EventWrapper | null, listener: ((this: SCOPE | null) => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean): this;
    /**
     * Adds an event listener with a specific event wrapper on a DOM Node or an
     * object that has implemented {@link eventtarget.EventTarget}. A listener can
     * only be added once to an object.
     * @param src The node to listen to events on.
     * @param wrapper Event wrapper to use.
     * @param listener Optional callback function to be used as the listener or an object with handleEvent function.
     * @param capture Optional whether to use capture phase.
     * @param scope Object in whose scope to call the listener.
     * @return This object, allowing for chaining of calls.
     */
    listenWithWrapperAndScope<T = any, THIS = any>(src: EventTarget | eventtarget.EventTarget | null, wrapper: EventWrapper | null, listener: ((this: T | null) => any) | {
        'handleEvent': (this: T | null) => any;
    } | null, capture: boolean | undefined, scope: T | null): this;
    getListenerCount(): number;
    /**
     * Unlistens on an event.
     * @param src Event source.
     * @param type Event type or array of event types to unlisten to.
     * @param opt_fn Optional callback function to be used as the listener or an object with handleEvent function.
     * @param opt_scope Object in whose scope to call the listener.
     * @return This object, allowing for chaining of calls.
     */
    unlisten<EVENTOBJ = any, THIS = any>(src: events.ListenableType | null, type: string | string[] | EventId<EVENTOBJ | null> | EventId<EVENTOBJ | null>[] | null, opt_fn?: ((this: any) => any) | {
        'handleEvent': () => any;
    } | null, opt_options?: boolean | EventListenerOptions, opt_scope?: object | null): this;
    /**
     * Removes an event listener which was added with listenWithWrapper().
     * @param src The target to stop listening to events on.
     * @param wrapper Event wrapper to use.
     * @param listener The listener function to remove.
     * @param opt_capt In DOM-compliant browsers, this determines whether the listener is fired during the capture or bubble phase of the event.
     * @param opt_scope Element in whose scope to call the listener.
     * @return This object, allowing for chaining of calls.
     */
    unlistenWithWrapper(src: EventTarget | eventtarget.EventTarget | null, wrapper: EventWrapper | null, listener: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean, opt_scope?: object | null): this;
    /**
     * Unlistens to all events.
     */
    removeAll(): void;
    /**
     * Disposes of this EventHandler and removes all listeners that it registered.
     */
    disposeInternal(): void;
    /**
     * Default event handler
     * @param e Event object.
     */
    handleEvent(e: Event | null): void;
}
