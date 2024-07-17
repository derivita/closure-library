type GoogIterable = {
    'length': number;
} | {
    '__iterator__': any;
};
export { GoogIterable as Iterable };
/**
 * Class/interface for iterators.
 */
declare class GoogIterator<VALUE = any> implements Iterator<VALUE | null> {
    /**
     * Class/interface for iterators.
     */
    constructor();
    private noStructuralTyping_closure_goog_iter_iter_GoogIterator;
    /**
     * Returns the next value of the iteration as an an ES6 IIterableResult.
     */
    next(): IteratorResult<VALUE | null>;
    /**
     * Returns the `Iterator` object itself.  This is used to implement
     * the iterator protocol in JavaScript 1.7
     * @param opt_keys Whether to return the keys or values. Default is to only return the values.  This is being used by the for-in loop (true) and the for-each-in loop (false).  Even though the param gives a hint about what the iterator will return there is no guarantee that it will return the keys when true is passed.
     * @return The object itself.
     */
    __iterator__(opt_keys?: boolean): GoogIterator<VALUE | null>;
}
export { GoogIterator as Iterator };
/**
 * An ES6 Iteration protocol result indicating iteration has completed for an
 * iterator.
 */
export declare var ES6_ITERATOR_DONE: IteratorResult<any>;
/**
 * Wraps a VALUE in the ES6 Iterator protocol's IIterableResult container,
 * including the compiler-mandated 'done' key, set to false.
 * @return An ES6 Iteration Protocol compatible result object, indicating iteration is not done.
 */
export declare function createEs6IteratorYield<VALUE = any>(value: VALUE | null): IteratorResult<VALUE | null>;
/**
 * Returns an iterator that knows how to iterate over the values in the object.
 * @param iterable If the object is an iterator it will be returned as is.  If the object has an `__iterator__` method that will be called to get the value iterator.  If the object is an array-like object we create an iterator for that.
 * @return An iterator that knows how to iterate over the values in `iterable`.
 */
export declare function toIterator<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null): GoogIterator<VALUE | null>;
/**
 * Calls a function for each element in the iterator with the element of the
 * iterator passed as argument.
 * @param iterable The iterator to iterate over. If the iterable is an object `toIterator` will be called on it.
 * @param f The function to call for every element.  This function takes 3 arguments (the element, undefined, and the iterator) and the return value is irrelevant.  The reason for passing undefined as the second argument is so that the same function can be used in {@see googArray.forEach} as well as others.  The third parameter is of type "number" for arraylike objects, undefined, otherwise.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 */
export declare function forEach<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => any, opt_obj?: THIS | null): void;
/**
 * Calls a function for every element in the iterator, and if the function
 * returns true adds the element to a new iterator.
 * @param iterable The iterator to iterate over.
 * @param f The function to call for every element. This function takes 3 arguments (the element, undefined, and the iterator) and should return a boolean. If the return value is true the element will be included in the returned iterator.  If it is false the element is not included.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new iterator in which only elements that passed the test are present.
 */
export declare function filter<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): GoogIterator<VALUE | null>;
/**
 * Calls a function for every element in the iterator, and if the function
 * returns false adds the element to a new iterator.
 * @param iterable The iterator to iterate over.
 * @param f The function to call for every element. This function takes 3 arguments (the element, undefined, and the iterator) and should return a boolean. If the return value is false the element will be included in the returned iterator.  If it is true the element is not included.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new iterator in which only elements that did not pass the test are present.
 */
export declare function filterFalse<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): GoogIterator<VALUE | null>;
/**
 * Creates a new iterator that returns the values in a range.  This function
 * can take 1, 2 or 3 arguments:
 * <pre>
 * range(5) same as range(0, 5, 1)
 * range(2, 5) same as range(2, 5, 1)
 * </pre>
 * @param startOrStop The stop value if only one argument is provided. The start value if 2 or more arguments are provided.  If only one argument is used the start value is 0.
 * @param opt_stop The stop value.  If left out then the first argument is used as the stop value.
 * @param opt_step The number to increment with between each call to next.  This can be negative.
 * @return A new iterator that returns the values in the range.
 */
export declare function range(startOrStop: number, opt_stop?: number, opt_step?: number): GoogIterator<number>;
/**
 * Joins the values in a iterator with a delimiter.
 * @param iterable The iterator to get the values from.
 * @param deliminator The text to put between the values.
 * @return The joined value string.
 */
