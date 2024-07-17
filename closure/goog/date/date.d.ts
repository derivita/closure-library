/**
 * Constants for weekdays.
 */
export declare enum weekDay {
    MON = 0,
    TUE = 1,
    WED = 2,
    THU = 3,
    FRI = 4,
    SAT = 5,
    SUN = 6
}
/**
 * Constants for months.
 */
declare enum month_ {
    JAN = 0,
    FEB = 1,
    MAR = 2,
    APR = 3,
    MAY = 4,
    JUN = 5,
    JUL = 6,
    AUG = 7,
    SEP = 8,
    OCT = 9,
    NOV = 10,
    DEC = 11
}
export { month_ as month };
/**
 * Number of milliseconds in a day.
 */
export declare var MS_PER_DAY: number;
/**
 * Returns whether the given year is a leap year.
 * @param year Year part of date.
 * @return Whether the given year is a leap year.
 */
export declare function isLeapYear(year: number): boolean;
/**
 * Returns whether the given year is a long ISO year.
 * See {@link http://www.phys.uu.nl/~vgent/calendar/isocalendar_text3.htm}.
 * @param year Full year part of date.
 * @return Whether the given year is a long ISO year.
 */
export declare function isLongIsoYear(year: number): boolean;
/**
 * Returns the number of days for a given month.
 * @param year Year part of date.
 * @param month Month part of date.
 * @return The number of days for the given month.
 */
export declare function getNumberOfDaysInMonth(year: number, month: number): number;
/**
 * Returns true if the 2 dates are in the same day.
 * @param date The time to check.
 * @param opt_now The current time.
 * @return Whether the dates are on the same day.
 */
export declare function isSameDay(date: DateLike | null, opt_now?: DateLike | null): boolean;
/**
 * Returns true if the 2 dates are in the same month.
 * @param date The time to check.
 * @param opt_now The current time.
 * @return Whether the dates are in the same calendar month.
 */
export declare function isSameMonth(date: DateLike | null, opt_now?: DateLike | null): boolean;
/**
 * Returns true if the 2 dates are in the same year.
 * @param date The time to check.
 * @param opt_now The current time.
 * @return Whether the dates are in the same calendar year.
 */
export declare function isSameYear(date: DateLike | null, opt_now?: DateLike | null): boolean;
/**
 * Static function for week number calculation. ISO 8601 implementation.
 * @param year Year part of date.
 * @param month Month part of date (0-11).
 * @param date Day part of date (1-31).
 * @param opt_weekDay Cut off weekday, defaults to Thursday.
 * @param opt_firstDayOfWeek First day of the week, defaults to Monday. Monday=0, Sunday=6.
 * @return The week number (1-53).
 */
export declare function getWeekNumber(year: number, month: number, date: number, opt_weekDay?: number, opt_firstDayOfWeek?: number): number;
/**
 * Static function for year of the week. ISO 8601 implementation.
 * @param year Year part of date.
 * @param month Month part of date (0-11).
 * @param date Day part of date (1-31).
 * @param opt_weekDay Cut off weekday, defaults to Thursday.
 * @param opt_firstDayOfWeek First day of the week, defaults to Monday. Monday=0, Sunday=6.
 * @return The four digit year of date.
 */
export declare function getYearOfWeek(year: number, month: number, date: number, opt_weekDay?: number, opt_firstDayOfWeek?: number): number;
/**
 *
 * @param date1 A datelike object.
 * @param date2 Another datelike object.
 * @return The earlier of them in time.
 */
export declare function min<T = any, S = any>(date1: T | null, date2: S | null): T | S | null;
/**
 *
 * @param date1 A datelike object.
 * @param date2 Another datelike object.
 * @return The later of them in time.
 */
export declare function max<T = any, S = any>(date1: T | null, date2: S | null): T | S | null;
/**
 * Parses a datetime string expressed in ISO 8601 format. Overwrites the date
 * and optionally the time part of the given object with the parsed values.
 * @param dateTime Object whose fields will be set.
 * @param formatted A date or datetime expressed in ISO 8601 format.
 * @return Whether the parsing succeeded.
 */
export declare function setIso8601DateTime(dateTime: DateTime, formatted: string): boolean;
/**
 * Sets time fields based on an ISO 8601 format string.
 * Note: only time fields, not date fields.
 * @param d Object whose fields will be set.
 * @param formatted A time expressed in ISO 8601 format.
 * @return Whether the parsing succeeded.
 */
