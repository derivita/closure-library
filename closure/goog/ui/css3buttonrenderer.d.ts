import { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from './control.js';
/**
 * Custom renderer for {@link Button}s. Css3 buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class Css3ButtonRenderer extends ButtonRenderer {
    /**
     * Custom renderer for {@link Button}s. Css3 buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_css3buttonrenderer_Css3ButtonRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    getContentElement(element: any): Element;
    /**
     * Returns the button's contents wrapped in the following DOM structure:
     *
     * <div class="goog-inline-block goog-css3-button">
     * Contents...
     * </div>
     *
     * Overrides {@link ButtonRenderer#createDom}.
     * @param control Button to render.
     * @return Root element for the button.
     */
    createDom(control: Control | null): Element;
    /**
     * Returns true if this renderer can decorate the element.  Overrides
     * {@link ButtonRenderer#canDecorate} by returning true if the
     * element is a DIV, false otherwise.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    decorate(button: any, element: any): Element;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     * @return Renderer-specific CSS class.
     */
    getCssClass(): string;
}
