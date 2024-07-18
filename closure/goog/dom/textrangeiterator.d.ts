import { RangeIterator } from './abstractrange.js';
/**
 * Subclass of dom.TagIterator that iterates over a DOM range.  It
 * adds functions to determine the portion of each text node that is selected.
 */
export declare class TextRangeIterator extends RangeIterator {
    /**
     * Subclass of dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param startNode The starting node position.
     * @param startOffset The offset in to startNode.  If startNode is an element, indicates an offset in to childNodes.  If startNode is a text node, indicates an offset in to nodeValue.
     * @param endNode The ending node position.
     * @param endOffset The offset in to endNode.  If endNode is an element, indicates an offset in to childNodes.  If endNode is a text node, indicates an offset in to nodeValue.
     * @param opt_reverse Whether to traverse nodes in reverse.
     */
    constructor(startNode: Node | null, startOffset: number, endNode: Node | null, endOffset: number, opt_reverse?: boolean);
    private noStructuralTyping_closure_goog_dom_textrangeiterator_TextRangeIterator;
    getStartTextOffset(): number;
    getEndTextOffset(): number;
    getStartNode(): Node;
    /**
     * Change the start node of the iterator.
     * @param node The new start node.
     */
    setStartNode(node: Node | null): void;
    getEndNode(): Node;
    /**
     * Change the end node of the iterator.
     * @param node The new end node.
     */
    setEndNode(node: Node | null): void;
    isLast(): boolean;
    /**
     * Move to the next position in the selection. Returns `{done: true}` when it
     * passes the end of the range.
     * @return The node at the next position.
     */
    next(): IteratorResult<Node>;
    skipTag(): void;
    copyFrom(other: any): void;
    clone(): TextRangeIterator;
}
