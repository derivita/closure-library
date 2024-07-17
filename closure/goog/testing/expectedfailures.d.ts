/**
 * Helper class for allowing some unit tests to fail, particularly designed to
 * mark tests that should be fixed on a given browser.
 *
 * <pre>
 * var expectedFailures = new ExpectedFailures();
 *
 * function tearDown() {
 * expectedFailures.handleTearDown();
 * }
 *
 * function testSomethingThatBreaksInWebKit() {
 * expectedFailures.expectFailureFor(goog.userAgent.WEBKIT);
 *
 * try {
 * ...
 * assert(somethingThatFailsInWebKit);
 * ...
 * } catch (e) {
 * expectedFailures.handleException(e);
 * }
 * }
 * </pre>
 */
export declare class ExpectedFailures {
    /**
     * Helper class for allowing some unit tests to fail, particularly designed to
     * mark tests that should be fixed on a given browser.
     *
     * <pre>
     * var expectedFailures = new ExpectedFailures();
     *
     * function tearDown() {
     * expectedFailures.handleTearDown();
     * }
     *
     * function testSomethingThatBreaksInWebKit() {
     * expectedFailures.expectFailureFor(goog.userAgent.WEBKIT);
     *
     * try {
     * ...
     * assert(somethingThatFailsInWebKit);
     * ...
     * } catch (e) {
     * expectedFailures.handleException(e);
     * }
     * }
     * </pre>
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_expectedfailures_ExpectedFailures;
    /**
     * Register to expect failure for the given condition.  Multiple calls to this
     * function act as a boolean OR.  The first applicable message will be used.
     * @param condition Whether to expect failure.
     * @param opt_message Descriptive message of this expected failure.
     */
    expectFailureFor(condition: boolean, opt_message?: string): void;
    /**
     * Determines if the given exception was expected.
     * @param ex The exception to check.
     * @return Whether the exception was expected.
     */
    isExceptionExpected(ex: object | null): boolean;
    /**
     * Handle an exception, suppressing it if it is a unit test failure that we
     * expected.
     * @param ex The exception to handle.
     */
    handleException(ex: Error | null): void;
    /**
     * Run the given function, catching any expected failures.
     * @param func The function to run.
     * @param opt_lenient Whether to ignore if the expected failures didn't occur.  In this case a warning will be logged in handleTearDown.
     */
    run(func: Function | null, opt_lenient?: boolean): void;
    /**
     * Handle the tearDown phase of a test, alerting the user if an expected test
     * was not suppressed.
     */
    handleTearDown(): void;
}
