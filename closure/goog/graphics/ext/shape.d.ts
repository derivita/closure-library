import { StrokeAndFillElement } from './strokeandfillelement.js';
import type { Path } from '../path.js';
import type { Group } from './group.js';
import type { Path as ExtPath } from './path.js';
/**
 * Wrapper for a graphics shape element.
 */
export declare class Shape extends StrokeAndFillElement {
    /**
     * Wrapper for a graphics shape element.
     * @param group Parent for this element.
     * @param path The path to draw.
     * @param opt_autoSize Optional flag to specify the path should automatically resize to fit the element.  Defaults to false.
     */
    constructor(group: Group | null, path: ExtPath, opt_autoSize?: boolean);
    private noStructuralTyping_closure_goog_graphics_ext_shape_Shape;
    /**
     * Get the path drawn by this shape.
     * @return The path drawn by this shape.
     */
    getPath(): Path | null;
    /**
     * Set the path to draw.
     * @param path The path to draw.
     */
    setPath(path: ExtPath | null): void;
    /**
     * Redraw the ellipse.  Called when the coordinate system is changed.
     */
    redraw(): void;
    checkParentDependent(): boolean;
}
