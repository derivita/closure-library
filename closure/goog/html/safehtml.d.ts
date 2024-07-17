import { SafeScript } from './safescript.js';
import { SafeStyle } from './safestyle.js';
import { SafeStyleSheet } from './safestylesheet.js';
import { SafeUrl } from './safeurl.js';
import { TagName } from '../dom/tagname.js';
import { TrustedResourceUrl } from './trustedresourceurl.js';
import { TypedString } from '../string/typedstring.js';
/**
 * A string that is safe to use in HTML context in DOM APIs and HTML documents.
 *
 * A SafeHtml is a string-like object that carries the security type contract
 * that its value as a string will not cause untrusted script execution when
 * evaluated as HTML in a browser.
 *
 * Values of this type are guaranteed to be safe to use in HTML contexts,
 * such as, assignment to the innerHTML DOM property, or interpolation into
 * a HTML template in HTML PC_DATA context, in the sense that the use will not
 * result in a Cross-Site-Scripting vulnerability.
 *
 * Instances of this type must be created via the factory methods
 * (`SafeHtml.create`, `SafeHtml.htmlEscape`),
 * etc and not by invoking its constructor. The constructor intentionally takes
 * an extra parameter that cannot be constructed outside of this file and the
 * type is immutable; hence only a default instance corresponding to the empty
 * string can be obtained via constructor invocation.
 *
 * Creating SafeHtml objects HAS SIDE-EFFECTS due to calling Trusted Types Web
 * API.
 *
 * Note that there is no `SafeHtml.fromConstant`. The reason is that
 * the following code would create an unsafe HTML:
 *
 * ```
 * SafeHtml.concat(
 * SafeHtml.fromConstant(Const.from('<script>')),
 * SafeHtml.htmlEscape(userInput),
 * SafeHtml.fromConstant(Const.from('<\/script>')));
 * ```
 *
 * There's `goog.dom.constHtmlToNode` to create a node from constant strings
 * only.
 */
