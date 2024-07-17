import { TestCase } from './testcase.js';
/**
 * A test case that is capable of running tests that contain asynchronous logic.
 */
export declare class AsyncTestCase extends TestCase {
    /**
     * A test case that is capable of running tests that contain asynchronous logic.
     * @param opt_name A descriptive name for the test case.
     */
    constructor(opt_name?: string);
    private noStructuralTyping_closure_goog_testing_asynctestcase_AsyncTestCase;
    /**
     * How long to wait for a single step of a test to complete in milliseconds.
     * A step starts when a call to waitForAsync() is made.
     */
    stepTimeout: number;
    /**
     * How long to wait after a failed test before moving onto the next one.
     * The purpose of this is to allow any pending async callbacks from the failing
     * test to finish up and not cause the next test to fail.
     */
    timeToSleepAfterFailure: number;
    /**
     * The currently active test.
     */
    protected activeTest: TestCase.Test | undefined | null;
    /**
     * The current step name.
     * @return Step name.
     */
    protected getCurrentStepName(): string;
    /**
     * Preferred way of creating an AsyncTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param opt_name A descriptive name for the test case.
     * @return The created AsyncTestCase.
     */
    static createAndInstall(opt_name?: string): AsyncTestCase;
    /**
     * Informs the testcase not to continue to the next step in the test cycle
     * until continueTesting is called.
     * @param opt_name A description of what we are waiting for.
     */
    waitForAsync(opt_name?: string): void;
    /**
     * Continue with the next step in the test cycle.
     */
    continueTesting(): void;
    /**
     * Informs the testcase not to continue to the next step in the test cycle
     * until signal is called the specified number of times. Within a test, this
     * function behaves additively if called multiple times; the number of signals
     * to wait for will be the sum of all expected number of signals this function
     * was called with.
     * @param times The number of signals to receive before continuing testing.
     * @param opt_name A description of what we are waiting for.
     */
    waitForSignals(times: number, opt_name?: string): void;
    /**
     * Signals once to continue with the test. If this is the last signal that the
     * test was waiting on, call continueTesting.
     */
    signal(): void;
    /**
     * Handles an exception thrown by a test.
     * @param opt_e The exception object associated with the failure or a string.
     */
    doAsyncError(opt_e?: any): void;
    /**
     * Sets up the test page and then waits until the test case has been marked
     * as ready before executing the tests.
     */
    runTests(): void;
    /**
     * Starts the tests.
     */
    cycleTests(): void;
    /**
     * Finalizes the test case, called when the tests have finished executing.
     */
    finalize(): void;
    /**
     * Enables verbose logging of what is happening inside of the AsyncTestCase.
     */
    enableDebugLogging(): void;
}
export declare namespace AsyncTestCase {
    /**
     * Represents result of top stack function call.
     */
    type TopStackFuncResult_ = {
        'controlBreakingExceptionThrown': boolean;
        'message': string;
    };
    /**
     * An exception class used solely for control flow.
     */
    class ControlBreakingException extends Error {
        /**
         * An exception class used solely for control flow.
         * @param opt_message Error message.
         */
        constructor(opt_message?: string);
        private noStructuralTyping_closure_goog_testing_asynctestcase_ControlBreakingException;
        /**
         * The exception message.
         */
        message: string;
        /**
         * Return value for .toString().
         */
        static TO_STRING: string;
        /**
         * Marks this object as a ControlBreakingException
         */
        isControlBreakingException: boolean;
        toString(): string;
    }
}
