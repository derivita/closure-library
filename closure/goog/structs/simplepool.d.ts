import { Disposable } from '../disposable/disposable.js';
/**
 * A generic pool class. Simpler and more efficient than goog.structs.Pool
 * because it doesn't maintain a list of objects that are in use. This class
 * has constant overhead and doesn't create any additional objects as part of
 * the pool management after construction time.
 *
 * IMPORTANT: If the objects being pooled are arrays or maps that can have
 * unlimited number of properties, they need to be cleaned before being
 * returned to the pool.
 *
 * Also note that {@see goog.object.clean} actually allocates an array to clean
 * the object passed to it, so simply using this function would defy the
 * purpose of using the pool.
 */
export declare class SimplePool<T = any> extends Disposable {
    /**
     * A generic pool class. Simpler and more efficient than goog.structs.Pool
     * because it doesn't maintain a list of objects that are in use. This class
     * has constant overhead and doesn't create any additional objects as part of
     * the pool management after construction time.
     *
     * IMPORTANT: If the objects being pooled are arrays or maps that can have
     * unlimited number of properties, they need to be cleaned before being
     * returned to the pool.
     *
     * Also note that {@see goog.object.clean} actually allocates an array to clean
     * the object passed to it, so simply using this function would defy the
     * purpose of using the pool.
     * @param initialCount Initial number of objects to populate the free pool at construction time.
     * @param maxCount Maximum number of objects to keep in the free pool.
     */
    constructor(initialCount: number, maxCount: number);
    private noStructuralTyping_closure_goog_structs_simplepool_SimplePool;
    /**
     * Sets the `createObject` function which is used for creating a new
     * object in the pool.
     * @param createObjectFn Create object function which returns the newly created object.
     */
    setCreateObjectFn(createObjectFn: Function | null): void;
    /**
     * Sets the `disposeObject` function which is used for disposing of an
     * object in the pool.
     * @param disposeObjectFn Dispose object function which takes the object to dispose as a parameter.
     */
    setDisposeObjectFn(disposeObjectFn: Function | null): void;
    /**
     * Gets an unused object from the pool, if there is one available,
     * otherwise creates a new one.
     * @return An object from the pool or a new one if necessary.
     */
    getObject(): T | null;
    /**
     * Returns an object to the pool so that it can be reused. If the pool is
     * already full, the object is disposed instead.
     * @param obj The object to release.
     */
    releaseObject(obj: T | null): void;
    /**
     * Should be overridden by sub-classes to return an instance of the object type
     * that is expected in the pool.
     * @return The created object.
     */
    createObject(): T | null;
    /**
     * Should be overrideen to dispose of an object. Default implementation is to
     * remove all of the object's members, which should render it useless. Calls the
     * object's dispose method, if available.
     * @param obj The object to dispose.
     */
    disposeObject(obj: T | null): void;
    /**
     * Disposes of the pool and all objects currently held in the pool.
     */
    disposeInternal(): void;
}
