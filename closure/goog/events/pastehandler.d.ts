import { EventHandler } from './eventhandler.js';
import { EventTarget } from './eventtarget.js';
/**
 * A paste event detector. Gets an `element` as parameter and fires
 * `PasteHandler.EventType.PASTE` events when text is
 * pasted in the `element`. Uses heuristics to detect paste events in FF2.
 * See more details of the heuristic on {@link #handleEvent_}.
 */
export declare class PasteHandler extends EventTarget {
    /**
     * A paste event detector. Gets an `element` as parameter and fires
     * `PasteHandler.EventType.PASTE` events when text is
     * pasted in the `element`. Uses heuristics to detect paste events in FF2.
     * See more details of the heuristic on {@link #handleEvent_}.
     * @param element The textarea element we are listening on.
     */
    constructor(element: Element | null);
    private noStructuralTyping_closure_goog_events_pastehandler_PasteHandler;
    /**
     * The mandatory delay we expect between two `input` events, used to
     * differentiated between non key paste events and key events.
     */
    static MANDATORY_MS_BETWEEN_INPUT_EVENTS_TIE_BREAKER: number;
    /**
     * Whether current UA supoprts the native "paste" event type.
     */
    static SUPPORTS_NATIVE_PASTE_EVENT: boolean;
    disposeInternal(): void;
    /**
     * Returns the current state of the paste detection algorithm. Used mostly for
     * testing.
     * @return The current state of the class.
     */
    getState(): PasteHandler.State | null;
    /**
     * Returns the event handler.
     * @return The event handler.
     */
    protected getEventHandler(): EventHandler<PasteHandler> | null;
}
export declare namespace PasteHandler {
    /**
     * The types of events fired by this class.
     */
    enum EventType {
        PASTE = "paste",
        AFTER_PASTE = "after_paste"
    }
    /**
     * The states that this class can be found, on the paste detection algorithm.
     */
    enum State {
        INIT = "init",
        FOCUSED = "focused",
        TYPING = "typing"
    }
}
