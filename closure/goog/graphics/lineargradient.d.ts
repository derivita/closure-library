import { Fill } from './fill.js';
/**
 * Creates an immutable linear gradient fill object.
 */
export declare class LinearGradient extends Fill {
    /**
     * Creates an immutable linear gradient fill object.
     * @param x1 Start X position of the gradient.
     * @param y1 Start Y position of the gradient.
     * @param x2 End X position of the gradient.
     * @param y2 End Y position of the gradient.
     * @param color1 Start color of the gradient.
     * @param color2 End color of the gradient.
     * @param opt_opacity1 Start opacity of the gradient, both or neither of opt_opacity1 and opt_opacity2 have to be set.
     * @param opt_opacity2 End opacity of the gradient.
     */
    constructor(x1: number, y1: number, x2: number, y2: number, color1: string, color2: string, opt_opacity1?: number | null, opt_opacity2?: number | null);
    private noStructuralTyping_closure_goog_graphics_lineargradient_LinearGradient;
    getX1(): number;
    getY1(): number;
    getX2(): number;
    getY2(): number;
    getColor1(): string;
    getColor2(): string;
    getOpacity1(): number | null;
    getOpacity2(): number | null;
}
