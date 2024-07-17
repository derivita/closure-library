import { BrowserEvent } from '../../events/browserevent.js';
import type { Coordinate } from '../../math/coordinate.js';
/**
 * BrowserEvent expects an Event so we provide one for JSCompiler.
 *
 * This clones a lot of the functionality of events.Event. This used to
 * use a mixin, but the mixin results in confusing the two types when compiled.
 */
declare class TestingEvent extends Event {
    /**
     * BrowserEvent expects an Event so we provide one for JSCompiler.
     *
     * This clones a lot of the functionality of events.Event. This used to
     * use a mixin, but the mixin results in confusing the two types when compiled.
     * @param type Event Type.
     * @param opt_target Reference to the object that is the target of this event.
     */
    constructor(type: string, opt_target?: object | null);
    private noStructuralTyping_closure_goog_testing_events_events_TestingEvent;
    /**
     * Whether to cancel the event in internal capture/bubble processing for IE.
     */
    propagationStopped_: boolean;
    /**
     * Return value for in internal capture/bubble processing for IE.
     */
    returnValue_: boolean;
    stopPropagation(): void;
    preventDefault(): void;
}
export { TestingEvent as Event };
/**
 * Simulates a mousedown, mouseup, and then click on the given event target,
 * with the left mouse button.
 * @param target The target for the event.
 * @param opt_button Mouse button; defaults to `BrowserEvent.MouseButton.LEFT`.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireClickSequence(target: EventTarget | null, opt_button?: BrowserEvent.MouseButton | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates the sequence of events fired by the browser when the user double-
 * clicks the given target.
 * @param target The target for the event.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireDoubleClickSequence(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a complete keystroke (keydown, keypress, and keyup). Note that
 * if preventDefault is called on the keydown, the keypress will not fire.
 * @param target The target for the event.
 * @param keyOrKeyCode The key value or keycode of the key pressed.
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireKeySequence(target: EventTarget | null, keyOrKeyCode: string | number, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a complete keystroke (keydown, keypress, and keyup) when typing
 * a non-ASCII character. Same as fireKeySequence, the keypress will not fire
 * if preventDefault is called on the keydown.
 * @param target The target for the event.
 * @param keyOrKeyCode The key value or keycode of the keydown and keyup events.
 * @param keyPressKeyOrKeyCode The key value or keycode of the keypress event.
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireNonAsciiKeySequence(target: EventTarget | null, keyOrKeyCode: string | number, keyPressKeyOrKeyCode: string | number, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a mouseenter event on the given target.
 * @param target The target for the event.
 * @param relatedTarget The related target for the event (e.g., the node that the mouse is being moved out of).
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseEnterEvent(target: EventTarget, relatedTarget: EventTarget | null, opt_coords?: Coordinate): boolean;
/**
 * Simulates a mouseleave event on the given target.
 * @param target The target for the event.
 * @param relatedTarget The related target for the event (e.g., the node that the mouse is being moved into).
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseLeaveEvent(target: EventTarget, relatedTarget: EventTarget | null, opt_coords?: Coordinate): boolean;
/**
 * Simulates a mouseover event on the given target.
 * @param target The target for the event.
 * @param relatedTarget The related target for the event (e.g., the node that the mouse is being moved out of).
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseOverEvent(target: EventTarget | null, relatedTarget: EventTarget | null, opt_coords?: Coordinate | null): boolean;
/**
 * Simulates a mousemove event on the given target.
 * @param target The target for the event.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseMoveEvent(target: EventTarget | null, opt_coords?: Coordinate | null): boolean;
/**
 * Simulates a mouseout event on the given target.
 * @param target The target for the event.
 * @param relatedTarget The related target for the event (e.g., the node that the mouse is being moved into).
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseOutEvent(target: EventTarget | null, relatedTarget: EventTarget | null, opt_coords?: Coordinate | null): boolean;
/**
 * Simulates a mousedown event on the given target.
 * @param target The target for the event.
 * @param opt_button Mouse button; defaults to `BrowserEvent.MouseButton.LEFT`.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseDownEvent(target: EventTarget | null, opt_button?: BrowserEvent.MouseButton | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a mouseup event on the given target.
 * @param target The target for the event.
 * @param opt_button Mouse button; defaults to `BrowserEvent.MouseButton.LEFT`.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireMouseUpEvent(target: EventTarget | null, opt_button?: BrowserEvent.MouseButton | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a click event on the given target. IE only supports click with
 * the left mouse button.
 * @param target The target for the event.
 * @param opt_button Mouse button; defaults to `BrowserEvent.MouseButton.LEFT`.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireClickEvent(target: EventTarget | null, opt_button?: BrowserEvent.MouseButton | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a double-click event on the given target. Always double-clicks
 * with the left mouse button since no browser supports double-clicking with
 * any other buttons.
 * @param target The target for the event.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireDoubleClickEvent(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a contextmenu event on the given target.
 * @param target The target for the event.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireContextMenuEvent(target: EventTarget | null, opt_coords?: Coordinate | null): boolean;
/**
 * Simulates a mousedown, contextmenu, and the mouseup on the given event
 * target, with the right mouse button.
 * @param target The target for the event.
 * @param opt_coords Mouse position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireContextMenuSequence(target: EventTarget | null, opt_coords?: Coordinate | null): boolean;
/**
 * Simulates a popstate event on the given target.
 * @param target The target for the event.
 * @param state History state object.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function firePopStateEvent(target: EventTarget | null, state: object | null): boolean;
/**
 * Simulate a blur event on the given target.
 * @param target The target for the event.
 * @return The value returned by firing the blur browser event, which returns false iff 'preventDefault' was invoked.
 */
