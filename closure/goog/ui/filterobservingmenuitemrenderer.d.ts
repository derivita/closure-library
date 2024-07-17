import { MenuItemRenderer } from './menuitemrenderer.js';
/**
 * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
 * the following structure:
 *
 * <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
 */
export declare class FilterObservingMenuItemRenderer extends MenuItemRenderer {
    /**
     * Default renderer for {@link goog.ui.FilterObservingMenuItem}s. Each item has
     * the following structure:
     *
     * <div class="goog-filterobsmenuitem"><div>...(content)...</div></div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_filterobservingmenuitemrenderer_FilterObservingMenuItemRenderer;
    /**
     * CSS class name the renderer applies to menu item elements.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class to be applied to menu items rendered using this
     * renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
