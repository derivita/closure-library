import * as googDom from '../dom/dom.js';
import { FlatButtonRenderer } from './flatbuttonrenderer.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Flat Menu Button renderer. Creates a simpler version of
 * {@link MenuButton} that doesn't look like a button and
 * doesn't have rounded corners. Uses just a `<div>` and looks more like
 * a traditional `<select>` element.
 */
export declare class FlatMenuButtonRenderer extends FlatButtonRenderer {
    /**
     * Flat Menu Button renderer. Creates a simpler version of
     * {@link MenuButton} that doesn't look like a button and
     * doesn't have rounded corners. Uses just a `<div>` and looks more like
     * a traditional `<select>` element.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_flatmenubuttonrenderer_FlatMenuButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the button's contents wrapped in the following DOM structure:
     *
     * <div class="goog-inline-block goog-flat-menu-button">
     * <div class="goog-inline-block goog-flat-menu-button-caption">
     * Contents...
     * </div>
     * <div class="goog-inline-block goog-flat-menu-button-dropdown">
     * &nbsp;
     * </div>
     * </div>
     *
     * Overrides {@link FlatButtonRenderer#createDom}.
     * @param control Button to render.
     * @return Root element for the button.
     */
    createDom(control: Control | null): Element;
    /**
     * Takes the button's root element and returns the parent element of the
     * button's contents.
     * @param element Root element of the button whose content element is to be returned.
     * @return The button's content element (if any).
     */
    getContentElement(element: Element | null): Element | null;
    /**
     * Takes an element, decorates it with the menu button control, and returns
     * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
     * looking for a child element that can be decorated by a menu, and if it
     * finds one, decorates it and attaches it to the menu button.
     * @param button Menu button to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(button: Control | null, element: Element | null): Element | null;
    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-flat-menu-button-caption">
     * Contents...
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Caption element.
     */
    createCaption(content: ControlContent | null, dom: googDom.DomHelper | null): Element;
    /**
     * Returns an appropriately-styled DIV containing a dropdown arrow element.
     * Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-flat-menu-button-dropdown">
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
