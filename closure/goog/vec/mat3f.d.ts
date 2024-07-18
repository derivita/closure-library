import * as googVec from './vec.js';
import * as vec3f from './vec3f.js';
export type Type = googVec.Float32;
/**
 * Creates a mat3f with all elements initialized to zero.
 * @return The new mat3f.
 */
export declare function create(): Type;
/**
 * Creates a mat3f identity matrix.
 * @return The new mat3f.
 */
export declare function createIdentity(): Type;
/**
 * Initializes the matrix from the set of values. Note the values supplied are
 * in column major order.
 * @param mat The matrix to receive the values.
 * @param v00 The values at (0, 0).
 * @param v10 The values at (1, 0).
 * @param v20 The values at (2, 0).
 * @param v01 The values at (0, 1).
 * @param v11 The values at (1, 1).
 * @param v21 The values at (2, 1).
 * @param v02 The values at (0, 2).
 * @param v12 The values at (1, 2).
 * @param v22 The values at (2, 2).
 * @return return mat so that operations can be chained together.
 */
export declare function setFromValues(mat: Type, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): Type;
/**
 * Initializes mat3f mat from mat3f src.
 * @param mat The destination matrix.
 * @param src The source matrix.
 * @return Return mat so that operations can be chained together.
 */
export declare function setFromMat3f(mat: Type, src: Type): Type;
/**
 * Initializes mat3f mat from mat3d src (typed as a Float64Array to
 * avoid circular goog.requires).
 * @param mat The destination matrix.
 * @param src The source matrix.
 * @return Return mat so that operations can be chained together.
 */
export declare function setFromMat3d(mat: Type, src: Float64Array | null): Type;
/**
 * Initializes mat3f mat from Array src.
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
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonalValues(mat: Type, v00: number, v11: number, v22: number): Type;
/**
 * Sets the diagonal values of the matrix from the given vector.
 * @param mat The matrix to receive the values.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setDiagonal(mat: Type, vec: vec3f.Type): Type;
/**
 * Sets the specified column with the supplied values.
 * @param mat The matrix to receive the values.
 * @param column The column index to set the values on.
 * @param v0 The value for row 0.
 * @param v1 The value for row 1.
 * @param v2 The value for row 2.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumnValues(mat: Type, column: number, v0: number, v1: number, v2: number): Type;
/**
 * Sets the specified column with the value from the supplied array.
 * @param mat The matrix to receive the values.
 * @param column The column index to set the values on.
 * @param vec The vector elements for the column.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumn(mat: Type, column: number, vec: vec3f.Type): Type;
/**
 * Retrieves the specified column from the matrix into the given vector
 * array.
 * @param mat The matrix supplying the values.
 * @param column The column to get the values from.
 * @param vec The vector elements to receive the column.
 * @return return vec so that operations can be chained together.
 */
export declare function getColumn(mat: Type, column: number, vec: vec3f.Type): vec3f.Type;
/**
 * Sets the columns of the matrix from the set of vector elements.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for column 0.
 * @param vec1 The values for column 1.
 * @param vec2 The values for column 2.
 * @return return mat so that operations can be chained together.
 */
export declare function setColumns(mat: Type, vec0: vec3f.Type, vec1: vec3f.Type, vec2: vec3f.Type): Type;
/**
 * Retrieves the column values from the given matrix into the given vector
 * elements.
 * @param mat The matrix supplying the columns.
 * @param vec0 The vector to receive column 0.
 * @param vec1 The vector to receive column 1.
 * @param vec2 The vector to receive column 2.
 */
export declare function getColumns(mat: Type, vec0: vec3f.Type, vec1: vec3f.Type, vec2: vec3f.Type): void;
/**
 * Sets the row values from the supplied values.
 * @param mat The matrix to receive the values.
 * @param row The index of the row to receive the values.
 * @param v0 The value for column 0.
 * @param v1 The value for column 1.
 * @param v2 The value for column 2.
 * @return return mat so that operations can be chained together.
 */
export declare function setRowValues(mat: Type, row: number, v0: number, v1: number, v2: number): Type;
/**
 * Sets the row values from the supplied vector.
 * @param mat The matrix to receive the row values.
 * @param row The index of the row.
 * @param vec The vector containing the values.
 * @return return mat so that operations can be chained together.
 */
export declare function setRow(mat: Type, row: number, vec: vec3f.Type): Type;
/**
 * Retrieves the row values into the given vector.
 * @param mat The matrix supplying the values.
 * @param row The index of the row supplying the values.
 * @param vec The vector to receive the row.
 * @return return vec so that operations can be chained together.
 */
