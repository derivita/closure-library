import { EventTarget } from '../events/eventtarget.js';
import { AffineTransform } from './affinetransform.js';
import type { AbstractGraphics } from './abstractgraphics.js';
/**
 * Base class for a thin wrapper around the DOM element returned from
 * the different draw methods of the graphics.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
declare class Element_ extends EventTarget {
    /**
     * Base class for a thin wrapper around the DOM element returned from
     * the different draw methods of the graphics.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null);
    private noStructuralTyping_closure_goog_graphics_element_Element_;
    /**
     * Returns the underlying object.
     * @return The underlying element.
     */
    getElement(): Element | null;
    /**
     * Returns the graphics.
     * @return The graphics that created the element.
     */
    getGraphics(): AbstractGraphics | null;
    /**
     * Set the translation and rotation of the element.
     *
     * If a more general affine transform is needed than this provides
     * (e.g. skew and scale) then use setTransform.
     * @param x The x coordinate of the translation transform.
     * @param y The y coordinate of the translation transform.
     * @param rotate The angle of the rotation transform.
     * @param centerX The horizontal center of the rotation transform.
     * @param centerY The vertical center of the rotation transform.
     */
    setTransformation(x: number, y: number, rotate: number, centerX: number, centerY: number): void;
    getTransform(): AffineTransform;
    /**
     * Set the affine transform of the element.
     * @param affineTransform The transformation applied to this element.
     */
    setTransform(affineTransform: AffineTransform): void;
    addEventListener(type: any, handler: any, opt_capture: any, opt_handlerScope: any): void;
    removeEventListener(type: any, handler: any, opt_capture: any, opt_handlerScope: any): void;
    disposeInternal(): void;
}
export { Element_ as Element };
