import { Role } from '../a11y/aria/roles.js';
import { ButtonRenderer } from './buttonrenderer.js';
import type { DomHelper } from '../dom/dom.js';
import type { Button } from './button.js';
import type { Control } from './control.js';
import type { ControlContent } from './controlcontent.js';
/**
 * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class CustomButtonRenderer extends ButtonRenderer {
    /**
     * Custom renderer for {@link goog.ui.Button}s.  Custom buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_custombuttonrenderer_CustomButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the button's contents wrapped in the following DOM structure:
     *
     * <div class="goog-inline-block goog-custom-button">
     * <div class="goog-inline-block goog-custom-button-outer-box">
     * <div class="goog-inline-block goog-custom-button-inner-box">
     * Contents...
     * </div>
     * </div>
     * </div>
     *
     * Overrides {@link ButtonRenderer#createDom}.
     * @param control Button to render.
     * @return Root element for the button.
     */
    createDom(control: Control | null): Element;
    /**
     * Returns the ARIA role to be applied to custom buttons.
     * @return ARIA role.
     */
    getAriaRole(): Role | undefined | null;
    /**
     * Takes the button's root element and returns the parent element of the
     * button's contents.  Overrides the superclass implementation by taking
     * the nested DIV structure of custom buttons into account.
     * @param element Root element of the button whose content element is to be returned.
     * @return The button's content element (if any).
     */
    getContentElement(element: Element | null): Element | null;
    /**
     * Takes a text caption or existing DOM structure, and returns the content
     * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-custom-button-outer-box">
     * <div class="goog-inline-block goog-custom-button-inner-box">
     * Contents...
     * </div>
     * </div>
     *
     * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
     * by subclasses.
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     * @return Pseudo-rounded-corner box containing the content.
     */
    createButton(content: ControlContent | null, dom: DomHelper | null): Element;
    /**
     * Returns true if this renderer can decorate the element.  Overrides
     * {@link ButtonRenderer#canDecorate} by returning true if the
     * element is a DIV, false otherwise.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Check if the button's element has a box structure.
     * @param button Button instance whose structure is being checked.
     * @param element Element of the button.
     * @return Whether the element has a box structure.
     */
    protected hasBoxStructure(button: Button | null, element: Element | null): boolean;
    /**
     * Takes an existing element and decorates it with the custom button control.
     * Initializes the control's ID, content, tooltip, value, and state based
     * on the ID of the element, its child nodes, and its CSS classes, respectively.
     * Returns the element.  Overrides {@link ButtonRenderer#decorate}.
     * @param control Button instance to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(control: Control | null, element: Element | null): Element | null;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
