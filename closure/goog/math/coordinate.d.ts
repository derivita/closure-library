/**
 * Class for representing coordinates and positions.
 */
export declare class Coordinate {
    /**
     * Class for representing coordinates and positions.
     * @param opt_x Left, defaults to 0.
     * @param opt_y Top, defaults to 0.
     */
    constructor(opt_x?: number, opt_y?: number);
    private noStructuralTyping_closure_goog_math_coordinate_Coordinate;
    /**
     * X-value
     */
    x: number;
    /**
     * Y-value
     */
    y: number;
    /**
     * Returns a new copy of the coordinate.
     * @return A clone of this coordinate.
     */
    clone(): Coordinate;
    /**
     * Returns whether the specified value is equal to this coordinate.
     * @param other Some other value.
     * @return Whether the specified value is equal to this coordinate.
     */
    equals(other: any): boolean;
    /**
     * Compares coordinates for equality.
     * @param a A Coordinate.
     * @param b A Coordinate.
     * @return True iff the coordinates are equal, or if both are null.
     */
    static equals(a: Coordinate | null, b: Coordinate | null): boolean;
    /**
     * Returns the distance between two coordinates.
     * @param a A Coordinate.
     * @param b A Coordinate.
     * @return The distance between `a` and `b`.
     */
    static distance(a: Coordinate, b: Coordinate): number;
    /**
     * Returns the magnitude of a coordinate.
     * @param a A Coordinate.
     * @return The distance between the origin and `a`.
     */
    static magnitude(a: Coordinate): number;
    /**
     * Returns the angle from the origin to a coordinate.
     * @param a A Coordinate.
     * @return The angle, in degrees, clockwise from the positive X axis to `a`.
     */
    static azimuth(a: Coordinate): number;
    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     * @param a A Coordinate.
     * @param b A Coordinate.
     * @return The squared distance between `a` and `b`.
     */
    static squaredDistance(a: Coordinate, b: Coordinate): number;
    /**
     * Returns the difference between two coordinates as a new
     * Coordinate.
     * @param a A Coordinate.
     * @param b A Coordinate.
     * @return A Coordinate representing the difference between `a` and `b`.
     */
    static difference(a: Coordinate, b: Coordinate): Coordinate;
    /**
     * Returns the sum of two coordinates as a new Coordinate.
     * @param a A Coordinate.
     * @param b A Coordinate.
     * @return A Coordinate representing the sum of the two coordinates.
     */
    static sum(a: Coordinate, b: Coordinate): Coordinate;
    /**
     * Rounds the x and y fields to the next larger integer values.
     * @return This coordinate with ceil'd fields.
     */
    ceil(): Coordinate;
    /**
     * Rounds the x and y fields to the next smaller integer values.
     * @return This coordinate with floored fields.
     */
    floor(): Coordinate;
    /**
     * Rounds the x and y fields to the nearest integer values.
     * @return This coordinate with rounded fields.
     */
    round(): Coordinate;
    /**
     * Translates this box by the given offsets. If a `Coordinate`
     * is given, then the x and y values are translated by the coordinate's x and y.
     * Otherwise, x and y are translated by `tx` and `opt_ty`
     * respectively.
     * @param tx The value to translate x by or the the coordinate to translate this coordinate by.
     * @param opt_ty The value to translate y by.
     * @return This coordinate after translating.
     */
    translate(tx: number | Coordinate | null, opt_ty?: number): Coordinate;
    /**
     * Scales this coordinate by the given scale factors. The x and y values are
     * scaled by `sx` and `opt_sy` respectively.  If `opt_sy`
     * is not given, then `sx` is used for both x and y.
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     * @return This coordinate after scaling.
     */
    scale(sx: number, opt_sy?: number): Coordinate;
    /**
     * Rotates this coordinate clockwise about the origin (or, optionally, the given
     * center) by the given angle, in radians.
     * @param radians The angle by which to rotate this coordinate clockwise about the given center, in radians.
     * @param opt_center The center of rotation. Defaults to (0, 0) if not given.
     */
    rotateRadians(radians: number, opt_center?: Coordinate): void;
    /**
     * Rotates this coordinate clockwise about the origin (or, optionally, the given
     * center) by the given angle, in degrees.
     * @param degrees The angle by which to rotate this coordinate clockwise about the given center, in degrees.
     * @param opt_center The center of rotation. Defaults to (0, 0) if not given.
     */
    rotateDegrees(degrees: number, opt_center?: Coordinate): void;
}
