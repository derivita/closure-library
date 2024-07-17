import { BrowserEvent } from './browserevent.js';
import { EventTarget } from './eventtarget.js';
import { KeyEvent } from './keyevent.js';
/**
 * A wrapper around an element that you want to listen to keyboard events on.
 */
export declare class KeyHandler extends EventTarget {
    /**
     * A wrapper around an element that you want to listen to keyboard events on.
     * @param opt_element The element or document to listen on.
     * @param opt_capture Whether to listen for browser events in capture phase (defaults to false).
     */
    constructor(opt_element?: Element | Document | null, opt_capture?: boolean);
    private noStructuralTyping_closure_goog_events_keyhandler_KeyHandler;
    /**
     * Enum type for the events fired by the key handler
     */
    static EventType: typeof KeyEvent.EventType;
    /**
     * Resets the stored previous values. Needed to be called for webkit which will
     * not generate a key up for meta key operations. This should only be called
     * when having finished with repeat key possibilities.
     */
    resetState(): void;
    /**
     * Handles the events on the element.
     * @param e The keyboard event sent from the browser.
     */
    handleEvent(e: BrowserEvent | null): void;
    /**
     * Returns the element listened on for the real keyboard events.
     * @return The element listened on for the real keyboard events.
     */
    getElement(): Element | Document | null | null;
    /**
     * Adds the proper key event listeners to the element.
     * @param element The element to listen on.
     * @param opt_capture Whether to listen for browser events in capture phase (defaults to false).
     */
    attach(element: Element | Document | null, opt_capture?: boolean): void;
    /**
     * Removes the listeners that may exist.
     */
    detach(): void;
    disposeInternal(): void;
}
