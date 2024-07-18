/**
 * Calls a function for each element in an object/map/hash.
 * @param obj The object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the value, the key and the object) and the return value is ignored.
 * @param opt_obj This is used as the 'this' object within f.
 */
declare function forEach<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => any, opt_obj?: T | null): void;
/**
 * Calls a function for each element in an object/map/hash. If that call returns
 * true, adds the element to a new object.
 * @param obj The object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the value, the key and the object) and should return a boolean. If the return value is true the element is added to the result object. If it is false the element is not included.
 * @param opt_obj This is used as the 'this' object within f.
 * @return a new object in which only elements that passed the test are present.
 */
declare function filter<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => boolean, opt_obj?: T | null): {
    [key: string]: V | null;
};
/**
 * For every element in an object/map/hash calls a function and inserts the
 * result into a new object.
 * @param obj The object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the value, the key and the object) and should return something. The result will be inserted into a new object.
 * @param opt_obj This is used as the 'this' object within f.
 * @return a new object with the results from f.
 */
declare function map<T = any, K = any, V = any, R = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => (R | null), opt_obj?: T | null): {
    [key: string]: R | null;
};
/**
 * Calls a function for each element in an object/map/hash. If any
 * call returns true, returns true (without checking the rest). If
 * all calls return false, returns false.
 * @param obj The object to check.
 * @param f The function to call for every element. This function takes 3 arguments (the value, the key and the object) and should return a boolean.
 * @param opt_obj This is used as the 'this' object within f.
 * @return true if any element passes the test.
 */
declare function some<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => boolean, opt_obj?: T | null): boolean;
/**
 * Calls a function for each element in an object/map/hash. If
 * all calls return true, returns true. If any call returns false, returns
 * false at this point and does not continue to check the remaining elements.
 * @param obj The object to check.
 * @param f The function to call for every element. This function takes 3 arguments (the value, the key and the object) and should return a boolean.
 * @param opt_obj This is used as the 'this' object within f.
 * @return false if any element fails the test.
 */
declare function every<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: ((this: T | null) => boolean) | null, opt_obj?: T | null): boolean;
/**
 * Returns the number of key-value pairs in the object map.
 * @param obj The object for which to get the number of key-value pairs.
 * @return The number of key-value pairs in the object map.
 */
declare function getCount(obj: object | null): number;
/**
 * Returns one key from the object map, if any exists.
 * For map literals the returned key will be the first one in most of the
 * browsers (a know exception is Konqueror).
 * @param obj The object to pick a key from.
 * @return The key or undefined if the object is empty.
 */
declare function getAnyKey(obj: object | null): string | undefined;
/**
 * Returns one value from the object map, if any exists.
 * For map literals the returned value will be the first one in most of the
 * browsers (a know exception is Konqueror).
 * @param obj The object to pick a value from.
 * @return The value or undefined if the object is empty.
 */
declare function getAnyValue<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null): V | undefined | null;
/**
 * Whether the object/hash/map contains the given object as a value.
 * An alias for containsValue(obj, val).
 * @param obj The object in which to look for val.
 * @param val The object for which to check.
 * @return true if val is present.
 */
declare function contains<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, val: V | null): boolean;
/**
 * Returns the values of the object/map/hash.
 * @param obj The object from which to get the values.
 * @return The values in the object/map/hash.
 */
declare function getValues<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null): (V | null)[];
/**
 * Returns the keys of the object/map/hash.
 * @param obj The object from which to get the keys.
 * @return Array of property keys.
 */
declare function getKeys(obj: object | null): string[];
/**
 * Get a value from an object multiple levels deep.  This is useful for
 * pulling values from deeply nested objects, such as JSON responses.
 * Example usage: getValueByKeys(jsonObj, 'foo', 'entries', 3)
 * @param obj An object to get the value from. Can be array-like.
 * @param var_args A number of keys (as strings, or numbers, for array-like objects). Can also be specified as a single array of keys.
 * @return The resulting value. If, at any point, the value for a key in the current object is null or undefined, returns undefined.
 */
declare function getValueByKeys(obj: object | null, ...var_args: (string | number | ArrayLike<number | string>)[]): any;
/**
 * Whether the object/map/hash contains the given key.
 * @param obj The object in which to look for key.
 * @param key The key for which to check.
 * @return true If the map contains the key.
 */
