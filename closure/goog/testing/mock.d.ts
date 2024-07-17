import { Resolver } from '../promise/resolver.js';
import { MockInterface } from './mockinterface.js';
/**
 * This is a class that represents an expectation.
 */
export declare class MockExpectation {
    /**
     * This is a class that represents an expectation.
     * @param name The name of the method for this expectation.
     */
    constructor(name: string);
    private noStructuralTyping_closure_goog_testing_mock_MockExpectation;
    /**
     * The name of the method that is expected to be called.
     */
    name: string;
    /**
     * An array of error messages for expectations not met.
     */
    errorMessages: string[] | null;
    /**
     * The maximum number of error messages to record.
     */
    static MAX_RECORDED_ERRORS: number;
    /**
     * The minimum number of times this method should be called.
     */
    minCalls: number;
    /**
     * The maximum number of times this method should be called.
     */
    maxCalls: number;
    /**
     * The value that this method should return.
     */
    returnValue: any;
    /**
     * The value that will be thrown when the method is called
     */
    exceptionToThrow: any;
    /**
     * The arguments that are expected to be passed to this function
     */
    argumentList: any[] | null;
    /**
     * The number of times this method is called by real code.
     */
    actualCalls: number;
    /**
     * The number of times this method is called during the verification phase.
     */
    verificationCalls: number;
    /**
     * The function which will be executed when this method is called.
     * Method arguments will be passed to this function, and return value
     * of this function will be returned by the method.
     */
    toDo: Function | null;
    /**
     * Allow expectation failures to include messages.
     * @param message The failure message.
     */
    addErrorMessage(message: string): void;
    /**
     * Get the error messages seen so far.
     * @return Error messages separated by \n.
     */
    getErrorMessage(): string;
    /**
     * Get how many error messages have been seen so far.
     * @return Count of error messages.
     */
    getErrorMessageCount(): number;
}
/**
 * The base class for a mock object.
 */
