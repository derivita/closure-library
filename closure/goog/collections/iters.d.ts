/**
 * Get the iterator for an iterable.
 */
declare function getIterator<VALUE = any>(iterable: Iterable<VALUE | null>): Iterator<VALUE | null>;
export { getIterator };
/**
 * Call a function with every value of an iterable.
 *
 * Warning: this function will never halt if given an iterable that
 * is never exhausted.
 */
declare function forEach<VALUE = any>(iterator: Iterator<VALUE | null>, f: () => any): void;
export { forEach };
/**
 * Maps the values of one iterable to create another iterable.
 *
 * When next() is called on the returned iterable, it will call the given
 * function `f` with the next value of the given iterable
 * `iterable` until the given iterable is exhausted.
 * @return The created iterable that gives the mapped values.
 */
export declare function map<VALUE = any, RESULT = any>(iterable: Iterable<VALUE | null>, f: () => (RESULT | null)): IterableIterator<RESULT | null>;
/**
 * Filter elements from one iterator to create another iterable.
 *
 * When next() is called on the returned iterator, it will call next() on the
 * given iterator and call the given function `f` with that value until `true`
 * is returned or the given iterator is exhausted.
 * @return The created iterable that gives the mapped values.
 */
export declare function filter<VALUE = any>(iterable: Iterable<VALUE | null>, f: () => boolean): IterableIterator<VALUE | null>;
/**
 * Concatenates multiple iterators to create a new iterable.
 *
 * When next() is called on the return iterator, it will call next() on the
 * current passed iterator. When the current passed iterator is exhausted, it
 * will move on to the next iterator until there are no more left.
 *
 * All generator return values will be ignored (i.e. when childIter.next()
 * returns {done: true, value: notUndefined} it will be treated as just
 * {done: true}).
 */
export declare function concat<VALUE = any>(...iterables: Iterable<VALUE | null>[]): IterableIterator<VALUE | null>;
/**
 * Creates an array containing the values from the given iterator.
 */
export declare function toArray<VALUE = any>(iterator: Iterator<VALUE | null>): (VALUE | null)[];
