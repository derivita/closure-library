import * as googVec from './vec.js';
import * as Vec3 from './vec3.js';
import * as Vec4 from './vec4.js';
export type Float32 = googVec.Float32;
export type Float64 = googVec.Float64;
export type Number = googVec.Number;
export type AnyType = googVec.AnyType;
export type Type = Float32Array;
export type Mat4Like = googVec.ArrayType;
/**
 * Creates the array representation of a 4x4 matrix of Float32.
 * The use of the array directly instead of a class reduces overhead.
 * The returned matrix is cleared to all zeros.
 * @return The new matrix.
 */
export declare function createFloat32(): Float32;
/**
 * Creates the array representation of a 4x4 matrix of Float64.
 * The returned matrix is cleared to all zeros.
 * @return The new matrix.
 */
export declare function createFloat64(): Float64;
/**
 * Creates the array representation of a 4x4 matrix of Number.
 * The returned matrix is cleared to all zeros.
 * @return The new matrix.
 */
export declare function createNumber(): Number;
/**
 * Creates the array representation of a 4x4 matrix of Float32.
 * The returned matrix is cleared to all zeros.
 * @return The new matrix.
 */
export declare function create(): Type;
/**
 * Creates a 4x4 identity matrix of Float32.
 * @return The new 16 element array.
 */
export declare function createFloat32Identity(): Float32;
/**
 * Creates a 4x4 identity matrix of Float64.
 * @return The new 16 element array.
 */
export declare function createFloat64Identity(): Float64;
/**
 * Creates a 4x4 identity matrix of Number.
 * The returned matrix is cleared to all zeros.
 * @return The new 16 element array.
 */
export declare function createNumberIdentity(): Number;
/**
 * Creates the array representation of a 4x4 matrix of Float32.
 * The returned matrix is cleared to all zeros.
 * @return The new 16 element array.
 */
export declare function createIdentity(): Type;
/**
 * Creates a 4x4 matrix of Float32 initialized from the given array.
 * @param matrix The array containing the matrix values in column major order.
 * @return The new, 16 element array.
 */
export declare function createFloat32FromArray(matrix: AnyType | null): Float32;
/**
 * Creates a 4x4 matrix of Float32 initialized from the given values.
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
 * @return The new, 16 element array.
 */
export declare function createFloat32FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): Float32;
/**
 * Creates a clone of a 4x4 matrix of Float32.
 * @param matrix The source 4x4 matrix.
 * @return The new 4x4 element matrix.
 */
export declare function cloneFloat32(a: Float32 | null): Float32;
/**
 * Creates a 4x4 matrix of Float64 initialized from the given array.
 * @param matrix The array containing the matrix values in column major order.
 * @return The new, nine element array.
 */
export declare function createFloat64FromArray(matrix: AnyType | null): Float64;
/**
 * Creates a 4x4 matrix of Float64 initialized from the given values.
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
 * @return The new, 16 element array.
 */
export declare function createFloat64FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): Float64;
/**
 * Creates a clone of a 4x4 matrix of Float64.
 * @param matrix The source 4x4 matrix.
 * @return The new 4x4 element matrix.
 */
export declare function cloneFloat64(a: Float64 | null): Float64;
/**
 * Creates a 4x4 matrix of Float32 initialized from the given array.
 * @param matrix The array containing the matrix values in column major order.
 * @return The new, nine element array.
 */
export declare function createFromArray(matrix: Mat4Like | null): Type;
/**
 * Creates a 4x4 matrix of Float32 initialized from the given values.
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
 * @return The new, 16 element array.
 */
export declare function createFromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): Type;
/**
 * Creates a clone of a 4x4 matrix of Float32.
 * @param matrix The source 4x4 matrix.
 * @return The new 4x4 element matrix.
 */
export declare function clone(a: Mat4Like | null): Type;
/**
 * Retrieves the element at the requested row and column.
 * @param mat The matrix containing the value to retrieve.
 * @param row The row index.
 * @param column The column index.
 * @return The element value at the requested row, column indices.
 */
export declare function getElement(mat: AnyType | null, row: number, column: number): number;
/**
 * Sets the element at the requested row and column.
 * @param mat The matrix to set the value on.
 * @param row The row index.
 * @param column The column index.
 * @param value The value to set at the requested row, column.
 * @return return mat so that operations can be chained together.
 */
