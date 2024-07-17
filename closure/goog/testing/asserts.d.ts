import { JsUnitException } from './jsunitexception.js';
/**
 *
 */
declare function fail_(failureMessage: any): void;
export { fail_ as fail };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assert_(a: any, opt_b?: any): void;
export { assert_ as assert };
/**
 * Asserts that the function throws an error.
 * @param a The assertion comment or the function to call.
 * @param opt_b The function to call (if the first argument of `assertThrows` was the comment).
 * @return The error thrown by the function. Beware that code may throw other types in strange scenarios.
 */
declare function assertThrows_(a: string | Function, opt_b?: Function): Error;
export { assertThrows_ as assertThrows };
/**
 * Asserts that the function does not throw an error.
 * @param a The assertion comment or the function to call.
 * @param opt_b The function to call (if the first argument of `assertNotThrows` was the comment).
 * @return The return value of the function.
 */
declare function assertNotThrows_(a: string | Function, opt_b?: Function): any;
export { assertNotThrows_ as assertNotThrows };
/**
 * Asserts that the given callback function results in a JsUnitException when
 * called, and that the resulting failure message matches the given expected
 * message.
 * @param opt_expectedMessage Failure message expected to be given with the exception.
 * @return The error thrown by the function.
 */
declare function assertThrowsJsUnitException_(callback: any, opt_expectedMessage?: string): JsUnitException;
export { assertThrowsJsUnitException_ as assertThrowsJsUnitException };
/**
 * Asserts that the IThenable rejects.
 *
 * This is useful for asserting that async functions throw, like an asynchronous
 * assertThrows. Example:
 *
 * ```
 * async function shouldThrow() { throw new Error('error!'); }
 * async function testShouldThrow() {
 * const error = await assertRejects(shouldThrow());
 * assertEquals('error!', error.message);
 * }
 * ```
 * @param a The assertion comment or the IThenable.
 * @param opt_b The IThenable (if the first argument of `assertRejects` was the comment).
 * @return A child IThenable which resolves with the error that the passed in IThenable rejects with. This IThenable will reject if the passed in IThenable does not reject.
 */
declare function assertRejects_(a: string | PromiseLike<any>, opt_b?: PromiseLike<any>): PromiseLike<any>;
export { assertRejects_ as assertRejects };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertTrue_(a: any, opt_b?: any): void;
export { assertTrue_ as assertTrue };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertFalse_(a: any, opt_b?: any): void;
export { assertFalse_ as assertFalse };
/**
 *
 * @param a The expected value (2 args) or the debug message (3 args).
 * @param b The actual value (2 args) or the expected value (3 args).
 * @param opt_c The actual value (3 args only).
 */
declare function assertEquals_(a: any, b: any, opt_c?: any): void;
export { assertEquals_ as assertEquals };
/**
 *
 * @param a The expected value (2 args) or the debug message (3 args).
 * @param b The actual value (2 args) or the expected value (3 args).
 * @param opt_c The actual value (3 args only).
 */
declare function assertNotEquals_(a: any, b: any, opt_c?: any): void;
export { assertNotEquals_ as assertNotEquals };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNull_(a: any, opt_b?: any): void;
export { assertNull_ as assertNull };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNotNull_(a: any, opt_b?: any): void;
export { assertNotNull_ as assertNotNull };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertUndefined_(a: any, opt_b?: any): void;
export { assertUndefined_ as assertUndefined };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNotUndefined_(a: any, opt_b?: any): void;
export { assertNotUndefined_ as assertNotUndefined };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNullOrUndefined_(a: any, opt_b?: any): void;
export { assertNullOrUndefined_ as assertNullOrUndefined };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNotNullNorUndefined_(a: any, opt_b?: any): void;
export { assertNotNullNorUndefined_ as assertNotNullNorUndefined };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNonEmptyString_(a: any, opt_b?: any): void;
export { assertNonEmptyString_ as assertNonEmptyString };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNaN_(a: any, opt_b?: any): void;
export { assertNaN_ as assertNaN };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertNotNaN_(a: any, opt_b?: any): void;
export { assertNotNaN_ as assertNotNaN };
/**
 * The return value of the equality predicate passed to findDifferences below,
 * in cases where the predicate can't test the input variables for equality.
 */
