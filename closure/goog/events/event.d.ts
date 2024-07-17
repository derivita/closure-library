import { EventId } from './eventid.js';
/**
 * A base class for event objects, so that they can support preventDefault and
 * stopPropagation.
 */
export declare class Event {
    /**
     * A base class for event objects, so that they can support preventDefault and
     * stopPropagation.
     * @param type Event Type.
     * @param opt_target Reference to the object that is the target of this event. It has to implement the `EventTarget` interface declared at {@link http://developer.mozilla.org/en/DOM/EventTarget}.
     */
    constructor(type: string | EventId, opt_target?: object | null);
    private noStructuralTyping_closure_goog_events_event_Event;
    /**
     * Event type.
     */
    type: string;
    /**
     * TODO(tbreisacher): The type should probably be
     * EventTarget|EventTarget.
     *
     * Target of the event.
     */
    target: object | undefined | null;
    /**
     * Object that had the listener attached.
     */
    currentTarget: object | undefined | null;
    /**
     * Whether the default action has been prevented.
     * This is a property to match the W3C specification at
     * {@link http://www.w3.org/TR/DOM-Level-3-Events/
     * #events-event-type-defaultPrevented}.
     * Must be treated as read-only outside the class.
     */
    defaultPrevented: boolean;
    hasPropagationStopped(): boolean;
    /**
     * Stops event propagation.
     */
    stopPropagation(): void;
    /**
     * Prevents the default action, for example a link redirecting to a url.
     */
    preventDefault(): void;
    /**
     * Stops the propagation of the event. It is equivalent to
     * `e.stopPropagation()`, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param e An event.
     */
    static stopPropagation(e: Event): void;
    /**
     * Prevents the default action. It is equivalent to
     * `e.preventDefault()`, but can be used as the callback argument of
     * {@link goog.events.listen} without declaring another function.
     * @param e An event.
     */
    static preventDefault(e: Event): void;
}
