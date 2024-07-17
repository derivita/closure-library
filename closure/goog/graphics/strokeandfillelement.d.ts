import { Element as GraphicsElement } from './element.js';
import type { AbstractGraphics } from './abstractgraphics.js';
import type { Fill } from './fill.js';
import type { Stroke } from './stroke.js';
/**
 * Interface for a graphics element with a stroke and fill.
 * This is the base interface for ellipse, rectangle and other
 * shape interfaces.
 * You should not construct objects from this constructor. The graphics
 * will return an implementation of this interface for you.
 */
export declare class StrokeAndFillElement extends GraphicsElement {
    /**
     * Interface for a graphics element with a stroke and fill.
     * This is the base interface for ellipse, rectangle and other
     * shape interfaces.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_strokeandfillelement_StrokeAndFillElement;
    /**
     * The latest fill applied to this element.
     */
    protected fill: Fill | null;
    /**
     * Sets the fill for this element.
     * @param fill The fill object.
     */
    setFill(fill: Fill | null): void;
    getFill(): Fill | null;
    /**
     * Sets the stroke for this element.
     * @param stroke The stroke object.
     */
    setStroke(stroke: Stroke | null): void;
    getStroke(): Stroke | null;
    /**
     * Re-strokes the element to react to coordinate size changes.
     */
    reapplyStroke(): void;
}
