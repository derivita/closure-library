import { Disposable } from '../../disposable/disposable.js';
import type { AbstractRange } from '../../dom/abstractrange.js';
/**
 * Create a new test controller.
 */
export declare class TestHelper extends Disposable {
    /**
     * Create a new test controller.
     * @param root The root editable element.
     */
    constructor(root: Element | null);
    private noStructuralTyping_closure_goog_testing_editor_testhelper_TestHelper;
    /**
     * Selects a new root element.
     * @param root The root editable element.
     */
    setRoot(root: Element | null): void;
    /**
     * Make the root element editable.  Also saves its HTML to be restored
     * in tearDown.
     */
    setUpEditableElement(): void;
    /**
     * Reset the element previously initialized, restoring its HTML and making it
     * non editable.
     */
    tearDownEditableElement(): void;
    /**
     * Assert that the html in 'root' is substantially similar to htmlPattern.
     * This method tests for the same set of styles, and for the same order of
     * nodes.  Breaking whitespace nodes are ignored.  Elements can be annotated
     * with classnames corresponding to keys in goog.userAgent and will be
     * expected to show up in that user agent and expected not to show up in
     * others.
     * @param htmlPattern The pattern to match.
     */
    assertHtmlMatches(htmlPattern: string): void;
    /**
     * Finds the first text node descendant of root with the given content.
     * @param textOrRegexp The text to find, or a regular expression to find a match of.
     * @return The first text node that matches, or null if none is found.
     */
    findTextNode(textOrRegexp: string | RegExp | null): Node | null;
    /**
     * Select from the given `fromOffset` in the given `from` node to
     * the given `toOffset` in the optionally given `to` node. If nodes
     * are passed in, uses them, otherwise uses findTextNode to find the nodes to
     * select. Selects a caret if opt_to and opt_toOffset are not given.
     * @param from Node or text of the node to start the selection at.
     * @param fromOffset Offset within the above node to start the selection at.
     * @param opt_to Node or text of the node to end the selection at.
     * @param opt_toOffset Offset within the above node to end the selection at.
     */
    select(from: Node | string | null, fromOffset: number, opt_to?: Node | string | null, opt_toOffset?: number): AbstractRange;
    disposeInternal(): void;
}
