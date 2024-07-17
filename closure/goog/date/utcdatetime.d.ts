import { DateTime, DateLike } from './date.js';
/**
 * Class representing a date/time in GMT+0 time zone, without daylight saving.
 * Defaults to current date and time if none is specified. The get... and the
 * getUTC... methods are equivalent.
 */
export declare class UtcDateTime extends DateTime {
    /**
     * Class representing a date/time in GMT+0 time zone, without daylight saving.
     * Defaults to current date and time if none is specified. The get... and the
     * getUTC... methods are equivalent.
     * @param opt_year Four digit UTC year or a date-like object.  If not set, the created object will contain the date determined by goog.now().
     * @param opt_month UTC month, 0 = Jan, 11 = Dec.
     * @param opt_date UTC date of month, 1 - 31.
     * @param opt_hours UTC hours, 0 - 23.
     * @param opt_minutes UTC minutes, 0 - 59.
     * @param opt_seconds UTC seconds, 0 - 59.
     * @param opt_milliseconds UTC milliseconds, 0 - 999.
     */
    constructor(opt_year?: number | DateLike | null, opt_month?: number, opt_date?: number, opt_hours?: number, opt_minutes?: number, opt_seconds?: number, opt_milliseconds?: number);
    private noStructuralTyping_closure_goog_date_utcdatetime_UtcDateTime;
    date: any;
    /**
     *
     * @param timestamp Number of milliseconds since Epoch.
     */
    static fromTimestamp(timestamp: number): UtcDateTime;
    /**
     * Creates a DateTime from a UTC datetime string expressed in ISO 8601 format.
     * @param formatted A date or datetime expressed in ISO 8601 format.
     * @return Parsed date or null if parse fails.
     */
    static fromIsoString(formatted: string): UtcDateTime | null;
    /**
     * Clones the UtcDateTime object.
     * @return A clone of the datetime object.
     */
    clone(): UtcDateTime;
    add(interval: any): void;
    getTimezoneOffset(): number;
}
