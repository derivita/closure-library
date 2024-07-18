/**
 * A number range.
 */
export declare class Range {
    /**
     * A number range.
     * @param a One end of the range.
     * @param b The other end of the range.
     */
    constructor(a: number, b: number);
    private noStructuralTyping_closure_goog_math_range_Range;
    /**
     * The lowest value in the range.
     */
    start: number;
    /**
     * The highest value in the range.
     */
    end: number;
    /**
     * Creates a Range from an array of two numbers.
     */
    static fromPair(pair: number[]): Range;
    clone(): Range;
    getLength(): number;
    /**
     * Extends this range to include the given point.
     */
    includePoint(point: number): void;
    /**
     * Extends this range to include the given range.
     */
    includeRange(range: Range): void;
    /**
     * Compares ranges for equality.
     * @param a A Range.
     * @param b A Range.
     * @return True iff both the starts and the ends of the ranges are equal, or if both ranges are null.
     */
    static equals(a: Range | null, b: Range | null): boolean;
    /**
     * Given two ranges on the same dimension, this method returns the intersection
     * of those ranges.
     * @param a A Range.
     * @param b A Range.
     * @return A new Range representing the intersection of two ranges, or null if there is no intersection. Ranges are assumed to include their end points, and the intersection can be a point.
     */
    static intersection(a: Range | null, b: Range | null): Range | null;
    /**
     * Given two ranges on the same dimension, determines whether they intersect.
     * @param a A Range.
     * @param b A Range.
     * @return Whether they intersect.
     */
    static hasIntersection(a: Range | null, b: Range | null): boolean;
    /**
     * Given two ranges on the same dimension, this returns a range that covers
     * both ranges.
     * @param a A Range.
     * @param b A Range.
     * @return A new Range representing the bounding range.
     */
    static boundingRange(a: Range | null, b: Range | null): Range;
    /**
     * Given two ranges, returns true if the first range completely overlaps the
     * second.
     * @param a The first Range.
     * @param b The second Range.
     * @return True if b is contained inside a, false otherwise.
     */
    static contains(a: Range | null, b: Range | null): boolean;
    /**
     * Given a range and a point, returns true if the range contains the point.
     * @param range The range.
     * @param p The point.
     * @return True if p is contained inside range, false otherwise.
     */
    static containsPoint(range: Range | null, p: number): boolean;
}