export declare function setIso8601TimeOnly_(d: DateTime, formatted: string): boolean;
/**
 * Pads the year to 4 unsigned digits, or 6 digits with a sign.
 */
export declare function padYear_(year: number): string;
/**
 * Class representing a date/time interval. Used for date calculations.
 * <pre>
 * new Interval(0, 1) // One month
 * new Interval(0, 0, 3, 1) // Three days and one hour
 * new Interval(Interval.DAYS, 1) // One day
 * </pre>
 */
export declare class Interval {
    /**
     * Class representing a date/time interval. Used for date calculations.
     * <pre>
     * new Interval(0, 1) // One month
     * new Interval(0, 0, 3, 1) // Three days and one hour
     * new Interval(Interval.DAYS, 1) // One day
     * </pre>
     * @param opt_years Years or string representing date part.
     * @param opt_months Months or number of whatever date part specified by first parameter.
     * @param opt_days Days.
     * @param opt_hours Hours.
     * @param opt_minutes Minutes.
     * @param opt_seconds Seconds.
     */
    constructor(opt_years?: number | string, opt_months?: number, opt_days?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number);
    private noStructuralTyping_closure_goog_date_date_Interval;
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    /**
     * Parses an XML Schema duration (ISO 8601 extended).
     * @param duration An XML schema duration in textual format. Recurring durations and weeks are not supported.
     * @return The duration as a Interval or null if the parse fails.
     */
    static fromIsoString(duration: string): Interval | null;
    /**
     * Serializes Interval into XML Schema duration (ISO 8601 extended).
     * @param opt_verbose Include zero fields in the duration string.
     * @return An XML schema duration in ISO 8601 extended format, or null if the interval contains both positive and negative fields.
     */
    toIsoString(opt_verbose?: boolean): string | null;
    /**
     * Tests whether the given interval is equal to this interval.
     * Note, this is a simple field-by-field comparison, it doesn't
     * account for comparisons like "12 months == 1 year".
     * @param other The interval to test.
     * @return Whether the intervals are equal.
     */
    equals(other: Interval | null): boolean;
    clone(): Interval;
    /**
     * Years constant for the date parts.
     */
    static YEARS: string;
    /**
     * Months constant for the date parts.
     */
    static MONTHS: string;
    /**
     * Days constant for the date parts.
     */
    static DAYS: string;
    /**
     * Hours constant for the date parts.
     */
    static HOURS: string;
    /**
     * Minutes constant for the date parts.
     */
    static MINUTES: string;
    /**
     * Seconds constant for the date parts.
     */
    static SECONDS: string;
    isZero(): boolean;
    getInverse(): Interval;
    /**
     * Calculates n * (this interval) by memberwise multiplication.
     * @param n An integer.
     * @return n * this.
     */
    times(n: number): Interval;
    /**
     * Gets the total number of seconds in the time interval. Assumes that months
     * and years are empty.
     * @return Total number of seconds in the interval.
     */
    getTotalSeconds(): number;
    /**
     * Adds the Interval in the argument to this Interval field by field.
     * @param interval The Interval to add.
     */
    add(interval: Interval | null): void;
}
export type DateLike = Date | Date_ | null;
/**
 * Class representing a date. Defaults to current date if none is specified.
 *
 * Implements most methods of the native js Date object (except the time related
 * ones, {@see DateTime}) and can be used interchangeably with it just
 * as if Date_ was a synonym of Date. To make this more transparent,
 * Closure APIs should accept DateLike instead of the real Date
 * object.
 */
