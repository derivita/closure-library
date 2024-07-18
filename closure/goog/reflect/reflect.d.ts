/**
 * Syntax for object literal casts.
 * @param type Type to cast to.
 * @param object Object literal to cast.
 * @return The object literal.
 */
export declare function object(type: Function, object: object | null): object | null;
/**
 * Syntax for renaming property strings.
 * @param prop Name of the property
 * @param object Instance of the object whose type will be used for renaming
 * @return The renamed property.
 */
export declare function objectProperty(prop: string, object: object): string;
/**
 * To assert to the compiler that an operation is needed when it would
 * otherwise be stripped. For example:
 * <code>
 * // Force a layout
 * sinkValue(dialog.offsetHeight);
 * </code>
 */
export declare function sinkValue<T = any>(x: T | null): T | null;
/**
 * Check if a property can be accessed without throwing an exception.
 * @param obj The owner of the property.
 * @param prop The property name.
 * @return Whether the property is accessible. Will also return true if obj is null.
 */
export declare function canAccessProperty(obj: object | null, prop: string): boolean;
/**
 * Retrieves a value from a cache given a key. The compiler provides special
 * consideration for this call such that it is generally considered side-effect
 * free. However, if the `opt_keyFn` or `valueFn` have side-effects
 * then the entire call is considered to have side-effects.
 *
 * Conventionally storing the value on the cache would be considered a
 * side-effect and preclude unused calls from being pruned, ie. even if
 * the value was never used, it would still always be stored in the cache.
 *
 * Providing a side-effect free `valueFn` and `opt_keyFn`
 * allows unused calls to `cache` to be pruned.
 * @param cacheObj The object that contains the cached values.
 * @param key The key to lookup in the cache. If it is not string or number then a `opt_keyFn` should be provided. The key is also used as the parameter to the `valueFn`.
 * @param valueFn The value provider to use to calculate the value to store in the cache. This function should be side-effect free to take advantage of the optimization.
 * @param opt_keyFn The key provider to determine the cache map key. This should be used if the given key is not a string or number. If not provided then the given key is used. This function should be side-effect free to take advantage of the optimization.
 * @return The cached or calculated value.
 */
export declare function cache<K = any, V = any>(cacheObj: {
    [key: string]: V | null;
}, key: any, valueFn: () => (V | null), opt_keyFn?: () => (K | null)): V | null;
