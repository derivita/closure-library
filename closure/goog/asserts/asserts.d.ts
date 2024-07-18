import { DebugError } from '../debug/error.js';
export declare var ENABLE_ASSERTS: boolean;
/**
 * Error object for failed assertions.
 */
declare class AssertionError extends DebugError {
    /**
     * Error object for failed assertions.
     * @param messagePattern The pattern that was used to form message.
     * @param messageArgs The items to substitute into the pattern.
     */
    constructor(messagePattern: string, messageArgs: any[]);
    private noStructuralTyping_closure_goog_asserts_asserts_AssertionError;
    /**
     * The message pattern used to format the error message. Error handlers can
     * use this to uniquely identify the assertion.
     */
    messagePattern: string;
    name: string;
}
export { AssertionError };
/**
 * The default error handler.
 * @param e The exception to be handled.
 */
export declare function DEFAULT_ERROR_HANDLER(e: AssertionError): void;
/**
 * Sets a custom error handler that can be used to customize the behavior of
 * assertion failures, for example by turning all assertion failures into log
 * messages.
 */
export declare function setErrorHandler(errorHandler: () => any): void;
/**
 * Checks if the condition evaluates to true if ENABLE_ASSERTS is
 * true.
 * @param condition The condition to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value of the condition.
 */
export declare function assert<T = any>(condition: T | null, opt_message?: string, ...var_args: any[]): T | null;
/**
 * Checks if `value` is `null` or `undefined` if goog.asserts.ENABLE_ASSERTS is
 * true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return `value` with its type narrowed to exclude `null` and `undefined`.
 */
export declare function assertExists<T = any, R = any>(value: T | null, opt_message?: string, ...var_args: any[]): R | null;
/**
 * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
 * when we want to add a check in the unreachable area like switch-case
 * statement:
 *
 * <pre>
 * switch(type) {
 * case FOO: doSomething(); break;
 * case BAR: doSomethingElse(); break;
 * default: goog.asserts.fail('Unrecognized type: ' + type);
 * // We have only 2 types - "default:" section is unreachable code.
 * }
 * </pre>
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 */
export declare function fail(opt_message?: string, ...var_args: any[]): void;
/**
 * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a number when asserts enabled.
 */
export declare function assertNumber(value: any, opt_message?: string, ...var_args: any[]): number;
/**
 * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a string when asserts enabled.
 */
export declare function assertString(value: any, opt_message?: string, ...var_args: any[]): string;
/**
 * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a function when asserts enabled.
 */
export declare function assertFunction(value: any, opt_message?: string, ...var_args: any[]): Function;
/**
 * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a non-null object.
 */
export declare function assertObject(value: any, opt_message?: string, ...var_args: any[]): object;
/**
 * Checks if the value is an Array if ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a non-null array.
 */
export declare function assertArray(value: any, opt_message?: string, ...var_args: any[]): any[];
/**
 * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, guaranteed to be a boolean when asserts are enabled.
 */
export declare function assertBoolean(value: any, opt_message?: string, ...var_args: any[]): boolean;
/**
 * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value, likely to be a DOM Element when asserts are enabled.
 */
export declare function assertElement(value: any, opt_message?: string, ...var_args: any[]): Element;
/**
 * Checks if the value is an instance of the user-defined type if
 * goog.asserts.ENABLE_ASSERTS is true.
 *
 * The compiler may tighten the type returned by this function.
 *
 * Do not use this to ensure a value is an HTMLElement or a subclass! Cross-
 * document DOM inherits from separate - though identical - browser classes, and
 * such a check will unexpectedly fail. Please use the methods in
 * goog.asserts.dom for these purposes.
 * @param value The value to check.
 * @param type A user-defined constructor.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 */
export declare function assertInstanceof<T = any>(value: any, type: {
    new (): T | null;
}, opt_message?: string, ...var_args: any[]): T | null;
/**
 * Checks whether the value is a finite number, if ENABLE_ASSERTS
 * is true.
 * @param value The value to check.
 * @param opt_message Error message in case of failure.
 * @param var_args The items to substitute into the failure message.
 * @return The value initially passed in.
 */
export declare function assertFinite(value: any, opt_message?: string, ...var_args: any[]): number;
