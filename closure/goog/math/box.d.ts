import { Coordinate } from './coordinate.js';
/**
 * Class for representing a box. A box is specified as a top, right, bottom,
 * and left. A box is useful for representing margins and padding.
 *
 * This class assumes 'screen coordinates': larger Y coordinates are further
 * from the top of the screen.
 */
export declare class Box {
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
    constructor(top: number, right: number, bottom: number, left: number);
    private noStructuralTyping_closure_goog_math_box_Box;
    /**
     * Top
     */
    top: number;
    /**
     * Right
     */
    right: number;
    /**
     * Bottom
     */
    bottom: number;
    /**
     * Left
     */
    left: number;
    /**
     * Creates a Box by bounding a collection of Coordinate objects
     * @param var_args Coordinates to be included inside the box.
     * @return A Box containing all the specified Coordinates.
     */
    static boundingBox(...var_args: (Coordinate | null)[]): Box;
    getWidth(): number;
    getHeight(): number;
    /**
     * Creates a copy of the box with the same dimensions.
     * @return A clone of this Box.
     */
    clone(): Box;
    /**
     * Returns whether the box contains a coordinate or another box.
     * @param other A Coordinate or a Box.
     * @return Whether the box contains the coordinate or other box.
     */
    contains(other: Coordinate | Box | null): boolean;
    /**
     * Expands box with the given margins.
     * @param top Top margin or box with all margins.
     * @param opt_right Right margin.
     * @param opt_bottom Bottom margin.
     * @param opt_left Left margin.
     * @return A reference to this Box.
     */
    expand(top: number | Box | null, opt_right?: number, opt_bottom?: number, opt_left?: number): Box;
    /**
     * Expand this box to include another box.
     * NOTE(user): This is used in code that needs to be very fast, please don't
     * add functionality to this function at the expense of speed (variable
     * arguments, accepting multiple argument types, etc).
     * @param box The box to include in this one.
     */
    expandToInclude(box: Box | null): void;
    /**
     * Expand this box to include the coordinate.
     * @param coord The coordinate to be included inside the box.
     */
    expandToIncludeCoordinate(coord: Coordinate): void;
    /**
     * Compares boxes for equality.
     * @param a A Box.
     * @param b A Box.
     * @return True iff the boxes are equal, or if both are null.
     */
    static equals(a: Box | null, b: Box | null): boolean;
    /**
     * Returns whether a box contains a coordinate or another box.
     * @param box A Box.
     * @param other A Coordinate or a Box.
     * @return Whether the box contains the coordinate or other box.
     */
    static contains(box: Box | null, other: Coordinate | Box | null): boolean;
    /**
     * Returns the relative x position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     * @return The x position of `coord` relative to the nearest side of `box`, or zero if `coord` is inside `box`.
     */
    static relativePositionX(box: Box | null, coord: Coordinate | null): number;
    /**
     * Returns the relative y position of a coordinate compared to a box.  Returns
     * zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     * @return The y position of `coord` relative to the nearest side of `box`, or zero if `coord` is inside `box`.
     */
    static relativePositionY(box: Box | null, coord: Coordinate | null): number;
    /**
     * Returns the distance between a coordinate and the nearest corner/side of a
     * box. Returns zero if the coordinate is inside the box.
     * @param box A Box.
     * @param coord A Coordinate.
     * @return The distance between `coord` and the nearest corner/side of `box`, or zero if `coord` is inside `box`.
     */
    static distance(box: Box | null, coord: Coordinate | null): number;
    /**
     * Returns whether two boxes intersect.
     * @param a A Box.
     * @param b A second Box.
     * @return Whether the boxes intersect.
     */
    static intersects(a: Box | null, b: Box | null): boolean;
    /**
     * Returns whether two boxes would intersect with additional padding.
     * @param a A Box.
     * @param b A second Box.
     * @param padding The additional padding.
     * @return Whether the boxes intersect.
     */
    static intersectsWithPadding(a: Box | null, b: Box | null, padding: number): boolean;
    /**
     * Rounds the fields to the next larger integer values.
     * @return This box with ceil'd fields.
     */
    ceil(): Box;
    /**
     * Rounds the fields to the next smaller integer values.
     * @return This box with floored fields.
     */
    floor(): Box;
    /**
     * Rounds the fields to nearest integer values.
     * @return This box with rounded fields.
     */
    round(): Box;
    /**
     * Translates this box by the given offsets. If a `Coordinate`
     * is given, then the left and right values are translated by the coordinate's
     * x value and the top and bottom values are translated by the coordinate's y
     * value.  Otherwise, `tx` and `opt_ty` are used to translate the x
     * and y dimension values.
     * @param tx The value to translate the x dimension values by or the coordinate to translate this box by.
     * @param opt_ty The value to translate y dimension values by.
     * @return This box after translating.
     */
    translate(tx: number | Coordinate | null, opt_ty?: number): Box;
    /**
     * Scales this coordinate by the given scale factors. The x and y dimension
     * values are scaled by `sx` and `opt_sy` respectively.
     * If `opt_sy` is not given, then `sx` is used for both x and y.
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     * @return This box after scaling.
     */
    scale(sx: number, opt_sy?: number): Box;
}
