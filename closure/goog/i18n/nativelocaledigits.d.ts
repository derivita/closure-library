/**
 * Type of map from locale string to script codes
 */
export type LocaleScriptMap = {
    [key: string]: string;
};
/**
 * Native digit codes in ECMAScript Intl objects for locales
 * where native digits are prescribed and Intl data is generally available.
 * This is designed for classes that create locale-specific
 * numbers. Examples include number and date/time formatting.
 */
export declare let FormatWithLocaleDigits: LocaleScriptMap;
