//!! generated by clutz.
// Generated from json/json.js
declare namespace ಠ_ಠ.clutz.goog.json {
  let TRY_NATIVE_JSON : boolean ;
  let USE_NATIVE_JSON : boolean ;
  /**
   * Tests if a string is an invalid JSON string. This only ensures that we are
   * not using any invalid characters
   * @param s The string to test.
   */
  function isValid (s : string ) : boolean ;
  /**
   * Parses a JSON string and returns the result. This throws an exception if
   * the string is an invalid JSON string.
   *
   * Note that this is very slow on large strings. Use JSON.parse if possible.
   * @param s The JSON string to parse.
   */
  function parse (a : any ) : GlobalObject | null ;
  /**
   * Serializes an object or a value to a JSON string.
   * @param object The object to serialize.
   * @param opt_replacer A replacer function called for each (key, value) pair that determines how the value should be serialized. By defult, this just returns the value and allows default serialization to kick in.
   */
  function serialize (a : any , b ? : ( ಠ_ಠ.clutz.goog.json.Replacer ) | null ) : string ;
  /**
   * Sets an error logger to use if there's a recoverable parsing error and
   * `goog.json.TRY_NATIVE_JSON` is enabled.
   * @param errorLogger The first parameter is the error message, the second is the exception thrown by `JSON.parse`.
   */
  function setErrorLogger (errorLogger : (a : string , b : GlobalError ) => any ) : void ;
}
declare module 'goog:goog.json' {
  import json = ಠ_ಠ.clutz.goog.json;
  export = json;
}
// Generated from json/json.js
declare namespace ಠ_ಠ.clutz.goog.json {
  /**
   * JSON replacer, as defined in Section 15.12.3 of the ES5 spec.
   */
  type Replacer = (a : string , b : any ) => any ;
}
declare module 'goog:goog.json.Replacer' {
  import Replacer = ಠ_ಠ.clutz.goog.json.Replacer;
  export default Replacer;
}
// Generated from json/json.js
declare namespace ಠ_ಠ.clutz.goog.json {
  /**
   * JSON reviver, as defined in Section 15.12.2 of the ES5 spec.
   */
  type Reviver = (a : string , b : any ) => any ;
}
declare module 'goog:goog.json.Reviver' {
  import Reviver = ಠ_ಠ.clutz.goog.json.Reviver;
  export default Reviver;
}
// Generated from json/json.js
declare namespace ಠ_ಠ.clutz.goog.json {
  /**
   * Class that is used to serialize JSON objects to a string.
   */
  class Serializer {
    private noStructuralTyping_goog_json_Serializer : any;
    /**
     * Class that is used to serialize JSON objects to a string.
     * @param opt_replacer Replacer.
     */
    constructor (opt_replacer ? : ( ಠ_ಠ.clutz.goog.json.Replacer ) | null ) ;
    /**
     * Serializes an object or a value to a JSON string.
     * @param object The object to serialize.
     */
    serialize (object : any ) : string ;
    /**
     * Serializes an array to a JSON string
     * @param arr The array to serialize.
     * @param sb Array used as a string builder.
     */
    protected serializeArray (arr : string [] | null , sb : string [] | null ) : void ;
    /**
     * Serializes a generic value to a JSON string
     * @param object The object to serialize.
     * @param sb Array used as a string builder.
     */
    protected serializeInternal (object : any , sb : string [] | null ) : void ;
  }
}
declare module 'goog:goog.json.Serializer' {
  import Serializer = ಠ_ಠ.clutz.goog.json.Serializer;
  export default Serializer;
}
