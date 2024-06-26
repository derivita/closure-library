//!! generated by clutz.
// Generated from format/jsonprettyprinter.js
declare namespace ಠ_ಠ.clutz.goog.format {
  /**
   * Formats a JSON object as a string, properly indented for display.  Supports
   * displaying the string as text or html.  Users can also specify their own
   * set of delimiters for different environments.  For example, the JSON object:
   *
   * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
   *
   * Will be displayed like this:
   *
   * <code>{
   * "a": 1,
   * "b": {
   * "c": null,
   * "d": true,
   * "e": [
   * 1,
   * 2
   * ]
   * }
   * }</code>
   */
  class JsonPrettyPrinter {
    private noStructuralTyping_goog_format_JsonPrettyPrinter : any;
    /**
     * Formats a JSON object as a string, properly indented for display.  Supports
     * displaying the string as text or html.  Users can also specify their own
     * set of delimiters for different environments.  For example, the JSON object:
     *
     * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
     *
     * Will be displayed like this:
     *
     * <code>{
     * "a": 1,
     * "b": {
     * "c": null,
     * "d": true,
     * "e": [
     * 1,
     * 2
     * ]
     * }
     * }</code>
     * @param opt_delimiters Container for the various strings to use to delimit objects, arrays, newlines, and other pieces of the output.
     */
    constructor (opt_delimiters ? : ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter.TextDelimiters | null ) ;
    /**
     * Formats a JSON object as a string, properly indented for display.
     * @param json The object to pretty print. It could be a JSON object, a string representing a JSON object, or any other type.
     */
    format (json : any ) : string ;
    /**
     * Formats a JSON object as a SafeHtml, properly indented for display.
     * @param json The object to pretty print. It could be a JSON object, a string representing a JSON object, or any other type.
     */
    formatSafeHtml (json : any ) : ಠ_ಠ.clutz.goog.html.SafeHtml ;
  }
}
declare module 'goog:goog.format.JsonPrettyPrinter' {
  import JsonPrettyPrinter = ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter;
  export default JsonPrettyPrinter;
}
// Generated from format/jsonprettyprinter.js
declare namespace ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter {
  /**
   * A container for the delimiting characters used to display the JSON string
   * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
   * It escapes the names and values before they are added to the output.
   * Use this class together with goog.format.JsonPrettyPrinter#formatSafeHtml.
   */
  class SafeHtmlDelimiters extends ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter.TextDelimiters {
    private noStructuralTyping_goog_format_JsonPrettyPrinter_SafeHtmlDelimiters : any;
    formatName (name : string ) : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    formatValue (value : string , typeOf : string ) : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Return a class name for the given type.
     * @param typeOf The type of the value.
     */
    protected getValueCssName (typeOf : string ) : string ;
  }
}
declare module 'goog:goog.format.JsonPrettyPrinter.SafeHtmlDelimiters' {
  import SafeHtmlDelimiters = ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter.SafeHtmlDelimiters;
  export default SafeHtmlDelimiters;
}
// Generated from format/jsonprettyprinter.js
declare namespace ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter {
  /**
   * A container for the delimiting characters used to display the JSON string
   * to a text display.  Each delimiter is a publicly accessible property of
   * the object, which makes it easy to tweak delimiters to specific environments.
   */
  class TextDelimiters {
    private noStructuralTyping_goog_format_JsonPrettyPrinter_TextDelimiters : any;
    /**
     * Represents the end of an array in the output.
     */
    arrayEnd : string ;
    /**
     * Represents the start of an array in the output.
     */
    arrayStart : string ;
    /**
     * Formats a property name before adding it to the output.
     * @param name The property name.
     */
    formatName (name : string ) : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Formats a value before adding it to the output.
     * @param value The value.
     * @param typeOf The type of the value obtained by goog.typeOf.
     */
    formatValue (value : string , typeOf : string ) : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Represents the number of spaces to indent each sub-property of the JSON.
     */
    indent : number ;
    /**
     * Represents a newline character in the output.  Used to begin a new line.
     */
    lineBreak : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Represents the string used to separate property names from property values in
     * the output.
     */
    nameValueSeparator : string | ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Represents the end of an object in the output.
     */
    objectEnd : string ;
    /**
     * Represents the start of an object in the output.
     */
    objectStart : string ;
    /**
     * A string that's placed after a property name in the output.  Useful for
     * wrapping a property name in an html tag.
     */
    postName : string ;
    /**
     * A string that's placed after a property value in the output.  Useful for
     * wrapping a property value in an html tag.
     */
    postValue : string ;
    /**
     * A string that's placed before a property name in the output.  Useful for
     * wrapping a property name in an html tag.
     */
    preName : string ;
    /**
     * A string that's placed before a property value in the output.  Useful for
     * wrapping a property value in an html tag.
     */
    preValue : string ;
    /**
     * Represents the string used to separate properties in the output.
     */
    propertySeparator : string ;
    /**
     * Represents a space character in the output.  Used to indent properties a
     * certain number of spaces, and to separate property names from property
     * values.
     */
    space : string ;
  }
}
declare module 'goog:goog.format.JsonPrettyPrinter.TextDelimiters' {
  import TextDelimiters = ಠ_ಠ.clutz.goog.format.JsonPrettyPrinter.TextDelimiters;
  export default TextDelimiters;
}
