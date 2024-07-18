import * as googVec from './vec.js';
import * as Quaternion from './quaternion.js';
import * as vec3f from './vec3f.js';
import * as vec4f from './vec4f.js';
export type Type = googVec.Float32;
/**
 * Creates a mat4f with all elements initialized to zero.
 * @return The new mat4f.
 */
export declare function create(): Type;
/**
 * Creates a mat4f identity matrix.
 * @return The new mat4f.
 */
export declare function createIdentity(): Type;
/**
 * Initializes the matrix from the set of values. Note the values supplied are
 * in column major order.
 * @param mat The matrix to receive the values.
 * @param v00 The values at (0, 0).
 * @param v10 The values at (1, 0).
 * @param v20 The values at (2, 0).
 * @param v30 The values at (3, 0).
 * @param v01 The values at (0, 1).
 * @param v11 The values at (1, 1).
 * @param v21 The values at (2, 1).
 * @param v31 The values at (3, 1).
 * @param v02 The values at (0, 2).
 * @param v12 The values at (1, 2).
 * @param v22 The values at (2, 2).
 * @param v32 The values at (3, 2).
 * @param v03 The values at (0, 3).
 * @param v13 The values at (1, 3).
 * @param v23 The values at (2, 3).
 * @param v33 The values at (3, 3).
 * @return return mat so that operations can be chained together.
 */
export declare function setFromValues(mat: Type, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): Type;
/**
 * Initializes mat4f mat from mat4f src.
 * @param mat The destination matrix.
 * @param src The source matrix.
 * @return Return mat so that operations can be chained together.
 */
export declare function setFromMat4f(mat: Type, src: Type): Type;
/**
 * Initializes mat4f mat from mat4d src (typed as a Float64Array to
 * avoid circular goog.requires).
 * @param mat The destination matrix.
 * @param src The source matrix.
 * @return Return mat so that operations can be chained together.
 */
export declare function setFromMat4d(mat: Type, src: Float64Array | null): Type;
/**
 * Initializes mat4f mat from Array src.
 * @param mat The destination matrix.
 * @param src The source matrix.
 * @return Return mat so that operations can be chained together.
 */
export declare function setFromArray(mat: Type, src: number[] | null): Type;
/**
 * Retrieves the element at the requested row and column.
 * @param mat The matrix containing the value to retrieve.
 * @param row The row index.
 * @param column The column index.
 * @return The element value at the requested row, column indices.
 */
export declare function getElement(mat: Type, row: number, column: number): number;
/**
 * Sets the element at the requested row and column.
 * @param mat The matrix containing the value to retrieve.
 * @param row The row index.
 * @param column The column index.
 * @param value The value to set at the requested row, column.
 * @return return mat so that operations can be chained together.
 */
export declare function setElement(mat: Type, row: number, column: number, value: number): Type;
/**
 * Sets the diagonal values of the matrix from the given values.
 * @param mat The matrix to receive the values.
 * @param v00 The values for (0, 0).
 * @param v11 The values for (1, 1).
 * @param v22 The values for (2, 2).
 * @param v33 The values for (3, 3).
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonalValues(mat: Type, v00: number, v11: number, v22: number, v33: number): Type;
/**
 * Sets the diagonal values of the matrix from the given vector.
 * @param mat The matrix to receive the values.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonal(mat: Type, vec: vec4f.Type): Type;
/**
 * Gets the diagonal values of the matrix into the given vector.
 * @param mat The matrix containing the values.
 * @param vec The vector to receive the values.
 * @param opt_diagonal Which diagonal to get. A value of 0 selects the main diagonal, a positive number selects a super diagonal and a negative number selects a sub diagonal.
 * @return return vec so that operations can be chained together.
 */
export declare function getDiagonal(mat: Type, vec: vec4f.Type, opt_diagonal?: number): vec4f.Type;
/**
 * Sets the specified column with the supplied values.
 * @param mat The matrix to receive the values.
 * @param column The column index to set the values on.
 * @param v0 The value for row 0.
 * @param v1 The value for row 1.
 * @param v2 The value for row 2.
 * @param v3 The value for row 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumnValues(mat: Type, column: number, v0: number, v1: number, v2: number, v3: number): Type;
/**
 * Sets the specified column with the value from the supplied vector.
 * @param mat The matrix to receive the values.
 * @param column The column index to set the values on.
 * @param vec The vector of elements for the column.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumn(mat: Type, column: number, vec: vec4f.Type): Type;
/**
 * Retrieves the specified column from the matrix into the given vector.
 * @param mat The matrix supplying the values.
 * @param column The column to get the values from.
 * @param vec The vector of elements to receive the column.
 * @return return vec so that operations can be chained together.
 */
