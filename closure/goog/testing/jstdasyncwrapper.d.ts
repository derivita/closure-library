import { Promise } from '../promise/promise.js';
/**
 * Wraps an object's methods by passing in a Queue that is based on the JSTD
 * async API. The queue exposes a promise that resolves when the queue
 * completes. This promise can be used in JsUnit tests.
 * @param original The original JSTD test object. The object should contain methods such as testXyz or setUp.
 * @return A object that has all test methods wrapped in a fake testing queue.
 */
export declare function convertToAsyncTestObj<T = any>(original: T | null): T | null;
/**
 * A queue that mirrors the JSTD Async Queue api but exposes a promise that
 * resolves once the queue is complete for compatibility with JsUnit.
 */
export declare class Queue {
    /**
     * A queue that mirrors the JSTD Async Queue api but exposes a promise that
     * resolves once the queue is complete for compatibility with JsUnit.
     * @param testObj The test object containing all test methods. This object is passed into queue callbacks as the "this" object.
     */
    constructor(testObj: object);
    private noStructuralTyping_closure_goog_testing_jstdasyncwrapper_Queue;
    /**
     *
     * @param stepName The name of the current testing step, or the fn parameter if no stepName is desired.
     * @param opt_fn A function that will be called.
     */
    defer(stepName: string | (() => any), opt_fn?: () => any): void;
    /**
     * Starts the execution.
     */
    startExecuting(): Promise<undefined>;
}
