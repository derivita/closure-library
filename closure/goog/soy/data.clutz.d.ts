//!! generated by clutz.
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
}
declare module 'goog:goog.soy.data' {
  import data = ಠ_ಠ.clutz.goog.soy.data;
  export = data;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * A string-like object that carries a content-type and a content direction.
   *
   * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
   * Instead, use a trusted, centrally reviewed library as endorsed by your team
   * to generate these objects. Otherwise, you risk accidentally creating
   * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
   * templates.
   */
  class SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedContent : any;
    /**
     * The already-safe content.
     */
    protected content : string ;
    /**
     * The content's direction; null if unknown and thus to be estimated when
     * necessary.
     */
    contentDir : ಠ_ಠ.clutz.goog.i18n.bidi.Dir | null ;
    /**
     * The context in which this content is safe from XSS attacks.
     */
    contentKind : ಠ_ಠ.clutz.goog.soy.data.SanitizedContentKind ;
    /**
     * Gets the already-safe content.
     */
    getContent ( ) : string ;
    renderAsElement ? : ( ) => GlobalElement ;
    renderElement ? : (a : GlobalElement | ShadowRoot ) => void ;
    /**
     * Converts sanitized content of kind HTML into SafeHtml
     */
    toSafeHtml ( ) : ಠ_ಠ.clutz.goog.html.SafeHtml ;
    /**
     * Converts sanitized content of kind URI into SafeUrl without modification.
     */
    toSafeUrl ( ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    toString ( ) : any ;
  }
}
declare module 'goog:goog.soy.data.SanitizedContent' {
  import SanitizedContent = ಠ_ಠ.clutz.goog.soy.data.SanitizedContent;
  export default SanitizedContent;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * A type of textual content.
   *
   * This is an enum of type Object so that these values are unforgeable.
   */
  type SanitizedContentKind = GlobalObject &{clutzEnumBrand: never} ;
  let SanitizedContentKind : {
    ATTRIBUTES : SanitizedContentKind ,
    CSS : SanitizedContentKind ,
    HTML : SanitizedContentKind ,
    JS : SanitizedContentKind ,
    STYLE : SanitizedContentKind ,
    TRUSTED_RESOURCE_URI : SanitizedContentKind ,
    URI : SanitizedContentKind ,
  };
}
declare module 'goog:goog.soy.data.SanitizedContentKind' {
  import SanitizedContentKind = ಠ_ಠ.clutz.goog.soy.data.SanitizedContentKind;
  export default SanitizedContentKind;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.CSS}.
   *
   * The content is non-attacker-exploitable CSS, such as {@code @import url(x)}.
   * The content direction is LTR.
   */
  class SanitizedCss extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedCss : any;
    /**
     * Converts SanitizedCss into SafeStyle.
     */
    toSafeStyle ( ) : ಠ_ಠ.clutz.goog.html.SafeStyle ;
    /**
     * Converts SanitizedCss into SafeStyleSheet.
     * Note: SanitizedCss in Soy represents both SafeStyle and SafeStyleSheet in
     * Closure. It's about to be split so that SanitizedCss represents only
     * SafeStyleSheet.
     */
    toSafeStyleSheet ( ) : ಠ_ಠ.clutz.goog.html.SafeStyleSheet ;
    /**
     * Checks if the value could be used as the Soy type {css}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {css}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedCss' {
  import SanitizedCss = ಠ_ಠ.clutz.goog.soy.data.SanitizedCss;
  export default SanitizedCss;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.HTML}.
   *
   * The content is a string of HTML that can safely be embedded in a PCDATA
   * context in your app.  If you would be surprised to find that an HTML
   * sanitizer produced `s` (e.g.  it runs code or fetches bad URLs) and
   * you wouldn't write a template that produces `s` on security or privacy
   * grounds, then don't pass `s` here. The default content direction is
   * unknown, i.e. to be estimated when necessary.
   */
  class SanitizedHtml extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedHtml : any;
    /**
     * Checks if the value could be used as the Soy type {html}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {html}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedHtml' {
  import SanitizedHtml = ಠ_ಠ.clutz.goog.soy.data.SanitizedHtml;
  export default SanitizedHtml;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.ATTRIBUTES}.
   *
   * The content should be safely embeddable within an open tag, such as a
   * key="value" pair. The content direction is LTR.
   */
  class SanitizedHtmlAttribute extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedHtmlAttribute : any;
    /**
     * Checks if the value could be used as the Soy type {attribute}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {attribute}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedHtmlAttribute' {
  import SanitizedHtmlAttribute = ಠ_ಠ.clutz.goog.soy.data.SanitizedHtmlAttribute;
  export default SanitizedHtmlAttribute;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.JS}.
   *
   * The content is JavaScript source that when evaluated does not execute any
   * attacker-controlled scripts. The content direction is LTR.
   */
  class SanitizedJs extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedJs : any;
    /**
     * Converts sanitized content of kind JS into SafeScript without modification.
     */
    toSafeScript ( ) : ಠ_ಠ.clutz.goog.html.SafeScript ;
    /**
     * Checks if the value could be used as the Soy type {js}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {js}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedJs' {
  import SanitizedJs = ಠ_ಠ.clutz.goog.soy.data.SanitizedJs;
  export default SanitizedJs;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type
   * {@link goog.soy.data.SanitizedContentKind.TRUSTED_RESOURCE_URI}.
   *
   * The content is a TrustedResourceUri chunk that is not under attacker control.
   * The content direction is LTR.
   */
  class SanitizedTrustedResourceUri extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedTrustedResourceUri : any;
    /**
     * Converts sanitized content into TrustedResourceUrl without modification.
     */
    toTrustedResourceUrl ( ) : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ;
    /**
     * Checks if the value could be used as the Soy type {trusted_resource_uri}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {trusted_resource_uri}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedTrustedResourceUri' {
  import SanitizedTrustedResourceUri = ಠ_ಠ.clutz.goog.soy.data.SanitizedTrustedResourceUri;
  export default SanitizedTrustedResourceUri;
}
// Generated from soy/data.js
declare namespace ಠ_ಠ.clutz.goog.soy.data {
  /**
   * Content of type {@link goog.soy.data.SanitizedContentKind.URI}.
   *
   * The content is a URI chunk that the caller knows is safe to emit in a
   * template. The content direction is LTR.
   */
  class SanitizedUri extends ಠ_ಠ.clutz.goog.soy.data.SanitizedContent {
    private noStructuralTyping_goog_soy_data_SanitizedUri : any;
    /**
     * Checks if the value could be used as the Soy type {uri}.
     */
    static isCompatibleWith (value : any ) : boolean ;
    /**
     * Checks if the value could be used as the Soy type {uri}.
     * Strict: disallows strings.
     */
    static isCompatibleWithStrict (value : any ) : boolean ;
  }
}
declare module 'goog:goog.soy.data.SanitizedUri' {
  import SanitizedUri = ಠ_ಠ.clutz.goog.soy.data.SanitizedUri;
  export default SanitizedUri;
}
