declare const ASSUME_NATIVE_FUNCTIONS: boolean;
export { ASSUME_NATIVE_FUNCTIONS };
/**
 * Returns the last element in an array without removing it.
 * Same as {@link goog.array.last}.
 * @param array The array.
 * @return Last item in array.
 */
declare function peek<T = any>(array: ArrayLike<T | null> | string | null): T | null;
export { peek };
/**
 * Returns the last element in an array without removing it.
 * Same as {@link goog.array.peek}.
 * @param array The array.
 * @return Last item in array.
 */
export declare function last<T = any>(a: ArrayLike<T | null> | string | null): T | null;
/**
 * Returns the index of the first element of an array with a specified value, or
 * -1 if the element is not present in the array.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-indexof}
 * @param arr The array to be searched.
 * @param obj The object for which we are searching.
 * @param opt_fromIndex The index at which to start the search. If omitted the search starts at index 0.
 * @return The index of the first matching array element.
 */
declare function indexOf<T = any>(arr: ArrayLike<T | null> | string | null, obj: T | null, opt_fromIndex?: number): number;
export { indexOf };
/**
 * Returns the index of the last element of an array with a specified value, or
 * -1 if the element is not present in the array.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-lastindexof}
 * @param arr The array to be searched.
 * @param obj The object for which we are searching.
 * @param opt_fromIndex The index at which to start the search. If omitted the search starts at the end of the array.
 * @return The index of the last matching array element.
 */
declare function lastIndexOf<T = any>(arr: ArrayLike<T | null> | string, obj: T | null, opt_fromIndex?: number | null): number;
export { lastIndexOf };
/**
 * Calls a function for each element in an array. Skips holes in the array.
 * See {@link http://tinyurl.com/developer-mozilla-org-array-foreach}
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array). The return value is ignored.
 * @param opt_obj The object to be used as the value of 'this' within f.
 */
declare function forEach<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => any) | null, opt_obj?: S | null): void;
export { forEach };
/**
 * Calls a function for each element in an array, starting from the last
 * element rather than the first.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array). The return value is ignored.
 * @param opt_obj The object to be used as the value of 'this' within f.
 */
declare function forEachRight<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => any) | null, opt_obj?: S | null): void;
export { forEachRight };
/**
 * Calls a function for each element in an array, and if the function returns
 * true adds the element to a new array.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-filter}
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and must return a Boolean. If the return value is true the element is added to the result array. If it is false the element is not included.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return a new array in which only elements that passed the test are present.
 */
declare function filter<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): (T | null)[];
export { filter };
/**
 * Calls a function for each element in an array and inserts the result into a
 * new array.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-map}
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return something. The result will be inserted into a new array.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return a new array with the results from f.
 */
declare function map<THIS = any, VALUE = any, RESULT = any>(arr: ArrayLike<VALUE | null> | string | null, f: (this: THIS | null) => (RESULT | null), opt_obj?: THIS | null): (RESULT | null)[];
export { map };
/**
 * Passes every element of an array into a function and accumulates the result.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-reduce}
 * Note that this implementation differs from the native Array.prototype.reduce
 * in that the initial value is assumed to be defined (the MDN docs linked above
 * recommend not omitting this parameter, although it is technically optional).
 *
 * For example:
 * var a = [1, 2, 3, 4];
 * reduce(a, function(r, v, i, arr) {return r + v;}, 0);
 * returns 10
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 4 arguments (the function's previous result or the initial value, the value of the current array element, the current array index, and the array itself) function(previousValue, currentValue, index, array).
 * @param val The initial value to pass into the function on the first call.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return Result of evaluating f repeatedly across the values of the array.
 */
declare function reduce<T = any, S = any, R = any>(arr: ArrayLike<T | null> | string | null, f: (this: S | null) => (R | null), val: any, opt_obj?: S | null): R | null;
export { reduce };
/**
 * Passes every element of an array into a function and accumulates the result,
 * starting from the last element and working towards the first.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-reduceright}
 *
 * For example:
 * var a = ['a', 'b', 'c'];
 * reduceRight(a, function(r, v, i, arr) {return r + v;}, '');
 * returns 'cba'
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 4 arguments (the function's previous result or the initial value, the value of the current array element, the current array index, and the array itself) function(previousValue, currentValue, index, array).
 * @param val The initial value to pass into the function on the first call.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return Object returned as a result of evaluating f repeatedly across the values of the array.
 */
