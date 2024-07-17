import { SavedCaretRange } from '../dom/savedcaretrange.js';
import type { AbstractRange } from '../dom/abstractrange.js';
import type { TagName } from '../dom/tagname.js';
/**
 * Given a range and an element, create a narrower range that is limited to the
 * boundaries of the element. If the range starts (or ends) outside the
 * element, the narrowed range's start point (or end point) will be the
 * leftmost (or rightmost) leaf of the element.
 * @param range The range.
 * @param el The element to limit the range to.
 * @return A new narrowed range, or null if the element does not contain any part of the given range.
 */
export declare function narrow(range: AbstractRange | null, el: Element | null): AbstractRange | null;
/**
 * Given a range, expand the range to include outer tags if the full contents of
 * those tags are entirely selected.  This essentially changes the dom position,
 * but not the visible position of the range.
 * Ex. <code><li>foo</li></code> if "foo" is selected, instead of returning
 * start and end nodes as the foo text node, return the li.
 * @param range The range.
 * @param opt_stopNode Optional node to stop expanding past.
 * @return The expanded range.
 */
export declare function expand(range: AbstractRange | null, opt_stopNode?: Node | null): AbstractRange;
/**
 * Cause the window's selection to be the start of this node.
 * @param node The node to select the start of.
 */
export declare function selectNodeStart(node: Node | null): void;
/**
 * Position the cursor immediately to the left or right of "node".
 * In Firefox, the selection parent is outside of "node", so the cursor can
 * effectively be moved to the end of a link node, without being considered
 * inside of it.
 * Note: This does not always work in WebKit. In particular, if you try to
 * place a cursor to the right of a link, typing still puts you in the link.
 * Bug: http://bugs.webkit.org/show_bug.cgi?id=17697
 * @param node The node to position the cursor relative to.
 * @param toLeft True to place it to the left, false to the right.
 * @return The newly selected range.
 */
export declare function placeCursorNextTo(node: Node | null, toLeft: boolean): AbstractRange;
/**
 * Normalizes the node, preserving the selection of the document.
 *
 * May also normalize things outside the node, if it is more efficient to do so.
 * @param node The node to normalize.
 */
export declare function selectionPreservingNormalize(node: Node | null): void;
/**
 * Normalizes the given node.
 * @param node The node to normalize.
 */
export declare function normalizeNode(node: Node | null): void;
/**
 * Normalizes the node, preserving a range of the document.
 *
 * May also normalize things outside the node, if it is more efficient to do so.
 * @param node The node to normalize.
 * @param range The range to normalize.
 * @return The range, adjusted for normalization.
 */
export declare function rangePreservingNormalize(node: Node | null, range: AbstractRange | null): AbstractRange | null;
/**
 * Get the deepest point in the DOM that's equivalent to the endpoint of the
 * given range.
 * @param range A range.
 * @param atStart True for the start point, false for the end point.
 * @return The end point, expressed as a node and an offset.
 */
export declare function getDeepEndPoint(range: AbstractRange | null, atStart: boolean): Point;
/**
 * Given a range in the current DOM, create a factory for a range that
 * represents the same selection in a normalized DOM. The factory function
 * should be invoked after the DOM is normalized.
 *
 * All browsers do a bad job preserving ranges across DOM normalization.
 * The issue is best described in this 5-year-old bug report:
 * https://bugzilla.mozilla.org/show_bug.cgi?id=191864
 * For most applications, this isn't a problem. The browsers do a good job
 * handling un-normalized text, so there's usually no reason to normalize.
 *
 * The exception to this rule is the rich text editing commands
 * execCommand and queryCommandValue, which will fail often if there are
 * un-normalized text nodes.
 *
 * The factory function creates new ranges so that we can normalize the DOM
 * without problems. It must be created before any normalization happens,
 * and invoked after normalization happens.
 * @param range The range to normalize. It may become invalid after body.normalize() is called.
 * @return A factory for a normalized range. Should be called after body.normalize() is called.
 */
export declare function normalize(range: AbstractRange | null): () => (AbstractRange | null);
/**
 * Checks if a range is completely inside an editable region.
 * @param range The range to test.
 * @return Whether the range is completely inside an editable region.
 */
export declare function isEditable(range: AbstractRange | null): boolean;
/**
 * Returns whether the given range intersects with any instance of the given
 * tag.
 * @param range The range to check.
 * @param tagName The name of the tag.
 * @return Whether the given range intersects with any instance of the given tag.
 */
export declare function intersectsTag(range: AbstractRange | null, tagName: TagName): boolean;
/**
 * One endpoint of a range, represented as a Node and and offset.
 */
export declare class Point {
    /**
     * One endpoint of a range, represented as a Node and and offset.
     * @param node The node containing the point.
     * @param offset The offset of the point into the node.
     */
    constructor(node: Node | null, offset: number);
    private noStructuralTyping_closure_goog_editor_range_Point;
    /**
     * The node containing the point.
     */
    node: Node | null;
    /**
     * The offset of the point into the node.
     */
    offset: number;
    /**
     * Gets the point of this point's node in the DOM.
     * @return The node's point.
     */
    getParentPoint(): Point;
    /**
     * Construct the deepest possible point in the DOM that's equivalent
     * to the given point, expressed as a node and an offset.
     * @param node The node containing the point.
     * @param offset The offset of the point from the node.
     * @param opt_trendLeft Notice that a (node, offset) pair may be equivalent to more than one descendant (node, offset) pair in the DOM. By default, we trend rightward. If this parameter is true, then we trend leftward. The tendency to fall rightward by default is for consistency with other range APIs (like placeCursorNextTo).
     * @param opt_stopOnChildlessElement If true, and we encounter a Node which is an Element that cannot have children, we return a Point based on its parent rather than that Node itself.
     * @return A new point.
     */
    static createDeepestPoint(node: Node | null, offset: number, opt_trendLeft?: boolean, opt_stopOnChildlessElement?: boolean): Point;
    /**
     * Construct a point at the very end of the given node.
     * @param node The node to create a point for.
     * @return A new point.
     */
    static getPointAtEndOfNode(node: Node | null): Point;
}
/**
 * Saves the range by inserting carets into the HTML.
 *
 * Unlike the regular saveUsingCarets, this SavedRange normalizes text nodes.
 * Browsers have other bugs where they don't handle split text nodes in
 * contentEditable regions right.
 * @param range The abstract range object.
 * @return A saved caret range that normalizes text nodes.
 */
export declare function saveUsingNormalizedCarets(range: AbstractRange | null): SavedCaretRange;