declare class Date_ {
    /**
     * Class representing a date. Defaults to current date if none is specified.
     *
     * Implements most methods of the native js Date object (except the time related
     * ones, {@see DateTime}) and can be used interchangeably with it just
     * as if Date_ was a synonym of Date. To make this more transparent,
     * Closure APIs should accept DateLike instead of the real Date
     * object.
     * @param opt_year Four digit year or a date-like object. If not set, the created object will contain the date determined by goog.now().
     * @param opt_month Month, 0 = Jan, 11 = Dec.
     * @param opt_date Date of month, 1 - 31.
     */
    constructor(opt_year?: number | DateLike | null, opt_month?: number, opt_date?: number);
    private noStructuralTyping_closure_goog_date_date_Date_;
    protected date: Date;
    clone(): Date_;
    getFullYear(): number;
    /**
     * Alias for getFullYear.
     * @return The four digit year of date.
     */
    getYear(): number;
    getMonth(): month_ | null;
    getDate(): number;
    /**
     * Returns the number of milliseconds since 1 January 1970 00:00:00.
     * @return The number of milliseconds since 1 January 1970 00:00:00.
     */
    getTime(): number;
    getDay(): number;
    getIsoWeekday(): weekDay | null;
    getWeekday(): number;
    getUTCFullYear(): number;
    getUTCMonth(): month_ | null;
    getUTCDate(): number;
    getUTCDay(): number;
    getUTCHours(): number;
    getUTCMinutes(): number;
    getUTCIsoWeekday(): weekDay | null;
    getUTCWeekday(): number;
    getFirstDayOfWeek(): number;
    getFirstWeekCutOffDay(): number;
    getNumberOfDaysInMonth(): number;
    getWeekNumber(): number;
    /**
     * Returns year in Week of Year based calendars in which the year transition
     * occurs on a week boundary.
     * @return The four digit year in "Week of Year"
     */
    getYearOfWeek(): number;
    getDayOfYear(): number;
    /**
     * Returns timezone offset. The timezone offset is the delta in minutes between
     * UTC and your local time. E.g., UTC+10 returns -600. Daylight savings time
     * prevents this value from being constant.
     * @return The timezone offset.
     */
    getTimezoneOffset(): number;
    /**
     * Returns timezone offset as a string. Returns offset in [+-]HH:mm format or Z
     * for UTC.
     * @return The timezone offset as a string.
     */
    getTimezoneOffsetString(): string;
    /**
     * Sets the date.
     * @param date Date object to set date from.
     */
    set(date: Date_ | null): void;
    /**
     * Sets the year part of the date.
     * @param year Four digit year.
     */
    setFullYear(year: number): void;
    /**
     * Alias for setFullYear.
     * @param year Four digit year.
     */
    setYear(year: number): void;
    /**
     * Sets the month part of the date.
     *
     * TODO(nnaze): Update type to month.
     * @param month The month, where 0 = Jan, 11 = Dec.
     */
    setMonth(month: number): void;
    /**
     * Sets the day part of the date.
     * @param date The day part.
     */
    setDate(date: number): void;
    /**
     * Sets the value of the date object as expressed in the number of milliseconds
     * since 1 January 1970 00:00:00.
     * @param ms Number of milliseconds since 1 Jan 1970.
     */
    setTime(ms: number): void;
    /**
     * Sets the year part of the date according to universal time.
     * @param year Four digit year.
     */
    setUTCFullYear(year: number): void;
    /**
     * Sets the month part of the date according to universal time.
     * @param month The month, where 0 = Jan, 11 = Dec.
     */
    setUTCMonth(month: number): void;
    /**
     * Sets the day part of the date according to universal time.
     * @param date The UTC date.
     */
    setUTCDate(date: number): void;
    /**
     * Sets the first day of week.
     * @param day 0 = Mon, 6 = Sun.
     */
    setFirstDayOfWeek(day: number): void;
    /**
     * Sets cut off weekday used for week number calculations. 0 = Mon, 6 = Sun.
     * @param day The cut off weekday.
     */
    setFirstWeekCutOffDay(day: number): void;
    /**
     * Performs date calculation by adding the supplied interval to the date.
     * @param interval Date interval to add.
     */
    add(interval: Interval | null): void;
    /**
     * Returns ISO 8601 string representation of date. Consistent with the
     * standard built-in Date#toISOString method, the year is either four digits
     * (YYYY) or six with a sign prefix (YYYYYY), since ISO 8601 requires the
     * number of digits in the year to be agreed upon in advance.
     * @param opt_verbose Whether the verbose format should be used instead of the default compact one.
     * @param opt_tz Whether the timezone offset should be included in the string.
     * @return ISO 8601 string representation of date.
     */
    toIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    /**
     * Returns ISO 8601 string representation of date according to universal time.
     * @param opt_verbose Whether the verbose format should be used instead of the default compact one.
     * @param opt_tz Whether the timezone offset should be included in the string.
     * @return ISO 8601 string representation of date according to universal time.
     */
    toUTCIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    /**
     * Tests whether given date is equal to this Date.
     * Note: This ignores units more precise than days (hours and below)
     * and also ignores timezone considerations.
     * @param other The date to compare.
     * @return Whether the given date is equal to this one.
     */
    equals(other: Date_ | null): boolean;
    /**
     * Overloaded toString method for object.
     * @return ISO 8601 string representation of date.
     */
    toString(): string;
    valueOf(): number;
    /**
     * Compares two dates.  May be used as a sorting function.
     * @param date1 Date to compare.
     * @param date2 Date to compare.
     * @return Comparison result. 0 if dates are the same, less than 0 if date1 is earlier than date2, greater than 0 if date1 is later than date2.
     */
    static compare(date1: DateLike, date2: DateLike): number;
    /**
     * Parses an ISO 8601 string as a `Date`.
     * @param formatted ISO 8601 string to parse.
     * @return Parsed date or null if parse fails.
     */
    static fromIsoString(formatted: string): Date_ | null;
}
export { Date_ as Date };
/**
 * Class representing a date and time. Defaults to current date and time if none
 * is specified.
 *
 * Implements most methods of the native js Date object and can be used
 * interchangeably with it just as if DateTime was a subclass of Date.
 */
