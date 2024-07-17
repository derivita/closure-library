import { SafeStyle } from '../safestyle.js';
import { SafeStyleSheet } from '../safestylesheet.js';
import { SafeUrl } from '../safeurl.js';
/**
 * Sanitizes the contents of a STYLE tag.
 * @param textContent The textual content of the STYLE tag.
 * @param opt_containerId The ID of a node that will contain the STYLE tag that includes the sanitized content, to restrict the effects of the rules being sanitized to descendants of this node.
 * @param opt_uriRewriter A URI rewriter that returns a SafeUrl.
 */
export declare function sanitizeStyleSheetString(textContent: string, opt_containerId?: string | null, opt_uriRewriter?: () => (SafeUrl | null)): SafeStyleSheet;
/**
 * Returns an inert DOM tree produced by parsing the provided html using
 * DOMParser. "Inert" here means that merely parsing the string won't execute
 * scripts or load images. If you attach this tree to a non-inert document, it
 * will execute these side effects! In this package we prefer using the TEMPLATE
 * tag over DOMParser to produce inert trees, but at least on Chrome the inert
 * STYLE tag does not have a CSSStyleSheet object attached to it.
 */
export declare function safeParseHtmlAndGetInertElement(html: string): Element | null;
/**
 * Sanitizes an inline style attribute. Short-hand attributes are expanded to
 * their individual elements. Note: The sanitizer does not output vendor
 * prefixed styles.
 * @param cssStyle A CSS style object.
 * @param opt_uriRewriter A URI rewriter that returns a SafeUrl.
 * @return A sanitized inline cssText.
 */
export declare function sanitizeInlineStyle(cssStyle: CSSStyleDeclaration | null, opt_uriRewriter?: () => (SafeUrl | null)): SafeStyle;
/**
 * Sanitizes inline CSS text and returns it as a SafeStyle object. When adequate
 * browser support is not available, such as for IE9 and below, a
 * SafeStyle-wrapped empty string is returned.
 * @param cssText CSS text to be sanitized.
 * @param opt_uriRewriter A URI rewriter that returns a SafeUrl.
 * @return A sanitized inline cssText.
 */
export declare function sanitizeInlineStyleString(cssText: string, opt_uriRewriter?: () => (SafeUrl | null)): SafeStyle;
/**
 * Converts rules in STYLE tags into style attributes on the tags they apply to.
 * Modifies the provided DOM subtree in-place.
 */
export declare function inlineStyleRules(element: Element): void;
