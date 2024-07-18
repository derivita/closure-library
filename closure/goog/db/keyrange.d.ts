/**
 * Creates a new IDBKeyRange wrapper object. Should not be created directly,
 * instead use one of the static factory methods. For example:
 */
export declare class KeyRange {
    /**
     * Creates a new IDBKeyRange wrapper object. Should not be created directly,
     * instead use one of the static factory methods. For example:
     * @param range Underlying IDBKeyRange object.
     */
    constructor(range: IDBKeyRange);
    private noStructuralTyping_closure_goog_db_keyrange_KeyRange;
    /**
     * Creates a new key range for a single value.
     * @param key The single value in the range.
     * @return The key range.
     */
    static only(key: IDBValidKey | null): KeyRange;
    /**
     * Creates a key range with upper and lower bounds.
     * @param lower The value of the lower bound.
     * @param upper The value of the upper bound.
     * @param opt_lowerOpen If true, the range excludes the lower bound value.
     * @param opt_upperOpen If true, the range excludes the upper bound value.
     * @return The key range.
     */
    static bound(lower: IDBValidKey | null, upper: IDBValidKey | null, opt_lowerOpen?: boolean, opt_upperOpen?: boolean): KeyRange;
    /**
     * Creates a key range with a lower bound only, finishes at the last record.
     * @param lower The value of the lower bound.
     * @param opt_lowerOpen If true, the range excludes the lower bound value.
     * @return The key range.
     */
    static lowerBound(lower: IDBValidKey | null, opt_lowerOpen?: boolean): KeyRange;
    /**
     * Creates a key range with a upper bound only, starts at the first record.
     * @param upper The value of the upper bound.
     * @param opt_upperOpen If true, the range excludes the upper bound value.
     * @return The key range.
     */
    static upperBound(upper: IDBValidKey | null, opt_upperOpen?: boolean): KeyRange;
    /**
     * Returns underlying key range object. This is used in ObjectStore's openCursor
     * and count methods.
     */
    range(): IDBKeyRange;
}
