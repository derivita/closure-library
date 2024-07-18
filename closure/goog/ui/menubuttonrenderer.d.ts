import * as googDom from '../dom/dom.js';
import { CustomButtonRenderer } from './custombuttonrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Renderer for {@link MenuButton}s.  This implementation overrides
 * {@link CustomButtonRenderer#createButton} to create a separate
 * caption and dropdown element.
 */
export declare class MenuButtonRenderer extends CustomButtonRenderer {
    /**
     * Renderer for {@link MenuButton}s.  This implementation overrides
     * {@link CustomButtonRenderer#createButton} to create a separate
     * caption and dropdown element.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_menubuttonrenderer_MenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Takes the button's root element and returns the parent element of the
     * button's contents.  Overrides the superclass implementation by taking
     * the nested DIV structure of menu buttons into account.
     * @param element Root element of the button whose content element is to be returned.
     * @return The button's content element.
     */
    getContentElement(element: Element | null): Element | null;
    /**
     * Takes an element, decorates it with the menu button control, and returns
     * the element.  Overrides {@link CustomButtonRenderer#decorate} by
     * looking for a child element that can be decorated by a menu, and if it
     * finds one, decorates it and attaches it to the menu button.
     * @param control MenuButton to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(control: Control | null, element: Element | null): Element | null;
    /**
     * Takes a text caption or existing DOM structure, and returns the content and
     * a dropdown arrow element wrapped in a pseudo-rounded-corner box.  Creates
     * the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-outer-box">
     * <div class="goog-inline-block goog-menu-button-inner-box">
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * <div class="goog-inline-block goog-menu-button-dropdown">
     * &nbsp;
     * </div>
     * </div>
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Pseudo-rounded-corner box containing the content.
     */
    createButton(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    createCaption(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param cssClass The CSS class for the renderer.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    static wrapCaption(content: ControlContent | null, cssClass: string, dom: googDom.DomHelper | null): Element;
    /**
     * Returns an appropriately-styled DIV containing a dropdown arrow element.
     * Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-dropdown">
     * &nbsp;
     * </div>
     * @param dom DOM helper, used for document interaction.
     * @return Dropdown element.
     */
    createDropdown(dom: googDom.DomHelper | null): Element;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
