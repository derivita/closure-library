import { Role } from '../a11y/aria/roles.js';
import { ControlRenderer } from './controlrenderer.js';
import type { Control } from './control.js';
/**
 * Default renderer for {@link goog.ui.Tab}s, based on the `TabPane` code.
 */
export declare class TabRenderer extends ControlRenderer {
    /**
     * Default renderer for {@link goog.ui.Tab}s, based on the `TabPane` code.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_tabrenderer_TabRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the CSS class name to be applied to the root element of all tabs
     * rendered or decorated using this renderer.
     * @return Renderer-specific CSS class name.
     */
    getCssClass(): string;
    /**
     * Returns the ARIA role to be applied to the tab element.
     * See http://wiki/Main/ARIA for more info.
     * @return ARIA role.
     */
    getAriaRole(): Role | null;
    /**
     * Returns the tab's contents wrapped in a DIV, with the renderer's own CSS
     * class and additional state-specific classes applied to it.  Creates the
     * following DOM structure:
     *
     * <div class="goog-tab" title="Title">Content</div>
     * @param tab Tab to render.
     * @return Root element for the tab.
     */
    createDom(tab: Control | null): Element | null;
    /**
     * Decorates the element with the tab.  Initializes the tab's ID, content,
     * tooltip, and state based on the ID of the element, its title, child nodes,
     * and CSS classes, respectively.  Returns the element.
     * @param tab Tab to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(tab: Control | null, element: Element | null): Element | null;
    /**
     * Takes a tab's root element, and returns its tooltip text, or the empty
     * string if the element has no tooltip.
     * @param element The tab's root element.
     * @return The tooltip text (empty string if none).
     */
    getTooltip(element: Element | null): string;
    /**
     * Takes a tab's root element and a tooltip string, and updates the element
     * with the new tooltip.  If the new tooltip is null or undefined, sets the
     * element's title to the empty string.
     * @param element The tab's root element.
     * @param tooltip New tooltip text (if any).
     */
    setTooltip(element: Element | null, tooltip: string | null | undefined): void;
}
