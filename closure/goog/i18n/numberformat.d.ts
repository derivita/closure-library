import * as NumberFormatSymbolsType from './numberformatsymbolstype.js';
/**
 * Constructor of NumberFormat.
 */
export declare class NumberFormat {
    /**
     * Constructor of NumberFormat.
     * @param pattern The number that indicates a predefined number format pattern.
     * @param opt_currency Optional international currency code. This determines the currency code/symbol used in format/parse. If not given, the currency code for the current locale will be used.
     * @param opt_currencyStyle currency style, value defined in NumberFormat.CurrencyStyle. If not given, the currency style for the current locale will be used.
     * @param opt_symbols Optional number format symbols map, analogous to NumberFormatSymbols. If present, this overrides the symbols from the current locale, such as the percent sign and minus sign.
     */
    constructor(pattern: number | string, opt_currency?: string, opt_currencyStyle?: number, opt_symbols?: NumberFormatSymbolsType.Type);
    private noStructuralTyping_closure_goog_i18n_numberformat_NumberFormat;
    /**
     * {boolean}
     */
    static USE_ECMASCRIPT_I18N_NUMFORMAT: boolean;
    /**
     * Set if the usage of Ascii digits in formatting should be enforced.
     * NOTE: This function must be called before constructing NumberFormat.
     * @param doEnforce Boolean value about if Ascii digits should be enforced.
     */
    static setEnforceAsciiDigits(doEnforce: boolean): void;
    /**
     * Return if Ascii digits is enforced.
     * @return If Ascii digits is enforced.
     */
    static isEnforceAsciiDigits(): boolean;
    /**
     * Sets minimum number of fraction digits.
     * @param min the minimum.
     * @return Reference to this NumberFormat object.
     */
    setMinimumFractionDigits(min: number): NumberFormat;
    /**
     * Gets minimum number of fraction digits.
     * @return The number of minimum fraction digits.
     */
    getMinimumFractionDigits(): number;
    /**
     * Sets maximum number of fraction digits.
     * @param max the maximum.
     * @return Reference to this NumberFormat object.
     */
    setMaximumFractionDigits(max: number): NumberFormat;
    /**
     * Gets maximum number of fraction digits.
     * @return The number of maximum fraction digits.
     */
    getMaximumFractionDigits(): number;
    /**
     * Sets number of significant digits to show. Only fractions will be rounded.
     * Regardless of the number of significant digits set, the number of fractional
     * digits shown will always be capped by the maximum number of fractional digits
     * set on {@link #setMaximumFractionDigits}.
     * @param number The number of significant digits to include.
     * @return Reference to this NumberFormat object.
     */
    setSignificantDigits(number: number): NumberFormat;
    /**
     * Gets number of significant digits to show. Only fractions will be rounded.
     * @return The number of significant digits to include.
     */
    getSignificantDigits(): number;
    /**
     * Sets whether trailing fraction zeros should be shown when significantDigits_
     * is positive. If this is true and significantDigits_ is 2, 1 will be formatted
     * as '1.0'.
     * @param showTrailingZeros Whether trailing zeros should be shown.
     * @return Reference to this NumberFormat object.
     */
    setShowTrailingZeros(showTrailingZeros: boolean): NumberFormat;
    /**
     * Sets a number to base the formatting on when compact style formatting is
     * used. If this is null, the formatting should be based only on the number to
     * be formatting.
     *
     * This base formatting number can be used to format the target number as
     * another number would be formatted. For example, 100,000 is normally formatted
     * as "100K" in the COMPACT_SHORT format. To instead format it as '0.1M', the
     * base number could be set to 1,000,000 in order to force all numbers to be
     * formatted in millions. Similarly, 1,000,000,000 would normally be formatted
     * as '1B' and setting the base formatting number to 1,000,000, would cause it
     * to be formatted instead as '1,000M'.
     * @param baseFormattingNumber The number to base formatting on, or null if formatting should not be based on another number.
     * @return Reference to this NumberFormat object.
     */
    setBaseFormatting(baseFormattingNumber: number | null): NumberFormat;
    /**
     * Gets the number on which compact formatting is currently based, or null if
     * no such number is set. See setBaseFormatting() for more information.
     */
    getBaseFormatting(): number | null;
    /**
     * Parses text string to produce a Number.
     *
     * This method attempts to parse text starting from position "opt_pos" if it
     * is given. Otherwise the parse will start from the beginning of the text.
     * When opt_pos presents, opt_pos will be updated to the character next to where
     * parsing stops after the call. If an error occurs, opt_pos won't be updated.
     * @param text The string to be parsed.
     * @param opt_pos Position to pass in and get back.
     * @return Parsed number. This throws an error if the text cannot be parsed.
     */
    parse(text: string, opt_pos?: number[] | null): number;
    /**
     * Checks options to see if the native formatter needs to be
     * remade.
     * @return True if options have changed.
     */
    NativeOptionsChanged_(): boolean;
    /**
     * Formats a Number to produce a string.
     * @param number The Number to be formatted.
     * @return The formatted number string.
     */
    format(number: number): string;
    /**
     * Checks if the currency symbol comes before the value ($12) or after (12$)
     * Handy for applications that need to have separate UI fields for the currency
     * value and symbol, especially for input: Price: [USD] [123.45]
     * The currency symbol might be a combo box, or a label.
     * @return true if currency is before value.
     */
    isCurrencyCodeBeforeValue(): boolean;
}
export declare namespace NumberFormat {
    /**
     * Standard number formatting patterns.
     */
    enum Format {
        DECIMAL = 1,
        SCIENTIFIC = 2,
        PERCENT = 3,
        CURRENCY = 4,
        COMPACT_SHORT = 5,
        COMPACT_LONG = 6
    }
    /**
     * Currency styles.
     */
    enum CurrencyStyle {
        LOCAL = 0,
        PORTABLE = 1,
        GLOBAL = 2
    }
    /**
     * Compacting styles.
     */
    enum CompactStyle {
        NONE = 0,
        SHORT = 1,
        LONG = 2
    }
    /**
     * Alias for the compact format 'unit' object.
     */
    type CompactNumberUnit = {
        'divisorBase': number;
        'negative_prefix': string;
        'negative_suffix': string;
        'prefix': string;
        'suffix': string;
    };
    /**
     * Parameters to Intl.NumberFormat constructor
     */
    type IntlOptions = {
        'localeMatcher': string | undefined;
        'signDisplay': string | undefined;
        'notation': string | undefined;
        'useGrouping': boolean | undefined;
        'numberingSystem': string | undefined;
        'style': string | undefined;
        'currency': string | undefined;
        'currencyDisplay': string | undefined;
        'minimumIntegerDigits': number | undefined;
        'minimumFractionDigits': number | undefined;
        'maximumFractionDigits': number | undefined;
        'minimumSignificantDigits': number | undefined;
        'maximumSignificantDigits': number | undefined;
        'compactDisplay': string | undefined;
        'locale': string | undefined;
    };
    /**
     * Return results from formatToParts
     */
    type FormattedPart = {
        'type': string;
        'value': string;
    };
}
