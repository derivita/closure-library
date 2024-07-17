import { Event as eventsEvent } from '../events/event.js';
/**
 * Event object dispatched after the history state has changed.
 */
export declare class Event extends eventsEvent {
    /**
     * Event object dispatched after the history state has changed.
     * @param token The string identifying the new history state.
     * @param isNavigation True if the event was triggered by a browser action, such as forward or back, clicking on a link, editing the URL, or calling {@code window.history.(go|back|forward)}. False if the token has been changed by a `setToken` or `replaceToken` call.
     */
    constructor(token: string, isNavigation: boolean);
    private noStructuralTyping_closure_goog_history_event_Event;
    /**
     * The current history state.
     */
    token: string;
    /**
     * Whether the event was triggered by browser navigation.
     */
    isNavigation: boolean;
}
