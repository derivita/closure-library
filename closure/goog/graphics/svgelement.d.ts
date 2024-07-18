import { EllipseElement } from './ellipseelement.js';
import { GroupElement } from './groupelement.js';
import { ImageElement } from './imageelement.js';
import { PathElement } from './pathelement.js';
import { RectElement } from './rectelement.js';
import { TextElement } from './textelement.js';
import { SvgGraphics } from './svggraphics.js';
import type { Fill } from './fill.js';
import type { Path } from './path.js';
import type { Stroke } from './stroke.js';
/**
 * Thin wrapper for SVG group elements.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgGroupElement extends GroupElement {
    /**
     * Thin wrapper for SVG group elements.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgGroupElement;
    /**
     * Remove all drawing elements from the group.
     */
    clear(): void;
    /**
     * Set the size of the group element.
     * @param width The width of the group element.
     * @param height The height of the group element.
     */
    setSize(width: number | string, height: number | string): void;
}
/**
 * Thin wrapper for SVG ellipse elements.
 * This is an implementation of the EllipseElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgEllipseElement extends EllipseElement {
    /**
     * Thin wrapper for SVG ellipse elements.
     * This is an implementation of the EllipseElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgEllipseElement;
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
/**
 * Thin wrapper for SVG rectangle elements.
 * This is an implementation of the RectElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgRectElement extends RectElement {
    /**
     * Thin wrapper for SVG rectangle elements.
     * This is an implementation of the RectElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgRectElement;
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
/**
 * Thin wrapper for SVG path elements.
 * This is an implementation of the PathElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgPathElement extends PathElement {
    /**
     * Thin wrapper for SVG path elements.
     * This is an implementation of the PathElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgPathElement;
    /**
     * Update the underlying path.
     * @param path The path object to draw.
     */
    setPath(path: Path): void;
}
/**
 * Thin wrapper for SVG text elements.
 * This is an implementation of the TextElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgTextElement extends TextElement {
    /**
     * Thin wrapper for SVG text elements.
     * This is an implementation of the TextElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgTextElement;
    /**
     * Update the displayed text of the element.
     * @param text The text to draw.
     */
    setText(text: string): void;
}
/**
 * Thin wrapper for SVG image elements.
 * This is an implementation of the ImageElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class SvgImageElement extends ImageElement {
    /**
     * Thin wrapper for SVG image elements.
     * This is an implementation of the ImageElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor(element: Element | null, graphics: SvgGraphics | null);
    private noStructuralTyping_closure_goog_graphics_svgelement_SvgImageElement;
    /**
     * Update the position of the image.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     */
    setPosition(x: number, y: number): void;
    /**
     * Update the size of the image.
     * @param width Width of image.
     * @param height Height of image.
     */
    setSize(width: number, height: number): void;
    /**
     * Update the source of the image.
     * @param src Source of the image.
     */
    setSource(src: string): void;
}
