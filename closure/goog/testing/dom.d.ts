import { AbstractRange } from '../dom/abstractrange.js';
import * as iter from '../iter/iter.js';
/**
 * Tests if the given iterator over nodes matches the given Array of node
 * descriptors.  Throws an error if any match fails.
 * @param it An iterator over nodes.
 * @param array Array of node descriptors to match against.  Node descriptors can be any of the following: Node: Test if the two nodes are equal. number: Test node.nodeType == number. string starting with '#': Match the node's id with the text after "#". other string: Match the text node's contents.
 */
export declare function assertNodesMatch(it: iter.Iterator, array: (Node | number | string)[]): void;
/**
 * Exposes a node as a string.
 * @param node A node.
 * @return A string representation of the node.
 */
export declare function exposeNode(node: Node | null): string;
/**
 * Exposes the nodes of a range wrapper as a string.
 * @param range A range.
 * @return A string representation of the range.
 */
export declare function exposeRange(range: AbstractRange | null): string;
/**
 * Assert that the html in `actual` is substantially similar to
 * htmlPattern.  This method tests for the same set of styles, for the same
 * order of nodes, and the presence of attributes.  Breaking whitespace nodes
 * are ignored.  Elements can be
 * annotated with classnames corresponding to keys in userAgent and will be
 * expected to show up in that user agent and expected not to show up in
 * others.
 * @param htmlPattern The pattern to match.
 * @param actual The element to check: its contents are matched against the HTML pattern.
 * @param opt_strictAttributes If false, attributes that appear in htmlPattern must be in actual, but actual can have attributes not present in htmlPattern.  If true, htmlPattern and actual must have the same set of attributes.  Default is false.
 */
export declare function assertHtmlContentsMatch(htmlPattern: string, actual: Element, opt_strictAttributes?: boolean): void;
/**
 * Assert that the html in `actual` is substantially similar to
 * htmlPattern.  This method tests for the same set of styles, and for the same
 * order of nodes.  Breaking whitespace nodes are ignored.  Elements can be
 * annotated with classnames corresponding to keys in userAgent and will be
 * expected to show up in that user agent and expected not to show up in
 * others.
 * @param htmlPattern The pattern to match.
 * @param actual The html to check.
 * @param opt_strictAttributes If false, attributes that appear in htmlPattern must be in actual, but actual can have attributes not present in htmlPattern. If true, htmlPattern and actual must have the same set of attributes. Default is false.
 */
export declare function assertHtmlMatches(htmlPattern: string, actual: string, opt_strictAttributes?: boolean): void;
/**
 * Finds the first text node descendant of root with the given content.  Note
 * that this operates on a text node level, so if text nodes get split this
 * may not match the user visible text.  Using normalize() may help here.
 * @param textOrRegexp The text to find, or a regular expression to find a match of.
 * @param root The element to search in.
 * @return The first text node that matches, or null if none is found.
 */
export declare function findTextNode(textOrRegexp: string | RegExp | null, root: Element | null): Node | null;
/**
 * Assert the end points of a range.
 *
 * Notice that "Are two ranges visually identical?" and "Do two ranges have
 * the same endpoint?" are independent questions. Two visually identical ranges
 * may have different endpoints. And two ranges with the same endpoints may
 * be visually different.
 * @param start The expected start node.
 * @param startOffset The expected start offset.
 * @param end The expected end node.
 * @param endOffset The expected end offset.
 * @param range The actual range.
 */
export declare function assertRangeEquals(start: Node | null, startOffset: number, end: Node | null, endOffset: number, range: AbstractRange | null): void;