declare class SafeHtml implements TypedString {
    constructor(value: TrustedHTML | string, token: object);
    /**
     * Returns this SafeHtml's value as string.
     *
     * IMPORTANT: In code where it is security relevant that an object's type is
     * indeed `SafeHtml`, use `SafeHtml.unwrap` instead of
     * this method. If in doubt, assume that it's security relevant. In
     * particular, note that goog.html functions which return a goog.html type do
     * not guarantee that the returned instance is of the right type. For example:
     *
     * <pre>
     * var fakeSafeHtml = new String('fake');
     * fakeSafeHtml.__proto__ = SafeHtml.prototype;
     * var newSafeHtml = SafeHtml.htmlEscape(fakeSafeHtml);
     * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
     * // SafeHtml.htmlEscape() as fakeSafeHtml
     * // instanceof SafeHtml.
     * </pre>
     */
    getTypedStringValue(): string;
    /**
     * Returns a string-representation of this value.
     *
     * To obtain the actual string value wrapped in a SafeHtml, use
     * `SafeHtml.unwrap`.
     */
    toString(): string;
    /**
     * Performs a runtime check that the provided object is indeed a SafeHtml
     * object, and returns its value.
     */
    static unwrap(safeHtml: SafeHtml): string;
    /**
     * Unwraps value as TrustedHTML if supported or as a string if not.
     */
    static unwrapTrustedHTML(safeHtml: SafeHtml): TrustedHTML | string;
    /**
     * Returns HTML-escaped text as a SafeHtml object.
     */
    static htmlEscape(textOrHtml: SafeHtml.TextOrHtml_): SafeHtml;
    /**
     * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
     * &lt;br&gt;.
     */
    static htmlEscapePreservingNewlines(textOrHtml: SafeHtml.TextOrHtml_): SafeHtml;
    /**
     * Returns HTML-escaped text as a SafeHtml object, with newlines changed to
     * &lt;br&gt; and escaping whitespace to preserve spatial formatting.
     * Character entity #160 is used to make it safer for XML.
     */
    static htmlEscapePreservingNewlinesAndSpaces(textOrHtml: SafeHtml.TextOrHtml_): SafeHtml;
    /**
     * Converts an arbitrary string into an HTML comment by HTML-escaping the
     * contents and embedding the result between HTML comment markers.
     *
     * Escaping is needed because Internet Explorer supports conditional comments
     * and so may render HTML markup within comments.
     */
    static comment(text: string): SafeHtml;
    /**
     * Creates a SafeHtml content consisting of a tag with optional attributes and
     * optional content.
     *
     * For convenience tag names and attribute names are accepted as regular
     * strings, instead of Const. Nevertheless, you should not pass
     * user-controlled values to these parameters. Note that these parameters are
     * syntactically validated at runtime, and invalid values will result in
     * an exception.
     *
     * Example usage:
     *
     * SafeHtml.create('br');
     * SafeHtml.create('div', {'class': 'a'});
     * SafeHtml.create('p', {}, 'a');
     * SafeHtml.create('p', {}, SafeHtml.create('br'));
     *
     * SafeHtml.create('span', {
     * 'style': {'margin': '0'}
     * });
     *
     * To guarantee SafeHtml's type contract is upheld there are restrictions on
     * attribute values and tag names.
     *
     * - For attributes which contain script code (on*), a Const is
     * required.
     * - For attributes which contain style (style), a SafeStyle or a
     * SafeStyle.PropertyMap is required.
     * - For attributes which are interpreted as URLs (e.g. src, href) a
     * SafeUrl, Const or string is required. If a string
     * is passed, it will be sanitized with SafeUrl.sanitize().
     * - For tags which can load code or set security relevant page metadata,
     * more specific SafeHtml.create*() functions must be used. Tags
     * which are not supported by this function are applet, base, embed, iframe,
     * link, math, meta, object, script, style, svg, and template.
     */
    static create(tagName: TagName | string, attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null, content?: SafeHtml.TextOrHtml_ | SafeHtml.TextOrHtml_[]): SafeHtml;
    /**
     * Creates a SafeHtml representing an iframe tag.
     *
     * This by default restricts the iframe as much as possible by setting the
     * sandbox attribute to the empty string. If the iframe requires less
     * restrictions, set the sandbox attribute as tight as possible, but do not
     * rely on the sandbox as a security feature because it is not supported by
     * older browsers. If a sandbox is essential to security (e.g. for third-party
     * frames), use createSandboxIframe which checks for browser support.
     */
    static createIframe(src?: TrustedResourceUrl | null, srcdoc?: SafeHtml | null, attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null, content?: SafeHtml.TextOrHtml_ | SafeHtml.TextOrHtml_[]): SafeHtml;
    /**
     * Creates a SafeHtml representing a sandboxed iframe tag.
     *
     * The sandbox attribute is enforced in its most restrictive mode, an empty
     * string. Consequently, the security requirements for the src and srcdoc
     * attributes are relaxed compared to SafeHtml.createIframe. This function
     * will throw on browsers that do not support the sandbox attribute, as
     * determined by SafeHtml.canUseSandboxIframe.
     *
     * The SafeHtml returned by this function can trigger downloads with no
     * user interaction on Chrome (though only a few, further attempts are
     * blocked). Firefox and IE will block all downloads from the sandbox.
     */
    static createSandboxIframe(src?: string | SafeUrl, srcdoc?: string, attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    }, content?: SafeHtml.TextOrHtml_ | SafeHtml.TextOrHtml_[]): SafeHtml;
    /**
     * Checks if the user agent supports sandboxed iframes.
     */
    static canUseSandboxIframe(): boolean;
    /**
     * Creates a SafeHtml representing a script tag with the src attribute.
     */
    static createScriptSrc(src: TrustedResourceUrl, attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null): SafeHtml;
    /**
     * Creates a SafeHtml representing a script tag. Does not allow the language,
     * src, text or type attributes to be set.
     */
    static createScript(script: SafeScript | SafeScript[], attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null): SafeHtml;
    /**
     * Creates a SafeHtml representing a style tag. The type attribute is set
     * to "text/css".
     */
    static createStyle(styleSheet: SafeStyleSheet | SafeStyleSheet[], attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null): SafeHtml;
    /**
     * Creates a SafeHtml representing a meta refresh tag.
     */
    static createMetaRefresh(url: SafeUrl | string, secs?: number): SafeHtml;
    /**
     * Creates a new SafeHtml object by joining the parts with separator.
     */
    static join(separator: SafeHtml.TextOrHtml_, parts: (SafeHtml.TextOrHtml_ | SafeHtml.TextOrHtml_[])[]): SafeHtml;
    /**
     * Creates a new SafeHtml object by concatenating values.
     */
    static concat(...var_args: (SafeHtml.TextOrHtml_ | SafeHtml.TextOrHtml_[])[]): SafeHtml;
    implementsGoogStringTypedString: boolean;
    static ENABLE_ERROR_MESSAGES: boolean;
    /**
     * Whether the `style` attribute is supported. Set to false to avoid the byte
     * weight of `SafeStyle` where unneeded. An error will be thrown if
     * the `style` attribute is used.
     */
    static SUPPORT_STYLE_ATTRIBUTE: boolean;
    /**
     * Coerces an arbitrary object into a SafeHtml object.
     *
     * If `textOrHtml` is already of type `SafeHtml`, the same
     * object is returned. Otherwise, `textOrHtml` is coerced to string, and
     * HTML-escaped.
     * @param textOrHtml The text or SafeHtml to coerce.
     * @return The resulting SafeHtml object.
     */
    static from(a: SafeHtml.TextOrHtml_): SafeHtml;
    /**
     * A SafeHtml instance corresponding to the HTML doctype: "<!DOCTYPE html>".
     */
    static DOCTYPE_HTML: SafeHtml;
    /**
     * A SafeHtml instance corresponding to the empty string.
     */
    static EMPTY: SafeHtml;
    /**
     * A SafeHtml instance corresponding to the <br> tag.
     */
    static BR: SafeHtml;
}
declare namespace SafeHtml {
    /**
     * Shorthand for union of types that can sensibly be converted to strings
     * or might already be SafeHtml (as SafeHtml is a TypedString).
     */
    type TextOrHtml_ = string | number | boolean | TypedString;
    type AttributeValue = string | number | TypedString | SafeStyle.PropertyMap | undefined | null;
}
export { SafeHtml };
