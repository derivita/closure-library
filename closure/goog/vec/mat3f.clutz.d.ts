//!! generated by clutz.
// Generated from vec/mat3f.js
declare namespace ಠ_ಠ.clutz.goog.vec.mat3f {
  /**
   * Performs a per-component addition of the matrices mat0 and mat1, storing
   * the result into resultMat.
   * @param mat0 The first addend.
   * @param mat1 The second addend.
   * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
   */
  function addMat (mat0 : ಠ_ಠ.clutz.goog.vec.Float32 , mat1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a mat3f with all elements initialized to zero.
   */
  function create ( ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a mat3f identity matrix.
   */
  function createIdentity ( ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Returns true if the components of mat0 are equal to the components of mat1.
   * @param mat0 The first matrix.
   * @param mat1 The second matrix.
   */
  function equals (mat0 : ಠ_ಠ.clutz.goog.vec.Float32 , mat1 : ಠ_ಠ.clutz.goog.vec.Float32 ) : boolean ;
  /**
   * Retrieves the specified column from the matrix into the given vector
   * array.
   * @param mat The matrix supplying the values.
   * @param column The column to get the values from.
   * @param vec The vector elements to receive the column.
   */
  function getColumn (mat : ಠ_ಠ.clutz.goog.vec.Float32 , column : number , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.vec3f.Type ;
  /**
   * Retrieves the column values from the given matrix into the given vector
   * elements.
   * @param mat The matrix supplying the columns.
   * @param vec0 The vector to receive column 0.
   * @param vec1 The vector to receive column 1.
   * @param vec2 The vector to receive column 2.
   */
  function getColumns (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec0 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec1 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec2 : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : void ;
  /**
   * Retrieves the element at the requested row and column.
   * @param mat The matrix containing the value to retrieve.
   * @param row The row index.
   * @param column The column index.
   */
  function getElement (mat : ಠ_ಠ.clutz.goog.vec.Float32 , row : number , column : number ) : number ;
  /**
   * Retrieves the row values into the given vector.
   * @param mat The matrix supplying the values.
   * @param row The index of the row supplying the values.
   * @param vec The vector to receive the row.
   */
  function getRow (mat : ಠ_ಠ.clutz.goog.vec.Float32 , row : number , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.vec3f.Type ;
  /**
   * Retrieves the rows of the matrix into the supplied vectors.
   * @param mat The matrix to supplying the values.
   * @param vec0 The vector to receive row 0.
   * @param vec1 The vector to receive row 1.
   * @param vec2 The vector to receive row 2.
   */
  function getRows (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec0 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec1 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec2 : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : void ;
  /**
   * Computes the inverse of mat0 storing the result into resultMat. If the
   * inverse is defined, this function returns true, false otherwise.
   * @param mat0 The matrix to invert.
   * @param resultMat The matrix to receive the result (may be mat0).
   */
  function invert (mat0 : ಠ_ಠ.clutz.goog.vec.Float32 , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : boolean ;
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
   */
  function makeEulerZXZ (mat : ಠ_ಠ.clutz.goog.vec.Float32 , theta1 : number , theta2 : number , theta3 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix the identity matrix.
   * @param mat The matrix.
   */
  function makeIdentity (mat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a rotation matrix with the given rotation
   * angle about the axis defined by the vector (ax, ay, az).
   * @param mat The matrix.
   * @param angle The rotation angle in radians.
   * @param ax The x component of the rotation axis.
   * @param ay The y component of the rotation axis.
   * @param az The z component of the rotation axis.
   */
  function makeRotate (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number , ax : number , ay : number , az : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a rotation matrix with the given rotation
   * angle about the X axis.
   * @param mat The matrix.
   * @param angle The rotation angle in radians.
   */
  function makeRotateX (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a rotation matrix with the given rotation
   * angle about the Y axis.
   * @param mat The matrix.
   * @param angle The rotation angle in radians.
   */
  function makeRotateY (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a rotation matrix with the given rotation
   * angle about the Z axis.
   * @param mat The matrix.
   * @param angle The rotation angle in radians.
   */
  function makeRotateZ (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
   * @param mat The 3x3 (9-element) matrix array to receive the new scale matrix.
   * @param x The scale along the x axis.
   * @param y The scale along the y axis.
   * @param z The scale along the z axis.
   */
  function makeScale (mat : ಠ_ಠ.clutz.goog.vec.Float32 , x : number , y : number , z : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix a translation matrix with x and y
   * translation values.
   * @param mat The matrix.
   * @param x The translation along the x axis.
   * @param y The translation along the y axis.
   */
  function makeTranslate (mat : ಠ_ಠ.clutz.goog.vec.Float32 , x : number , y : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Makes the given 3x3 matrix the zero matrix.
   * @param mat The matrix.
   */
  function makeZero (mat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
   * storing the result into resultMat.
   * @param mat0 The first (left hand) matrix.
   * @param mat1 The second (right hand) matrix.
   * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
   */
  function multMat (mat0 : ಠ_ಠ.clutz.goog.vec.Float32 , mat1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Multiplies matrix mat0 with the given scalar, storing the result
   * into resultMat.
   * @param mat The matrix.
   * @param scalar The scalar value to multiple to each element of mat.
   * @param resultMat The matrix to receive the results (may be mat).
   */
  function multScalar (mat : ಠ_ಠ.clutz.goog.vec.Float32 , scalar : number , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Transforms the given vector with the given matrix storing the resulting,
   * transformed matrix into resultVec.
   * @param mat The matrix supplying the transformation.
   * @param vec The vector to transform.
   * @param resultVec The vector to receive the results (may be vec).
   */
  function multVec3 (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type , resultVec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.vec3f.Type ;
  /**
   * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
   * goog.vec.mat3f.multMat(
   * mat,
   * goog.vec.mat3f.makeRotate(goog.vec.mat3f.create(), angle, x, y, z),
   * mat);
   * @param mat The matrix.
   * @param angle The angle in radians.
   * @param x The x component of the rotation axis.
   * @param y The y component of the rotation axis.
   * @param z The z component of the rotation axis.
   */
  function rotate (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number , x : number , y : number , z : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Rotate the given matrix by angle about the x axis.  Equivalent to:
   * goog.vec.mat3f.multMat(
   * mat,
   * goog.vec.mat3f.makeRotateX(goog.vec.mat3f.create(), angle),
   * mat);
   * @param mat The matrix.
   * @param angle The angle in radians.
   */
  function rotateX (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Rotate the given matrix by angle about the y axis.  Equivalent to:
   * goog.vec.mat3f.multMat(
   * mat,
   * goog.vec.mat3f.makeRotateY(goog.vec.mat3f.create(), angle),
   * mat);
   * @param mat The matrix.
   * @param angle The angle in radians.
   */
  function rotateY (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Rotate the given matrix by angle about the z axis.  Equivalent to:
   * goog.vec.mat3f.multMat(
   * mat,
   * goog.vec.mat3f.makeRotateZ(goog.vec.mat3f.create(), angle),
   * mat);
   * @param mat The matrix.
   * @param angle The angle in radians.
   */
  function rotateZ (mat : ಠ_ಠ.clutz.goog.vec.Float32 , angle : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the specified column with the value from the supplied array.
   * @param mat The matrix to receive the values.
   * @param column The column index to set the values on.
   * @param vec The vector elements for the column.
   */
  function setColumn (mat : ಠ_ಠ.clutz.goog.vec.Float32 , column : number , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the specified column with the supplied values.
   * @param mat The matrix to receive the values.
   * @param column The column index to set the values on.
   * @param v0 The value for row 0.
   * @param v1 The value for row 1.
   * @param v2 The value for row 2.
   */
  function setColumnValues (mat : ಠ_ಠ.clutz.goog.vec.Float32 , column : number , v0 : number , v1 : number , v2 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the columns of the matrix from the set of vector elements.
   * @param mat The matrix to receive the values.
   * @param vec0 The values for column 0.
   * @param vec1 The values for column 1.
   * @param vec2 The values for column 2.
   */
  function setColumns (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec0 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec1 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec2 : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the diagonal values of the matrix from the given vector.
   * @param mat The matrix to receive the values.
   * @param vec The vector containing the values.
   */
  function setDiagonal (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the diagonal values of the matrix from the given values.
   * @param mat The matrix to receive the values.
   * @param v00 The values for (0, 0).
   * @param v11 The values for (1, 1).
   * @param v22 The values for (2, 2).
   */
  function setDiagonalValues (mat : ಠ_ಠ.clutz.goog.vec.Float32 , v00 : number , v11 : number , v22 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the element at the requested row and column.
   * @param mat The matrix containing the value to retrieve.
   * @param row The row index.
   * @param column The column index.
   * @param value The value to set at the requested row, column.
   */
  function setElement (mat : ಠ_ಠ.clutz.goog.vec.Float32 , row : number , column : number , value : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes mat3f mat from Array src.
   * @param mat The destination matrix.
   * @param src The source matrix.
   */
  function setFromArray (mat : ಠ_ಠ.clutz.goog.vec.Float32 , src : number [] | null ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes mat3f mat from mat3d src (typed as a Float64Array to
   * avoid circular goog.requires).
   * @param mat The destination matrix.
   * @param src The source matrix.
   */
  function setFromMat3d (mat : ಠ_ಠ.clutz.goog.vec.Float32 , src : GlobalFloat64Array | null ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes mat3f mat from mat3f src.
   * @param mat The destination matrix.
   * @param src The source matrix.
   */
  function setFromMat3f (mat : ಠ_ಠ.clutz.goog.vec.Float32 , src : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
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
   */
  function setFromValues (mat : ಠ_ಠ.clutz.goog.vec.Float32 , v00 : number , v10 : number , v20 : number , v01 : number , v11 : number , v21 : number , v02 : number , v12 : number , v22 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the row values from the supplied vector.
   * @param mat The matrix to receive the row values.
   * @param row The index of the row.
   * @param vec The vector containing the values.
   */
  function setRow (mat : ಠ_ಠ.clutz.goog.vec.Float32 , row : number , vec : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the row values from the supplied values.
   * @param mat The matrix to receive the values.
   * @param row The index of the row to receive the values.
   * @param v0 The value for column 0.
   * @param v1 The value for column 1.
   * @param v2 The value for column 2.
   */
  function setRowValues (mat : ಠ_ಠ.clutz.goog.vec.Float32 , row : number , v0 : number , v1 : number , v2 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Sets the rows of the matrix from the supplied vectors.
   * @param mat The matrix to receive the values.
   * @param vec0 The values for row 0.
   * @param vec1 The values for row 1.
   * @param vec2 The values for row 2.
   */
  function setRows (mat : ಠ_ಠ.clutz.goog.vec.Float32 , vec0 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec1 : ಠ_ಠ.clutz.goog.vec.vec3f.Type , vec2 : ಠ_ಠ.clutz.goog.vec.vec3f.Type ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Performs a per-component subtraction of the matrices mat0 and mat1,
   * storing the result into resultMat.
   * @param mat0 The minuend.
   * @param mat1 The subtrahend.
   * @param resultMat The matrix to receive the results (may be either mat0 or mat1).
   */
  function subMat (mat0 : ಠ_ಠ.clutz.goog.vec.Float32 , mat1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
   * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
   * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
   * rotation_x(theta) means rotation around the X axis of theta radians.
   * @param mat The matrix.
   * @param euler The ZXZ Euler angles in radians as [theta1, theta2, theta3].
   * @param opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead of the default [0, pi].
   */
  function toEulerZXZ (mat : ಠ_ಠ.clutz.goog.vec.Float32 , euler : ಠ_ಠ.clutz.goog.vec.vec3f.Type , opt_theta2IsNegative ? : boolean ) : ಠ_ಠ.clutz.goog.vec.vec3f.Type ;
  /**
   * Transposes the given matrix mat storing the result into resultMat.
   * @param mat The matrix to transpose.
   * @param resultMat The matrix to receive the results (may be mat).
   */
  function transpose (mat : ಠ_ಠ.clutz.goog.vec.Float32 , resultMat : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
}
declare module 'goog:goog.vec.mat3f' {
  import mat3f = ಠ_ಠ.clutz.goog.vec.mat3f;
  export = mat3f;
}
// Generated from vec/mat3f.js
declare namespace ಠ_ಠ.clutz.goog.vec.mat3f {
  type Type = ಠ_ಠ.clutz.goog.vec.Float32 ;
}
declare module 'goog:goog.vec.mat3f.Type' {
  import Type = ಠ_ಠ.clutz.goog.vec.mat3f.Type;
  export default Type;
}
