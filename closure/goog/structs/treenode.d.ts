import { Node } from './node.js';
/**
 * Generic tree node data structure with arbitrary number of child nodes.
 * It is possible to create a dynamic tree structure by overriding
 * {@link #getParent} and {@link #getChildren} in a subclass. All other getters
 * will automatically work.
 */
export declare class TreeNode<KEY = any, VALUE = any> extends Node<KEY | null, VALUE | null> {
    /**
     * Generic tree node data structure with arbitrary number of child nodes.
     * It is possible to create a dynamic tree structure by overriding
     * {@link #getParent} and {@link #getChildren} in a subclass. All other getters
     * will automatically work.
     * @param key Key.
     * @param value Value.
     */
    constructor(key: KEY | null, value: VALUE | null);
    private noStructuralTyping_closure_goog_structs_treenode_TreeNode;
    clone(): TreeNode;
    deepClone(): TreeNode;
    getParent(): TreeNode<KEY | null, VALUE | null> | null;
    isLeaf(): boolean;
    /**
     * Tells if the node is the last child of its parent. This method helps how to
     * connect the tree nodes with lines: L shapes should be used before the last
     * children and |- shapes before the rest. Schematic tree visualization:
     *
     * <pre>
     * Node1
     * |-Node2
     * | L-Node3
     * |   |-Node4
     * |   L-Node5
     * L-Node6
     * </pre>
     * @return Whether the node has parent and is the last child of it.
     */
    isLastChild(): boolean;
    getChildren(): TreeNode<KEY | null, VALUE | null>[];
    /**
     * Gets the child node of this node at the given index.
     * @param index Child index.
     * @return The node at the given index or null if not found.
     */
    getChildAt(index: number): TreeNode<KEY | null, VALUE | null> | null;
    getChildCount(): number;
    getDepth(): number;
    getAncestors(): TreeNode<KEY | null, VALUE | null>[];
    getRoot(): TreeNode<KEY | null, VALUE | null>;
    /**
     * Builds a nested array structure from the node keys in this node's subtree to
     * facilitate testing tree operations that change the hierarchy.
     * @return The structure of this node's descendants as nested array of node keys. The number of unclosed opening brackets up to a particular node is proportional to the indentation of that node in the graphical representation of the tree. Example: <pre> this |- child1 |  L- grandchild L- child2 </pre> is represented as ['child1', ['grandchild'], 'child2'].
     */
    getSubtreeKeys(): (KEY | null)[];
    /**
     * Tells whether this node is the ancestor of the given node.
     * @param node A node.
     * @return Whether this node is the ancestor of `node`.
     */
    contains(node: TreeNode<KEY | null, VALUE | null>): boolean;
    /**
     * Finds the deepest common ancestor of the given nodes. The concept of
     * ancestor is not strict in this case, it includes the node itself.
     * @param var_args The nodes.
     * @return The common ancestor of the nodes or null if they are from different trees.
     */
    static findCommonAncestor<KEY = any, VALUE = any>(...var_args: TreeNode<KEY | null, VALUE | null>[]): TreeNode<KEY | null, VALUE | null> | null;
    /**
     * Returns a node whose key matches the given one in the hierarchy rooted at
     * this node. The hierarchy is searched using an in-order traversal.
     * @param key The key to search for.
     * @return The node with the given key, or null if no node with the given key exists in the hierarchy.
     */
    getNodeByKey(key: KEY | null): TreeNode<KEY | null, VALUE | null> | null;
    /**
     * Traverses all child nodes.
     * @param f Callback function. It takes the node, its index and the array of all child nodes as arguments.
     * @param opt_this The object to be used as the value of `this` within `f`.
     */
    forEachChild<THIS = any>(f: (this: THIS | null) => any, opt_this?: THIS | null): void;
    /**
     * Traverses all child nodes recursively in preorder.
     * @param f Callback function.  It takes the node as argument.
     * @param opt_this The object to be used as the value of `this` within `f`.
     */
    forEachDescendant<THIS = any>(f: (this: THIS | null) => any, opt_this?: THIS | null): void;
    /**
     * Traverses the subtree with the possibility to skip branches. Starts with
     * this node, and visits the descendant nodes depth-first, in preorder.
     * @param f Callback function. It takes the node as argument. The children of this node will be visited if the callback returns true or undefined, and will be skipped if the callback returns false.
     * @param opt_this The object to be used as the value of `this` within `f`.
     */
    traverse<THIS = any>(f: (this: THIS | null) => (boolean | undefined), opt_this?: THIS | null): void;
    /**
     * Sets the parent node of this node. The callers must ensure that the parent
     * node and only that has this node among its children.
     * @param parent The parent to set. If null, the node will be detached from the tree.
     */
    protected setParent(parent: TreeNode<KEY | null, VALUE | null> | null): void;
    /**
     * Appends a child node to this node.
     * @param child Orphan child node.
     */
    addChild(child: TreeNode<KEY | null, VALUE | null>): void;
    /**
     * Inserts a child node at the given index.
     * @param child Orphan child node.
     * @param index The position to insert at.
     */
    addChildAt(child: TreeNode<KEY | null, VALUE | null>, index: number): void;
    /**
     * Replaces a child node at the given index.
     * @param newChild Child node to set. It must not have parent node.
     * @param index Valid index of the old child to replace.
     * @return The original child node, detached from its parent.
     */
    replaceChildAt(newChild: TreeNode<KEY | null, VALUE | null>, index: number): TreeNode<KEY | null, VALUE | null>;
    /**
     * Replaces the given child node.
     * @param newChild New node to replace `oldChild`. It must not have parent node.
     * @param oldChild Existing child node to be replaced.
     * @return The replaced child node detached from its parent.
     */
    replaceChild(newChild: TreeNode<KEY | null, VALUE | null>, oldChild: TreeNode<KEY | null, VALUE | null>): TreeNode<KEY | null, VALUE | null>;
    /**
     * Removes the child node at the given index.
     * @param index The position to remove from.
     * @return The removed node if any.
     */
    removeChildAt(index: number): TreeNode<KEY | null, VALUE | null> | null;
    /**
     * Removes the given child node of this node.
     * @param child The node to remove.
     * @return The removed node if any.
     */
    removeChild(child: TreeNode<KEY | null, VALUE | null> | null): TreeNode<KEY | null, VALUE | null> | null;
    /**
     * Removes all child nodes of this node.
     */
    removeChildren(): void;
}
