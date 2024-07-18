import * as events from './events.js';
import { EventHandler } from './eventhandler.js';
import { EventWrapper } from './eventwrapper.js';
/**
 * Event wrapper for action handling. Fires when an element is activated either
 * by clicking it or by focusing it and pressing Enter.
 */
export declare class ActionEventWrapper_ implements EventWrapper {
    /**
     * Event wrapper for action handling. Fires when an element is activated either
     * by clicking it or by focusing it and pressing Enter.
     */
    constructor();
    private noStructuralTyping_closure_goog_events_actioneventwrapper_ActionEventWrapper_;
    /**
     * Adds an event listener using the wrapper on a DOM Node or an object that has
     * implemented {@link events.EventTarget}. A listener can only be added
     * once to an object.
     * @param target The target to listen to events on.
     * @param listener Callback method, or an object with a handleEvent function.
     * @param opt_capt Whether to fire in capture phase (defaults to false).
     * @param opt_scope Element in whose scope to call the listener.
     * @param opt_eventHandler Event handler to add listener to.
     */
    listen(target: events.ListenableType | null, listener: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean, opt_scope?: object | null, opt_eventHandler?: EventHandler | null): any;
    /**
     * Removes an event listener added using EventWrapper.listen.
     * @param target The node to remove listener from.
     * @param listener Callback method, or an object with a handleEvent function.
     * @param opt_capt Whether to fire in capture phase (defaults to false).
     * @param opt_scope Element in whose scope to call the listener.
     * @param opt_eventHandler Event handler to remove listener from.
     */
    unlisten(target: events.ListenableType | null, listener: (() => any) | {
        'handleEvent': () => any;
    } | null, opt_capt?: boolean, opt_scope?: object | null, opt_eventHandler?: EventHandler | null): any;
}
export declare namespace ActionEventWrapper_ {
    interface FunctionExtension_ {
        scope_: object | undefined;
        listener_: (() => any) | {
            'handleEvent': () => any;
        } | null;
    }
}
/**
 * Singleton instance of ActionEventWrapper_.
 */
export declare var actionEventWrapper: ActionEventWrapper_ | null;
