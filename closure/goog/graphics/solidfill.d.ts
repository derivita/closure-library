import { Fill } from './fill.js';
/**
 * Creates an immutable solid color fill object.
 */
export declare class SolidFill extends Fill {
    /**
     * Creates an immutable solid color fill object.
     * @param color The color of the background.
     * @param opt_opacity The opacity of the background fill. The value must be greater than or equal to zero (transparent) and less than or equal to 1 (opaque).
     */
    constructor(color: string, opt_opacity?: number);
    private noStructuralTyping_closure_goog_graphics_solidfill_SolidFill;
    getColor(): string;
    getOpacity(): number;
}
