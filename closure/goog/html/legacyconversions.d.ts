import { SafeHtml } from './safehtml.js';
import { SafeScript } from './safescript.js';
import { SafeStyle } from './safestyle.js';
import { SafeStyleSheet } from './safestylesheet.js';
import { SafeUrl } from './safeurl.js';
import { TrustedResourceUrl } from './trustedresourceurl.js';
/**
 * Performs an "unchecked conversion" from string to SafeHtml for legacy API
 * purposes.
 *
 * Please read fileoverview documentation before using.
 * @param html A string to be converted to SafeHtml.
 * @return The value of html, wrapped in a SafeHtml object.
 */
export declare function safeHtmlFromString(html: string): SafeHtml;
/**
 * Performs an "unchecked conversion" from string to SafeScript for legacy API
 * purposes.
 *
 * Please read fileoverview documentation before using.
 * @param script A string to be converted to SafeScript.
 * @return The value of script, wrapped in a SafeScript object.
 */
export declare function safeScriptFromString(script: string): SafeScript;
/**
 * Performs an "unchecked conversion" from string to SafeStyle for legacy API
 * purposes.
 *
 * Please read fileoverview documentation before using.
 * @param style A string to be converted to SafeStyle.
 * @return The value of style, wrapped in a SafeStyle object.
 */
export declare function safeStyleFromString(style: string): SafeStyle;
/**
 * Performs an "unchecked conversion" from string to SafeStyleSheet for legacy
 * API purposes.
 *
 * Please read fileoverview documentation before using.
 * @param styleSheet A string to be converted to SafeStyleSheet.
 * @return The value of style sheet, wrapped in a SafeStyleSheet object.
 */
export declare function safeStyleSheetFromString(styleSheet: string): SafeStyleSheet;
/**
 * Performs an "unchecked conversion" from string to SafeUrl for legacy API
 * purposes.
 *
 * Please read fileoverview documentation before using.
 * @param url A string to be converted to SafeUrl.
 * @return The value of url, wrapped in a SafeUrl object.
 */
export declare function safeUrlFromString(url: string): SafeUrl;
/**
 * Performs an "unchecked conversion" from string to TrustedResourceUrl for
 * legacy API purposes.
 *
 * Please read fileoverview documentation before using.
 * @param url A string to be converted to TrustedResourceUrl.
 * @return The value of url, wrapped in a TrustedResourceUrl object.
 */
export declare function trustedResourceUrlFromString(url: string): TrustedResourceUrl;
/**
 * Sets a function that will be called every time a legacy conversion is
 * performed. The function is called with no parameters but it can use
 * goog.debug.getStacktrace to get a stacktrace.
 * @param callback Error callback as defined above.
 */
export declare function setReportCallback(callback: () => void): void;