declare function containsKey(obj: object | null, key: any): boolean;
/**
 * Whether the object/map/hash contains the given value. This is O(n).
 * @param obj The object in which to look for val.
 * @param val The value for which to check.
 * @return true If the map contains the value.
 */
declare function containsValue<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, val: V | null): boolean;
/**
 * Searches an object for an element that satisfies the given condition and
 * returns its key.
 * @param obj The object to search in.
 * @param f The function to call for every element. Takes 3 arguments (the value, the key and the object) and should return a boolean.
 * @param thisObj An optional "this" context for the function.
 * @return The key of an element for which the function returns true or undefined if no such element is found.
 */
declare function findKey<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => boolean, thisObj?: T | null): string | undefined;
/**
 * Searches an object for an element that satisfies the given condition and
 * returns its value.
 * @param obj The object to search in.
 * @param f The function to call for every element. Takes 3 arguments (the value, the key and the object) and should return a boolean.
 * @param thisObj An optional "this" context for the function.
 * @return The value of an element for which the function returns true or undefined if no such element is found.
 */
declare function findValue<T = any, K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, f: (this: T | null) => boolean, thisObj?: T | null): V | null;
/**
 * Whether the object/map/hash is empty.
 * @param obj The object to test.
 * @return true if obj is empty.
 */
declare function isEmpty(obj: object | null): boolean;
/**
 * Removes all key value pairs from the object/map/hash.
 * @param obj The object to clear.
 */
declare function clear(obj: object | null): void;
/**
 * Removes a key-value pair based on the key.
 * @param obj The object from which to remove the key.
 * @param key The key to remove.
 * @return Whether an element was removed.
 */
declare function remove(obj: object | null, key: any): boolean;
/**
 * Adds a key-value pair to the object. Throws an exception if the key is
 * already in use. Use set if you want to change an existing pair.
 * @param obj The object to which to add the key-value pair.
 * @param key The key to add.
 * @param val The value to add.
 */
declare function add<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, key: string, val: V | null): void;
/**
 * Returns the value for the given key.
 * @param obj The object from which to get the value.
 * @param key The key for which to get the value.
 * @param val The value to return if no item is found for the given key (default is undefined).
 * @return The value for the given key.
 */
declare function get<K = any, V = any, R = any>(obj: {
    [key: string]: V | null;
} | null, key: string, val?: R | null): V | R | undefined | null;
/**
 * Adds a key-value pair to the object/map/hash.
 * @param obj The object to which to add the key-value pair.
 * @param key The key to add.
 * @param value The value to add.
 */
declare function set<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, key: string, value: V | null): void;
/**
 * Adds a key-value pair to the object/map/hash if it doesn't exist yet.
 * @param obj The object to which to add the key-value pair.
 * @param key The key to add.
 * @param value The value to add if the key wasn't present.
 * @return The value of the entry at the end of the function.
 */
declare function setIfUndefined<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, key: string, value: V | null): V | null;
/**
 * Sets a key and value to an object if the key is not set. The value will be
 * the return value of the given function. If the key already exists, the
 * object will not be changed and the function will not be called (the function
 * will be lazily evaluated -- only called if necessary).
 * This function is particularly useful when used with an `Object` which is
 * acting as a cache.
 * @param obj The object to which to add the key-value pair.
 * @param key The key to add.
 * @param f The value to add if the key wasn't present.
 * @return The value of the entry at the end of the function.
 */
declare function setWithReturnValueIfNotSet<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null, key: string, f: () => (V | null)): V | null;
/**
 * Compares two objects for equality using === on the values.
 */
declare function equals<K = any, V = any>(a: {
    [key: string]: V | null;
}, b: {
    [key: string]: V | null;
}): boolean;
/**
 * Returns a shallow clone of the object.
 * @param obj Object to clone.
 * @return Clone of the input object.
 */
declare function clone<K = any, V = any>(obj: {
    [key: string]: V | null;
} | null): {
    [key: string]: V | null;
};
/**
 * Clones a value. The input may be an Object, Array, or basic type. Objects and
 * arrays will be cloned recursively.
 * WARNINGS:
 * <code>unsafeClone</code> does not detect reference loops. Objects
 * that refer to themselves will cause infinite recursion.
 * <code>unsafeClone</code> is unaware of unique identifiers, and
 * copies UIDs created by <code>getUid</code> into cloned results.
 * @param obj The value to clone.
 * @return A clone of the input value.
 */
