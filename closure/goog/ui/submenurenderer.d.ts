import { MenuItemRenderer } from './menuitemrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Default renderer for {@link SubMenu}s.  Each item has the following
 * structure:
 *
 * <div class="goog-submenu">
 * ...(menuitem content)...
 * <div class="goog-menu">
 * ... (submenu content) ...
 * </div>
 * </div>
 */
export declare class SubMenuRenderer extends MenuItemRenderer {
    /**
     * Default renderer for {@link SubMenu}s.  Each item has the following
     * structure:
     *
     * <div class="goog-submenu">
     * ...(menuitem content)...
     * <div class="goog-menu">
     * ... (submenu content) ...
     * </div>
     * </div>
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_submenurenderer_SubMenuRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Overrides {@link MenuItemRenderer#createDom} by adding
     * the additional class 'goog-submenu' to the created element,
     * and passes the element to {@link SubMenuItemRenderer#addArrow_}
     * to add an child element that can be styled to show an arrow.
     * @param control SubMenu to render.
     * @return Root element for the item.
     */
    createDom(control: Control | null): Element;
    /**
     * Overrides {@link MenuItemRenderer#decorate} by adding
     * the additional class 'goog-submenu' to the decorated element,
     * and passing the element to {@link SubMenuItemRenderer#addArrow_}
     * to add a child element that can be styled to show an arrow.
     * Also searches the element for a child with the class goog-menu. If a
     * matching child element is found, creates a Menu, uses it to
     * decorate the child element, and passes that menu to subMenu.setMenu.
     * @param control SubMenu to render.
     * @param element Element to decorate.
     * @return Root element for the item.
     */
    decorate(control: Control | null, element: Element | null): Element;
    /**
     * Takes a menu item's root element, and sets its content to the given text
     * caption or DOM structure.  Overrides the superclass immplementation by
     * making sure that the submenu arrow structure is preserved.
     * @param element The item's root element.
     * @param content Text caption or DOM structure to be set as the item's content.
     */
    setContent(element: Element | null, content: ControlContent | null): void;
    /**
     * Overrides {@link MenuItemRenderer#initializeDom} to tweak
     * the DOM structure for the span.goog-submenu-arrow element
     * depending on the text direction (LTR or RTL). When the SubMenu is RTL
     * the arrow will be given the additional class of goog-submenu-arrow-rtl,
     * and the arrow will be moved up to be the first child in the SubMenu's
     * element. Otherwise the arrow will have the class goog-submenu-arrow-ltr,
     * and be kept as the last child of the SubMenu's element.
     * @param control SubMenu whose DOM is to be initialized as it enters the document.
     */
    initializeDom(control: Control | null): void;
}
