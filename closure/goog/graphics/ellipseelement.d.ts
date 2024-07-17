import { StrokeAndFillElement } from './strokeandfillelement.js';
import type { AbstractGraphics } from './abstractgraphics.js';
import type { Fill } from './fill.js';
import type { Stroke } from './stroke.js';
/**
 * Interface for a graphics ellipse element.
 * You should not construct objects from this constructor. The graphics
 * will return an implementation of this interface for you.
 */
export declare class EllipseElement extends StrokeAndFillElement {
    /**
     * Interface for a graphics ellipse element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_ellipseelement_EllipseElement;
    /**
     * Update the center point of the ellipse.
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     */
    setCenter(cx: number, cy: number): void;
    /**
     * Update the radius of the ellipse.
     * @param rx Radius length for the x-axis.
     * @param ry Radius length for the y-axis.
     */
    setRadius(rx: number, ry: number): void;
}