declare function reduceRight<T = any, S = any, R = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => (R | null)) | null, val: any, opt_obj?: S | null): R | null;
export { reduceRight };
/**
 * Calls f for each element of an array. If any call returns true, some()
 * returns true (without checking the remaining elements). If all calls
 * return false, some() returns false.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-some}
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return true if any element passes the test.
 */
declare function some<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): boolean;
export { some };
/**
 * Call f for each element of an array. If all calls return true, every()
 * returns true. If any call returns false, every() returns false and
 * does not continue to check the remaining elements.
 *
 * See {@link http://tinyurl.com/developer-mozilla-org-array-every}
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return false if any element fails the test.
 */
declare function every<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): boolean;
export { every };
/**
 * Counts the array elements that fulfill the predicate, i.e. for which the
 * callback function returns true. Skips holes in the array.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. Takes 3 arguments (the element, the index and the array).
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return The number of the matching elements.
 */
declare function count<T = any, S = any>(arr: ArrayLike<T | null> | string, f: (this: S | null) => boolean, opt_obj?: S | null): number;
export { count };
/**
 * Search an array for the first element that satisfies a given condition and
 * return that element.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return The first array element that passes the test, or null if no element is found.
 */
declare function find<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): T | null | null;
export { find };
/**
 * Search an array for the first element that satisfies a given condition and
 * return its index.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return The index of the first array element that passes the test, or -1 if no element is found.
 */
declare function findIndex<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): number;
export { findIndex };
/**
 * Search an array (in reverse order) for the last element that satisfies a
 * given condition and return that element.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return The last array element that passes the test, or null if no element is found.
 */
declare function findRight<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): T | null | null;
export { findRight };
/**
 * Search an array (in reverse order) for the last element that satisfies a
 * given condition and return its index.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return The index of the last array element that passes the test, or -1 if no element is found.
 */
declare function findIndexRight<T = any, S = any>(arr: ArrayLike<T | null> | string | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): number;
export { findIndexRight };
/**
 * Whether the array contains the given object.
 * @param arr The array to test for the presence of the element.
 * @param obj The object for which to test.
 * @return true if obj is present.
 */
declare function contains(arr: ArrayLike<any> | string | null, obj: any): boolean;
export { contains };
/**
 * Whether the array is empty.
 * @param arr The array to test.
 * @return true if empty.
 */
declare function isEmpty(arr: ArrayLike<any> | string | null): boolean;
export { isEmpty };
/**
 * Clears the array.
 * @param arr Array or array like object to clear.
 */
declare function clear(arr: ArrayLike<any> | null): void;
export { clear };
/**
 * Pushes an item into an array, if it's not already in the array.
 * @param arr Array into which to insert the item.
 * @param obj Value to add.
 */
declare function insert<T = any>(arr: (T | null)[] | null, obj: T | null): void;
export { insert };
/**
 * Inserts an object at the given index of the array.
 * @param arr The array to modify.
 * @param obj The object to insert.
 * @param opt_i The index at which to insert the object. If omitted, treated as 0. A negative index is counted from the end of the array.
 */
declare function insertAt(arr: ArrayLike<any> | null, obj: any, opt_i?: number): void;
export { insertAt };
/**
 * Inserts at the given index of the array, all elements of another array.
 * @param arr The array to modify.
 * @param elementsToAdd The array of elements to add.
 * @param opt_i The index at which to insert the object. If omitted, treated as 0. A negative index is counted from the end of the array.
 */
declare function insertArrayAt(arr: ArrayLike<any> | null, elementsToAdd: ArrayLike<any> | null, opt_i?: number): void;
export { insertArrayAt };
/**
 * Inserts an object into an array before a specified object.
 * @param arr The array to modify.
 * @param obj The object to insert.
 * @param opt_obj2 The object before which obj should be inserted. If obj2 is omitted or not found, obj is inserted at the end of the array.
 */
declare function insertBefore<T = any>(arr: (T | null)[] | null, obj: T | null, opt_obj2?: T | null): void;
export { insertBefore };
/**
 * Removes the first occurrence of a particular value from an array.
 * @param arr Array from which to remove value.
 * @param obj Object to remove.
 * @return True if an element was removed.
 */
