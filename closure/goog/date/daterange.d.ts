import { Date } from './date.js';
/**
 * Constructs a date range.
 */
export declare class DateRange {
    /**
     * Constructs a date range.
     * @param startDate The first date in the range.
     * @param endDate The last date in the range.
     */
    constructor(startDate: Date | null, endDate: Date | null);
    private noStructuralTyping_closure_goog_date_daterange_DateRange;
    /**
     * The first possible day, as far as this class is concerned.
     */
    static MINIMUM_DATE: Date | null;
    /**
     * The last possible day, as far as this class is concerned.
     */
    static MAXIMUM_DATE: Date | null;
    getStartDate(): Date | null;
    getEndDate(): Date | null;
    /**
     * Tests if a date falls within this range.
     * @param date The date to test.
     * @return Whether the date is in the range.
     */
    contains(date: Date | null): boolean;
    iterator(): DateRange.Iterator;
    /**
     * Tests two {@link DateRange} objects for equality.
     * @param a A date range.
     * @param b A date range.
     * @return Whether |a| is the same range as |b|.
     */
    static equals(a: DateRange | null, b: DateRange | null): boolean;
    /**
     * Returns the range from yesterday to yesterday.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that includes only yesterday.
     */
    static yesterday(opt_today?: Date | null): DateRange;
    /**
     * Returns the range from today to today.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that includes only today.
     */
    static today(opt_today?: Date | null): DateRange;
    /**
     * Returns the range that includes the seven days that end yesterday.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that includes the seven days that end yesterday.
     */
    static last7Days(opt_today?: Date | null): DateRange;
    /**
     * Returns the range that starts the first of this month and ends the last day
     * of this month.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that starts the first of this month and ends the last day of this month.
     */
    static thisMonth(opt_today?: Date | null): DateRange;
    /**
     * Returns the range that starts the first of last month and ends the last day
     * of last month.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that starts the first of last month and ends the last day of last month.
     */
    static lastMonth(opt_today?: Date | null): DateRange;
    /**
     * Returns the seven-day range that starts on the first day of the week
     * (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) on or before today.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that starts the Monday on or before today and ends the Sunday on or after today.
     */
    static thisWeek(opt_today?: Date | null): DateRange;
    /**
     * Returns the seven-day range that ends the day before the first day of
     * the week (see {@link goog.i18n.DateTimeSymbols.FIRSTDAYOFWEEK}) that
     * contains today.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that starts seven days before the Monday on or before today and ends the Sunday on or before yesterday.
     */
    static lastWeek(opt_today?: Date | null): DateRange;
    /**
     * Returns the range that starts seven days before the Monday on or before
     * today and ends the Friday before today.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that starts seven days before the Monday on or before today and ends the Friday before today.
     */
    static lastBusinessWeek(opt_today?: Date | null): DateRange;
    /**
     * Returns the range that includes all days between January 1, 1900 and
     * December 31, 9999.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The range that includes all days between January 1, 1900 and December 31, 9999.
     */
    static allTime(opt_today?: Date | null): DateRange;
    /**
     *
     * @param dateRangeKey A standard date range key.
     * @param opt_today The date to consider today. Defaults to today.
     * @return The date range that corresponds to that key.
     */
    static standardDateRange(dateRangeKey: string, opt_today?: Date | null): DateRange;
}
export declare namespace DateRange {
    /**
     * Standard date range keys. Equivalent to the enum IDs in
     * DateRange.java http://go/datarange.java
     */
    enum StandardDateRangeKeys {
        YESTERDAY = "yesterday",
        TODAY = "today",
        LAST_7_DAYS = "last7days",
        THIS_MONTH = "thismonth",
        LAST_MONTH = "lastmonth",
        THIS_WEEK = "thisweek",
        LAST_WEEK = "lastweek",
        LAST_BUSINESS_WEEK = "lastbusinessweek",
        ALL_TIME = "alltime"
    }
    /**
     * Creates an iterator over the dates in a {@link DateRange}.
     */
    class Iterator extends Iterator<Date | null> {
        /**
         * Creates an iterator over the dates in a {@link DateRange}.
         * @param dateRange The date range to iterate.
         */
        constructor(dateRange: DateRange | null);
        private noStructuralTyping_closure_goog_date_daterange_Iterator;
        next(): IteratorResult<Date>;
    }
}
