import { Coordinate } from './coordinate.js';
/**
 * Class for a two-dimensional vector object and assorted functions useful for
 * manipulating points.
 */
export declare class Vec2 extends Coordinate {
    /**
     * Class for a two-dimensional vector object and assorted functions useful for
     * manipulating points.
     * @param x The x coordinate for the vector.
     * @param y The y coordinate for the vector.
     */
    constructor(x: number, y: number);
    private noStructuralTyping_closure_goog_math_vec2_Vec2;
    /**
     * X-value
     */
    x: number;
    /**
     * Y-value
     */
    y: number;
    static randomUnit(): Vec2;
    static random(): Vec2;
    /**
     * Returns a new Vec2 object from a given coordinate.
     * @param a The coordinate.
     * @return A new vector object.
     */
    static fromCoordinate(a: Coordinate): Vec2;
    clone(): Vec2;
    /**
     * Returns the magnitude of the vector measured from the origin.
     * @return The length of the vector.
     */
    magnitude(): number;
    /**
     * Returns the squared magnitude of the vector measured from the origin.
     * NOTE(brenneman): Leaving out the square root is not a significant
     * optimization in JavaScript.
     * @return The length of the vector, squared.
     */
    squaredMagnitude(): number;
    /**
     *
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     * @return This vector after scaling.
     */
    scale(a: number, b?: number): Vec2;
    /**
     * Reverses the sign of the vector. Equivalent to scaling the vector by -1.
     * @return The inverted vector.
     */
    invert(): Vec2;
    /**
     * Normalizes the current vector to have a magnitude of 1.
     * @return The normalized vector.
     */
    normalize(): Vec2;
    /**
     * Adds another vector to this vector in-place.
     * @param b The vector to add.
     * @return This vector with `b` added.
     */
    add(b: Coordinate): Vec2;
    /**
     * Subtracts another vector from this vector in-place.
     * @param b The vector to subtract.
     * @return This vector with `b` subtracted.
     */
    subtract(b: Coordinate): Vec2;
    /**
     * Rotates this vector in-place by a given angle, specified in radians.
     * @param angle The angle, in radians.
     * @return This vector rotated `angle` radians.
     */
    rotate(angle: number): Vec2;
    /**
     * Rotates a vector by a given angle, specified in radians, relative to a given
     * axis rotation point. The returned vector is a newly created instance - no
     * in-place changes are done.
     * @param v A vector.
     * @param axisPoint The rotation axis point.
     * @param angle The angle, in radians.
     * @return The rotated vector in a newly created instance.
     */
    static rotateAroundPoint(v: Vec2, axisPoint: Vec2, angle: number): Vec2;
    equals(b: any): boolean;
    /**
     * Returns the distance between two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The distance.
     */
    static distance(a: Coordinate, b: Coordinate): number;
    /**
     * Returns the squared distance between two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The squared distance.
     */
    static squaredDistance(a: Coordinate, b: Coordinate): number;
    /**
     * Compares vectors for equality.
     * @param a The first vector.
     * @param b The second vector.
     * @return Whether the vectors have the same x and y coordinates.
     */
    static equals(a: Coordinate, b: Coordinate): boolean;
    /**
     * Returns the sum of two vectors as a new Vec2.
     * @param a The first vector.
     * @param b The second vector.
     * @return The sum vector.
     */
    static sum(a: Coordinate, b: Coordinate): Vec2;
    /**
     * Returns the difference between two vectors as a new Vec2.
     * @param a The first vector.
     * @param b The second vector.
     * @return The difference vector.
     */
    static difference(a: Coordinate, b: Coordinate): Vec2;
    /**
     * Returns the dot-product of two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The dot-product of the two vectors.
     */
    static dot(a: Coordinate, b: Coordinate): number;
    /**
     * Returns the determinant of two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The determinant of the two vectors.
     */
    static determinant(a: Vec2, b: Vec2): number;
    /**
     * Returns a new Vec2 that is the linear interpolant between vectors a and b at
     * scale-value x.
     * @param a Vector a.
     * @param b Vector b.
     * @param x The proportion between a and b.
     * @return The interpolated vector.
     */
    static lerp(a: Coordinate, b: Coordinate, x: number): Vec2;
    /**
     * Returns a new Vec2 that is a copy of the vector a, but rescaled by a factors
     * sx and sy in the x and y directions. If only sx is specified, then y is
     * scaled by the same factor as x.
     * @param a Vector a.
     * @param sx X scale factor.
     * @param sy Y scale factor (optional).
     * @return A new rescaled vector.
     */
    static rescaled(a: Coordinate, sx: number, sy?: number): Vec2;
}
