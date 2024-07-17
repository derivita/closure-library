import { Group } from './group.js';
import type { DomHelper } from '../../dom/dom.js';
import type { AbstractGraphics } from '../abstractgraphics.js';
import type { Coordinate } from '../../math/coordinate.js';
import type { Size } from '../../math/size.js';
/**
 * Wrapper for a graphics surface.
 */
export declare class Graphics extends Group {
    /**
     * Wrapper for a graphics surface.
     * @param width The width in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param height The height in pixels.  Strings expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param opt_coordWidth The coordinate width - if omitted or null, defaults to same as width.
     * @param opt_coordHeight The coordinate height. - if omitted or null, defaults to same as height.
     * @param opt_domHelper The DOM helper object for the document we want to render in.
     * @param opt_isSimple Flag used to indicate the graphics object will be drawn to in a single pass, and the fastest implementation for this scenario should be favored.  NOTE: Setting to true may result in degradation of text support.
     */
    constructor(width: string | number, height: string | number, opt_coordWidth?: number | null, opt_coordHeight?: number | null, opt_domHelper?: DomHelper | null, opt_isSimple?: boolean);
    private noStructuralTyping_closure_goog_graphics_ext_graphics_Graphics;
    getImplementation(): AbstractGraphics | null;
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
    setPixelSize(pixelWidth: number, pixelHeight: number): void;
    getPixelSize(): Size | null;
    getWidth(): number;
    getHeight(): number;
    getPixelScaleX(): number;
    getPixelScaleY(): number;
    getElement(): Element | null;
    /**
     * Renders the underlying graphics.
     * @param parentElement Parent element to render the component into.
     */
    render(parentElement: Element | null): void;
    /**
     * Never transform a surface.
     */
    transform(): void;
    /**
     * Called from the parent class, this method resets any pre-computed positions
     * and sizes.
     */
    redraw(): void;
}
