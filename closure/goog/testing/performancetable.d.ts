import { PerformanceTimer } from './performancetimer.js';
/**
 * A UI widget that runs performance tests and displays the results.
 */
export declare class PerformanceTable {
    /**
     * A UI widget that runs performance tests and displays the results.
     * @param root The element where the table should be attached.
     * @param opt_timer A timer to use for executing functions and profiling them.
     * @param opt_precision Number of digits of precision to include in results.  Defaults to 0.
     * @param opt_numSamples The number of samples to take. Defaults to 5.
     */
    constructor(root: Element | null, opt_timer?: PerformanceTimer | null, opt_precision?: number, opt_numSamples?: number);
    private noStructuralTyping_closure_goog_testing_performancetable_PerformanceTable;
    getTimer(): PerformanceTimer | null;
    /**
     * Run the given function with the performance timer, and show the results.
     * @param fn The function to run.
     * @param opt_desc A description to associate with this run.
     */
    run(fn: Function | null, opt_desc?: string): void;
    /**
     * Run the given task with the performance timer, and show the results.
     * @param task The performance timer task to run.
     * @param opt_desc A description to associate with this run.
     */
    runTask(task: PerformanceTimer.Task | null, opt_desc?: string): void;
    /**
     * Record a performance timer results object to the performance table. See
     * `PerformanceTimer` for details of the format of this
     * object.
     * @param results The performance timer results object.
     * @param opt_desc A description to associate with these results.
     */
    recordResults(results: object | null, opt_desc?: string): void;
    /**
     * Report an error in the table.
     * @param reason The reason for the error.
     */
    reportError(reason: any): void;
}
