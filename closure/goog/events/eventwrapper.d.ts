import type { EventHandler } from './eventhandler.js';
import type { ListenableType } from './events.js';
/**
 * Interface for event wrappers.
 */
export interface EventWrapper {
    /**
     * Adds an event listener using the wrapper on a DOM Node or an object that has
     * implemented {@link EventTarget}. A listener can only be added
     * once to an object.
     * @param src The node to listen to events on.
     * @param listener Callback method, or an object with a handleEvent function.
     * @param opt_capt Whether to fire in capture phase (defaults to false).
     * @param opt_scope Element in whose scope to call the listener.
     * @param opt_eventHandler Event handler to add listener to.
     */
    listen(src: ListenableType | null, listener: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean, opt_scope?: object | null, opt_eventHandler?: EventHandler | null): any;
    /**
     * Removes an event listener added using EventWrapper.listen.
     * @param src The node to remove listener from.
     * @param listener Callback method, or an object with a handleEvent function.
     * @param opt_capt Whether to fire in capture phase (defaults to false).
     * @param opt_scope Element in whose scope to call the listener.
     * @param opt_eventHandler Event handler to remove listener from.
     */
    unlisten(src: ListenableType | null, listener: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean, opt_scope?: object | null, opt_eventHandler?: EventHandler | null): any;
}
