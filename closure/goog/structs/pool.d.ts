import { Disposable } from '../disposable/disposable.js';
/**
 * A generic pool class. If min is greater than max, an error is thrown.
 */
export declare class Pool<T = any> extends Disposable {
    /**
     * A generic pool class. If min is greater than max, an error is thrown.
     * @param opt_minCount Min. number of objects (Default: 0).
     * @param opt_maxCount Max. number of objects (Default: 10).
     */
    constructor(opt_minCount?: number, opt_maxCount?: number);
    private noStructuralTyping_closure_goog_structs_pool_Pool;
    /**
     * The minimum delay between objects being made available, in milliseconds. If
     * this is 0, no minimum delay is enforced.
     */
    protected delay: number;
    /**
     * The time of the last object being made available, in milliseconds since the
     * epoch (i.e., the result of Date#toTime). If this is null, no access has
     * occurred yet.
     */
    protected lastAccess: number | null;
    /**
     * Sets the minimum count of the pool.
     * If min is greater than the max count of the pool, an error is thrown.
     * @param min The minimum count of the pool.
     */
    setMinimumCount(min: number): void;
    /**
     * Sets the maximum count of the pool.
     * If max is less than the min count of the pool, an error is thrown.
     * @param max The maximum count of the pool.
     */
    setMaximumCount(max: number): void;
    /**
     * Sets the minimum delay between objects being returned by getObject, in
     * milliseconds. This defaults to zero, meaning that no minimum delay is
     * enforced and objects may be used as soon as they're available.
     * @param delay The minimum delay, in milliseconds.
     */
    setDelay(delay: number): void;
    getObject(): T | undefined | null;
    /**
     * Returns an object to the pool of available objects so that it can be reused.
     * @param obj The object to return to the pool of free objects.
     * @return Whether the object was found in the Pool's set of in-use objects (in other words, whether any action was taken).
     */
    releaseObject(obj: T | null): boolean;
    /**
     * Adds an object to the collection of objects that are free. If the object can
     * not be added, then it is disposed.
     * @param obj The object to add to collection of free objects.
     */
    addFreeObject(obj: T | null): void;
    /**
     * Adjusts the objects held in the pool to be within the min/max constraints.
     *
     * NOTE: It is possible that the number of objects in the pool will still be
     * greater than the maximum count of objects allowed. This will be the case
     * if no more free objects can be disposed of to get below the minimum count
     * (i.e., all objects are in use).
     */
    adjustForMinMax(): void;
    /**
     * Should be overridden by sub-classes to return an instance of the object type
     * that is expected in the pool.
     * @return The created object.
     */
    createObject(): T | null;
    /**
     * Should be overridden to dispose of an object. Default implementation is to
     * remove all its members, which should render it useless. Calls the object's
     * `dispose()` method, if available.
     * @param obj The object to dispose.
     */
    disposeObject(obj: T | null): void;
    /**
     * Should be overridden to determine whether an object has become unusable and
     * should not be returned by getObject(). Calls the object's
     * `canBeReused()`  method, if available.
     * @param obj The object to test.
     * @return Whether the object can be reused.
     */
    objectCanBeReused(obj: T | null): boolean;
    /**
     * Returns true if the given object is in the pool.
     * @param obj The object to check the pool for.
     * @return Whether the pool contains the object.
     */
    contains(obj: T | null): boolean;
    /**
     * Returns the number of objects currently in the pool.
     * @return Number of objects currently in the pool.
     */
    getCount(): number;
    /**
     * Returns the number of objects currently in use in the pool.
     * @return Number of objects currently in use in the pool.
     */
    getInUseCount(): number;
    /**
     * Returns the number of objects currently free in the pool.
     * @return Number of objects currently free in the pool.
     */
    getFreeCount(): number;
    /**
     * Determines if the pool contains no objects.
     * @return Whether the pool contains no objects.
     */
    isEmpty(): boolean;
    /**
     * Disposes of the pool and all objects currently held in the pool.
     */
    disposeInternal(): void;
}
