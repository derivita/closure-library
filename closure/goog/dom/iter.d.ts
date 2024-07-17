import { Iterator } from '../iter/iter.js';
/**
 * Iterator over a Node's siblings.
 */
export declare class SiblingIterator extends Iterator<any> {
    /**
     * Iterator over a Node's siblings.
     * @param node The node to start with.
     * @param opt_includeNode Whether to return the given node as the first return value from next.
     * @param opt_reverse Whether to traverse siblings in reverse document order.
     */
    constructor(node: Node | null, opt_includeNode?: boolean, opt_reverse?: boolean);
    private noStructuralTyping_closure_goog_dom_iter_SiblingIterator;
    next(): IteratorResult<Node>;
}
/**
 * Iterator over an Element's children.
 */
export declare class ChildIterator extends SiblingIterator {
    /**
     * Iterator over an Element's children.
     * @param element The element to iterate over.
     * @param opt_reverse Optionally traverse children from last to first.
     * @param opt_startIndex Optional starting index.
     */
    constructor(element: Element | null, opt_reverse?: boolean, opt_startIndex?: number);
    private noStructuralTyping_closure_goog_dom_iter_ChildIterator;
}
/**
 * Iterator over a Node's ancestors, stopping after the document body.
 */
export declare class AncestorIterator extends Iterator<any> {
    /**
     * Iterator over a Node's ancestors, stopping after the document body.
     * @param node The node to start with.
     * @param opt_includeNode Whether to return the given node as the first return value from next.
     */
    constructor(node: Node | null, opt_includeNode?: boolean);
    private noStructuralTyping_closure_goog_dom_iter_AncestorIterator;
    next(): IteratorResult<Node>;
}
