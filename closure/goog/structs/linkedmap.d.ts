/**
 * Class for a LinkedMap datastructure, which combines O(1) map access for
 * key/value pairs with a linked list for a consistent iteration order. Sample
 * usage:
 *
 * <pre>
 * var m = new LinkedMap();
 * m.set('param1', 'A');
 * m.set('param2', 'B');
 * m.set('param3', 'C');
 * alert(m.getKeys()); // param1, param2, param3
 *
 * var c = new LinkedMap(5, true);
 * for (var i = 0; i < 10; i++) {
 * c.set('entry' + i, false);
 * }
 * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
 *
 * c.set('entry5', true);
 * c.set('entry1', false);
 * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
 * </pre>
 */
export declare class LinkedMap<KEY = any, VALUE = any> {
    /**
     * Class for a LinkedMap datastructure, which combines O(1) map access for
     * key/value pairs with a linked list for a consistent iteration order. Sample
     * usage:
     *
     * <pre>
     * var m = new LinkedMap();
     * m.set('param1', 'A');
     * m.set('param2', 'B');
     * m.set('param3', 'C');
     * alert(m.getKeys()); // param1, param2, param3
     *
     * var c = new LinkedMap(5, true);
     * for (var i = 0; i < 10; i++) {
     * c.set('entry' + i, false);
     * }
     * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
     *
     * c.set('entry5', true);
     * c.set('entry1', false);
     * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
     * </pre>
     * @param opt_maxCount The maximum number of objects to store in the LinkedMap. If unspecified or 0, there is no maximum.
     * @param opt_cache When set, the LinkedMap stores items in order from most recently used to least recently used, instead of insertion order.
     * @param opt_evictionCallback Called with the removed stringified key as the first argument and value as the second argument after the key was evicted from the LRU because the max count was reached.
     */
    constructor(opt_maxCount?: number, opt_cache?: boolean, opt_evictionCallback?: () => any);
    private noStructuralTyping_closure_goog_structs_linkedmap_LinkedMap;
    /**
     * Retrieves the value for a given key. If this is a caching LinkedMap, the
     * entry will become the most recently used.
     * @param key The key to retrieve the value for.
     * @param opt_val A default value that will be returned if the key is not found, defaults to undefined.
     * @return The retrieved value.
     */
    get(key: string, opt_val?: VALUE | null): VALUE | null;
    /**
     * Retrieves the value for a given key without updating the entry to be the
     * most recently used.
     * @param key The key to retrieve the value for.
     * @param opt_val A default value that will be returned if the key is not found.
     * @return The retrieved value.
     */
    peekValue(key: string, opt_val?: VALUE | null): VALUE | null;
    /**
     * Sets a value for a given key. If this is a caching LinkedMap, this entry
     * will become the most recently used.
     * @param key Key with which the specified value is to be associated.
     * @param value Value to be associated with the specified key.
     */
    set(key: string, value: VALUE | null): void;
    /**
     * Returns the value of the first node without making any modifications.
     * @return The value of the first node or undefined if the map is empty.
     */
    peek(): VALUE | null;
    /**
     * Returns the value of the last node without making any modifications.
     * @return The value of the last node or undefined if the map is empty.
     */
    peekLast(): VALUE | null;
    /**
     * Removes the first node from the list and returns its value.
     * @return The value of the popped node, or undefined if the map was empty.
     */
    shift(): VALUE | null;
    /**
     * Removes the last node from the list and returns its value.
     * @return The value of the popped node, or undefined if the map was empty.
     */
    pop(): VALUE | null;
    /**
     * Removes a value from the LinkedMap based on its key.
     * @param key The key to remove.
     * @return True if the entry was removed, false if the key was not found.
     */
    remove(key: string): boolean;
    /**
     * Removes a node from the `LinkedMap`. It can be overridden to do
     * further cleanup such as disposing of the node value.
     * @param node The node to remove.
     */
    protected removeNode(node: LinkedMap.Node_<string, VALUE | null>): void;
    getCount(): number;
    isEmpty(): boolean;
    /**
     * Sets a callback that fires when an entry is evicted because max entry
     * count is reached. The callback is called with the removed stringified key
     * as the first argument and value as the second argument after the key was
     * evicted from the LRU because the max count was reached.
     */
    setEvictionCallback(evictionCallback: () => any): void;
    /**
     * Sets the maximum number of entries allowed in this object, truncating any
     * excess objects if necessary.
     * @param maxCount The new maximum number of entries to allow.
     */
    setMaxCount(maxCount: number): void;
    getKeys(): string[];
    getValues(): (VALUE | null)[];
    /**
     * Tests whether a provided value is currently in the LinkedMap. This does not
     * affect item ordering in cache-style LinkedMaps.
     * @param value The value to check for.
     * @return Whether the value is in the LinkedMap.
     */
    contains(value: VALUE | null): boolean;
    /**
     * Tests whether a provided key is currently in the LinkedMap. This does not
     * affect item ordering in cache-style LinkedMaps.
     * @param key The key to check for.
     * @return Whether the key is in the LinkedMap.
     */
    containsKey(key: string): boolean;
    /**
     * Removes all entries in this object.
     */
    clear(): void;
    /**
     * Calls a function on each item in the LinkedMap.
     * @param opt_obj The value of "this" inside f.
     */
    forEach<T = any>(f: (this: T | null) => any, opt_obj?: T | null): void;
    /**
     * Calls a function on each item in the LinkedMap and returns the results of
     * those calls in an array.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the LinkedMap.
     * @param opt_obj The object context to use as "this" for the function.
     * @return The results of the function calls for each item in the LinkedMap.
     */
    map<T = any, RESULT = any>(f: (this: T | null) => (RESULT | null), opt_obj?: T | null): (RESULT | null)[];
    /**
     * Calls a function on each item in the LinkedMap and returns true if any of
     * those function calls returns a true-like value.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the LinkedMap, and returns a boolean.
     * @param opt_obj The object context to use as "this" for the function.
     * @return Whether f evaluates to true for at least one item in the LinkedMap.
     */
    some<T = any>(f: (this: T | null) => boolean, opt_obj?: T | null): boolean;
    /**
     * Calls a function on each item in the LinkedMap and returns true only if every
     * function call returns a true-like value.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the Cache, and returns a boolean.
     * @param opt_obj The object context to use as "this" for the function.
     * @return Whether f evaluates to true for every item in the Cache.
     */
    every<T = any>(f: (this: T | null) => boolean, opt_obj?: T | null): boolean;
}
export declare namespace LinkedMap {
    /**
     * Internal class for a doubly-linked list node containing a key/value pair.
     */
    class Node_<KEY = any, VALUE = any> {
        /**
         * Internal class for a doubly-linked list node containing a key/value pair.
         * @param key The key.
         * @param value The value.
         */
        constructor(key: KEY | null, value: VALUE | null);
        private noStructuralTyping_closure_goog_structs_linkedmap_Node_;
        key: KEY | null;
        value: VALUE | null;
        /**
         * The next node in the list.
         */
        next: LinkedMap.Node_<KEY | null, VALUE | null>;
        /**
         * The previous node in the list.
         */
        prev: LinkedMap.Node_<KEY | null, VALUE | null>;
        /**
         * Causes this node to remove itself from the list.
         */
        remove(): void;
    }
}
