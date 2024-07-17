import { Disposable } from '../disposable/disposable.js';
/**
 * Object to store the offset from one node to another in a way that works on
 * any similar DOM structure regardless of whether it is the same actual nodes.
 */
export declare class NodeOffset extends Disposable {
    /**
     * Object to store the offset from one node to another in a way that works on
     * any similar DOM structure regardless of whether it is the same actual nodes.
     * @param node The node to get the offset for.
     * @param baseNode The node to calculate the offset from.
     */
    constructor(node: Node | null, baseNode: Node | null);
    private noStructuralTyping_closure_goog_dom_nodeoffset_NodeOffset;
    toString(): string;
    /**
     * Walk the dom and find the node relative to baseNode.  Returns null on
     * failure.
     * @param baseNode The node to start walking from.  Should be equivalent to the node passed in to the constructor, in that it should have the same contents.
     * @return The node relative to baseNode, or null on failure.
     */
    findTargetNode(baseNode: Node | null): Node | null;
    disposeInternal(): void;
}
