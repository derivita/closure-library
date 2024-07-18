import { Interpolator1 } from './interpolator1.js';
/**
 * A one dimensional cubic spline interpolator with natural boundary conditions.
 */
export declare class Spline1 implements Interpolator1 {
    /**
     * A one dimensional cubic spline interpolator with natural boundary conditions.
     */
    constructor();
    private noStructuralTyping_closure_goog_math_interpolator_spline1_Spline1;
    setData(x: any, y: any): any;
    interpolate(x: any): any;
    /**
     * Computes the derivative at each point of the spline such that
     * the curve is C2. It uses not-a-knot boundary conditions.
     * @param dx The spacing between consecutive data points.
     * @param slope The slopes between consecutive data points.
     * @return The Spline derivative at each data point.
     */
    protected computeDerivatives(dx: number[] | null, slope: number[] | null): number[];
    /**
     * Note that the inverse of a cubic spline is not a cubic spline in general.
     * As a result the inverse implementation is only approximate. In
     * particular, it only guarantees the exact inverse at the original input data
     * points passed to setData.
     */
    getInverse(): any;
}