export declare var EQUALITY_PREDICATE_CANT_PROCESS: string | null;
/**
 * The return value of the equality predicate passed to findDifferences below,
 * in cases where the input vriables are equal.
 */
export declare var EQUALITY_PREDICATE_VARS_ARE_EQUAL: string | null;
export declare var ARRAY_TYPES: {
    [key: string]: boolean;
};
/**
 * The result of a comparison performed by an EqualityFunction: if undefined,
 * the inputs are equal; otherwise, a human-readable description of their
 * inequality.
 */
export type ComparisonResult = string | undefined;
/**
 * A equality predicate.
 *
 * The first two arguments are the values to be compared. The third is an
 * equality function which can be used to recursively apply findDifferences.
 *
 * An example comparison implementation for Array could be:
 *
 * function arrayEq(a, b, eq) {
 * if (a.length !== b.length) {
 * return "lengths unequal";
 * }
 *
 * const differences = [];
 * for (let i = 0; i < a.length; i++) {
 * // Use the findDifferences implementation to perform recursive
 * // comparisons.
 * const diff = eq(a[i], b[i], eq);
 * if (diff) {
 * differences[i] = diff;
 * }
 * }
 *
 * if (differences) {
 * return `found array differences: ${differences}`;
 * }
 *
 * // Otherwise return undefined, indicating no differences.
 * return undefined;
 * }
 */
export type EqualityFunction = () => (ComparisonResult | null);
/**
 * Marks the given prototype as having equality semantics provided by the given
 * custom equality function.
 *
 * This will cause findDifferences and assertObjectEquals to use the given
 * function when comparing objects with this prototype. When comparing two
 * objects with different prototypes, the equality (if any) attached to their
 * lowest common ancestor in the prototype hierarchy will be used.
 */
export declare function registerComparator(prototype: object, fn: EqualityFunction): void;
/**
 * Clears the custom equality function currently applied to the given prototype.
 * Returns true if a function was removed.
 * @return whether a comparator was removed.
 */
export declare function clearCustomComparator(prototype: object): boolean;
/**
 * Determines if two items of any type match, and formulates an error message
 * if not.
 * @param expected Expected argument to match.
 * @param actual Argument as a result of performing the test.
 * @param opt_equalityPredicate An optional function that can be used to check equality of variables. It accepts 3 arguments: type-of-variables, var1, var2 (in that order) and returns an error message if the variables are not equal, EQUALITY_PREDICATE_VARS_ARE_EQUAL if the variables are equal, or EQUALITY_PREDICATE_CANT_PROCESS if the predicate couldn't check the input variables. The function will be called only if the types of var1 and var2 are identical.
 * @return Null on success, error message on failure.
 */
export declare function findDifferences(expected: any, actual: any, opt_equalityPredicate?: () => (string | null)): string | null;
/**
 * Notes:
 * Object equality has some nasty browser quirks, and this implementation is
 * not 100% correct. For example,
 *
 * <code>
 * var a = [0, 1, 2];
 * var b = [0, 1, 2];
 * delete a[1];
 * b[1] = undefined;
 * assertObjectEquals(a, b); // should fail, but currently passes
 * </code>
 *
 * See asserts_test.html for more interesting edge cases.
 *
 * The first comparison object provided is the expected value, the second is
 * the actual.
 * @param a Assertion message or comparison object.
 * @param b Comparison object.
 * @param opt_c Comparison object, if an assertion message was provided.
 */
declare function assertObjectEquals_(a: any, b: any, opt_c?: any): void;
export { assertObjectEquals_ as assertObjectEquals };
/**
 * Similar to assertObjectEquals above, but accepts a tolerance margin.
 * @param a Assertion message or comparison object.
 * @param b Comparison object.
 * @param c Comparison object or tolerance.
 * @param opt_d Tolerance, if an assertion message was provided.
 */
