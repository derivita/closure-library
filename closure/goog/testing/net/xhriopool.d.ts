import { XhrIoPool as netXhrIoPool } from '../../net/xhriopool.js';
import { XhrIo } from './xhrio.js';
import type { XhrIo as netXhrIo } from '../../net/xhrio.js';
/**
 * A pool containing a single mock XhrIo object.
 */
export declare class XhrIoPool extends netXhrIoPool {
    /**
     * A pool containing a single mock XhrIo object.
     * @param opt_xhr The mock XhrIo object.
     */
    constructor(opt_xhr?: XhrIo | null);
    private noStructuralTyping_closure_goog_testing_net_xhriopool_XhrIoPool;
    createObject(): netXhrIo;
    /**
     * Override adjustForMinMax to not call handleRequests because that causes
     * problems.  See b/31041087.
     */
    adjustForMinMax(): void;
    /**
     * Get the mock XhrIo used by this pool.
     * @return The mock XhrIo.
     */
    getXhr(): XhrIo;
}
