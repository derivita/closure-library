import { XhrIo } from './xhrio.js';
import { PriorityPool } from '../structs/prioritypool.js';
import type { Map } from '../structs/map.js';
/**
 * A pool of XhrIo objects.
 */
export declare class XhrIoPool extends PriorityPool {
    /**
     * A pool of XhrIo objects.
     * @param opt_headers Map of default headers to add to every request.
     * @param opt_minCount Minimum number of objects (Default: 0).
     * @param opt_maxCount Maximum number of objects (Default: 10).
     * @param opt_withCredentials Add credentials to every request (Default: false).
     */
    constructor(opt_headers?: Map | null, opt_minCount?: number, opt_maxCount?: number, opt_withCredentials?: boolean);
    private noStructuralTyping_closure_goog_net_xhriopool_XhrIoPool;
    /**
     * Creates an instance of an XhrIo object to use in the pool.
     * @return The created object.
     */
    createObject(): XhrIo;
    /**
     * Determine if an object has become unusable and should not be used.
     * @param obj The object to test.
     * @return Whether the object can be reused, which is true if the object is not disposed and not active.
     */
    objectCanBeReused(obj: object | null): boolean;
}
