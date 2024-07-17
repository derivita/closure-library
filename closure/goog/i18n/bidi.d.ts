/**
 * Namespace for bidi supporting functions.
 */
export declare var FORCE_RTL: boolean;
/**
 * Constant that defines whether or not the current locale is a RTL locale.
 * If {@link FORCE_RTL} is not true, this constant will default
 * to check that {@link goog.LOCALE} is one of a few major RTL locales.
 *
 * <p>This is designed to be a maximally efficient compile-time constant. For
 * example, for the default goog.LOCALE, compiling
 * "if (IS_RTL) alert('rtl') else {}" should produce no code. It
 * is this design consideration that limits the implementation to only
 * supporting a few major RTL locales, as opposed to the broader repertoire of
 * something like isRtlLanguage.
 *
 * <p>Since this constant refers to the directionality of the locale, it is up
 * to the caller to determine if this constant should also be used for the
 * direction of the UI.
 *
 * {@see goog.LOCALE}
 */
export declare var IS_RTL: boolean;
/**
 * Unicode formatting characters and directionality string constants.
 */
export declare enum Format {
    LRE = "\u202A",
    RLE = "\u202B",
    PDF = "\u202C",
    LRM = "\u200E",
    RLM = "\u200F"
}
export /**
 * Directionality enum.
 */ type Dir = number;
export declare const Dir: {
    LTR: number;
    RTL: number;
    NEUTRAL: number;
};
/**
 * 'right' string constant.
 */
export declare var RIGHT: string;
/**
 * 'left' string constant.
 */
export declare var LEFT: string;
/**
 * 'left' if locale is RTL, 'right' if not.
 */
export declare var I18N_RIGHT: string;
/**
 * 'right' if locale is RTL, 'left' if not.
 */
export declare var I18N_LEFT: string;
/**
 * Convert a directionality given in various formats to a Dir
 * constant. Useful for interaction with different standards of directionality
 * representation.
 * @param givenDir Directionality given in one of the following formats: 1. A Dir constant. 2. A number (positive = LTR, negative = RTL, 0 = neutral). 3. A boolean (true = RTL, false = LTR). 4. A null for unknown directionality.
 * @param opt_noNeutral Whether a givenDir of zero or Dir.NEUTRAL should be treated as null, i.e. unknown, in order to preserve legacy behavior.
 * @return A Dir constant matching the given directionality. If given null, returns null (i.e. unknown).
 */
export declare function toDir(givenDir: Dir | number | boolean | null | null, opt_noNeutral?: boolean): Dir | null;
/**
 * Test whether the given string has any RTL characters in it.
 * @param str The given string that need to be tested.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether the string contains RTL characters.
 */
export declare function hasAnyRtl(str: string, opt_isHtml?: boolean): boolean;
/**
 * Test whether the given string has any RTL characters in it.
 * @param str The given string that need to be tested.
 * @return Whether the string contains RTL characters.
 */
export declare function hasRtlChar(a: string): boolean;
/**
 * Test whether the given string has any LTR characters in it.
 * @param str The given string that need to be tested.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether the string contains LTR characters.
 */
