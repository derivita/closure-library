import * as dom from '../dom/dom.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Once initialized with a document, the activity monitor can be queried for
 * the current idle time.
 */
export declare class ActivityMonitor extends EventTarget {
    /**
     * Once initialized with a document, the activity monitor can be queried for
     * the current idle time.
     * @param opt_domHelper DomHelper which contains the document(s) to listen to.  If null, the default document is usedinstead.
     * @param opt_useBubble Whether to use the bubble phase to listen for events. By default listens on the capture phase so that it won't miss events that get stopPropagation/cancelBubble'd. However, this can cause problems in IE8 if the page loads multiple scripts that include the closure event handling code.
     */
    constructor(opt_domHelper?: dom.DomHelper | (dom.DomHelper | null)[] | null, opt_useBubble?: boolean);
    private noStructuralTyping_closure_goog_ui_activitymonitor_ActivityMonitor;
    /**
     * Minimum amount of time in ms between throttled ACTIVITY events
     */
    static MIN_EVENT_SPACING: number;
    disposeInternal(): void;
    /**
     * Adds a document to those being monitored by this class.
     * @param doc Document to monitor.
     */
    addDocument(doc: Document | null): void;
    /**
     * Removes a document from those being monitored by this class.
     * @param doc Document to monitor.
     */
    removeDocument(doc: Document | null): void;
    /**
     * Updates the last event time to be the present time, useful for non-DOM
     * events that should update idle time.
     */
    resetTimer(): void;
    /**
     * Updates the idle time and fires an event if time has elapsed since
     * the last update.
     * @param eventTime Time (in MS) of the event that cleared the idle timer.
     * @param eventType Type of the event, used only for debugging.
     */
    protected updateIdleTime(eventTime: number, eventType: string): void;
    /**
     * Returns the amount of time the user has been idle.
     * @param opt_now The current time can optionally be passed in for the computation to avoid an extra Date allocation.
     * @return The amount of time in ms that the user has been idle.
     */
    getIdleTime(opt_now?: number): number;
    /**
     * Returns the type of the last user event.
     * @return event type.
     */
    getLastEventType(): string;
    /**
     * Returns the time of the last event
     * @return last event time.
     */
    getLastEventTime(): number;
}
export declare namespace ActivityMonitor {
    /**
     * Event constants for the activity monitor.
     */
    enum Event {
        ACTIVITY = "activity"
    }
}
