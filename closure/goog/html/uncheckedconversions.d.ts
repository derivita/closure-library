import { SafeHtml } from './safehtml.js';
import { SafeScript } from './safescript.js';
import { SafeStyle } from './safestyle.js';
import { SafeStyleSheet } from './safestylesheet.js';
import { SafeUrl } from './safeurl.js';
import { TrustedResourceUrl } from './trustedresourceurl.js';
import { Const } from '../string/const.js';
/**
 * Performs an "unchecked conversion" to SafeHtml from a plain string that is
 * known to satisfy the SafeHtml type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `html` satisfies the SafeHtml type contract in all
 * possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param html A string that is claimed to adhere to the SafeHtml contract.
 * @return The value of html, wrapped in a SafeHtml object.
 */
export declare function safeHtmlFromStringKnownToSatisfyTypeContract(justification: Const, html: string): SafeHtml;
/**
 * Performs an "unchecked conversion" to SafeScript from a plain string that is
 * known to satisfy the SafeScript type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `script` satisfies the SafeScript type contract in
 * all possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param script The string to wrap as a SafeScript.
 * @return The value of `script`, wrapped in a SafeScript object.
 */
export declare function safeScriptFromStringKnownToSatisfyTypeContract(justification: Const, script: string): SafeScript;
/**
 * Performs an "unchecked conversion" to SafeStyle from a plain string that is
 * known to satisfy the SafeStyle type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `style` satisfies the SafeStyle type contract in all
 * possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param style The string to wrap as a SafeStyle.
 * @return The value of `style`, wrapped in a SafeStyle object.
 */
export declare function safeStyleFromStringKnownToSatisfyTypeContract(justification: Const, style: string): SafeStyle;
/**
 * Performs an "unchecked conversion" to SafeStyleSheet from a plain string
 * that is known to satisfy the SafeStyleSheet type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `styleSheet` satisfies the SafeStyleSheet type
 * contract in all possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param styleSheet The string to wrap as a SafeStyleSheet.
 * @return The value of `styleSheet`, wrapped in a SafeStyleSheet object.
 */
export declare function safeStyleSheetFromStringKnownToSatisfyTypeContract(justification: Const, styleSheet: string): SafeStyleSheet;
/**
 * Performs an "unchecked conversion" to SafeUrl from a plain string that is
 * known to satisfy the SafeUrl type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `url` satisfies the SafeUrl type contract in all
 * possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param url The string to wrap as a SafeUrl.
 * @return The value of `url`, wrapped in a SafeUrl object.
 */
export declare function safeUrlFromStringKnownToSatisfyTypeContract(justification: Const, url: string): SafeUrl;
/**
 * Performs an "unchecked conversion" to TrustedResourceUrl from a plain string
 * that is known to satisfy the TrustedResourceUrl type contract.
 *
 * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
 * that the value of `url` satisfies the TrustedResourceUrl type contract
 * in all possible program states.
 * @param justification A constant string explaining why this use of this method is safe. May include a security review ticket number.
 * @param url The string to wrap as a TrustedResourceUrl.
 * @return The value of `url`, wrapped in a TrustedResourceUrl object.
 */
export declare function trustedResourceUrlFromStringKnownToSatisfyTypeContract(justification: Const, url: string): TrustedResourceUrl;
