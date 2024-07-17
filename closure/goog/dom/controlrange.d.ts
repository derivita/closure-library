import { AbstractMultiRange } from './abstractmultirange.js';
import { AbstractRange, RangeIterator, RangeType } from './abstractrange.js';
import { SavedRange } from './savedrange.js';
/**
 * Create a new control selection with no properties.  Do not use this
 * constructor: use one of the dom.Range.createFrom* methods instead.
 */
export declare class ControlRange extends AbstractMultiRange {
    /**
     * Create a new control selection with no properties.  Do not use this
     * constructor: use one of the dom.Range.createFrom* methods instead.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_controlrange_ControlRange;
    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use dom.Range.createFrom* instead.
     * @param controlRange The browser range object.
     * @return A range wrapper object.
     */
    static createFromBrowserRange(controlRange: object | null): ControlRange;
    /**
     * Create a new range wrapper that selects the given element.  Do not use
     * this method directly - please use dom.Range.createFrom* instead.
     * @param var_args The element(s) to select.
     * @return A range wrapper object.
     */
    static createFromElements(...var_args: (Element | null)[]): ControlRange;
    clone(): AbstractRange;
    getType(): RangeType;
    getBrowserRangeObject(): Range;
    setBrowserRangeObject(nativeRange: any): boolean;
    getTextRangeCount(): number;
    getTextRange(i: any): AbstractRange;
    getContainer(): Node;
    getStartNode(): Node;
    getStartOffset(): number;
    getEndNode(): Node;
    getEndOffset(): number;
    getElements(): (Element | null)[];
    getSortedElements(): (Element | null)[];
    isRangeInDocument(): boolean;
    isCollapsed(): boolean;
    getText(): string;
    getHtmlFragment(): string;
    getValidHtml(): string;
    /**
     *
     * @param opt_keys Unused for this iterator.
     * @return An iterator over tags in the range.
     */
    __iterator__(opt_keys?: boolean): RangeIterator;
    /**
     * Tests if this range contains the given node.
     * @param node The node to test for.
     * @param opt_allowPartial If not set or false, the node must be entirely contained in the selection for this function to return true.
     * @return Whether this range contains the given node.
     */
    containsNode(node: Node | null, opt_allowPartial?: boolean): boolean;
    select(): void;
    removeContents(): void;
    replaceContentsWithNode(node: any): Node;
    saveUsingDom(): SavedRange;
    saveUsingCarets(): import("./savedrange.js").AbstractSavedCaretRange;
    collapse(toAnchor: any): void;
}
/**
 * Subclass of dom.TagIterator that iterates over a DOM range.  It
 * adds functions to determine the portion of each text node that is selected.
 */
export declare class ControlRangeIterator extends RangeIterator {
    /**
     * Subclass of dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param range The range to traverse.
     */
    constructor(range: ControlRange | null);
    private noStructuralTyping_closure_goog_dom_controlrange_ControlRangeIterator;
    getStartTextOffset(): number;
    getEndTextOffset(): number;
    getStartNode(): Node;
    getEndNode(): Node;
    isLast(): boolean;
    /**
     * Move to the next position in the selection.
     * Throws `iter.StopIteration` when it passes the end of the range.
     * @return The node at the next position.
     */
    next(): IteratorResult<Node>;
    copyFrom(other: any): void;
    clone(): ControlRangeIterator;
}
