import type { DomHelper } from '../dom/dom.js';
/**
 * Helper object to control aria visibility of the rest of the page (background)
 * for a given element. Example usage is to restrict screenreader focus to
 * a modal popup while it is visible.
 *
 * WARNING: This will work only if the element is rendered directly in the
 * 'body' element.
 */
export declare class ModalAriaVisibilityHelper {
    /**
     * Helper object to control aria visibility of the rest of the page (background)
     * for a given element. Example usage is to restrict screenreader focus to
     * a modal popup while it is visible.
     *
     * WARNING: This will work only if the element is rendered directly in the
     * 'body' element.
     * @param element The given element.
     * @param domHelper DomHelper for the page.
     */
    constructor(element: Element, domHelper: DomHelper);
    private noStructuralTyping_closure_goog_ui_modalariavisibilityhelper_ModalAriaVisibilityHelper;
    /**
     * Sets aria-hidden on the rest of the page to restrict screen reader focus.
     * Top-level elements with an explicit aria-hidden state are not altered.
     * @param hide Whether to hide or show the rest of the page.
     */
    setBackgroundVisibility(hide: boolean): void;
}
