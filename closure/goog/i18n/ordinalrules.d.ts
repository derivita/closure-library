/**
 * Ordinal pattern keyword
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
 * Ordinal selection function.
 *
 * The actual implementation is locale-dependent.
 * @param n The count of items.
 * @param precision optional, precision.
 */
export declare function select(a: number, b?: number): Keyword;
/**
 * Ordinal select rules for cy locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific ordinal value.
 */
export declare function cySelect_(n: number, precision?: number): Keyword;
/**
 * Ordinal select rules for en locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific ordinal value.
 */
export declare function enSelect_(n: number, precision?: number): Keyword;
/**
 * Ordinal select rules for ne locale
 * @param n The count of items.
 * @param precision Precision for number formatting, if not default.
 * @return Locale-specific ordinal value.
 */
export declare function neSelect_(n: number, precision?: number): Keyword;
/**
 * Creates a selection function for the Closure locale to implement an
 * Intl PluralRules object using optional minimumFractionDigits.
 * Caches multiple PluralRules objects by precision value for a given locale.
 * @return Select function
 */
export declare function mapToNativeSelect_(): () => Keyword;
