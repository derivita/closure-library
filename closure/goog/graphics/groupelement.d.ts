import { Element as GraphicsElement } from './element.js';
import type { AbstractGraphics } from './abstractgraphics.js';
/**
 * Interface for a graphics group element.
 * You should not construct objects from this constructor. The graphics
 * will return the object for you.
 */
export declare class GroupElement extends GraphicsElement {
    /**
     * Interface for a graphics group element.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param element The DOM element to wrap.
     * @param graphics The graphics creating this element.
     */
    constructor(element: Element | null, graphics: AbstractGraphics | null);
    private noStructuralTyping_closure_goog_graphics_groupelement_GroupElement;
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