declare function remove<T = any>(arr: ArrayLike<T | null> | null, obj: T | null): boolean;
export { remove };
/**
 * Removes the last occurrence of a particular value from an array.
 * @param arr Array from which to remove value.
 * @param obj Object to remove.
 * @return True if an element was removed.
 */
declare function removeLast<T = any>(arr: ArrayLike<T | null>, obj: T | null): boolean;
export { removeLast };
/**
 * Removes from an array the element at index i
 * @param arr Array or array like object from which to remove value.
 * @param i The index to remove.
 * @return True if an element was removed.
 */
declare function removeAt(arr: ArrayLike<any> | null, i: number): boolean;
export { removeAt };
/**
 * Removes the first value that satisfies the given condition.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return True if an element was removed.
 */
declare function removeIf<T = any, S = any>(arr: ArrayLike<T | null> | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): boolean;
export { removeIf };
/**
 * Removes all values that satisfy the given condition.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a boolean.
 * @param opt_obj An optional "this" context for the function.
 * @return The number of items removed
 */
declare function removeAllIf<T = any, S = any>(arr: ArrayLike<T | null> | null, f: ((this: S | null) => boolean) | null, opt_obj?: S | null): number;
export { removeAllIf };
/**
 * Returns a new array that is the result of joining the arguments.  If arrays
 * are passed then their items are added, however, if non-arrays are passed they
 * will be added to the return array as is.
 *
 * Note that ArrayLike objects will be added as is, rather than having their
 * items added.
 *
 * concat([1, 2], [3, 4]) -> [1, 2, 3, 4]
 * concat(0, [1, 2]) -> [0, 1, 2]
 * concat([1, 2], null) -> [1, 2, null]
 * @param var_args Items to concatenate.  Arrays will have each item added, while primitives and objects will be added as is.
 * @return The new resultant array.
 */
declare function concat(...var_args: any[]): any[];
export { concat };
/**
 * Returns a new array that contains the contents of all the arrays passed.
 */
declare function join<T = any>(...var_args: (T | null)[][]): (T | null)[];
export { join };
/**
 * Converts an object to an array.
 * @param object The object to convert to an array.
 * @return The object converted into an array. If object has a length property, every property indexed with a non-negative number less than length will be included in the result. If object does not have a length property, an empty array will be returned.
 */
declare function toArray<T = any>(object: ArrayLike<T | null> | string | null): (T | null)[];
export { toArray };
/**
 * Does a shallow copy of an array.
 * @param arr Array or array-like object to clone.
 * @return Clone of the input array.
 */
declare function clone<T = any>(a: ArrayLike<T | null> | string | null): (T | null)[];
export { clone };
/**
 * Extends an array with another array, element, or "array like" object.
 * This function operates 'in-place', it does not create a new Array.
 *
 * Example:
 * var a = [];
 * extend(a, [0, 1]);
 * a; // [0, 1]
 * extend(a, 2);
 * a; // [0, 1, 2]
 * @param arr1 The array to modify.
 * @param var_args The elements or arrays of elements to add to arr1.
 */
declare function extend<VALUE = any>(arr1: (VALUE | null)[] | null, ...var_args: (ArrayLike<VALUE | null> | VALUE | null)[]): void;
export { extend };
/**
 * Adds or removes elements from an array. This is a generic version of Array
 * splice. This means that it might work on other objects similar to arrays,
 * such as the arguments object.
 * @param arr The array to modify.
 * @param index The index at which to start changing the array. If not defined, treated as 0.
 * @param howMany How many elements to remove (0 means no removal. A value below 0 is treated as zero and so is any other non number. Numbers are floored).
 * @param var_args Optional, additional elements to insert into the array.
 * @return the removed elements.
 */
declare function splice<T = any>(arr: ArrayLike<T | null> | null, index: number | undefined, howMany: number, ...var_args: (T | null)[]): (T | null)[];
export { splice };
/**
 * Returns a new array from a segment of an array. This is a generic version of
 * Array slice. This means that it might work on other objects similar to
 * arrays, such as the arguments object.
 * @param arr The array from which to copy a segment.
 * @param start The index of the first element to copy.
 * @param opt_end The index after the last element to copy.
 * @return A new array containing the specified segment of the original array.
 */
