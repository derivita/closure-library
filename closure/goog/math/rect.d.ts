import { Box } from './box.js';
import { Coordinate } from './coordinate.js';
import { IRect } from './irect.js';
import { Size } from './size.js';
/**
 * Class for representing rectangular regions.
 */
export declare class Rect implements IRect {
    /**
     * Class for representing rectangular regions.
     * @param x Left.
     * @param y Top.
     * @param w Width.
     * @param h Height.
     */
    constructor(x: number, y: number, w: number, h: number);
    private noStructuralTyping_closure_goog_math_rect_Rect;
    left: number;
    top: number;
    width: number;
    height: number;
    clone(): Rect;
    /**
     * Returns a new Box object with the same position and dimensions as this
     * rectangle.
     * @return A new Box representation of this Rectangle.
     */
    toBox(): Box;
    /**
     * Creates a new Rect object with the position and size given.
     * @param position The top-left coordinate of the Rect
     * @param size The size of the Rect
     * @return A new Rect initialized with the given position and size.
     */
    static createFromPositionAndSize(position: Coordinate, size: Size): Rect;
    /**
     * Creates a new Rect object with the same position and dimensions as a given
     * Box.  Note that this is only the inverse of toBox if left/top are defined.
     * @param box A box.
     * @return A new Rect initialized with the box's position and size.
     */
    static createFromBox(box: Box | null): Rect;
    /**
     * Compares rectangles for equality.
     * @param a A Rectangle.
     * @param b A Rectangle.
     * @return True iff the rectangles have the same left, top, width, and height, or if both are null.
     */
    static equals(a: IRect | null, b: IRect | null): boolean;
    /**
     * Computes the intersection of this rectangle and the rectangle parameter.  If
     * there is no intersection, returns false and leaves this rectangle as is.
     * @param rect A Rectangle.
     * @return True iff this rectangle intersects with the parameter.
     */
    intersection(rect: IRect | null): boolean;
    /**
     * Returns the intersection of two rectangles. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param a A Rectangle.
     * @param b A Rectangle.
     * @return A new intersection rect (even if width and height are 0), or null if there is no intersection.
     */
    static intersection(a: IRect | null, b: IRect | null): Rect | null;
    /**
     * Returns whether two rectangles intersect. Two rectangles intersect if they
     * touch at all, for example, two zero width and height rectangles would
     * intersect if they had the same top and left.
     * @param a A Rectangle.
     * @param b A Rectangle.
     * @return Whether a and b intersect.
     */
    static intersects(a: IRect | null, b: IRect | null): boolean;
    /**
     * Returns whether a rectangle intersects this rectangle.
     * @param rect A rectangle.
     * @return Whether rect intersects this rectangle.
     */
    intersects(rect: IRect | null): boolean;
    /**
     * Computes the difference regions between two rectangles. The return value is
     * an array of 0 to 4 rectangles defining the remaining regions of the first
     * rectangle after the second has been subtracted.
     * @param a A Rectangle.
     * @param b A Rectangle.
     * @return An array with 0 to 4 rectangles which together define the difference area of rectangle a minus rectangle b.
     */
    static difference(a: Rect | null, b: IRect | null): Rect[];
    /**
     * Computes the difference regions between this rectangle and `rect`. The
     * return value is an array of 0 to 4 rectangles defining the remaining regions
     * of this rectangle after the other has been subtracted.
     * @param rect A Rectangle.
     * @return An array with 0 to 4 rectangles which together define the difference area of rectangle a minus rectangle b.
     */
    difference(rect: IRect | null): Rect[];
    /**
     * Expand this rectangle to also include the area of the given rectangle.
     * @param rect The other rectangle.
     */
    boundingRect(rect: IRect | null): void;
    /**
     * Returns a new rectangle which completely contains both input rectangles.
     * @param a A rectangle.
     * @param b A rectangle.
     * @return A new bounding rect, or null if either rect is null.
     */
    static boundingRect(a: IRect | null, b: IRect | null): Rect | null;
    /**
     * Tests whether this rectangle entirely contains another rectangle or
     * coordinate.
     * @param another The rectangle or coordinate to test for containment.
     * @return Whether this rectangle contains given rectangle or coordinate.
     */
    contains(another: IRect | Coordinate | null): boolean;
    /**
     *
     * @param point A coordinate.
     * @return The squared distance between the point and the closest point inside the rectangle. Returns 0 if the point is inside the rectangle.
     */
    squaredDistance(point: Coordinate): number;
    /**
     *
     * @param point A coordinate.
     * @return The distance between the point and the closest point inside the rectangle. Returns 0 if the point is inside the rectangle.
     */
    distance(point: Coordinate): number;
    getSize(): Size;
    getTopLeft(): Coordinate;
    getCenter(): Coordinate;
    getBottomRight(): Coordinate;
    /**
     * Rounds the fields to the next larger integer values.
     * @return This rectangle with ceil'd fields.
     */
    ceil(): Rect;
    /**
     * Rounds the fields to the next smaller integer values.
     * @return This rectangle with floored fields.
     */
    floor(): Rect;
    /**
     * Rounds the fields to nearest integer values.
     * @return This rectangle with rounded fields.
     */
    round(): Rect;
    /**
     * Translates this rectangle by the given offsets. If a
     * `Coordinate` is given, then the left and top values are
     * translated by the coordinate's x and y values. Otherwise, left and top are
     * translated by `tx` and `opt_ty` respectively.
     * @param tx The value to translate left by or the the coordinate to translate this rect by.
     * @param opt_ty The value to translate top by.
     * @return This rectangle after translating.
     */
    translate(tx: number | Coordinate | null, opt_ty?: number): Rect;
    /**
     * Scales this rectangle by the given scale factors. The left and width values
     * are scaled by `sx` and the top and height values are scaled by
     * `opt_sy`.  If `opt_sy` is not given, then all fields are scaled
     * by `sx`.
     * @param sx The scale factor to use for the x dimension.
     * @param opt_sy The scale factor to use for the y dimension.
     * @return This rectangle after scaling.
     */
    scale(sx: number, opt_sy?: number): Rect;
}
