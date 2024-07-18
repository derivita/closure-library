import { EventTarget } from './eventtarget.js';
import type { BrowserEvent } from './browserevent.js';
/**
 * Dispatches high-level events for IMEs.
 */
export declare class ImeHandler extends EventTarget {
    /**
     * Dispatches high-level events for IMEs.
     * @param el The element to listen on.
     */
    constructor(el: Element | null);
    private noStructuralTyping_closure_goog_events_imehandler_ImeHandler;
    /**
     * Whether to use the composition events.
     */
    static USES_COMPOSITION_EVENTS: boolean;
    isImeMode(): boolean;
    disposeInternal(): void;
}
export declare namespace ImeHandler {
    /**
     * Event types fired by ImeHandler. These events do not make any guarantees
     * about whether they were fired before or after the event in question.
     */
    enum EventType {
        START = "startIme",
        UPDATE = "updateIme",
        END = "endIme"
    }
    /**
     * An event fired by ImeHandler.
     */
    class Event extends Event {
        /**
         * An event fired by ImeHandler.
         * @param type The type.
         * @param reason The trigger for this event.
         */
        constructor(type: ImeHandler.EventType | null, reason: BrowserEvent | null);
        private noStructuralTyping_closure_goog_events_imehandler_Event;
        /**
         * The event that triggered this.
         */
        reason: BrowserEvent | null;
    }
}