export declare function hasAnyLtr(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check if the first character in the string is RTL or not.
 * @param str The given string that need to be tested.
 * @return Whether the first character in str is an RTL char.
 */
export declare function isRtlChar(str: string): boolean;
/**
 * Check if the first character in the string is LTR or not.
 * @param str The given string that need to be tested.
 * @return Whether the first character in str is an LTR char.
 */
export declare function isLtrChar(str: string): boolean;
/**
 * Check if the first character in the string is neutral or not.
 * @param str The given string that need to be tested.
 * @return Whether the first character in str is a neutral char.
 */
export declare function isNeutralChar(str: string): boolean;
/**
 * Check whether the first strongly directional character (if any) is RTL.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether RTL directionality is detected using the first strongly-directional character method.
 */
export declare function startsWithRtl(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check whether the first strongly directional character (if any) is RTL.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether RTL directionality is detected using the first strongly-directional character method.
 */
export declare function isRtlText(a: string, b?: boolean): boolean;
/**
 * Check whether the first strongly directional character (if any) is LTR.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether LTR directionality is detected using the first strongly-directional character method.
 */
export declare function startsWithLtr(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check whether the first strongly directional character (if any) is LTR.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether LTR directionality is detected using the first strongly-directional character method.
 */
export declare function isLtrText(a: string, b?: boolean): boolean;
/**
 * Check whether the input string either contains no strongly directional
 * characters or looks like a url.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether neutral directionality is detected.
 */
export declare function isNeutralText(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check if the exit directionality a piece of text is LTR, i.e. if the last
 * strongly-directional character in the string is LTR.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether LTR exit directionality was detected.
 */
export declare function endsWithLtr(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check if the exit directionality a piece of text is LTR, i.e. if the last
 * strongly-directional character in the string is LTR.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether LTR exit directionality was detected.
 */
export declare function isLtrExitText(a: string, b?: boolean): boolean;
/**
 * Check if the exit directionality a piece of text is RTL, i.e. if the last
 * strongly-directional character in the string is RTL.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether RTL exit directionality was detected.
 */
export declare function endsWithRtl(str: string, opt_isHtml?: boolean): boolean;
/**
 * Check if the exit directionality a piece of text is RTL, i.e. if the last
 * strongly-directional character in the string is RTL.
 * @param str String being checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether RTL exit directionality was detected.
 */
export declare function isRtlExitText(a: string, b?: boolean): boolean;
/**
 * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
 * - a language code explicitly specifying one of the right-to-left scripts,
 * e.g. "az-Arab", or<p>
 * - a language code specifying one of the languages normally written in a
 * right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
 * Latin or Cyrillic script (which are the usual LTR alternatives).<p>
 * The list of right-to-left scripts appears in the 100-199 range in
 * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
 * Hebrew are by far the most widely used. We also recognize Thaana, and N'Ko,
 * which also have significant modern usage. Adlam and Rohingya
 * scripts are now included since they can be expected to be used in the
 * future. The rest (Syriac, Samaritan, Mandaic, etc.) seem to have extremely
 * limited or no modern usage and are not recognized to save on code size. The
 * languages usually written in a right-to-left script are taken as those with
 * Suppress-Script: Hebr|Arab|Thaa|Nkoo|Adlm|Rohg in
 * http://www.iana.org/assignments/language-subtag-registry,
 * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
 * Other subtags of the language code, e.g. regions like EG (Egypt), are
 * ignored.
 * @param lang BCP 47 (a.k.a III) language code.
 * @return Whether the language code is an RTL language.
 */
export declare function isRtlLanguage(lang: string): boolean;
/**
 * Apply bracket guard using LRM and RLM. This is to address the problem of
 * messy bracket display frequently happens in RTL layout.
 * This function works for plain text, not for HTML. In HTML, the opening
 * bracket might be in a different context than the closing bracket (such as
 * an attribute value).
 * @param s The string that need to be processed.
 * @param opt_isRtlContext specifies default direction (usually direction of the UI).
 * @return The processed string, with all bracket guarded.
 */
export declare function guardBracketInText(s: string, opt_isRtlContext?: boolean): string;
/**
 * Enforce the html snippet in RTL directionality regardless of overall context.
 * If the html piece was enclosed by tag, dir will be applied to existing
 * tag, otherwise a span tag will be added as wrapper. For this reason, if
 * html snippet starts with a tag, this tag must enclose the whole piece. If
 * the tag already has a dir specified, this new one will override existing
 * one in behavior (tested on FF and IE).
 * @param html The string that need to be processed.
 * @return The processed string, with directionality enforced to RTL.
 */
export declare function enforceRtlInHtml(html: string): string;
/**
 * Enforce RTL on both end of the given text piece using unicode BiDi formatting
 * characters RLE and PDF.
 * @param text The piece of text that need to be wrapped.
 * @return The wrapped string after process.
 */
export declare function enforceRtlInText(text: string): string;
/**
 * Enforce the html snippet in RTL directionality regardless or overall context.
 * If the html piece was enclosed by tag, dir will be applied to existing
 * tag, otherwise a span tag will be added as wrapper. For this reason, if
 * html snippet starts with a tag, this tag must enclose the whole piece. If
 * the tag already has a dir specified, this new one will override existing
 * one in behavior (tested on FF and IE).
 * @param html The string that need to be processed.
 * @return The processed string, with directionality enforced to RTL.
 */
export declare function enforceLtrInHtml(html: string): string;
/**
 * Enforce LTR on both end of the given text piece using unicode BiDi formatting
 * characters LRE and PDF.
 * @param text The piece of text that need to be wrapped.
 * @return The wrapped string after process.
 */
export declare function enforceLtrInText(text: string): string;
/**
 * Swap location parameters and 'left'/'right' in CSS specification. The
 * processed string will be suited for RTL layout. Though this function can
 * cover most cases, there are always exceptions. It is suggested to put
 * those exceptions in separate group of CSS string.
 * @param cssStr CSS spefication string.
 * @return Processed CSS specification string.
 */
export declare function mirrorCSS(cssStr: string): string;
/**
 * Replace the double and single quote directly after a Hebrew character with
 * GERESH and GERSHAYIM. In such case, most likely that's user intention.
 * @param str String that need to be processed.
 * @return Processed string with double/single quote replaced.
 */
export declare function normalizeHebrewQuote(str: string): string;
/**
 * Estimates the directionality of a string based on relative word counts.
 * If the number of RTL words is above a certain percentage of the total number
 * of strongly directional words, returns RTL.
 * Otherwise, if any words are strongly or weakly LTR, returns LTR.
 * Otherwise, returns UNKNOWN, which is used to mean "neutral".
 * Numbers are counted as weakly LTR.
 * @param str The string to be checked.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Estimated overall directionality of `str`.
 */
export declare function estimateDirection(str: string, opt_isHtml?: boolean): Dir;
/**
 * Check the directionality of a piece of text, return true if the piece of
 * text should be laid out in RTL direction.
 * @param str The piece of text that need to be detected.
 * @param opt_isHtml Whether str is HTML / HTML-escaped. Default: false.
 * @return Whether this piece of text should be laid out in RTL.
 */
export declare function detectRtlDirectionality(str: string, opt_isHtml?: boolean): boolean;
/**
 * Sets text input element's directionality and text alignment based on a
 * given directionality. Does nothing if the given directionality is unknown or
 * neutral.
 * @param element Input field element to set directionality to.
 * @param dir Desired directionality, given in one of the following formats: 1. A Dir constant. 2. A number (positive = LRT, negative = RTL, 0 = neutral). 3. A boolean (true = RTL, false = LTR). 4. A null for unknown directionality.
 */
export declare function setElementDirAndAlign(element: Element | null, dir: Dir | number | boolean | null | null): void;
/**
 * Sets element dir based on estimated directionality of the given text.
 */
export declare function setElementDirByTextDirectionality(element: Element, text: string): void;
/**
 * Strings that have an (optional) known direction.
 *
 * Implementations of this interface are string-like objects that carry an
 * attached direction, if known.
 */
export interface DirectionalString {
    /**
     * Interface marker of the DirectionalString interface.
     *
     * This property can be used to determine at runtime whether or not an object
     * implements this interface.  All implementations of this interface set this
     * property to `true`.
     */
    implementsGoogI18nBidiDirectionalString: boolean;
    /**
     * Retrieves this object's known direction (if any).
     * @return The known direction. Null if unknown.
     */
    getDirection(): Dir | null;
}
