import { TagIterator } from './tagiterator.js';
import type { AbstractSavedCaretRange, SavedRange } from './savedrange.js';
import type { Coordinate } from '../math/coordinate.js';
/**
 * Types of ranges.
 */
export declare enum RangeType {
    TEXT = "text",
    CONTROL = "control",
    MULTI = "mutli"
}
/**
 * Creates a new selection with no properties.  Do not use this constructor -
 * use one of the dom.Range.from* methods instead.
 */
export declare abstract class AbstractRange {
    /**
     * Creates a new selection with no properties.  Do not use this constructor -
     * use one of the dom.Range.from* methods instead.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_abstractrange_AbstractRange;
    /**
     * Gets the browser native selection object from the given window.
     * @param win The window to get the selection object from.
     * @return The browser native selection object, or null if it could not be retrieved.
     */
    static getBrowserSelectionForWindow(win: Window | null): object | null;
    /**
     * Tests if the given Object is a controlRange.
     * @param range The range object to test.
     * @return Whether the given Object is a controlRange.
     */
    static isNativeControlRange(range: object | null): boolean;
    clone(): AbstractRange;
    getType(): RangeType | null;
    getBrowserRangeObject(): Range | Range | null;
    /**
     * Sets the native browser range object, overwriting any state this range was
     * storing.
     * @param nativeRange The native browser range object.
     * @return Whether the given range was accepted.  If not, the caller will need to call dom.Range.createFromBrowserRange to create a new range object.
     */
    setBrowserRangeObject(nativeRange: Range | Range | null): boolean;
    getTextRangeCount(): number;
    /**
     * Get the i-th text range in this range.  The behavior is undefined if
     * i >= getTextRangeCount or i < 0.
     * @param i The range number to retrieve.
     * @return The i-th text range.
     */
    getTextRange(i: number): AbstractRange | null;
    /**
     * Gets an array of all text ranges this range is comprised of.  For non-multi
     * ranges, returns a single element array containing this.
     * @return Array of text ranges.
     */
    getTextRanges(): (AbstractRange | null)[];
    getContainer(): Node | null;
    /**
     * Returns the deepest element in the tree that contains the entire range.
     * @return The deepest element that contains the entire range.
     */
    getContainerElement(): Element | null;
    getStartNode(): Node | null;
    getStartOffset(): number;
    getStartPosition(): Coordinate | null;
    getEndNode(): Node | null;
    getEndOffset(): number;
    getEndPosition(): Coordinate | null;
    getAnchorNode(): Node | null;
    getAnchorOffset(): number;
    getFocusNode(): Node | null;
    getFocusOffset(): number;
    isReversed(): boolean;
    getDocument(): Document;
    getWindow(): Window;
    /**
     * Tests if this range contains the given range.
     * @param range The range to test.
     * @param opt_allowPartial If true, the range can be partially contained in the selection, otherwise the range must be entirely contained.
     * @return Whether this range contains the given range.
     */
    containsRange(range: AbstractRange | null, opt_allowPartial?: boolean): boolean;
    /**
     * Tests if this range contains the given node.
     * @param node The node to test for.
     * @param opt_allowPartial If not set or false, the node must be entirely contained in the selection for this function to return true.
     * @return Whether this range contains the given node.
     */
    containsNode(node: Node | null, opt_allowPartial?: boolean): boolean;
    /**
     * Tests whether this range is valid (i.e. whether its endpoints are still in
     * the document).  A range becomes invalid when, after this object was created,
     * either one or both of its endpoints are removed from the document.  Use of
     * an invalid range can lead to runtime errors, particularly in IE.
     * @return Whether the range is valid.
     */
    isRangeInDocument(): boolean;
    isCollapsed(): boolean;
    getText(): string;
    /**
     * Returns the HTML fragment this range selects.  This is slow on all browsers.
     * The HTML fragment may not be valid HTML, for instance if the user selects
     * from a to b inclusively in the following html:
     *
     * &lt;div&gt;a&lt;/div&gt;b
     *
     * This method will return
     *
     * a&lt;/div&gt;b
     *
     * If you need valid HTML, use {@link #getValidHtml} instead.
     * @return HTML fragment of the range, does not include context containing elements.
     */
    getHtmlFragment(): string;
    /**
     * Returns valid HTML for this range.  This is fast on IE, and semi-fast on
     * other browsers.
     * @return Valid HTML of the range, including context containing elements.
     */
    getValidHtml(): string;
    /**
     * Returns pastable HTML for this range.  This guarantees that any child items
     * that must have specific ancestors will have them, for instance all TDs will
     * be contained in a TR in a TBODY in a TABLE and all LIs will be contained in
     * a UL or OL as appropriate.  This is semi-fast on all browsers.
     * @return Pastable HTML of the range, including context containing elements.
     */
    getPastableHtml(): string;
    /**
     * Returns a RangeIterator over the contents of the range.  Regardless of the
     * direction of the range, the iterator will move in document order.
     * @param opt_keys Unused for this iterator.
     * @return An iterator over tags in the range.
     */
    __iterator__(opt_keys?: boolean): RangeIterator;
    /**
     * Sets this range as the selection in its window.
     */
    select(): void;
    /**
     * Removes the contents of the range from the document.
     */
    removeContents(): void;
    /**
     * Inserts a node before (or after) the range.  The range may be disrupted
     * beyond recovery because of the way this splits nodes.
     * @param node The node to insert.
     * @param before True to insert before, false to insert after.
     * @return The node added to the document.  This may be different than the node parameter because on IE we have to clone it.
     */
    insertNode(node: Node | null, before: boolean): Node | null;
    /**
     * Replaces the range contents with (possibly a copy of) the given node.  The
     * range may be disrupted beyond recovery because of the way this splits nodes.
     * @param node The node to insert.
     * @return The node added to the document.  This may be different than the node parameter because on IE we have to clone it.
     */
    replaceContentsWithNode(node: Node | null): Node | null;
    /**
     * Surrounds this range with the two given nodes.  The range may be disrupted
     * beyond recovery because of the way this splits nodes.
     * @param startNode The node to insert at the start.
     * @param endNode The node to insert at the end.
     */
    surroundWithNodes(startNode: Element | null, endNode: Element | null): void;
    /**
     * Saves the range so that if the start and end nodes are left alone, it can
     * be restored.
     * @return A range representation that can be restored as long as the endpoint nodes of the selection are not modified.
     */
    saveUsingDom(): SavedRange;
    /**
     * Saves the range using HTML carets. As long as the carets remained in the
     * HTML, the range can be restored...even when the HTML is copied across
     * documents.
     * @return A range representation that can be restored as long as carets are not removed. Returns null if carets could not be created.
     */
    abstract saveUsingCarets(): AbstractSavedCaretRange | null;
    /**
     * Collapses the range to one of its boundary points.
     * @param toAnchor Whether to collapse to the anchor of the range.
     */
    collapse(toAnchor: boolean): void;
}
/**
 * Subclass of TagIterator that iterates over a DOM range.  It
 * adds functions to determine the portion of each text node that is selected.
 */
export declare class RangeIterator extends TagIterator {
    /**
     * Subclass of TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param node The node to start traversal at.  When null, creates an empty iterator.
     * @param opt_reverse Whether to traverse nodes in reverse.
     */
    constructor(node: Node | null, opt_reverse?: boolean);
    private noStructuralTyping_closure_goog_dom_abstractrange_RangeIterator;
    getStartTextOffset(): number;
    getEndTextOffset(): number;
    getStartNode(): Node | null;
    getEndNode(): Node | null;
    isLast(): boolean;
}
