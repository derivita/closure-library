import { ArgumentMatcher } from '../mockmatchers.js';
/**
 * A matcher that verifies that an argument is a `Event` of a
 * particular type.
 */
export declare class EventMatcher extends ArgumentMatcher {
    /**
     * A matcher that verifies that an argument is a `Event` of a
     * particular type.
     * @param type The single type the event argument must be of.
     */
    constructor(type: string);
    private noStructuralTyping_closure_goog_testing_events_matchers_EventMatcher;
}