export declare function getColumn(mat: Type, column: number, vec: vec4f.Type): vec4f.Type;
/**
 * Sets the columns of the matrix from the given vectors.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for column 0.
 * @param vec1 The values for column 1.
 * @param vec2 The values for column 2.
 * @param vec3 The values for column 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumns(mat: Type, vec0: vec4f.Type, vec1: vec4f.Type, vec2: vec4f.Type, vec3: vec4f.Type): Type;
/**
 * Retrieves the column values from the given matrix into the given vectors.
 * @param mat The matrix supplying the columns.
 * @param vec0 The vector to receive column 0.
 * @param vec1 The vector to receive column 1.
 * @param vec2 The vector to receive column 2.
 * @param vec3 The vector to receive column 3.
 */
export declare function getColumns(mat: Type, vec0: vec4f.Type, vec1: vec4f.Type, vec2: vec4f.Type, vec3: vec4f.Type): void;
/**
 * Sets the row values from the supplied values.
 * @param mat The matrix to receive the values.
 * @param row The index of the row to receive the values.
 * @param v0 The value for column 0.
 * @param v1 The value for column 1.
 * @param v2 The value for column 2.
 * @param v3 The value for column 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setRowValues(mat: Type, row: number, v0: number, v1: number, v2: number, v3: number): Type;
/**
 * Sets the row values from the supplied vector.
 * @param mat The matrix to receive the row values.
 * @param row The index of the row.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setRow(mat: Type, row: number, vec: vec4f.Type): Type;
/**
 * Retrieves the row values into the given vector.
 * @param mat The matrix supplying the values.
 * @param row The index of the row supplying the values.
 * @param vec The vector to receive the row.
 * @return return vec so that operations can be chained together.
 */
export declare function getRow(mat: Type, row: number, vec: vec4f.Type): vec4f.Type;
/**
 * Sets the rows of the matrix from the supplied vectors.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for row 0.
 * @param vec1 The values for row 1.
 * @param vec2 The values for row 2.
 * @param vec3 The values for row 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setRows(mat: Type, vec0: vec4f.Type, vec1: vec4f.Type, vec2: vec4f.Type, vec3: vec4f.Type): Type;
/**
 * Retrieves the rows of the matrix into the supplied vectors.
 * @param mat The matrix to supply the values.
 * @param vec0 The vector to receive row 0.
 * @param vec1 The vector to receive row 1.
 * @param vec2 The vector to receive row 2.
 * @param vec3 The vector to receive row 3.
 */
export declare function getRows(mat: Type, vec0: vec4f.Type, vec1: vec4f.Type, vec2: vec4f.Type, vec3: vec4f.Type): void;
/**
 * Makes the given 4x4 matrix the zero matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeZero(mat: Type): Type;
/**
 * Makes the given 4x4 matrix the identity matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeIdentity(mat: Type): Type;
/**
 * Performs a per-component addition of the matrix mat0 and mat1, storing
 * the result into resultMat.
 * @param mat0 The first addend.
 * @param mat1 The second addend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function addMat(mat0: Type, mat1: Type, resultMat: Type): Type;
/**
 * Performs a per-component subtraction of the matrix mat0 and mat1,
 * storing the result into resultMat.
 * @param mat0 The minuend.
 * @param mat1 The subtrahend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function subMat(mat0: Type, mat1: Type, resultMat: Type): Type;
/**
 * Multiplies matrix mat with the given scalar, storing the result
 * into resultMat.
 * @param mat The matrix.
 * @param scalar The scalar value to multiply to each element of mat.
 * @param resultMat The matrix to receive the results (may be mat).
 * @return return resultMat so that operations can be chained together.
 */
