import { Thenable } from '../promise/thenable.js';
import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
/**
 * Creates a performance timer that runs test functions a number of times to
 * generate timing samples, and provides performance statistics (minimum,
 * maximum, average, and standard deviation).
 */
export declare class PerformanceTimer {
    /**
     * Creates a performance timer that runs test functions a number of times to
     * generate timing samples, and provides performance statistics (minimum,
     * maximum, average, and standard deviation).
     * @param opt_numSamples Number of times to run the test function; defaults to 10.
     * @param opt_timeoutInterval Number of milliseconds after which the test is to be aborted; defaults to 5 seconds (5,000ms).
     */
    constructor(opt_numSamples?: number, opt_timeoutInterval?: number);
    private noStructuralTyping_closure_goog_testing_performancetimer_PerformanceTimer;
    getNumSamples(): number;
    /**
     * Sets the number of times the test function will be run.
     * @param numSamples Number of times to run the test function.
     */
    setNumSamples(numSamples: number): void;
    getTimeoutInterval(): number;
    /**
     * Sets the number of milliseconds after which the test times out.
     * @param timeoutInterval Timeout interval in ms.
     */
    setTimeoutInterval(timeoutInterval: number): void;
    /**
     * Sets whether to ignore the smallest and the largest values when computing
     * stats.
     * @param discard Whether to discard outlier values.
     */
    setDiscardOutliers(discard: boolean): void;
    isDiscardOutliers(): boolean;
    /**
     * Executes the test function the required number of times (or until the
     * test run exceeds the timeout interval, whichever comes first).  Returns
     * an object containing the following:
     * <pre>
     * {
     * 'average': average execution time (ms)
     * 'count': number of executions (may be fewer than expected due to timeout)
     * 'maximum': longest execution time (ms)
     * 'minimum': shortest execution time (ms)
     * 'standardDeviation': sample standard deviation (ms)
     * 'total': total execution time (ms)
     * }
     * </pre>
     * @param testFn Test function whose performance is to be measured.
     * @return Object containing performance stats.
     */
    run(testFn: Function | null): object;
    /**
     * Executes the test function of the specified task as described in
     * `run`. In addition, if specified, the set up and tear down functions of
     * the task are invoked before and after each invocation of the test function.
     * @param task A task describing the test function to invoke.
     * @return Object containing performance stats.
     */
    runTask(task: PerformanceTimer.Task | null): object;
    /**
     * Executes the test function of the specified task asynchronously. The test
     * function may return a Thenable to allow for asynchronous execution. In
     * addition, if specified, the setUp and tearDown functions of the task are
     * invoked before and after each invocation of the test function. Note,
     * setUp/tearDown too may return Thenables for asynchronous execution.
     * @param task A task describing the test function to invoke.
     * @return The deferred result, eventually an object containing performance stats.
     */
    runAsyncTask(task: PerformanceTimer.Task | null): Deferred;
    /**
     * Return the median of the samples.
     */
    static median(samples: number[]): number;
    /**
     * Creates a performance timer results object by analyzing a given array of
     * sample timings.
     * @param samples The samples to analyze.
     * @return Object containing performance stats.
     */
    static createResults(samples: number[]): object;
}
export declare namespace PerformanceTimer {
    /**
     * A test function whose performance should be measured or a setUp/tearDown
     * function. It may optionally return a Thenable (e.g. a promise) to
     * for asynchronous execution using the runAsyncTask method.
     */
    type TestFunction = () => (Thenable | undefined);
    /**
     * A task for the performance timer to measure. Callers can specify optional
     * setUp and tearDown methods to control state before and after each run of the
     * test function.
     */
    class Task {
        /**
         * A task for the performance timer to measure. Callers can specify optional
         * setUp and tearDown methods to control state before and after each run of the
         * test function.
         * @param test Test function whose performance is to be measured.
         */
        constructor(test: PerformanceTimer.TestFunction | null);
        private noStructuralTyping_closure_goog_testing_performancetimer_Task;
        getTest(): PerformanceTimer.TestFunction | null;
        /**
         * Specifies a set up function to be invoked before each invocation of the test
         * function.
         * @param setUp The set up function.
         * @return This task.
         */
        withSetUp(setUp: PerformanceTimer.TestFunction | null): PerformanceTimer.Task;
        getSetUp(): PerformanceTimer.TestFunction | null;
        /**
         * Specifies a tear down function to be invoked after each invocation of the
         * test function.
         * @param tearDown The tear down function.
         * @return This task.
         */
        withTearDown(tearDown: PerformanceTimer.TestFunction | null): PerformanceTimer.Task;
        getTearDown(): PerformanceTimer.TestFunction | null;
    }
}
