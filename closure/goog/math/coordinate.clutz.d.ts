//!! generated by clutz.
// Generated from math/coordinate.js
declare namespace ಠ_ಠ.clutz.goog.math {
  /**
   * Class for representing coordinates and positions.
   */
  class Coordinate {
    private noStructuralTyping_goog_math_Coordinate : any;
    /**
     * Class for representing coordinates and positions.
     * @param opt_x Left, defaults to 0.
     * @param opt_y Top, defaults to 0.
     */
    constructor (opt_x ? : number , opt_y ? : number ) ;
    /**
     * X-value
     */
    x : number ;
    /**
     * Y-value
     */
    y : number ;
    /**
     * Rounds the x and y fields to the next larger integer values.
     */
    ceil ( ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Returns a new copy of the coordinate.
     */
    clone ( ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Returns whether the specified value is equal to this coordinate.
     * @param other Some other value.
     */
    equals (other : any ) : boolean ;
    /**
     * Rounds the x and y fields to the next smaller integer values.
     */
    floor ( ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Rotates this coordinate clockwise about the origin (or, optionally, the given
     * center) by the given angle, in degrees.
     * @param degrees The angle by which to rotate this coordinate clockwise about the given center, in degrees.
     * @param opt_center The center of rotation. Defaults to (0, 0) if not given.
     */
    rotateDegrees (degrees : number , opt_center ? : ಠ_ಠ.clutz.goog.math.Coordinate ) : void ;
    /**
     * Rotates this coordinate clockwise about the origin (or, optionally, the given
     * center) by the given angle, in radians.
     * @param radians The angle by which to rotate this coordinate clockwise about the given center, in radians.
     * @param opt_center The center of rotation. Defaults to (0, 0) if not given.
     */
    rotateRadians (radians : number , opt_center ? : ಠ_ಠ.clutz.goog.math.Coordinate ) : void ;
    /**
     * Rounds the x and y fields to the nearest integer values.
     */
    round ( ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Scales this coordinate by the given scale factors. The x and y values are
     * scaled by `sx` and `opt_sy` respectively.  If `opt_sy`
     * is not given, then `sx` is used for both x and y.
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     */
    scale (sx : number , opt_sy ? : number ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Returns a nice string representing the coordinate.
     */
    toString ( ) : string ;
    /**
     * Translates this box by the given offsets. If a `goog.math.Coordinate`
     * is given, then the x and y values are translated by the coordinate's x and y.
     * Otherwise, x and y are translated by `tx` and `opt_ty`
     * respectively.
     * @param tx The value to translate x by or the the coordinate to translate this coordinate by.
     * @param opt_ty The value to translate y by.
     */
    translate (tx : number | ಠ_ಠ.clutz.goog.math.Coordinate | null , opt_ty ? : number ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Returns the angle from the origin to a coordinate.
     * @param a A Coordinate.
     */
    static azimuth (a : ಠ_ಠ.clutz.goog.math.Coordinate ) : number ;
    /**
     * Returns the difference between two coordinates as a new
     * goog.math.Coordinate.
     * @param a A Coordinate.
     * @param b A Coordinate.
     */
    static difference (a : ಠ_ಠ.clutz.goog.math.Coordinate , b : ಠ_ಠ.clutz.goog.math.Coordinate ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
    /**
     * Returns the distance between two coordinates.
     * @param a A Coordinate.
     * @param b A Coordinate.
     */
    static distance (a : ಠ_ಠ.clutz.goog.math.Coordinate , b : ಠ_ಠ.clutz.goog.math.Coordinate ) : number ;
    /**
     * Compares coordinates for equality.
     * @param a A Coordinate.
     * @param b A Coordinate.
     */
    static equals (a : ಠ_ಠ.clutz.goog.math.Coordinate | null , b : ಠ_ಠ.clutz.goog.math.Coordinate | null ) : boolean ;
    /**
     * Returns the magnitude of a coordinate.
     * @param a A Coordinate.
     */
    static magnitude (a : ಠ_ಠ.clutz.goog.math.Coordinate ) : number ;
    /**
     * Returns the squared distance between two coordinates. Squared distances can
     * be used for comparisons when the actual value is not required.
     *
     * Performance note: eliminating the square root is an optimization often used
     * in lower-level languages, but the speed difference is not nearly as
     * pronounced in JavaScript (only a few percent.)
     * @param a A Coordinate.
     * @param b A Coordinate.
     */
    static squaredDistance (a : ಠ_ಠ.clutz.goog.math.Coordinate , b : ಠ_ಠ.clutz.goog.math.Coordinate ) : number ;
    /**
     * Returns the sum of two coordinates as a new goog.math.Coordinate.
     * @param a A Coordinate.
     * @param b A Coordinate.
     */
    static sum (a : ಠ_ಠ.clutz.goog.math.Coordinate , b : ಠ_ಠ.clutz.goog.math.Coordinate ) : ಠ_ಠ.clutz.goog.math.Coordinate ;
  }
}
declare module 'goog:goog.math.Coordinate' {
  import Coordinate = ಠ_ಠ.clutz.goog.math.Coordinate;
  export default Coordinate;
}