export declare function join<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, deliminator: string): string;
/**
 * For every element in the iterator call a function and return a new iterator
 * with that value.
 * @param iterable The iterator to iterate over.
 * @param f The function to call for every element.  This function takes 3 arguments (the element, undefined, and the iterator) and should return a new value.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new iterator that returns the results of applying the function to each element in the original iterator.
 */
export declare function map<THIS = any, VALUE = any, RESULT = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, f: (this: THIS | null) => (RESULT | null), opt_obj?: THIS | null): GoogIterator<RESULT | null>;
/**
 * Passes every element of an iterator into a function and accumulates the
 * result.
 * @param iterable The iterator to iterate over.
 * @param f The function to call for every element. This function takes 2 arguments (the function's previous result or the initial value, and the value of the current element). function(previousValue, currentElement) : newValue.
 * @param val The initial value to pass into the function on the first call.
 * @param opt_obj The object to be used as the value of 'this' within f.
 * @return Result of evaluating f repeatedly across the values of the iterator.
 */
export declare function reduce<THIS = any, VALUE = any, RVALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable<VALUE | null>, f: (this: THIS | null) => (RVALUE | null), val: RVALUE | null, opt_obj?: THIS | null): RVALUE | null;
/**
 * Goes through the values in the iterator. Calls f for each of these, and if
 * any of them returns true, this returns true (without checking the rest). If
 * all return false this will return false.
 * @param iterable The iterator object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return true if any value passes the test.
 */
export declare function some<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): boolean;
/**
 * Goes through the values in the iterator. Calls f for each of these and if any
 * of them returns false this returns false (without checking the rest). If all
 * return true this will return true.
 * @param iterable The iterator object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return true if every value passes the test.
 */
export declare function every<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): boolean;
/**
 * Takes zero or more iterables and returns one iterator that will iterate over
 * them in the order chained.
 * @param var_args Any number of iterable objects.
 * @return Returns a new iterator that will iterate over all the given iterables' contents.
 */
export declare function chain<VALUE = any>(...var_args: (GoogIterator<VALUE | null> | GoogIterable)[]): GoogIterator<VALUE | null>;
/**
 * Takes a single iterable containing zero or more iterables and returns one
 * iterator that will iterate over each one in the order given.
 * @param iterable The iterable of iterables to chain.
 * @return Returns a new iterator that will iterate over all the contents of the iterables contained within `iterable`.
 */
export declare function chainFromIterable<VALUE = any>(iterable: GoogIterator<any> | GoogIterable | null): GoogIterator<VALUE | null>;
/**
 * Builds a new iterator that iterates over the original, but skips elements as
 * long as a supplied function returns true.
 * @param iterable The iterator object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new iterator that drops elements from the original iterator as long as `f` is true.
 */
export declare function dropWhile<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): GoogIterator<VALUE | null>;
/**
 * Builds a new iterator that iterates over the original, but only as long as a
 * supplied function returns true.
 * @param iterable The iterator object.
 * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
 * @param opt_obj This is used as the 'this' object in f when called.
 * @return A new iterator that keeps elements in the original iterator as long as the function is true.
 */
export declare function takeWhile<THIS = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, f: (this: THIS | null) => boolean, opt_obj?: THIS | null): GoogIterator<VALUE | null>;
/**
 * Converts the iterator to an array
 * @param iterable The iterator to convert to an array.
 * @return An array of the elements the iterator iterates over.
 */
export declare function toArray<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null): (VALUE | null)[];
/**
 * Iterates over two iterables and returns true if they contain the same
 * sequence of elements and have the same length.
 * @param iterable1 The first iterable object.
 * @param iterable2 The second iterable object.
 * @param opt_equalsFn Optional comparison function. Should take two arguments to compare, and return true if the arguments are equal. Defaults to {@link googArray.defaultCompareEquality} which compares the elements using the built-in '===' operator.
 * @return true if the iterables contain the same sequence of elements and have the same length.
 */
export declare function equals<VALUE = any>(iterable1: GoogIterator<VALUE | null> | GoogIterable, iterable2: GoogIterator<VALUE | null> | GoogIterable, opt_equalsFn?: () => boolean): boolean;
/**
 * Advances the iterator to the next position, returning the given default value
 * instead of throwing an exception if the iterator has no more entries.
 * @param iterable The iterable object.
 * @param defaultValue The value to return if the iterator is empty.
 * @return The next item in the iteration, or defaultValue if the iterator was empty.
 */
export declare function nextOrValue<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable | null, defaultValue: VALUE | null): VALUE | null;
/**
 * Cartesian product of zero or more sets.  Gives an iterator that gives every
 * combination of one element chosen from each set.  For example,
 * ([1, 2], [3, 4]) gives ([1, 3], [1, 4], [2, 3], [2, 4]).
 * @param var_args Zero or more sets, as arrays.
 * @return An iterator that gives each n-tuple (as an array).
 */
