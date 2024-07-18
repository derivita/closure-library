import { Element } from './element.js';
import type { Group } from './group.js';
/**
 * Wrapper for a graphics image element.
 */
export declare class Image extends Element {
    /**
     * Wrapper for a graphics image element.
     * @param group Parent for this element.
     * @param src The path to the image to display.
     */
    constructor(group: Group | null, src: string);
    private noStructuralTyping_closure_goog_graphics_ext_image_Image;
    /**
     * Redraw the image.  Called when the coordinate system is changed.
     */
    redraw(): void;
    /**
     * Update the source of the image.
     * @param src Source of the image.
     */
    setSource(src: string): void;
}