declare function slice<T = any>(arr: ArrayLike<T | null> | string | null, start: number, opt_end?: number): (T | null)[];
export { slice };
/**
 * Removes all duplicates from an array (retaining only the first
 * occurrence of each array element).  This function modifies the
 * array in place and doesn't change the order of the non-duplicate items.
 *
 * For objects, duplicates are identified as having the same unique ID as
 * defined by {@link goog.getUid}.
 *
 * Alternatively you can specify a custom hash function that returns a unique
 * value for each item in the array it should consider unique.
 *
 * Runtime: N,
 * Worstcase space: 2N (no dupes)
 * @param arr The array from which to remove duplicates.
 * @param opt_rv An optional array in which to return the results, instead of performing the removal inplace.  If specified, the original array will remain unchanged.
 * @param opt_hashFn An optional function to use to apply to every item in the array. This function should return a unique value for each item in the array it should consider unique.
 */
declare function removeDuplicates<T = any>(arr: ArrayLike<T | null> | null, opt_rv?: any[] | null, opt_hashFn?: () => string): void;
export { removeDuplicates };
/**
 * Searches the specified array for the specified target using the binary
 * search algorithm.  If no opt_compareFn is specified, elements are compared
 * using <code>defaultCompare</code>, which compares the elements
 * using the built in < and > operators.  This will produce the expected
 * behavior for homogeneous arrays of String(s) and Number(s). The array
 * specified <b>must</b> be sorted in ascending order (as defined by the
 * comparison function).  If the array is not sorted, results are undefined.
 * If the array contains multiple instances of the specified target value, the
 * left-most instance will be found.
 *
 * Runtime: O(log n)
 * @param arr The array to be searched.
 * @param target The sought value.
 * @param opt_compareFn Optional comparison function by which the array is ordered. Should take 2 arguments to compare, the target value and an element from your array, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 * @return Lowest index of the target value if found, otherwise (-(insertion point) - 1). The insertion point is where the value should be inserted into arr to preserve the sorted property.  Return value >= 0 iff target is found.
 */
declare function binarySearch<TARGET = any, VALUE = any>(arr: ArrayLike<VALUE | null> | null, target: TARGET | null, opt_compareFn?: () => number): number;
export { binarySearch };
/**
 * Selects an index in the specified array using the binary search algorithm.
 * The evaluator receives an element and determines whether the desired index
 * is before, at, or after it.  The evaluator must be consistent (formally,
 * map(map(arr, evaluator, opt_obj), goog.math.sign)
 * must be monotonically non-increasing).
 *
 * Runtime: O(log n)
 * @param arr The array to be searched.
 * @param evaluator Evaluator function that receives 3 arguments (the element, the index and the array). Should return a negative number, zero, or a positive number depending on whether the desired index is before, at, or after the element passed to it.
 * @param opt_obj The object to be used as the value of 'this' within evaluator.
 * @return Index of the leftmost element matched by the evaluator, if such exists; otherwise (-(insertion point) - 1). The insertion point is the index of the first element for which the evaluator returns negative, or arr.length if no such element exists. The return value is non-negative iff a match is found.
 */
declare function binarySelect<THIS = any, VALUE = any>(arr: ArrayLike<VALUE | null> | null, evaluator: (this: THIS | null) => number, opt_obj?: THIS | null): number;
export { binarySelect };
/**
 * Sorts the specified array into ascending order.  If no opt_compareFn is
 * specified, elements are compared using
 * <code>defaultCompare</code>, which compares the elements using
 * the built in < and > operators.  This will produce the expected behavior
 * for homogeneous arrays of String(s) and Number(s), unlike the native sort,
 * but will give unpredictable results for heterogeneous lists of strings and
 * numbers with different numbers of digits.
 *
 * This sort is not guaranteed to be stable.
 *
 * Runtime: Same as `Array.prototype.sort`
 * @param arr The array to be sorted.
 * @param opt_compareFn Optional comparison function by which the array is to be ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 */
