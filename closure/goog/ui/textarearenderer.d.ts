import { ControlRenderer } from './controlrenderer.js';
import type { Control } from './control.js';
/**
 * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
 * textarea elements.  Since native HTML textareas have built-in support for
 * many features, overrides many expensive (and redundant) superclass methods to
 * be no-ops.
 */
export declare class TextareaRenderer extends ControlRenderer {
    /**
     * Renderer for {@link goog.ui.Textarea}s.  Renders and decorates native HTML
     * textarea elements.  Since native HTML textareas have built-in support for
     * many features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_textarearenderer_TextareaRenderer;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS: string;
    getAriaRole(): import("../a11y/aria/roles.js").Role;
    decorate(control: any, element: any): Element;
    /**
     * Returns the textarea's contents wrapped in an HTML textarea element.  Sets
     * the textarea's disabled attribute as needed.
     * @param textarea Textarea to render.
     * @return Root element for the Textarea control (an HTML textarea element).
     */
    createDom(textarea: Control | null): Element;
    /**
     * Overrides {@link TextareaRenderer#canDecorate} by returning true only
     * if the element is an HTML textarea.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    /**
     * Textareas natively support right-to-left rendering.
     */
    setRightToLeft(): void;
    /**
     * Textareas are always focusable as long as they are enabled.
     */
    isFocusable(textarea: any): boolean;
    /**
     * Textareas natively support keyboard focus.
     */
    setFocusable(): void;
    /**
     * Textareas also expose the DISABLED state in the HTML textarea's
     * `disabled` attribute.
     */
    setState(textarea: any, state: any, enable: any): void;
    /**
     * Textareas don't need ARIA states to support accessibility, so this is
     * a no-op.
     */
    updateAriaState(): void;
    setContent(element: any, value: any): void;
    getCssClass(): string;
}
