import { AbstractGraphics } from './abstractgraphics.js';
import { CanvasGroupElement } from './canvaselement.js';
import { Font } from './font.js';
import { Size } from '../math/size.js';
import type { DomHelper } from '../dom/dom.js';
import type { AffineTransform } from './affinetransform.js';
import type { Element as GraphicsElement } from './element.js';
import type { EllipseElement } from './ellipseelement.js';
import type { Fill } from './fill.js';
import type { GroupElement } from './groupelement.js';
import type { ImageElement } from './imageelement.js';
import type { Path } from './path.js';
import type { PathElement } from './pathelement.js';
import type { RectElement } from './rectelement.js';
import type { Stroke } from './stroke.js';
import type { StrokeAndFillElement } from './strokeandfillelement.js';
import type { TextElement } from './textelement.js';
/**
 * A Graphics implementation for drawing using canvas.
 */
export declare class CanvasGraphics extends AbstractGraphics {
    /**
     * A Graphics implementation for drawing using canvas.
     * @param width The (non-zero) width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param height The (non-zero) height in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param opt_coordWidth The coordinate width - if omitted or null, defaults to same as width.
     * @param opt_coordHeight The coordinate height - if omitted or null, defaults to same as height.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor(width: string | number, height: string | number, opt_coordWidth?: number | null, opt_coordHeight?: number | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_graphics_canvasgraphics_CanvasGraphics;
    /**
     * Sets the fill for the given element.
     * @param element The element wrapper.
     * @param fill The fill object.
     */
    setElementFill(element: StrokeAndFillElement | null, fill: Fill | null): void;
    /**
     * Sets the stroke for the given element.
     * @param element The element wrapper.
     * @param stroke The stroke object.
     */
    setElementStroke(element: StrokeAndFillElement | null, stroke: Stroke | null): void;
    /**
     * Set the translation and rotation of an element.
     *
     * If a more general affine transform is needed than this provides
     * (e.g. skew and scale) then use setElementAffineTransform.
     * @param element The element wrapper.
     * @param x The x coordinate of the translation transform.
     * @param y The y coordinate of the translation transform.
     * @param angle The angle of the rotation transform.
     * @param centerX The horizontal center of the rotation transform.
     * @param centerY The vertical center of the rotation transform.
     */
    setElementTransform(element: GraphicsElement | null, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    /**
     * Set the transformation of an element.
     *
     * Note that in this implementation this method just calls this.redraw()
     * and the affineTransform param is unused.
     * @param element The element wrapper.
     * @param affineTransform The transformation applied to this element.
     */
    setElementAffineTransform(element: GraphicsElement, affineTransform: AffineTransform): void;
    /**
     * Push an element transform on to the transform stack.
     * @param element The transformed element.
     */
    pushElementTransform(element: GraphicsElement | null): void;
    /**
     * Pop an element transform off of the transform stack.
     */
    popElementTransform(): void;
    /**
     * Creates the DOM representation of the graphics area.
     */
    createDom(): void;
    /**
     * Returns the drawing context.
     * @return The canvas element rendering context.
     */
    getContext(): object | null;
    /**
     * Changes the coordinate system position.
     * @param left The coordinate system left bound.
     * @param top The coordinate system top bound.
     */
    setCoordOrigin(left: number, top: number): void;
    /**
     * Changes the coordinate size.
     * @param coordWidth The coordinate width.
     * @param coordHeight The coordinate height.
     */
    setCoordSize(coordWidth: number, coordHeight: number): void;
    /**
     * Change the size of the canvas.
     * @param pixelWidth The width in pixels.
     * @param pixelHeight The height in pixels.
     */
    setSize(pixelWidth: number, pixelHeight: number): void;
    getPixelSize(): Size;
    /**
     * Update the size of the canvas.
     */
    updateSize(): void;
    /**
     * Reset the canvas.
     */
    reset(): void;
    /**
     * Remove all drawing elements from the graphics.
     */
    clear(): void;
    /**
     * Redraw the entire canvas.
     */
    redraw(): void;
    /**
     * Draw an element, including any stroke or fill.
     * @param element The element to draw.
     */
    drawElement(element: GraphicsElement | null): void;
    /**
     * Append an element.
     * @param element The element to draw.
     * @param group The group to draw it in. If null or undefined, defaults to the root group.
     */
    protected append(element: GraphicsElement | null, group: GroupElement | undefined | null): void;
    /**
     * Draw an ellipse.
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     * @param rx Radius length for the x-axis.
     * @param ry Radius length for the y-axis.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to.  If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): EllipseElement;
    /**
     * Draw a rectangle.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawRect(x: number, y: number, width: number, height: number, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): RectElement;
    /**
     * Draw an image.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of image.
     * @param height Height of image.
     * @param src Source of the image.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: GroupElement | null): ImageElement;
    /**
     * Draw a text string vertically centered on a given line.
     * @param text The text to draw.
     * @param x1 X coordinate of start of line.
     * @param y1 Y coordinate of start of line.
     * @param x2 X coordinate of end of line.
     * @param y2 Y coordinate of end of line.
     * @param align Horizontal alignment: left (default), center, right.
     * @param font Font describing the font properties.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string | null, font: Font | null, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): TextElement;
    /**
     * Draw a path.
     * @param path The path object to draw.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawPath(path: Path, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): PathElement;
    /**
     *
     * @param group The group to possibly draw to.
     * @return Whether drawing can occur now.
     */
    isDrawable(group: GroupElement | null): boolean;
    /**
     * Returns true if drawing to the given group means a redraw is required.
     * @param group The group to draw to.
     * @return Whether drawing to this group should force a redraw.
     */
    isRedrawRequired(group: GroupElement | null): boolean;
    /**
     * Create an empty group of drawing elements.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created group.
     */
    createGroup(opt_group?: GroupElement | null): CanvasGroupElement;
    /**
     * Disposes of the component by removing event handlers, detacing DOM nodes from
     * the document body, and removing references to them.
     */
    disposeInternal(): void;
    enterDocument(): void;
    /**
     * Start preventing redraws - useful for chaining large numbers of changes
     * together.  Not guaranteed to do anything - i.e. only use this for
     * optimization of a single code path.
     */
    suspend(): void;
    /**
     * Stop preventing redraws.  If any redraws had been prevented, a redraw will
     * be done now.
     */
    resume(): void;
    /**
     * Removes an element from the Canvas.
     * @param elem the element to remove.
     */
    removeElement(elem: GraphicsElement | null): void;
}
