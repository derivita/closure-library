import * as dom from '../dom/dom.js';
import { TestCase } from './testcase.js';
import { Component } from '../ui/component.js';
/**
 * A component for running multiple tests within the browser.
 */
export declare class MultiTestRunner extends Component {
    /**
     * A component for running multiple tests within the browser.
     * @param opt_domHelper A DOM helper.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_testing_multitestrunner_MultiTestRunner;
    /**
     * Default maximimum amount of time to spend at each stage of the test.
     */
    static DEFAULT_TIMEOUT_MS: number;
    /**
     * Messages corresponding to the numeric states.
     */
    static STATES: string[] | null;
    /**
     * Event type dispatched when tests are completed.
     */
    static TESTS_FINISHED: string;
    /**
     * Sets the name for the test suite.
     * @param name The suite's name.
     * @return Instance for chaining.
     */
    setName(name: string): MultiTestRunner;
    /**
     * Returns the name for the test suite.
     * @return The name for the test suite.
     */
    getName(): string;
    /**
     * Sets the basepath that tests added using addTests are resolved with.
     * @param path The relative basepath.
     * @return Instance for chaining.
     */
    setBasePath(path: string): MultiTestRunner;
    /**
     * Returns the basepath that tests added using addTests are resolved with.
     * @return The basepath that tests added using addTests are resolved with.
     */
    getBasePath(): string;
    /**
     * Sets whether the report should contain verbose information for tests that
     * pass.
     * @param verbose Whether report should be verbose.
     * @return Instance for chaining.
     */
    setVerbosePasses(verbose: boolean): MultiTestRunner;
    /**
     * Returns whether the report should contain verbose information for tests that
     * pass.
     * @return Whether the report should contain verbose information for tests that pass.
     */
    getVerbosePasses(): boolean;
    /**
     * Sets whether the report should contain passing tests at all, makes
     * setVerbosePasses obsolete.
     * @param hide Whether report should not contain passing tests.
     * @return Instance for chaining.
     */
    setHidePasses(hide: boolean): MultiTestRunner;
    /**
     * Returns whether the report should contain passing tests at all, makes
     * setVerbosePasses obsolete.
     * @return Whether the report should contain passing tests at all, makes setVerbosePasses obsolete.
     */
    getHidePasses(): boolean;
    /**
     * Sets the bucket sizes for the histograms.
     * @param f Bucket size for num files loaded histogram.
     * @param t Bucket size for run time histogram.
     * @return Instance for chaining.
     */
    setStatsBucketSizes(f: number, t: number): MultiTestRunner;
    /**
     * Sets the number of milliseconds to wait for the page to load, initialize and
     * run the tests.
     * @param timeout Time in milliseconds.
     * @return Instance for chaining.
     */
    setTimeout(timeout: number): MultiTestRunner;
    /**
     * Returns the number of milliseconds to wait for the page to load, initialize
     * and run the tests.
     * @return The number of milliseconds to wait for the page to load, initialize and run the tests.
     */
    getTimeout(): number;
    /**
     * Sets the number of tests that can be run at the same time. This only improves
     * performance due to the amount of time spent loading the tests.
     * @param size The number of tests to run at a time.
     * @return Instance for chaining.
     */
    setPoolSize(size: number): MultiTestRunner;
    /**
     * Returns the number of tests that can be run at the same time. This only
     * improves performance due to the amount of time spent loading the tests.
     * @return The number of tests that can be run at the same time. This only improves performance due to the amount of time spent loading the tests.
     */
    getPoolSize(): number;
    /**
     * Sets a filter function. Only test paths that match the filter function
     * will be executed.
     * @param filterFn Filters test paths.
     * @return Instance for chaining.
     */
    setFilterFunction(filterFn: () => boolean): MultiTestRunner;
    /**
     * Returns a filter function. Only test paths that match the filter function
     * will be executed.
     * @return A filter function. Only test paths that match the filter function will be executed.
     */
    getFilterFunction(): () => boolean;
    /**
     * Adds an array of tests to the tests that the test runner should execute.
     * @param tests Adds tests to the test runner.
     * @return Instance for chaining.
     */
    addTests(tests: string[] | null): MultiTestRunner;
    /**
     * Returns the list of all tests added to the runner.
     * @return The list of all tests added to the runner.
     */
    getAllTests(): string[] | null;
    /**
     * Returns the list of tests that will be run when start() is called.
     * @return The list of tests that will be run when start() is called.
     */
    getTestsToRun(): string[];
    /**
     * Returns a list of tests from runner that have been marked as failed.
     * @return A list of tests from runner that have been marked as failed.
     */
    getTestsThatFailed(): string[];
    /**
     * Returns a list of reports for tests that have finished since last "start".
     * @return A list of tests reports.
     */
    getFailureReports(): string[];
    /**
     * Returns list of each frame's test results.
     */
    getAllTestResults(): {
        [key: string]: TestCase.IResult[];
    }[];
    createDom(): void;
    disposeInternal(): void;
    /**
     * Starts executing the tests.
     */
    start(): void;
    /**
     * Logs a message to the log window.
     * @param msg A message to log.
     */
    log(msg: string): void;
    /**
     * Processes a result returned from a TestFrame.  If there are tests remaining
     * it will trigger the next one to be run, otherwise if there are no tests and
     * all results have been received then it will call finish.
     * @param frame The frame that just finished.
     */
    processResult(frame: MultiTestRunner.TestFrame | null): void;
}
export declare namespace MultiTestRunner {
    type StatsType_ = {
        'testFile': string;
        'success': boolean | null;
        'runTime': number;
        'totalTime': number;
        'numFilesLoaded': number;
    };
    /**
     * Class used to manage the interaction with a single iframe.
     */
    class TestFrame extends Component {
        /**
         * Class used to manage the interaction with a single iframe.
         * @param basePath The base path for tests.
         * @param timeoutMs The time to wait for the test to load and run.
         * @param verbosePasses Whether to show results for passes.
         * @param opt_domHelper Optional dom helper.
         */
        constructor(basePath: string, timeoutMs: number, verbosePasses: boolean, opt_domHelper?: dom.DomHelper | null);
        private noStructuralTyping_closure_goog_testing_multitestrunner_TestFrame;
        disposeInternal(): void;
        /**
         * Runs a test file in this test frame.
         * @param testFile The test to run.
         */
        runTest(testFile: string): void;
        getTestFile(): string;
        getStats(): MultiTestRunner.StatsType_;
        getReport(): string;
        getTestResults(): {
            [key: string]: TestCase.IResult[];
        };
        isSuccess(): boolean | null;
    }
}
