import * as googVec from './vec.js';
import * as Vec4 from './vec4.js';
export type Float32 = googVec.Float32;
export type Float64 = googVec.Float64;
export type Number = googVec.Number;
export type AnyType = googVec.AnyType;
/**
 * Creates a Float32 quaternion, initialized to zero.
 * @return The new quaternion.
 */
export declare function createFloat32(...args: any[]): Float32;
/**
 * Creates a Float64 quaternion, initialized to zero.
 * @return The new quaternion.
 */
export declare function createFloat64(...args: any[]): Float64;
/**
 * Creates a Number quaternion, initialized to zero.
 * @return The new quaternion.
 */
export declare function createNumber(...args: any[]): Number | null;
/**
 * Creates a new Float32 quaternion initialized with the values from the
 * supplied array.
 * @param vec The source 4 element array.
 * @return The new quaternion.
 */
export declare function createFloat32FromArray(a: googVec.AnyType): Float32;
/**
 * Creates a new Float64 quaternion initialized with the values from the
 * supplied array.
 * @param vec The source 4 element array.
 * @return The new quaternion.
 */
export declare function createFloat64FromArray(a: googVec.AnyType): Float64;
/**
 * Creates a new Float32 quaternion initialized with the supplied values.
 * @param v0 The value for element at index 0.
 * @param v1 The value for element at index 1.
 * @param v2 The value for element at index 2.
 * @param v3 The value for element at index 3.
 * @return The new quaternion.
 */
export declare function createFloat32FromValues(a: number, b: number, c: number, d: number): Float32;
/**
 * Creates a new Float64 quaternion initialized with the supplied values.
 * @param v0 The value for element at index 0.
 * @param v1 The value for element at index 1.
 * @param v2 The value for element at index 2.
 * @param v3 The value for element at index 3.
 * @return The new quaternion.
 */
export declare function createFloat64FromValues(a: number, b: number, c: number, d: number): Float64;
/**
 * Creates a clone of the given Float32 quaternion.
 * @param q The source quaternion.
 * @return The new quaternion.
 */
export declare function cloneFloat32(a: Float32): Float32;
/**
 * Creates a clone of the given Float64 quaternion.
 * @param q The source quaternion.
 * @return The new quaternion.
 */
export declare function cloneFloat64(a: Float64): Float64;
/**
 * Creates a Float32 quaternion, initialized to the identity.
 * @return The new quaternion.
 */
export declare function createIdentityFloat32(): Float32;
/**
 * Creates a Float64 quaternion, initialized to the identity.
 * @return The new quaternion.
 */
export declare function createIdentityFloat64(): Float64;
/**
 * Initializes the quaternion with the given values.
 * @param q The quaternion to receive the values.
 * @param v0 The value for element at index 0.
 * @param v1 The value for element at index 1.
 * @param v2 The value for element at index 2.
 * @param v3 The value for element at index 3.
 * @return return q so that operations can be chained together.
 */
export declare function setFromValues(a: AnyType, b: number, c: number, d: number, e: number): Vec4.AnyType;
/**
 * Initializes the quaternion with the given array of values.
 * @param q The quaternion to receive the values.
 * @param values The array of values.
 * @return return q so that operations can be chained together.
 */
export declare function setFromArray(a: AnyType, b: googVec.AnyType): AnyType;
/**
 * Adds the two quaternions.
 */
export declare var add: typeof Vec4.add;
/**
 * Negates a quaternion, storing the result into resultQuat.
 */
export declare var negate: typeof Vec4.negate;
/**
 * Multiplies each component of quat0 with scalar storing the product into
 * resultVec.
 */
export declare var scale: typeof Vec4.scale;
/**
 * Returns the square magnitude of the given quaternion.
 * @param quat0 The quaternion.
 * @return The magnitude of the quaternion.
 */
export declare function magnitudeSquared(a: AnyType): number;
/**
 * Returns the magnitude of the given quaternion.
 * @param quat0 The quaternion.
 * @return The magnitude of the quaternion.
 */
declare function magnitude_(a: AnyType): number;
export { magnitude_ as magnitude };
/**
 * Normalizes the given quaternion storing the result into resultVec.
 */
export declare var normalize: typeof Vec4.normalize;
/**
 * Computes the dot (scalar) product of two quaternions.
 * @param q0 The first quaternion.
 * @param q1 The second quaternion.
 * @return The scalar product.
 */
declare function dot_(a: AnyType, b: AnyType): number;
export { dot_ as dot };
/**
 * Computes the inverse of the quaternion in quat, storing the result into
 * resultQuat.
 *
 * If the quaternion is already normalized, conjugate
 * is faster than this function and produces the same result.
 * @param quat The quaternion to invert.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function invert(quat: AnyType, resultQuat: AnyType): AnyType;
/**
 * Computes the conjugate of the quaternion in quat, storing the result into
 * resultQuat.
 *
 * If the quaternion is normalized already, this function is faster than
 * goog.Quaternion.inverse and produces the same result.
 * @param quat The source quaternion.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function conjugate(quat: AnyType, resultQuat: AnyType): AnyType;
/**
 * Concatenates the two quaternions storing the result into resultQuat.
 * @param quat0 The first quaternion.
 * @param quat1 The second quaternion.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function concat(quat0: AnyType, quat1: AnyType, resultQuat: AnyType): AnyType;
/**
 * Makes the given quaternion the identity quaternion (0, 0, 0, 1).
 * @param quat The quaternion.
 * @return Return quat so that operations can be chained together.
 */