declare function sort<T = any>(arr: (T | null)[] | null, opt_compareFn?: (() => number) | null): void;
export { sort };
/**
 * Sorts the specified array into ascending order in a stable way.  If no
 * opt_compareFn is specified, elements are compared using
 * <code>defaultCompare</code>, which compares the elements using
 * the built in < and > operators.  This will produce the expected behavior
 * for homogeneous arrays of String(s) and Number(s).
 *
 * Runtime: Same as `Array.prototype.sort`, plus an additional
 * O(n) overhead of copying the array twice.
 * @param arr The array to be sorted.
 * @param opt_compareFn Optional comparison function by which the array is to be ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 */
declare function stableSort<T = any>(arr: (T | null)[] | null, opt_compareFn?: (() => number) | null): void;
export { stableSort };
/**
 * Sort the specified array into ascending order based on item keys
 * returned by the specified key function.
 * If no opt_compareFn is specified, the keys are compared in ascending order
 * using <code>defaultCompare</code>.
 *
 * Runtime: O(S(f(n)), where S is runtime of <code>sort</code>
 * and f(n) is runtime of the key function.
 * @param arr The array to be sorted.
 * @param keyFn Function taking array element and returning a key used for sorting this element.
 * @param opt_compareFn Optional comparison function by which the keys are to be ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 */
declare function sortByKey<T = any, K = any>(arr: (T | null)[] | null, keyFn: () => (K | null), opt_compareFn?: (() => number) | null): void;
export { sortByKey };
/**
 * Sorts an array of objects by the specified object key and compare
 * function. If no compare function is provided, the key values are
 * compared in ascending order using <code>defaultCompare</code>.
 * This won't work for keys that get renamed by the compiler. So use
 * {'foo': 1, 'bar': 2} rather than {foo: 1, bar: 2}.
 * @param arr An array of objects to sort.
 * @param key The object key to sort by.
 * @param opt_compareFn The function to use to compare key values.
 */
declare function sortObjectsByKey(arr: (object | null)[] | null, key: string, opt_compareFn?: Function | null): void;
export { sortObjectsByKey };
/**
 * Tells if the array is sorted.
 * @param arr The array.
 * @param opt_compareFn Function to compare the array elements. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 * @param opt_strict If true no equal elements are allowed.
 * @return Whether the array is sorted.
 */
declare function isSorted<T = any>(arr: ArrayLike<T | null>, opt_compareFn?: (() => number) | null, opt_strict?: boolean): boolean;
export { isSorted };
/**
 * Compares two arrays for equality. Two arrays are considered equal if they
 * have the same length and their corresponding elements are equal according to
 * the comparison function.
 * @param arr1 The first array to compare.
 * @param arr2 The second array to compare.
 * @param opt_equalsFn Optional comparison function. Should take 2 arguments to compare, and return true if the arguments are equal. Defaults to {@link goog.array.defaultCompareEquality} which compares the elements using the built-in '===' operator.
 * @return Whether the two arrays are equal.
 */
declare function equals<A = any, B = any>(arr1: ArrayLike<A | null> | null, arr2: ArrayLike<B | null> | null, opt_equalsFn?: (() => boolean) | null): boolean;
export { equals };
/**
 * 3-way array compare function.
 * @param arr1 The first array to compare.
 * @param arr2 The second array to compare.
 * @param opt_compareFn Optional comparison function by which the array is to be ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 * @return Negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 */
declare function compare3<VALUE = any>(arr1: ArrayLike<VALUE | null>, arr2: ArrayLike<VALUE | null>, opt_compareFn?: () => number): number;
export { compare3 };
/**
 * Compares its two arguments for order, using the built in < and >
 * operators.
 * @param a The first object to be compared.
 * @param b The second object to be compared.
 * @return A negative number, zero, or a positive number as the first argument is less than, equal to, or greater than the second, respectively.
 */
declare function defaultCompare<VALUE = any>(a: VALUE | null, b: VALUE | null): number;
export { defaultCompare };
/**
 * Compares its two arguments for inverse order, using the built in < and >
 * operators.
 * @param a The first object to be compared.
 * @param b The second object to be compared.
 * @return A negative number, zero, or a positive number as the first argument is greater than, equal to, or less than the second, respectively.
 */
declare function inverseDefaultCompare<VALUE = any>(a: VALUE | null, b: VALUE | null): number;
export { inverseDefaultCompare };
/**
 * Compares its two arguments for equality, using the built in === operator.
 * @param a The first object to compare.
 * @param b The second object to compare.
 * @return True if the two arguments are equal, false otherwise.
 */
