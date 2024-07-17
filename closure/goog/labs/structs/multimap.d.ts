/**
 * Creates a new multimap.
 */
export declare class Multimap<K = any, V = any> {
    constructor();
    /**
     * Clears the multimap.
     */
    clear(): void;
    /**
     * Clones this multimap.
     */
    clone(): Multimap<K | null, V | null>;
    /**
     * Adds the given (key, value) pair to the map. The (key, value) pair
     * is guaranteed to be added.
     */
    add(key: K | null, value: V | null): void;
    /**
     * Stores a collection of values to the given key. Does not replace
     * existing (key, value) pairs.
     */
    addAllValues(key: K | null, values: (V | null)[]): void;
    /**
     * Adds the contents of the given map/multimap to this multimap.
     */
    addAllFromMultimap(map: Multimap<K | null, V | null>): void;
    /**
     * Replaces all the values for the given key with the given values.
     */
    replaceValues(key: K | null, values: (V | null)[]): void;
    /**
     * Gets the values correspond to the given key.
     */
    get(key: K | null): (V | null)[];
    /**
     * Removes a single occurrence of (key, value) pair.
     */
    remove(key: K | null, value: V | null): boolean;
    /**
     * Removes all values corresponding to the given key.
     */
    removeAll(key: K | null): boolean;
    isEmpty(): boolean;
    getCount(): number;
    containsEntry(key: K | null, value: V | null): boolean;
    containsKey(key: K | null): boolean;
    containsValue(value: V | null): boolean;
    getKeys(): (K | null)[];
    getValues(): (V | null)[];
    getEntries(): (K | V | null)[][];
}