export declare function multScalar(mat: Type, scalar: number, resultMat: Type): Type;
/**
 * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
 * storing the result into resultMat.
 * @param mat0 The first (left hand) matrix.
 * @param mat1 The second (right hand) matrix.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function multMat(mat0: Type, mat1: Type, resultMat: Type): Type;
/**
 * Transposes the given matrix mat storing the result into resultMat.
 * @param mat The matrix to transpose.
 * @param resultMat The matrix to receive the results (may be mat).
 * @return return resultMat so that operations can be chained together.
 */
export declare function transpose(mat: Type, resultMat: Type): Type;
/**
 * Computes the determinant of the matrix.
 * @param mat The matrix to compute the matrix for.
 * @return The determinant of the matrix.
 */
export declare function determinant(mat: Type): number;
/**
 * Computes the inverse of mat storing the result into resultMat. If the
 * inverse is defined, this function returns true, false otherwise.
 * @param mat The matrix to invert.
 * @param resultMat The matrix to receive the result (may be mat).
 * @return True if the inverse is defined. If false is returned, resultMat is not modified.
 */
export declare function invert(mat: Type, resultMat: Type): boolean;
/**
 * Returns true if the components of mat0 are equal to the components of mat1.
 * @param mat0 The first matrix.
 * @param mat1 The second matrix.
 * @return True if the two matrices are equivalent.
 */
export declare function equals(mat0: Type, mat1: Type): boolean;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec. The input vector is multiplied against the
 * upper 3x4 matrix omitting the projective component.
 * @param mat The matrix supplying the transformation.
 * @param vec The 3 element vector to transform.
 * @param resultVec The 3 element vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec3(mat: Type, vec: vec3f.Type, resultVec: vec3f.Type): vec3f.Type;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec. The input vector is multiplied against the
 * upper 3x3 matrix omitting the projective component and translation
 * components.
 * @param mat The matrix supplying the transformation.
 * @param vec The 3 element vector to transform.
 * @param resultVec The 3 element vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec3NoTranslate(mat: Type, vec: vec3f.Type, resultVec: vec3f.Type): vec3f.Type;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec. The input vector is multiplied against the
 * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
 * vector to a 3 element vector.
 * @param mat The matrix supplying the transformation.
 * @param vec The 3 element vector to transform.
 * @param resultVec The 3 element vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec3Projective(mat: Type, vec: vec3f.Type, resultVec: vec3f.Type): vec3f.Type;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec.
 * @param mat The matrix supplying the transformation.
 * @param vec The vector to transform.
 * @param resultVec The vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec4(mat: Type, vec: vec4f.Type, resultVec: vec4f.Type): vec4f.Type;