declare function product_<VALUE = any>(...var_args: ArrayLike<VALUE | null>[]): GoogIterator<(VALUE | null)[]>;
export { product_ as product };
/**
 * Create an iterator to cycle over the iterable's elements indefinitely.
 * For example, ([1, 2, 3]) would return : 1, 2, 3, 1, 2, 3, ...
 * @param iterable The iterable object.
 * @return An iterator that iterates indefinitely over the values in `iterable`.
 */
export declare function cycle<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that counts indefinitely from a starting value.
 * @param opt_start The starting value. Default is 0.
 * @param opt_step The number to increment with between each call to next. Negative and floating point numbers are allowed. Default is 1.
 * @return A new iterator that returns the values in the series.
 */
declare function count_(opt_start?: number, opt_step?: number): GoogIterator<number>;
export { count_ as count };
/**
 * Creates an iterator that returns the same object or value repeatedly.
 * @param value Any object or value to repeat.
 * @return A new iterator that returns the repeated value.
 */
export declare function repeat<VALUE = any>(value: VALUE | null): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that returns running totals from the numbers in
 * `iterable`. For example, the array {@code [1, 2, 3, 4, 5]} yields
 * {@code 1 -> 3 -> 6 -> 10 -> 15}.
 * @param iterable The iterable of numbers to accumulate.
 * @return A new iterator that returns the numbers in the series.
 */
export declare function accumulate(iterable: GoogIterator<number> | GoogIterable): GoogIterator<number>;
/**
 * Creates an iterator that returns arrays containing the ith elements from the
 * provided iterables. The returned arrays will be the same size as the number
 * of iterables given in `var_args`. Once the shortest iterable is
 * exhausted, subsequent calls to `next()` will return
 * `ES6_ITERATOR_DONE`.
 * @param var_args Any number of iterable objects.
 * @return A new iterator that returns arrays of elements from the provided iterables.
 */
export declare function zip<VALUE = any>(...var_args: (GoogIterator<VALUE | null> | GoogIterable)[]): GoogIterator<(VALUE | null)[]>;
/**
 * Creates an iterator that returns arrays containing the ith elements from the
 * provided iterables. The returned arrays will be the same size as the number
 * of iterables given in `var_args`. Shorter iterables will be extended
 * with `fillValue`. Once the longest iterable is exhausted, subsequent
 * calls to `next()` will return `ES6_ITERATOR_DONE`.
 * @param fillValue The object or value used to fill shorter iterables.
 * @param var_args Any number of iterable objects.
 * @return A new iterator that returns arrays of elements from the provided iterables.
 */
export declare function zipLongest<VALUE = any>(fillValue: VALUE | null, ...var_args: (GoogIterator<VALUE | null> | GoogIterable)[]): GoogIterator<(VALUE | null)[]>;
/**
 * Creates an iterator that filters `iterable` based on a series of
 * `selectors`. On each call to `next()`, one item is taken from
 * both the `iterable` and `selectors` iterators. If the item from
 * `selectors` evaluates to true, the item from `iterable` is given.
 * Otherwise, it is skipped. Once either `iterable` or `selectors`
 * is exhausted, subsequent calls to `next()` will return
 * `ES6_ITERATOR_DONE`.
 * @param iterable The iterable to filter.
 * @param selectors An iterable of items to be evaluated in a boolean context to determine if the corresponding element in `iterable` should be included in the result.
 * @return A new iterator that returns the filtered values.
 */
export declare function compress<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, selectors: GoogIterator<VALUE | null> | GoogIterable): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that returns arrays containing elements from the
 * `iterable` grouped by a key value. For iterables with repeated
 * elements (i.e. sorted according to a particular key function), this function
 * has a `uniq`-like effect. For example, grouping the array:
 * {@code [A, B, B, C, C, A]} produces
 * {@code [A, [A]], [B, [B, B]], [C, [C, C]], [A, [A]]}.
 * @param iterable The iterable to group.
 * @param opt_keyFunc Optional function for determining the key value for each group in the `iterable`. Default is the identity function.
 * @return A new iterator that returns arrays of consecutive key and groups.
 */
