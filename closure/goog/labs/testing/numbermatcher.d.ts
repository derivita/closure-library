import { Matcher } from './matcher.js';
/**
 * Matches any number value.
 */
export declare class AnyNumberMatcher implements Matcher {
    /**
     * Matches any number value.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_AnyNumberMatcher;
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    static anyNumber(): AnyNumberMatcher;
}
/**
 * The GreaterThan matcher.
 */
export declare class GreaterThanMatcher implements Matcher {
    /**
     * The GreaterThan matcher.
     * @param value The value to compare.
     */
    constructor(value: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_GreaterThanMatcher;
    /**
     * Determines if input value is greater than the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @return A GreaterThanMatcher.
     */
    static greaterThan(value: number): GreaterThanMatcher;
}
/**
 * The lessThan matcher.
 */
export declare class LessThanMatcher implements Matcher {
    /**
     * The lessThan matcher.
     * @param value The value to compare.
     */
    constructor(value: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_LessThanMatcher;
    /**
     * Determines if the input value is less than the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @return A LessThanMatcher.
     */
    static lessThan(value: number): LessThanMatcher;
}
/**
 * The GreaterThanEqualTo matcher.
 */
export declare class GreaterThanEqualToMatcher implements Matcher {
    /**
     * The GreaterThanEqualTo matcher.
     * @param value The value to compare.
     */
    constructor(value: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_GreaterThanEqualToMatcher;
    /**
     * Determines if the input value is greater than equal to the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @return A GreaterThanEqualToMatcher.
     */
    static greaterThanEqualTo(value: number): GreaterThanEqualToMatcher;
}
/**
 * The LessThanEqualTo matcher.
 */
export declare class LessThanEqualToMatcher implements Matcher {
    /**
     * The LessThanEqualTo matcher.
     * @param value The value to compare.
     */
    constructor(value: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_LessThanEqualToMatcher;
    /**
     * Determines if the input value is less than or equal to the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @return A LessThanEqualToMatcher.
     */
    static lessThanEqualTo(value: number): LessThanEqualToMatcher;
}
/**
 * The EqualTo matcher.
 */
export declare class EqualToMatcher implements Matcher {
    /**
     * The EqualTo matcher.
     * @param value The value to compare.
     */
    constructor(value: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_EqualToMatcher;
    /**
     * Determines if the input value is equal to the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @return An EqualToMatcher.
     */
    static equalTo(value: number): EqualToMatcher;
}
/**
 * The CloseTo matcher.
 */
export declare class CloseToMatcher implements Matcher {
    /**
     * The CloseTo matcher.
     * @param value The value to compare.
     * @param range The range to check within.
     */
    constructor(value: number, range: number);
    private noStructuralTyping_closure_goog_labs_testing_numbermatcher_CloseToMatcher;
    /**
     * Determines if input value is within a certain range of the expected value.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    /**
     *
     * @param value The expected value.
     * @param range The maximum allowed difference from the expected value.
     * @return A CloseToMatcher.
     */
    static closeTo(value: number, range: number): CloseToMatcher;
}