export declare function setElement(mat: AnyType | null, row: number, column: number, value: number): AnyType | null;
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
export declare function setFromValues(mat: AnyType | null, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): AnyType | null;
/**
 * Sets the matrix from the array of values stored in column major order.
 * @param mat The matrix to receive the values.
 * @param values The column major ordered array of values to store in the matrix.
 * @return return mat so that operations can be chained together.
 */
export declare function setFromArray(mat: AnyType | null, values: AnyType | null): AnyType | null;
/**
 * Sets the matrix from the array of values stored in row major order.
 * @param mat The matrix to receive the values.
 * @param values The row major ordered array of values to store in the matrix.
 * @return return mat so that operations can be chained together.
 */
export declare function setFromRowMajorArray(mat: AnyType | null, values: AnyType | null): AnyType | null;
/**
 * Sets the diagonal values of the matrix from the given values.
 * @param mat The matrix to receive the values.
 * @param v00 The values for (0, 0).
 * @param v11 The values for (1, 1).
 * @param v22 The values for (2, 2).
 * @param v33 The values for (3, 3).
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonalValues(mat: AnyType | null, v00: number, v11: number, v22: number, v33: number): AnyType | null;
/**
 * Sets the diagonal values of the matrix from the given vector.
 * @param mat The matrix to receive the values.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonal(mat: AnyType | null, vec: Vec4.AnyType | null): AnyType | null;
/**
 * Gets the diagonal values of the matrix into the given vector.
 * @param mat The matrix containing the values.
 * @param vec The vector to receive the values.
 * @param opt_diagonal Which diagonal to get. A value of 0 selects the main diagonal, a positive number selects a super diagonal and a negative number selects a sub diagonal.
 * @return return vec so that operations can be chained together.
 */
export declare function getDiagonal(mat: AnyType | null, vec: Vec4.AnyType | null, opt_diagonal?: number): Vec4.AnyType | null;
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
export declare function setColumnValues(mat: AnyType | null, column: number, v0: number, v1: number, v2: number, v3: number): AnyType | null;
/**
 * Sets the specified column with the value from the supplied vector.
 * @param mat The matrix to receive the values.
 * @param column The column index to set the values on.
 * @param vec The vector of elements for the column.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumn(mat: AnyType | null, column: number, vec: Vec4.AnyType | null): AnyType | null;
/**
 * Retrieves the specified column from the matrix into the given vector.
 * @param mat The matrix supplying the values.
 * @param column The column to get the values from.
 * @param vec The vector of elements to receive the column.
 * @return return vec so that operations can be chained together.
 */
export declare function getColumn(mat: AnyType | null, column: number, vec: Vec4.AnyType | null): Vec4.AnyType | null;
/**
 * Sets the columns of the matrix from the given vectors.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for column 0.
 * @param vec1 The values for column 1.
 * @param vec2 The values for column 2.
 * @param vec3 The values for column 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumns(mat: AnyType | null, vec0: Vec4.AnyType | null, vec1: Vec4.AnyType | null, vec2: Vec4.AnyType | null, vec3: Vec4.AnyType | null): AnyType | null;
/**
 * Retrieves the column values from the given matrix into the given vectors.
 * @param mat The matrix supplying the columns.
 * @param vec0 The vector to receive column 0.
 * @param vec1 The vector to receive column 1.
 * @param vec2 The vector to receive column 2.
 * @param vec3 The vector to receive column 3.
 */
export declare function getColumns(mat: AnyType | null, vec0: Vec4.AnyType | null, vec1: Vec4.AnyType | null, vec2: Vec4.AnyType | null, vec3: Vec4.AnyType | null): void;
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
export declare function setRowValues(mat: AnyType | null, row: number, v0: number, v1: number, v2: number, v3: number): AnyType | null;
/**
 * Sets the row values from the supplied vector.
 * @param mat The matrix to receive the row values.
 * @param row The index of the row.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setRow(mat: AnyType | null, row: number, vec: Vec4.AnyType | null): AnyType | null;
/**
 * Retrieves the row values into the given vector.
 * @param mat The matrix supplying the values.
 * @param row The index of the row supplying the values.
 * @param vec The vector to receive the row.
 * @return return vec so that operations can be chained together.
 */
