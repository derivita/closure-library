import { ButtonRenderer } from './buttonrenderer.js';
/**
 * Custom renderer for {@link Button}s. This renderer supports the
 * "primary action" style for buttons.
 */
export declare class PrimaryActionButtonRenderer extends ButtonRenderer {
    /**
     * Custom renderer for {@link Button}s. This renderer supports the
     * "primary action" style for buttons.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_style_app_primaryactionbuttonrenderer_PrimaryActionButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     */
    static IE6_CLASS_COMBINATIONS: (string[] | null)[];
    getCssClass(): string;
    getIe6ClassCombinations(): string[][];
}
