import { EventTarget } from '../events/eventtarget.js';
import { TestCase } from './testcase.js';
/**
 * Constructs a test case that supports tests with continuations. Test functions
 * may issue "wait" commands that suspend the test temporarily and continue once
 * the wait condition is met.
 */
export declare class ContinuationTestCase extends TestCase {
    /**
     * Constructs a test case that supports tests with continuations. Test functions
     * may issue "wait" commands that suspend the test temporarily and continue once
     * the wait condition is met.
     * @param opt_name Optional name for the test case.
     */
    constructor(opt_name?: string);
    private noStructuralTyping_closure_goog_testing_continuationtestcase_ContinuationTestCase;
    /**
     * The default maximum time to wait for a single test step in milliseconds.
     */
    static MAX_TIMEOUT: number;
    runTests(): void;
    finalize(): void;
    cycleTests(): void;
    /**
     * Creates a new test step that will run after a user-specified
     * timeout.  No guarantee is made on the execution order of the
     * continuation, except for those provided by each browser's
     * window.setTimeout. In particular, if two continuations are
     * registered at the same time with very small delta for their
     * durations, this class can not guarantee that the continuation with
     * the smaller duration will be executed first.
     * @param continuation The test function to invoke after the timeout.
     * @param opt_duration The length of the timeout in milliseconds.
     */
    waitForTimeout(continuation: () => any, opt_duration?: number): void;
    /**
     * Creates a new test step that will run after an event has fired. If the event
     * does not fire within a reasonable timeout, the test will fail.
     * @param eventTarget The target that will fire the event.
     * @param eventType The type of event to listen for.
     * @param continuation The test function to invoke after the event fires.
     */
    waitForEvent(eventTarget: EventTarget | EventTarget | null, eventType: string, continuation: () => any): void;
    /**
     * Creates a new test step which will run once a condition becomes true. The
     * condition will be polled at a user-specified interval until it becomes true,
     * or until a maximum timeout is reached.
     * @param condition The condition to poll.
     * @param continuation The test code to evaluate once the condition becomes true.
     * @param opt_interval The polling interval in milliseconds.
     * @param opt_maxTimeout The maximum amount of time to wait for the condition in milliseconds (defaults to 1000).
     */
    waitForCondition(condition: Function | null, continuation: () => any, opt_interval?: number, opt_maxTimeout?: number): void;
}
export declare namespace ContinuationTestCase {
    /**
     * Creates a continuation test case, which consists of multiple test steps that
     * occur in several phases.
     *
     * The steps are distributed between setUp, test, and tearDown phases. During
     * the execution of each step, 0 or more steps may be added to the current
     * phase. Once all steps in a phase have completed, the next phase will be
     * executed.
     *
     * If any errors occur (such as an assertion failure), the setUp and Test phases
     * will be cancelled immediately. The tearDown phase will always start, but may
     * be cancelled as well if it raises an error.
     */
    class ContinuationTest extends TestCase.Test {
        /**
         * Creates a continuation test case, which consists of multiple test steps that
         * occur in several phases.
         *
         * The steps are distributed between setUp, test, and tearDown phases. During
         * the execution of each step, 0 or more steps may be added to the current
         * phase. Once all steps in a phase have completed, the next phase will be
         * executed.
         *
         * If any errors occur (such as an assertion failure), the setUp and Test phases
         * will be cancelled immediately. The tearDown phase will always start, but may
         * be cancelled as well if it raises an error.
         * @param setUp A setUp test method to run before the main test phase.
         * @param test A test method to run.
         * @param tearDown A tearDown test method to run after the test method completes or fails.
         */
        constructor(setUp: TestCase.Test | null, test: TestCase.Test | null, tearDown: TestCase.Test | null);
        private noStructuralTyping_closure_goog_testing_continuationtestcase_ContinuationTest;
        getError(): Error | null;
        /**
         * Sets an error for the test so it can be reported. Only the first error set
         * during a test will be reported. Additional errors that occur in later test
         * phases will be discarded.
         * @param e An error.
         */
        setError(e: Error | null): void;
        getCurrentPhase(): TestCase.Test[] | null;
        /**
         * Adds a new test step to the end of the current phase. The new step will wait
         * for a condition to be met before running, or will fail after a timeout.
         * @param step The test step to add.
         */
        addStep(step: ContinuationTestCase.Step): void;
        /**
         * Cancels all remaining steps in the current phase. Called after an error in
         * any phase occurs.
         */
        cancelCurrentPhase(): void;
        /**
         * Skips the rest of the setUp and test phases, but leaves the tearDown phase to
         * clean up.
         */
        cancelTestPhase(): void;
    }
    /**
     * Constructs a single step in a larger continuation test. Each step is similar
     * to a typical TestCase test, except it may wait for an event or timeout to
     * occur before running the test function.
     */
    class Step extends TestCase.Test {
        /**
         * Constructs a single step in a larger continuation test. Each step is similar
         * to a typical TestCase test, except it may wait for an event or timeout to
         * occur before running the test function.
         * @param name The test name.
         * @param ref The test function to run.
         * @param opt_scope The object context to run the test in.
         */
        constructor(name: string, ref: () => any, opt_scope?: object | null);
        private noStructuralTyping_closure_goog_testing_continuationtestcase_Step;
        /**
         * Starts a timeout for this step. Each step may have only one timeout active at
         * a time.
         * @param func The function to call after the timeout.
         * @param duration The number of milliseconds to wait before invoking the function.
         */
        setTimeout(func: Function | null, duration: number): void;
        /**
         * Clears the current timeout if it is active.
         */
        clearTimeout(): void;
    }
}
