export declare var LOGGING_ENABLED: boolean;
export declare var FORCE_SLOPPY_STACKS: boolean;
export declare var CHECK_FOR_THROWN_EVENT: boolean;
/**
 * Catches onerror events fired by windows and similar objects.
 * @param logFunc The function to call with the error information.
 * @param opt_cancel Whether to stop the error from reaching the browser.
 * @param opt_target Object that fires onerror events.
 */
export declare function catchErrors(logFunc: () => any, opt_cancel?: boolean, opt_target?: object | null): void;
/**
 * Creates a string representing an object and all its properties.
 * @param obj Object to expose.
 * @param opt_showFn Show the functions as well as the properties, default is false.
 * @return The string representation of `obj`.
 */
export declare function expose(obj: object | null | undefined | null, opt_showFn?: boolean): string;
/**
 * Creates a string representing a given primitive or object, and for an
 * object, all its properties and nested objects. NOTE: The output will include
 * Uids on all objects that were exposed. Any added Uids will be removed before
 * returning.
 * @param obj Object to expose.
 * @param opt_showFn Also show properties that are functions (by default, functions are omitted).
 * @return A string representation of `obj`.
 */
export declare function deepExpose(obj: any, opt_showFn?: boolean): string;
/**
 * Recursively outputs a nested array as a string.
 * @param arr The array.
 * @return String representing nested array.
 */
export declare function exposeArray(arr: any[] | null): string;
/**
 * Normalizes the error/exception object between browsers.
 * @param err Raw error object.
 * @return Representation of err as an Object. It will never return err.
 */
export declare function normalizeErrorObject(err: any): {
    'message': any | undefined;
    'name': any | undefined;
    'lineNumber': any | undefined;
    'fileName': any | undefined;
    'stack': any | undefined;
};
/**
 * Converts an object to an Error using the object's toString if it's not
 * already an Error, adds a stacktrace if there isn't one, and optionally adds
 * an extra message.
 * @param err The original thrown error, object, or string.
 * @param opt_message optional additional message to add to the error.
 * @return If err is an Error, it is enhanced and returned. Otherwise, it is converted to an Error which is enhanced and returned.
 */
export declare function enhanceError(err: any, opt_message?: string): Error;
/**
 * Converts an object to an Error using the object's toString if it's not
 * already an Error, adds a stacktrace if there isn't one, and optionally adds
 * context to the Error, which is reported by the closure error reporter.
 * @param err The original thrown error, object, or string.
 * @param opt_context Key-value context to add to the Error.
 * @return If err is an Error, it is enhanced and returned. Otherwise, it is converted to an Error which is enhanced and returned.
 */
export declare function enhanceErrorWithContext(err: any, opt_context?: {
    [key: string]: string;
}): Error;
/**
 * Gets the current stack trace. Simple and iterative - doesn't worry about
 * catching circular references or getting the args.
 * @param opt_depth Optional maximum depth to trace back to.
 * @return A string with the function names of all functions in the stack, separated by \n.
 */
export declare function getStacktraceSimple(opt_depth?: number): string;
/**
 * Max length of stack to try and output
 */
export declare var MAX_STACK_DEPTH: number;
/**
 * Gets the current stack trace, either starting from the caller or starting
 * from a specified function that's currently on the call stack.
 * @param fn If provided, when collecting the stack trace all frames above the topmost call to this function, including that call, will be left out of the stack trace.
 * @return Stack trace.
 */
export declare function getStacktrace(fn?: Function | null): string;
/**
 * Gets a function name
 * @param fn Function to get name of.
 * @return Function's name.
 */
export declare function getFunctionName(fn: Function | null): string;
/**
 * Makes whitespace visible by replacing it with printable characters.
 * This is useful in finding diffrences between the expected and the actual
 * output strings of a testcase.
 * @param string whose whitespace needs to be made visible.
 * @return string whose whitespace is made visible.
 */
export declare function makeWhitespaceVisible(string: string): string;
/**
 * Returns the type of a value. If a constructor is passed, and a suitable
 * string cannot be found, 'unknown type name' will be returned.
 *
 * <p>Forked rather than moved from {@link goog.asserts.getType_}
 * to avoid adding a dependency to goog.asserts.
 * @param value A constructor, object, or primitive.
 * @return The best display name for the value, or 'unknown type name'.
 */
export declare function runtimeType(value: any): string;
/**
 * Freezes the given object, but only in debug mode (and in browsers that
 * support it).  Note that this is a shallow freeze, so for deeply nested
 * objects it must be called at every level to ensure deep immutability.
 */
export declare function freeze<T = any>(arg: T | null): T | null;
