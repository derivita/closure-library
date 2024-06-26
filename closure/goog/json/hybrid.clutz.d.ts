//!! generated by clutz.
// Generated from json/hybrid.js
declare namespace ಠ_ಠ.clutz.goog.json.hybrid {
  /**
   * Attempts to parse the JSON string natively, falling back to
   * `goog.json.parse` if unsuccessful.
   * @param jsonString JSON string to parse.
   */
  function parse (a : string ) : GlobalObject | null ;
  /**
   * Attempts to serialize the JSON string natively, falling back to
   * `goog.json.serialize` if unsuccessful.
   * @param obj JavaScript object to serialize to JSON.
   */
  function stringify (a : GlobalObject ) : string ;
}
declare module 'goog:goog.json.hybrid' {
  import hybrid = ಠ_ಠ.clutz.goog.json.hybrid;
  export = hybrid;
}
