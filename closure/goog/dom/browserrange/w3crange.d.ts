import { AbstractRange } from './abstractrange.js';
/**
 * The constructor for W3C specific browser ranges.
 */
export declare class W3cRange extends AbstractRange {
    /**
     * The constructor for W3C specific browser ranges.
     * @param range The range object.
     */
    constructor(range: Range | null);
    private noStructuralTyping_closure_goog_dom_browserrange_w3crange_W3cRange;
    /**
     * Returns a browser range spanning the given node's contents.
     * @param node The node to select.
     * @return A browser range spanning the node's contents.
     */
    protected static getBrowserRangeForNode(node: Node | null): Range;
    /**
     * Returns a browser range spanning the given nodes.
     * @param startNode The node to start with - should not be a BR.
     * @param startOffset The offset within the start node.
     * @param endNode The node to end with - should not be a BR.
     * @param endOffset The offset within the end node.
     * @return A browser range spanning the node's contents.
     */
    protected static getBrowserRangeForNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number): Range;
    /**
     * Creates a range object that selects the given node's text.
     * @param node The node to select.
     * @return A Gecko range wrapper object.
     */
    static createFromNodeContents(node: Node | null): W3cRange;
    /**
     * Creates a range object that selects between the given nodes.
     * @param startNode The node to start with.
     * @param startOffset The offset within the start node.
     * @param endNode The node to end with.
     * @param endOffset The offset within the end node.
     * @return A wrapper object.
     */
    static createFromNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number): W3cRange;
    clone(): W3cRange;
    getBrowserRange(): Range;
    getContainer(): Node;
    getStartNode(): Node;
    getStartOffset(): number;
    getEndNode(): Node;
    getEndOffset(): number;
    compareBrowserRangeEndpoints(range: any, thisEndpoint: any, otherEndpoint: any): number;
    isCollapsed(): boolean;
    getText(): string;
    getValidHtml(): string;
    select(reverse: any): void;
    /**
     * Select this range.
     * @param selection Browser selection object.
     * @param reverse Whether to select this range in reverse.
     */
    protected selectInternal(selection: Selection | null, reverse: any): void;
    removeContents(): void;
    surroundContents(element: any): Element;
    insertNode(node: any, before: any): Node;
    surroundWithNodes(startNode: any, endNode: any): void;
    collapse(toStart: any): void;
}
