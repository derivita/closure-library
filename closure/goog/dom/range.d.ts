import { AbstractRange } from './abstractrange.js';
/**
 * Create a new selection from the given browser window's current selection.
 * Note that this object does not auto-update if the user changes their
 * selection and should be used as a snapshot.
 * @param opt_win The window to get the selection of.  Defaults to the window this class was defined in.
 * @return A range wrapper object, or null if there was an error.
 */
export declare function createFromWindow(opt_win?: Window | null): AbstractRange | null;
/**
 * Create a new range wrapper from the given browser selection object.  Note
 * that this object does not auto-update if the user changes their selection and
 * should be used as a snapshot.
 * @param selection The browser selection object.
 * @return A range wrapper object or null if there was an error.
 */
export declare function createFromBrowserSelection(selection: object): AbstractRange | null;
/**
 * Create a new range wrapper from the given browser range object.
 * @param range The browser range object.
 * @param opt_isReversed Whether the focus node is before the anchor node.
 * @return A range wrapper object.
 */
export declare function createFromBrowserRange(range: Range | Range | null, opt_isReversed?: boolean): AbstractRange;
/**
 * Create a new range wrapper that selects the given node's text.
 * @param node The node to select.
 * @param opt_isReversed Whether the focus node is before the anchor node.
 * @return A range wrapper object.
 */
export declare function createFromNodeContents(node: Node | null, opt_isReversed?: boolean): AbstractRange;
/**
 * Create a new range wrapper that represents a caret at the given node,
 * accounting for the given offset.  This always creates a TextRange, regardless
 * of whether node is an image node or other control range type node.
 * @param node The node to place a caret at.
 * @param offset The offset within the node to place the caret at.
 * @return A range wrapper object.
 */
export declare function createCaret(node: Node | null, offset: number): AbstractRange;
/**
 * Create a new range wrapper that selects the area between the given nodes,
 * accounting for the given offsets.
 * @param anchorNode The node to anchor on.
 * @param anchorOffset The offset within the node to anchor on.
 * @param focusNode The node to focus on.
 * @param focusOffset The offset within the node to focus on.
 * @return A range wrapper object.
 */
export declare function createFromNodes(anchorNode: Node | null, anchorOffset: number, focusNode: Node | null, focusOffset: number): AbstractRange;
/**
 * Clears the window's selection.
 * @param opt_win The window to get the selection of.  Defaults to the window this class was defined in.
 */
export declare function clearSelection(opt_win?: Window | null): void;
/**
 * Tests if the window has a selection.
 * @param opt_win The window to check the selection of.  Defaults to the window this class was defined in.
 * @return Whether the window has a selection.
 */
export declare function hasSelection(opt_win?: Window | null): boolean;
/**
 * Returns whether the focus position occurs before the anchor position.
 * @param anchorNode The node to anchor on.
 * @param anchorOffset The offset within the node to anchor on.
 * @param focusNode The node to focus on.
 * @param focusOffset The offset within the node to focus on.
 * @return Whether the focus position occurs before the anchor position.
 */
declare function isReversed_(anchorNode: Node | null, anchorOffset: number, focusNode: Node | null, focusOffset: number): boolean;
export { isReversed_ as isReversed };