export declare function fireBlurEvent(target: EventTarget | null): boolean;
/**
 * Simulate a focus event on the given target.
 * @param target The target for the event.
 * @return The value returned by firing the focus browser event, which returns false iff 'preventDefault' was invoked.
 */
export declare function fireFocusEvent(target: EventTarget | null): boolean;
/**
 * Simulate a focus-in event on the given target.
 * @param target The target for the event.
 * @return The value returned by firing the focus-in browser event, which returns false iff 'preventDefault' was invoked.
 */
export declare function fireFocusInEvent(target: EventTarget): boolean;
/**
 * Simulates an event's capturing and bubbling phases.
 * @param event A simulated native event. It will be wrapped in a normalized BrowserEvent and dispatched to Closure listeners on all ancestors of its target (inclusive).
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireBrowserEvent(event: Event | null): boolean;
/**
 * Simulates a touchstart event on the given target.
 * @param target The target for the event.
 * @param opt_coords Touch position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireTouchStartEvent(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a touchmove event on the given target.
 * @param target The target for the event.
 * @param opt_coords Touch position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireTouchMoveEvent(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a touchend event on the given target.
 * @param target The target for the event.
 * @param opt_coords Touch position. Defaults to event's target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the event: false if preventDefault() was called on it, true otherwise.
 */
export declare function fireTouchEndEvent(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Simulates a simple touch sequence on the given target.
 * @param target The target for the event.
 * @param opt_coords Touch position. Defaults to event target's position (if available), otherwise (0, 0).
 * @param opt_eventProperties Event properties to be mixed into the BrowserEvent.
 * @return The returnValue of the sequence: false if preventDefault() was called on any of the events, true otherwise.
 */
export declare function fireTouchSequence(target: EventTarget | null, opt_coords?: Coordinate | null, opt_eventProperties?: object | null): boolean;
/**
 * Mixins a listenable into the given object. This turns the object
 * into a events.Listenable. This is useful, for example, when
 * you need to mock a implementation of listenable and still want it
 * to work with events.
 * @param obj The object to mixin into.
 */
export declare function mixinListenable(obj: object): void;
