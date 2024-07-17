import { StrokeAndFillElement } from './strokeandfillelement.js';
import type { Group } from './group.js';
/**
 * Wrapper for a graphics ellipse element.
 */
export declare class Ellipse extends StrokeAndFillElement {
    /**
     * Wrapper for a graphics ellipse element.
     * @param group Parent for this element.
     */
    constructor(group: Group | null);
    private noStructuralTyping_closure_goog_graphics_ext_ellipse_Ellipse;
    /**
     * Redraw the ellipse.  Called when the coordinate system is changed.
     */
    redraw(): void;
}
