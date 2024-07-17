/**
 * Class for a Heap datastructure.
 */
declare class Heap<K = any, V = any> {
    constructor(opt_heap?: Heap | object | null);
    /**
     * Insert the given value into the heap with the given key.
     */
    insert(key: K | null, value: V | null): void;
    /**
     * Adds multiple key-value pairs from another Heap or Object
     */
    insertAll(heap: Heap | object | null): void;
    /**
     * Retrieves and removes the root value of this heap.
     */
    remove(): V | null;
    /**
     * Retrieves but does not remove the root value of this heap.
     */
    peek(): V | null;
    /**
     * Retrieves but does not remove the key of the root node of this heap.
     */
    peekKey(): K | null;
    /**
     * Gets the values of the heap.
     */
    getValues(): (V | null)[];
    /**
     * Gets the keys of the heap.
     */
    getKeys(): (K | null)[];
    /**
     * Whether the heap contains the given value.
     */
    containsValue(val: V | null): boolean;
    /**
     * Whether the heap contains the given key.
     */
    containsKey(key: K | null): boolean;
    /**
     * Clones a heap and returns a new heap
     */
    clone(): Heap;
    /**
     * The number of key-value pairs in the map
     */
    getCount(): number;
    /**
     * Returns true if this heap contains no elements.
     */
    isEmpty(): boolean;
    /**
     * Removes all elements from the heap.
     */
    clear(): void;
}
export { Heap };
