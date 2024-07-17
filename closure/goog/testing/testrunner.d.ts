import { TestCase } from './testcase.js';
/**
 * Construct a test runner.
 *
 * NOTE(user): This is currently pretty weird, I'm essentially trying to
 * create a wrapper that the Selenium test can hook into to query the state of
 * the running test case, while making TestCase general.
 */
export declare class TestRunner {
    /**
     * Construct a test runner.
     *
     * NOTE(user): This is currently pretty weird, I'm essentially trying to
     * create a wrapper that the Selenium test can hook into to query the state of
     * the running test case, while making TestCase general.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_testrunner_TestRunner;
    /**
     * Errors that occurred in the window.
     */
    errors: string[];
    /**
     * Reference to the active test case.
     */
    testCase: TestCase | null;
    /**
     * Whether the test runner has been initialized yet.
     */
    initialized: boolean;
    /**
     * The uuid is embedded in the URL search. This function allows us to mock
     * the search in the test.
     */
    getSearchString(): string;
    /**
     * Returns the unique id for this test page.
     */
    getUniqueId(): string;
    /**
     * Clears the unique id for this page. The value will hint the reason.
     */
    clearUniqueId(): void;
    /**
     * Initializes the test runner.
     * @param testCase The test case to initialize with.
     */
    initialize(testCase: TestCase | null): void;
    /**
     * By default, the test runner is strict, and fails if it runs an empty
     * test case.
     * @param strict Whether the test runner should fail on an empty test case.
     */
    setStrict(strict: boolean): void;
    isStrict(): boolean;
    /**
     * Returns true if the test runner is initialized.
     * Used by Selenium Hooks.
     * @return Whether the test runner is active.
     */
    isInitialized(): boolean;
    /**
     * Returns false if the test runner has not finished successfully.
     * Used by Selenium Hooks.
     * @return Whether the test runner is not active.
     */
    isFinished(): boolean;
    /**
     * Returns true if the test runner is finished.
     * @return True if the test runner started and subsequently completed.
     */
    isComplete(): boolean;
    /**
     * Returns true if the test case didn't fail.
     * Used by Selenium Hooks.
     * @return Whether the current test returned successfully.
     */
    isSuccess(): boolean;
    /**
     * Returns true if the test case runner has errors that were caught outside of
     * the test case.
     * @return Whether there were JS errors.
     */
    hasErrors(): boolean;
    /**
     * Logs an error that occurred.  Used in the case of environment setting up
     * an onerror handler.
     * @param msg Error message.
     */
    logError(msg: string): void;
    /**
     * Log failure in current running test.
     * @param ex Exception.
     */
    logTestFailure(ex: Error | null): void;
    /**
     * Sets a function to use as a filter for errors.
     * @param fn Filter function.
     */
    setErrorFilter(fn: () => any): void;
    /**
     * Returns a report of the test case that ran.
     * Used by Selenium Hooks.
     * @param opt_verbose If true results will include data about all tests, not just what failed.
     * @return A report summary of the test.
     */
    getReport(opt_verbose?: boolean): string;
    /**
     * Returns the amount of time it took for the test to run.
     * Used by Selenium Hooks.
     * @return The run time, in milliseconds.
     */
    getRunTime(): number;
    /**
     * Returns the number of script files that were loaded in order to run the test.
     * @return The number of script files.
     */
    getNumFilesLoaded(): number;
    /**
     * Executes a test case and prints the results to the window.
     */
    execute(): void;
    static TEST_LOG_ID: string;
    /**
     * Writes a nicely formatted log out to the document.
     * @param log The string to write.
     */
    writeLog(log: string): void;
    /**
     * Logs a message to the current test case.
     * @param s The text to output to the log.
     */
    log(s: string): void;
    getTestResults(): {
        [key: string]: TestCase.IResult[];
    } | null;
    /**
     * Returns the test results as json.
     * This is called by the testing infrastructure through G_testrunner.
     * @return Tests results object.
     */
    getTestResultsAsJson(): string | null;
}
