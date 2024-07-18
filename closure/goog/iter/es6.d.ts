import { Iterable as GoogIterable, Iterator as GoogIterator } from './iter.js';
/**
 * Common interface extending both `goog.iter.Iterable` and ES6 `Iterable`,
 * and providing `toGoog()` and `toEs6()` methods to get either kind
 * of iterator.  `ShimIterable.of()` is the primary entry point for
 * this library.  If it is given an iterable that is *not* also an
 * iterator, then it will inherit any reusability from its argument
 * (i.e. `ShimIterable.of(mySet)` will be reusable, since mySet makes
 * a fresh Iterator every time, whereas `ShimIterable.of(myIterator)`
 * will be one-shot).
 *
 * `ShimGoogIterator` and `ShimEs6Iterator` extend `ShimIterable` and
 * also implement one or the other iterator API.  Since they extend
 * `ShimIterable`, it is easy to convert back and forth between the two
 * APIs.  Any such conversion will expose a view to the same underlying
 * iterator, so elements pulled via one API will not be available from
 * the other.
 */
interface ShimIterable<VALUE = any> extends Iterable<VALUE | null> {
    __iterator__(): GoogIterator<VALUE | null>;
    toGoog(): ShimGoogIterator<VALUE | null>;
    toEs6(): ShimEs6Iterator<VALUE | null>;
    of(iter: Iterable<VALUE | null> | Iterator<VALUE | null> | GoogIterator<VALUE | null> | GoogIterable): ShimIterable;
}
/**
 * Concrete (private) implementation of a non-iterator iterable.  This is
 * separate from the iterator versions since it supports iterables that
 * are not "one-shot".
 */
declare class ShimIterableImpl<VALUE = any> implements ShimIterable<VALUE | null> {
    constructor(func: () => Iterator<VALUE | null>);
    __iterator__(): any;
    toGoog(): any;
    [Symbol.iterator](): void;
    toEs6(): any;
}
/**
 * Concrete `goog.iter.Iterator` subclass that also implements `ShimIterable`.
 */
declare class ShimGoogIterator<VALUE = any> extends GoogIterator<VALUE | null> implements ShimIterable<VALUE | null> {
    constructor(iter: Iterator<VALUE | null>);
    next(): IteratorResult<VALUE | null>;
    toGoog(): any;
    [Symbol.iterator](): void;
    toEs6(): any;
}
/**
 * Concrete ES6 `Iterator` that also implements `ShimIterable`.
 */
declare class ShimEs6Iterator<VALUE = any> extends ShimIterableImpl<VALUE | null> implements IterableIterator<VALUE | null> {
    constructor(iter: Iterator<VALUE | null>);
    next(): any;
}
declare const _default: {
    ShimIterable: any;
    ShimEs6Iterator: typeof ShimEs6Iterator;
    ShimGoogIterator: typeof ShimGoogIterator;
};
export default _default;
