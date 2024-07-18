import { Iterator } from '../iter/iter.js';
import { Range } from './range.js';
/**
 * Constructs a new RangeSet, which can store numeric ranges.
 *
 * Ranges are treated as half-closed: that is, they are exclusive of their end
 * value [start, end).
 *
 * New ranges added to the set which overlap the values in one or more existing
 * ranges will be merged.
 */
export declare class RangeSet implements Iterable<Range> {
    /**
     * Constructs a new RangeSet, which can store numeric ranges.
     *
     * Ranges are treated as half-closed: that is, they are exclusive of their end
     * value [start, end).
     *
     * New ranges added to the set which overlap the values in one or more existing
     * ranges will be merged.
     */
    constructor();
    private noStructuralTyping_closure_goog_math_rangeset_RangeSet;
    /**
     * Compares two sets for equality.
     * @param a A range set.
     * @param b A range set.
     * @return Whether both sets contain the same values.
     */
    static equals(a: RangeSet | null, b: RangeSet | null): boolean;
    clone(): RangeSet;
    /**
     * Adds a range to the set. If the new range overlaps existing values, those
     * ranges will be merged.
     * @param a The range to add.
     */
    add(a: Range | null): void;
    /**
     * Removes a range of values from the set.
     * @param a The range to remove.
     */
    remove(a: Range | null): void;
    /**
     * Determines whether a given range is in the set. Only succeeds if the entire
     * range is available.
     * @param a The query range.
     * @return Whether the entire requested range is set.
     */
    contains(a: Range | null): boolean;
    /**
     * Determines whether a given value is set in the RangeSet.
     * @param value The value to test.
     * @return Whether the given value is in the set.
     */
    containsValue(value: number): boolean;
    /**
     * Returns the union of this RangeSet with another.
     * @param set Another RangeSet.
     * @return A new RangeSet containing all values from either set.
     */
    union(set: RangeSet | null): RangeSet;
    /**
     * Subtracts the ranges of another set from this one, returning the result
     * as a new RangeSet.
     * @param set The RangeSet to subtract.
     * @return A new RangeSet containing all values in this set minus the values of the input set.
     */
    difference(set: RangeSet): RangeSet;
    /**
     * Intersects this RangeSet with another.
     * @param set The RangeSet to intersect with.
     * @return A new RangeSet containing all values set in both this and the input set.
     */
    intersection(set: RangeSet | null): RangeSet;
    /**
     * Creates a subset of this set over the input range.
     * @param range The range to copy into the slice.
     * @return A new RangeSet with a copy of the values in the input range.
     */
    slice(range: Range | null): RangeSet;
    /**
     * Creates an inverted slice of this set over the input range.
     * @param range The range to copy into the slice.
     * @return A new RangeSet containing inverted values from the original over the input range.
     */
    inverse(range: Range | null): RangeSet;
    coveredLength(): number;
    getBounds(): Range | null;
    isEmpty(): boolean;
    /**
     * Removes all values in the set.
     */
    clear(): void;
    /**
     * Returns an iterator that iterates over the ranges in the RangeSet.
     * @param opt_keys Ignored for RangeSets.
     * @return An iterator over the values in the set.
     */
    __iterator__(opt_keys?: boolean): Iterator<any>;
    /**
     * Returns an iterator that iterates over the ranges in the RangeSet.
     * @return An iterator over the values in the set.
     */
    [Symbol.iterator](): Iterator<Range>;
}
