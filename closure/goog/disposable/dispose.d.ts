/**
 * Calls `dispose` on the argument if it supports it. If obj is not an
 * object with a dispose() method, this is a no-op.
 * @param obj The object to dispose of.
 */
declare function dispose(obj: any): void;
export { dispose };
