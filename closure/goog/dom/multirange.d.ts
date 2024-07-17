import { AbstractMultiRange } from './abstractmultirange.js';
import { AbstractRange, RangeIterator, RangeType } from './abstractrange.js';
import { SavedRange } from './savedrange.js';
/**
 * Creates a new multi part range with no properties.  Do not use this
 * constructor: use one of the dom.Range.createFrom* methods instead.
 */
export declare class MultiRange extends AbstractMultiRange {
    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the dom.Range.createFrom* methods instead.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_multirange_MultiRange;
    /**
     * Creates a new range wrapper from the given browser selection object.  Do not
     * use this method directly - please use dom.Range.createFrom* instead.
     * @param selection The browser selection object.
     * @return A range wrapper object.
     */
    static createFromBrowserSelection(selection: Selection | null): MultiRange;
    /**
     * Creates a new range wrapper from the given browser ranges.  Do not
     * use this method directly - please use dom.Range.createFrom* instead.
     * @param browserRanges The browser ranges.
     * @return A range wrapper object.
     */
    static createFromBrowserRanges(browserRanges: (Range | null)[] | null): MultiRange;
    /**
     * Creates a new range wrapper from the given TextRange objects.  Do
     * not use this method directly - please use dom.Range.createFrom* instead.
     * @param textRanges The text range objects.
     * @return A range wrapper object.
     */
    static createFromTextRanges(textRanges: (Range | null)[] | null): MultiRange;
    clone(): MultiRange;
    getType(): RangeType;
    getBrowserRangeObject(): Range;
    setBrowserRangeObject(nativeRange: any): boolean;
    getTextRangeCount(): number;
    getTextRange(i: any): AbstractRange;
    getContainer(): Node;
    getSortedRanges(): (Range | null)[];
    getStartNode(): Node;
    getStartOffset(): number;
    getEndNode(): Node;
    getEndOffset(): number;
    isRangeInDocument(): boolean;
    isCollapsed(): boolean;
    getText(): string;
    getHtmlFragment(): string;
    getValidHtml(): string;
    getPastableHtml(): string;
    /**
     *
     * @param opt_keys Unused for this iterator.
     * @return An iterator over tags in the range.
     */
    __iterator__(opt_keys?: boolean): RangeIterator;
    select(): void;
    removeContents(): void;
    saveUsingDom(): SavedRange;
    saveUsingCarets(): import("./savedrange.js").AbstractSavedCaretRange;
    /**
     * Collapses this range to a single point, either the first or last point
     * depending on the parameter.  This will result in the number of ranges in this
     * multi range becoming 1.
     * @param toAnchor Whether to collapse to the anchor.
     */
    collapse(toAnchor: boolean): void;
    /**
     * Tests if this range contains the given node.
     * @param node The node to test for.
     * @param opt_allowPartial If not set or false, the node must be entirely contained in the selection for this function to return true.
     * @return Whether this range contains the given node.
     */
    containsNode(node: Node | null, opt_allowPartial?: boolean): boolean;
}
/**
 * Subclass of dom.TagIterator that iterates over a DOM range.  It
 * adds functions to determine the portion of each text node that is selected.
 */
export declare class MultiRangeIterator extends RangeIterator {
    /**
     * Subclass of dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param range The range to traverse.
     */
    constructor(range: MultiRange | null);
    private noStructuralTyping_closure_goog_dom_multirange_MultiRangeIterator;
    getStartTextOffset(): number;
    getEndTextOffset(): number;
    getStartNode(): Node;
    getEndNode(): Node;
    isLast(): boolean;
    next(): IteratorResult<Node>;
    copyFrom(other: any): void;
    clone(): MultiRangeIterator;
}
