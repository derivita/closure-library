/**
 * A MapLike implements the same public interface as an ES6 Map, without tying
 * the underlying code directly to the implementation. Any additions to this
 * type should also be present on ES6 Maps.
 */
interface MapLike<K = any, V = any> {
    set(key: K | null, val: V | null): any;
    get(key: K | null): V | undefined | null;
    keys(): IterableIterator<K | null>;
    values(): IterableIterator<V | null>;
    has(key: K | null): boolean;
    size: number;
}
export { MapLike };
/**
 * Iterates over each entry in the given entries and sets the entry in
 * the map, overwriting any existing entries for the key.
 * @param map The map to set entries on.
 * @param entries The iterable of entries. This iterable should really be of type Iterable<Array<[K,V]>>, but the tuple type is not representable in the Closure Type System.
 */
declare function setAll<K = any, V = any>(map: MapLike<K | null, V | null>, entries: Iterable<(K | V | null)[]> | null): void;
export { setAll };
/**
 * Determines if a given map contains the given value, optionally using
 * a custom comparison function.
 * @param map The map whose values to check.
 * @param val The value to check for.
 * @param valueEqualityFn The comparison function used to determine if the given value is equivalent to any of the values in the map. If no function is provided, defaults to strict equality (===).
 * @return True iff the given map contains the given value according to the comparison function.
 */
declare function hasValue<V1 = any, V2 = any>(map: MapLike<any, V1 | null>, val: V2 | null, valueEqualityFn?: () => boolean): boolean;
export { hasValue };
/**
 * Compares two maps using their public APIs to determine if they have
 * equal contents, optionally using a custom comparison function when comaring
 * values.
 * @param map The first map
 * @param otherMap The other map
 * @param valueEqualityFn The comparison function used to determine if the values obtained from each map are equivalent. If no function is provided, defaults to strict equality (===).
 */
declare function equals<K = any, V1 = any, V2 = any>(map: MapLike<K | null, V1 | null>, otherMap: MapLike<K | null, V2 | null>, valueEqualityFn?: () => boolean): boolean;
export { equals };
/**
 * Returns a new ES6 Map in which all the keys and values from the
 * given map are interchanged (keys become values and values become keys). If
 * multiple keys in the given map to the same value, the resulting value in the
 * transposed map is implementation-dependent.
 *
 * It acts very similarly to {goog.object.transpose(Object)}.
 * @param map The map to transpose.
 * @return A transposed version of the given map.
 */
declare function transpose<K = any, V = any>(map: MapLike<K | null, V | null>): Map<V | null, K | null>;
export { transpose };
/**
 * ToObject returns a new object whose properties are the keys from the Map.
 * @param map The map to convert into an object.
 * @return An object representation of the Map.
 */
declare function toObject<K = any, V = any>(map: MapLike<K | null, V | null>): {
    [key: string]: V | null;
};
export { toObject };
