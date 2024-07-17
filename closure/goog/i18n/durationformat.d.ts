import { DurationSymbols as DurationSymbolsTypes } from './durationsymboltypes.js';
/**
 * Choices for options bag 'type' in DurationFormat's constructor.
 */
declare enum DurationFormatStyle {
    SHORT = 0,
    LONG = 1,
    NARROW = 2
}
export { DurationFormatStyle };
/**
 * Available keys for the input object of public method format.
 */
declare enum DurationFormatUnit {
    YEAR = "years",
    MONTH = "months",
    WEEK = "weeks",
    DAY = "days",
    HOUR = "hours",
    MINUTE = "minutes",
    SECOND = "seconds"
}
export { DurationFormatUnit };
/**
 * Collection of duration unit and time for a locale.
 */
export type DurationLike = {
    'days': number | undefined;
    'hours': number | undefined;
    'minutes': number | undefined;
    'months': number | undefined;
    'seconds': number | undefined;
    'weeks': number | undefined;
    'years': number | undefined;
};
/**
 * Collection of duration display style.
 */
export type DurationFormatOptions = {
    'style': DurationFormatStyle;
};
declare class DurationFormat {
    /**
     * Returns the durationformatter for the locale given by goog.LOCALE.
     * specified, a durationformatter for the user's locale will be returned.
     */
    constructor(opt_options?: DurationFormatOptions, opt_durationSymbols?: DurationSymbolsTypes);
    /**
     * Formats a string with the amount and correspondent unit.
     */
    format(durationLike: DurationLike): string;
}
export { DurationFormat };