export declare function groupBy<KEY = any, VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, opt_keyFunc?: () => (KEY | null)): GoogIterator<any[]>;
/**
 * Gives an iterator that gives the result of calling the given function
 * <code>f</code> with the arguments taken from the next element from
 * <code>iterable</code> (the elements are expected to also be iterables).
 *
 * Similar to {@see map} but allows the function to accept multiple
 * arguments from the iterable.
 * @param iterable The iterable of iterables to iterate over.
 * @param f The function to call for every element.  This function takes N+2 arguments, where N represents the number of items from the next element of the iterable. The two additional arguments passed to the function are undefined and the iterator itself. The function should return a new value.
 * @param opt_obj The object to be used as the value of 'this' within `f`.
 * @return A new iterator that returns the results of applying the function to each element in the original iterator.
 */
export declare function starMap<THIS = any, RESULT = any>(iterable: GoogIterator<any> | GoogIterable, f: (this: THIS | null) => (RESULT | null), opt_obj?: THIS | null): GoogIterator<RESULT | null>;
/**
 * Returns an array of iterators each of which can iterate over the values in
 * `iterable` without advancing the others.
 * @param iterable The iterable to tee.
 * @param opt_num The number of iterators to create. Default is 2.
 * @return An array of iterators.
 */
export declare function tee<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, opt_num?: number): (GoogIterator<VALUE | null> | null)[];
/**
 * Creates an iterator that returns arrays containing a count and an element
 * obtained from the given `iterable`.
 * @param iterable The iterable to enumerate.
 * @param opt_start Optional starting value. Default is 0.
 * @return A new iterator containing count/item pairs.
 */
export declare function enumerate<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, opt_start?: number): GoogIterator<any[]>;
/**
 * Creates an iterator that returns the first `limitSize` elements from an
 * iterable. If this number is greater than the number of elements in the
 * iterable, all the elements are returned.
 * @param iterable The iterable to limit.
 * @param limitSize The maximum number of elements to return.
 * @return A new iterator containing `limitSize` elements.
 */
export declare function limit<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, limitSize: number): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that is advanced `count` steps ahead. Consumed
 * values are silently discarded. If `count` is greater than the number
 * of elements in `iterable`, an empty iterator is returned. Subsequent
 * calls to `next()` will return `ES6_ITERATOR_DONE`.
 * @param iterable The iterable to consume.
 * @param count The number of elements to consume from the iterator.
 * @return An iterator advanced zero or more steps ahead.
 */
export declare function consume<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, count: number): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that returns a range of elements from an iterable.
 * Similar to {@see googArray.slice} but does not support negative indexes.
 * @param iterable The iterable to slice.
 * @param start The index of the first element to return.
 * @param opt_end The index after the last element to return. If defined, must be greater than or equal to `start`.
 * @return A new iterator containing a slice of the original.
 */
export declare function slice<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, start: number, opt_end?: number): GoogIterator<VALUE | null>;
/**
 * Creates an iterator that returns permutations of elements in
 * `iterable`.
 *
 * Permutations are obtained by taking the Cartesian product of
 * `opt_length` iterables and filtering out those with repeated
 * elements. For example, the permutations of {@code [1,2,3]} are
 * {@code [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]}.
 * @param iterable The iterable from which to generate permutations.
 * @param opt_length Length of each permutation. If omitted, defaults to the length of `iterable`.
 * @return A new iterator containing the permutations of `iterable`.
 */
export declare function permutations<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, opt_length?: number): GoogIterator<(VALUE | null)[]>;
/**
 * Creates an iterator that returns combinations of elements from
 * `iterable`.
 *
 * Combinations are obtained by taking the {@see permutations} of
 * `iterable` and filtering those whose elements appear in the order they
 * are encountered in `iterable`. For example, the 3-length combinations
 * of {@code [0,1,2,3]} are {@code [[0,1,2], [0,1,3], [0,2,3], [1,2,3]]}.
 * @param iterable The iterable from which to generate combinations.
 * @param length The length of each combination.
 * @return A new iterator containing combinations from the `iterable`.
 */
export declare function combinations<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, length: number): GoogIterator<(VALUE | null)[]>;
/**
 * Creates an iterator that returns combinations of elements from
 * `iterable`, with repeated elements possible.
 *
 * Combinations are obtained by taking the Cartesian product of `length`
 * iterables and filtering those whose elements appear in the order they are
 * encountered in `iterable`. For example, the 2-length combinations of
 * {@code [1,2,3]} are {@code [[1,1], [1,2], [1,3], [2,2], [2,3], [3,3]]}.
 * @param iterable The iterable to combine.
 * @param length The length of each combination.
 * @return A new iterator containing combinations from the `iterable`.
 */
export declare function combinationsWithReplacement<VALUE = any>(iterable: GoogIterator<VALUE | null> | GoogIterable, length: number): GoogIterator<(VALUE | null)[]>;
