/**
 * Determines if the given coordinate is a percent based coordinate or an
 * expression with a percent based component.
 * @param coord The coordinate to test.
 * @return Whether the coordinate contains the string '%'.
 */
export declare function isPercent_(coord: string): boolean;
/**
 * Determines if the given coordinate is a pixel based coordinate or an
 * expression with a pixel based component.
 * @param coord The coordinate to test.
 * @return Whether the coordinate contains the string 'px'.
 */
export declare function isPixels_(coord: string): boolean;
/**
 * Determines if the given coordinate is special - i.e. not just a number.
 * @param coord The coordinate to test.
 * @return Whether the coordinate is special.
 */
export declare function isSpecial(coord: string | number | null): boolean;
/**
 * Returns the value of the given expression in the given context.
 *
 * Should be treated as package scope.
 * @param coord The coordinate to convert.
 * @param size The size of the parent element.
 * @param scale The ratio of pixels to units.
 * @return The number of coordinate space units that corresponds to this coordinate.
 */
export declare function computeValue(coord: string | number, size: number, scale: number): number;
/**
 * Converts the given coordinate to a number value in units.
 *
 * Should be treated as package scope.
 * @param coord The coordinate to retrieve the value for.
 * @param forMaximum Whether we are computing the largest value this coordinate would be in a parent of no size.  The container size in this case should be set to the size of the current element.
 * @param containerSize The unit value of the size of the container of this element.  Should be set to the minimum width of this element if forMaximum is true.
 * @param scale The ratio of pixels to units.
 * @param opt_cache Optional (but highly recommend) object to store cached computations in.  The calling class should manage clearing out the cache when the scale or containerSize changes.
 * @return The correct number of coordinate space units.
 */
export declare function getValue(coord: string | number, forMaximum: boolean | undefined, containerSize: number, scale: number, opt_cache?: object | null): number;
