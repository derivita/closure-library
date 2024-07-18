/**
 * Class for Hash Map datastructure.
 */
declare class UiMap<K = any, V = any> {
    /**
     * Class for Hash Map datastructure.
     * @param map Map or Object to initialize the map with.
     */
    constructor(map?: any);
    private noStructuralTyping_closure_goog_ui_map_UiMap;
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
    getKeys(): (K | null)[];
    /**
     * Whether the map contains the given key.
     * @param key The key to check for.
     * @return Whether the map contains the key.
     */
    containsKey(key: K | null): boolean;
    /**
     * Whether the map contains the given value. This is O(n).
     * @param val The value to check for.
     * @return Whether the map contains the value.
     */
    containsValue(val: V | null): boolean;
    /**
     * Whether this map is equal to the argument map.
     * @param otherMap The map against which to test equality.
     * @param equalityFn Optional equality function to test equality of values. If not specified, this will test whether the values contained in each map are identical objects.
     * @return Whether the maps are equal.
     */
    equals(otherMap: UiMap, equalityFn?: () => boolean): boolean;
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
    remove(key: K | null): boolean;
    /**
     * Returns the value for the given key.  If the key is not found and the default
     * value is not given this will return `undefined`.
     * @param key The key to get the value for.
     * @param defaultValue The value to return if no item is found for the given key, defaults to undefined.
     * @return The value for the given key.
     */
    get<DEFAULT = any>(key: any, defaultValue?: DEFAULT | null): V | DEFAULT | null;
    /**
     * Adds a key-value pair to the map.
     * @param key The key.
     * @param value The value to add.
     * @return Some subclasses return a value.
     */
    set(key: any, value: V | null): this;
    /**
     * Adds multiple key-value pairs from another goog.ui.Map or Object.
     * @param map Object containing the data to add.
     */
    addAll(map: {
        [key: string]: V | null;
    }): void;
    /**
     * Calls the given function on each entry in the map.
     * @param thisArg The value of "this" inside callbackFn.
     */
    forEach<T = any>(callbackFn: (this: T | null) => any, thisArg?: T | null): void;
    /**
     * Clones a map and returns a new map.
     * @return A new map with the same key-value pairs.
     */
    clone(): UiMap;
    toObject(): object;
}
export { UiMap };
