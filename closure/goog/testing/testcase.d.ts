/**
 * A class representing a JsUnit test case. A TestCase is made up of a number
 * of test functions which can be run. Individual test cases can override the
 * following functions to set up their test environment:
 * - runTests - completely override the test's runner
 * - setUpPage - called before any of the test functions are run
 * - tearDownPage - called after all tests are finished
 * - setUp - called before each of the test functions
 * - tearDown - called after each of the test functions
 * - shouldRunTests - called before a test run, all tests are skipped if it
 * returns false. Can be used to disable tests on browsers
 * where they aren't expected to pass.
 * <p>
 * TestCase objects are usually constructed by inspecting the global environment
 * to discover functions that begin with the prefix <code>test</code>.
 * (See {@link #autoDiscoverLifecycle} and {@link #autoDiscoverTests}.)
 * </p>
 *
 * <h2>Testing asychronous code with promises</h2>
 *
 * <p>
 * In the simplest cases, the behavior that the developer wants to test
 * is synchronous, and the test functions exercising the behavior execute
 * synchronously. But TestCase can also be used to exercise asynchronous code
 * through the use of <a
 * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
 * promises</a>. If a test function returns an object that has a
 * <code>then</code> method defined on it, the test framework switches to an
 * asynchronous execution strategy: the next test function will not begin
 * execution until the returned promise is resolved or rejected. Instead of
 * writing test assertions at the top level inside a test function, the test
 * author chains them on the end of the returned promise. For example:
 * </p>
 * <pre>
 * function testPromiseBasedAPI() {
 * return promiseBasedAPI().then(function(value) {
 * // Will run when the promise resolves, and before the next
 * // test function begins execution.
 * assertEquals('foo', value.bar);
 * });
 * }
 * </pre>
 * <p>
 * Synchronous and asynchronous tests can be mixed in the same TestCase.
 * Test functions that return an object with a <code>then</code> method are
 * executed asynchronously, and all other test functions are executed
 * synchronously. While this is convenient for test authors (since it doesn't
 * require any explicit configuration for asynchronous tests), it can lead to
 * confusion if the test author forgets to return the promise from the test
 * function. For example:
 * </p>
 * <pre>
 * function testPromiseBasedAPI() {
 * // This test should never succeed.
 * promiseBasedAPI().then(fail, fail);
 * // Oops! The promise isn't returned to the framework,
 * // so this test actually does succeed.
 * }
 * </pre>
 * <p>
 * Since the test framework knows nothing about the promise created
 * in the test function, it will run the function synchronously, record
 * a success, and proceed immediately to the next test function.
 * </p>
 * <p>
 * Promises returned from test functions can time out. If a returned promise
 * is not resolved or rejected within {@link promiseTimeout} milliseconds,
 * the test framework rejects the promise without a timeout error message.
 * Test cases can configure the value of `promiseTimeout` by setting
 * <pre>
 * TestCase.getActiveTestCase().promiseTimeout = ...
 * </pre>
 * in their `setUpPage` methods.
 * </p>
 */
