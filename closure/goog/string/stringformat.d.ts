/**
 * Performs sprintf-like conversion, i.e. puts the values in a template.
 * DO NOT use it instead of built-in conversions in simple cases such as
 * 'Cost: %.2f' as it would introduce unnecessary latency opposed to
 * 'Cost: ' + cost.toFixed(2).
 * @param formatString Template string containing % specifiers.
 * @param var_args Values formatString is to be filled with.
 * @return Formatted string.
 */
export declare function format(formatString: string, ...var_args: (string | number | undefined)[]): string;
export declare namespace format {
    /**
     * Contains various conversion functions (to be filled in later on).
     */
    var demuxes_: object;
}
