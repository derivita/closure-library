import { SafeUrl } from '../safeurl.js';
/**
 * Sanitizes the value for a given a browser-parsed CSS value.
 * @param propName A property name.
 * @param propValue Value of the property as parsed by the browser.
 * @param opt_uriRewriter A URI rewriter that returns an unwrapped goog.html.SafeUrl.
 * @return Sanitized property value or null if the property should be rejected altogether.
 */
export declare function sanitizeProperty(propName: string, propValue: string, opt_uriRewriter?: () => (SafeUrl | null)): string | null;
