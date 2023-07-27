//!! generated by clutz.
// Generated from crypt/base64.js
declare namespace ಠ_ಠ.clutz.goog.crypt.base64 {
  /**
   * Alphabets for Base64 encoding
   * Alphabets with no padding character are for encoding without padding.
   * About the alphabets, please refer to RFC 4686.
   * https://tools.ietf.org/html/rfc4648
   */
  /**
   * Alphabets for Base64 encoding
   * Alphabets with no padding character are for encoding without padding.
   * About the alphabets, please refer to RFC 4686.
   * https://tools.ietf.org/html/rfc4648
   */
  enum Alphabet {
    DEFAULT = 0.0 ,
    NO_PADDING = 1.0 ,
    WEBSAFE = 2.0 ,
    WEBSAFE_DOT_PADDING = 3.0 ,
    WEBSAFE_NO_PADDING = 4.0 ,
  }
  /**
   * Alphabet characters for Alphabet.DEFAULT encoding.
   * For characters without padding, please consider using
   * `goog.crypt.baseN.BASE_64` instead.
   */
  let ENCODED_VALS : string ;
  /**
   * Alphabet characters for Alphabet.WEBSAFE_DOT_PADDING encoding.
   * The dot padding is no Internet Standard, according to RFC 4686.
   * https://tools.ietf.org/html/rfc4648
   * For characters without padding, please consider using
   * `goog.crypt.baseN.BASE_64_URL_SAFE` instead.
   */
  let ENCODED_VALS_WEBSAFE : string ;
  /**
   * Base64-decode a string into a binary bytestring.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   * @param useCustomDecoder True indicates the custom decoder is used, which supports alternative alphabets. Note that passing false may still use the custom decoder on browsers without native support.
   */
  function decodeString (a : string , b ? : boolean ) : string ;
  /**
   * Base64-decode a string to an Array of numbers.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * TODO(sdh): We may want to consider renaming this to `decodeToByteArray` for
   * consistency with `decodeToText`/`decodeToBinaryString`.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   * @param opt_ignored Unused parameter, retained for compatibility.
   */
  function decodeStringToByteArray (input : string , opt_ignored ? : boolean ) : number [] ;
  /**
   * Base64-decode a string to a Uint8Array.
   *
   * Note that Uint8Array is not supported on older browsers, e.g. IE < 10.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   */
  function decodeStringToUint8Array (input : string ) : Uint8Array ;
  /**
   * Base64-decode a string.  The input should be the result of a double-encoding
   * a unicode string: first the unicode characters (>127) are encoded as UTF-8
   * bytes, and then the resulting bytes are base64-encoded.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   * @param useCustomDecoder True indicates the custom decoder is used, which supports alternative alphabets. Note that passing false may still use the custom decoder on browsers without native support.
   */
  function decodeStringUtf8 (input : string , useCustomDecoder ? : boolean ) : string ;
  /**
   * Base64-decode a string into a binary bytestring.  Note that binary strings
   * are discouraged now that Uint8Array is available on all supported browsers.
   * Users are encouraged to strongly consider `decodeStringToUint8Array`.  This
   * method is likely to be deprecated at some point in favor of the Uint8Array
   * version.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   * @param useCustomDecoder True indicates the custom decoder is used, which supports alternative alphabets. Note that passing false may still use the custom decoder on browsers without native support.
   */
  function decodeToBinaryString (input : string , useCustomDecoder ? : boolean ) : string ;
  /**
   * Base64-decode a string.  The input should be the result of a double-encoding
   * a unicode string: first the unicode characters (>127) are encoded as UTF-8
   * bytes, and then the resulting bytes are base64-encoded.
   * @param input Input to decode. Any whitespace is ignored, and the input maybe encoded with either supported alphabet (or a mix thereof).
   * @param useCustomDecoder True indicates the custom decoder is used, which supports alternative alphabets. Note that passing false may still use the custom decoder on browsers without native support.
   */
  function decodeToText (input : string , useCustomDecoder ? : boolean ) : string ;
  /**
   * Base64-encode a binary string.  Note that binary strings are discouraged now
   * that Uint8Array is available on all supported browsers.  Users are encouraged
   * to strongly consider `encodeByteArray`.  This method is likely to be
   * deprecated at some point in favor of the Uint8Array version.
   * @param input A string to encode.  Must not contain characters outside of the Latin-1 range (i.e. charCode > 255).
   * @param alphabet Base 64 alphabet to use in encoding. Alphabet.DEFAULT is used by default.
   */
  function encodeBinaryString (input : string , alphabet ? : ಠ_ಠ.clutz.goog.crypt.base64.Alphabet ) : string ;
  /**
   * Base64-encode an array of bytes.
   * @param input An array of bytes (numbers with value in [0, 255]) to encode.
   * @param alphabet Base 64 alphabet to use in encoding. Alphabet.DEFAULT is used by default.
   */
  function encodeByteArray (input : number [] | null | Uint8Array , alphabet ? : ಠ_ಠ.clutz.goog.crypt.base64.Alphabet ) : string ;
  /**
   * Base64-encode a binary string.
   * @param input A string to encode.  Must not contain characters outside of the Latin-1 range (i.e. charCode > 255).
   * @param alphabet Base 64 alphabet to use in encoding. Alphabet.DEFAULT is used by default.
   * @param throwSync Whether to throw synchronously on unicode.  Note that if not using a custom alphabet, the throw will always be sync.
   */
  function encodeString (input : string , alphabet ? : ಠ_ಠ.clutz.goog.crypt.base64.Alphabet , throwSync ? : boolean ) : string ;
  /**
   * Base64-encode a text string.  Non-ASCII characters (charCode > 127) will be
   * encoded as UTF-8.
   * @param input A string to encode.
   * @param alphabet Base 64 alphabet to use in encoding. Alphabet.DEFAULT is used by default.
   */
  function encodeStringUtf8 (input : string , alphabet ? : ಠ_ಠ.clutz.goog.crypt.base64.Alphabet ) : string ;
  /**
   * Base64-encode a text string.  Non-ASCII characters (charCode > 127) will be
   * encoded as UTF-8.
   * @param input A string to encode.
   * @param alphabet Base 64 alphabet to use in encoding. Alphabet.DEFAULT is used by default.
   */
  function encodeText (input : string , alphabet ? : ಠ_ಠ.clutz.goog.crypt.base64.Alphabet ) : string ;
}
declare module 'goog:goog.crypt.base64' {
  import base64 = ಠ_ಠ.clutz.goog.crypt.base64;
  export = base64;
}