export declare function getRow(mat: AnyType | null, row: number, vec: Vec4.AnyType | null): Vec4.AnyType | null;
/**
 * Sets the rows of the matrix from the supplied vectors.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for row 0.
 * @param vec1 The values for row 1.
 * @param vec2 The values for row 2.
 * @param vec3 The values for row 3.
 * @return return mat so that operations can be chained together.
 */
export declare function setRows(mat: AnyType | null, vec0: Vec4.AnyType | null, vec1: Vec4.AnyType | null, vec2: Vec4.AnyType | null, vec3: Vec4.AnyType | null): AnyType | null;
/**
 * Retrieves the rows of the matrix into the supplied vectors.
 * @param mat The matrix to supply the values.
 * @param vec0 The vector to receive row 0.
 * @param vec1 The vector to receive row 1.
 * @param vec2 The vector to receive row 2.
 * @param vec3 The vector to receive row 3.
 */
export declare function getRows(mat: AnyType | null, vec0: Vec4.AnyType | null, vec1: Vec4.AnyType | null, vec2: Vec4.AnyType | null, vec3: Vec4.AnyType | null): void;
/**
 * Makes the given 4x4 matrix the zero matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeZero(mat: AnyType | null): AnyType;
/**
 * Makes the given 4x4 matrix the identity matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeIdentity(mat: AnyType | null): AnyType | null;
/**
 * Performs a per-component addition of the matrix mat0 and mat1, storing
 * the result into resultMat.
 * @param mat0 The first addend.
 * @param mat1 The second addend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function addMat(mat0: AnyType | null, mat1: AnyType | null, resultMat: AnyType | null): AnyType | null;
/**
 * Performs a per-component subtraction of the matrix mat0 and mat1,
 * storing the result into resultMat.
 * @param mat0 The minuend.
 * @param mat1 The subtrahend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function subMat(mat0: AnyType | null, mat1: AnyType | null, resultMat: AnyType | null): AnyType | null;
/**
 * Multiplies matrix mat with the given scalar, storing the result
 * into resultMat.
 * @param mat The matrix.
 * @param scalar The scalar value to multiply to each element of mat.
 * @param resultMat The matrix to receive the results (may be mat).
 * @return return resultMat so that operations can be chained together.
 */
export declare function multScalar(mat: AnyType | null, scalar: number, resultMat: AnyType | null): AnyType | null;
/**
 * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
 * storing the result into resultMat.
 * @param mat0 The first (left hand) matrix.
 * @param mat1 The second (right hand) matrix.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function multMat(mat0: AnyType | null, mat1: AnyType | null, resultMat: AnyType | null): AnyType | null;
/**
 * Transposes the given matrix mat storing the result into resultMat.
 * @param mat The matrix to transpose.
 * @param resultMat The matrix to receive the results (may be mat).
 * @return return resultMat so that operations can be chained together.
 */
export declare function transpose(mat: AnyType | null, resultMat: AnyType | null): AnyType | null;
/**
 * Computes the determinant of the matrix.
 * @param mat The matrix to compute the matrix for.
 * @return The determinant of the matrix.
 */
export declare function determinant(mat: AnyType | null): number;
/**
 * Computes the inverse of mat storing the result into resultMat. If the
 * inverse is defined, this function returns true, false otherwise.
 * @param mat The matrix to invert.
 * @param resultMat The matrix to receive the result (may be mat).
 * @return True if the inverse is defined. If false is returned, resultMat is not modified.
 */
export declare function invert(mat: AnyType | null, resultMat: AnyType | null): boolean;
/**
 * Returns true if the components of mat0 are equal to the components of mat1.
 * @param mat0 The first matrix.
 * @param mat1 The second matrix.
 * @return True if the two matrices are equivalent.
 */
export declare function equals(mat0: AnyType | null, mat1: AnyType | null): boolean;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec. The input vector is multiplied against the
 * upper 3x4 matrix omitting the projective component.
 * @param mat The matrix supplying the transformation.
 * @param vec The 3 element vector to transform.
 * @param resultVec The 3 element vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec3(mat: AnyType | null, vec: Vec3.AnyType | null, resultVec: Vec3.AnyType | null): Vec3.AnyType | null;
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
export declare function multVec3NoTranslate(mat: AnyType | null, vec: Vec3.AnyType | null, resultVec: Vec3.AnyType | null): Vec3.AnyType | null;
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
export declare function multVec3Projective(mat: AnyType | null, vec: Vec3.AnyType | null, resultVec: Vec3.AnyType | null): Vec3.AnyType | null;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed vector into resultVec.
 * @param mat The matrix supplying the transformation.
 * @param vec The vector to transform.
 * @param resultVec The vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec4(mat: AnyType | null, vec: Vec4.AnyType | null, resultVec: Vec4.AnyType | null): Vec4.AnyType | null;
