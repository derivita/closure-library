import * as googVec from './vec.js';
export type Float32 = googVec.Float32;
export type Float64 = googVec.Float64;
export type Number = googVec.Number;
export type AnyType = googVec.AnyType;
/**
 * Creates a 2 element vector of Float32. The array is initialized to zero.
 * @return The new 2 element array.
 */
export declare function createFloat32(): Float32;
/**
 * Creates a 2 element vector of Float64. The array is initialized to zero.
 * @return The new 2 element array.
 */
export declare function createFloat64(): Float64;
/**
 * Creates a 2 element vector of Number. The array is initialized to zero.
 * @return The new 2 element array.
 */
export declare function createNumber(): Number;
/**
 * Creates a new 2 element FLoat32 vector initialized with the value from the
 * given array.
 * @param vec The source 2 element array.
 * @return The new 2 element array.
 */
export declare function createFloat32FromArray(vec: AnyType | null): Float32;
/**
 * Creates a new 2 element Float32 vector initialized with the supplied values.
 * @param vec0 The value for element at index 0.
 * @param vec1 The value for element at index 1.
 * @return The new vector.
 */
export declare function createFloat32FromValues(vec0: number, vec1: number): Float32;
/**
 * Creates a clone of the given 2 element Float32 vector.
 * @param vec The source 2 element vector.
 * @return The new cloned vector.
 */
export declare function cloneFloat32(a: Float32 | null): Float32;
/**
 * Creates a new 2 element Float64 vector initialized with the value from the
 * given array.
 * @param vec The source 2 element array.
 * @return The new 2 element array.
 */
export declare function createFloat64FromArray(vec: AnyType | null): Float64;
/**
 * Creates a new 2 element Float64 vector initialized with the supplied values.
 * @param vec0 The value for element at index 0.
 * @param vec1 The value for element at index 1.
 * @return The new vector.
 */
export declare function createFloat64FromValues(vec0: number, vec1: number): Float64;
/**
 * Creates a clone of the given 2 element vector.
 * @param vec The source 2 element vector.
 * @return The new cloned vector.
 */
export declare function cloneFloat64(a: Float64 | null): Float64;
/**
 * Initializes the vector with the given values.
 * @param vec The vector to receive the values.
 * @param vec0 The value for element at index 0.
 * @param vec1 The value for element at index 1.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromValues(vec: AnyType | null, vec0: number, vec1: number): AnyType;
/**
 * Initializes the vector with the given array of values.
 * @param vec The vector to receive the values.
 * @param values The array of values.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromArray(vec: AnyType | null, values: AnyType | null): AnyType;
/**
 * Performs a component-wise addition of vec0 and vec1 together storing the
 * result into resultVec.
 * @param vec0 The first addend.
 * @param vec1 The second addend.
 * @param resultVec The vector to receive the result. May be vec0 or vec1.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function add(vec0: AnyType | null, vec1: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Performs a component-wise subtraction of vec1 from vec0 storing the
 * result into resultVec.
 * @param vec0 The minuend.
 * @param vec1 The subtrahend.
 * @param resultVec The vector to receive the result. May be vec0 or vec1.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function subtract(vec0: AnyType | null, vec1: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Negates vec0, storing the result into resultVec.
 * @param vec0 The vector to negate.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function negate(vec0: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Takes the absolute value of each component of vec0 storing the result in
 * resultVec.
 * @param vec0 The source vector.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function abs(vec0: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Multiplies each component of vec0 with scalar storing the product into
 * resultVec.
 * @param vec0 The source vector.
 * @param scalar The value to multiply with each component of vec0.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function scale(vec0: AnyType | null, scalar: number, resultVec: AnyType | null): AnyType;
/**
 * Returns the magnitudeSquared of the given vector.
 * @param vec0 The vector.
 * @return The magnitude of the vector.
 */
export declare function magnitudeSquared(vec0: AnyType | null): number;
/**
 * Returns the magnitude of the given vector.
 * @param vec0 The vector.
 * @return The magnitude of the vector.
 */
export declare function magnitude(vec0: AnyType | null): number;
/**
 * Normalizes the given vector storing the result into resultVec.
 * @param vec0 The vector to normalize.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function normalize(vec0: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Returns the scalar product of vectors vec0 and vec1.
 * @param vec0 The first vector.
 * @param vec1 The second vector.
 * @return The scalar product.
 */
export declare function dot(vec0: AnyType | null, vec1: AnyType | null): number;
/**
 * Returns the squared distance between two points.
 * @param vec0 First point.
 * @param vec1 Second point.
 * @return The squared distance between the points.
 */
export declare function distanceSquared(vec0: AnyType | null, vec1: AnyType | null): number;
/**
 * Returns the distance between two points.
 * @param vec0 First point.
 * @param vec1 Second point.
 * @return The distance between the points.
 */
export declare function distance(vec0: AnyType | null, vec1: AnyType | null): number;
/**
 * Returns a unit vector pointing from one point to another.
 * If the input points are equal then the result will be all zeros.
 * @param vec0 Origin point.
 * @param vec1 Target point.
 * @param resultVec The vector to receive the results (may be vec0 or vec1).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function direction(vec0: AnyType | null, vec1: AnyType | null, resultVec: AnyType | null): AnyType;
/**
 * Linearly interpolate from vec0 to vec1 according to f. The value of f should
 * be in the range [0..1] otherwise the results are undefined.
 * @param vec0 The first vector.
 * @param vec1 The second vector.
 * @param f The interpolation factor.
 * @param resultVec The vector to receive the results (may be vec0 or vec1).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function lerp(vec0: AnyType | null, vec1: AnyType | null, f: number, resultVec: AnyType | null): AnyType;
/**
 * Compares the components of vec0 with the components of another vector or
 * scalar, storing the larger values in resultVec.
 * @param vec0 The source vector.
 * @param limit The limit vector or scalar.
 * @param resultVec The vector to receive the results (may be vec0 or limit).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function max(vec0: AnyType | null, limit: AnyType | number | null, resultVec: AnyType | null): AnyType;
/**
 * Compares the components of vec0 with the components of another vector or
 * scalar, storing the smaller values in resultVec.
 * @param vec0 The source vector.
 * @param limit The limit vector or scalar.
 * @param resultVec The vector to receive the results (may be vec0 or limit).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function min(vec0: AnyType | null, limit: AnyType | number | null, resultVec: AnyType | null): AnyType;
/**
 * Returns true if the components of vec0 are equal to the components of vec1.
 * @param vec0 The first vector.
 * @param vec1 The second vector.
 * @return True if the vectors are equal, false otherwise.
 */
export declare function equals(vec0: AnyType | null, vec1: AnyType | null): boolean;
