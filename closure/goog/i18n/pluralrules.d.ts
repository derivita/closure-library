/**
 * Plural pattern keyword
 */
export declare enum Keyword {
    ZERO = "zero",
    ONE = "one",
    TWO = "two",
    FEW = "few",
    MANY = "many",
    OTHER = "other"
}
/**
 * Plural selection function.
 *
 * The actual implementation is locale-dependent.
 * @param n The count of items.
 * @param precision optional, precision.
 */
export declare function select(a: number, b?: number): Keyword;
/**
 * Default Plural select rule.
 * @param n The count of items.
 * @param precision optional, precision.
 * @return Default value.
 */
export declare function defaultSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for fil locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function filSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for he locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function heSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for sr locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function srSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for ro locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function roSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for is locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function isSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for be locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function beSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for af locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function afSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for ar locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function arSelect_(n: number, precision?: number): Keyword;
/**
 * Plural select rules for en locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific plural value.
 */
export declare function enSelect_(n: number, precision?: number): Keyword;
/**
 * Creates a selection function for the Closure locale to implement an
 * Intl PluralRules object using optional minimumFractionDigits.
 * Caches multiple PluralRules objects by precision value for a given locale.
 * @return Select function
 */
export declare function mapToNativeSelect_(): () => Keyword;
