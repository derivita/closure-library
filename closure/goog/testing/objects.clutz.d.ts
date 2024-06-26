//!! generated by clutz.
// Generated from testing/objects.js
declare namespace ಠ_ಠ.clutz.module$exports$goog$testing$objects {
  /**
   * Asserts that the given object has no transitive reference on the given
   * value.
   *
   * This may be useful when writing tests to confirm that certain values aren't
   * 'leaked'.
   */
  function assertDoesNotRetainReference (object : GlobalObject , value : any ) : void ;
  /**
   * Asserts that the given object has a transitive reference on the given value.
   *
   * This may be useful when writing tests to confirm that certain values'leaked'.
   */
  function assertRetainsReference (object : GlobalObject , value : any ) : void ;
}
declare module 'goog:goog.testing.objects' {
  import objects = ಠ_ಠ.clutz.module$exports$goog$testing$objects;
  export = objects;
}