export declare function makeIdentity(quat: AnyType): AnyType;
/**
 * Generates a unit quaternion from the given angle-axis rotation pair.
 * The rotation axis is not required to be a unit vector, but should
 * have non-zero length.  The angle should be specified in radians.
 * @param angle The angle (in radians) to rotate about the axis.
 * @param axis Unit vector specifying the axis of rotation.
 * @param quat Unit quaternion to store the result.
 * @return Return quat so that operations can be chained together.
 */
export declare function fromAngleAxis(angle: number, axis: AnyType, quat: AnyType): AnyType;
/**
 * Generates an angle-axis rotation pair from a unit quaternion.
 * The quaternion is assumed to be of unit length.  The calculated
 * values are returned via the passed 'axis' object and the 'angle'
 * number returned by the function itself. The returned rotation axis
 * is a non-zero length unit vector, and the returned angle is in
 * radians in the range of [-PI, +PI].
 * @param quat Unit quaternion to convert.
 * @param axis Vector to store the returned rotation axis.
 * @return angle Angle (in radians) to rotate about 'axis'. The range of the returned angle is [-PI, +PI].
 */
export declare function toAngleAxis(quat: AnyType, axis: AnyType): number;
/**
 * Generates the quaternion from the given 3x3 rotation matrix.
 *
 * Perf: http://jsperf.com/conversion-of-3x3-matrix-to-quaternion
 * http://jsperf.com/goog-vec-fromrotationmatrix3-a
 * @param matrix The source matrix.
 * @param quat The resulting quaternion.
 * @return Return quat so that operations can be chained together.
 */
export declare function fromRotationMatrix3(matrix: googVec.AnyType, quat: AnyType): AnyType;
/**
 * Generates the quaternion from the given 4x4 rotation matrix.
 *
 * Perf: http://jsperf.com/goog-vec-fromrotationmatrix4
 *
 * Implementation is the same as fromRotationMatrix3 but using indices from
 * the top left 3x3 in a 4x4 matrix.
 * @param matrix The source matrix.
 * @param quat The resulting quaternion.
 * @return Return quat so that operations can be chained together.
 */
export declare function fromRotationMatrix4(matrix: googVec.AnyType, quat: AnyType): AnyType;
/**
 * Generates the 3x3 rotation matrix from the given quaternion.
 * @param quat The source quaternion.
 * @param matrix The resulting matrix.
 * @return Return resulting matrix so that operations can be chained together.
 */
export declare function toRotationMatrix3(quat: AnyType, matrix: googVec.AnyType): googVec.AnyType;
/**
 * Generates the 4x4 rotation matrix from the given quaternion.
 * @param quat The source quaternion.
 * @param matrix The resulting matrix.
 * @return Return resulting matrix so that operations can be chained together.
 */
export declare function toRotationMatrix4(quat: AnyType, matrix: googVec.AnyType): googVec.AnyType;
/**
 * Rotates a quaternion by the given angle about the X axis.
 * @param quat The quaternion.
 * @param angle The angle in radians.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function rotateX(quat: AnyType, angle: number, resultQuat: AnyType): AnyType;
/**
 * Rotates a quaternion by the given angle about the Y axis.
 * @param quat The quaternion.
 * @param angle The angle in radians.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function rotateY(quat: AnyType, angle: number, resultQuat: AnyType): AnyType;
/**
 * Rotates a quaternion by the given angle about the Z axis.
 * @param quat The quaternion.
 * @param angle The angle in radians.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function rotateZ(quat: AnyType, angle: number, resultQuat: AnyType): AnyType;
/**
 * Transforms a vec with a quaternion. Works on both vec3s and vec4s.
 * @param vec The vec to transform.
 * @param quat The quaternion.
 * @param resultVec The vec to receive the result.
 * @return Return resultVec so that operations can be chained together. Note that the caller is responsible for type-casting.
 */
export declare function transformVec(vec: googVec.AnyType, quat: AnyType, resultVec: googVec.AnyType): googVec.AnyType;
/**
 * Computes the spherical linear interpolated value from the given quaternions
 * q0 and q1 according to the coefficient t. The resulting quaternion is stored
 * in resultQuat.
 * @param q0 The first quaternion.
 * @param q1 The second quaternion.
 * @param t The interpolating coefficient.
 * @param resultQuat The quaternion to receive the result.
 * @return Return resultQuat so that operations can be chained together.
 */
export declare function slerp(q0: AnyType, q1: AnyType, t: number, resultQuat: AnyType): AnyType;
/**
 * Compute the simple linear interpolation of the two quaternions q0 and q1
 * according to the coefficient t. The resulting quaternion is stored in
 * resultVec.
 */
export declare var nlerp: typeof Vec4.lerp;
