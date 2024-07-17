/**
 * Throw an item without interrupting the current execution context.  For
 * example, if processing a group of items in a loop, sometimes it is useful
 * to report an error while still allowing the rest of the batch to be
 * processed.
 */
declare function throwException(exception: any): void;
export { throwException };
