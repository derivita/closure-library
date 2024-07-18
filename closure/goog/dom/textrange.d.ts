import { AbstractRange, RangeType } from './abstractrange.js';
import { SavedRange } from './savedrange.js';
import { TextRangeIterator } from './textrangeiterator.js';
/**
 * Create a new text selection with no properties.  Do not use this constructor:
 * use one of the dom.Range.createFrom* methods instead.
 */
declare class GoogTextRange extends AbstractRange {
    /**
     * Create a new text selection with no properties.  Do not use this constructor:
     * use one of the dom.Range.createFrom* methods instead.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_textrange_GoogTextRange;
    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use dom.Range.createFrom* instead.
     * @param range The browser range object.
     * @param opt_isReversed Whether the focus node is before the anchor node.
     * @return A range wrapper object.
     */
    static createFromBrowserRange(range: Range | Range | null, opt_isReversed?: boolean): GoogTextRange;
    /**
     * Create a new range wrapper that selects the given node's text.  Do not use
     * this method directly - please use dom.Range.createFrom* instead.
     * @param node The node to select.
     * @param opt_isReversed Whether the focus node is before the anchor node.
     * @return A range wrapper object.
     */
    static createFromNodeContents(node: Node | null, opt_isReversed?: boolean): GoogTextRange;
    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.  Do not use this method directly - please
     * use dom.Range.createFrom* instead.
     * @param anchorNode The node to start with.
     * @param anchorOffset The offset within the node to start.
     * @param focusNode The node to end with.
     * @param focusOffset The offset within the node to end.
     * @return A range wrapper object.
     */
    static createFromNodes(anchorNode: Node | null, anchorOffset: number, focusNode: Node | null, focusOffset: number): GoogTextRange;
    clone(): GoogTextRange;
    getType(): RangeType;
    getBrowserRangeObject(): Range;
    setBrowserRangeObject(nativeRange: any): boolean;
    getTextRangeCount(): number;
    getTextRange(i: any): AbstractRange;
    getContainer(): Node;
    getStartNode(): Node;
    getStartOffset(): number;
    getStartPosition(): import("../math/coordinate.js").Coordinate;
    getEndNode(): Node;
    getEndOffset(): number;
    getEndPosition(): import("../math/coordinate.js").Coordinate;
    /**
     * Moves a TextRange to the provided nodes and offsets.
     * @param startNode The node to start with.
     * @param startOffset The offset within the node to start.
     * @param endNode The node to end with.
     * @param endOffset The offset within the node to end.
     * @param isReversed Whether the range is reversed.
     */
    moveToNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number, isReversed: boolean): void;
    isReversed(): boolean;
    containsRange(otherRange: any, opt_allowPartial: any): boolean;
    containsNode(node: any, opt_allowPartial: any): boolean;
    /**
     * Tests if the given node is in a document.
     * @param node The node to check.
     * @return Whether the given node is in the given document.
     */
    static isAttachedNode(node: Node | null): boolean;
    isRangeInDocument(): boolean;
    isCollapsed(): boolean;
    getText(): string;
    getHtmlFragment(): string;
    getValidHtml(): string;
    getPastableHtml(): string;
    /**
     * Returns a TextRangeIterator over the contents of the range.  Regardless of
     * the direction of the range, the iterator will move in document order.
     * @param opt_keys Unused for this iterator.
     * @return An iterator over tags in the range.
     */
    __iterator__(opt_keys?: boolean): TextRangeIterator;
    select(): void;
    removeContents(): void;
    /**
     * Surrounds the text range with the specified element (on Mozilla) or with a
     * clone of the specified element (on IE).  Returns a reference to the
     * surrounding element if the operation was successful; returns null if the
     * operation failed.
     * @param element The element with which the selection is to be surrounded.
     * @return The surrounding element (same as the argument on Mozilla, but not on IE), or null if unsuccessful.
     */
    surroundContents(element: Element | null): Element | null;
    insertNode(node: any, before: any): Node;
    surroundWithNodes(startNode: any, endNode: any): void;
    saveUsingDom(): SavedRange;
    saveUsingCarets(): import("./savedrange.js").AbstractSavedCaretRange;
    collapse(toAnchor: any): void;
}
export { GoogTextRange as TextRange };
