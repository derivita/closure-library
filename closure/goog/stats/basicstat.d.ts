/**
 * Tracks basic statistics over a specified time interval.
 *
 * Statistics are kept in a fixed number of slots, each representing
 * an equal portion of the time interval.
 *
 * Most methods optionally allow passing in the current time, so that
 * higher level stats can synchronize operations on multiple child
 * objects.  Under normal usage, the default of Date.now() should be
 * sufficient.
 */
export declare class BasicStat {
    /**
     * Tracks basic statistics over a specified time interval.
     *
     * Statistics are kept in a fixed number of slots, each representing
     * an equal portion of the time interval.
     *
     * Most methods optionally allow passing in the current time, so that
     * higher level stats can synchronize operations on multiple child
     * objects.  Under normal usage, the default of Date.now() should be
     * sufficient.
     * @param interval The stat interval, in milliseconds.
     */
    constructor(interval: number);
    private noStructuralTyping_closure_goog_stats_basicstat_BasicStat;
    getInterval(): number;
    /**
     * Increments the count of this statistic by the specified amount.
     * @param amt The amount to increase the count by.
     * @param opt_now The time, in milliseconds, to be treated as the "current" time.  The current time must always be greater than or equal to the last time recorded by this stat tracker.
     */
    incBy(amt: number, opt_now?: number): void;
    /**
     * Returns the count of the statistic over its configured time
     * interval.
     * @param opt_now The time, in milliseconds, to be treated as the "current" time.  The current time must always be greater than or equal to the last time recorded by this stat tracker.
     * @return The total count over the tracked interval.
     */
    get(opt_now?: number): number;
    /**
     * Returns the magnitute of the largest atomic increment that occurred
     * during the watched time interval.
     * @param opt_now The time, in milliseconds, to be treated as the "current" time.  The current time must always be greater than or equal to the last time recorded by this stat tracker.
     * @return The maximum count of this statistic.
     */
    getMax(opt_now?: number): number;
    /**
     * Returns the magnitute of the smallest atomic increment that
     * occurred during the watched time interval.
     * @param opt_now The time, in milliseconds, to be treated as the "current" time.  The current time must always be greater than or equal to the last time recorded by this stat tracker.
     * @return The minimum count of this statistic.
     */
    getMin(opt_now?: number): number;
}
export declare namespace BasicStat {
    /**
     * A struct containing information for each sub-interval.
     */
    class Slot_ {
        /**
         * A struct containing information for each sub-interval.
         * @param end The end time for this slot, in milliseconds.
         */
        constructor(end: number);
        private noStructuralTyping_closure_goog_stats_basicstat_Slot_;
        /**
         * End time of this slot, exclusive.
         */
        end: number;
        /**
         * Aggregated count within this slot.
         */
        count: number;
        /**
         * The smallest atomic increment of the count within this slot.
         */
        min: number;
        /**
         * The largest atomic increment of the count within this slot.
         */
        max: number;
    }
}
