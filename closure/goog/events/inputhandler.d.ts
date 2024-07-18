import { BrowserEvent } from './browserevent.js';
import { EventTarget } from './eventtarget.js';
/**
 * This event handler will dispatch events when the user types into a text
 * input, password input or a textarea
 */
export declare class InputHandler extends EventTarget {
    /**
     * This event handler will dispatch events when the user types into a text
     * input, password input or a textarea
     * @param element The element that you want to listen for input events on.
     */
    constructor(element: Element | null);
    private noStructuralTyping_closure_goog_events_inputhandler_InputHandler;
    /**
     * This handles the underlying events and dispatches a new event as needed.
     * @param e The underlying browser event.
     */
    handleEvent(e: BrowserEvent | null): void;
    disposeInternal(): void;
}
export declare namespace InputHandler {
    /**
     * Enum type for the events fired by the input handler
     */
    enum EventType {
        INPUT = "input"
    }
}
