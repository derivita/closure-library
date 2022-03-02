//!! generated by clutz.
// Generated from testing/asynctestcase.js
declare namespace ಠ_ಠ.clutz.goog.testing {
  /**
   * A test case that is capable of running tests that contain asynchronous logic.
   */
  class AsyncTestCase extends ಠ_ಠ.clutz.goog.testing.TestCase {
    private noStructuralTyping_goog_testing_AsyncTestCase : any;
    /**
     * A test case that is capable of running tests that contain asynchronous logic.
     * @param opt_name A descriptive name for the test case.
     */
    constructor (opt_name ? : string ) ;
    /**
     * The currently active test.
     */
    protected activeTest ? : ಠ_ಠ.clutz.goog.testing.TestCase.Test | null ;
    continueTesting ( ) : void ;
    /**
     * Starts the tests.
     */
    cycleTests ( ) : void ;
    /**
     * Handles an exception thrown by a test.
     * @param opt_e The exception object associated with the failure or a string.
     */
    doAsyncError (opt_e ? : any ) : void ;
    enableDebugLogging ( ) : void ;
    /**
     * Finalizes the test case, called when the tests have finished executing.
     */
    finalize ( ) : void ;
    /**
     * The current step name.
     */
    protected getCurrentStepName ( ) : string ;
    /**
     * Sets up the test page and then waits until the test case has been marked
     * as ready before executing the tests.
     */
    runTests ( ) : void ;
    signal ( ) : void ;
    /**
     * How long to wait for a single step of a test to complete in milliseconds.
     * A step starts when a call to waitForAsync() is made.
     */
    stepTimeout : number ;
    /**
     * How long to wait after a failed test before moving onto the next one.
     * The purpose of this is to allow any pending async callbacks from the failing
     * test to finish up and not cause the next test to fail.
     */
    timeToSleepAfterFailure : number ;
    /**
     * Informs the testcase not to continue to the next step in the test cycle
     * until continueTesting is called.
     * @param opt_name A description of what we are waiting for.
     */
    waitForAsync (opt_name ? : string ) : void ;
    /**
     * Informs the testcase not to continue to the next step in the test cycle
     * until signal is called the specified number of times. Within a test, this
     * function behaves additively if called multiple times; the number of signals
     * to wait for will be the sum of all expected number of signals this function
     * was called with.
     * @param times The number of signals to receive before continuing testing.
     * @param opt_name A description of what we are waiting for.
     */
    waitForSignals (times : number , opt_name ? : string ) : void ;
    /**
     * Preferred way of creating an AsyncTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param opt_name A descriptive name for the test case.
     */
    static createAndInstall (opt_name ? : string ) : ಠ_ಠ.clutz.goog.testing.AsyncTestCase ;
  }
}
declare module 'goog:goog.testing.AsyncTestCase' {
  import AsyncTestCase = ಠ_ಠ.clutz.goog.testing.AsyncTestCase;
  export default AsyncTestCase;
}
// Generated from testing/asynctestcase.js
declare namespace ಠ_ಠ.clutz.goog.testing.AsyncTestCase {
  /**
   * An exception class used solely for control flow.
   */
  class ControlBreakingException extends GlobalError {
    private noStructuralTyping_goog_testing_AsyncTestCase_ControlBreakingException : any;
    /**
     * An exception class used solely for control flow.
     * @param opt_message Error message.
     */
    constructor (opt_message ? : string ) ;
    /**
     * The exception message.
     */
    message : string ;
    /**
     * Marks this object as a ControlBreakingException
     */
    isControlBreakingException : boolean ;
    toString ( ) : any ;
    /**
     * Return value for .toString().
     */
    static TO_STRING : string ;
  }
}
declare module 'goog:goog.testing.AsyncTestCase.ControlBreakingException' {
  import ControlBreakingException = ಠ_ಠ.clutz.goog.testing.AsyncTestCase.ControlBreakingException;
  export default ControlBreakingException;
}
// Generated from unknown file
declare namespace ಠ_ಠ.clutz {
  function _assert ( ...a : any [] ) : any ;
}
// Generated from unknown file
declare namespace ಠ_ಠ.clutz {
  function fail ( ...a : any [] ) : any ;
}
