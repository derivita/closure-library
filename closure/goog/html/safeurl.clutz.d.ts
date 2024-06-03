//!! generated by clutz.
// Generated from html/safeurl.js
declare namespace ಠ_ಠ.clutz.goog.html {
  /**
   * A string that is safe to use in URL context in DOM APIs and HTML documents.
   *
   * A SafeUrl is a string-like object that carries the security type contract
   * that its value as a string will not cause untrusted script execution
   * when evaluated as a hyperlink URL in a browser.
   *
   * Values of this type are guaranteed to be safe to use in URL/hyperlink
   * contexts, such as assignment to URL-valued DOM properties, in the sense that
   * the use will not result in a Cross-Site-Scripting vulnerability. Similarly,
   * SafeUrls can be interpolated into the URL context of an HTML template (e.g.,
   * inside a href attribute). However, appropriate HTML-escaping must still be
   * applied.
   *
   * Note that, as documented in `goog.html.SafeUrl.unwrap`, this type's
   * contract does not guarantee that instances are safe to interpolate into HTML
   * without appropriate escaping.
   *
   * Note also that this type's contract does not imply any guarantees regarding
   * the resource the URL refers to.  In particular, SafeUrls are <b>not</b>
   * safe to use in a context where the referred-to resource is interpreted as
   * trusted code, e.g., as the src of a script tag.
   *
   * Instances of this type must be created via the factory methods
   * (`goog.html.SafeUrl.fromConstant`, `goog.html.SafeUrl.sanitize`),
   * etc and not by invoking its constructor. The constructor intentionally takes
   * an extra parameter that cannot be constructed outside of this file and the
   * type is immutable; hence only a default instance corresponding to the empty
   * string can be obtained via constructor invocation.
   */
  class SafeUrl implements ಠ_ಠ.clutz.goog.string.TypedString {
    private noStructuralTyping_goog_html_SafeUrl : any;
    /**
     * A string that is safe to use in URL context in DOM APIs and HTML documents.
     *
     * A SafeUrl is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution
     * when evaluated as a hyperlink URL in a browser.
     *
     * Values of this type are guaranteed to be safe to use in URL/hyperlink
     * contexts, such as assignment to URL-valued DOM properties, in the sense that
     * the use will not result in a Cross-Site-Scripting vulnerability. Similarly,
     * SafeUrls can be interpolated into the URL context of an HTML template (e.g.,
     * inside a href attribute). However, appropriate HTML-escaping must still be
     * applied.
     *
     * Note that, as documented in `goog.html.SafeUrl.unwrap`, this type's
     * contract does not guarantee that instances are safe to interpolate into HTML
     * without appropriate escaping.
     *
     * Note also that this type's contract does not imply any guarantees regarding
     * the resource the URL refers to.  In particular, SafeUrls are <b>not</b>
     * safe to use in a context where the referred-to resource is interpreted as
     * trusted code, e.g., as the src of a script tag.
     *
     * Instances of this type must be created via the factory methods
     * (`goog.html.SafeUrl.fromConstant`, `goog.html.SafeUrl.sanitize`),
     * etc and not by invoking its constructor. The constructor intentionally takes
     * an extra parameter that cannot be constructed outside of this file and the
     * type is immutable; hence only a default instance corresponding to the empty
     * string can be obtained via constructor invocation.
     */
    constructor (value : string , token : GlobalObject ) ;
    /**
     * Returns this SafeUrl's value as a string.
     *
     * IMPORTANT: In code where it is security relevant that an object's type is
     * indeed `SafeUrl`, use `goog.html.SafeUrl.unwrap` instead of this
     * method. If in doubt, assume that it's security relevant. In particular, note
     * that goog.html functions which return a goog.html type do not guarantee that
     * the returned instance is of the right type.
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     */
    getTypedStringValue ( ) : any ;
    implementsGoogStringTypedString : boolean ;
    /**
     * Returns a string-representation of this value.
     *
     * To obtain the actual string value wrapped in a SafeUrl, use
     * `goog.html.SafeUrl.unwrap`.
     */
    toString ( ) : string ;
    /**
     * A SafeUrl corresponding to the special about:blank url.
     */
    static ABOUT_BLANK : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * The innocuous string generated by goog.html.SafeUrl.sanitize when passed
     * an unsafe URL.
     *
     * about:invalid is registered in
     * http://www.w3.org/TR/css3-values/#about-invalid.
     * http://tools.ietf.org/html/rfc6694#section-2.2.1 permits about URLs to
     * contain a fragment, which is not to be considered when determining if an
     * about URL is well-known.
     *
     * Using about:invalid seems preferable to using a fixed data URL, since
     * browsers might choose to not report CSP violations on it, as legitimate
     * CSS function calls to attr() can result in this URL being produced. It is
     * also a standard URL which matches exactly the semantics we need:
     * "The about:invalid URI references a non-existent document with a generic
     * error condition. It can be used when a URI is necessary, but the default
     * value shouldn't be resolveable as any type of document".
     */
    static INNOCUOUS_STRING : string ;
    /**
     * `INNOCUOUS_STRING` wrapped in a `SafeUrl`.
     */
    static INNOCUOUS_URL : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Extracts the scheme from the given URL. If the URL is relative, https: is
     * assumed.
     * @param url The URL to extract the scheme from.
     */
    static extractScheme (url : string ) : string | undefined ;
    /**
     * Creates a SafeUrl wrapping a blob URL for the given `blob`.
     *
     * The blob URL is created with `URL.createObjectURL`. If the MIME type
     * for `blob` is not of a known safe audio, image or video MIME type,
     * then the SafeUrl will wrap {@link #INNOCUOUS_STRING}.
     *
     * Note: Call {@link revokeObjectUrl} on the URL after it's used
     * to prevent memory leaks.
     */
    static fromBlob (blob : Blob ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     * @param url A compile-time-constant string from which to create a SafeUrl.
     */
    static fromConstant (url : ಠ_ಠ.clutz.goog.string.Const ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a `data:` URL, after validating it matches a
     * known-safe media MIME type. If it doesn't match, return
     * `goog.html.SafeUrl.INNOCUOUS_URL`.
     * @param dataUrl A valid base64 data URL with one of the whitelisted media MIME types.
     */
    static fromDataUrl (dataUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a fb-messenger://share URL.
     * @param facebookMessengerUrl A facebook messenger URL.
     */
    static fromFacebookMessengerUrl (facebookMessengerUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a blob URL created for a MediaSource.
     */
    static fromMediaSource (mediaSource : MediaSource ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a sip: URL. We only allow urls that consist of an
     * email address. The characters '?' and '#' are not allowed in the local part
     * of the email address.
     * @param sipUrl A sip URL.
     */
    static fromSipUrl (sipUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a sms: URL.
     * @param smsUrl A sms URL.
     */
    static fromSmsUrl (smsUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a ssh: URL.
     * @param sshUrl A ssh URL.
     */
    static fromSshUrl (sshUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a tel: URL.
     * @param telUrl A tel URL.
     */
    static fromTelUrl (telUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl from TrustedResourceUrl. This is safe because
     * TrustedResourceUrl is more tightly restricted than SafeUrl.
     */
    static fromTrustedResourceUrl (trustedResourceUrl : ಠ_ಠ.clutz.goog.html.TrustedResourceUrl ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl wrapping a whatsapp://send URL.
     * @param whatsAppUrl A WhatsApp URL.
     */
    static fromWhatsAppUrl (whatsAppUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Revokes an object URL created for a safe URL created {@link fromBlob()}.
     * @param safeUrl SafeUrl wrapping a blob object.
     */
    static revokeObjectUrl (safeUrl : ಠ_ಠ.clutz.goog.html.SafeUrl ) : void ;
    /**
     * Creates a SafeUrl object from `url`. If `url` is a
     * `goog.html.SafeUrl` then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs. If validation fails,
     * `goog.html.SafeUrl.INNOCUOUS_URL` is returned.
     *
     * `url` may be a URL with the `http:`, `https:`, `mailto:`, `ftp:` or `data`
     * scheme, or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     * @param url The URL to validate.
     */
    static sanitize (url : string | ಠ_ಠ.clutz.goog.string.TypedString ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl object from `url`. If `url` is a
     * `goog.html.SafeUrl` then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs.
     *
     * `url` may be a URL with the http, https, mailto or ftp scheme,
     * or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     *
     * This function asserts (using goog.asserts) that the URL matches this pattern.
     * If it does not, in addition to failing the assert, an innocuous URL will be
     * returned.
     * @param url The URL to validate.
     * @param opt_allowDataUrl Whether to allow valid data: URLs.
     */
    static sanitizeAssertUnchanged (url : string | ಠ_ಠ.clutz.goog.string.TypedString , opt_allowDataUrl ? : boolean ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Sanitizes a Chrome extension URL to SafeUrl, given a compile-time-constant
     * extension identifier. Can also be restricted to chrome extensions.
     * @param url The url to sanitize. Should start with the extension scheme and the extension identifier.
     * @param extensionId The extension id to accept, as a compile-time constant or an array of those.
     */
    static sanitizeChromeExtensionUrl (url : string , extensionId : ಠ_ಠ.clutz.goog.string.Const | ಠ_ಠ.clutz.goog.string.Const [] ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Sanitizes a Edge extension URL to SafeUrl, given a compile-time-constant
     * extension identifier. Can also be restricted to chrome extensions.
     * @param url The url to sanitize. Should start with the extension scheme and the extension identifier.
     * @param extensionId The extension id to accept, as a compile-time constant or an array of those.
     */
    static sanitizeEdgeExtensionUrl (url : string , extensionId : ಠ_ಠ.clutz.goog.string.Const | ಠ_ಠ.clutz.goog.string.Const [] ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Sanitizes a Firefox extension URL to SafeUrl, given a compile-time-constant
     * extension identifier. Can also be restricted to chrome extensions.
     * @param url The url to sanitize. Should start with the extension scheme and the extension identifier.
     * @param extensionId The extension id to accept, as a compile-time constant or an array of those.
     */
    static sanitizeFirefoxExtensionUrl (url : string , extensionId : ಠ_ಠ.clutz.goog.string.Const | ಠ_ಠ.clutz.goog.string.Const [] ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Creates a SafeUrl object from `url`. If `url` is a
     * `goog.html.SafeUrl` then it is simply returned. Otherwise javascript: URLs
     * are rejected.
     *
     * This function asserts (using goog.asserts) that the URL scheme is not
     * javascript. If it is, in addition to failing the assert, an innocuous URL
     * will be returned.
     * @param url The URL to validate.
     */
    static sanitizeJavascriptUrlAssertUnchanged (url : string | ಠ_ಠ.clutz.goog.string.TypedString ) : ಠ_ಠ.clutz.goog.html.SafeUrl ;
    /**
     * Attempts to create a SafeUrl wrapping a `data:` URL, after validating it
     * matches a known-safe media MIME type. If it doesn't match, return `null`.
     * @param dataUrl A valid base64 data URL with one of the whitelisted media MIME types.
     */
    static tryFromDataUrl (dataUrl : string ) : ಠ_ಠ.clutz.goog.html.SafeUrl | null ;
    /**
     * Attempts to create a SafeUrl object from `url`. The input string is validated
     * to match a pattern of commonly used safe URLs. If validation fails, `null` is
     * returned.
     *
     * `url` may be a URL with the `http:`, `https:`, `mailto:`, `ftp:` or `data`
     * scheme, or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     * @param url The URL to validate.
     */
    static trySanitize (url : string | ಠ_ಠ.clutz.goog.string.TypedString ) : ಠ_ಠ.clutz.goog.html.SafeUrl | null ;
    /**
     * Performs a runtime check that the provided object is indeed a SafeUrl
     * object, and returns its value.
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of  browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     * @param safeUrl The object to extract from.
     */
    static unwrap (safeUrl : ಠ_ಠ.clutz.goog.html.SafeUrl ) : string ;
  }
}
declare module 'goog:goog.html.SafeUrl' {
  import SafeUrl = ಠ_ಠ.clutz.goog.html.SafeUrl;
  export default SafeUrl;
}
