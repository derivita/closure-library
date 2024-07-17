import { Button } from '../../button.js';
import { CustomButtonRenderer } from '../../custombuttonrenderer.js';
import type { DomHelper } from '../../../dom/dom.js';
import type { ControlContent } from '../../controlcontent.js';
/**
 * Custom renderer for {@link Button}s. Imageless buttons can contain
 * almost arbitrary HTML content, will flow like inline elements, but can be
 * styled like block-level elements.
 */
export declare class ButtonRenderer extends CustomButtonRenderer {
    /**
     * Custom renderer for {@link Button}s. Imageless buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_style_app_buttonrenderer_ButtonRenderer;
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
    getContentElement(element: any): Element;
    /**
     * Takes a text caption or existing DOM structure, and returns the content
     * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-button-base-outer-box">
     * <div class="goog-inline-block goog-button-base-inner-box">
     * <div class="goog-button-base-pos">
     * <div class="goog-button-base-top-shadow">&nbsp;</div>
     * <div class="goog-button-base-content">Contents...</div>
     * </div>
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
     * Check if the button's element has a box structure.
     * @param button Button instance whose structure is being checked.
     * @param element Element of the button.
     * @return Whether the element has a box structure.
     */
    hasBoxStructure(button: Button | null, element: Element | null): boolean;
    getCssClass(): string;
    getStructuralCssClass(): string;
    getIe6ClassCombinations(): string[][];
}
