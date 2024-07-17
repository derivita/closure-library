import { StrokeAndFillElement } from './strokeandfillelement.js';
import type { Group } from './group.js';
/**
 * Wrapper for a graphics rectangle element.
 */
export declare class Rectangle extends StrokeAndFillElement {
    /**
     * Wrapper for a graphics rectangle element.
     * @param group Parent for this element.
     */
    constructor(group: Group | null);
    private noStructuralTyping_closure_goog_graphics_ext_rectangle_Rectangle;
    /**
     * Redraw the rectangle.  Called when the coordinate system is changed.
     */
    redraw(): void;
}
