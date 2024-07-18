import * as relativeDateTimeSymbols from './relativedatetimesymbols.js';
declare class RelativeDateTimeFormat {
    /**
     *
     * @param opt_numeric This optional string determines if formatted output is always the numeric formatting rather than available relative strings. ALWAYS (default) forces numeric results in all uses of this instance. AUTO mode uses available relative strings such as "tomorrow", falling back to numeric.
     * @param opt_style This optional value determines the style of the relative time output. Values include LONG, SHORT, NARROW. Default is LONG. as part of the resulting formatted string
     * @param opt_relativeDateTimeSymbols This optional value can be used to set the data for to use for this instance rather than obtaining from relativedatetimesymbols.
     */
    constructor(opt_numeric?: RelativeDateTimeFormat.NumericOption, opt_style?: RelativeDateTimeFormat.Style, opt_relativeDateTimeSymbols?: relativeDateTimeSymbols.RelativeDateTimeSymbols);
    private noStructuralTyping_closure_goog_i18n_relativedatetimeformat_RelativeDateTimeFormat;
    /**
     * Formats a string with the amount and relative unit. If data for the quantity
     * is not available in the requested style, then it falls back to next style. If
     * not available in any style, then it reverts to formatNumeric for the same
     * unit.
     * @param quantity A desired offset from current time, negative for past, 0 for now, positive for future.
     * @param relativeUnit Type such as HOUR, YEAR, QUARTER.
     * @return The formatted result. May be empty string for an unsupported locale.
     */
    format(quantity: number, relativeUnit: RelativeDateTimeFormat.Unit): string;
    /**
     * Returns the style set for this formatter.
     * @return One of LONG, SHORT, NARROW,
     */
    getFormatStyle(): number;
    /**
     * Returns the status of the alwaysNumeric field.
     */
    getNumericMode(): RelativeDateTimeFormat.NumericOption;
    /**
     * Returns relative field for an offset of a given value unit
     * if it is defined for the current style.
     * If the value does not exist, return undefined.
     * For example, is there a -2 offset for DAY in the current locale and style.
     * Note: This data is not available in an ECMAScript implementation.
     */
    isOffsetDefinedForUnit(unit: RelativeDateTimeFormat.Unit, offset: string | number): string | undefined;
}
declare namespace RelativeDateTimeFormat {
    /**
     * Values for setting the numeric mode in the constructor.
     */
    enum NumericOption {
        ALWAYS = "always",
        AUTO = "auto"
    }
    /**
     * Collection of public style symbols.
     */
    enum Style {
        LONG = 0,
        SHORT = 1,
        NARROW = 2
    }
    /**
     * Relative unit constants for public use.
     */
    enum Unit {
        YEAR = 0,
        QUARTER = 1,
        MONTH = 2,
        WEEK = 3,
        DAY = 4,
        HOUR = 5,
        MINUTE = 6,
        SECOND = 7
    }
}
export { RelativeDateTimeFormat };
