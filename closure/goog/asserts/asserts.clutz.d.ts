//!! generated by clutz.
// Generated from asserts/asserts.js
declare namespace ಠ_ಠ.clutz.goog.asserts {
  export import AssertionError = ಠ_ಠ.clutz.module$contents$goog$asserts_AssertionError ;
  /**
   * The default error handler.
   * @param e The exception to be handled.
   */
  function DEFAULT_ERROR_HANDLER (e : module$contents$goog$asserts_AssertionError ) : void ;
  let ENABLE_ASSERTS : boolean ;
  /**
   * Checks if the condition evaluates to true if ENABLE_ASSERTS is
   * true.
   * @param condition The condition to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assert < T = any > (condition : T , opt_message ? : string ,  ...var_args : any [] ) : T ;
  /**
   * Checks if the value is an Array if ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertArray (value : any , opt_message ? : string ,  ...var_args : any [] ) : any [] ;
  /**
   * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertBoolean (value : any , opt_message ? : string ,  ...var_args : any [] ) : boolean ;
  /**
   * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertElement (value : any , opt_message ? : string ,  ...var_args : any [] ) : GlobalElement ;
  /**
   * Checks if `value` is `null` or `undefined` if goog.asserts.ENABLE_ASSERTS is
   * true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertExists < T = any , R = any > (value : T , opt_message ? : string ,  ...var_args : any [] ) : R ;
  /**
   * Checks whether the value is a finite number, if ENABLE_ASSERTS
   * is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertFinite (value : any , opt_message ? : string ,  ...var_args : any [] ) : number ;
  /**
   * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertFunction (value : any , opt_message ? : string ,  ...var_args : any [] ) : Function ;
  /**
   * Checks if the value is an instance of the user-defined type if
   * goog.asserts.ENABLE_ASSERTS is true.
   *
   * The compiler may tighten the type returned by this function.
   *
   * Do not use this to ensure a value is an HTMLElement or a subclass! Cross-
   * document DOM inherits from separate - though identical - browser classes, and
   * such a check will unexpectedly fail. Please use the methods in
   * goog.asserts.dom for these purposes.
   * @param value The value to check.
   * @param type A user-defined constructor.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertInstanceof < T = any > (value : any , type : { new ( ...a : any [] ) : T } , opt_message ? : string ,  ...var_args : any [] ) : T ;
  /**
   * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertNumber (value : any , opt_message ? : string ,  ...var_args : any [] ) : number ;
  /**
   * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertObject (value : any , opt_message ? : string ,  ...var_args : any [] ) : GlobalObject ;
  /**
   * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
   * @param value The value to check.
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function assertString (value : any , opt_message ? : string ,  ...var_args : any [] ) : string ;
  /**
   * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
   * when we want to add a check in the unreachable area like switch-case
   * statement:
   *
   * <pre>
   * switch(type) {
   * case FOO: doSomething(); break;
   * case BAR: doSomethingElse(); break;
   * default: goog.asserts.fail('Unrecognized type: ' + type);
   * // We have only 2 types - "default:" section is unreachable code.
   * }
   * </pre>
   * @param opt_message Error message in case of failure.
   * @param var_args The items to substitute into the failure message.
   */
  function fail (opt_message ? : string ,  ...var_args : any [] ) : void ;
  /**
   * Sets a custom error handler that can be used to customize the behavior of
   * assertion failures, for example by turning all assertion failures into log
   * messages.
   */
  function setErrorHandler (errorHandler : (a : module$contents$goog$asserts_AssertionError ) => any ) : void ;
}
declare module 'goog:goog.asserts' {
  import asserts = ಠ_ಠ.clutz.goog.asserts;
  export = asserts;
}
// Generated from asserts/asserts.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Error object for failed assertions.
   */
  class module$contents$goog$asserts_AssertionError extends ಠ_ಠ.clutz.module$exports$goog$debug$Error {
    private noStructuralTyping_module$contents$goog$asserts_AssertionError : any;
    /**
     * Error object for failed assertions.
     * @param messagePattern The pattern that was used to form message.
     * @param messageArgs The items to substitute into the pattern.
     */
    constructor (messagePattern : string , messageArgs : any [] ) ;
    /**
     * The message pattern used to format the error message. Error handlers can
     * use this to uniquely identify the assertion.
     */
    messagePattern : string ;
    name : string ;
  }
}
declare namespace ಠ_ಠ.clutz.module$exports$goog$asserts {
  export import AssertionError = ಠ_ಠ.clutz.module$contents$goog$asserts_AssertionError ;
}
