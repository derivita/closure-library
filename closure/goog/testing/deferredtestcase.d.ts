import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { AsyncTestCase } from './asynctestcase.js';
/**
 * A test case that can asynchronously wait on a Deferred object.
 */
export declare class DeferredTestCase extends AsyncTestCase {
    /**
     * A test case that can asynchronously wait on a Deferred object.
     * @param opt_name A descriptive name for the test case.
     */
    constructor(opt_name?: string);
    private noStructuralTyping_closure_goog_testing_deferredtestcase_DeferredTestCase;
    /**
     * Preferred way of creating a DeferredTestCase. Creates one and initializes it
     * with the G_testRunner.
     * @param opt_name A descriptive name for the test case.
     * @return The created DeferredTestCase.
     */
    static createAndInstall(opt_name?: string): DeferredTestCase;
    /**
     * Handler for when the test produces an error.
     * @param err The error object.
     */
    protected onError(err: Error | string | null): void;
    /**
     * Handler for when the test succeeds.
     */
    protected onSuccess(): void;
    /**
     * Adds a callback to update the wait message of this async test case. Using
     * this method generously also helps to document the test flow.
     * @param msg The update wait status message.
     * @param d The deferred object to add the waitForAsync callback to.
     */
    addWaitForAsync(msg: string, d: Deferred | null): void;
    /**
     * Wires up given Deferred object to the test case, then starts the
     * Deferred object's callback.
     * @param a The wait status message or the deferred object to wait for.
     * @param opt_b The deferred object to wait for.
     */
    waitForDeferred(a: string | Deferred, opt_b?: Deferred | null): void;
}
