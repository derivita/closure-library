//!! generated by clutz.
// Generated from i18n/mime.js
declare namespace ಠ_ಠ.clutz.goog.i18n.mime {
  /**
   * Get an array of UTF-8 hex codes for a given character.
   * @param c The matched character.
   */
  function getHexCharArray (c : string ) : string [] ;
}
declare module 'goog:goog.i18n.mime' {
  import mime = ಠ_ಠ.clutz.goog.i18n.mime;
  export = mime;
}
// Generated from i18n/mime.js
declare namespace ಠ_ಠ.clutz.goog.i18n.mime {
  /**
   * Encodes a string for inclusion in a MIME header. The string is encoded
   * in UTF-8 according to RFC 1522, using quoted-printable form.
   * @param str The string to encode.
   * @param opt_noquote Whether double-quote characters should also be escaped (should be true if the result will be placed inside a quoted string for a parameter value in a MIME header).
   */
  function encode (str : string , opt_noquote ? : boolean ) : string ;
}
declare module 'goog:goog.i18n.mime.encode' {
  import encode = ಠ_ಠ.clutz.goog.i18n.mime.encode;
  export default encode;
}
