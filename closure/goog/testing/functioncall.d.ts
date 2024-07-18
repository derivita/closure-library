/**
 * Struct for a single function call.
 */
declare class FunctionCall {
    /**
     * Struct for a single function call.
     * @param func The called function.
     * @param thisContext `this` context of called function.
     * @param args Arguments of the called function.
     * @param ret Return value of the function or undefined in case of error.
     * @param error The error thrown by the function or null if none.
     */
    constructor(func: Function, thisContext: object, args: IArguments, ret: any, error: any);
    private noStructuralTyping_closure_goog_testing_functioncall_FunctionCall;
    getFunction(): Function;
    getThis(): object;
    getArguments(): any[];
    /**
     * Returns the nth argument of the called function.
     * @param index 0-based index of the argument.
     * @return The argument value or undefined if there is no such argument.
     */
    getArgument(index: number): any;
    getReturnValue(): any;
    getError(): any;
}
export { FunctionCall };
