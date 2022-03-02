//!! generated by clutz.
// Generated from string/typedstring.js
declare namespace ಠ_ಠ.clutz.goog.string {
  /**
   * Wrapper for strings that conform to a data type or language.
   *
   * Implementations of this interface are wrappers for strings, and typically
   * associate a type contract with the wrapped string.  Concrete implementations
   * of this interface may choose to implement additional run-time type checking,
   * see for example `goog.html.SafeHtml`. If available, client code that
   * needs to ensure type membership of an object should use the type's function
   * to assert type membership, such as `goog.html.SafeHtml.unwrap`.
   */
  interface TypedString {
    /**
     * Retrieves this wrapped string's value.
     */
    getTypedStringValue ( ) : string ;
    /**
     * Interface marker of the TypedString interface.
     *
     * This property can be used to determine at runtime whether or not an object
     * implements this interface.  All implementations of this interface set this
     * property to `true`.
     */
    implementsGoogStringTypedString : boolean ;
  }
}
declare module 'goog:goog.string.TypedString' {
  import TypedString = ಠ_ಠ.clutz.goog.string.TypedString;
  export default TypedString;
}
