import { Element } from './element.js';
import { StrokeAndFillElement as GraphicsStrokeAndFillElement } from '../strokeandfillelement.js';
import type { Fill } from '../fill.js';
import type { Stroke } from '../stroke.js';
import type { Group } from './group.js';
/**
 * Interface for a graphics element that has a stroke and fill.
 * This is the base interface for ellipse, rectangle and other
 * shape interfaces.
 * You should not construct objects from this constructor. Use a subclass.
 */
export declare class StrokeAndFillElement extends Element {
    /**
     * Interface for a graphics element that has a stroke and fill.
     * This is the base interface for ellipse, rectangle and other
     * shape interfaces.
     * You should not construct objects from this constructor. Use a subclass.
     * @param group Parent for this element.
     * @param wrapper The thin wrapper to wrap.
     */
    constructor(group: Group | null, wrapper: GraphicsStrokeAndFillElement | null);
    private noStructuralTyping_closure_goog_graphics_ext_strokeandfillelement_StrokeAndFillElement;
    /**
     * Sets the fill for this element.
     * @param fill The fill object.
     */
    setFill(fill: Fill | null): void;
    /**
     * Sets the stroke for this element.
     * @param stroke The stroke object.
     */
    setStroke(stroke: Stroke | null): void;
    /**
     * Redraw the rectangle.  Called when the coordinate system is changed.
     */
    redraw(): void;
}
