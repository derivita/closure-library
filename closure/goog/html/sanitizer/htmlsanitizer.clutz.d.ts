//!! generated by clutz.
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
}
declare module 'goog:goog.html.sanitizer' {
  import sanitizer = ಠ_ಠ.clutz.goog.html.sanitizer;
  export = sanitizer;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Creates an HTML sanitizer.
   */
  class HtmlSanitizer extends ಠ_ಠ.clutz.goog.html.sanitizer.SafeDomTreeProcessor {
    private noStructuralTyping_goog_html_sanitizer_HtmlSanitizer : any;
    /**
     * Creates an HTML sanitizer.
     */
    constructor (opt_builder ? : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ) ;
    createElementWithoutAttributes (dirtyElement ? : any ) : any ;
    createTextNode (dirtyNode ? : any ) : any ;
    preProcessHtml (unsanitizedHtml ? : any ) : any ;
    processElementAttribute (dirtyElement ? : any , attribute ? : any ) : any ;
    processRoot (newRoot ? : any ) : void ;
    /**
     * Parses the DOM tree of a given HTML string, then walks the tree. For each
     * element, it creates a new sanitized version, applies sanitized attributes,
     * and returns a SafeHtml object representing the sanitized tree.
     */
    sanitize (unsanitizedHtml : string ) : ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Parses the DOM tree of a given HTML string, then walks the tree. For each
     * element, it creates a new sanitized version, applies sanitized attributes,
     * and returns a span element containing the sanitized content. The root element
     * might define a class name to restrict the visibility of CSS rules contained
     * in tree.
     */
    sanitizeToDomNode (unsanitizedHtml : string ) : HTMLSpanElement ;
    /**
     * Sanitizes a HTML string using a sanitizer with default options.
     */
    static sanitize (unsanitizedHtml : string ) : ಠ_ಠ.clutz.goog.html.SafeHtml ;
  }
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizer' {
  import HtmlSanitizer = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer;
  export default HtmlSanitizer;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer {
  /**
   * The builder for the HTML Sanitizer. All methods except build return
   * `this`.
   */
  class Builder {
    private noStructuralTyping_goog_html_sanitizer_HtmlSanitizer_Builder : any;
    /**
     * Adds the original tag name in the data attribute 'original-tag' when unknown
     * tags are sanitized to &lt;span&rt;, so that caller can distinguish them from
     * actual &lt;span&rt; tags.
     */
    addOriginalTagNames ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Allows inline CSS styles.
     */
    allowCssStyles ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Extends the list of allowed custom element tags.
     */
    allowCustomElementTag (customElementTagName : string , customElementAttributes ? : string [] ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Extends the list of allowed custom element tags.
     */
    allowCustomElementTags (customElementTagWhitelist : string [] ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Extends the list of allowed data attributes.
     */
    allowDataAttributes (dataAttributeWhitelist : string [] ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Allows form tags in the HTML. Without this all form tags and content will be
     * dropped.
     */
    allowFormTag ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Allows STYLE tags. Note that the sanitizer wraps the output of each call to
     * {@link sanitize} with a SPAN tag, give it a random ID unique across multiple
     * calls, and then restrict all CSS rules found inside STYLE tags to only apply
     * to children of the SPAN tag. This means that CSS rules in STYLE tags will
     * only apply to content provided in the same call to {@link sanitize}. This
     * feature is not compatible with {@link inlineStyleRules}.
     */
    allowStyleTag ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Builds and returns a goog.html.sanitizer.HtmlSanitizer object.
     */
    build ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer ;
    /**
     * Converts rules in STYLE tags into style attributes on the tags they apply to.
     * This feature is not compatible with {@link withStyleContainer} and {@link
     * allowStyleTag}. This method requires {@link allowCssStyles} (otherwise rules
     * would be deleted after being inlined), and is not compatible with {@link
     * allowStyleTag}.
     */
    inlineStyleRules ( ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Allows only the provided whitelist of attributes, possibly setting a custom
     * policy for them. The set of tag/attribute combinations need to be a subset of
     * the currently allowed combinations.
     * <p>
     * Note that you cannot define a generic handler for an attribute if only a
     * tag-specific one is present, and vice versa. To configure the sanitizer to
     * accept an attribute only for a specific tag when only a generic handler is
     * whitelisted, use the goog.html.sanitizer.HtmlSanitizerPolicyHints parameter
     * and simply reject the attribute in unwanted tags.
     * <p>
     * Also note that the sanitizer's policy is still called after the provided one,
     * to ensure that supplying misconfigured policy cannot introduce
     * vulnerabilities. To completely override an existing attribute policy or to
     * allow new attributes, see the goog.html.sanitizer.unsafe package.
     * @param attrWhitelist The subset of attributes that the sanitizer will accept. Attributes can come in of two forms: - string: allow all values for this attribute on all tags. - HtmlSanitizerAttributePolicy: allows specifying a policy for a particular tag. The tagName can be "*", which means all tags. If no policy is passed, the default is to allow all values. The tag and attribute names are case-insensitive. Note that the policy for id, URLs, names etc is controlled separately (using withCustom* methods).
     */
    onlyAllowAttributes (attrWhitelist : ( string | ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerAttributePolicy ) [] ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Allows only the provided whitelist of tags. Tags still need to be in the
     * TagWhitelist to be allowed.
     * <p>
     * SPAN tags are ALWAYS ALLOWED as part of the mechanism required to preserve
     * the HTML tree structure (when removing non-blacklisted tags and
     * non-whitelisted tags).
     */
    onlyAllowTags (tagWhitelist : string [] ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Sets a custom name policy.
     */
    withCustomNamePolicy (customNamePolicy : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicy ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Sets a custom network URL policy.
     */
    withCustomNetworkRequestUrlPolicy (customNetworkReqUrlPolicy : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerUrlPolicy ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Sets a custom token policy.
     */
    withCustomTokenPolicy (customTokenPolicy : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicy ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Sets a custom non-network URL policy.
     */
    withCustomUrlPolicy (customUrlPolicy : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerUrlPolicy ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
    /**
     * Fixes the ID of the style container used for CSS rules found in STYLE tags,
     * and disables automatic wrapping with the container. This allows multiple
     * calls to {@link sanitize} to share STYLE rules. If opt_styleContainer is
     * missing, the sanitizer will stop restricting the scope of CSS rules
     * altogether. Requires {@link allowStyleTag} to be called first.
     * @param opt_styleContainer An optional container ID to restrict the scope of any CSS rule found in STYLE tags.
     */
    withStyleContainer (opt_styleContainer ? : string ) : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder ;
  }
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizer.Builder' {
  import Builder = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizer.Builder;
  export default Builder;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Type for attribute policy configuration.
   */
  type HtmlSanitizerAttributePolicy = { attributeName : string , policy : ( ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicy ) | null , tagName : string } ;
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizerAttributePolicy' {
  import HtmlSanitizerAttributePolicy = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerAttributePolicy;
  export default HtmlSanitizerAttributePolicy;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Type for a policy function.
   */
  type HtmlSanitizerPolicy = (a : string , b ? : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicyHints , c ? : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicyContext , d ? : (a : string , b ? : any , c ? : any , d ? : any ) => string | null ) => string | null ;
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizerPolicy' {
  import HtmlSanitizerPolicy = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicy;
  export default HtmlSanitizerPolicy;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Type for optional context objects to the policy handler functions.
   */
  type HtmlSanitizerPolicyContext = { cssStyle ? : CSSStyleDeclaration | null } ;
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizerPolicyContext' {
  import HtmlSanitizerPolicyContext = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicyContext;
  export default HtmlSanitizerPolicyContext;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Type for optional hints to policy handler functions.
   */
  type HtmlSanitizerPolicyHints = { attributeName ? : string , cssProperty ? : string , tagName ? : string } ;
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizerPolicyHints' {
  import HtmlSanitizerPolicyHints = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicyHints;
  export default HtmlSanitizerPolicyHints;
}
// Generated from html/sanitizer/htmlsanitizer.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  /**
   * Type for a URL policy function.
   */
  type HtmlSanitizerUrlPolicy = (a : string , b ? : ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerPolicyHints ) => ಠ_ಠ.clutz.goog.html.SafeUrl | null ;
}
declare module 'goog:goog.html.sanitizer.HtmlSanitizerUrlPolicy' {
  import HtmlSanitizerUrlPolicy = ಠ_ಠ.clutz.goog.html.sanitizer.HtmlSanitizerUrlPolicy;
  export default HtmlSanitizerUrlPolicy;
}
