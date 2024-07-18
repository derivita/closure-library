import { RangeEndpoint } from '../rangeendpoint.js';
import { Coordinate } from '../../math/coordinate.js';
import type { RangeIterator } from '../abstractrange.js';
/**
 * The constructor for abstract ranges.  Don't call this from subclasses.
 */
export declare class AbstractRange {
    /**
     * The constructor for abstract ranges.  Don't call this from subclasses.
     */
    constructor();
    private noStructuralTyping_closure_goog_dom_browserrange_abstractrange_AbstractRange;
    clone(): AbstractRange | null;
    /**
     * Returns the browser native implementation of the range.  Please refrain from
     * using this function - if you find you need the range please add wrappers for
     * the functionality you need rather than just using the native range.
     * @return The browser native range object.
     */
    getBrowserRange(): Range | Range | null;
    /**
     * Returns the deepest node in the tree that contains the entire range.
     * @return The deepest node that contains the entire range.
     */
    getContainer(): Node | null;
    /**
     * Returns the node the range starts in.
     * @return The element or text node the range starts in.
     */
    getStartNode(): Node | null;
    /**
     * Returns the offset into the node the range starts in.
     * @return The offset into the node the range starts in.  For text nodes, this is an offset into the node value.  For elements, this is an offset into the childNodes array.
     */
    getStartOffset(): number;
    getStartPosition(): Coordinate | null;
    /**
     * Returns the node the range ends in.
     * @return The element or text node the range ends in.
     */
    getEndNode(): Node | null;
    /**
     * Returns the offset into the node the range ends in.
     * @return The offset into the node the range ends in.  For text nodes, this is an offset into the node value.  For elements, this is an offset into the childNodes array.
     */
    getEndOffset(): number;
    getEndPosition(): Coordinate | null;
    /**
     * Compares one endpoint of this range with the endpoint of another browser
     * native range object.
     * @param range The browser native range to compare against.
     * @param thisEndpoint The endpoint of this range to compare with.
     * @param otherEndpoint The endpoint of the other range to compare with.
     * @return 0 if the endpoints are equal, negative if this range endpoint comes before the other range endpoint, and positive otherwise.
     */
    compareBrowserRangeEndpoints(range: Range | Range | null, thisEndpoint: RangeEndpoint | null, otherEndpoint: RangeEndpoint | null): number;
    /**
     * Tests if this range contains the given range.
     * @param abstractRange The range to test.
     * @param opt_allowPartial If not set or false, the range must be entirely contained in the selection for this function to return true.
     * @return Whether this range contains the given range.
     */
    containsRange(abstractRange: AbstractRange | null, opt_allowPartial?: boolean): boolean;
    /**
     * Tests if this range contains the given node.
     * @param node The node to test.
     * @param opt_allowPartial If not set or false, the node must be entirely contained in the selection for this function to return true.
     * @return Whether this range contains the given node.
     */
    containsNode(node: Node | null, opt_allowPartial?: boolean): boolean;
    /**
     * Tests if the selection is collapsed - i.e. is just a caret.
     * @return Whether the range is collapsed.
     */
    isCollapsed(): boolean;
    getText(): string;
    /**
     * Returns the HTML fragment this range selects.  This is slow on all browsers.
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
     * Returns a RangeIterator over the contents of the range.  Regardless of the
     * direction of the range, the iterator will move in document order.
     * @param opt_keys Unused for this iterator.
     * @return An iterator over tags in the range.
     */
    __iterator__(opt_keys?: boolean): RangeIterator;
    /**
     * Set this range as the selection in its window.
     * @param opt_reverse Whether to select the range in reverse, if possible.
     */
    select(opt_reverse?: boolean): void;
    /**
     * Removes the contents of the range from the document.  As a side effect, the
     * selection will be collapsed.  The behavior of content removal is normalized
     * across browsers.  For instance, IE sometimes creates extra text nodes that
     * a W3C browser does not.  That behavior is corrected for.
     */
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
    /**
     * Inserts a node before (or after) the range.  The range may be disrupted
     * beyond recovery because of the way this splits nodes.
     * @param node The node to insert.
     * @param before True to insert before, false to insert after.
     * @return The node added to the document.  This may be different than the node parameter because on IE we have to clone it.
     */
    insertNode(node: Node | null, before: boolean): Node | null;
    /**
     * Surrounds this range with the two given nodes.  The range may be disrupted
     * beyond recovery because of the way this splits nodes.
     * @param startNode The node to insert at the start.
     * @param endNode The node to insert at the end.
     */
    surroundWithNodes(startNode: Element | null, endNode: Element | null): void;
    /**
     * Collapses the range to one of its boundary points.
     * @param toStart Whether to collapse to the start of the range.
     */
    collapse(toStart: boolean): void;
}
