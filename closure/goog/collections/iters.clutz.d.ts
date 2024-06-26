//!! generated by clutz.
// Generated from collections/iters.js
declare namespace ಠ_ಠ.clutz.goog.collections.iters {
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
  function concat < VALUE = any > ( ...iterables : Iterable < VALUE > [] ) : IterableIterator < VALUE > ;
  /**
   * Filter elements from one iterator to create another iterable.
   *
   * When next() is called on the returned iterator, it will call next() on the
   * given iterator and call the given function `f` with that value until `true`
   * is returned or the given iterator is exhausted.
   */
  function filter < VALUE = any > (iterable : Iterable < VALUE > , f : (a : VALUE ) => boolean ) : IterableIterator < VALUE > ;
  function forEach < VALUE = any > (iterator : Iterator < VALUE > , f : (a : VALUE ) => any ) : void ;
  function getIterator < VALUE = any > (iterable : Iterable < VALUE > ) : Iterator < VALUE > ;
  /**
   * Maps the values of one iterable to create another iterable.
   *
   * When next() is called on the returned iterable, it will call the given
   * function `f` with the next value of the given iterable
   * `iterable` until the given iterable is exhausted.
   */
  function map < VALUE = any , RESULT = any > (iterable : Iterable < VALUE > , f : (a : VALUE ) => RESULT ) : IterableIterator < RESULT > ;
  /**
   * Creates an array containing the values from the given iterator.
   */
  function toArray < VALUE = any > (iterator : Iterator < VALUE > ) : VALUE [] ;
}
declare module 'goog:goog.collections.iters' {
  import iters = ಠ_ಠ.clutz.goog.collections.iters;
  export = iters;
}
