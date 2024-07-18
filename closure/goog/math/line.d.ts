import { Coordinate } from './coordinate.js';
/**
 * Object representing a line.
 */
export declare class Line {
    /**
     * Object representing a line.
     * @param x0 X coordinate of the start point.
     * @param y0 Y coordinate of the start point.
     * @param x1 X coordinate of the end point.
     * @param y1 Y coordinate of the end point.
     */
    constructor(x0: number, y0: number, x1: number, y1: number);
    private noStructuralTyping_closure_goog_math_line_Line;
    /**
     * X coordinate of the first point.
     */
    x0: number;
    /**
     * Y coordinate of the first point.
     */
    y0: number;
    /**
     * X coordinate of the first control point.
     */
    x1: number;
    /**
     * Y coordinate of the first control point.
     */
    y1: number;
    clone(): Line;
    /**
     * Tests whether the given line is exactly the same as this one.
     * @param other The other line.
     * @return Whether the given line is the same as this one.
     */
    equals(other: Line | null): boolean;
    getSegmentLengthSquared(): number;
    getSegmentLength(): number;
    /**
     * Returns the point on the line segment proportional to t, where for t = 0 we
     * return the starting point and for t = 1 we return the end point.  For t < 0
     * or t > 1 we extrapolate along the line defined by the line segment.
     * @param t The interpolation parameter along the line segment.
     * @return The point on the line segment at t.
     */
    getInterpolatedPoint(t: number): Coordinate;
    /**
     * Computes the point on the line closest to a given point.  Note that a line
     * in this case is defined as the infinite line going through the start and end
     * points.  To find the closest point on the line segment itself see
     * {@see #getClosestSegmentPoint}.
     * @param x The x coordinate of the point, or a coordinate object.
     * @param opt_y The y coordinate of the point - required if x is a number, ignored if x is a Coordinate.
     * @return The point on the line closest to the given point.
     */
    getClosestPoint(x: number | Coordinate | null, opt_y?: number): Coordinate;
    /**
     * Computes the point on the line segment closest to a given point.
     * @param x The x coordinate of the point, or a coordinate object.
     * @param opt_y The y coordinate of the point - required if x is a number, ignored if x is a Coordinate.
     * @return The point on the line segment closest to the given point.
     */
    getClosestSegmentPoint(x: number | Coordinate | null, opt_y?: number): Coordinate;
}
