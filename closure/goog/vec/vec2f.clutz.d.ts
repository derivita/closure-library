//!! generated by clutz.
// Generated from vec/vec2f.js
declare namespace ಠ_ಠ.clutz.goog.vec.vec2f {
  /**
   * Takes the absolute value of each component of vec0 storing the result in
   * resultVec.
   * @param vec0 The source vector.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function abs (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Performs a component-wise addition of vec0 and vec1 together storing the
   * result into resultVec.
   * @param vec0 The first addend.
   * @param vec1 The second addend.
   * @param resultVec The vector to receive the result. May be vec0 or vec1.
   */
  function add (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a clone of the given vec2f.
   * @param vec The source vec2f.
   */
  function clone (vec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Divides each component of vec0 with the matching element of vec0
   * storing the divisor into resultVec.
   * @param vec0 The first vector.
   * @param vec1 The second vector.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function componentDivide (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Multiplies each component of vec0 with the matching element of vec0
   * storing the products into resultVec.
   * @param vec0 The first vector.
   * @param vec1 The second vector.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function componentMultiply (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a vec2f with all elements initialized to zero.
   */
  function create ( ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a new vec2f initialized with the value from the given array.
   * @param vec The source 2 element array.
   */
  function createFromArray (vec : number [] ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Creates a new vec2f initialized with the supplied values.
   * @param v0 The value for element at index 0.
   * @param v1 The value for element at index 1.
   */
  function createFromValues (v0 : number , v1 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Returns a unit vector pointing from one point to another.
   * If the input points are equal then the result will be all zeros.
   * @param vec0 Origin point.
   * @param vec1 Target point.
   * @param resultVec The vector to receive the results (may be vec0 or vec1).
   */
  function direction (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Returns the distance between two points.
   * @param vec0 First point.
   * @param vec1 Second point.
   */
  function distance (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 ) : number ;
  /**
   * Returns the squared distance between two points.
   * @param vec0 First point.
   * @param vec1 Second point.
   */
  function distanceSquared (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 ) : number ;
  /**
   * Returns the scalar product of vectors vec0 and vec1.
   * @param vec0 The first vector.
   * @param vec1 The second vector.
   */
  function dot (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 ) : number ;
  /**
   * Returns true if the components of vec0 are equal to the components of vec1.
   * @param vec0 The first vector.
   * @param vec1 The second vector.
   */
  function equals (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 ) : boolean ;
  /**
   * Linearly interpolate from vec0 to vec1 according to f. The value of f should
   * be in the range [0..1] otherwise the results are undefined.
   * @param vec0 The first vector.
   * @param vec1 The second vector.
   * @param f The interpolation factor.
   * @param resultVec The vector to receive the results (may be vec0 or vec1).
   */
  function lerp (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , f : number , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Returns the magnitude of the given vector.
   * @param vec0 The vector.
   */
  function magnitude (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 ) : number ;
  /**
   * Returns the magnitudeSquared of the given vector.
   * @param vec0 The vector.
   */
  function magnitudeSquared (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 ) : number ;
  /**
   * Compares the components of vec0 with the components of another vector or
   * scalar, storing the larger values in resultVec.
   * @param vec0 The source vector.
   * @param limit The limit vector or scalar.
   * @param resultVec The vector to receive the results (may be vec0 or limit).
   */
  function max (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , limit : ಠ_ಠ.clutz.goog.vec.Float32 | number , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Compares the components of vec0 with the components of another vector or
   * scalar, storing the smaller values in resultVec.
   * @param vec0 The source vector.
   * @param limit The limit vector or scalar.
   * @param resultVec The vector to receive the results (may be vec0 or limit).
   */
  function min (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , limit : ಠ_ಠ.clutz.goog.vec.Float32 | number , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Negates vec0, storing the result into resultVec.
   * @param vec0 The vector to negate.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function negate (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Normalizes the given vector storing the result into resultVec.
   * @param vec0 The vector to normalize.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function normalize (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Multiplies each component of vec0 with scalar storing the product into
   * resultVec.
   * @param vec0 The source vector.
   * @param scalar The value to multiply with each component of vec0.
   * @param resultVec The vector to receive the result. May be vec0.
   */
  function scale (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , scalar : number , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes vec2f vec from Array src.
   * @param vec The destination vector.
   * @param src The source vector.
   */
  function setFromArray (vec : ಠ_ಠ.clutz.goog.vec.Float32 , src : number [] | null ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes the vector with the given values.
   * @param vec The vector to receive the values.
   * @param v0 The value for element at index 0.
   * @param v1 The value for element at index 1.
   */
  function setFromValues (vec : ಠ_ಠ.clutz.goog.vec.Float32 , v0 : number , v1 : number ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes vec2f vec from vec2d src (typed as a Float64Array to
   * avoid circular goog.requires).
   * @param vec The destination vector.
   * @param src The source vector.
   */
  function setFromVec2d (vec : ಠ_ಠ.clutz.goog.vec.Float32 , src : GlobalFloat64Array | null ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Initializes vec2f vec from vec2f src.
   * @param vec The destination vector.
   * @param src The source vector.
   */
  function setFromVec2f (vec : ಠ_ಠ.clutz.goog.vec.Float32 , src : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
  /**
   * Performs a component-wise subtraction of vec1 from vec0 storing the
   * result into resultVec.
   * @param vec0 The minuend.
   * @param vec1 The subtrahend.
   * @param resultVec The vector to receive the result. May be vec0 or vec1.
   */
  function subtract (vec0 : ಠ_ಠ.clutz.goog.vec.Float32 , vec1 : ಠ_ಠ.clutz.goog.vec.Float32 , resultVec : ಠ_ಠ.clutz.goog.vec.Float32 ) : ಠ_ಠ.clutz.goog.vec.Float32 ;
}
declare module 'goog:goog.vec.vec2f' {
  import vec2f = ಠ_ಠ.clutz.goog.vec.vec2f;
  export = vec2f;
}
// Generated from vec/vec2f.js
declare namespace ಠ_ಠ.clutz.goog.vec.vec2f {
  type Type = ಠ_ಠ.clutz.goog.vec.Float32 ;
}
declare module 'goog:goog.vec.vec2f.Type' {
  import Type = ಠ_ಠ.clutz.goog.vec.vec2f.Type;
  export default Type;
}
