/**
 * Returns the number of values in the collection-like object.
 * @param col The collection-like object.
 * @return The number of values in the collection-like object.
 */
export declare function getCount(col: object | null): number;
/**
 * Returns the values of the collection-like object.
 * @param col The collection-like object.
 * @return The values in the collection-like object.
 */
export declare function getValues(col: object | null): any[];
/**
 * Returns the keys of the collection. Some collections have no notion of
 * keys/indexes and this function will return undefined in those cases.
 * @param col The collection-like object.
 * @return The keys in the collection.
 */
export declare function getKeys(col: object | null): any[] | undefined;
/**
 * Whether the collection contains the given value. This is O(n) and uses
 * equals (==) to test the existence.
 * @param col The collection-like object.
 * @param val The value to check for.
 * @return True if the map contains the value.
 */
export declare function contains(col: object | null, val: any): boolean;
/**
 * Whether the collection is empty.
 * @param col The collection-like object.
 * @return True if empty.
 */
export declare function isEmpty(col: object | null): boolean;
/**
 * Removes all the elements from the collection.
 * @param col The collection-like object.
 */
export declare function clear(col: object | null): void;
/**
 * Calls a function for each value in a collection. The function takes
 * three arguments; the value, the key and the collection.
 * @param col The collection-like object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, the key or undefined if the collection has no notion of keys, and the collection) and the return value is irrelevant.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 */
export declare function forEach<T = any, S = any>(col: S | null, f: (this: T | null) => any, opt_obj?: T | null): void;
/**
 * Calls a function for every value in the collection. When a call returns true,
 * adds the value to a new collection (Array is returned by default).
 * @param col The collection-like object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, the key or undefined if the collection has no notion of keys, and the collection) and should return a Boolean. If the return value is true the value is added to the result collection. If it is false the value is not included.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new collection where the passed values are present. If col is a key-less collection an array is returned.  If col has keys and values a plain old JS object is returned.
 */
export declare function filter<T = any, S = any>(col: S | null, f: (this: T | null) => boolean, opt_obj?: T | null): object | any[];
/**
 * Calls a function for every value in the collection and adds the result into a
 * new collection (defaults to creating a new Array).
 * @param col The collection-like object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, the key or undefined if the collection has no notion of keys, and the collection) and should return something. The result will be used as the value in the new collection.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new collection with the new values.  If col is a key-less collection an array is returned.  If col has keys and values a plain old JS object is returned.
 */
export declare function map<T = any, S = any, V = any>(col: S | null, f: (this: T | null) => (V | null), opt_obj?: T | null): {
    [key: string]: V | null;
} | (V | null)[];
/**
 * Calls f for each value in a collection. If any call returns true this returns
 * true (without checking the rest). If all returns false this returns false.
 * @param col The collection-like object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, the key or undefined if the collection has no notion of keys, and the collection) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return True if any value passes the test.
 */
export declare function some<T = any, S = any>(col: S | null, f: (this: T | null) => boolean, opt_obj?: T | null): boolean;
/**
 * Calls f for each value in a collection. If all calls return true this return
 * true this returns true. If any returns false this returns false at this point
 * and does not continue to check the remaining values.
 * @param col The collection-like object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, the key or undefined if the collection has no notion of keys, and the collection) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return True if all key-value pairs pass the test.
 */
export declare function every<T = any, S = any>(col: S | null, f: (this: T | null) => boolean, opt_obj?: T | null): boolean;