declare function assertObjectRoughlyEquals_(a: any, b: any, c: any, opt_d?: any): void;
export { assertObjectRoughlyEquals_ as assertObjectRoughlyEquals };
/**
 * Compares two arbitrary objects for non-equalness.
 *
 * All the same caveats as for assertObjectEquals apply here:
 * Undefined values may be confused for missing values, or vice versa.
 * @param a Assertion message or comparison object.
 * @param b Comparison object.
 * @param opt_c Comparison object, if an assertion message was provided.
 */
declare function assertObjectNotEquals_(a: any, b: any, opt_c?: any): void;
export { assertObjectNotEquals_ as assertObjectNotEquals };
/**
 * Compares two arrays ignoring negative indexes and extra properties on the
 * array objects. Use case: Internet Explorer adds the index, lastIndex and
 * input enumerable fields to the result of string.match(/regexp/g), which makes
 * assertObjectEquals fail.
 * @param a The expected array (2 args) or the debug message (3 args).
 * @param b The actual array (2 args) or the expected array (3 args).
 * @param opt_c The actual array (3 args only).
 */
declare function assertArrayEquals_(a: any, b: any, opt_c?: any): void;
export { assertArrayEquals_ as assertArrayEquals };
/**
 * Compares two objects that can be accessed like an array and assert that
 * each element is equal.
 * @param a Failure message (3 arguments) or object #1 (2 arguments).
 * @param b Object #2 (2 arguments) or object #1 (3 arguments).
 * @param opt_c Object #2 (3 arguments).
 */
declare function assertElementsEquals_(a: string | object | null, b: object | null, opt_c?: object | null): void;
export { assertElementsEquals_ as assertElementsEquals };
/**
 * Compares two objects that can be accessed like an array and assert that
 * each element is roughly equal.
 * @param a Failure message (4 arguments) or object #1 (3 arguments).
 * @param b Object #1 (4 arguments) or object #2 (3 arguments).
 * @param c Object #2 (4 arguments) or tolerance (3 arguments).
 * @param opt_d tolerance (4 arguments).
 */
declare function assertElementsRoughlyEqual_(a: string | object | null, b: object | null, c: object | number | null, opt_d?: number): void;
export { assertElementsRoughlyEqual_ as assertElementsRoughlyEqual };
/**
 * Compares elements of two array-like or iterable objects using strict equality
 * without taking their order into account.
 * @param a Assertion message or the expected elements.
 * @param b Expected elements or the actual elements.
 * @param opt_c Actual elements.
 */
declare function assertSameElements_(a: string | ArrayLike<any> | Iterable, b: ArrayLike<any> | Iterable, opt_c?: ArrayLike<any> | Iterable): void;
export { assertSameElements_ as assertSameElements };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertEvaluatesToTrue_(a: any, opt_b?: any): void;
export { assertEvaluatesToTrue_ as assertEvaluatesToTrue };
/**
 *
 * @param a The value to assert (1 arg) or debug message (2 args).
 * @param opt_b The value to assert (2 args only).
 */
declare function assertEvaluatesToFalse_(a: any, opt_b?: any): void;
export { assertEvaluatesToFalse_ as assertEvaluatesToFalse };
/**
 * Compares two HTML snippets.
 *
 * Take extra care if attributes are involved. `assertHTMLEquals`'s
 * implementation isn't prepared for complex cases. For example, the following
 * comparisons erroneously fail:
 * <pre>
 * assertHTMLEquals('<a href="x" target="y">', '<a target="y" href="x">');
 * assertHTMLEquals('<div class="a b">', '<div class="b a">');
 * assertHTMLEquals('<input disabled>', '<input disabled="disabled">');
 * </pre>
 *
 * When in doubt, use `goog.testing.dom.assertHtmlMatches`.
 * @param a The expected value (2 args) or the debug message (3 args).
 * @param b The actual value (2 args) or the expected value (3 args).
 * @param opt_c The actual value (3 args only).
 */
