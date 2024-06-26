//!! generated by clutz.
// Generated from math/interpolator/interpolator1.js
declare namespace ಠ_ಠ.clutz.goog.math.interpolator {
  /**
   * An interface for one dimensional data interpolation.
   */
  interface Interpolator1 {
    /**
     * Computes the inverse interpolator. That is, it returns invInterp s.t.
     * this.interpolate(invInterp.interpolate(t))) = t. Note that the inverse
     * interpolator is only well defined if the data being interpolated is
     * 'invertible', i.e. it represents a bijective function.
     * In addition, the returned interpolator is only guaranteed to give the exact
     * inverse at the input data passed in getData.
     * If 'this' has no data, the returned Interpolator will be empty as well.
     */
    getInverse ( ) : ಠ_ಠ.clutz.goog.math.interpolator.Interpolator1 ;
    /**
     * Computes the interpolated value at abscissa x. If x is outside the range
     * of the data points passed in setData, the value is extrapolated.
     * @param x The abscissa to sample at.
     */
    interpolate (a : number ) : number ;
    /**
     * Sets the data to be interpolated. Note that the data points are expected
     * to be sorted according to their abscissa values and not have duplicate
     * values. E.g. calling setData([0, 0, 1], [1, 1, 3]) may give undefined
     * results, the correct call should be setData([0, 1], [1, 3]).
     * Calling setData multiple times does not merge the data samples. The last
     * call to setData is the one used when computing the interpolation.
     * @param x The abscissa of the data points.
     * @param y The ordinate of the data points.
     */
    setData (a : number [] , b : number [] ) : any ;
  }
}
declare module 'goog:goog.math.interpolator.Interpolator1' {
  import Interpolator1 = ಠ_ಠ.clutz.goog.math.interpolator.Interpolator1;
  export default Interpolator1;
}