export declare class Mock implements MockInterface {
    /**
     * The base class for a mock object.
     * @param objectToMock The object that should be mocked, or the constructor of an object to mock.
     * @param opt_mockStaticMethods An optional argument denoting that a mock should be constructed from the static functions of a class.
     * @param opt_createProxy An optional argument denoting that a proxy for the target mock should be created.
     */
    constructor(objectToMock: object | Function | null, opt_mockStaticMethods?: boolean, opt_createProxy?: boolean);
    private noStructuralTyping_closure_goog_testing_mock_Mock;
    protected waitingForExpectations: Resolver<undefined> | null;
    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * any order.
     */
    static LOOSE: number;
    /**
     * Option that may be passed when constructing function, method, and
     * constructor mocks. Indicates that the expected calls should be accepted in
     * the recorded order only.
     */
    static STRICT: number;
    /**
     * Asserts that a mock object is in record mode.  This avoids type system errors
     * from mock expectations.
     *
     * Usage:
     *
     * ```
     * const record = goog.require('Mock.record');
     *
     * record(mockObject).someMethod(ignoreArgument).$returns(42);
     * record(mockFunction)(ignoreArgument).$returns(42);
     * ```
     * @param obj A mock in record mode.
     * @return The same object.
     */
    static record(obj: any): any;
    /**
     * A proxy for the mock.  This can be used for dependency injection in lieu of
     * the mock if the test requires a strict instanceof check.
     */
    $proxy: object | null;
    /**
     * Map of argument name to optional argument list verifier function.
     */
    $argumentListVerifiers_: object | null;
    /**
     * The expectation currently being created. All methods that modify the
     * current expectation return the Mock object for easy chaining, so this is
     * where we keep track of the expectation that's currently being modified.
     */
    protected $pendingExpectation: MockExpectation | null;
    /**
     * Registers a verifier function to use when verifying method argument lists.
     * @param methodName The name of the method for which the verifierFn should be used.
     * @param fn Argument list verifier function.  Should take 2 argument arrays as arguments, and return true if they are considered equivalent.
     * @return This mock object.
     */
    $registerArgumentListVerifier(methodName: string, fn: Function | null): Mock;
    /**
     * The function that replaces all methods on the mock object.
     * @param name The name of the method being mocked.
     * @return In record mode, returns the mock object. In replay mode, returns whatever the creator of the mock set as the return value.
     */
    $mockMethod(name: string): any;
    /**
     * Records the currently pending expectation, intended to be overridden by a
     * subclass.
     */
    protected $recordExpectation(): void;
    /**
     * Records an actual method call, intended to be overridden by a
     * subclass. The subclass must find the pending expectation and return the
     * correct value.
     * @param name The name of the method being called.
     * @param args The arguments to the method.
     * @return The return expected by the mock.
     */
    protected $recordCall(name: string, args: any[] | null): any;
    /**
     * If the expectation expects to throw, this method will throw.
     * @param expectation The expectation.
     */
    $maybeThrow(expectation: MockExpectation | null): void;
    /**
     * If this expectation defines a function to be called,
     * it will be called and its result will be returned.
     * Otherwise, if the expectation expects to throw, it will throw.
     * Otherwise, this method will return defined value.
     * @param expectation The expectation.
     * @param args The arguments to the method.
     * @return The return value expected by the mock.
     */
    $do(expectation: MockExpectation | null, args: any[] | null): any;
    /**
     * Specifies a return value for the currently pending expectation.
     * @param val The return value.
     * @return This mock object.
     */
    $returns(val: any): Mock;
    /**
     * Specifies a value for the currently pending expectation to throw.
     * @param val The value to throw.
     * @return This mock object.
     */
    $throws(val: any): Mock;
    /**
     * Specifies a function to call for currently pending expectation.
     * Note, that using this method overrides declarations made
     * using $returns() and $throws() methods.
     * @param func The function to call.
     * @return This mock object.
     */
    $does(func: Function | null): Mock;
    /**
     * Allows the expectation to be called 0 or 1 times.
     * @return This mock object.
     */
    $atMostOnce(): Mock;
    /**
     * Allows the expectation to be called any number of times, as long as it's
     * called once.
     * @return This mock object.
     */
    $atLeastOnce(): Mock;
    /**
     * Allows the expectation to be called exactly once.
     * @return This mock object.
     */
    $once(): Mock;
    /**
     * Disallows the expectation from being called.
     * @return This mock object.
     */
    $never(): Mock;
    /**
     * Allows the expectation to be called any number of times.
     * @return This mock object.
     */
    $anyTimes(): Mock;
    /**
     * Specifies the number of times the expectation should be called.
     * @param times The number of times this method will be called.
     * @return This mock object.
     */
    $times(times: number): Mock;
    /**
     * Switches from recording to replay mode.
     */
    $replay(): any;
    /**
     * Resets the state of this mock object. This clears all pending expectations
     * without verifying, and puts the mock in recording mode.
     */
    $reset(): any;
    /**
     * Throws an exception and records that an exception was thrown.
     * @param comment A short comment about the exception.
     * @param opt_message A longer message about the exception.
     */
    protected $throwException(comment: string, opt_message?: string | null): void;
    /**
     * Throws an exception and records that an exception was thrown.
     * @param ex Exception.
     * @param rethrow True if this exception has already been thrown.  If so, we should not report it to TestCase (since it was already reported at the original throw). This is necessary to avoid logging it twice, because assertThrowsJsUnitException only removes one record.
     */
    protected $recordAndThrow(ex: object | null, rethrow?: boolean): void;
    $waitAndVerify(): any;
    /**
     * Verify that all of the expectations were met. Should be overridden by
     * subclasses.
     */
    $verify(): any;
    /**
     * Verifies that a method call matches an expectation.
     * @param expectation The expectation to check.
     * @param name The name of the called method.
     * @param args The arguments passed to the mock.
     * @return Whether the call matches the expectation.
     */
    $verifyCall(expectation: MockExpectation | null, name: string, args: any[] | null): boolean;
    /**
     * Render the provided argument array to a string to help
     * clients with debugging tests.
     * @param args The arguments passed to the mock.
     * @return Human-readable string.
     */
    $argumentsAsString(args: any[] | null): string;
    /**
     * Throw an exception based on an incorrect method call.
     * @param name Name of method called.
     * @param args Arguments passed to the mock.
     * @param opt_expectation Expected next call, if any.
     */
    $throwCallException(name: string, args: any[] | null, opt_expectation?: MockExpectation | null): void;
}
