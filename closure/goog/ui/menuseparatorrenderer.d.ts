import { ControlRenderer } from './controlrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Renderer for menu separators.
 */
export declare class MenuSeparatorRenderer extends ControlRenderer {
    /**
     * Renderer for menu separators.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_menuseparatorrenderer_MenuSeparatorRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns an empty, styled menu separator DIV.  Overrides {@link
     * ControlRenderer#createDom}.
     * @param separator Separator to render.
     * @return Root element for the separator.
     */
    createDom(separator: Control | null): Element;
    /**
     * Takes an existing element, and decorates it with the separator.  Overrides
     * {@link ControlRenderer#decorate}.
     * @param separator MenuSeparator to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(separator: Control | null, element: Element | null): Element;
    /**
     * Overrides {@link ControlRenderer#setContent} to do nothing, since
     * separators are empty.
     * @param separator The separator's root element.
     * @param content Text caption or DOM structure to be set as the separators's content (ignored).
     */
    setContent(separator: Element | null, content: ControlContent | null): void;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
