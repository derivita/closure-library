import type { DateLike } from '../date/date.js';
/**
 * TimeZone class implemented a time zone resolution and name information
 * source for client applications. The time zone object is initiated from
 * a time zone information object. Application can initiate a time zone
 * statically, or it may choose to initiate from a data obtained from server.
 * Each time zone information array is small, but the whole set of data
 * is too much for client application to download. If end user is allowed to
 * change time zone setting, dynamic retrieval should be the method to use.
 * In case only time zone offset is known, there is a decent fallback
 * that only use the time zone offset to create a TimeZone object.
 */
export declare class TimeZone {
    /**
     * TimeZone class implemented a time zone resolution and name information
     * source for client applications. The time zone object is initiated from
     * a time zone information object. Application can initiate a time zone
     * statically, or it may choose to initiate from a data obtained from server.
     * Each time zone information array is small, but the whole set of data
     * is too much for client application to download. If end user is allowed to
     * change time zone setting, dynamic retrieval should be the method to use.
     * In case only time zone offset is known, there is a decent fallback
     * that only use the time zone offset to create a TimeZone object.
     */
    constructor();
    private noStructuralTyping_closure_goog_i18n_timezone_TimeZone;
    /**
     * This factory method creates a time zone instance.  It takes either an object
     * containing complete time zone information, or a single number representing a
     * constant time zone offset.  If the latter form is used, DST functionality is
     * not available.
     * @param timeZoneData If this parameter is a number, it should indicate minutes WEST of UTC to be used as a constant time zone offset. Otherwise, it should be an object with these four fields: <ul> <li>id: A string ID for the time zone. <li>std_offset: The standard time zone offset in minutes EAST of UTC. <li>names: An array of four names (standard short name, standard long name, daylight short name, daylight long, name) <li>names_ext: A hash of four fields (standard long name gmt, daylight long name gmt, standard generic location, daylight generic location) <li>transitions: An array of numbers which are interpreted in pairs: [time1, adjustment1, time2, adjustment2, ...] where each time is a DST transition point given as a number of hours since 00:00 UTC, January 1, 1970, and each adjustment is the adjustment to apply for times after the DST transition, given as minutes EAST of UTC. </ul>
     * @return A TimeZone object for the given time zone data.
     */
    static createTimeZone(timeZoneData: number | object | null): TimeZone;
    /**
     * Convert the contents of time zone object to a timeZoneData object, suitable
     * for passing to TimeZone.createTimeZone.
     * @return A timeZoneData object (see the documentation for TimeZone.createTimeZone).
     */
    getTimeZoneData(): object;
    /**
     * Return the DST adjustment to the time zone offset for a given time.
     * While Daylight Saving Time is in effect, this number is positive.
     * Otherwise, it is zero.
     * @param date The time to check.
     * @return The DST adjustment in minutes EAST of UTC.
     */
    getDaylightAdjustment(date: DateLike | null): number;
    /**
     * Return the GMT representation of this time zone object.
     * @param date The date for which time to retrieve GMT string.
     * @return GMT representation string.
     */
    getGMTString(date: DateLike | null): string;
    /**
     * Return the UTC representation of this time zone object.
     * @param date The date for which time to retrieve UTC string.
     * @return UTC representation string.
     */
    getUTCString(date: DateLike): string;
    /**
     * Get the long time zone name for a given date/time.
     * @param date The time for which to retrieve the long time zone name.
     * @return The long time zone name.
     */
    getLongName(date: DateLike | null): string;
    /**
     * Get the time zone offset in minutes WEST of UTC for a given date/time.
     * @param date The time for which to retrieve the time zone offset.
     * @return The time zone offset in minutes WEST of UTC.
     */
    getOffset(date: DateLike | null): number;
    /**
     * Get the RFC representation of the time zone for a given date/time.
     * @param date The time for which to retrieve the RFC time zone string.
     * @return The RFC time zone string.
     */
    getRFCTimeZoneString(date: DateLike | null): string;
    /**
     * Get the short time zone name for given date/time.
     * @param date The time for which to retrieve the short time zone name.
     * @return The short time zone name.
     */
    getShortName(date: DateLike | null): string;
    /**
     * Return the time zone ID for this time zone.
     * @return The time zone ID.
     */
    getTimeZoneId(): string;
    /**
     * Check if Daylight Saving Time is in effect at a given time in this time zone.
     * @param date The time to check.
     * @return True if Daylight Saving Time is in effect.
     */
    isDaylightTime(date: DateLike | null): boolean;
    /**
     * Get the long GMT time zone name for a given date/time.
     * @param date The time for which to retrieve the long GMT time zone name.
     * @return The long GMT time zone name.
     */
    getLongNameGMT(date: DateLike): string;
    /**
     * Get the generic location time zone name for a given date/time.
     * @param date The time for which to retrieve the generic location time zone name.
     * @return The generic location time zone name.
     */
    getGenericLocation(date: DateLike): string;
}
export declare namespace TimeZone {
    /**
     * Indices into the array of time zone names.
     */
    enum NameType {
        STD_SHORT_NAME = 0,
        STD_LONG_NAME = 1,
        DLT_SHORT_NAME = 2,
        DLT_LONG_NAME = 3
    }
}
