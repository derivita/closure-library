import { Event } from '../../events/event.js';
import type { EventId } from '../../events/eventid.js';
/**
 * Event observer.  Implements a handleEvent interface so it may be used as
 * a listener in listening functions and methods.
 */
export declare class EventObserver {
    /**
     * Event observer.  Implements a handleEvent interface so it may be used as
     * a listener in listening functions and methods.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_events_eventobserver_EventObserver;
    /**
     * Handles an event and remembers it.  Event listening functions and methods
     * will call this method when this observer is used as a listener.
     * @param e Event to handle.
     */
    handleEvent(e: Event): void;
    /**
     *
     * @param opt_type If given, only return events of this type.
     * @return The events handled, oldest to newest.
     */
    getEvents(opt_type?: string | EventId): Event[];
    /**
     * Clears the list of events seen by this observer.
     */
    clear(): void;
}
