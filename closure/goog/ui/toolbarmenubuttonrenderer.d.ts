import { MenuButtonRenderer } from './menubuttonrenderer.js';
/**
 * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
 * MenuButtonRenderer}.
 */
export declare class ToolbarMenuButtonRenderer extends MenuButtonRenderer {
    /**
     * Toolbar-specific renderer for {@link goog.ui.MenuButton}s, based on {@link
     * MenuButtonRenderer}.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_toolbarmenubuttonrenderer_ToolbarMenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of menu buttons rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class to be applied to the root element of menu buttons
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