declare function defaultCompareEquality(a: any, b: any): boolean;
export { defaultCompareEquality };
/**
 * Inserts a value into a sorted array. The array is not modified if the
 * value is already present.
 * @param array The array to modify.
 * @param value The object to insert.
 * @param opt_compareFn Optional comparison function by which the array is ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 * @return True if an element was inserted.
 */
declare function binaryInsert<VALUE = any>(array: ArrayLike<VALUE | null> | null, value: VALUE | null, opt_compareFn?: () => number): boolean;
export { binaryInsert };
/**
 * Removes a value from a sorted array.
 * @param array The array to modify.
 * @param value The object to remove.
 * @param opt_compareFn Optional comparison function by which the array is ordered. Should take 2 arguments to compare, and return a negative number, zero, or a positive number depending on whether the first argument is less than, equal to, or greater than the second.
 * @return True if an element was removed.
 */
declare function binaryRemove<VALUE = any>(array: ArrayLike<VALUE | null>, value: VALUE | null, opt_compareFn?: () => number): boolean;
export { binaryRemove };
/**
 * Splits an array into disjoint buckets according to a splitting function.
 * @param array The array.
 * @param sorter Function to call for every element.  This takes 3 arguments (the element, the index and the array) and must return a valid object key (a string, number, etc), or undefined, if that object should not be placed in a bucket.
 * @param opt_obj The object to be used as the value of 'this' within sorter.
 * @return An object, with keys being all of the unique return values of sorter, and values being arrays containing the items for which the splitter returned that key.
 */
declare function bucket<T = any, S = any>(array: ArrayLike<T | null> | null, sorter: (this: S | null) => any, opt_obj?: S | null): {
    [key: string]: (T | null)[];
};
export { bucket };
/**
 * Splits an array into disjoint buckets according to a splitting function.
 * @param array The array.
 * @param sorter Function to call for every element.  This takes 3 arguments (the element, the index, and the array) and must return a value to use as a key, or undefined, if that object should not be placed in a bucket.
 * @return A map, with keys being all of the unique return values of sorter, and values being arrays containing the items for which the splitter returned that key.
 */
declare function bucketToMap<K = any, V = any>(array: ArrayLike<V | null>, sorter: () => (K | undefined | null)): Map<K | null, (V | null)[]>;
export { bucketToMap };
/**
 * Creates a new object built from the provided array and the key-generation
 * function.
 * @param arr Array or array like object over which to iterate whose elements will be the values in the new object.
 * @param keyFunc The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return a string that will be used as the key for the element in the new object. If the function returns the same key for more than one element, the value for that key is implementation-defined.
 * @param opt_obj The object to be used as the value of 'this' within keyFunc.
 * @return The new object.
 */
declare function toObject<T = any, S = any>(arr: ArrayLike<T | null> | null, keyFunc: ((this: S | null) => string) | null, opt_obj?: S | null): {
    [key: string]: T | null;
};
export { toObject };
/**
 * Creates a new ES6 Map built from the provided array and the key-generation
 * function.
 * @param arr Array or array like object over which to iterate whose elements will be the values in the new object.
 * @param keyFunc The function to call for every element. This function takes 3 arguments (the element, the index, and the array) and should return a value that will be used as the key for the element in the new object. If the function returns the same key for more than one element, the value for that key is implementation-defined.
 * @return The new map.
 */
declare function toMap<K = any, V = any>(arr: ArrayLike<V | null>, keyFunc: (() => (K | null)) | null): Map<K | null, V | null>;
export { toMap };
/**
 * Creates a range of numbers in an arithmetic progression.
 *
 * Range takes 1, 2, or 3 arguments:
 * <pre>
 * range(5) is the same as range(0, 5, 1) and produces [0, 1, 2, 3, 4]
 * range(2, 5) is the same as range(2, 5, 1) and produces [2, 3, 4]
 * range(-2, -5, -1) produces [-2, -3, -4]
 * range(-2, -5, 1) produces [], since stepping by 1 wouldn't ever reach -5.
 * </pre>
 * @param startOrEnd The starting value of the range if an end argument is provided. Otherwise, the start value is 0, and this is the end value.
 * @param opt_end The optional end value of the range.
 * @param opt_step The step size between range values. Defaults to 1 if opt_step is undefined or 0.
 * @return An array of numbers for the requested range. May be an empty array if adding the step would not converge toward the end value.
 */