declare function unsafeClone<T = any>(obj: T | null): T | null;
/**
 * Returns a new object in which all the keys and values are interchanged
 * (keys become values and values become keys). If multiple keys map to the
 * same value, the chosen transposed value is implementation-dependent.
 * @param obj The object to transpose.
 * @return The transposed object.
 */
declare function transpose(obj: object | null): object;
/**
 * Extends an object with another object.
 * This operates 'in-place'; it does not create a new Object.
 * Example:
 * var o = {};
 * extend(o, {a: 0, b: 1});
 * o; // {a: 0, b: 1}
 * extend(o, {b: 2, c: 3});
 * o; // {a: 0, b: 2, c: 3}
 * @param target The object to modify. Existing properties will be overwritten if they are also present in one of the objects in `var_args`.
 * @param var_args The objects from which values will be copied.
 */
declare function extend(target: object | null, ...var_args: (object | undefined | null)[]): void;
/**
 * Creates a new object built from the key-value pairs provided as arguments.
 * @param var_args If only one argument is provided and it is an array then this is used as the arguments, otherwise even arguments are used as the property names and odd arguments are used as the property values.
 * @return The new object.
 */
declare function create(...var_args: any[]): object;
/**
 * Creates a new object where the property names come from the arguments but
 * the value is always set to true
 * @param var_args If only one argument is provided and it is an array then this is used as the arguments, otherwise the arguments are used as the property names.
 * @return The new object.
 */
declare function createSet(...var_args: any[]): object;
/**
 * Creates an immutable view of the underlying object, if the browser
 * supports immutable objects.
 * In default mode, writes to this view will fail silently. In strict mode,
 * they will throw an error.
 * @param obj An object.
 * @return An immutable view of that object, or the original object if this browser does not support immutables.
 */
declare function createImmutableView<K = any, V = any>(obj: {
    [key: string]: V | null;
}): {
    [key: string]: V | null;
};
/**
 *
 * @param obj An object.
 * @return Whether this is an immutable view of the object.
 */
declare function isImmutableView(obj: object): boolean;
/**
 * Get all properties names on a given Object regardless of enumerability.
 * <p> If the browser does not support `Object.getOwnPropertyNames` nor
 * `Object.getPrototypeOf` then this is equivalent to using
 * `getKeys`
 * @param obj The object to get the properties of.
 * @param includeObjectPrototype Whether properties defined on `Object.prototype` should be included in the result.
 * @param includeFunctionPrototype Whether properties defined on `Function.prototype` should be included in the result.
 */
declare function getAllPropertyNames(obj: object | null, includeObjectPrototype?: boolean, includeFunctionPrototype?: boolean): string[];
/**
 * Given a ES5 or ES6 class reference, return its super class / super
 * constructor.
 * This should be used in rare cases where you need to walk up the inheritance
 * tree (this is generally a bad idea). But this work with ES5 and ES6 classes,
 * unlike relying on the superClass_ property.
 * Note: To start walking up the hierarchy from an instance call this with its
 * `constructor` property; e.g. `getSuperClass(instance.constructor)`.
 */
declare function getSuperClass(constructor: {
    new (): any;
}): object | null;
declare const _default: {
    add: typeof add;
    clear: typeof clear;
    clone: typeof clone;
    contains: typeof contains;
    containsKey: typeof containsKey;
    containsValue: typeof containsValue;
    create: typeof create;
    createImmutableView: typeof createImmutableView;
    createSet: typeof createSet;
    equals: typeof equals;
    every: typeof every;
    extend: typeof extend;
    filter: typeof filter;
    findKey: typeof findKey;
    findValue: typeof findValue;
    forEach: typeof forEach;
    get: typeof get;
    getAllPropertyNames: typeof getAllPropertyNames;
    getAnyKey: typeof getAnyKey;
    getAnyValue: typeof getAnyValue;
    getCount: typeof getCount;
    getKeys: typeof getKeys;
    getSuperClass: typeof getSuperClass;
    getValueByKeys: typeof getValueByKeys;
    getValues: typeof getValues;
    isEmpty: typeof isEmpty;
    isImmutableView: typeof isImmutableView;
    map: typeof map;
    remove: typeof remove;
    set: typeof set;
    setIfUndefined: typeof setIfUndefined;
    setWithReturnValueIfNotSet: typeof setWithReturnValueIfNotSet;
    some: typeof some;
    transpose: typeof transpose;
    unsafeClone: typeof unsafeClone;
};
export default _default;