export declare class DateTime extends Date_ {
    /**
     * Class representing a date and time. Defaults to current date and time if none
     * is specified.
     *
     * Implements most methods of the native js Date object and can be used
     * interchangeably with it just as if DateTime was a subclass of Date.
     * @param opt_year Four digit year or a date-like object. If not set, the created object will contain the date determined by goog.now().
     * @param opt_month Month, 0 = Jan, 11 = Dec.
     * @param opt_date Date of month, 1 - 31.
     * @param opt_hours Hours, 0 - 23.
     * @param opt_minutes Minutes, 0 - 59.
     * @param opt_seconds Seconds, 0 - 61.
     * @param opt_milliseconds Milliseconds, 0 - 999.
     */
    constructor(opt_year?: number | {
        'getTime': any;
    } | null, opt_month?: number, opt_date?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number, opt_milliseconds?: number);
    private noStructuralTyping_closure_goog_date_date_DateTime;
    date: any;
    /**
     *
     * @param timestamp Number of milliseconds since Epoch.
     */
    static fromTimestamp(timestamp: number): DateTime;
    /**
     * Creates a DateTime from a datetime string expressed in RFC 822 format.
     * @param formatted A date or datetime expressed in RFC 822 format.
     * @return Parsed date or null if parse fails.
     */
    static fromRfc822String(formatted: string): DateTime | null;
    /**
     * Returns the hours part of the datetime.
     * @return An integer between 0 and 23, representing the hour.
     */
    getHours(): number;
    /**
     * Returns the minutes part of the datetime.
     * @return An integer between 0 and 59, representing the minutes.
     */
    getMinutes(): number;
    /**
     * Returns the seconds part of the datetime.
     * @return An integer between 0 and 59, representing the seconds.
     */
    getSeconds(): number;
    /**
     * Returns the milliseconds part of the datetime.
     * @return An integer between 0 and 999, representing the milliseconds.
     */
    getMilliseconds(): number;
    /**
     * Returns the day of week according to universal time, US style.
     * @return Day of week, 0 = Sun, 1 = Mon, 6 = Sat.
     */
    getUTCDay(): weekDay | null;
    /**
     * Returns the hours part of the datetime according to universal time.
     * @return An integer between 0 and 23, representing the hour.
     */
    getUTCHours(): number;
    /**
     * Returns the minutes part of the datetime according to universal time.
     * @return An integer between 0 and 59, representing the minutes.
     */
    getUTCMinutes(): number;
    /**
     * Returns the seconds part of the datetime according to universal time.
     * @return An integer between 0 and 59, representing the seconds.
     */
    getUTCSeconds(): number;
    /**
     * Returns the milliseconds part of the datetime according to universal time.
     * @return An integer between 0 and 999, representing the milliseconds.
     */
    getUTCMilliseconds(): number;
    /**
     * Sets the hours part of the datetime.
     * @param hours An integer between 0 and 23, representing the hour.
     */
    setHours(hours: number): void;
    /**
     * Sets the minutes part of the datetime.
     * @param minutes Integer between 0 and 59, representing the minutes.
     */
    setMinutes(minutes: number): void;
    /**
     * Sets the seconds part of the datetime.
     * @param seconds Integer between 0 and 59, representing the seconds.
     */
    setSeconds(seconds: number): void;
    /**
     * Sets the milliseconds part of the datetime.
     * @param ms Integer between 0 and 999, representing the milliseconds.
     */
    setMilliseconds(ms: number): void;
    /**
     * Sets the hours part of the datetime according to universal time.
     * @param hours An integer between 0 and 23, representing the hour.
     */
    setUTCHours(hours: number): void;
    /**
     * Sets the minutes part of the datetime according to universal time.
     * @param minutes Integer between 0 and 59, representing the minutes.
     */
    setUTCMinutes(minutes: number): void;
    /**
     * Sets the seconds part of the datetime according to universal time.
     * @param seconds Integer between 0 and 59, representing the seconds.
     */
    setUTCSeconds(seconds: number): void;
    /**
     * Sets the seconds part of the datetime according to universal time.
     * @param ms Integer between 0 and 999, representing the milliseconds.
     */
    setUTCMilliseconds(ms: number): void;
    isMidnight(): boolean;
    /**
     * Performs date calculation by adding the supplied interval to the date.
     * @param interval Date interval to add.
     */
    add(interval: Interval | null): void;
    /**
     * Returns ISO 8601 string representation of date/time. Consistent with the
     * standard built-in Date#toISOString method, the year is either four digits
     * (YYYY) or six with a sign prefix (YYYYYY), since ISO 8601 requires the
     * number of digits in the year to be agreed upon in advance.
     * @param opt_verbose Whether the verbose format should be used instead of the default compact one.
     * @param opt_tz Whether the timezone offset should be included in the string.
     * @return ISO 8601 string representation of date/time.
     */
    toIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    /**
     * Returns XML Schema 2 string representation of date/time.
     * The return value is also ISO 8601 compliant.
     * @param opt_timezone Should the timezone offset be included in the string?.
     * @return XML Schema 2 string representation of date/time.
     */
    toXmlDateTime(opt_timezone?: boolean): string;
    /**
     * Returns ISO 8601 string representation of date/time according to universal
     * time.
     * @param opt_verbose Whether the opt_verbose format should be returned instead of the default compact one.
     * @param opt_tz Whether the timezone offset should be included in the string.
     * @return ISO 8601 string representation of date/time according to universal time.
     */
    toUTCIsoString(opt_verbose?: boolean, opt_tz?: boolean): string;
    /**
     * Returns RFC 3339 string representation of datetime in UTC.
     * @return A UTC datetime expressed in RFC 3339 format.
     */
    toUTCRfc3339String(): string;
    /**
     * Tests whether given datetime is exactly equal to this DateTime.
     * @param other The datetime to compare.
     * @return Whether the given datetime is exactly equal to this one.
     */
    equals(other: Date_ | null): boolean;
    /**
     * Overloaded toString method for object.
     * @return ISO 8601 string representation of date/time.
     */
    toString(): string;
    /**
     * Generates time label for the datetime, e.g., '5:30 AM'.
     * By default this does not pad hours (e.g., to '05:30') and it does add
     * an am/pm suffix.
     * TODO(user): i18n -- hardcoding time format like this is bad.  E.g., in CJK
     * locales, need Chinese characters for hour and minute units.
     * @param opt_padHours Whether to pad hours, e.g., '05:30' vs '5:30'.
     * @param opt_showAmPm Whether to show the 'am' and 'pm' suffix.
     * @param opt_omitZeroMinutes E.g., '5:00pm' becomes '5pm', but '5:01pm' remains '5:01pm'.
     * @return The time label.
     */
    toUsTimeString(opt_padHours?: boolean, opt_showAmPm?: boolean, opt_omitZeroMinutes?: boolean): string;
    /**
     * Generates time label for the datetime in standard ISO 24-hour time format.
     * E.g., '06:00:00' or '23:30:15'.
     * @param opt_showSeconds Whether to shows seconds. Defaults to TRUE.
     * @return The time label.
     */
    toIsoTimeString(opt_showSeconds?: boolean): string;
    clone(): DateTime;
    /**
     * Parses an ISO 8601 string as a `DateTime`.
     * @param formatted ISO 8601 string to parse.
     * @return Parsed date or null if parse fails.
     */
    static fromIsoString(formatted: string): DateTime | null;
}
