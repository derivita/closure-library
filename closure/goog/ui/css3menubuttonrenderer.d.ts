import * as googDom from '../dom/dom.js';
import { MenuButtonRenderer } from './menubuttonrenderer.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Custom renderer for {@link MenuButton}s. Css3 buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class Css3MenuButtonRenderer extends MenuButtonRenderer {
    /**
     * Custom renderer for {@link MenuButton}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_css3menubuttonrenderer_Css3MenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    getContentElement(element: any): Element;
    /**
     * Returns true if this renderer can decorate the element.  Overrides
     * {@link MenuButtonRenderer#canDecorate} by returning true if the
     * element is a DIV, false otherwise.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Takes a text caption or existing DOM structure, and returns the content
     * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-css3-button goog-css3-menu-button">
     * <div class="goog-css3-button-caption">Contents...</div>
     * <div class="goog-css3-button-dropdown"></div>
     * </div>
     *
     * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
     * by subclasses.
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Pseudo-rounded-corner box containing the content.
     */
    createButton(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
