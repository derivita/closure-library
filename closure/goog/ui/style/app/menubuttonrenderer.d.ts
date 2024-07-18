import { Role } from '../../../a11y/aria/roles.js';
import * as googDom from '../../../dom/dom.js';
import { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from '../../control.js';
import type { ControlContent } from '../../controlcontent.js';
/**
 * Renderer for {@link MenuButton}s.  This implementation
 * overrides {@link ButtonRenderer#createButton} to insert a
 * dropdown element into the content element after the specified content.
 */
export declare class MenuButtonRenderer extends ButtonRenderer {
    /**
     * Renderer for {@link MenuButton}s.  This implementation
     * overrides {@link ButtonRenderer#createButton} to insert a
     * dropdown element into the content element after the specified content.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_style_app_menubuttonrenderer_MenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     */
    static IE6_CLASS_COMBINATIONS: (string[] | null)[];
    /**
     * Returns the ARIA role to be applied to menu buttons, which
     * have a menu attached to them.
     * @return ARIA role.
     */
    getAriaRole(): Role | null;
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
     * the element.  Overrides {@link ButtonRenderer#decorate} by
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
     * <div class="goog-inline-block goog-button-outer-box">
     * <div class="goog-inline-block goog-button-inner-box">
     * <div class="goog-button-pos">
     * <div class="goog-button-top-shadow">&nbsp;</div>
     * <div class="goog-button-content">
     * Contents...
     * <div class="goog-menu-button-dropdown"> </div>
     * </div>
     * </div>
     * </div>
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Pseudo-rounded-corner box containing the content.
     */
    createButton(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    setContent(element: any, content: any): void;
    /**
     * Inserts dropdown element as last child of existing content.
     * @param content Text caption or DOM structure.
     * @param dom DOM helper, used for document ineraction.
     * @return DOM structure to be set as the button's content.
     */
    createContentWithDropdown(content: ControlContent | null, dom: googDom.DomHelper | null): (Node | null)[];
    /**
     * Returns an appropriately-styled DIV containing a dropdown arrow.
     * Creates the following DOM structure:
     *
     * <div class="goog-menu-button-dropdown"> </div>
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
    getIe6ClassCombinations(): string[][];
}
