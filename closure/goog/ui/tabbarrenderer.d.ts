import { ContainerRenderer } from './containerrenderer.js';
import type { Container } from './container.js';
/**
 * Default renderer for {@link goog.ui.TabBar}s, based on the `TabPane`
 * code.  The tab bar's DOM structure is determined by its orientation and
 * location relative to tab contents.  For example, a horizontal tab bar
 * located above tab contents looks like this:
 *
 * <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
 * ...(tabs here)...
 * </div>
 */
export declare class TabBarRenderer extends ContainerRenderer {
    /**
     * Default renderer for {@link goog.ui.TabBar}s, based on the `TabPane`
     * code.  The tab bar's DOM structure is determined by its orientation and
     * location relative to tab contents.  For example, a horizontal tab bar
     * located above tab contents looks like this:
     *
     * <div class="goog-tab-bar goog-tab-bar-horizontal goog-tab-bar-top">
     * ...(tabs here)...
     * </div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_tabbarrenderer_TabBarRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class name to be applied to the root element of all tab bars
     * rendered or decorated using this renderer.
     * @return Renderer-specific CSS class name.
     */
    getCssClass(): string;
    /**
     * Sets the tab bar's state based on the given CSS class name, encountered
     * during decoration.  Overrides the superclass implementation by recognizing
     * class names representing tab bar orientation and location.
     * @param tabBar Tab bar to configure.
     * @param className CSS class name.
     * @param baseClass Base class name used as the root of state-specific class names (typically the renderer's own class name).
     */
    setStateFromClassName(tabBar: Container | null, className: string, baseClass: string): void;
    /**
     * Returns all CSS class names applicable to the tab bar, based on its state.
     * Overrides the superclass implementation by appending the location-specific
     * class name to the list.
     * @param tabBar Tab bar whose CSS classes are to be returned.
     * @return Array of CSS class names applicable to the tab bar.
     */
    getClassNames(tabBar: Container | null): string[];
}
