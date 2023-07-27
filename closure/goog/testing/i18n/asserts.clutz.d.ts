//!! generated by clutz.
// Generated from testing/i18n/asserts.js
declare namespace ಠ_ಠ.clutz.goog.testing.i18n.asserts {
  /**
   * Adds two strings as being i18n-equivalent. Call this
   * method in your unit test file to add mappings scoped to the file.
   * @param expected The expected string in assertI18nEquals.
   * @param equivalent A string which is i18n-equal.
   */
  function addI18nMapping (expected : string , equivalent : string ) : void ;
  /**
   * Asserts that needle, or a string i18n-equivalent to needle, is a substring of
   * haystack. I18n-equivalent strings are set with addI18nMapping.
   * Horizontal white space is removed before comparison.
   * @param needle The substring to search for.
   * @param haystack The string to search within.
   */
  function assertI18nContains (needle : string , haystack : string ) : void ;
  /**
   * Asserts that the two values are "almost equal" from i18n perspective.
   * All horizontal white space is stripped before comparison.
   * I18n-equivalent strings are set with addI18nMapping.
   * @param a The expected value or comment.
   * @param b The actual or expected.
   * @param opt_c Null or the actual value.
   */
  function assertI18nEquals (a : string | null | undefined , b : string | null | undefined , opt_c ? : string ) : void ;
}
declare module 'goog:goog.testing.i18n.asserts' {
  import asserts = ಠ_ಠ.clutz.goog.testing.i18n.asserts;
  export = asserts;
}
