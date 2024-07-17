import { W3cRange } from './w3crange.js';
/**
 * The constructor for Gecko specific browser ranges.
 */
export declare class GeckoRange extends W3cRange {
    /**
     * The constructor for Gecko specific browser ranges.
     * @param range The range object.
     */
    constructor(range: Range | null);
    private noStructuralTyping_closure_goog_dom_browserrange_geckorange_GeckoRange;
    /**
     * Creates a range object that selects the given node's text.
     * @param node The node to select.
     * @return A Gecko range wrapper object.
     */
    static createFromNodeContents(node: Node | null): GeckoRange;
    /**
     * Creates a range object that selects between the given nodes.
     * @param startNode The node to start with.
     * @param startOffset The offset within the node to start.
     * @param endNode The node to end with.
     * @param endOffset The offset within the node to end.
     * @return A wrapper object.
     */
    static createFromNodes(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number): GeckoRange;
    selectInternal(selection: any, reversed: any): void;
}
