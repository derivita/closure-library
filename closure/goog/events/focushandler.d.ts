import { BrowserEvent } from './browserevent.js';
import { EventTarget } from './eventtarget.js';
/**
 * This event handler allows you to catch focus events when descendants gain or
 * loses focus.
 */
export declare class FocusHandler extends EventTarget {
    /**
     * This event handler allows you to catch focus events when descendants gain or
     * loses focus.
     * @param element The node to listen on.
     */
    constructor(element: Element | Document | null);
    private noStructuralTyping_closure_goog_events_focushandler_FocusHandler;
    /**
     * This handles the underlying events and dispatches a new event.
     * @param e The underlying browser event.
     */
    handleEvent(e: BrowserEvent | null): void;
    disposeInternal(): void;
}
export declare namespace FocusHandler {
    /**
     * Enum type for the events fired by the focus handler
     */
    enum EventType {
        FOCUSIN = "focusin",
        FOCUSOUT = "focusout"
    }
}
