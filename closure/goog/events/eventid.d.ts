/**
 * A templated class that is used when registering for events. Typical usage:
 *
 * /** @type {EventId<MyEventObj>} *\
 * var myEventId = new EventId(
 * goog.events.getUniqueId(('someEvent'));
 *
 * // No need to cast or declare here since the compiler knows the
 * // correct type of 'evt' (MyEventObj).
 * something.listen(myEventId, function(evt) {});
 */
export declare class EventId<T = any> {
    /**
     * A templated class that is used when registering for events. Typical usage:
     *
     * /** @type {EventId<MyEventObj>} *\
     * var myEventId = new EventId(
     * goog.events.getUniqueId(('someEvent'));
     *
     * // No need to cast or declare here since the compiler knows the
     * // correct type of 'evt' (MyEventObj).
     * something.listen(myEventId, function(evt) {});
     */
    constructor(eventId: string);
    private noStructuralTyping_closure_goog_events_eventid_EventId;
    id: any;
    toString(): string;
}
