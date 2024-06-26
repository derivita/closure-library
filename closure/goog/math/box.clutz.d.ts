//!! generated by clutz.
// Generated from math/box.js
declare namespace ಠ_ಠ.clutz.goog.math {
  /**
   * Class for representing a box. A box is specified as a top, right, bottom,
   * and left. A box is useful for representing margins and padding.
   *
   * This class assumes 'screen coordinates': larger Y coordinates are further
   * from the top of the screen.
   */
  class Box {
    private noStructuralTyping_goog_math_Box : any;
    /**
     * Class for representing a box. A box is specified as a top, right, bottom,
     * and left. A box is useful for representing margins and padding.
     *
     * This class assumes 'screen coordinates': larger Y coordinates are further
     * from the top of the screen.
     * @param top Top.
     * @param right Right.
     * @param bottom Bottom.
     * @param left Left.
     */
    constructor (top : number , right : number , bottom : number , left : number ) ;
    /**
     * Bottom
     */
    bottom : number ;
    /**
     * Left
     */
    left : number ;
    /**
     * Right
     */
    right : number ;
    /**
     * Top
     */
    top : number ;
    /**
     * Rounds the fields to the next larger integer values.
     */
    ceil ( ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Creates a copy of the box with the same dimensions.
     */
    clone ( ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Returns whether the box contains a coordinate or another box.
     * @param other A Coordinate or a Box.
     */
    contains (other : ಠ_ಠ.clutz.goog.math.Coordinate | null | ಠ_ಠ.clutz.goog.math.Box ) : boolean ;
    /**
     * Expands box with the given margins.
     * @param top Top margin or box with all margins.
     * @param opt_right Right margin.
     * @param opt_bottom Bottom margin.
     * @param opt_left Left margin.
     */
    expand (top : number | ಠ_ಠ.clutz.goog.math.Box | null , opt_right ? : number , opt_bottom ? : number , opt_left ? : number ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Expand this box to include another box.
     * NOTE(user): This is used in code that needs to be very fast, please don't
     * add functionality to this function at the expense of speed (variable
     * arguments, accepting multiple argument types, etc).
     * @param box The box to include in this one.
     */
    expandToInclude (box : ಠ_ಠ.clutz.goog.math.Box | null ) : void ;
    /**
     * Expand this box to include the coordinate.
     * @param coord The coordinate to be included inside the box.
     */
    expandToIncludeCoordinate (coord : ಠ_ಠ.clutz.goog.math.Coordinate ) : void ;
    /**
     * Rounds the fields to the next smaller integer values.
     */
    floor ( ) : ಠ_ಠ.clutz.goog.math.Box ;
    getHeight ( ) : number ;
    getWidth ( ) : number ;
    /**
     * Rounds the fields to nearest integer values.
     */
    round ( ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Scales this coordinate by the given scale factors. The x and y dimension
     * values are scaled by `sx` and `opt_sy` respectively.
     * If `opt_sy` is not given, then `sx` is used for both x and y.
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     */
    scale (sx : number , opt_sy ? : number ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Returns a nice string representing the box.
     */
    toString ( ) : string ;
    /**
     * Translates this box by the given offsets. If a `goog.math.Coordinate`
     * is given, then the left and right values are translated by the coordinate's
     * x value and the top and bottom values are translated by the coordinate's y
     * value.  Otherwise, `tx` and `opt_ty` are used to translate the x
     * and y dimension values.
     * @param tx The value to translate the x dimension values by or the coordinate to translate this box by.
     * @param opt_ty The value to translate y dimension values by.
     */
    translate (tx : number | ಠ_ಠ.clutz.goog.math.Coordinate | null , opt_ty ? : number ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Creates a Box by bounding a collection of goog.math.Coordinate objects
     * @param var_args Coordinates to be included inside the box.
     */
    static boundingBox ( ...var_args : ( ಠ_ಠ.clutz.goog.math.Coordinate | null ) [] ) : ಠ_ಠ.clutz.goog.math.Box ;
    /**
     * Returns whether a box contains a coordinate or another box.
     * @param box A Box.
     * @param other A Coordinate or a Box.
     */
    static contains (box : ಠ_ಠ.clutz.goog.math.Box | null , other : ಠ_ಠ.clutz.goog.math.Coordinate | null | ಠ_ಠ.clutz.goog.math.Box ) : boolean ;
    /**
     * Returns the distance between a coordinate and the nearest corner/side of a
     * box. Returns zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     */
    static distance (box : ಠ_ಠ.clutz.goog.math.Box | null , coord : ಠ_ಠ.clutz.goog.math.Coordinate | null ) : number ;
    /**
     * Compares boxes for equality.
     * @param a A Box.
     * @param b A Box.
     */
    static equals (a : ಠ_ಠ.clutz.goog.math.Box | null , b : ಠ_ಠ.clutz.goog.math.Box | null ) : boolean ;
    /**
     * Returns whether two boxes intersect.
     * @param a A Box.
     * @param b A second Box.
     */
    static intersects (a : ಠ_ಠ.clutz.goog.math.Box | null , b : ಠ_ಠ.clutz.goog.math.Box | null ) : boolean ;
    /**
     * Returns whether two boxes would intersect with additional padding.
     * @param a A Box.
     * @param b A second Box.
     * @param padding The additional padding.
     */
    static intersectsWithPadding (a : ಠ_ಠ.clutz.goog.math.Box | null , b : ಠ_ಠ.clutz.goog.math.Box | null , padding : number ) : boolean ;
    /**
     * Returns the relative x position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     */
    static relativePositionX (box : ಠ_ಠ.clutz.goog.math.Box | null , coord : ಠ_ಠ.clutz.goog.math.Coordinate | null ) : number ;
    /**
     * Returns the relative y position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     */
    static relativePositionY (box : ಠ_ಠ.clutz.goog.math.Box | null , coord : ಠ_ಠ.clutz.goog.math.Coordinate | null ) : number ;
  }
}
declare module 'goog:goog.math.Box' {
  import Box = ಠ_ಠ.clutz.goog.math.Box;
  export default Box;
}
