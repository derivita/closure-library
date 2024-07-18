import type { AbstractRange } from './abstractrange.js';
/**
 * Common error constants.
 */
export declare enum Error {
    NOT_IMPLEMENTED = "Not Implemented"
}
/**
 * Static method that returns the proper type of browser range.
 * @param range A browser range object.
 * @return A wrapper object.
 */
export declare function createRange(range: Range | Range | null): AbstractRange;
/**
 * Static method that returns the proper type of browser range.
 * @param node The node to select.
 * @return A wrapper object.
 */
export declare function createRangeFromNodeContents(node: Node | null): AbstractRange;
/**
 * Static method that returns the proper type of browser range.
 * @param startNode The node to start with.
 * @param startOffset The offset within the node to start.  This is either the index into the childNodes array for element startNodes or the index into the character array for text startNodes.
 * @param endNode The node to end with.
 * @param endOffset The offset within the node to end.  This is either the index into the childNodes array for element endNodes or the index into the character array for text endNodes.
 * @return A wrapper object.
 */
export declare function createRangeFromNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number): AbstractRange;
/**
 * Tests whether the given node can contain a range end point.
 * @param node The node to check.
 * @return Whether the given node can contain a range end point.
 */
export declare function canContainRangeEndpoint(node: Node | null): boolean;
