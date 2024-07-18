/**
 * Decorator around functions that caches the inner function's return values.
 *
 * To cache parameterless functions, see goog.functions.cacheReturnValue.
 * @param f The function to wrap. Its return value may only depend on its arguments and 'this' context. There may be further restrictions on the arguments depending on the capabilities of the serializer used.
 * @param serializer A function to serialize f's arguments. It must have the same signature as goog.memoize.simpleSerializer. It defaults to that function.
 * @return The wrapped function.
 */
declare function memoize(f: Function | null, serializer?: () => string): Function;
declare namespace memoize {
    var ENABLE_MEMOIZE: boolean;
}
export { memoize };
/**
 * Clears the memoization cache on the given object.
 * @param cacheOwner The owner of the cache.
 */
declare const clearCache: (cacheOwner: object | null) => void;
export { clearCache };
/**
 * Simple and fast argument serializer function for goog.memoize.
 * Supports string, number, boolean, null and undefined arguments. Doesn't
 * support \x0B characters in the strings.
 */
declare const simpleSerializer: string;
export { simpleSerializer };
