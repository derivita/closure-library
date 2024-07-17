import { AffineTransform } from '../affinetransform.js';
import { Path as graphicsPath } from '../path.js';
import { Rect } from '../../math/rect.js';
/**
 * Creates a path object
 */
export declare class Path extends graphicsPath {
    /**
     * Creates a path object
     */
    constructor();
    private noStructuralTyping_closure_goog_graphics_ext_path_Path;
    /**
     * Clones the path.
     * @return A clone of this path.
     */
    clone(): Path;
    /**
     * Transforms the path. Only simple paths are transformable. Attempting
     * to transform a non-simple path will throw an error.
     * @param tx The transformation to perform.
     * @return The path itself.
     */
    transform(tx: AffineTransform): Path;
    /**
     * Modify the bounding box of the path.  This may cause the path to be
     * simplified (i.e. arcs converted to curves) as a side-effect.
     * @param deltaX How far to translate the x coordinates.
     * @param deltaY How far to translate the y coordinates.
     * @param xFactor After translation, all x coordinates are multiplied by this number.
     * @param yFactor After translation, all y coordinates are multiplied by this number.
     * @return The path itself.
     */
    modifyBounds(deltaX: number, deltaY: number, xFactor: number, yFactor: number): Path;
    /**
     * Set the precomputed bounds.
     * @param bounds The bounds to use, or set to null to clear and recompute on the next call to getBoundingBox.
     */
    useBoundingBox(bounds: Rect | null): void;
    getBoundingBox(): Rect | null;
}
