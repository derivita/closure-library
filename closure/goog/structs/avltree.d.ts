import { Collection } from './collection.js';
/**
 * Constructs an AVL-Tree, which uses the specified comparator to order its
 * values. The values can be accessed efficiently in their sorted order since
 * the tree enforces a O(logn) maximum height.
 */
declare class AvlTree<T = any> implements Collection<T | null> {
    /**
     * Constructs an AVL-Tree, which uses the specified comparator to order its
     * values. The values can be accessed efficiently in their sorted order since
     * the tree enforces a O(logn) maximum height.
     * @param opt_comparator Function used to order the tree's nodes.
     */
    constructor(opt_comparator?: Function | null);
    private noStructuralTyping_closure_goog_structs_avltree_AvlTree;
    /**
     * Inserts a node into the tree with the specified value if the tree does
     * not already contain a node with the specified value. If the value is
     * inserted, the tree is balanced to enforce the AVL-Tree height property.
     * @param value Value to insert into the tree.
     * @return Whether value was inserted into the tree.
     */
    add(value: T | null): boolean;
    /**
     * Removes a node from the tree with the specified value if the tree contains a
     * node with this value. If a node is removed the tree is balanced to enforce
     * the AVL-Tree height property. The value of the removed node is returned.
     * @param value Value to find and remove from the tree.
     * @return The value of the removed node or null if the value was not in the tree.
     */
    remove(value: T | null): T | null;
    /**
     * Removes all nodes from the tree.
     */
    clear(): void;
    /**
     * Returns true if the tree contains a node with the specified value, false
     * otherwise.
     * @param value Value to find in the tree.
     * @return Whether the tree contains a node with the specified value.
     */
    contains(value: T | null): boolean;
    /**
     * Returns the index (in an in-order traversal) of the node in the tree with
     * the specified value. For example, the minimum value in the tree will
     * return an index of 0 and the maximum will return an index of n - 1 (where
     * n is the number of nodes in the tree).  If the value is not found then -1
     * is returned.
     * @param value Value in the tree whose in-order index is returned.
     * @return The in-order index of the given value in the tree or -1 if the value is not found.
     */
    indexOf(value: T | null): number;
    /**
     * Returns the number of values stored in the tree.
     * @return The number of values stored in the tree.
     */
    getCount(): number;
    /**
     * Returns a k-th smallest value, based on the comparator, where 0 <= k <
     * this.getCount().
     * @param k The number k.
     * @return The k-th smallest value.
     */
    getKthValue(k: number): T | null;
    /**
     * Returns the value u, such that u is contained in the tree and u < v, for all
     * values v in the tree where v != u.
     * @return The minimum value contained in the tree.
     */
    getMinimum(): T | null;
    /**
     * Returns the value u, such that u is contained in the tree and u > v, for all
     * values v in the tree where v != u.
     * @return The maximum value contained in the tree.
     */
    getMaximum(): T | null;
    /**
     * Returns the height of the tree (the maximum depth). This height should
     * always be <= 1.4405*(Math.log(n+2)/Math.log(2))-1.3277, where n is the
     * number of nodes in the tree.
     * @return The height of the tree.
     */
    getHeight(): number;
    /**
     * Inserts the values stored in the tree into a new Array and returns the Array.
     * @return An array containing all of the trees values in sorted order.
     */
    getValues(): (T | null)[];
    /**
     * Performs an in-order traversal of the tree and calls `func` with each
     * traversed node, optionally starting from the smallest node with a value >= to
     * the specified start value. The traversal ends after traversing the tree's
     * maximum node or when `func` returns a value that evaluates to true.
     * @param func Function to call on each traversed node.
     * @param opt_startValue If specified, traversal will begin on the node with the smallest value >= opt_startValue.
     */
    inOrderTraverse(func: Function | null, opt_startValue?: T | null): void;
    /**
     * Performs a reverse-order traversal of the tree and calls `func` with
     * each traversed node, optionally starting from the largest node with a value
     * <= to the specified start value. The traversal ends after traversing the
     * tree's minimum node or when func returns a value that evaluates to true.
     * @param func Function to call on each traversed node.
     * @param opt_startValue If specified, traversal will begin on the node with the largest value <= opt_startValue.
     */
    reverseOrderTraverse(func: () => any, opt_startValue?: T | null): void;
    /**
     * Copies the AVL tree.
     * @param opt_copy - Function used to copy the elements contained in the tree. The identity function is used by default, which results in a shallow copy of the tree. Copied elements will be compared against their originals using the tree's comparator to ensure the integrity of the copied tree.
     */
    copy(opt_copy?: () => (T | null)): AvlTree<T | null>;
}
export { AvlTree };
