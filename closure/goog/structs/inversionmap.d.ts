/**
 * Maps ranges to values.
 */
export declare class InversionMap<T = any> {
    /**
     * Maps ranges to values.
     * @param rangeArray An array of monotonically increasing integer values, with at least one instance.
     * @param valueArray An array of corresponding values. Length must be the same as rangeArray.
     * @param opt_delta If true, saves only delta from previous value.
     */
    constructor(rangeArray: number[] | null, valueArray: (T | null)[] | null, opt_delta?: boolean);
    private noStructuralTyping_closure_goog_structs_inversionmap_InversionMap;
    protected rangeArray: number[] | null;
    protected values: (T | null)[] | null;
    /**
     * Splices a range -> value map into this inversion map.
     * @param rangeArray An array of monotonically increasing integer values, with at least one instance.
     * @param valueArray An array of corresponding values. Length must be the same as rangeArray.
     * @param opt_delta If true, saves only delta from previous value.
     */
    spliceInversion(rangeArray: number[] | null, valueArray: (T | null)[] | null, opt_delta?: boolean): void;
    /**
     * Gets the value corresponding to a number from the inversion map.
     * @param intKey The number for which value needs to be retrieved from inversion map.
     * @return Value retrieved from inversion map; null if not found.
     */
    at(intKey: number): T | null | null;
    /**
     * Gets the largest index such that rangeArray[index] <= intKey from the
     * inversion map.
     * @param intKey The probe for which rangeArray is searched.
     * @return Largest index such that rangeArray[index] <= intKey.
     */
    protected getLeast(intKey: number): number;
}
