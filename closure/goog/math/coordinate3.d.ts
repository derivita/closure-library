/**
 * Class for representing coordinates and positions in 3 dimensions.
 */
export declare class Coordinate3 {
    /**
     * Class for representing coordinates and positions in 3 dimensions.
     * @param opt_x X coordinate, defaults to 0.
     * @param opt_y Y coordinate, defaults to 0.
     * @param opt_z Z coordinate, defaults to 0.
     */
    constructor(opt_x?: number, opt_y?: number, opt_z?: number);
    private noStructuralTyping_closure_goog_math_coordinate3_Coordinate3;
    /**
     * X-value
     */
    x: number;
    /**
     * Y-value
     */
    y: number;
    /**
     * Z-value
     */
    z: number;
    /**
     * Returns a new copy of the coordinate.
     * @return A clone of this coordinate.
     */
    clone(): Coordinate3;
    /**
     * Compares coordinates for equality.
     * @param a A Coordinate3.
     * @param b A Coordinate3.
     * @return True iff the coordinates are equal, or if both are null.
     */
    static equals(a: Coordinate3 | null, b: Coordinate3 | null): boolean;
    /**
     * Returns the distance between two coordinates.
     * @param a A Coordinate3.
     * @param b A Coordinate3.
     * @return The distance between `a` and `b`.
     */
    static distance(a: Coordinate3 | null, b: Coordinate3 | null): number;
    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     * @param a A Coordinate3.
     * @param b A Coordinate3.
     * @return The squared distance between `a` and `b`.
     */
    static squaredDistance(a: Coordinate3 | null, b: Coordinate3 | null): number;
    /**
     * Returns the difference between two coordinates as a new
     * Coordinate3.
     * @param a A Coordinate3.
     * @param b A Coordinate3.
     * @return A Coordinate3 representing the difference between `a` and `b`.
     */
    static difference(a: Coordinate3 | null, b: Coordinate3 | null): Coordinate3;
    /**
     * Returns the contents of this coordinate as a 3 value Array.
     * @return A new array.
     */
    toArray(): number[];
    /**
     * Converts a three element array into a Coordinate3 object.  If the value
     * passed in is not an array, not array-like, or not of the right length, an
     * error is thrown.
     * @param a Array of numbers to become a coordinate.
     * @return A new coordinate from the array values.
     */
    static fromArray(a: number[] | null): Coordinate3;
}
