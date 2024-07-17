import * as dom from '../dom/dom.js';
import { AffineTransform } from './affinetransform.js';
import { Element } from './element.js';
import { EllipseElement } from './ellipseelement.js';
import { Fill } from './fill.js';
import { Font } from './font.js';
import { GroupElement } from './groupelement.js';
import { Path } from './path.js';
import { PathElement } from './pathelement.js';
import { RectElement } from './rectelement.js';
import { Stroke } from './stroke.js';
import { StrokeAndFillElement } from './strokeandfillelement.js';
import { TextElement } from './textelement.js';
import { Coordinate } from '../math/coordinate.js';
import { Size } from '../math/size.js';
import { Component } from '../ui/component.js';
/**
 * Base class for the different graphics. You should never construct objects
 * of this class. Instead us goog.graphics.createGraphics
 */
export declare class AbstractGraphics extends Component {
    /**
     * Base class for the different graphics. You should never construct objects
     * of this class. Instead us goog.graphics.createGraphics
     * @param width The width in pixels or percent.
     * @param height The height in pixels or percent.
     * @param opt_coordWidth Optional coordinate system width - if omitted or null, defaults to same as width.
     * @param opt_coordHeight Optional coordinate system height - if omitted or null, defaults to same as height.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     */
    constructor(width: number | string, height: number | string, opt_coordWidth?: number | null, opt_coordHeight?: number | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_graphics_abstractgraphics_AbstractGraphics;
    /**
     * Width of graphics in pixels or percentage points.
     */
    protected width: number | string;
    /**
     * Height of graphics in pixels or percentage points.
     */
    protected height: number | string;
    /**
     * Width of coordinate system in units.
     */
    protected coordWidth: number | null;
    /**
     * Height of coordinate system in units.
     */
    protected coordHeight: number | null;
    /**
     * The root level group element.
     */
    protected canvasElement: GroupElement | null;
    /**
     * Left coordinate of the view box
     */
    protected coordLeft: number;
    /**
     * Top coordinate of the view box
     */
    protected coordTop: number;
    getCanvasElement(): GroupElement | null;
    /**
     * Changes the coordinate size.
     * @param coordWidth The coordinate width.
     * @param coordHeight The coordinate height.
     */
    setCoordSize(coordWidth: number, coordHeight: number): void;
    getCoordSize(): Size | null;
    /**
     * Changes the coordinate system position.
     * @param left The coordinate system left bound.
     * @param top The coordinate system top bound.
     */
    setCoordOrigin(left: number, top: number): void;
    getCoordOrigin(): Coordinate;
    /**
     * Change the size of the canvas.
     * @param pixelWidth The width in pixels.
     * @param pixelHeight The height in pixels.
     */
    setSize(pixelWidth: number, pixelHeight: number): void;
    getSize(): Size | null;
    getPixelSize(): Size | null;
    getPixelScaleX(): number;
    getPixelScaleY(): number;
    /**
     * Remove all drawing elements from the graphics.
     */
    clear(): void;
    /**
     * Remove a single drawing element from the surface.  The default implementation
     * assumes a DOM based drawing surface.
     * @param element The element to remove.
     */
    removeElement(element: Element | null): void;
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
     * Set the transformation of an element.
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
    setElementTransform(element: Element | null, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    /**
     * Set the affine transform of an element.
     * @param element The element wrapper.
     * @param affineTransform The transformation applied to this element.
     */
    setElementAffineTransform(element: Element, affineTransform: AffineTransform): void;
    /**
     * Draw a circle
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     * @param r Radius length.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawCircle(cx: number, cy: number, r: number, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): EllipseElement | null;
    /**
     * Draw an ellipse
     * @param cx Center X coordinate.
     * @param cy Center Y coordinate.
     * @param rx Radius length for the x-axis.
     * @param ry Radius length for the y-axis.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): EllipseElement | null;
    /**
     * Draw a rectangle
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawRect(x: number, y: number, width: number, height: number, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): RectElement | null;
    /**
     * Draw a text string within a rectangle (drawing is horizontal)
     * @param text The text to draw.
     * @param x X coordinate (left).
     * @param y Y coordinate (top).
     * @param width Width of rectangle.
     * @param height Height of rectangle.
     * @param align Horizontal alignment: left (default), center, right.
     * @param vAlign Vertical alignment: top (default), center, bottom.
     * @param font Font describing the font properties.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawText(text: string, x: number, y: number, width: number, height: number, align: string, vAlign: string, font: Font | null, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): TextElement | null;
    /**
     * Draw a text string vertically centered on a given line.
     * @param text The text to draw.
     * @param x1 X coordinate of start of line.
     * @param y1 Y coordinate of start of line.
     * @param x2 X coordinate of end of line.
     * @param y2 Y coordinate of end of line.
     * @param align Horizontal alingnment: left (default), center, right.
     * @param font Font describing the font properties.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: Font | null, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): TextElement | null;
    /**
     * Draw a path.
     * @param path The path object to draw.
     * @param stroke Stroke object describing the stroke.
     * @param fill Fill object describing the fill.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created element.
     */
    drawPath(path: Path, stroke: Stroke | null, fill: Fill | null, opt_group?: GroupElement | null): PathElement | null;
    /**
     * Create an empty group of drawing elements.
     * @param opt_group The group wrapper element to append to. If not specified, appends to the main canvas.
     * @return The newly created group.
     */
    createGroup(opt_group?: GroupElement | null): GroupElement | null;
    /**
     * Create an empty path.
     * @return The path.
     */
    createPath(): Path;
    /**
     * Measure and return the width (in pixels) of a given text string.
     * Text measurement is needed to make sure a text can fit in the allocated
     * area. The way text length is measured is by writing it into a div that is
     * after the visible area, measure the div width, and immediately erase the
     * written value.
     * @param text The text string to measure.
     * @param font The font object describing the font style.
     * @return The width in pixels of the text strings.
     */
    getTextWidth(text: string, font: Font | null): number;
    isDomClonable(): boolean;
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
}
