//!! generated by clutz.
// Generated from testing/i18n/whitespace.js
declare namespace ಠ_ಠ.clutz.goog.testing.i18n.whitespace {
  /**
   * A regular expression for identifying all horizontal white space
   * characters. Same as \h in a Java regex Pattern.
   */
  let HORIZONTAL_WHITE_SPACE_REGEX : RegExp ;
  /**
   * Normalizes whitespace characters within the input, removing various
   * whitespace characters used for presentational purposes that make testing
   * difficult.
   */
  function removeWhitespace (input : string ) : string ;
}
declare module 'goog:goog.testing.i18n.whitespace' {
  import whitespace = ಠ_ಠ.clutz.goog.testing.i18n.whitespace;
  export = whitespace;
}
