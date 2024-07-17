import { MenuItemRenderer } from './menuitemrenderer.js';
import type { Control } from './control.js';
/**
 * Default renderer for {@link TriStateMenuItemRenderer}s. Each item has
 * the following structure:
 *
 * <div class="goog-tristatemenuitem">
 * <div class="goog-tristatemenuitem-checkbox"></div>
 * <div>...(content)...</div>
 * </div>
 */
export declare class TriStateMenuItemRenderer extends MenuItemRenderer {
    /**
     * Default renderer for {@link TriStateMenuItemRenderer}s. Each item has
     * the following structure:
     *
     * <div class="goog-tristatemenuitem">
     * <div class="goog-tristatemenuitem-checkbox"></div>
     * <div>...(content)...</div>
     * </div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_tristatemenuitemrenderer_TriStateMenuItemRenderer;
    /**
     * CSS class name the renderer applies to menu item elements.
     */
    static CSS_CLASS: string;
    /**
     * Overrides {@link ControlRenderer#decorate} by initializing the
     * menu item to checkable based on whether the element to be decorated has
     * extra styling indicating that it should be.
     * @param item TriStateMenuItem to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(item: Control | null, element: Element | null): Element;
    getCssClass(): string;
}