/**
 * Makes the given 4x4 matrix a translation matrix with x, y and z
 * translation factors.
 * @param mat The matrix.
 * @param x The translation along the x axis.
 * @param y The translation along the y axis.
 * @param z The translation along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeTranslate(mat: AnyType | null, x: number, y: number, z: number): AnyType | null;
/**
 * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
 * @param mat The matrix.
 * @param x The scale along the x axis.
 * @param y The scale along the y axis.
 * @param z The scale along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeScale(mat: AnyType | null, x: number, y: number, z: number): AnyType | null;
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
export declare function makeRotate(mat: AnyType | null, angle: number, ax: number, ay: number, az: number): AnyType | null;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the X axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateX(mat: AnyType | null, angle: number): AnyType | null;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the Y axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateY(mat: AnyType | null, angle: number): AnyType | null;
/**
 * Makes the given 4x4 matrix a rotation matrix with the given rotation
 * angle about the Z axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateZ(mat: AnyType | null, angle: number): AnyType | null;
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
export declare function makeFrustum(mat: AnyType | null, left: number, right: number, bottom: number, top: number, near: number, far: number): AnyType | null;
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
export declare function makePerspective(mat: AnyType | null, fovy: number, aspect: number, near: number, far: number): AnyType | null;
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
export declare function makeOrtho(mat: AnyType | null, left: number, right: number, bottom: number, top: number, near: number, far: number): AnyType | null;
/**
 * Makes the given 4x4 matrix a modelview matrix of a camera so that
 * the camera is 'looking at' the given center point.
 * @param mat The matrix.
 * @param eyePt The position of the eye point (camera origin).
 * @param centerPt The point to aim the camera at.
 * @param worldUpVec The vector that identifies the up direction for the camera.
 * @return return mat so that operations can be chained.
 */
export declare function makeLookAt(mat: AnyType | null, eyePt: Vec3.AnyType | null, centerPt: Vec3.AnyType | null, worldUpVec: Vec3.AnyType | null): AnyType | null;
/**
 * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
 * The matrix represents the modelview matrix of a camera. It is the inverse
 * of lookAt except for the output of the fwdVec instead of centerPt.
 * The centerPt itself cannot be recovered from a modelview matrix.
 * @param mat The matrix.
 * @param eyePt The position of the eye point (camera origin).
 * @param fwdVec The vector describing where the camera points to.
 * @param worldUpVec The vector that identifies the up direction for the camera.
 * @return True if the method succeeds, false otherwise. The method can only fail if the inverse of viewMatrix is not defined.
 */
export declare function toLookAt(mat: AnyType | null, eyePt: Vec3.AnyType | null, fwdVec: Vec3.AnyType | null, worldUpVec: Vec3.AnyType | null): boolean;
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
export declare function makeEulerZXZ(mat: AnyType | null, theta1: number, theta2: number, theta3: number): AnyType | null;
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
export declare function toEulerZXZ(mat: AnyType | null, euler: Vec3.AnyType | null, opt_theta2IsNegative?: boolean): Vec4.AnyType | null;
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
export declare function translate(mat: AnyType | null, x: number, y: number, z: number): AnyType | null;
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
export declare function scale(mat: AnyType | null, x: number, y: number, z: number): AnyType | null;
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
export declare function rotate(mat: AnyType | null, angle: number, x: number, y: number, z: number): AnyType | null;
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
export declare function rotateX(mat: AnyType | null, angle: number): AnyType | null;
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
export declare function rotateY(mat: AnyType | null, angle: number): AnyType | null;
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
export declare function rotateZ(mat: AnyType | null, angle: number): AnyType | null;
/**
 * Retrieves the translation component of the transformation matrix.
 * @param mat The transformation matrix.
 * @param translation The vector for storing the result.
 * @return return mat so that operations can be chained.
 */
export declare function getTranslation(mat: AnyType | null, translation: Vec3.AnyType | null): AnyType | null;
