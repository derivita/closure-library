import { FunctionCall } from './functioncall.js';
import { Promise as GoogPromise } from '../promise/promise.js';
/**
 * A function that represents the return type of recordFunction.
 */
declare function recordedFunctionType(...var_args: any[]): any;
declare namespace recordedFunctionType {
    var getCallCount: number;
    /**
     * Asserts that the function was called a certain number of times.
     * @param a The expected number of calls (1 arg) or debug message (2 args).
     * @param opt_b The expected number of calls (2 args only).
     */
    var assertCallCount: (a: number | string, opt_b?: number) => void;
    var getCalls: FunctionCall[];
    var getLastCall: FunctionCall | null;
    /**
     * Returns and removes the last call of the recorded function.
     * @return Last call of the recorded function or null if it hasn't been called.
     */
    var popLastCall: FunctionCall | null;
    /**
     * Returns a GoogPromise that resolves when the recorded function has equal
     * to or greater than the number of calls.
     */
    var waitForCalls: GoogPromise<undefined>;
    /**
     * Resets the recorded function and removes all calls.
     */
    var reset: undefined;
}
/**
 * Wraps the function into another one which calls the inner function and
 * records its calls. The recorded function will have 3 static methods:
 * `getCallCount`, `getCalls` and `getLastCall` but won't
 * inherit the original function's prototype and static fields.
 * @param opt_f The function to wrap and record. Defaults to functions.UNDEFINED.
 * @return The wrapped function.
 */
declare function recordFunction(opt_f?: Function): recordFunction.Type;
declare namespace recordFunction {
    type Type = typeof recordedFunctionType;
}
export { recordFunction };
