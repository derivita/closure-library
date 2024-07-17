import * as googVec from './vec.js';
export type Type = googVec.Float64;
/**
 * Creates a vec4d with all elements initialized to zero.
 * @return The new vec4d.
 */
export declare function create(): Type;
/**
 * Creates a new vec4d initialized with the value from the given array.
 * @param vec The source 4 element array.
 * @return The new vec4d.
 */
export declare function createFromArray(vec: number[]): Type;
/**
 * Creates a new vec4d initialized with the supplied values.
 * @param v0 The value for element at index 0.
 * @param v1 The value for element at index 1.
 * @param v2 The value for element at index 2.
 * @param v3 The value for element at index 3.
 * @return The new vector.
 */
export declare function createFromValues(v0: number, v1: number, v2: number, v3: number): Type;
/**
 * Creates a clone of the given vec4d.
 * @param vec The source vec4d.
 * @return The new cloned vec4d.
 */
export declare function clone(vec: Type): Type;
/**
 * Initializes the vector with the given values.
 * @param vec The vector to receive the values.
 * @param v0 The value for element at index 0.
 * @param v1 The value for element at index 1.
 * @param v2 The value for element at index 2.
 * @param v3 The value for element at index 3.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromValues(vec: Type, v0: number, v1: number, v2: number, v3: number): Type;
/**
 * Initializes vec4d vec from vec4d src.
 * @param vec The destination vector.
 * @param src The source vector.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromVec4d(vec: Type, src: Type): Type;
/**
 * Initializes vec4d vec from vec4f src (typed as a Float32Array to
 * avoid circular goog.requires).
 * @param vec The destination vector.
 * @param src The source vector.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromVec4f(vec: Type, src: Float32Array | null): Type;
/**
 * Initializes vec4d vec from Array src.
 * @param vec The destination vector.
 * @param src The source vector.
 * @return Return vec so that operations can be chained together.
 */
export declare function setFromArray(vec: Type, src: number[] | null): Type;
/**
 * Performs a component-wise addition of vec0 and vec1 together storing the
 * result into resultVec.
 * @param vec0 The first addend.
 * @param vec1 The second addend.
 * @param resultVec The vector to receive the result. May be vec0 or vec1.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function add(vec0: Type, vec1: Type, resultVec: Type): Type;
/**
 * Performs a component-wise subtraction of vec1 from vec0 storing the
 * result into resultVec.
 * @param vec0 The minuend.
 * @param vec1 The subtrahend.
 * @param resultVec The vector to receive the result. May be vec0 or vec1.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function subtract(vec0: Type, vec1: Type, resultVec: Type): Type;
/**
 * Negates vec0, storing the result into resultVec.
 * @param vec0 The vector to negate.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function negate(vec0: Type, resultVec: Type): Type;
/**
 * Takes the absolute value of each component of vec0 storing the result in
 * resultVec.
 * @param vec0 The source vector.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function abs(vec0: Type, resultVec: Type): Type;
/**
 * Multiplies each component of vec0 with scalar storing the product into
 * resultVec.
 * @param vec0 The source vector.
 * @param scalar The value to multiply with each component of vec0.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function scale(vec0: Type, scalar: number, resultVec: Type): Type;
/**
 * Returns the magnitudeSquared of the given vector.
 * @param vec0 The vector.
 * @return The magnitude of the vector.
 */
export declare function magnitudeSquared(vec0: Type): number;
/**
 * Returns the magnitude of the given vector.
 * @param vec0 The vector.
 * @return The magnitude of the vector.
 */
export declare function magnitude(vec0: Type): number;
/**
 * Normalizes the given vector storing the result into resultVec.
 * @param vec0 The vector to normalize.
 * @param resultVec The vector to receive the result. May be vec0.
 * @return Return resultVec so that operations can be chained together.
 */
export declare function normalize(vec0: Type, resultVec: Type): Type;
/**
 * Returns the scalar product of vectors v0 and v1.
 * @param v0 The first vector.
 * @param v1 The second vector.
 * @return The scalar product.
 */
export declare function dot(v0: Type, v1: Type): number;
/**
 * Linearly interpolate from v0 to v1 according to f. The value of f should be
 * in the range [0..1] otherwise the results are undefined.
 * @param v0 The first vector.
 * @param v1 The second vector.
 * @param f The interpolation factor.
 * @param resultVec The vector to receive the results (may be v0 or v1).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function lerp(v0: Type, v1: Type, f: number, resultVec: Type): Type;
/**
 * Compares the components of vec0 with the components of another vector or
 * scalar, storing the larger values in resultVec.
 * @param vec0 The source vector.
 * @param limit The limit vector or scalar.
 * @param resultVec The vector to receive the results (may be vec0 or limit).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function max(vec0: Type, limit: Type | number, resultVec: Type): Type;
/**
 * Compares the components of vec0 with the components of another vector or
 * scalar, storing the smaller values in resultVec.
 * @param vec0 The source vector.
 * @param limit The limit vector or scalar.
 * @param resultVec The vector to receive the results (may be vec0 or limit).
 * @return Return resultVec so that operations can be chained together.
 */
export declare function min(vec0: Type, limit: Type | number, resultVec: Type): Type;
/**
 * Returns true if the components of v0 are equal to the components of v1.
 * @param v0 The first vector.
 * @param v1 The second vector.
 * @return True if the vectors are equal, false otherwise.
 */
export declare function equals(v0: Type, v1: Type): boolean;
