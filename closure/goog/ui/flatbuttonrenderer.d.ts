import { Role } from '../a11y/aria/roles.js';
import { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from './control.js';
/**
 * Flat renderer for {@link Button}s.  Flat buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class FlatButtonRenderer extends ButtonRenderer {
    /**
     * Flat renderer for {@link Button}s.  Flat buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_flatbuttonrenderer_FlatButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    /**
     * Returns the control's contents wrapped in a div element, with
     * the renderer's own CSS class and additional state-specific classes applied
     * to it, and the button's disabled attribute set or cleared as needed.
     * Overrides {@link ButtonRenderer#createDom}.
     * @param button Button to render.
     * @return Root element for the button.
     */
    createDom(button: Control | null): Element;
    /**
     * Returns the ARIA role to be applied to flat buttons.
     * @return ARIA role.
     */
    getAriaRole(): Role | undefined | null;
    /**
     * Returns true if this renderer can decorate the element.  Overrides
     * {@link ButtonRenderer#canDecorate} by returning true if the
     * element is a DIV, false otherwise.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Takes an existing element and decorates it with the flat button control.
     * Initializes the control's ID, content, tooltip, value, and state based
     * on the ID of the element, its child nodes, and its CSS classes, respectively.
     * Returns the element.  Overrides {@link ButtonRenderer#decorate}.
     * @param button Button instance to decorate the element.
     * @param element Element to decorate.
     * @return Decorated element.
     */
    decorate(button: Control | null, element: Element | null): Element | null;
    /**
     * Flat buttons can't use the value attribute since they are div elements.
     * Overrides {@link ButtonRenderer#getValue} to prevent trying to
     * access the element's value.
     * @param element The button control's root element.
     * @return Value not valid for flat buttons.
     */
    getValue(element: Element | null): string;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
