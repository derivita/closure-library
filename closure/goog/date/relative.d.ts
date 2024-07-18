import type { DateTime } from './date.js';
/**
 * Enumeration used to identify time units internally.
 */
export declare enum Unit {
    MINUTES = 0,
    HOURS = 1,
    DAYS = 2
}
export declare function resetMonthDateFormatter_(): void;
/**
 * Caller-settable function for formatting time. Default is internal
 * formatting using RelativeDateTimeFormat
 */
export type TimeDeltaFormatter = () => string;
/**
 * Sets a different formatting function for time deltas ("3 days ago").
 * While its visibility is public, this function is Closure-internal and should
 * not be used in application code.
 * @param formatter The function to use for formatting time deltas (i.e. relative times).
 */
export declare function setTimeDeltaFormatter(formatter: TimeDeltaFormatter): void;
/**
 * Sets casing mode to a boolean.
 * If true, the first letter of day formats ("today", "yesterday", "tommorow")
 * is capitalized using locale-aware toUpper.
 * If false, no casing is done on basic data.
 */
export declare function setCasingMode(capitalizeMode: boolean): void;
/**
 * Converts first letter of a string to upper case.
 */
export declare function upcase(text: string): string;
/**
 * Accepts a timestamp in milliseconds and outputs a relative time in the form
 * of "1 hour ago", "1 day ago", "in 1 hour", "in 2 days" etc.  If the date
 * delta is over 2 weeks, then the output string will be empty.
 * @param dateMs Date in milliseconds.
 * @return The formatted date.
 */
export declare function format(dateMs: number): string;
/**
 * Accepts a timestamp in milliseconds and outputs a relative time in the form
 * of "1 hour ago", "1 day ago".  All future times will be returned as 0 minutes
 * ago.
 *
 * This is provided for compatibility with users of the previous incarnation of
 * the above {@see #format} method who relied on it protecting against
 * future dates.
 * @param dateMs Date in milliseconds.
 * @return The formatted date.
 */
export declare function formatPast(dateMs: number): string;
/**
 * Accepts a timestamp in milliseconds and outputs a relative day. i.e. "Today",
 * "Yesterday", "Tomorrow", or "Sept 15".
 * @param dateMs Date in milliseconds.
 * @param opt_formatter Formatter for the date. Defaults to form 'MMM dd'.
 * @return The formatted date.
 */
export declare function formatDay(dateMs: number, opt_formatter?: () => string): string;
/**
 * Formats a date, adding the relative date in parenthesis.  If the date is less
 * than 24 hours then the time will be printed, otherwise the full-date will be
 * used.  Examples:
 * 2:20 PM (1 minute ago)
 * Monday, February 27, 2009 (4 days ago)
 * Tuesday, March 20, 2005    // Too long ago for a relative date.
 * @param date A date object.
 * @param opt_shortTimeMsg An optional short time message can be provided if available, so that it's not recalculated in this function.
 * @param opt_fullDateMsg An optional date message can be provided if available, so that it's not recalculated in this function.
 * @return The date string in the above form.
 */
export declare function getDateString(date: Date | DateTime, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;
/**
 * Formats a date, adding the relative date in parenthesis.   Functions the same
 * as #getDateString but ensures that the date is always seen to be in the past.
 * If the date is in the future, it will be shown as 0 minutes ago.
 *
 * This is provided for compatibility with users of the previous incarnation of
 * the above {@see #getDateString} method who relied on it protecting against
 * future dates.
 * @param date A date object.
 * @param opt_shortTimeMsg An optional short time message can be provided if available, so that it's not recalculated in this function.
 * @param opt_fullDateMsg An optional date message can be provided if available, so that it's not recalculated in this function.
 * @return The date string in the above form.
 */
export declare function getPastDateString(date: Date | DateTime | null, opt_shortTimeMsg?: string, opt_fullDateMsg?: string): string;
