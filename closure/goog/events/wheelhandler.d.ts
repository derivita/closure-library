import { EventTarget } from './eventtarget.js';
import type { BrowserEvent } from './browserevent.js';
/**
 * This event handler allows you to catch wheel events in a consistent manner.
 */
export declare class WheelHandler extends EventTarget {
    /**
     * This event handler allows you to catch wheel events in a consistent manner.
     * @param element The element to listen to the wheel event on.
     * @param opt_capture Whether to handle the wheel event in capture phase.
     */
    constructor(element: Element | Document, opt_capture?: boolean);
    private noStructuralTyping_closure_goog_events_wheelhandler_WheelHandler;
    /**
     * Returns the dom event type.
     * @return The dom event type.
     */
    static getDomEventType(): string;
    /**
     * Handles the events on the element.
     * @param e The underlying browser event.
     */
    handleEvent(e: BrowserEvent): void;
    disposeInternal(): void;
}
