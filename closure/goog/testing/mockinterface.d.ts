import { Promise } from '../promise/promise.js';
export interface MockInterface {
    /**
     * Write down all the expected functions that have been called on the
     * mock so far. From here on out, future function calls will be
     * compared against this list.
     */
    $replay(): any;
    /**
     * Reset the mock.
     */
    $reset(): any;
    /**
     * Waits for the Mock to gather expectations and then performs verify.
     */
    $waitAndVerify(): Promise<undefined>;
    /**
     * Assert that the expected function calls match the actual calls.
     */
    $verify(): any;
}
