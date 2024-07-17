/**
 * Creates an immutable stroke object.
 */
export declare class Stroke {
    /**
     * Creates an immutable stroke object.
     * @param width The width of the stroke.
     * @param color The color of the stroke.
     * @param opt_opacity The opacity of the background fill. The value must be greater than or equal to zero (transparent) and less than or equal to 1 (opaque).
     */
    constructor(width: number | string, color: string, opt_opacity?: number);
    private noStructuralTyping_closure_goog_graphics_stroke_Stroke;
    getWidth(): number | string;
    getColor(): string;
    getOpacity(): number;
}
