import { Const } from '../string/const.js';
import { TypedString } from '../string/typedstring.js';
/**
 * A string-like object which represents JavaScript code and that carries the
 * security type contract that its value, as a string, will not cause execution
 * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript
 * in a browser.
 *
 * Instances of this type must be created via the factory method
 * `SafeScript.fromConstant` and not by invoking its constructor. The
 * constructor intentionally takes an extra parameter that cannot be constructed
 * outside of this file and the type is immutable; hence only a default instance
 * corresponding to the empty string can be obtained via constructor invocation.
 *
 * A SafeScript's string representation can safely be interpolated as the
 * content of a script element within HTML. The SafeScript string should not be
 * escaped before interpolation.
 *
 * Note that the SafeScript might contain text that is attacker-controlled but
 * that text should have been interpolated with appropriate escaping,
 * sanitization and/or validation into the right location in the script, such
 * that it is highly constrained in its effect (for example, it had to match a
 * set of whitelisted words).
 *
 * A SafeScript can be constructed via security-reviewed unchecked
 * conversions. In this case producers of SafeScript must ensure themselves that
 * the SafeScript does not contain unsafe script. Note in particular that
 * `&lt;` is dangerous, even when inside JavaScript strings, and so should
 * always be forbidden or JavaScript escaped in user controlled input. For
 * example, if `&lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;"` were
 * interpolated inside a JavaScript string, it would break out of the context
 * of the original script element and `evil` would execute. Also note
 * that within an HTML script (raw text) element, HTML character references,
 * such as "&lt;" are not allowed. See
 * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.
 * Creating SafeScript objects HAS SIDE-EFFECTS due to calling Trusted Types Web
 * API.
 */
declare class SafeScript implements TypedString {
    constructor(value: TrustedScript | string, token: object);
    /**
     * Returns a string-representation of this value.
     *
     * To obtain the actual string value wrapped in a SafeScript, use
     * `SafeScript.unwrap`.
     */
    toString(): string;
    /**
     * Creates a SafeScript object from a compile-time constant string.
     */
    static fromConstant(script: Const): SafeScript;
    /**
     * Creates a SafeScript JSON representation from anything that could be passed
     * to JSON.stringify.
     */
    static fromJson(val: any): SafeScript;
    /**
     * Returns this SafeScript's value as a string.
     *
     * IMPORTANT: In code where it is security relevant that an object's type is
     * indeed `SafeScript`, use `SafeScript.unwrap` instead of
     * this method. If in doubt, assume that it's security relevant. In
     * particular, note that goog.html functions which return a goog.html type do
     * not guarantee the returned instance is of the right type. For example:
     *
     * <pre>
     * var fakeSafeHtml = new String('fake');
     * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
     * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);
     * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
     * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml
     * // instanceof goog.html.SafeHtml.
     * </pre>
     */
    getTypedStringValue(): any;
    /**
     * Performs a runtime check that the provided object is indeed a
     * SafeScript object, and returns its value.
     */
    static unwrap(safeScript: SafeScript): string;
    /**
     * Unwraps value as TrustedScript if supported or as a string if not.
     */
    static unwrapTrustedScript(safeScript: SafeScript): TrustedScript | string;
    implementsGoogStringTypedString: any;
    /**
     * A SafeScript instance corresponding to the empty string.
     */
    static EMPTY: SafeScript;
}
export { SafeScript };
