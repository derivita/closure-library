import { CustomButtonRenderer } from './custombuttonrenderer.js';
/**
 * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
 * CustomButtonRenderer}.
 */
export declare class ToolbarButtonRenderer extends CustomButtonRenderer {
    /**
     * Toolbar-specific renderer for {@link goog.ui.Button}s, based on {@link
     * CustomButtonRenderer}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_toolbarbuttonrenderer_ToolbarButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of buttons rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class to be applied to the root element of buttons rendered
     * using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
