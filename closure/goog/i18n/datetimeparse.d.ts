import * as googDate from '../date/date.js';
/**
 * Construct a DateTimeParse based on current locale.
 */
export declare class DateTimeParse {
    /**
     * Construct a DateTimeParse based on current locale.
     * @param pattern pattern specification or pattern type.
     * @param opt_dateTimeSymbols Optional symbols to use for this instance rather than the global symbols.
     */
    constructor(pattern: string | number, opt_dateTimeSymbols?: object);
    private noStructuralTyping_closure_goog_i18n_datetimeparse_DateTimeParse;
    /**
     * Number of years prior to now that the century used to
     * disambiguate two digit years will begin
     */
    static ambiguousYearCenturyStart: number;
    /**
     * Parse the given string and fill parsed values into date object.
     *
     * The existing values of any temporal fields of `date` not parsed from `text`
     * are not directly changed, but may be affected by overflow. E.g. if a minutes
     * value of 70 is parsed, the implementation of `date` may increment the value
     * of its hours field by 1 while setting its minutes value to 10.
     * @param text The string being parsed.
     * @param date The Date object to hold the parsed date.
     * @param options The options object.
     * @return How many characters parser advanced.
     */
    parse(text: string, date: googDate.DateLike | null, options?: DateTimeParse.ParseOptions): number;
}
export declare namespace DateTimeParse {
    /**
     * Options object for calls to DateTimeParse.prototype.parse.
     */
    interface ParseOptions {
    }
    /**
     * This class hold the intermediate parsing result. After all fields are
     * consumed, final result will be resolved from this class.
     */
    class MyDate_ {
        /**
         * This class hold the intermediate parsing result. After all fields are
         * consumed, final result will be resolved from this class.
         */
        constructor();
        private noStructuralTyping_closure_goog_i18n_datetimeparse_MyDate_;
        /**
         * The date's era.
         */
        era: number | null;
        /**
         * The date's year.
         */
        year: number | null;
        /**
         * The date's month.
         */
        month: number | null;
        /**
         * The date's day of month.
         */
        day: number | null;
        /**
         * The date's hour.
         */
        hours: number | null;
        /**
         * The date's before/afternoon denominator.
         */
        ampm: number | null;
        /**
         * Index of the time's flexible day period in data object.
         */
        dayPeriodIndex: number;
        /**
         * The name for flexible time of day.
         */
        dayPeriodName: string | null;
        /**
         * The date's minutes.
         */
        minutes: number | null;
        /**
         * The date's seconds.
         */
        seconds: number | null;
        /**
         * The date's milliseconds.
         */
        milliseconds: number | null;
        /**
         * The date's timezone offset.
         */
        tzOffset: number | null;
        /**
         * The date's day of week. Sunday is 0, Saturday is 6.
         */
        dayOfWeek: number | null;
        /**
         * Flag indicating if a provided two digit year needs to
         * be disambiguated
         */
        ambiguousYear: boolean;
    }
}