/**
 * Makes the given 4x4 matrix a translation matrix with x, y and z
 * translation factors.
 * @param mat The matrix.
 * @param x The translation along the x axis.
 * @param y The translation along the y axis.
 * @param z The translation along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeTranslate(mat: Type, x: number, y: number, z: number): Type;
/**
 * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
 * @param mat The matrix.
 * @param x The scale along the x axis.
 * @param y The scale along the y axis.
 * @param z The scale along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeScale(mat: Type, x: number, y: number, z: number): Type;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the axis defined by the vector (ax, ay, az).
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @param ax The x component of the rotation axis.
 * @param ay The y component of the rotation axis.
 * @param az The z component of the rotation axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotate(mat: Type, angle: number, ax: number, ay: number, az: number): Type;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the X axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateX(mat: Type, angle: number): Type;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the Y axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateY(mat: Type, angle: number): Type;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the Z axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateZ(mat: Type, angle: number): Type;
/**
 * Creates a matrix from a quaternion rotation and vector translation.
 *
 * This is a specialization of makeRotationTranslationScaleOrigin.
 *
 * This is equivalent to, but faster than:
 * makeIdentity(m);
 * translate(m, tx, ty, tz);
 * rotate(m, theta, rx, ry, rz);
 * and:
 * Quaternion.toRotationMatrix4(rotation, mat);
 * mat[12] = translation[0];
 * mat[13] = translation[1];
 * mat[14] = translation[2];
 * See http://jsperf.com/goog-vec-makerotationtranslation2 .
 * @param mat The matrix.
 * @param rotation The quaternion rotation. Note: this quaternion is assumed to already be normalized.
 * @param translation The vector translation.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotationTranslation(mat: Type, rotation: Quaternion.AnyType, translation: vec3f.Type): Type;
/**
 * Creates a matrix from a quaternion rotation, vector translation, and
 * vector scale.
 *
 * This is a specialization of makeRotationTranslationScaleOrigin.
 *
 * This is equivalent to, but faster than:
 * makeIdentity(m);
 * translate(m, tx, ty, tz);
 * rotate(m, theta, rx, ry, rz);
 * scale(m, sx, sy, sz);
 * @param mat The matrix.
 * @param rotation The quaternion rotation. Note: this quaternion is assumed to already be normalized.
 * @param translation The vector translation.
 * @param scale The vector scale.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotationTranslationScale(mat: Type, rotation: Quaternion.AnyType, translation: vec3f.Type, scale: vec3f.Type): Type;
/**
 * Creates a matrix from a quaternion rotation, vector translation, and
 * vector scale, rotating and scaling about the given origin.
 *
 * This is equivalent to, but faster than:
 * makeIdentity(m);
 * translate(m, tx, ty, tz);
 * translate(m, ox, oy, oz);
 * rotate(m, theta, rx, ry, rz);
 * scale(m, sx, sy, sz);
 * translate(m, -ox, -oy, -oz);
 * See http://jsperf.com/glmatrix-matrix-variant-test/3 for performance
 * results of a similar function in the glmatrix library.
 * @param mat The matrix.
 * @param rotation The quaternion rotation. Note: this quaternion is assumed to already be normalized.
 * @param translation The vector translation.
 * @param scale The vector scale.
 * @param origin The origin about which to scale and rotate.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotationTranslationScaleOrigin(mat: Type, rotation: Quaternion.AnyType, translation: vec3f.Type, scale: vec3f.Type, origin: vec3f.Type): Type;
/**
 * Makes the given 4x4 matrix a perspective projection matrix.
 * @param mat The matrix.
 * @param left The coordinate of the left clipping plane.
 * @param right The coordinate of the right clipping plane.
 * @param bottom The coordinate of the bottom clipping plane.
 * @param top The coordinate of the top clipping plane.
 * @param near The distance to the near clipping plane.
 * @param far The distance to the far clipping plane.
 * @return return mat so that operations can be chained.
 */
export declare function makeFrustum(mat: Type, left: number, right: number, bottom: number, top: number, near: number, far: number): Type;
/**
 * Makes the given 4x4 matrix  perspective projection matrix given a
 * field of view and aspect ratio.
 * @param mat The matrix.
 * @param fovy The field of view along the y (vertical) axis in radians.
 * @param aspect The x (width) to y (height) aspect ratio.
 * @param near The distance to the near clipping plane.
 * @param far The distance to the far clipping plane.
 * @return return mat so that operations can be chained.
 */
export declare function makePerspective(mat: Type, fovy: number, aspect: number, near: number, far: number): Type;
/**
 * Makes the given 4x4 matrix an orthographic projection matrix.
 * @param mat The matrix.
 * @param left The coordinate of the left clipping plane.
 * @param right The coordinate of the right clipping plane.
 * @param bottom The coordinate of the bottom clipping plane.
 * @param top The coordinate of the top clipping plane.
 * @param near The distance to the near clipping plane.
 * @param far The distance to the far clipping plane.
 * @return return mat so that operations can be chained.
 */
export declare function makeOrtho(mat: Type, left: number, right: number, bottom: number, top: number, near: number, far: number): Type;
/**
 * Makes the given 4x4 matrix a modelview matrix of a camera so that
 * the camera is 'looking at' the given center point.
 *
 * Note that unlike most other googVec functions where we inline
 * everything, this function does not inline various googVec
 * functions.  This makes the code more readable, but somewhat
 * less efficient.
 * @param mat The matrix.
 * @param eyePt The position of the eye point (camera origin).
 * @param centerPt The point to aim the camera at.
 * @param worldUpVec The vector that identifies the up direction for the camera.
 * @return return mat so that operations can be chained.
 */