declare function range(startOrEnd: number, opt_end?: number, opt_step?: number): number[];
export { range };
/**
 * Returns an array consisting of the given value repeated N times.
 * @param value The value to repeat.
 * @param n The repeat count.
 * @return An array with the repeated value.
 */
declare function repeat<VALUE = any>(value: VALUE | null, n: number): (VALUE | null)[];
export { repeat };
/**
 * Returns an array consisting of every argument with all arrays
 * expanded in-place recursively.
 * @param var_args The values to flatten.
 * @return An array containing the flattened values.
 */
declare function flatten(...var_args: any[]): any[];
export { flatten };
/**
 * Rotates an array in-place. After calling this method, the element at
 * index i will be the element previously at index (i - n) %
 * array.length, for all values of i between 0 and array.length - 1,
 * inclusive.
 *
 * For example, suppose list comprises [t, a, n, k, s]. After invoking
 * rotate(array, 1) (or rotate(array, -4)), array will comprise [s, t, a, n, k].
 * @param array The array to rotate.
 * @param n The amount to rotate.
 * @return The array.
 */
declare function rotate<T = any>(array: (T | null)[], n: number): (T | null)[];
export { rotate };
/**
 * Moves one item of an array to a new position keeping the order of the rest
 * of the items. Example use case: keeping a list of JavaScript objects
 * synchronized with the corresponding list of DOM elements after one of the
 * elements has been dragged to a new position.
 * @param arr The array to modify.
 * @param fromIndex Index of the item to move between 0 and `arr.length - 1`.
 * @param toIndex Target index between 0 and `arr.length - 1`.
 */
declare function moveItem(arr: ArrayLike<any>, fromIndex: number, toIndex: number): void;
export { moveItem };
/**
 * Creates a new array for which the element at position i is an array of the
 * ith element of the provided arrays.  The returned array will only be as long
 * as the shortest array provided; additional values are ignored.  For example,
 * the result of zipping [1, 2] and [3, 4, 5] is [[1,3], [2, 4]].
 *
 * This is similar to the zip() function in Python.  See {@link
 * http://docs.python.org/library/functions.html#zip}
 * @param var_args Arrays to be combined.
 * @return A new array of arrays created from provided arrays.
 */
declare function zip(...var_args: ArrayLike<any>[]): any[][];
export { zip };
/**
 * Shuffles the values in the specified array using the Fisher-Yates in-place
 * shuffle (also known as the Knuth Shuffle). By default, calls Math.random()
 * and so resets the state of that random number generator. Similarly, may reset
 * the state of any other specified random number generator.
 *
 * Runtime: O(n)
 * @param arr The array to be shuffled.
 * @param opt_randFn Optional random function to use for shuffling. Takes no arguments, and returns a random number on the interval [0, 1). Defaults to Math.random() using JavaScript's built-in Math library.
 */
declare function shuffle(arr: any[], opt_randFn?: () => number): void;
export { shuffle };
/**
 * Returns a new array of elements from arr, based on the indexes of elements
 * provided by index_arr. For example, the result of index copying
 * ['a', 'b', 'c'] with index_arr [1,0,0,2] is ['b', 'a', 'a', 'c'].
 * @param arr The array to get a indexed copy from.
 * @param index_arr An array of indexes to get from arr.
 * @return A new array of elements from arr in index_arr order.
 */
declare function copyByIndex<T = any>(arr: ArrayLike<T | null>, index_arr: ArrayLike<number>): (T | null)[];
export { copyByIndex };
/**
 * Maps each element of the input array into zero or more elements of the output
 * array.
 * @param arr Array or array like object over which to iterate.
 * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array) and should return an array. The result will be used to extend a new array.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return a new array with the concatenation of all arrays returned from f.
 */
declare function concatMap<THIS = any, VALUE = any, RESULT = any>(arr: ArrayLike<VALUE | null> | string, f: (this: THIS | null) => (RESULT | null)[], opt_obj?: THIS | null): (RESULT | null)[];
export { concatMap };
