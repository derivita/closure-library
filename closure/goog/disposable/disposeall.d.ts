/**
 * Calls `dispose` on each member of the list that supports it. (If the
 * member is an ArrayLike, then `goog.disposeAll()` will be called
 * recursively on each of its members.) If the member is not an object with a
 * `dispose()` method, then it is ignored.
 * @param var_args The list.
 */
declare function disposeAll(...var_args: any[]): void;
export { disposeAll };
