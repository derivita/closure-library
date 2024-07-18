import { Event as GoogEvent } from './event.js';
/**
 * Accepts a browser event object and creates a patched, cross browser event
 * object.
 * The content of this object will not be initialized if no event object is
 * provided. If this is the case, init() needs to be invoked separately.
 */
export declare class BrowserEvent extends GoogEvent {
    /**
     * Accepts a browser event object and creates a patched, cross browser event
     * object.
     * The content of this object will not be initialized if no event object is
     * provided. If this is the case, init() needs to be invoked separately.
     * @param opt_e Browser event object.
     * @param opt_currentTarget Current target for event.
     */
    constructor(opt_e?: Event | null, opt_currentTarget?: EventTarget | null);
    private noStructuralTyping_closure_goog_events_browserevent_BrowserEvent;
    /**
     * Target that fired the event.
     */
    target: Node | null;
    /**
     * Node that had the listener attached.
     */
    currentTarget: Node | undefined | null;
    /**
     * For mouseover and mouseout events, the related object for the event.
     */
    relatedTarget: Node | null;
    /**
     * X-coordinate relative to target.
     */
    offsetX: number;
    /**
     * Y-coordinate relative to target.
     */
    offsetY: number;
    /**
     * X-coordinate relative to the window.
     */
    clientX: number;
    /**
     * Y-coordinate relative to the window.
     */
    clientY: number;
    /**
     * X-coordinate relative to the monitor.
     */
    screenX: number;
    /**
     * Y-coordinate relative to the monitor.
     */
    screenY: number;
    /**
     * Which mouse button was pressed.
     */
    button: number;
    /**
     * Key of key press.
     */
    key: string;
    /**
     * Keycode of key press.
     */
    keyCode: number;
    /**
     * Keycode of key press.
     */
    charCode: number;
    /**
     * Whether control was pressed at time of event.
     */
    ctrlKey: boolean;
    /**
     * Whether alt was pressed at time of event.
     */
    altKey: boolean;
    /**
     * Whether shift was pressed at time of event.
     */
    shiftKey: boolean;
    /**
     * Whether the meta key was pressed at time of event.
     */
    metaKey: boolean;
    /**
     * History state object, only set for PopState events where it's a copy of the
     * state object provided to pushState or replaceState.
     */
    state: object | null;
    /**
     * Whether the default platform modifier key was pressed at time of event.
     * (This is control for all platforms except Mac, where it's Meta.)
     */
    platformModifierKey: boolean;
    pointerId: number;
    pointerType: string;
    static USE_LAYER_XY_AS_OFFSET_XY: boolean;
    /**
     * Static data for mapping mouse buttons.
     */
    static IEButtonMap: number[];
    /**
     * Static data for mapping mouse buttons.
     */
    static IE_BUTTON_MAP: number[];
    /**
     * Static data for mapping MSPointerEvent types to PointerEvent types.
     */
    static IE_POINTER_TYPE_MAP: {
        [key: number]: BrowserEvent.PointerType | null;
    };
    /**
     * Accepts a browser event object and creates a patched, cross browser event
     * object.
     * @param e Browser event object.
     * @param opt_currentTarget Current target for event.
     */
    init(e: Event | null, opt_currentTarget?: EventTarget | null): void;
    /**
     * Tests to see which button was pressed during the event. This is really only
     * useful in IE and Gecko browsers. And in IE, it's only useful for
     * mousedown/mouseup events, because click only fires for the left mouse button.
     *
     * Safari 2 only reports the left button being clicked, and uses the value '1'
     * instead of 0. Opera only reports a mousedown event for the middle button, and
     * no mouse events for the right button. Opera has default behavior for left and
     * middle click that can only be overridden via a configuration setting.
     *
     * There's a nice table of this mess at http://www.unixpapa.com/js/mouse.html.
     * @param button The button to test for.
     * @return True if button was pressed.
     */
    isButton(button: BrowserEvent.MouseButton | null): boolean;
    /**
     * Whether this has an "action"-producing mouse button.
     *
     * By definition, this includes left-click on windows/linux, and left-click
     * without the ctrl key on Macs.
     * @return The result.
     */
    isMouseActionButton(): boolean;
    stopPropagation(): void;
    preventDefault(): void;
    getBrowserEvent(): Event | null;
}
export declare namespace BrowserEvent {
    /**
     * Normalized button constants for the mouse.
     */
    enum MouseButton {
        LEFT = 0,
        MIDDLE = 1,
        RIGHT = 2,
        BACK = 3,
        FORWARD = 4
    }
    /**
     * Normalized pointer type constants for pointer events.
     */
    enum PointerType {
        MOUSE = "mouse",
        PEN = "pen",
        TOUCH = "touch"
    }
}
