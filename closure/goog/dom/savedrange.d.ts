import { Disposable } from '../disposable/disposable.js';
import type { AbstractRange } from './abstractrange.js';
/**
 * Abstract interface for a saved range.
 * // TODO(user): rename to AbstractSavedRange?
 */
export declare abstract class SavedRange extends Disposable {
    /**
     * Abstract interface for a saved range.
     * // TODO(user): rename to AbstractSavedRange?
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_savedrange_SavedRange;
    /**
     * Restores the range and by default disposes of the saved copy.  Take note:
     * this means the by default SavedRange objects are single use objects.
     * @param opt_stayAlive Whether this SavedRange should stay alive (not be disposed) after restoring the range. Defaults to false (dispose).
     * @return The restored range.
     */
    restore(opt_stayAlive?: boolean): AbstractRange | null;
    /**
     * Internal method to restore the saved range.
     * @return The restored range.
     */
    protected restoreInternal(): AbstractRange | null;
}
/**
 * Abstract interface for a range saved using carets.
 */
export declare abstract class AbstractSavedCaretRange extends SavedRange {
    /**
     * Abstract interface for a range saved using carets.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_savedrange_AbstractSavedCaretRange;
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
    abstract getCaret(start: boolean): Element | null;
    /**
     * Removes the carets from the current restoration document.
     * @param opt_range A range whose offsets have already been adjusted for caret removal; it will be adjusted if it is also affected by post-removal operations, such as text node normalization.
     * @return The adjusted range, if opt_range was provided.
     */
    abstract removeCarets(opt_range?: AbstractRange): AbstractRange | undefined | null;
    /**
     * Sets the document where the range will be restored.
     * @param doc An HTML document.
     */
    abstract setRestorationDocument(doc: Document): any;
}
