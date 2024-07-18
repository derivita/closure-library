/**
 * Class for representing sizes consisting of a width and height. Undefined
 * width and height support is deprecated and results in compiler warning.
 */
export declare class Size {
    /**
     * Class for representing sizes consisting of a width and height. Undefined
     * width and height support is deprecated and results in compiler warning.
     * @param width Width.
     * @param height Height.
     */
    constructor(width: number, height: number);
    private noStructuralTyping_closure_goog_math_size_Size;
    /**
     * Width
     */
    width: number;
    /**
     * Height
     */
    height: number;
    /**
     * Compares sizes for equality.
     * @param a A Size.
     * @param b A Size.
     * @return True iff the sizes have equal widths and equal heights, or if both are null.
     */
    static equals(a: Size | null, b: Size | null): boolean;
    clone(): Size;
    getLongest(): number;
    getShortest(): number;
    area(): number;
    perimeter(): number;
    aspectRatio(): number;
    isEmpty(): boolean;
    /**
     * Clamps the width and height parameters upward to integer values.
     * @return This size with ceil'd components.
     */
    ceil(): Size;
    /**
     *
     * @param target The target size.
     * @return True if this Size is the same size or smaller than the target size in both dimensions.
     */
    fitsInside(target: Size): boolean;
    /**
     * Clamps the width and height parameters downward to integer values.
     * @return This size with floored components.
     */
    floor(): Size;
    /**
     * Rounds the width and height parameters to integer values.
     * @return This size with rounded components.
     */
    round(): Size;
    /**
     * Scales this size by the given scale factors. The width and height are scaled
     * by `sx` and `opt_sy` respectively.  If `opt_sy` is not
     * given, then `sx` is used for both the width and height.
     * @param sx The scale factor to use for the width.
     * @param opt_sy The scale factor to use for the height.
     * @return This Size object after scaling.
     */
    scale(sx: number, opt_sy?: number): Size;
    /**
     * Uniformly scales the size to perfectly cover the dimensions of a given size.
     * If the size is already larger than the target, it will be scaled down to the
     * minimum size at which it still covers the entire target. The original aspect
     * ratio will be preserved.
     *
     * This function assumes that both Sizes contain strictly positive dimensions.
     * @param target The target size.
     * @return This Size object, after optional scaling.
     */
    scaleToCover(target: Size): Size;
    /**
     * Uniformly scales the size to fit inside the dimensions of a given size. The
     * original aspect ratio will be preserved.
     *
     * This function assumes that both Sizes contain strictly positive dimensions.
     * @param target The target size.
     * @return This Size object, after optional scaling.
     */
    scaleToFit(target: Size): Size;
}
