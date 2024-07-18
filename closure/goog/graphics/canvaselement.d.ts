import { EllipseElement } from './ellipseelement.js';
import { Font } from './font.js';
import { GroupElement } from './groupelement.js';
import { ImageElement } from './imageelement.js';
import { Path } from './path.js';
import { PathElement } from './pathelement.js';
import { RectElement } from './rectelement.js';
import { TextElement } from './textelement.js';
import type { CanvasGraphics } from './canvasgraphics.js';
import type { Element as GraphicsElement } from './element.js';
import type { Fill } from './fill.js';
import type { Stroke } from './stroke.js';
/**
 * Object representing a group of objects in a canvas.
 * This is an implementation of the GroupElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasGroupElement extends GroupElement {
    /**
     * Object representing a group of objects in a canvas.
     * This is an implementation of the GroupElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param graphics The graphics creating this element.
     */
    constructor(graphics: CanvasGraphics | null);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasGroupElement;
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
    /**
     * Append a child to the group.  Does not draw it
     * @param element The child to append.
     */
    appendChild(element: GraphicsElement | null): void;
    /**
     * Draw the group.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
    /**
     * Removes an element from the group.
     * @param elem the element to remove.
     */
    removeElement(elem: GraphicsElement): void;
}
/**
 * Thin wrapper for canvas ellipse elements.
 * This is an implementation of the EllipseElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasEllipseElement extends EllipseElement {
    /**
     * Thin wrapper for canvas ellipse elements.
     * This is an implementation of the EllipseElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     * @param rx Radius length for the x-axis.
     * @param ry Radius length for the y-axis.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: CanvasGraphics | null, cx: number, cy: number, rx: number, ry: number, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasEllipseElement;
    /**
     * Update the center point of the ellipse.
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     */
    setCenter(cx: number, cy: number): void;
    /**
     * Update the radius of the ellipse.
     * @param rx Center X coordinate.
     * @param ry Center Y coordinate.
     */
    setRadius(rx: number, ry: number): void;
    /**
     * Draw the ellipse.  Should be treated as package scope.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
}
/**
 * Thin wrapper for canvas rectangle elements.
 * This is an implementation of the RectElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasRectElement extends RectElement {
    /**
     * Thin wrapper for canvas rectangle elements.
     * This is an implementation of the RectElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param w Width of rectangle.
     * @param h Height of rectangle.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: CanvasGraphics | null, x: number, y: number, w: number, h: number, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasRectElement;
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
    /**
     * Draw the rectangle.  Should be treated as package scope.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
}
/**
 * Thin wrapper for canvas path elements.
 * This is an implementation of the PathElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasPathElement extends PathElement {
    /**
     * Thin wrapper for canvas path elements.
     * This is an implementation of the PathElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param path The path object to draw.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(element: Element | null, graphics: CanvasGraphics | null, path: Path, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasPathElement;
    /**
     * Update the underlying path.
     * @param path The path object to draw.
     */
    setPath(path: Path): void;
    /**
     * Draw the path.  Should be treated as package scope.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
}
/**
 * Thin wrapper for canvas text elements.
 * This is an implementation of the TextElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasTextElement extends TextElement {
    /**
     * Thin wrapper for canvas text elements.
     * This is an implementation of the TextElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param graphics The graphics creating this element.
     * @param text The text to draw.
     * @param x1 X coordinate of start of line.
     * @param y1 Y coordinate of start of line.
     * @param x2 X coordinate of end of line.
     * @param y2 Y coordinate of end of line.
     * @param align Horizontal alignment: left (default), center, right.
     * @param font Font describing the font properties.
     * @param stroke The stroke to use for this element.
     * @param fill The fill to use for this element.
     */
    constructor(graphics: CanvasGraphics, text: string, x1: number, y1: number, x2: number, y2: number, align: string | null, font: Font, stroke: Stroke | null, fill: Fill | null);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasTextElement;
    /**
     * Update the displayed text of the element.
     * @param text The text to draw.
     */
    setText(text: string): void;
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
     * Draw the text.  Should be treated as package scope.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
}
/**
 * Thin wrapper for canvas image elements.
 * This is an implementation of the ImageElement interface.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class CanvasImageElement extends ImageElement {
    /**
     * Thin wrapper for canvas image elements.
     * This is an implementation of the ImageElement interface.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param w Width of rectangle.
     * @param h Height of rectangle.
     * @param src Source of the image.
     */
    constructor(element: Element | null, graphics: CanvasGraphics | null, x: number, y: number, w: number, h: number, src: string);
    private noStructuralTyping_closure_goog_graphics_canvaselement_CanvasImageElement;
    /**
     * Update the position of the image.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     */
    setPosition(x: number, y: number): void;
    /**
     * Update the size of the image.
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     */
    setSize(width: number, height: number): void;
    /**
     * Update the source of the image.
     * @param src Source of the image.
     */
    setSource(src: string): void;
    /**
     * Draw the image.  Should be treated as package scope.
     * @param ctx The context to draw the element in.
     */
    draw(ctx: CanvasRenderingContext2D | null): void;
}