declare function assertHTMLEquals_(a: any, b: any, opt_c?: any): void;
export { assertHTMLEquals_ as assertHTMLEquals };
/**
 * Compares two CSS property values to make sure that they represent the same
 * things. This will normalize values in the browser. For example, in Firefox,
 * this assertion will consider "rgb(0, 0, 255)" and "#0000ff" to be identical
 * values for the "color" property. This function won't normalize everything --
 * for example, in most browsers, "blue" will not match "#0000ff". It is
 * intended only to compensate for unexpected normalizations performed by
 * the browser that should also affect your expected value.
 * @param a Assertion message, or the CSS property name.
 * @param b CSS property name, or the expected value.
 * @param c The expected value, or the actual value.
 * @param opt_d The actual value.
 */
declare function assertCSSValueEquals_(a: string, b: string, c: string, opt_d?: string): void;
export { assertCSSValueEquals_ as assertCSSValueEquals };
/**
 *
 * @param a The expected value (2 args) or the debug message (3 args).
 * @param b The actual value (2 args) or the expected value (3 args).
 * @param opt_c The actual value (3 args only).
 */
declare function assertHashEquals_(a: any, b: any, opt_c?: any): void;
export { assertHashEquals_ as assertHashEquals };
/**
 *
 * @param a The expected value (3 args) or the debug message (4 args).
 * @param b The actual value (3 args) or the expected value (4 args).
 * @param c The tolerance (3 args) or the actual value (4 args).
 * @param opt_d The tolerance (4 args only).
 */
declare function assertRoughlyEquals_(a: any, b: any, c: any, opt_d?: any): void;
export { assertRoughlyEquals_ as assertRoughlyEquals };
/**
 * Checks if the test value is included in the given container. The container
 * can be a string (where "included" means a substring), an array or any
 * `IArrayLike` (where "included" means a member), or any type implementing
 * `indexOf` with similar semantics (returning -1 for not included).
 * @param a Failure message (3 arguments) or the test value (2 arguments).
 * @param b The test value (3 arguments) or the container (2 arguments).
 * @param opt_c The container.
 */
declare function assertContains_(a: any, b: any, opt_c?: any): void;
export { assertContains_ as assertContains };
/**
 * Checks if the test value is not included in the given container. The
 * container can be a string (where "included" means a substring), an array or
 * any `IArrayLike` (where "included" means a member), or any type implementing
 * `indexOf` with similar semantics (returning -1 for not included).
 * @param a Failure message (3 arguments) or the contained element (2 arguments).
 * @param b The contained element (3 arguments) or the container (2 arguments).
 * @param opt_c The container.
 */
declare function assertNotContains_(a: any, b: any, opt_c?: any): void;
export { assertNotContains_ as assertNotContains };
/**
 * Checks if the given string matches the given regular expression.
 * @param a Failure message (3 arguments) or the expected regular expression as a string or RegExp (2 arguments).
 * @param b The regular expression (3 arguments) or the string to test (2 arguments).
 * @param opt_c The string to test.
 */
declare function assertRegExp_(a: any, b: any, opt_c?: any): void;
export { assertRegExp_ as assertRegExp };
/**
 * Converts an array-like or iterable object to an array (clones it if it's
 * already an array).
 * @param obj The collection object.
 * @return Copy of the collection as array.
 */
export declare function toArray_(obj: Iterable | ArrayLike<any>): any[];
/**
 * Standardizes a CSS value for a given property by applying it to an element
 * and then reading it back.
 * @param propertyName CSS property name.
 * @param value CSS value.
 * @return Normalized CSS value.
 */
export declare function standardizeCSSValue(propertyName: string, value: string): string;
/**
 * Raises a JsUnit exception with the given comment. If the exception is
 * unexpectedly caught during a unit test, it will be rethrown so that it is
 * seen by the test framework.
 * @param comment A summary for the exception.
 * @param opt_message A description of the exception.
 */
export declare function raiseException(comment: string, opt_message?: string): void;
