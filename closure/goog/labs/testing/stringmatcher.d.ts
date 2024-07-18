import { Matcher } from './matcher.js';
/**
 * Matches any string value.
 */
export declare class AnyStringMatcher implements Matcher {
    /**
     * Matches any string value.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_AnyStringMatcher;
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    static anyString(): AnyStringMatcher;
}
/**
 * The ContainsString matcher.
 */
export declare class ContainsStringMatcher implements Matcher {
    /**
     * The ContainsString matcher.
     * @param value The expected string.
     */
    constructor(value: string);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_ContainsStringMatcher;
    /**
     * Determines if input string contains the expected string.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string containing the given string.
     * @param value The expected value.
     * @return A ContainsStringMatcher.
     */
    static containsString(value: string): ContainsStringMatcher;
}
/**
 * The EndsWith matcher.
 */
export declare class EndsWithMatcher implements Matcher {
    /**
     * The EndsWith matcher.
     * @param value The expected string.
     */
    constructor(value: string);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_EndsWithMatcher;
    /**
     * Determines if input string ends with the expected string.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string that ends with the given string.
     * @param value The expected value.
     * @return A EndsWithMatcher.
     */
    static endsWith(value: string): EndsWithMatcher;
}
/**
 * The EqualToIgnoringWhitespace matcher.  Collapses all whitespace down to a
 * single space before comparing the strings.  It is also case-insensitive.
 */
export declare class EqualToIgnoringWhitespaceMatcher implements Matcher {
    /**
     * The EqualToIgnoringWhitespace matcher.  Collapses all whitespace down to a
     * single space before comparing the strings.  It is also case-insensitive.
     * @param value The expected string.
     */
    constructor(value: string);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_EqualToIgnoringWhitespaceMatcher;
    /**
     * Determines if input string is the expected string when all whitespace in both
     * has been collapsed down into a single space.  Does a case-insensitive match.
     */
    matches(actualValue: any): boolean;
    /**
     *
     */
    describe(actualValue: any): string;
    toString(): string;
    /**
     * Matches a string that equals (ignoring whitespace) the given string.
     * @param value The expected value.
     * @return A EqualToIgnoringWhitespaceMatcher.
     */
    static equalToIgnoringWhitespace(value: string): EqualToIgnoringWhitespaceMatcher;
}
/**
 * The Equals matcher.
 */
export declare class EqualsMatcher implements Matcher {
    /**
     * The Equals matcher.
     * @param value The expected string.
     */
    constructor(value: string);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_EqualsMatcher;
    /**
     * Determines if input string is equal to the expected string.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string that equals the given string.
     * @param value The expected value.
     * @return A EqualsMatcher.
     */
    static equals(value: string): EqualsMatcher;
}
/**
 * The MatchesRegex matcher.
 */
export declare class RegexMatcher implements Matcher {
    /**
     * The MatchesRegex matcher.
     * @param regex The expected regex.
     */
    constructor(regex: RegExp);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_RegexMatcher;
    /**
     * Determines if input string is equal to the expected string.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string against a regular expression.
     * @param regex The expected regex.
     * @return A RegexMatcher.
     */
    static matchesRegex(regex: RegExp): RegexMatcher;
}
/**
 * The StartsWith matcher.
 */
export declare class StartsWithMatcher implements Matcher {
    /**
     * The StartsWith matcher.
     * @param value The expected string.
     */
    constructor(value: string);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_StartsWithMatcher;
    /**
     * Determines if input string starts with the expected string.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string that starts with the given string.
     * @param value The expected value.
     * @return A StartsWithMatcher.
     */
    static startsWith(value: string): StartsWithMatcher;
}
/**
 * The StringContainsInOrdermatcher.
 */
export declare class StringContainsInOrderMatcher implements Matcher {
    /**
     * The StringContainsInOrdermatcher.
     * @param values The expected string values.
     */
    constructor(values: string[] | null);
    private noStructuralTyping_closure_goog_labs_testing_stringmatcher_StringContainsInOrderMatcher;
    /**
     * Determines if input string contains, in order, the expected array of strings.
     */
    matches(actualValue: any): any;
    describe(actualValue: any): any;
    toString(): string;
    /**
     * Matches a string that contains the given strings in order.
     * @param values The expected value.
     * @return A StringContainsInOrderMatcher.
     */
    static stringContainsInOrder(values: string[] | null): StringContainsInOrderMatcher;
}
