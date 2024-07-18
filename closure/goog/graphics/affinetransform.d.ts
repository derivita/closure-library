/**
 * Creates a 2D affine transform. An affine transform performs a linear
 * mapping from 2D coordinates to other 2D coordinates that preserves the
 * "straightness" and "parallelness" of lines.
 *
 * Such a coordinate transformation can be represented by a 3 row by 3 column
 * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
 * coordinates (x,y) into destination coordinates (x',y') by considering them
 * to be a column vector and multiplying the coordinate vector by the matrix
 * according to the following process:
 * <pre>
 * [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
 * [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
 * [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
 * </pre>
 *
 * This class is optimized for speed and minimizes calculations based on its
 * knowledge of the underlying matrix (as opposed to say simply performing
 * matrix multiplication).
 */
export declare class AffineTransform {
    /**
     * Creates a 2D affine transform. An affine transform performs a linear
     * mapping from 2D coordinates to other 2D coordinates that preserves the
     * "straightness" and "parallelness" of lines.
     *
     * Such a coordinate transformation can be represented by a 3 row by 3 column
     * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
     * coordinates (x,y) into destination coordinates (x',y') by considering them
     * to be a column vector and multiplying the coordinate vector by the matrix
     * according to the following process:
     * <pre>
     * [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     * [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     * [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     *
     * This class is optimized for speed and minimizes calculations based on its
     * knowledge of the underlying matrix (as opposed to say simply performing
     * matrix multiplication).
     * @param opt_m00 The m00 coordinate of the transform.
     * @param opt_m10 The m10 coordinate of the transform.
     * @param opt_m01 The m01 coordinate of the transform.
     * @param opt_m11 The m11 coordinate of the transform.
     * @param opt_m02 The m02 coordinate of the transform.
     * @param opt_m12 The m12 coordinate of the transform.
     */
    constructor(opt_m00?: number, opt_m10?: number, opt_m01?: number, opt_m11?: number, opt_m02?: number, opt_m12?: number);
    private noStructuralTyping_closure_goog_graphics_affinetransform_AffineTransform;
    isIdentity(): boolean;
    clone(): AffineTransform;
    /**
     * Sets this transform to the matrix specified by the 6 values.
     * @param m00 The m00 coordinate of the transform.
     * @param m10 The m10 coordinate of the transform.
     * @param m01 The m01 coordinate of the transform.
     * @param m11 The m11 coordinate of the transform.
     * @param m02 The m02 coordinate of the transform.
     * @param m12 The m12 coordinate of the transform.
     * @return This affine transform.
     */
    setTransform(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): AffineTransform;
    /**
     * Sets this transform to be identical to the given transform.
     * @param tx The transform to copy.
     * @return This affine transform.
     */
    copyFrom(tx: AffineTransform): AffineTransform;
    /**
     * Concatenates this transform with a scaling transformation.
     * @param sx The x-axis scaling factor.
     * @param sy The y-axis scaling factor.
     * @return This affine transform.
     */
    scale(sx: number, sy: number): AffineTransform;
    /**
     * Pre-concatenates this transform with a scaling transformation,
     * i.e. calculates the following matrix product:
     *
     * <pre>
     * [sx  0 0] [m00 m01 m02]
     * [ 0 sy 0] [m10 m11 m12]
     * [ 0  0 1] [  0   0   1]
     * </pre>
     * @param sx The x-axis scaling factor.
     * @param sy The y-axis scaling factor.
     * @return This affine transform.
     */
    preScale(sx: number, sy: number): AffineTransform;
    /**
     * Concatenates this transform with a translate transformation.
     * @param dx The distance to translate in the x direction.
     * @param dy The distance to translate in the y direction.
     * @return This affine transform.
     */
    translate(dx: number, dy: number): AffineTransform;
    /**
     * Pre-concatenates this transform with a translate transformation,
     * i.e. calculates the following matrix product:
     *
     * <pre>
     * [1 0 dx] [m00 m01 m02]
     * [0 1 dy] [m10 m11 m12]
     * [0 0  1] [  0   0   1]
     * </pre>
     * @param dx The distance to translate in the x direction.
     * @param dy The distance to translate in the y direction.
     * @return This affine transform.
     */
    preTranslate(dx: number, dy: number): AffineTransform;
    /**
     * Concatenates this transform with a rotation transformation around an anchor
     * point.
     * @param theta The angle of rotation measured in radians.
     * @param x The x coordinate of the anchor point.
     * @param y The y coordinate of the anchor point.
     * @return This affine transform.
     */
    rotate(theta: number, x: number, y: number): AffineTransform;
    /**
     * Pre-concatenates this transform with a rotation transformation around an
     * anchor point.
     * @param theta The angle of rotation measured in radians.
     * @param x The x coordinate of the anchor point.
     * @param y The y coordinate of the anchor point.
     * @return This affine transform.
     */
    preRotate(theta: number, x: number, y: number): AffineTransform;
    /**
     * Concatenates this transform with a shear transformation.
     * @param shx The x shear factor.
     * @param shy The y shear factor.
     * @return This affine transform.
     */
    shear(shx: number, shy: number): AffineTransform;
    /**
     * Pre-concatenates this transform with a shear transformation.
     * i.e. calculates the following matrix product:
     *
     * <pre>
     * [  1 shx 0] [m00 m01 m02]
     * [shy   1 0] [m10 m11 m12]
     * [  0   0 1] [  0   0   1]
     * </pre>
     * @param shx The x shear factor.
     * @param shy The y shear factor.
     * @return This affine transform.
     */
    preShear(shx: number, shy: number): AffineTransform;
    toString(): string;
    getScaleX(): number;
    getScaleY(): number;
    getTranslateX(): number;
    getTranslateY(): number;
    getShearX(): number;
    getShearY(): number;
    /**
     * Concatenates an affine transform to this transform.
     * @param tx The transform to concatenate.
     * @return This affine transform.
     */
    concatenate(tx: AffineTransform): AffineTransform;
    /**
     * Pre-concatenates an affine transform to this transform.
     * @param tx The transform to preconcatenate.
     * @return This affine transform.
     */
    preConcatenate(tx: AffineTransform): AffineTransform;
    /**
     * Transforms an array of coordinates by this transform and stores the result
     * into a destination array.
     * @param src The array containing the source points as x, y value pairs.
     * @param srcOff The offset to the first point to be transformed.
     * @param dst The array into which to store the transformed point pairs.
     * @param dstOff The offset of the location of the first transformed point in the destination array.
     * @param numPts The number of points to transform.
     */
    transform(src: number[], srcOff: number, dst: number[], dstOff: number, numPts: number): void;
    getDeterminant(): number;
    /**
     * Returns whether the transform is invertible. A transform is not invertible
     * if the determinant is 0 or any value is non-finite or NaN.
     * @return Whether the transform is invertible.
     */
    isInvertible(): boolean;
    createInverse(): AffineTransform;
    /**
     * Creates a transform representing a scaling transformation.
     * @param sx The x-axis scaling factor.
     * @param sy The y-axis scaling factor.
     * @return A transform representing a scaling transformation.
     */
    static getScaleInstance(sx: number, sy: number): AffineTransform;
    /**
     * Creates a transform representing a translation transformation.
     * @param dx The distance to translate in the x direction.
     * @param dy The distance to translate in the y direction.
     * @return A transform representing a translation transformation.
     */
    static getTranslateInstance(dx: number, dy: number): AffineTransform;
    /**
     * Creates a transform representing a shearing transformation.
     * @param shx The x-axis shear factor.
     * @param shy The y-axis shear factor.
     * @return A transform representing a shearing transformation.
     */
    static getShearInstance(shx: number, shy: number): AffineTransform;
    /**
     * Creates a transform representing a rotation transformation.
     * @param theta The angle of rotation measured in radians.
     * @param x The x coordinate of the anchor point.
     * @param y The y coordinate of the anchor point.
     * @return A transform representing a rotation transformation.
     */
    static getRotateInstance(theta: number, x: number, y: number): AffineTransform;
    /**
     * Sets this transform to a scaling transformation.
     * @param sx The x-axis scaling factor.
     * @param sy The y-axis scaling factor.
     * @return This affine transform.
     */
    setToScale(sx: number, sy: number): AffineTransform;
    /**
     * Sets this transform to a translation transformation.
     * @param dx The distance to translate in the x direction.
     * @param dy The distance to translate in the y direction.
     * @return This affine transform.
     */
    setToTranslation(dx: number, dy: number): AffineTransform;
    /**
     * Sets this transform to a shearing transformation.
     * @param shx The x-axis shear factor.
     * @param shy The y-axis shear factor.
     * @return This affine transform.
     */
    setToShear(shx: number, shy: number): AffineTransform;
    /**
     * Sets this transform to a rotation transformation.
     * @param theta The angle of rotation measured in radians.
     * @param x The x coordinate of the anchor point.
     * @param y The y coordinate of the anchor point.
     * @return This affine transform.
     */
    setToRotation(theta: number, x: number, y: number): AffineTransform;
    /**
     * Compares two affine transforms for equality.
     * @param tx The other affine transform.
     * @return whether the two transforms are equal.
     */
    equals(tx: AffineTransform | null): boolean;
}
