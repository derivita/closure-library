import { SafeHtml } from './safehtml.js';
import { SafeScript } from './safescript.js';
import { SafeStyle } from './safestyle.js';
import { SafeStyleSheet } from './safestylesheet.js';
import { SafeUrl } from './safeurl.js';
import { TrustedResourceUrl } from './trustedresourceurl.js';
import { ArgumentMatcher } from '../testing/mockmatchers.js';
/**
 * Creates a SafeHtml wrapping the given value. No validation is performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param html The string to wrap into a SafeHtml.
 */
export declare function newSafeHtmlForTest(html: string): SafeHtml;
/**
 * Creates a SafeScript wrapping the given value. No validation is performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param script The string to wrap into a SafeScript.
 */
export declare function newSafeScriptForTest(script: string): SafeScript;
/**
 * Creates a SafeStyle wrapping the given value. No validation is performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param style String to wrap into a SafeStyle.
 */
export declare function newSafeStyleForTest(style: string): SafeStyle;
/**
 * Creates a SafeStyleSheet wrapping the given value. No validation is
 * performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param styleSheet String to wrap into a SafeStyleSheet.
 */
export declare function newSafeStyleSheetForTest(styleSheet: string): SafeStyleSheet;
/**
 * Creates a SafeUrl wrapping the given value. No validation is performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param url String to wrap into a SafeUrl.
 */
export declare function newSafeUrlForTest(url: string): SafeUrl;
/**
 * Creates a TrustedResourceUrl wrapping the given value. No validation is
 * performed.
 *
 * This function is for use in tests only and must never be used in production
 * code.
 * @param url String to wrap into a TrustedResourceUrl.
 */
export declare function newTrustedResourceUrlForTest(url: string): TrustedResourceUrl;
/**
 * Creates an argument matcher for SafeHtml.
 */
export declare function matchSafeHtml(expected: string | SafeHtml): ArgumentMatcher;
/**
 * Creates an argument matcher for SafeScript.
 */
export declare function matchSafeScript(expected: string | SafeScript): ArgumentMatcher;
/**
 * Creates an argument matcher for SafeStyle.
 */
export declare function matchSafeStyle(expected: string | SafeStyle): ArgumentMatcher;
/**
 * Creates an argument matcher for SafeStyleSheet.
 */
export declare function matchSafeStyleSheet(expected: string | SafeStyleSheet): ArgumentMatcher;
/**
 * Creates an argument matcher for SafeUrl.
 */
export declare function matchSafeUrl(expected: string | SafeUrl): ArgumentMatcher;
/**
 * Creates an argument matcher for TrustedResourceUrl.
 */
export declare function matchTrustedResourceUrl(expected: string | TrustedResourceUrl): ArgumentMatcher;
/**
 * Equality tester to be used in Jasmine tests. Example:
 *
 * beforeEach(function() {
 * jasmine.addCustomEqualityTester(
 * checkTypedStringEquality);
 * });
 *
 * it('typed string value matches same string', function() {
 * expect(f).toHaveBeenCalledWith('expected');
 * });
 *
 * it('typed string value matches same type and string', function() {
 * expect(f).toHaveBeenCalledWith(goog.string.Const.from('expected'));
 * });
 * @param actual Handles goog.string.TypedString.
 * @param expected Handles goog.string.TypedString or string.
 * @return Undefined if not called with goog.string.TypedString, true if typed strings equal, false if not.
 */
export declare function checkTypedStringEquality(actual: any, expected: any): boolean | undefined;