export declare class TestCase {
    /**
     * A class representing a JsUnit test case. A TestCase is made up of a number
     * of test functions which can be run. Individual test cases can override the
     * following functions to set up their test environment:
     * - runTests - completely override the test's runner
     * - setUpPage - called before any of the test functions are run
     * - tearDownPage - called after all tests are finished
     * - setUp - called before each of the test functions
     * - tearDown - called after each of the test functions
     * - shouldRunTests - called before a test run, all tests are skipped if it
     * returns false. Can be used to disable tests on browsers
     * where they aren't expected to pass.
     * <p>
     * TestCase objects are usually constructed by inspecting the global environment
     * to discover functions that begin with the prefix <code>test</code>.
     * (See {@link #autoDiscoverLifecycle} and {@link #autoDiscoverTests}.)
     * </p>
     *
     * <h2>Testing asychronous code with promises</h2>
     *
     * <p>
     * In the simplest cases, the behavior that the developer wants to test
     * is synchronous, and the test functions exercising the behavior execute
     * synchronously. But TestCase can also be used to exercise asynchronous code
     * through the use of <a
     * href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
     * promises</a>. If a test function returns an object that has a
     * <code>then</code> method defined on it, the test framework switches to an
     * asynchronous execution strategy: the next test function will not begin
     * execution until the returned promise is resolved or rejected. Instead of
     * writing test assertions at the top level inside a test function, the test
     * author chains them on the end of the returned promise. For example:
     * </p>
     * <pre>
     * function testPromiseBasedAPI() {
     * return promiseBasedAPI().then(function(value) {
     * // Will run when the promise resolves, and before the next
     * // test function begins execution.
     * assertEquals('foo', value.bar);
     * });
     * }
     * </pre>
     * <p>
     * Synchronous and asynchronous tests can be mixed in the same TestCase.
     * Test functions that return an object with a <code>then</code> method are
     * executed asynchronously, and all other test functions are executed
     * synchronously. While this is convenient for test authors (since it doesn't
     * require any explicit configuration for asynchronous tests), it can lead to
     * confusion if the test author forgets to return the promise from the test
     * function. For example:
     * </p>
     * <pre>
     * function testPromiseBasedAPI() {
     * // This test should never succeed.
     * promiseBasedAPI().then(fail, fail);
     * // Oops! The promise isn't returned to the framework,
     * // so this test actually does succeed.
     * }
     * </pre>
     * <p>
     * Since the test framework knows nothing about the promise created
     * in the test function, it will run the function synchronously, record
     * a success, and proceed immediately to the next test function.
     * </p>
     * <p>
     * Promises returned from test functions can time out. If a returned promise
     * is not resolved or rejected within {@link promiseTimeout} milliseconds,
     * the test framework rejects the promise without a timeout error message.
     * Test cases can configure the value of `promiseTimeout` by setting
     * <pre>
     * TestCase.getActiveTestCase().promiseTimeout = ...
     * </pre>
     * in their `setUpPage` methods.
     * </p>
     * @param opt_name The name of the test case, defaults to 'Untitled Test Case'.
     */
    constructor(opt_name?: string);
    private noStructuralTyping_closure_goog_testing_testcase_TestCase;
    /**
     * The order to run the auto-discovered tests in.
     */
    order: string;
    /**
     * Object used to encapsulate the test results.
     */
    protected result_: TestCase.Result;
    /**
     * The maximum time in milliseconds a promise returned from a test function
     * may remain pending before the test fails due to timeout.
     */
    promiseTimeout: number;
    endTime_: number | undefined;
    getName(): string;
    /**
     * Returns the current test or null.
     */
    protected getCurrentTest(): TestCase.Test | null;
    /**
     * The maximum amount of time in milliseconds that the test case can take
     * before it is forced to yield and reschedule. This prevents the test runner
     * from blocking the browser and potentially hurting the test harness.
     */
    static maxRunTime: number;
    /**
     * Name of the current test that is running, or null if none is running.
     */
    static currentTestName: string | null;
    /**
     * Avoid a dependency on goog.userAgent and keep our own reference of whether
     * the browser is IE.
     */
    static IS_IE: boolean;
    /**
     * Exception object that was detected before a test runs.
     */
    protected exceptionBeforeTest: any;
    /**
     * Whether the test case has ever tried to execute.
     */
    started: boolean;
    /**
     * Whether the test case is running.
     */
    running: boolean;
    /**
     * Adds a new test to the test case.
     * @param test The test to add.
     */
    add(test: TestCase.Test): void;
    /**
     * Creates and adds a new test.
     *
     * Convenience function to make syntax less awkward when not using automatic
     * test discovery.
     * @param name The test name.
     * @param ref Reference to the test function.
     * @param scope Optional scope that the test function should be called in.
     * @param objChain An array of Objects that may have additional set up/tear down logic for a particular test.
     */
    addNewTest(name: string, ref: () => any, scope?: object, objChain?: object[]): void;
    /**
     * Sets the tests.
     * @param tests A new test array.
     */
    protected setTests(tests: (TestCase.Test | null)[]): void;
    /**
     * Gets the tests.
     * @return The test array.
     */
    getTests(): (TestCase.Test | null)[];
    /**
     * Returns the number of tests contained in the test case.
     * @return The number of tests.
     */
    getCount(): number;
    /**
     * Returns the number of tests actually run in the test case, i.e. subtracting
     * any which are skipped.
     * @return The number of un-ignored tests.
     */
    getActuallyRunCount(): number;
    /**
     * Returns the current test and increments the pointer.
     * @return The current test case.
     */
    next(): TestCase.Test | null;
    /**
     * Resets the test case pointer, so that next returns the first test.
     */
    reset(): void;
    /**
     * Adds a callback function that should be executed when the tests have
     * completed.
     * @param fn The callback function.
     */
    addCompletedCallback(fn: () => any): void;
    /**
     *
     * @param order The sort order for running tests.
     */
    setOrder(order: TestCase.Order | null): void;
    /**
     *
     * @param testsToRun Set of tests to run. Entries in the set may be test names, like "testFoo", or numeric indices. Only tests identified by name or by index will be executed.
     */
    setTestsToRun(testsToRun: {
        [key: string]: boolean;
    } | null): void;
    /**
     * Can be overridden in test classes to indicate whether the tests in a case
     * should be run in that particular situation.  For example, this could be used
     * to stop tests running in a particular browser, where browser support for
     * the class under test was absent.
     * @return Whether any of the tests in the case should be run.
     */
    shouldRunTests(): boolean;
    /**
     * Executes the tests, yielding asynchronously if execution time exceeds
     * {@link maxRunTime}. There is no guarantee that the test case has finished
     * once this method has returned. To be notified when the test case
     * has finished, use {@link #addCompletedCallback} or
     * {@link #runTestsReturningPromise}.
     */
    execute(): void;
    /**
     * Finalizes the test case, called when the tests have finished executing.
     */
    finalize(): void;
    /**
     * Saves a message to the result set.
     * @param message The message to save.
     */
    saveMessage(message: string): void;
    isInsideMultiTestRunner(): boolean;
    shouldLogTestProgress(): boolean;
    /**
     * Logs an object to the console, if available.
     * @param val The value to log. Will be ToString'd.
     */
    log(val: any): void;
    /**
     * Groups the upcoming logs in the same log group
     */
    groupLogsStart(): void;
    /**
     * Closes the group of the upcoming logs
     */
    groupLogsEnd(): void;
    isSuccess(): boolean;
    /**
     * Returns a string detailing the results from the test.
     * @param opt_verbose If true results will include data about all tests, not just what failed.
     * @return The results from the test.
     */
    getReport(opt_verbose?: boolean): string;
    /**
     * Returns the amount of time it took for the test to run.
     * @return The run time, in milliseconds.
     */
    getRunTime(): number;
    /**
     * Returns the number of script files that were loaded in order to run the test.
     * @return The number of script files.
     */
    getNumFilesLoaded(): number;
    /**
     * Returns the test results object: a map from test names to a list of test
     * failures (if any exist).
     * @return Test results object.
     */
    getTestResults(): {
        [key: string]: (TestCase.IResult | null)[];
    };
    /**
     * Executes each of the tests, yielding asynchronously if execution time
     * exceeds {@link #maxRunTime}. There is no guarantee that the test case
     * has finished execution once this method has returned.
     * To be notified when the test case has finished execution, use
     * {@link #addCompletedCallback} or {@link #runTestsReturningPromise}.
     *
     * Overridable by the individual test case.  This allows test cases to defer
     * when the test is actually started.  If overridden, finalize must be
     * called by the test to indicate it has finished.
     */
    runTests(): void;
    /**
     * Configures the TestCase to use native Promises when waiting for methods that
     * return Thenables.
     */
    useNativePromise(): void;
    /**
     * Configures the TestCase to use googPromise when waiting for methods that
     * return Thenables.
     */
    useGoogPromise(): void;
    /**
     * Gets list of objects that potentially contain test cases. For IE 8 and
     * below, this is the global "this" (for properties set directly on the global
     * this or window) and the RuntimeObject (for global variables and functions).
     * For all other browsers, the array simply contains the global this.
     * @param opt_prefix An optional prefix. If specified, only get things under this prefix. Note that the prefix is only honored in IE, since it supports the RuntimeObject: http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx TODO: Remove this option.
     * @return A list of objects that should be inspected.
     */
    getGlobals(opt_prefix?: string): object[];
    /**
     * Gets list of objects that potentially contain test cases. For IE 8 and
     * below, this is the global "this" (for properties set directly on the global
     * this or window) and the RuntimeObject (for global variables and functions).
     * For all other browsers, the array simply contains the global this.
     * @param opt_prefix An optional prefix. If specified, only get things under this prefix. Note that the prefix is only honored in IE, since it supports the RuntimeObject: http://msdn.microsoft.com/en-us/library/ff521039%28VS.85%29.aspx TODO: Remove this option.
     * @return A list of objects that should be inspected.
     */
    static getGlobals(opt_prefix?: string): object[];
    static getActiveTestCase(): TestCase | null;
    /**
     * Gets called before any tests are executed.  Can be overridden to set up the
     * environment for the whole test case.
     */
    setUpPage(): PromiseLike<any> | undefined;
    /**
     * Gets called after all tests have been executed.  Can be overridden to tear
     * down the entire test case.
     */
    tearDownPage(): void;
    /**
     * Gets called before every TestCase.Test is been executed. Can
     * be overridden to add set up functionality to each test.
     */
    setUp(): PromiseLike<any> | undefined;
    /**
     * Gets called after every TestCase.Test has been executed. Can
     * be overridden to add tear down functionality to each test.
     */
    tearDown(): PromiseLike<any> | undefined;
    getAutoDiscoveryPrefix(): string;
    protected getBatchTime(): number;
    /**
     *
     * @param batchTime Time since the last batch of tests was started.
     */
    protected setBatchTime(batchTime: number): void;
    /**
     * Creates a `TestCase.Test` from an auto-discovered
     * function.
     * @param name The name of the function.
     * @param ref The auto-discovered function.
     * @param scope The scope to attach to the test.
     * @return The newly created test.
     */
    protected createTest(name: string, ref: () => any, scope?: object, objChain?: object[]): TestCase.Test;
    /**
     * Adds any functions defined on the global object
     * that correspond to lifecycle events for the test case. Overrides
     * setUp, tearDown, setUpPage, tearDownPage, runTests, and shouldRunTests
     * if they are defined on global object.
     */
    autoDiscoverLifecycle(): void;
    /**
     * Extracts any functions defined on 'obj' that correspond to page lifecycle
     * events (setUpPage, tearDownPage, runTests, shouldRunTests) and add them to
     * on this test case.
     */
    setLifecycleObj(obj: object): void;
    /**
     *
     * @param obj An object from which to extract test and lifecycle methods.
     */
    setTestObj(obj: object): void;
    /**
     * Adds any functions defined in the global scope that are prefixed with
     * "test" to the test case.
     */
    autoDiscoverTests(): void;
    /**
     * Checks to see if the test should be marked as failed before it is run.
     *
     * If there was an error in setUpPage, we treat that as a failure for all
     * tests and mark them all as having failed.
     * @param testCase The current test case.
     * @return Whether the test was marked as failed.
     */
    protected maybeFailTestEarly(testCase: TestCase.Test | null): boolean;
    /**
     * Cycles through the tests, yielding asynchronously if the execution time
     * exceeds {@link #maxRunTime}. In particular, there is no guarantee that
     * the test case has finished execution once this method has returned.
     * To be notified when the test case has finished execution, use
     * {@link #addCompletedCallback} or {@link #runTestsReturningPromise}.
     */
    cycleTests(): void;
    /**
     * Calls a function after a delay, using the protected timeout.
     * @param fn The function to call.
     * @param time Delay in milliseconds.
     * @return The timeout id.
     */
    protected timeout(fn: Function | null, time: number): number;
    /**
     * Clears a timeout created by `this.timeout()`.
     * @param id A timeout id.
     */
    protected clearTimeout(id: number): void;
    protected now(): number;
    protected static now(): number;
    /**
     * Handles a test that passed.
     * @param test The test that passed.
     */
    protected doSuccess(test: TestCase.Test | null): void;
    /**
     * Handles a test that was skipped.
     * @param test The test that was skipped.
     */
    protected doSkipped(test: TestCase.Test): void;
    /**
     * Records an error that fails the current test, without throwing it.
     *
     * Use this function to implement expect()-style assertion libraries that fail a
     * test without breaking execution (so you can see further failures). Do not use
     * this from normal test code.
     *
     * Please contact js-core-libraries-team@ before using this method.  If it grows
     * popular, we may add an expect() API to Closure.
     *
     * NOTE: If there is no active TestCase, you must throw an error.
     * @param error The error to log.  If it is a JsUnitException which has already been logged, nothing will happen.
     */
    recordTestError(error: Error): void;
    /**
     * Records and logs an error from or related to a test.
     * @param testName The name of the test that failed.
     * @param error The exception object associated with the failure or a string.
     */
    protected recordError(testName: string, error: any): void;
    /**
     * Handles a test that failed.
     * @param test The test that failed.
     */
    protected doError(test: TestCase.Test | null): void;
    /**
     *
     * @param name Failed test name.
     * @param error The exception object associated with the failure or a string.
     * @return Error object.
     */
    logError(name: string, error: any): TestCase.Error;
    /**
     *
     */
    setTestDoneCallback(testDone: () => any): void;
    /**
     * Initializes the TestCase.
     * @param testCase The test case to install.
     * @param opt_testDone Called when each test completes.
     */
    static initializeTestCase(testCase: TestCase | null, opt_testDone?: () => any): void;
    /**
     * Initializes the given test case with the global test runner 'G_testRunner'.
     * @param testCase The test case to install.
     * @param opt_testDone Called when each test completes.
     */
    static initializeTestRunner(testCase: TestCase | null, opt_testDone?: () => any): void;
    /**
     * Call this from setUpPage() to prevent any Content Security Policy violations
     * that may have occurred during page load from being reported as errors .
     */
    ignoreStartupCspViolations(): void;
    /**
     * Toggles recording of Content Security Policy violations. Call this with false
     * during tests, setUpPage, setUp, and tearDown functions to prevent CSP
     * violations occurring while the function is executing from being reported as
     * errors. Reporting will be reset upon execution of the next test function.
     */
    observeCspViolations(enable: boolean): void;
}
export declare namespace TestCase {
    /**
     * The order to run the auto-discovered tests.
     */
    enum Order {
        NATURAL = "natural",
        RANDOM = "random",
        SORTED = "sorted"
    }
    /**
     * Represents a test result.
     */
    type IResult = {
        '\'source\'': string;
        '\'message\'': string;
        '\'stacktrace\'': string;
    };
    /**
     * A class representing a single test function.
     */
    class Test {
        /**
         * A class representing a single test function.
         * @param name The test name.
         * @param ref Reference to the test function or test object.
         * @param scope Optional scope that the test function should be called in.
         * @param objChain A chain of objects used to populate setUps and tearDowns.
         */
        constructor(name: string, ref: (() => any) | null, scope?: object | null, objChain?: any[]);
        private noStructuralTyping_closure_goog_testing_testcase_Test;
        /**
         * The name of the test.
         */
        name: string;
        /**
         * TODO(user): Rename this to something more clear.
         * Reference to the test function.
         */
        ref: () => any;
        /**
         * Scope that the test function should be called in.
         */
        scope: object | null;
        setUps: (() => any)[];
        tearDowns: (() => any)[];
        objChain: any[];
        /**
         * Sets the start time
         */
        started(): void;
        /**
         * Sets the stop time
         */
        stopped(): void;
        /**
         * Returns the runtime for this test function in milliseconds.
         */
        getElapsedTime(): number;
    }
    /**
     * A class for representing test results.  A bag of public properties.
     */
    class Result {
        /**
         * A class for representing test results.  A bag of public properties.
         * @param testCase The test case that owns this result.
         */
        constructor(testCase: TestCase | null);
        private noStructuralTyping_closure_goog_testing_testcase_Result;
        /**
         * Total number of tests that should have been run.
         */
        totalCount: number;
        /**
         * Total number of tests that were actually run.
         */
        runCount: number;
        /**
         * Number of successful tests.
         */
        successCount: number;
        /**
         * Number of tests skipped due to nested shouldRunTests.
         */
        skipCount: number;
        /**
         * The amount of time the tests took to run.
         */
        runTime: number;
        /**
         * The number of files loaded to run this test.
         */
        numFilesLoaded: number;
        /**
         * Whether all tests were suppressed from a top-level shouldRunTests().
         */
        testSuppressed: boolean;
        /**
         * Which tests were suppressed by shouldRunTests() returning false.
         */
        suppressedTests: string[];
        /**
         * Test results for each test that was run. The test name is always added
         * as the key in the map, and the array of strings is an optional list
         * of failure messages. If the array is empty, the test passed. Otherwise,
         * the test failed.
         */
        resultsByName: {
            [key: string]: (TestCase.Error | null)[];
        };
        /**
         * Errors encountered while running the test.
         */
        errors: (TestCase.Error | null)[];
        /**
         * Messages to show the user after running the test.
         */
        messages: string[];
        /**
         * Whether the tests have completed.
         */
        complete: boolean;
        isSuccess(): boolean;
        getSummary(): string;
    }
    /**
     * A class representing an error thrown by the test
     */
    class Error {
        /**
         * A class representing an error thrown by the test
         * @param source The name of the test which threw the error.
         * @param message The error message.
         * @param opt_stack A string showing the execution stack.
         */
        constructor(source: string, message: string, opt_stack?: string);
        private noStructuralTyping_closure_goog_testing_testcase_Error;
        /**
         * The name of the test which threw the error.
         */
        source: string;
        /**
         * Reference to the test function.
         */
        message: string;
        /**
         * The stack.
         */
        stack: string | null;
        /**
         * Returns a string representing the error object.
         * @return A string representation of the error.
         */
        toString(): string;
    }
    class Continuation_ {
        /**
         *
         */
        constructor(fn: () => (TestCase.Continuation_ | undefined | null));
        private noStructuralTyping_closure_goog_testing_testcase_Continuation_;
        /**
         *
         */
        static run(continuation: TestCase.Continuation_ | undefined | null): void;
    }
}
