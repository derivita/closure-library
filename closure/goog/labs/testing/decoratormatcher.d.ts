import { Matcher } from './matcher.js';
/**
 * The Anything matcher. Matches all possible inputs.
 */
export declare class AnythingMatcher implements Matcher {
    /**
     * The Anything matcher. Matches all possible inputs.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_decoratormatcher_AnythingMatcher;
    /**
     * Matches anything. Useful if one doesn't care what the object under test is.
     */
    matches(actualObject: any): any;
    /**
     * This method is never called but is needed so AnythingMatcher implements the
     * Matcher interface.
     */
    describe(actualObject: any): any;
    /**
     * Returns a matcher that matches anything.
     * @return A AnythingMatcher.
     */
    static anything(): AnythingMatcher;
    /**
     * Returns any matcher that is passed to it (aids readability).
     * @param matcher A matcher.
     * @return The wrapped matcher.
     */
    static is(matcher: Matcher): Matcher;
    /**
     * Returns a matcher with a customized description for the given matcher.
     * @param description The custom description for the matcher.
     * @param matcher The matcher.
     * @return The matcher with custom description.
     */
    static describedAs(description: string, matcher: Matcher): Matcher;
}
