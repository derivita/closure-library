import { Coordinate } from './coordinate.js';
/**
 * Object representing a cubic bezier curve.
 */
export declare class Bezier {
    /**
     * Object representing a cubic bezier curve.
     * @param x0 X coordinate of the start point.
     * @param y0 Y coordinate of the start point.
     * @param x1 X coordinate of the first control point.
     * @param y1 Y coordinate of the first control point.
     * @param x2 X coordinate of the second control point.
     * @param y2 Y coordinate of the second control point.
     * @param x3 X coordinate of the end point.
     * @param y3 Y coordinate of the end point.
     */
    constructor(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number);
    private noStructuralTyping_closure_goog_math_bezier_Bezier;
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
    /**
     * X coordinate of the second control point.
     */
    x2: number;
    /**
     * Y coordinate of the second control point.
     */
    y2: number;
    /**
     * X coordinate of the end point.
     */
    x3: number;
    /**
     * Y coordinate of the end point.
     */
    y3: number;
    /**
     * Constant used to approximate ellipses.
     * See: http://canvaspaint.org/blog/2006/12/ellipse/
     */
    static KAPPA: number;
    clone(): Bezier;
    /**
     * Test if the given curve is exactly the same as this one.
     * @param other The other curve.
     * @return Whether the given curve is the same as this one.
     */
    equals(other: Bezier | null): boolean;
    /**
     * Modifies the curve in place to progress in the opposite direction.
     */
    flip(): void;
    /**
     * Computes the curve's X coordinate at a point between 0 and 1.
     * @param t The point on the curve to find.
     * @return The computed coordinate.
     */
    getPointX(t: number): number;
    /**
     * Computes the curve's Y coordinate at a point between 0 and 1.
     * @param t The point on the curve to find.
     * @return The computed coordinate.
     */
    getPointY(t: number): number;
    /**
     * Computes the curve at a point between 0 and 1.
     * @param t The point on the curve to find.
     * @return The computed coordinate.
     */
    getPoint(t: number): Coordinate;
    /**
     * Changes this curve in place to be the portion of itself from [t, 1].
     * @param t The start of the desired portion of the curve.
     */
    subdivideLeft(t: number): void;
    /**
     * Changes this curve in place to be the portion of itself from [0, t].
     * @param t The end of the desired portion of the curve.
     */
    subdivideRight(t: number): void;
    /**
     * Changes this curve in place to be the portion of itself from [s, t].
     * @param s The start of the desired portion of the curve.
     * @param t The end of the desired portion of the curve.
     */
    subdivide(s: number, t: number): void;
    /**
     * Computes the position t of a point on the curve given its x coordinate.
     * That is, for an input xVal, finds t s.t. getPointX(t) = xVal.
     * As such, the following should always be true up to some small epsilon:
     * t ~ solvePositionFromXValue(getPointX(t)) for t in [0, 1].
     * @param xVal The x coordinate of the point to find on the curve.
     * @return The position t.
     */
    solvePositionFromXValue(xVal: number): number;
    /**
     * Computes the y coordinate of a point on the curve given its x coordinate.
     * @param xVal The x coordinate of the point on the curve.
     * @return The y coordinate of the point on the curve.
     */
    solveYValueFromXValue(xVal: number): number;
}
