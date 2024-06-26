//!! generated by clutz.
// Generated from iter/iter.js
declare namespace ಠ_ಠ.clutz.goog.iter {
  /**
   * An ES6 Iteration protocol result indicating iteration has completed for an
   * iterator.
   */
  let ES6_ITERATOR_DONE : IteratorResult < any > ;
  /**
   * Implements the `goog.iter.groupBy` iterator.
   */
  class GroupByIterator_ < KEY = any , VALUE = any > extends ಠ_ಠ.clutz.goog.iter.Iterator < any [] > {
    private noStructuralTyping_goog_iter_GroupByIterator_ : any;
    /**
     * The current key visited during iteration.
     */
    currentKey : KEY ;
    /**
     * The current value being added to the group.
     */
    currentValue : VALUE ;
    /**
     * The iterable to group, coerced to an iterator.
     */
    iterator : ಠ_ಠ.clutz.goog.iter.Iterator < any > ;
    /**
     * A function for determining the key value for each element in the iterable.
     * If no function is provided, the identity function is used and returns the
     * element unchanged.
     */
    keyFunc (a : VALUE ) : KEY ;
    /**
     * The target key for determining the start of a group.
     */
    targetKey : KEY ;
    next ( ) : IteratorResult < any [] > ;
  }
  /**
   * Creates an iterator that returns running totals from the numbers in
   * `iterable`. For example, the array {@code [1, 2, 3, 4, 5]} yields
   * {@code 1 -> 3 -> 6 -> 10 -> 15}.
   * @param iterable The iterable of numbers to accumulate.
   */
  function accumulate (iterable : { length : number } | { __iterator__ : any } ) : ಠ_ಠ.clutz.goog.iter.Iterator < number > ;
  /**
   * Takes zero or more iterables and returns one iterator that will iterate over
   * them in the order chained.
   * @param var_args Any number of iterable objects.
   */
  function chain < VALUE = any > ( ...var_args : ( ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } ) [] ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Takes a single iterable containing zero or more iterables and returns one
   * iterator that will iterate over each one in the order given.
   * @param iterable The iterable of iterables to chain.
   */
  function chainFromIterable < VALUE = any > (iterable : null | { length : number } | { __iterator__ : any } ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that returns combinations of elements from
   * `iterable`.
   *
   * Combinations are obtained by taking the {@see goog.iter.permutations} of
   * `iterable` and filtering those whose elements appear in the order they
   * are encountered in `iterable`. For example, the 3-length combinations
   * of {@code [0,1,2,3]} are {@code [[0,1,2], [0,1,3], [0,2,3], [1,2,3]]}.
   * @param iterable The iterable from which to generate combinations.
   * @param length The length of each combination.
   */
  function combinations < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , length : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
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
   */
  function combinationsWithReplacement < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , length : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
  /**
   * Creates an iterator that filters `iterable` based on a series of
   * `selectors`. On each call to `next()`, one item is taken from
   * both the `iterable` and `selectors` iterators. If the item from
   * `selectors` evaluates to true, the item from `iterable` is given.
   * Otherwise, it is skipped. Once either `iterable` or `selectors`
   * is exhausted, subsequent calls to `next()` will return
   * `goog.iter.ES6_ITERATOR_DONE`.
   * @param iterable The iterable to filter.
   * @param selectors An iterable of items to be evaluated in a boolean context to determine if the corresponding element in `iterable` should be included in the result.
   */
  function compress < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , selectors : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that is advanced `count` steps ahead. Consumed
   * values are silently discarded. If `count` is greater than the number
   * of elements in `iterable`, an empty iterator is returned. Subsequent
   * calls to `next()` will return `goog.iter.ES6_ITERATOR_DONE`.
   * @param iterable The iterable to consume.
   * @param count The number of elements to consume from the iterator.
   */
  function consume < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , count : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that counts indefinitely from a starting value.
   * @param opt_start The starting value. Default is 0.
   * @param opt_step The number to increment with between each call to next. Negative and floating point numbers are allowed. Default is 1.
   */
  function count (opt_start ? : number , opt_step ? : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < number > ;
  /**
   * Wraps a VALUE in the ES6 Iterator protocol's IIterableResult container,
   * including the compiler-mandated 'done' key, set to false.
   */
  function createEs6IteratorYield < VALUE = any > (value : VALUE ) : IteratorResult < VALUE > ;
  /**
   * Create an iterator to cycle over the iterable's elements indefinitely.
   * For example, ([1, 2, 3]) would return : 1, 2, 3, 1, 2, 3, ...
   * @param iterable The iterable object.
   */
  function cycle < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Builds a new iterator that iterates over the original, but skips elements as
   * long as a supplied function returns true.
   * @param iterable The iterator object.
   * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function dropWhile < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that returns arrays containing a count and an element
   * obtained from the given `iterable`.
   * @param iterable The iterable to enumerate.
   * @param opt_start Optional starting value. Default is 0.
   */
  function enumerate < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , opt_start ? : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < any [] > ;
  /**
   * Iterates over two iterables and returns true if they contain the same
   * sequence of elements and have the same length.
   * @param iterable1 The first iterable object.
   * @param iterable2 The second iterable object.
   * @param opt_equalsFn Optional comparison function. Should take two arguments to compare, and return true if the arguments are equal. Defaults to {@link goog.array.defaultCompareEquality} which compares the elements using the built-in '===' operator.
   */
  function equals < VALUE = any > (iterable1 : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , iterable2 : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , opt_equalsFn ? : (a : VALUE , b : VALUE ) => boolean ) : boolean ;
  /**
   * Goes through the values in the iterator. Calls f for each of these and if any
   * of them returns false this returns false (without checking the rest). If all
   * return true this will return true.
   * @param iterable The iterator object.
   * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function every < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : boolean ;
  /**
   * Calls a function for every element in the iterator, and if the function
   * returns true adds the element to a new iterator.
   * @param iterable The iterator to iterate over.
   * @param f The function to call for every element. This function takes 3 arguments (the element, undefined, and the iterator) and should return a boolean. If the return value is true the element will be included in the returned iterator.  If it is false the element is not included.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function filter < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Calls a function for every element in the iterator, and if the function
   * returns false adds the element to a new iterator.
   * @param iterable The iterator to iterate over.
   * @param f The function to call for every element. This function takes 3 arguments (the element, undefined, and the iterator) and should return a boolean. If the return value is false the element will be included in the returned iterator.  If it is true the element is not included.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function filterFalse < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Calls a function for each element in the iterator with the element of the
   * iterator passed as argument.
   * @param iterable The iterator to iterate over. If the iterable is an object `toIterator` will be called on it.
   * @param f The function to call for every element.  This function takes 3 arguments (the element, undefined, and the iterator) and the return value is irrelevant.  The reason for passing undefined as the second argument is so that the same function can be used in {@see goog.array.forEach} as well as others.  The third parameter is of type "number" for arraylike objects, undefined, otherwise.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function forEach < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : any , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => any , opt_obj ? : THIS ) : void ;
  /**
   * Creates an iterator that returns arrays containing elements from the
   * `iterable` grouped by a key value. For iterables with repeated
   * elements (i.e. sorted according to a particular key function), this function
   * has a `uniq`-like effect. For example, grouping the array:
   * {@code [A, B, B, C, C, A]} produces
   * {@code [A, [A]], [B, [B, B]], [C, [C, C]], [A, [A]]}.
   * @param iterable The iterable to group.
   * @param opt_keyFunc Optional function for determining the key value for each group in the `iterable`. Default is the identity function.
   */
  function groupBy < KEY = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , opt_keyFunc ? : (a : VALUE ) => KEY ) : ಠ_ಠ.clutz.goog.iter.Iterator < any [] > ;
  /**
   * Joins the values in a iterator with a delimiter.
   * @param iterable The iterator to get the values from.
   * @param deliminator The text to put between the values.
   */
  function join < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , deliminator : string ) : string ;
  /**
   * Creates an iterator that returns the first `limitSize` elements from an
   * iterable. If this number is greater than the number of elements in the
   * iterable, all the elements are returned.
   * @param iterable The iterable to limit.
   * @param limitSize The maximum number of elements to return.
   */
  function limit < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , limitSize : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * For every element in the iterator call a function and return a new iterator
   * with that value.
   * @param iterable The iterator to iterate over.
   * @param f The function to call for every element.  This function takes 3 arguments (the element, undefined, and the iterator) and should return a new value.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function map < THIS = any , VALUE = any , RESULT = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => RESULT , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < RESULT > ;
  /**
   * Advances the iterator to the next position, returning the given default value
   * instead of throwing an exception if the iterator has no more entries.
   * @param iterable The iterable object.
   * @param defaultValue The value to return if the iterator is empty.
   */
  function nextOrValue < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , defaultValue : VALUE ) : VALUE ;
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
   */
  function permutations < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , opt_length ? : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
  /**
   * Cartesian product of zero or more sets.  Gives an iterator that gives every
   * combination of one element chosen from each set.  For example,
   * ([1, 2], [3, 4]) gives ([1, 3], [1, 4], [2, 3], [2, 4]).
   * @param var_args Zero or more sets, as arrays.
   */
  function product < VALUE = any > ( ...var_args : ArrayLike < VALUE > [] ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
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
   */
  function range (startOrStop : number , opt_stop ? : number , opt_step ? : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < number > ;
  /**
   * Passes every element of an iterator into a function and accumulates the
   * result.
   * @param iterable The iterator to iterate over.
   * @param f The function to call for every element. This function takes 2 arguments (the function's previous result or the initial value, and the value of the current element). function(previousValue, currentElement) : newValue.
   * @param val The initial value to pass into the function on the first call.
   * @param opt_obj The object to be used as the value of 'this' within f.
   */
  function reduce < THIS = any , VALUE = any , RVALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , f : (this : THIS , a : RVALUE , b : VALUE ) => RVALUE , val : RVALUE , opt_obj ? : THIS ) : RVALUE ;
  /**
   * Creates an iterator that returns the same object or value repeatedly.
   * @param value Any object or value to repeat.
   */
  function repeat < VALUE = any > (value : VALUE ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that returns a range of elements from an iterable.
   * Similar to {@see goog.array.slice} but does not support negative indexes.
   * @param iterable The iterable to slice.
   * @param start The index of the first element to return.
   * @param opt_end The index after the last element to return. If defined, must be greater than or equal to `start`.
   */
  function slice < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , start : number , opt_end ? : number ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Goes through the values in the iterator. Calls f for each of these, and if
   * any of them returns true, this returns true (without checking the rest). If
   * all return false this will return false.
   * @param iterable The iterator object.
   * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function some < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : boolean ;
  /**
   * Gives an iterator that gives the result of calling the given function
   * <code>f</code> with the arguments taken from the next element from
   * <code>iterable</code> (the elements are expected to also be iterables).
   *
   * Similar to {@see goog.iter.map} but allows the function to accept multiple
   * arguments from the iterable.
   * @param iterable The iterable of iterables to iterate over.
   * @param f The function to call for every element.  This function takes N+2 arguments, where N represents the number of items from the next element of the iterable. The two additional arguments passed to the function are undefined and the iterator itself. The function should return a new value.
   * @param opt_obj The object to be used as the value of 'this' within `f`.
   */
  function starMap < THIS = any , RESULT = any > (iterable : { length : number } | { __iterator__ : any } , f : (this : THIS ,  ...a : any [] ) => RESULT , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < RESULT > ;
  /**
   * Builds a new iterator that iterates over the original, but only as long as a
   * supplied function returns true.
   * @param iterable The iterator object.
   * @param f The function to call for every value. This function takes 3 arguments (the value, undefined, and the iterator) and should return a boolean.
   * @param opt_obj This is used as the 'this' object in f when called.
   */
  function takeWhile < THIS = any , VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } , f : (this : THIS , a : VALUE , b : undefined , c : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ) => boolean , opt_obj ? : THIS ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Returns an array of iterators each of which can iterate over the values in
   * `iterable` without advancing the others.
   * @param iterable The iterable to tee.
   * @param opt_num The number of iterators to create. Default is 2.
   */
  function tee < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } , opt_num ? : number ) : ( ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null ) [] ;
  /**
   * Converts the iterator to an array
   * @param iterable The iterator to convert to an array.
   */
  function toArray < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } ) : VALUE [] ;
  /**
   * Returns an iterator that knows how to iterate over the values in the object.
   * @param iterable If the object is an iterator it will be returned as is.  If the object has an `__iterator__` method that will be called to get the value iterator.  If the object is an array-like object we create an iterator for that.
   */
  function toIterator < VALUE = any > (iterable : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | null | { length : number } | { __iterator__ : any } ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
  /**
   * Creates an iterator that returns arrays containing the ith elements from the
   * provided iterables. The returned arrays will be the same size as the number
   * of iterables given in `var_args`. Once the shortest iterable is
   * exhausted, subsequent calls to `next()` will return
   * `goog.iter.ES6_ITERATOR_DONE`.
   * @param var_args Any number of iterable objects.
   */
  function zip < VALUE = any > ( ...var_args : ( ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } ) [] ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
  /**
   * Creates an iterator that returns arrays containing the ith elements from the
   * provided iterables. The returned arrays will be the same size as the number
   * of iterables given in `var_args`. Shorter iterables will be extended
   * with `fillValue`. Once the longest iterable is exhausted, subsequent
   * calls to `next()` will return `goog.iter.ES6_ITERATOR_DONE`.
   * @param fillValue The object or value used to fill shorter iterables.
   * @param var_args Any number of iterable objects.
   */
  function zipLongest < VALUE = any > (fillValue : VALUE ,  ...var_args : ( ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > | { length : number } | { __iterator__ : any } ) [] ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE [] > ;
}
declare module 'goog:goog.iter' {
  import iter = ಠ_ಠ.clutz.goog.iter;
  export = iter;
}
// Generated from iter/iter.js
declare namespace ಠ_ಠ.clutz.goog.iter {
  type Iterable = { length : number } | { __iterator__ : any } ;
}
declare module 'goog:goog.iter.Iterable' {
  import Iterable = ಠ_ಠ.clutz.goog.iter.Iterable;
  export default Iterable;
}
// Generated from iter/iter.js
declare namespace ಠ_ಠ.clutz.goog.iter {
  /**
   * Class/interface for iterators.
   */
  class Iterator < VALUE = any > implements Iterator < VALUE > {
    private noStructuralTyping_goog_iter_Iterator : any;
    /**
     * Returns the `Iterator` object itself.  This is used to implement
     * the iterator protocol in JavaScript 1.7
     * @param opt_keys Whether to return the keys or values. Default is to only return the values.  This is being used by the for-in loop (true) and the for-each-in loop (false).  Even though the param gives a hint about what the iterator will return there is no guarantee that it will return the keys when true is passed.
     */
    __iterator__ (opt_keys ? : boolean ) : ಠ_ಠ.clutz.goog.iter.Iterator < VALUE > ;
    /**
     * Returns the next value of the iteration as an an ES6 IIterableResult.
     */
    next ( ) : IteratorResult < VALUE > ;
  }
}
declare module 'goog:goog.iter.Iterator' {
  import Iterator = ಠ_ಠ.clutz.goog.iter.Iterator;
  export default Iterator;
}
