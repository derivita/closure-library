import { Matcher } from './matcher.js';
/**
 * The AllOf matcher.
 */
export declare class AllOfMatcher implements Matcher {
    /**
     * The AllOf matcher.
     * @param matchers Input matchers.
     */
    constructor(matchers: Matcher[]);
    private noStructuralTyping_closure_goog_labs_testing_logicmatcher_AllOfMatcher;
    /**
     * Determines if all of the matchers match the input value.
     */
    matches(actualValue: any): any;
    /**
     * Describes why the matcher failed. The returned string is a concatenation of
     * all the failed matchers' error strings.
     */
    describe(actualValue: any): any;
    /**
     * Creates a matcher that will succeed only if all of the given matchers
     * succeed.
     * @param var_args The matchers to test against.
     * @return The AllOf matcher.
     */
    static allOf(...var_args: (Matcher | null)[]): AllOfMatcher;
}
/**
 * The AnyOf matcher.
 */
export declare class AnyOfMatcher implements Matcher {
    /**
     * The AnyOf matcher.
     * @param matchers Input matchers.
     */
    constructor(matchers: Matcher[]);
    private noStructuralTyping_closure_goog_labs_testing_logicmatcher_AnyOfMatcher;
    /**
     * Determines if any of the matchers matches the input value.
     */
    matches(actualValue: any): any;
    /**
     * Describes why the matcher failed.
     */
    describe(actualValue: any): any;
    /**
     * Accepts a set of matchers and returns a matcher which matches
     * values which satisfy the constraints of any of the given matchers.
     * @param var_args The matchers to test against.
     * @return The AnyOf matcher.
     */
    static anyOf(...var_args: (Matcher | null)[]): AnyOfMatcher;
}
/**
 * The IsNot matcher.
 */
export declare class IsNotMatcher implements Matcher {
    /**
     * The IsNot matcher.
     * @param matcher The matcher to negate.
     */
    constructor(matcher: Matcher);
    private noStructuralTyping_closure_goog_labs_testing_logicmatcher_IsNotMatcher;
    /**
     * Determines if the input value doesn't satisfy a matcher.
     */
    matches(actualValue: any): any;
    /**
     * Describes why the matcher failed.
     */
    describe(actualValue: any): any;
    /**
     * Returns a matcher that negates the input matcher. The returned
     * matcher matches the values not matched by the input matcher and vice-versa.
     * @param matcher The matcher to test against.
     * @return The IsNot matcher.
     */
    static isNot(matcher: Matcher): IsNotMatcher;
}
