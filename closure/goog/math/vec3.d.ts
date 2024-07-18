import { Coordinate3 } from './coordinate3.js';
/**
 * Class for a three-dimensional vector object and assorted functions useful for
 * manipulation.
 *
 * Inherits from Coordinate3 so that a Vec3 may be passed in to any
 * function that requires a Coordinate.
 */
export declare class Vec3 extends Coordinate3 {
    /**
     * Class for a three-dimensional vector object and assorted functions useful for
     * manipulation.
     *
     * Inherits from Coordinate3 so that a Vec3 may be passed in to any
     * function that requires a Coordinate.
     * @param x The x value for the vector.
     * @param y The y value for the vector.
     * @param z The z value for the vector.
     */
    constructor(x: number, y: number, z: number);
    private noStructuralTyping_closure_goog_math_vec3_Vec3;
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
     * Generates a random unit vector.
     *
     * http://mathworld.wolfram.com/SpherePointPicking.html
     * Using (6), (7), and (8) to generate coordinates.
     * @return A random unit-length vector.
     */
    static randomUnit(): Vec3;
    /**
     * Generates a random vector inside the unit sphere.
     * @return A random vector.
     */
    static random(): Vec3;
    /**
     * Returns a new Vec3 object from a given coordinate.
     * @param a The coordinate.
     * @return A new vector object.
     */
    static fromCoordinate3(a: Coordinate3 | null): Vec3;
    /**
     * Creates a new copy of this Vec3.
     * @return A new vector with the same coordinates as this one.
     */
    clone(): Vec3;
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
     * Scales the current vector by a constant.
     * @param s The scale factor.
     * @return This vector, scaled.
     */
    scale(s: number): Vec3;
    /**
     * Reverses the sign of the vector. Equivalent to scaling the vector by -1.
     * @return This vector, inverted.
     */
    invert(): Vec3;
    /**
     * Normalizes the current vector to have a magnitude of 1.
     * @return This vector, normalized.
     */
    normalize(): Vec3;
    /**
     * Adds another vector to this vector in-place.
     * @param b The vector to add.
     * @return This vector with `b` added.
     */
    add(b: Vec3 | null): Vec3;
    /**
     * Subtracts another vector from this vector in-place.
     * @param b The vector to subtract.
     * @return This vector with `b` subtracted.
     */
    subtract(b: Vec3 | null): Vec3;
    /**
     * Compares this vector with another for equality.
     * @param b The other vector.
     * @return True if this vector's x, y and z equal the given vector's x, y, and z, respectively.
     */
    equals(b: Vec3 | null): boolean;
    /**
     * Returns the distance between two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The distance.
     */
    static distance(a: Vec3 | null, b: Vec3 | null): number;
    /**
     * Returns the squared distance between two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The squared distance.
     */
    static squaredDistance(a: Vec3 | null, b: Vec3 | null): number;
    /**
     * Compares vectors for equality.
     * @param a The first vector.
     * @param b The second vector.
     * @return True if the vectors have equal x, y, and z coordinates.
     */
    static equals(a: Vec3 | null, b: Vec3 | null): boolean;
    /**
     * Returns the sum of two vectors as a new Vec3.
     * @param a The first vector.
     * @param b The second vector.
     * @return The sum vector.
     */
    static sum(a: Vec3 | null, b: Vec3 | null): Vec3;
    /**
     * Returns the difference of two vectors as a new Vec3.
     * @param a The first vector.
     * @param b The second vector.
     * @return The difference vector.
     */
    static difference(a: Vec3 | null, b: Vec3 | null): Vec3;
    /**
     * Returns the dot-product of two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The dot-product of the two vectors.
     */
    static dot(a: Vec3 | null, b: Vec3 | null): number;
    /**
     * Returns the cross-product of two vectors.
     * @param a The first vector.
     * @param b The second vector.
     * @return The cross-product of the two vectors.
     */
    static cross(a: Vec3 | null, b: Vec3 | null): Vec3;
    /**
     * Returns a new Vec3 that is the linear interpolant between vectors a and b at
     * scale-value x.
     * @param a Vector a.
     * @param b Vector b.
     * @param x The proportion between a and b.
     * @return The interpolated vector.
     */
    static lerp(a: Vec3 | null, b: Vec3 | null, x: number): Vec3;
    /**
     * Returns a new Vec3 that is a copy of the vector a, but rescaled by a factor s
     * in all dimensions.
     * @param a Vector a.
     * @param s Scale factor.
     * @return A new rescaled vector.
     */
    static rescaled(a: Vec3, s: number): Vec3;
}
