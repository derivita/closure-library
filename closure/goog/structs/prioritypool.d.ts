import { Pool } from './pool.js';
/**
 * A generic pool class. If min is greater than max, an error is thrown.
 */
export declare class PriorityPool<VALUE = any> extends Pool<VALUE | null> {
    /**
     * A generic pool class. If min is greater than max, an error is thrown.
     * @param opt_minCount Min. number of objects (Default: 0).
     * @param opt_maxCount Max. number of objects (Default: 10).
     */
    constructor(opt_minCount?: number, opt_maxCount?: number);
    private noStructuralTyping_closure_goog_structs_prioritypool_PriorityPool;
    setDelay(delay: any): void;
    /**
     * Get a new object from the pool, if there is one available, otherwise
     * return undefined.
     * @param opt_callback The function to callback when an object is available. This could be immediately. If this is not present, then an object is immediately returned if available, or undefined if not.
     * @param opt_priority The priority of the request. A smaller value means a higher priority.
     * @return The new object from the pool if there is one available and a callback is not given. Otherwise, undefined.
     */
    getObject(opt_callback?: Function | null, opt_priority?: number): VALUE | undefined | null;
    /**
     * Adds an object to the collection of objects that are free. If the object can
     * not be added, then it is disposed.
     *
     * NOTE: This method does not remove the object from the in use collection.
     * @param obj The object to add to the collection of free objects.
     */
    addFreeObject(obj: VALUE | null): void;
    /**
     * Adjusts the objects held in the pool to be within the min/max constraints.
     *
     * NOTE: It is possible that the number of objects in the pool will still be
     * greater than the maximum count of objects allowed. This will be the case
     * if no more free objects can be disposed of to get below the minimum count
     * (i.e., all objects are in use).
     */
    adjustForMinMax(): void;
    disposeInternal(): void;
}
