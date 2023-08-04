//!! generated by clutz.
// Generated from labs/mock/verificationmode.js
declare namespace ಠ_ಠ.clutz.goog.labs.mock.verification {
  /**
   * Returns a `VerificationMode` which verifies a method was called at
   * least `minimumNumberOfInvocations` times.
   */
  function atLeast (minimumNumberOfInvocations : number ) : ಠ_ಠ.clutz.goog.labs.mock.verification.VerificationMode ;
  /**
   * Returns a `VerificationMode` which verifies a method was called at
   * most `maxNumberOfInvocations` times.
   */
  function atMost (maxNumberOfInvocations : number ) : ಠ_ಠ.clutz.goog.labs.mock.verification.VerificationMode ;
  /**
   * Returns a `VerificationMode` which verifies a method was never
   * called. An alias for `VerificatonMode.times(0)`.
   */
  function never ( ) : ಠ_ಠ.clutz.goog.labs.mock.verification.VerificationMode ;
  /**
   * Returns a `VerificationMode` which verifies a method was called
   * exactly `expectedNumberOfInvocations` times.
   */
  function times (expectedNumberOfInvocations : number ) : ಠ_ಠ.clutz.goog.labs.mock.verification.VerificationMode ;
}
declare module 'goog:goog.labs.mock.verification' {
  import verification = ಠ_ಠ.clutz.goog.labs.mock.verification;
  export = verification;
}
// Generated from labs/mock/verificationmode.js
declare namespace ಠ_ಠ.clutz.goog.labs.mock.verification {
  let BaseVerificationMode : PrivateType;
}
declare module 'goog:goog.labs.mock.verification.BaseVerificationMode' {
  import BaseVerificationMode = ಠ_ಠ.clutz.goog.labs.mock.verification.BaseVerificationMode;
  export default BaseVerificationMode;
}
// Generated from labs/mock/verificationmode.js
declare namespace ಠ_ಠ.clutz.goog.labs.mock.verification {
  /**
   * A mode which defines how mock invocations should be verified.
   * When an instance of `VerificationMode` is passed to
   * `goog.labs.mock.verify`, then that instances's `#verify`
   * method will be used to verify the invocation.
   *
   * If `#verify` returns false, then the test will fail and the
   * description returned from `#describe` will be shown in the
   * test failure message.  Sample usage:
   *
   * ```
   * goog.module('my.package.MyClassTest');
   * goog.setTestOnly('my.package.MyClassTest');
   *
   * var testSuite = goog.require('goog.testing.testSuite');
   * var verification = goog.require('goog.labs.mock.verification');
   *
   * var times = verification.times;
   *
   * testSuite({
   * setUp: function() {
   * // Code creating instances of MyClass and mockObj.
   * },
   *
   * testMyMethod_shouldDoSomething: function() {
   * myClassInstance.myMethod();
   *
   * goog.labs.mock.verify(mockObj, times(1));
   * }
   * });
   * ```
   *
   * For an example implementation, see `TimesVerificationMode_`.
   */
  interface VerificationMode {
    /**
     * Returns a description of what this VerificationMode expected.
     */
    describe ( ) : string ;
    /**
     * Returns true if the recorded number of invocations,
     * `actualNumberOfInvocations`, meets the expectations of this mode.
     *
     * TODO(user): Have this take in an object which contains the complete
     * call record in order to allow more interesting verifications.
     */
    verify (a : number ) : boolean ;
  }
}
declare module 'goog:goog.labs.mock.verification.VerificationMode' {
  import VerificationMode = ಠ_ಠ.clutz.goog.labs.mock.verification.VerificationMode;
  export default VerificationMode;
}
