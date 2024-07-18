import { DebugError as Error } from '../../debug/error.js';
import * as timeoutmode from './timeoutmode.js';
import { VerificationMode } from './verificationmode.js';
/**
 * Mocks a given object or class.
 * @param objectOrClass An instance or a constructor of a class to be mocked.
 * @return The mocked object.
 */
export declare function mock(objectOrClass: object): object;
/**
 * Mocks a given function.
 * @param opt_func A function to be mocked.
 * @return The mocked function.
 */
export declare function mockFunction(opt_func?: Function): Function;
/**
 * Mocks a given constructor.
 * @param ctor A constructor function to be mocked.
 * @return The mocked constructor.
 */
export declare function mockConstructor<T = any>(ctor: {
    new (): T | null;
}): {
    new (): T | null;
};
/**
 * Spies on a given object.
 * @param obj The object to be spied on.
 * @return The spy object.
 */
export declare function spy(obj: object): object;
/**
 * Returns an object that can be used to verify calls to specific methods of a
 * given mock.
 * @param obj The mocked object.
 * @param opt_verificationMode The mode under which to verify invocations.
 * @return The verifier. Return type {?} to avoid compilation errors.
 */
export declare function verify(obj: object, opt_verificationMode?: VerificationMode): any;
/**
 * Returns an object that can be used to wait for calls to specific methods of a
 * given mock.
 * @param obj The mocked object.
 * @param verificationOrTimeoutModes The mode under which to verify invocations.
 * @return The waiter. Return type {?} to avoid compilation errors.
 */
export declare function waitAndVerify(obj: object, ...verificationOrTimeoutModes: (VerificationMode | timeoutmode.TimeoutMode)[]): any;
/**
 * Returns a name to identify a function. Named functions return their names,
 * unnamed functions return a string of the form '#anonymous{ID}' where ID is
 * a unique identifier for each anonymous function.
 * @param func The function.
 * @return The function name.
 */
export declare function getFunctionName_(func: Function): string;
/**
 * Returns a nicely formatted, readable representation of a method call.
 * @param methodName The name of the method.
 * @param opt_args The method arguments.
 * @return The string representation of the method call.
 */
export declare function formatMethodCall_(methodName: string, opt_args?: any[] | null): string;
/**
 * A unique Id generator that does not modify the object.
 * @param obj The object whose unique ID we want to generate.
 * @return an unique id for the object.
 */
export declare function getUid(obj: object): number;
/**
 * This is just another implementation of debug.deepExpose with a more
 * compact format.
 * @param obj The object whose string representation will be returned.
 * @param opt_id Whether to include the id of objects or not. Defaults to true.
 * @return The string representation of the object.
 */
export declare function formatValue_(obj: any, opt_id?: boolean): string;
/**
 * Error thrown when verification failed.
 */
export declare class VerificationError extends Error {
    /**
     * Error thrown when verification failed.
     * @param recordedCalls The recorded calls that didn't match the expectation.
     * @param methodName The expected method call.
     * @param verificationMode The expected verification mode which failed verification.
     * @param args The expected arguments.
     */
    constructor(recordedCalls: MethodBinding_[] | null, methodName: string, verificationMode: VerificationMode, args: any[]);
    private noStructuralTyping_closure_goog_labs_mock_mock_VerificationError;
}
/**
 * Error thrown when timeout triggers before specified action.
 */
export declare class TimeoutError extends Error {
    /**
     * Error thrown when timeout triggers before specified action.
     * @param recordedCalls The recorded calls that didn't match the expectation.
     * @param methodName The expected method call.
     * @param verificationMode The expected verification mode which failed verification.
     * @param args The expected arguments.
     */
    constructor(recordedCalls: MethodBinding_[], methodName: string, verificationMode: VerificationMode, args: any[]);
    private noStructuralTyping_closure_goog_labs_mock_mock_TimeoutError;
}
/**
 * A stub binder is an object that helps define the stub by binding
 * method name to the stub method.
 */
export interface StubBinder {
    /**
     * Defines the function to be called for the method name and arguments bound
     * to this `StubBinder`.
     *
     * If `then` or `thenReturn` has been previously called
     * on this `StubBinder` then the given stub `func` will be called
     * only after the stubs passed previously have been called.  Afterwards,
     * if no other calls are made to `then` or `thenReturn` for this
     * `StubBinder` then the given `func` will be used for every further
     * invocation.
     * See #when for complete examples.
     * TODO(vbhasin): Add support for the 'Answer' interface.
     * @param func The function to call.
     * @return Returns itself for chaining.
     */
    then(func: Function): StubBinder;
    /**
     * Defines the constant return value for the stub represented by this
     * `StubBinder`.
     * @param value The value to return.
     * @return Returns itself for chaining.
     */
    thenReturn(value: any): StubBinder;
}
/**
 * A type for a mocked accessor descriptor.
 */
export declare var DescriptorStubBinder: any;
/**
 * Facilitates (and is the first step in) setting up stubs. Obtains an object
 * on which, the method to be mocked is called to create a stub. Sample usage:
 *
 * var mockObj = mock(objectBeingMocked);
 * when(mockObj).getFoo(3).thenReturn(4);
 *
 * Subsequent calls to `when` take precedence over earlier calls, allowing
 * users to set up default stubs in setUp methods and then override them in
 * individual tests.
 *
 * If a user wants sequential calls to their stub to return different
 * values, they can chain calls to `then` or `thenReturn` as
 * follows:
 *
 * var mockObj = mock(objectBeingMocked);
 * when(mockObj).getFoo(3)
 * .thenReturn(4)
 * .then(function() {
 * throw new Error('exceptional case');
 * });
 * @param mockObject The mocked object.
 * @return The property binder. Return type {?} to avoid compilation errors.
 */
export declare function when(mockObject: object): any;
/**
 * Represents a binding between a method name, args and a stub.
 */
declare class MethodBinding_ {
    /**
     * Represents a binding between a method name, args and a stub.
     * @param methodName The name of the method being stubbed.
     * @param args The arguments passed to the method.
     * @param stub The stub function to be called for the given method.
     */
    constructor(methodName: string | null, args: any[], stub: Function);
    private noStructuralTyping_closure_goog_labs_mock_mock_MethodBinding_;
    getStub(): Function;
    toString(): string;
    getMethodName(): string;
    /**
     * Determines whether the given args match the stored args_. Used to determine
     * which stub to invoke for a method.
     * @param methodName The name of the method being stubbed.
     * @param args An array of arguments.
     * @param isVerification Whether this is a function verification call or not.
     * @return If it matches the stored arguments.
     */
    matches(methodName: string, args: any[], isVerification: boolean): boolean;
}
export {};
