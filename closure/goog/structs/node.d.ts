/**
 * A generic immutable node. This can be used in various collections that
 * require a node object for its item (such as a heap).
 */
export declare class Node<K = any, V = any> {
    /**
     * A generic immutable node. This can be used in various collections that
     * require a node object for its item (such as a heap).
     * @param key Key.
     * @param value Value.
     */
    constructor(key: K | null, value: V | null);
    private noStructuralTyping_closure_goog_structs_node_Node;
    /**
     * Gets the key.
     * @return The key.
     */
    getKey(): K | null;
    /**
     * Gets the value.
     * @return The value.
     */
    getValue(): V | null;
    /**
     * Clones a node and returns a new node.
     * @return A new Node with the same key value pair.
     */
    clone(): Node<K | null, V | null>;
}