export declare function makeLookAt(mat: Type, eyePt: vec3f.Type, centerPt: vec3f.Type, worldUpVec: vec3f.Type): Type;
/**
 * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
 * The matrix represents the modelview matrix of a camera. It is the inverse
 * of lookAt except for the output of the fwdVec instead of centerPt.
 * The centerPt itself cannot be recovered from a modelview matrix.
 *
 * Note that unlike most other googVec functions where we inline
 * everything, this function does not inline various googVec
 * functions.  This makes the code more readable, but somewhat
 * less efficient.
 * @param mat The matrix.
 * @param eyePt The position of the eye point (camera origin).
 * @param fwdVec The vector describing where the camera points to.
 * @param worldUpVec The vector that identifies the up direction for the camera.
 * @return True if the method succeeds, false otherwise. The method can only fail if the inverse of viewMatrix is not defined.
 */
export declare function toLookAt(mat: Type, eyePt: vec3f.Type, fwdVec: vec3f.Type, worldUpVec: vec3f.Type): boolean;
/**
 * Makes the given 4x4 matrix a rotation matrix given Euler angles using
 * the ZXZ convention.
 * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
 * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
 * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
 * rotation_x(theta) means rotation around the X axis of theta radians,
 * @param mat The matrix.
 * @param theta1 The angle of rotation around the Z axis in radians.
 * @param theta2 The angle of rotation around the X axis in radians.
 * @param theta3 The angle of rotation around the Z axis in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeEulerZXZ(mat: Type, theta1: number, theta2: number, theta3: number): Type;
/**
 * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
 * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
 * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
 * rotation_x(theta) means rotation around the X axis of theta radians.
 * @param mat The matrix.
 * @param euler The ZXZ Euler angles in radians as [theta1, theta2, theta3].
 * @param opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead of the default [0, pi].
 * @return return euler so that operations can be chained together.
 */
export declare function toEulerZXZ(mat: Type, euler: vec3f.Type, opt_theta2IsNegative?: boolean): vec4f.Type;
/**
 * Translates the given matrix by x,y,z.  Equvialent to:
 * multMat(
 * mat,
 * makeTranslate(create(), x, y, z),
 * mat);
 * @param mat The matrix.
 * @param x The translation along the x axis.
 * @param y The translation along the y axis.
 * @param z The translation along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function translate(mat: Type, x: number, y: number, z: number): Type;
/**
 * Scales the given matrix by x,y,z.  Equivalent to:
 * multMat(
 * mat,
 * makeScale(create(), x, y, z),
 * mat);
 * @param mat The matrix.
 * @param x The x scale factor.
 * @param y The y scale factor.
 * @param z The z scale factor.
 * @return return mat so that operations can be chained.
 */
declare function scale_(mat: Type, x: number, y: number, z: number): Type;
export { scale_ as scale };
/**
 * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
 * multMat(
 * mat,
 * makeRotate(create(), angle, x, y, z),
 * mat);
 * @param mat The matrix.
 * @param angle The angle in radians.
 * @param x The x component of the rotation axis.
 * @param y The y component of the rotation axis.
 * @param z The z component of the rotation axis.
 * @return return mat so that operations can be chained.
 */
export declare function rotate(mat: Type, angle: number, x: number, y: number, z: number): Type;
/**
 * Rotate the given matrix by angle about the x axis.  Equivalent to:
 * multMat(
 * mat,
 * makeRotateX(create(), angle),
 * mat);
 * @param mat The matrix.
 * @param angle The angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function rotateX(mat: Type, angle: number): Type;
/**
 * Rotate the given matrix by angle about the y axis.  Equivalent to:
 * multMat(
 * mat,
 * makeRotateY(create(), angle),
 * mat);
 * @param mat The matrix.
 * @param angle The angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function rotateY(mat: Type, angle: number): Type;
/**
 * Rotate the given matrix by angle about the z axis.  Equivalent to:
 * multMat(
 * mat,
 * makeRotateZ(create(), angle),
 * mat);
 * @param mat The matrix.
 * @param angle The angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function rotateZ(mat: Type, angle: number): Type;
/**
 * Retrieves the translation component of the transformation matrix.
 * @param mat The transformation matrix.
 * @param translation The vector for storing the result.
 * @return return translation so that operations can be chained.
 */
export declare function getTranslation(mat: Type, translation: vec3f.Type): vec3f.Type;