export declare function getRow(mat: Type, row: number, vec: vec3f.Type): vec3f.Type;
/**
 * Sets the rows of the matrix from the supplied vectors.
 * @param mat The matrix to receive the values.
 * @param vec0 The values for row 0.
 * @param vec1 The values for row 1.
 * @param vec2 The values for row 2.
 * @return return mat so that operations can be chained together.
 */
export declare function setRows(mat: Type, vec0: vec3f.Type, vec1: vec3f.Type, vec2: vec3f.Type): Type;
/**
 * Retrieves the rows of the matrix into the supplied vectors.
 * @param mat The matrix to supplying the values.
 * @param vec0 The vector to receive row 0.
 * @param vec1 The vector to receive row 1.
 * @param vec2 The vector to receive row 2.
 */
export declare function getRows(mat: Type, vec0: vec3f.Type, vec1: vec3f.Type, vec2: vec3f.Type): void;
/**
 * Makes the given 3x3 matrix the zero matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeZero(mat: Type): Type;
/**
 * Makes the given 3x3 matrix the identity matrix.
 * @param mat The matrix.
 * @return return mat so operations can be chained.
 */
export declare function makeIdentity(mat: Type): Type;
/**
 * Performs a per-component addition of the matrices mat0 and mat1, storing
 * the result into resultMat.
 * @param mat0 The first addend.
 * @param mat1 The second addend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function addMat(mat0: Type, mat1: Type, resultMat: Type): Type;
/**
 * Performs a per-component subtraction of the matrices mat0 and mat1,
 * storing the result into resultMat.
 * @param mat0 The minuend.
 * @param mat1 The subtrahend.
 * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
 * @return return resultMat so that operations can be chained together.
 */
export declare function subMat(mat0: Type, mat1: Type, resultMat: Type): Type;
/**
 * Multiplies matrix mat0 with the given scalar, storing the result
 * into resultMat.
 * @param mat The matrix.
 * @param scalar The scalar value to multiple to each element of mat.
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
 * Computes the inverse of mat0 storing the result into resultMat. If the
 * inverse is defined, this function returns true, false otherwise.
 * @param mat0 The matrix to invert.
 * @param resultMat The matrix to receive the result (may be mat0).
 * @return True if the inverse is defined. If false is returned, resultMat is not modified.
 */
export declare function invert(mat0: Type, resultMat: Type): boolean;
/**
 * Returns true if the components of mat0 are equal to the components of mat1.
 * @param mat0 The first matrix.
 * @param mat1 The second matrix.
 * @return True if the two matrices are equivalent.
 */
export declare function equals(mat0: Type, mat1: Type): boolean;
/**
 * Transforms the given vector with the given matrix storing the resulting,
 * transformed matrix into resultVec.
 * @param mat The matrix supplying the transformation.
 * @param vec The vector to transform.
 * @param resultVec The vector to receive the results (may be vec).
 * @return return resultVec so that operations can be chained together.
 */
export declare function multVec3(mat: Type, vec: vec3f.Type, resultVec: vec3f.Type): vec3f.Type;
/**
 * Makes the given 3x3 matrix a translation matrix with x and y
 * translation values.
 * @param mat The matrix.
 * @param x The translation along the x axis.
 * @param y The translation along the y axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeTranslate(mat: Type, x: number, y: number): Type;
/**
 * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
 * @param mat The 3x3 (9-element) matrix array to receive the new scale matrix.
 * @param x The scale along the x axis.
 * @param y The scale along the y axis.
 * @param z The scale along the z axis.
 * @return return mat so that operations can be chained.
 */
export declare function makeScale(mat: Type, x: number, y: number, z: number): Type;
/**
 * Makes the given 3x3 matrix a rotation matrix with the given rotation
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
 * Makes the given 3x3 matrix a rotation matrix with the given rotation
 * angle about the X axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateX(mat: Type, angle: number): Type;
/**
 * Makes the given 3x3 matrix a rotation matrix with the given rotation
 * angle about the Y axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateY(mat: Type, angle: number): Type;
/**
 * Makes the given 3x3 matrix a rotation matrix with the given rotation
 * angle about the Z axis.
 * @param mat The matrix.
 * @param angle The rotation angle in radians.
 * @return return mat so that operations can be chained.
 */
export declare function makeRotateZ(mat: Type, angle: number): Type;
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
 * Makes the given 3x3 matrix a rotation matrix given Euler angles using
 * the ZXZ convention.
 * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
 * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
 * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
 * rotation_x(theta) means rotation around the X axis of theta radians.
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
export declare function toEulerZXZ(mat: Type, euler: vec3f.Type, opt_theta2IsNegative?: boolean): vec3f.Type;
