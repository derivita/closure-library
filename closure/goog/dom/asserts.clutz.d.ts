//!! generated by clutz.
// Generated from dom/asserts.js
declare namespace ಠ_ಠ.clutz.goog.dom.asserts {
  /**
   * Asserts that a given object is a Location.
   *
   * To permit this assertion to pass in the context of tests where DOM APIs might
   * be mocked, also accepts any other type except for subtypes of {!Element}.
   * This is to ensure that, for instance, HTMLLinkElement is not being used in
   * place of a Location, since this could result in security bugs due to stronger
   * contracts required for assignments to the href property of the latter.
   * @param o The object whose type to assert.
   */
  function assertIsLocation (o : GlobalObject | null ) : Location ;
}
declare module 'goog:goog.dom.asserts' {
  import asserts = ಠ_ಠ.clutz.goog.dom.asserts;
  export = asserts;
}
