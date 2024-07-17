import * as dom from '../dom/dom.js';
/**
 * Enumeration of `CSSRule` types.
 */
export declare enum CssRuleType {
    STYLE = 1,
    IMPORT = 3,
    MEDIA = 4,
    FONT_FACE = 5,
    PAGE = 6,
    NAMESPACE = 7
}
/**
 * Recursively gets all CSS as text, optionally starting from a given
 * StyleSheet.
 * @return css text.
 */
export declare function getAllCssText(opt_styleSheet?: StyleSheet | StyleSheetList | null): string;
/**
 * Recursively gets all CSSStyleRules, optionally starting from a given
 * StyleSheet.
 * Note that this excludes any CSSImportRules, CSSMediaRules, etc..
 * @return A list of CSSStyleRules.
 */
export declare function getAllCssStyleRules(opt_styleSheet?: StyleSheet | StyleSheetList | null): (CSSStyleRule | null)[];
/**
 * Returns the CSSRules from a styleSheet.
 * Worth noting here is that IE and FF differ in terms of what they will return.
 * Firefox will return styleSheet.cssRules, which includes ImportRules and
 * anything which implements the CSSRules interface. IE returns simply a list of
 * CSSRules.
 * @return An array of CSSRules or null.
 */
export declare function getCssRulesFromStyleSheet(styleSheet: StyleSheet | null): CSSRuleList | null;
/**
 * Gets all StyleSheet objects starting from some StyleSheet. Note that we
 * want to return the sheets in the order of the cascade, therefore if we
 * encounter an import, we will splice that StyleSheet object in front of
 * the StyleSheet that contains it in the returned array of StyleSheets.
 * @param opt_styleSheet A StyleSheet.
 * @param opt_includeDisabled If true, includes disabled stylesheets, defaults to false.
 * @return A list of StyleSheet objects.
 */
export declare function getAllCssStyleSheets(opt_styleSheet?: StyleSheet | StyleSheetList | null, opt_includeDisabled?: boolean): (StyleSheet | null)[];
/**
 * Gets the cssText from a CSSRule object cross-browserly.
 * @param cssRule A CSSRule.
 * @return cssText The text for the rule, including the selector.
 */
export declare function getCssTextFromCssRule(cssRule: CSSRule | null): string;
/**
 * Get the index of the CSSRule in it's StyleSheet.
 * @param cssRule A CSSRule.
 * @param opt_parentStyleSheet A reference to the stylesheet object this cssRule belongs to.
 * @return The index of the CSSRule, or -1.
 */
export declare function getCssRuleIndexInParentStyleSheet(cssRule: CSSRule | null, opt_parentStyleSheet?: StyleSheet | null): number;
/**
 * We do some trickery in getAllCssStyleRules that hacks this in for IE.
 * If the cssRule object isn't coming from a result of that function call, this
 * method will return undefined in IE.
 * @param cssRule The CSSRule.
 * @return A styleSheet object.
 */
export declare function getParentStyleSheet(cssRule: CSSRule | null): StyleSheet | null;
/**
 * Replace a cssRule with some cssText for a new rule.
 * If the cssRule object is not one of objects returned by
 * getAllCssStyleRules, then you'll need to provide both the styleSheet and
 * possibly the index, since we can't infer them from the standard cssRule
 * object in IE. We do some trickery in getAllCssStyleRules to hack this in.
 * @param cssRule A CSSRule.
 * @param cssText The text for the new CSSRule.
 * @param opt_parentStyleSheet A reference to the stylesheet object this cssRule belongs to.
 * @param opt_index The index of the cssRule in its parentStylesheet.
 */
export declare function replaceCssRule(cssRule: CSSRule | null, cssText: string, opt_parentStyleSheet?: StyleSheet | null, opt_index?: number): void;
/**
 * Cross browser function to add a CSSRule into a StyleSheet, optionally
 * at a given index.
 * @param cssStyleSheet The CSSRule's parentStyleSheet.
 * @param cssText The text for the new CSSRule.
 * @param opt_index The index of the cssRule in its parentStylesheet.
 */
export declare function addCssRule(cssStyleSheet: StyleSheet | null, cssText: string, opt_index?: number): void;
/**
 * Cross browser function to remove a CSSRule in a StyleSheet at an index.
 * @param cssStyleSheet The CSSRule's parentStyleSheet.
 * @param index The CSSRule's index in the parentStyleSheet.
 */
export declare function removeCssRule(cssStyleSheet: StyleSheet | null, index: number): void;
/**
 * Appends a DOM node to HEAD containing the css text that's passed in.
 * @param cssText CSS to add to the end of the document.
 * @param opt_domHelper Optional DOM helper user for document interactions.
 * @return The newly created STYLE element.
 */
export declare function addCssText(cssText: string, opt_domHelper?: dom.DomHelper | null): Element;
/**
 * Cross browser method to get the filename from the StyleSheet's href.
 * Explorer only returns the filename in the href, while other agents return
 * the full path.
 * @param styleSheet Any valid StyleSheet object with an href.
 * @return filename The filename, or null if not an external styleSheet.
 */
export declare function getFileNameFromStyleSheet(styleSheet: StyleSheet): string | null;
