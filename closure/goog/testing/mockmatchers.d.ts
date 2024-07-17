import type { MockExpectation } from './mock.js';
/**
 * A simple interface for executing argument matching.  A match in this case is
 * testing to see if a supplied object fits a given criteria.  True is returned
 * if the given criteria is met.
 */
export declare class ArgumentMatcher {
    /**
     * A simple interface for executing argument matching.  A match in this case is
     * testing to see if a supplied object fits a given criteria.  True is returned
     * if the given criteria is met.
     * @param opt_matchFn A function that evaluates a given argument and returns true if it meets a given criteria.
     * @param opt_matchName The name expressing intent as part of an error message for when a match fails.
     */
    constructor(opt_matchFn?: Function | null, opt_matchName?: string | null);
    private noStructuralTyping_closure_goog_testing_mockmatchers_ArgumentMatcher;
    /**
     * A function that takes a match argument and an optional MockExpectation
     * which (if provided) will get error information and returns whether or
     * not it matches.
     * @param toVerify The argument that should be verified.
     * @param opt_expectation The expectation for this match.
     * @return Whether or not a given argument passes verification.
     */
    matches(toVerify: any, opt_expectation?: MockExpectation | null): boolean;
}
/**
 * A matcher that verifies that an argument is an instance of a given class.
 */
export declare class InstanceOf extends ArgumentMatcher {
    /**
     * A matcher that verifies that an argument is an instance of a given class.
     * @param ctor The class that will be used for verification.
     */
    constructor(ctor: Function | null);
    private noStructuralTyping_closure_goog_testing_mockmatchers_InstanceOf;
}
/**
 * A matcher that verifies that an argument is of a given type (e.g. "object").
 */
export declare class TypeOf extends ArgumentMatcher {
    /**
     * A matcher that verifies that an argument is of a given type (e.g. "object").
     * @param type The type that a given argument must have.
     */
    constructor(type: string);
    private noStructuralTyping_closure_goog_testing_mockmatchers_TypeOf;
}
/**
 * A matcher that verifies that an argument matches a given RegExp.
 */
export declare class RegexpMatch extends ArgumentMatcher {
    /**
     * A matcher that verifies that an argument matches a given RegExp.
     * @param regexp The regular expression that the argument must match.
     */
    constructor(regexp: RegExp | null);
    private noStructuralTyping_closure_goog_testing_mockmatchers_RegexpMatch;
}
/**
 * A matcher that always returns true. It is useful when the user does not care
 * for some arguments.
 * For example: mockFunction('username', 'password', new IgnoreArgument());
 */
export declare class IgnoreArgument extends ArgumentMatcher {
    /**
     * A matcher that always returns true. It is useful when the user does not care
     * for some arguments.
     * For example: mockFunction('username', 'password', new IgnoreArgument());
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockmatchers_IgnoreArgument;
}
/**
 * A matcher that verifies that the argument is an object that equals the given
 * expected object, using a deep comparison.
 */
export declare class ObjectEquals extends ArgumentMatcher {
    /**
     * A matcher that verifies that the argument is an object that equals the given
     * expected object, using a deep comparison.
     * @param expectedObject An object to match against when verifying the argument.
     */
    constructor(expectedObject: object | null);
    private noStructuralTyping_closure_goog_testing_mockmatchers_ObjectEquals;
    matches(toVerify: any, opt_expectation: any): boolean;
}
/**
 * A matcher that saves the argument that it is verifying so that your unit test
 * can perform extra tests with this argument later.  For example, if the
 * argument is a callback method, the unit test can then later call this
 * callback to test the asynchronous portion of the call.
 */
export declare class SaveArgument extends ArgumentMatcher {
    /**
     * A matcher that saves the argument that it is verifying so that your unit test
     * can perform extra tests with this argument later.  For example, if the
     * argument is a callback method, the unit test can then later call this
     * callback to test the asynchronous portion of the call.
     * @param opt_matcher Argument matcher or matching function that will be used to validate the argument.  By default, argument will always be valid.
     * @param opt_matchName The name expressing intent as part of an error message for when a match fails.
     */
    constructor(opt_matcher?: ArgumentMatcher | Function | null, opt_matchName?: string | null);
    private noStructuralTyping_closure_goog_testing_mockmatchers_SaveArgument;
    /**
     * All saved arguments that were verified.
     */
    allArgs: any[];
    matches(toVerify: any, opt_expectation: any): boolean;
    /**
     * The last (or only) saved argument that was verified.
     */
    arg: any;
}
/**
 * An instance of the IgnoreArgument matcher. Returns true for all matches.
 */
export declare var ignoreArgument: IgnoreArgument;
/**
 * A matcher that verifies that an argument is an array.
 */
export declare var isArray: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a array-like.  A NodeList is an
 * example of a collection that is very close to an array.
 */
export declare var isArrayLike: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a date-like.
 */
export declare var isDateLike: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a string.
 */
export declare var isString: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a boolean.
 */
export declare var isBoolean: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a number.
 */
export declare var isNumber: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is a function.
 */
export declare var isFunction: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is an object.
 */
export declare var isObject: ArgumentMatcher;
/**
 * A matcher that verifies that an argument is like a DOM node.
 */
export declare var isNodeLike: ArgumentMatcher;
/**
 * A function that checks to see if an array matches a given set of
 * expectations.  The expectations array can be a mix of ArgumentMatcher
 * implementations and values.  True will be returned if values are identical or
 * if a matcher returns a positive result.
 * @param expectedArr An array of expectations which can be either values to check for equality or ArgumentMatchers.
 * @param arr The array to match.
 * @param opt_expectation The expectation for this match.
 * @return Whether or not the given array matches the expectations.
 */
export declare function flexibleArrayMatcher(expectedArr: any[] | null, arr: any[] | null, opt_expectation?: MockExpectation | null): boolean;
