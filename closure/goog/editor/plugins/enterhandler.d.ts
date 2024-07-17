import { TagName } from '../../dom/tagname.js';
import { Plugin } from '../plugin.js';
import type { AbstractRange } from '../../dom/abstractrange.js';
import type { BrowserEvent } from '../../events/browserevent.js';
import type { Event } from '../../events/event.js';
/**
 * Plugin to handle enter keys. This does all the crazy to normalize (as much as
 * is reasonable) what happens when you hit enter. This also handles the
 * special casing of hitting enter in a blockquote.
 *
 * In IE, Webkit, and Opera, the resulting HTML uses one DIV tag per line. In
 * Firefox, the resulting HTML uses BR tags at the end of each line.
 */
export declare class EnterHandler extends Plugin {
    /**
     * Plugin to handle enter keys. This does all the crazy to normalize (as much as
     * is reasonable) what happens when you hit enter. This also handles the
     * special casing of hitting enter in a blockquote.
     *
     * In IE, Webkit, and Opera, the resulting HTML uses one DIV tag per line. In
     * Firefox, the resulting HTML uses BR tags at the end of each line.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_enterhandler_EnterHandler;
    /**
     * The type of block level tag to add on enter, for browsers that support
     * specifying the default block-level tag. Can be overriden by subclasses; must
     * be either DIV or P.
     */
    protected tag: TagName;
    getTrogClassId(): string;
    enable(fieldObject: any): void;
    /**
     * If the contents are empty, return the 'default' html for the field.
     * The 'default' contents depend on the enter handling mode, so it
     * makes the most sense in this plugin.
     * @param html The html to prepare.
     * @return The original HTML, or default contents if that html is empty.
     */
    prepareContentsHtml(html: string): string;
    /**
     * Gets HTML with no contents that won't collapse, for browsers that
     * collapse the empty string.
     * @return Blank html.
     */
    protected getNonCollapsingBlankHtml(...args: any[]): string;
    /**
     * Internal backspace handler.
     * @param e The keypress event.
     * @param range The closure range object.
     */
    protected handleBackspaceInternal(e: Event | null, range: AbstractRange | null): void;
    /**
     * Fix paragraphs to be the correct type of node.
     * @param e The `<enter>` key event.
     * @param split Whether we already split up a blockquote by manually inserting elements.
     */
    protected processParagraphTagsInternal(e: Event | null, split: boolean): void;
    /**
     * Determines whether the lowest containing block node is a blockquote.
     * @param n The node.
     * @return Whether the deepest block ancestor of n is a blockquote.
     */
    static isDirectlyInBlockquote(n: Node | null): boolean;
    /**
     * Internal delete key handler.
     * @param e The keypress event.
     */
    protected handleDeleteGecko(e: Event | null): void;
    /**
     * Deletes the element at the cursor if it is a BR node, and if it does, calls
     * e.preventDefault to stop the browser from deleting. Only necessary in Gecko
     * as a workaround for mozilla bug 205350 where deleting a BR that is followed
     * by a block element doesn't work (the BR gets immediately replaced). We also
     * need to account for an ill-formed cursor which occurs from us trying to
     * stop the browser from deleting.
     * @param e The DELETE keypress event.
     */
    protected deleteBrGecko(e: Event | null): void;
    handleKeyDown(e: any): boolean;
    handleKeyPress(e: any): boolean;
    handleKeyUp(e: any): boolean;
    /**
     * Internal handler for keyup events.
     * @param e The key event.
     */
    protected handleKeyUpInternal(e: Event | null): void;
    /**
     * Handle an enter key press in WebKit.
     * @param e The key press event.
     */
    protected handleEnterWebkitInternal(e: BrowserEvent | null): void;
    /**
     * Handle an enter key press on collapsed selection.  handleEnterGecko_ ensures
     * the selection is collapsed by deleting its contents if it is not.  The
     * default implementation does nothing.
     * @param e The key press event.
     * @param wasCollapsed Whether the selection was collapsed before the key press.  If it was not, code before this function has already cleared the contents of the selection.
     * @param range Object representing the selection.
     */
    protected handleEnterAtCursorGeckoInternal(e: BrowserEvent | null, wasCollapsed: boolean, range: AbstractRange | null): void;
    /**
     * Whether this is a node that contains a single BR tag and non-nbsp
     * whitespace.
     * @param node Node to check.
     * @return Whether this is an element that only contains a BR.
     */
    protected static isBrElem(node: Node | null): boolean;
    /**
     * Ensures all text in IE and Opera to be in the given tag in order to control
     * Enter spacing. Call this when Enter is pressed if desired.
     *
     * We want to make sure the user is always inside of a block (or other nodes
     * listed in EnterHandler.IGNORE_ENSURE_BLOCK_NODES_).  We
     * listen to keypress to force nodes that the user is leaving to turn into
     * blocks, but we also need to listen to keyup to force nodes that the user is
     * entering to turn into blocks.
     * Example:  html is: `<h2>foo[cursor]</h2>`, and the user hits enter.  We
     * don't want to format the h2, but we do want to format the P that is
     * created on enter.  The P node is not available until keyup.
     * @param tag The tag name to convert to.
     * @param opt_keyUp Whether the function is being called on key up. When called on key up, the cursor is in the newly created node, so the semantics for when to change it to a block are different.  Specifically, if the resulting node contains only a BR, it is converted to `<tag>`.
     */
    protected ensureBlockIeOpera(tag: TagName, opt_keyUp?: boolean): void;
}
