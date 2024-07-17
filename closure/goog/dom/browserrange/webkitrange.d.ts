import { W3cRange } from './w3crange.js';
/**
 * The constructor for WebKit specific browser ranges.
 */
export declare class WebKitRange extends W3cRange {
    /**
     * The constructor for WebKit specific browser ranges.
     * @param range The range object.
     */
    constructor(range: Range | null);
    private noStructuralTyping_closure_goog_dom_browserrange_webkitrange_WebKitRange;
    /**
     * Creates a range object that selects the given node's text.
     * @param node The node to select.
     * @return A WebKit range wrapper object.
     */
    static createFromNodeContents(node: Node | null): WebKitRange;
    /**
     * Creates a range object that selects between the given nodes.
     * @param startNode The node to start with.
     * @param startOffset The offset within the start node.
     * @param endNode The node to end with.
     * @param endOffset The offset within the end node.
     * @return A wrapper object.
     */
    static createFromNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number): WebKitRange;
    compareBrowserRangeEndpoints(range: any, thisEndpoint: any, otherEndpoint: any): number;
    selectInternal(selection: any, reversed: any): void;
}
