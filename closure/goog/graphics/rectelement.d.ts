import { StrokeAndFillElement } from './strokeandfillelement.js';
import type { AbstractGraphics } from './abstractgraphics.js';
import type { Fill } from './fill.js';
import type { Stroke } from './stroke.js';
/**
 * Interface for a graphics rectangle element.
 * You should not construct objects from this constructor. The graphics
 * will return an implementation of this interface for you.
 */
export declare class RectElement extends StrokeAndFillElement {
    /**
     * Interface for a graphics rectangle element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_rectelement_RectElement;
    /**
     * Update the position of the rectangle.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     */
    setPosition(x: number, y: number): void;
    /**
     * Update the size of the rectangle.
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     */
    setSize(width: number, height: number): void;
}
