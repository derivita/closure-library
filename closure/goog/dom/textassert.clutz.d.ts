//!! generated by clutz.
// Generated from dom/textassert.js
declare namespace ಠ_ಠ.clutz.goog.dom.textAssert {
  /**
   * Assert that the string is plain text that does not have HTML, i.e. not
   * affected by HTML escaping. Otherwise, this raises an error if assertions are
   * enabled. It does NOT sanitize nor make any change to the input string. It
   * should only be used when the assertion failure is benign, such as printing
   * spurious tags. DO NOT count on this to remove unsafe HTML. It is only meant
   * for legacy refactoring. Please do NOT use in new code.
   */
  function assertHtmlFree (text : string ) : string ;
}
declare module 'goog:goog.dom.textAssert' {
  import textAssert = ಠ_ಠ.clutz.goog.dom.textAssert;
  export = textAssert;
}
