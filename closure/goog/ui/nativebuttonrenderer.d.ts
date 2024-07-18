import { ButtonRenderer } from './buttonrenderer.js';
import type { Control } from './control.js';
/**
 * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
 * button elements.  Since native HTML buttons have built-in support for many
 * features, overrides many expensive (and redundant) superclass methods to
 * be no-ops.
 */
export declare class NativeButtonRenderer extends ButtonRenderer {
    /**
     * Renderer for {@link goog.ui.Button}s.  Renders and decorates native HTML
     * button elements.  Since native HTML buttons have built-in support for many
     * features, overrides many expensive (and redundant) superclass methods to
     * be no-ops.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_nativebuttonrenderer_NativeButtonRenderer;
    getAriaRole(): import("../a11y/aria/roles.js").Role;
    /**
     * Returns the button's contents wrapped in a native HTML button element.  Sets
     * the button's disabled attribute as needed.
     * @param button Button to render.
     * @return Root element for the button (a native HTML button element).
     */
    createDom(button: Control | null): Element;
    /**
     * Overrides {@link ButtonRenderer#canDecorate} by returning true only
     * if the element is an HTML button.
     * @param element Element to decorate.
     * @return Whether the renderer can decorate the element.
     */
    canDecorate(element: Element | null): boolean;
    decorate(button: any, element: any): Element;
    /**
     * Native buttons natively support BiDi and keyboard focus.
     */
    initializeDom(button: any): void;
    setAllowTextSelection(): void;
    setRightToLeft(): void;
    isFocusable(button: any): boolean;
    setFocusable(): void;
    setState(button: any, state: any, enable: any): void;
    getValue(element: any): string;
    setValue(element: any, value: any): void;
    updateAriaState(): void;
}
