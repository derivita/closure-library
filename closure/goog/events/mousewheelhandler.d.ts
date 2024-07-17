import { BrowserEvent } from './browserevent.js';
import { EventTarget } from './eventtarget.js';
/**
 * This event handler allows you to catch mouse wheel events in a consistent
 * manner.
 */
export declare class MouseWheelHandler extends EventTarget {
    /**
     * This event handler allows you to catch mouse wheel events in a consistent
     * manner.
     * @param element The element to listen to the mouse wheel event on.
     * @param opt_capture Whether to handle the mouse wheel event in capture phase.
     */
    constructor(element: Element | Document | null, opt_capture?: boolean);
    private noStructuralTyping_closure_goog_events_mousewheelhandler_MouseWheelHandler;
    /**
     *
     * @param maxDeltaX Maximum magnitude for x delta on each mousewheel event. Should be non-negative.
     */
    setMaxDeltaX(maxDeltaX: number): void;
    /**
     *
     * @param maxDeltaY Maximum magnitude for y delta on each mousewheel event. Should be non-negative.
     */
    setMaxDeltaY(maxDeltaY: number): void;
    /**
     * Handles the events on the element.
     * @param e The underlying browser event.
     */
    handleEvent(e: BrowserEvent | null): void;
    disposeInternal(): void;
}
export declare namespace MouseWheelHandler {
    /**
     * Enum type for the events fired by the mouse wheel handler.
     */
    enum EventType {
        MOUSEWHEEL = "mousewheel"
    }
}
/**
 * A base class for mouse wheel events. This is used with the
 * MouseWheelHandler.
 */
export declare class MouseWheelEvent extends BrowserEvent {
    /**
     * A base class for mouse wheel events. This is used with the
     * MouseWheelHandler.
     * @param detail The number of rows the user scrolled.
     * @param browserEvent Browser event object.
     * @param deltaX The number of rows the user scrolled in the X direction.
     * @param deltaY The number of rows the user scrolled in the Y direction.
     */
    constructor(detail: number, browserEvent: Event | null, deltaX: number, deltaY: number);
    private noStructuralTyping_closure_goog_events_mousewheelhandler_MouseWheelEvent;
    /**
     * The number of lines the user scrolled
     */
    detail: number;
    /**
     * The number of "lines" scrolled in the X direction.
     *
     * Note that not all browsers provide enough information to distinguish
     * horizontal and vertical scroll events, so for these unsupported browsers,
     * we will always have a deltaX of 0, even if the user scrolled their mouse
     * wheel or trackpad sideways.
     *
     * Currently supported browsers are Webkit and Firefox 3.1 or later.
     */
    deltaX: number;
    /**
     * The number of lines scrolled in the Y direction.
     */
    deltaY: number;
}
