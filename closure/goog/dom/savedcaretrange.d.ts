import { AbstractSavedCaretRange } from './savedrange.js';
import type { AbstractRange } from './abstractrange.js';
/**
 * A struct for holding context about saved selections.
 * This can be used to preserve the selection and restore while the DOM is
 * manipulated, or through an asynchronous call. Use dom.Range factory
 * methods to obtain an {@see dom.AbstractRange} instance, and use
 * {@see AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
 * For editor ranges under content-editable elements or design-mode iframes,
 * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
 */
export declare class SavedCaretRange extends AbstractSavedCaretRange {
    /**
     * A struct for holding context about saved selections.
     * This can be used to preserve the selection and restore while the DOM is
     * manipulated, or through an asynchronous call. Use dom.Range factory
     * methods to obtain an {@see dom.AbstractRange} instance, and use
     * {@see AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
     * For editor ranges under content-editable elements or design-mode iframes,
     * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
     * @param range The range being saved.
     */
    constructor(range: AbstractRange | null);
    private noStructuralTyping_closure_goog_dom_savedcaretrange_SavedCaretRange;
    /**
     * Gets the range that this SavedCaretRage represents, without selecting it
     * or removing the carets from the DOM.
     * @return An abstract range.
     */
    toAbstractRange(): AbstractRange | null;
    /**
     * Gets carets.
     * @param start If true, returns the start caret. Otherwise, get the end caret.
     * @return The start or end caret in the given document.
     */
    getCaret(start: boolean): Element | null;
    /**
     * Removes the carets from the current restoration document.
     * @param opt_range A range whose offsets have already been adjusted for caret removal; it will be adjusted if it is also affected by post-removal operations, such as text node normalization.
     * @return The adjusted range, if opt_range was provided.
     */
    removeCarets(opt_range?: AbstractRange | null): AbstractRange | undefined | null;
    /**
     * Sets the document where the range will be restored.
     * @param doc An HTML document.
     */
    setRestorationDocument(doc: Document): any;
    /**
     * Reconstruct the selection from the given saved range. Removes carets after
     * restoring the selection. If restore does not dispose this saved range, it may
     * only be restored a second time if innerHTML or some other mechanism is used
     * to restore the carets to the dom.
     * @return Restored selection.
     */
    restoreInternal(): AbstractRange | null;
    /**
     * Dispose the saved range and remove the carets from the DOM.
     */
    disposeInternal(): void;
    /**
     * A regex that will match all saved range carets in a string.
     */
    static CARET_REGEX: RegExp | null;
    /**
     * Returns whether two strings of html are equal, ignoring any saved carets.
     * Thus two strings of html whose only difference is the id of their saved
     * carets will be considered equal, since they represent html with the
     * same selection.
     * @param str1 The first string.
     * @param str2 The second string.
     * @return Whether two strings of html are equal, ignoring any saved carets.
     */
    static htmlEqual(str1: string, str2: string): boolean;
}
