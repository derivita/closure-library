import { Element as GraphicsElement } from './element.js';
import type { AbstractGraphics } from './abstractgraphics.js';
/**
 * Interface for a graphics image element.
 * You should not construct objects from this constructor. Instead,
 * you should use `goog.graphics.Graphics.drawImage` and it
 * will return an implementation of this interface for you.
 */
export declare class ImageElement extends GraphicsElement {
    /**
     * Interface for a graphics image element.
     * You should not construct objects from this constructor. Instead,
     * you should use `goog.graphics.Graphics.drawImage` and it
     * will return an implementation of this interface for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null);
    private noStructuralTyping_closure_goog_graphics_imageelement_ImageElement;
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
