import { MenuSeparatorRenderer } from './menuseparatorrenderer.js';
import type { Control } from './control.js';
/**
 * Renderer for toolbar separators.
 */
export declare class ToolbarSeparatorRenderer extends MenuSeparatorRenderer {
    /**
     * Renderer for toolbar separators.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_toolbarseparatorrenderer_ToolbarSeparatorRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns a styled toolbar separator implemented by the following DOM:
     *
     * <div class="goog-toolbar-separator goog-inline-block">&nbsp;</div>
     *
     * Overrides {@link MenuSeparatorRenderer#createDom}.
     * @param separator Separator to render.
     * @return Root element for the separator.
     */
    createDom(separator: Control | null): Element;
    /**
     * Takes an existing element, and decorates it with the separator.  Overrides
     * {@link MenuSeparatorRenderer#decorate}.
     * @param separator Separator to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(separator: Control | null, element: Element | null): Element;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
