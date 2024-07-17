import { Iterator } from '../iter/iter.js';
/**
 * Class for Hash Map datastructure.
 */
export declare class Map<K = any, V = any> {
    /**
     * Class for Hash Map datastructure.
     * @param opt_map Map or Object to initialize the map with.
     * @param var_args If 2 or more arguments are present then they will be used as key-value pairs.
     */
    constructor(opt_map?: any, ...var_args: any[]);
    private noStructuralTyping_closure_goog_structs_map_Map;
    /**
     * The number of key value pairs in the map.
     */
    size: number;
    getCount(): number;
    /**
     * Returns the values of the map.
     * @return The values in the map.
     */
    getValues(): (V | null)[];
    /**
     * Returns the keys of the map.
     * @return Array of string values.
     */
    getKeys(): string[];
    /**
     * Whether the map contains the given key.
     * @param key The key to check for.
     * @return Whether the map contains the key.
     */
    containsKey(key: any): boolean;
    /**
     * Whether the map contains the given key.
     * @param key The key to check for.
     * @return Whether the map contains the key.
     */
    has(key: any): boolean;
    /**
     * Whether the map contains the given value. This is O(n).
     * @param val The value to check for.
     * @return Whether the map contains the value.
     */
    containsValue(val: V | null): boolean;
    /**
     * Whether this map is equal to the argument map.
     * @param otherMap The map against which to test equality.
     * @param opt_equalityFn Optional equality function to test equality of values. If not specified, this will test whether the values contained in each map are identical objects.
     * @return Whether the maps are equal.
     */
    equals(otherMap: Map | null, opt_equalityFn?: () => boolean): boolean;
    /**
     * Default equality test for values.
     * @param a The first value.
     * @param b The second value.
     * @return Whether a and b reference the same object.
     */
    static defaultEquals(a: any, b: any): boolean;
    isEmpty(): boolean;
    /**
     * Removes all key-value pairs from the map.
     */
    clear(): void;
    /**
     * Removes a key-value pair based on the key. This is O(logN) amortized due to
     * updating the keys array whenever the count becomes half the size of the keys
     * in the keys array.
     * @param key The key to remove.
     * @return Whether object was removed.
     */
    remove(key: any): boolean;
    /**
     * Removes a key-value pair based on the key. This is O(logN) amortized due
     * to updating the keys array whenever the count becomes half the size of
     * the keys in the keys array.
     * @param key The key to remove.
     * @return Whether object was removed.
     */
    delete(key: any): boolean;
    /**
     * Returns the value for the given key.  If the key is not found and the default
     * value is not given this will return `undefined`.
     * @param key The key to get the value for.
     * @param opt_val The value to return if no item is found for the given key, defaults to undefined.
     * @return The value for the given key.
     */
    get<DEFAULT = any>(key: any, opt_val?: DEFAULT | null): V | DEFAULT | null;
    /**
     * Adds a key-value pair to the map.
     * @param key The key.
     * @param value The value to add.
     */
    set(key: any, value: V | null): void;
    /**
     * Adds multiple key-value pairs from another Map or Object.
     * @param map Object containing the data to add.
     */
    addAll(map: object | null): void;
    /**
     * Calls the given function on each entry in the map.
     * @param opt_obj The value of "this" inside f.
     */
    forEach<T = any>(f: (this: T | null) => any, opt_obj?: T | null): void;
    /**
     * Clones a map and returns a new map.
     * @return A new map with the same key-value pairs.
     */
    clone(): Map;
    /**
     * Returns a new map in which all the keys and values are interchanged
     * (keys become values and values become keys). If multiple keys map to the
     * same value, the chosen transposed value is implementation-dependent.
     *
     * It acts very similarly to {goog.object.transpose(Object)}.
     * @return The transposed map.
     */
    transpose(): Map;
    toObject(): object;
    /**
     * Returns an iterator that iterates over the keys in the map.  Removal of keys
     * while iterating might have undesired side effects.
     * @return An iterator over the keys in the map.
     */
    getKeyIterator(): Iterator<any>;
    keys(): IterableIterator<K | null>;
    /**
     * Returns an iterator that iterates over the values in the map.  Removal of
     * keys while iterating might have undesired side effects.
     * @return An iterator over the values in the map.
     */
    getValueIterator(): Iterator<any>;
    values(): IterableIterator<V | null>;
    entries(): IterableIterator<(K | V | null)[]>;
    /**
     * Returns an iterator that iterates over the values or the keys in the map.
     * This throws an exception if the map was mutated since the iterator was
     * created.
     * @param opt_keys True to iterate over the keys. False to iterate over the values.  The default value is false.
     * @return An iterator over the values or keys in the map.
     */
    __iterator__(opt_keys?: boolean): Iterator<any>;
}
