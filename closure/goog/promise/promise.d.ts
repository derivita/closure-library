import { Thenable } from './thenable.js';
import { DebugError } from '../debug/error.js';
import { Resolver } from './resolver.js';
/**
 * NOTE: This class was created in anticipation of the built-in Promise type
 * being standardized and implemented across browsers. Now that Promise is
 * available in modern browsers, and is automatically polyfilled by the Closure
 * Compiler, by default, most new code should use native `Promise`
 * instead of `Promise`. However, `Promise` has the
 * concept of cancellation which native Promises do not yet have. So code
 * needing cancellation may still want to use `Promise`.
 *
 * Promises provide a result that may be resolved asynchronously. A Promise may
 * be resolved by being fulfilled with a fulfillment value, rejected with a
 * rejection reason, or blocked by another Promise. A Promise is said to be
 * settled if it is either fulfilled or rejected. Once settled, the Promise
 * result is immutable.
 *
 * Promises may represent results of any type, including undefined. Rejection
 * reasons are typically Errors, but may also be of any type. Closure Promises
 * allow for optional type annotations that enforce that fulfillment values are
 * of the appropriate types at compile time.
 *
 * The result of a Promise is accessible by calling `then` and registering
 * `onFulfilled` and `onRejected` callbacks. Once the Promise
 * is settled, the relevant callbacks are invoked with the fulfillment value or
 * rejection reason as argument. Callbacks are always invoked in the order they
 * were registered, even when additional `then` calls are made from inside
 * another callback. A callback is always run asynchronously sometime after the
 * scope containing the registering `then` invocation has returned.
 *
 * If a Promise is resolved with another Promise, the first Promise will block
 * until the second is settled, and then assumes the same result as the second
 * Promise. This allows Promises to depend on the results of other Promises,
 * linking together multiple asynchronous operations.
 *
 * This implementation is compatible with the Promises/A+ specification and
 * passes that specification's conformance test suite. A Closure Promise may be
 * resolved with a Promise instance (or sufficiently compatible Promise-like
 * object) created by other Promise implementations. From the specification,
 * Promise-like objects are known as "Thenables".
 */
export declare class Promise<TYPE = any, RESOLVER_CONTEXT = any> implements Thenable<TYPE | null> {
    /**
     * NOTE: This class was created in anticipation of the built-in Promise type
     * being standardized and implemented across browsers. Now that Promise is
     * available in modern browsers, and is automatically polyfilled by the Closure
     * Compiler, by default, most new code should use native `Promise`
     * instead of `Promise`. However, `Promise` has the
     * concept of cancellation which native Promises do not yet have. So code
     * needing cancellation may still want to use `Promise`.
     *
     * Promises provide a result that may be resolved asynchronously. A Promise may
     * be resolved by being fulfilled with a fulfillment value, rejected with a
     * rejection reason, or blocked by another Promise. A Promise is said to be
     * settled if it is either fulfilled or rejected. Once settled, the Promise
     * result is immutable.
     *
     * Promises may represent results of any type, including undefined. Rejection
     * reasons are typically Errors, but may also be of any type. Closure Promises
     * allow for optional type annotations that enforce that fulfillment values are
     * of the appropriate types at compile time.
     *
     * The result of a Promise is accessible by calling `then` and registering
     * `onFulfilled` and `onRejected` callbacks. Once the Promise
     * is settled, the relevant callbacks are invoked with the fulfillment value or
     * rejection reason as argument. Callbacks are always invoked in the order they
     * were registered, even when additional `then` calls are made from inside
     * another callback. A callback is always run asynchronously sometime after the
     * scope containing the registering `then` invocation has returned.
     *
     * If a Promise is resolved with another Promise, the first Promise will block
     * until the second is settled, and then assumes the same result as the second
     * Promise. This allows Promises to depend on the results of other Promises,
     * linking together multiple asynchronous operations.
     *
     * This implementation is compatible with the Promises/A+ specification and
     * passes that specification's conformance test suite. A Closure Promise may be
     * resolved with a Promise instance (or sufficiently compatible Promise-like
     * object) created by other Promise implementations. From the specification,
     * Promise-like objects are known as "Thenables".
     * @param opt_context An optional context for executing the resolver function. If unspecified, the resolver function will be executed in the default scope.
     */
    constructor(resolver: any, opt_context?: RESOLVER_CONTEXT | null);
    private noStructuralTyping_closure_goog_promise_promise_Promise;
    static LONG_STACK_TRACES: boolean;
    static UNHANDLED_REJECTION_DELAY: number;
    static DEFAULT_MAX_UNUSED: number;
    /**
     *
     * @return A new Promise that is immediately resolved with the given value. If the input value is already a Promise, it will be returned immediately without creating a new instance.
     */
    static resolve<VALUE = any, RESULT = any>(opt_value?: VALUE | null): RESULT | null;
    /**
     *
     * @return A new Promise that is immediately rejected with the given reason.
     */
    static reject(opt_reason?: any): Promise;
    /**
     *
     * @return A Promise that receives the result of the first Promise (or Promise-like) input to settle immediately after it settles.
     */
    static race<TYPE = any>(promises: (Promise<TYPE | null> | Thenable<TYPE | null> | Thenable | any | null)[]): Promise<TYPE | null>;
    /**
     *
     * @return A Promise that receives a list of every fulfilled value once every input Promise (or Promise-like) is successfully fulfilled, or is rejected with the first rejection reason immediately after it is rejected.
     */
    static all<TYPE = any>(promises: (Promise<TYPE | null> | Thenable<TYPE | null> | Thenable | any | null)[]): Promise<(TYPE | null)[]>;
    /**
     *
     * @return A Promise that resolves with a list of result objects once all input Promises (or Promise-like) have settled. Each result object contains a 'fulfilled' boolean indicating whether an input Promise was fulfilled or rejected. For fulfilled Promises, the resulting value is stored in the 'value' field. For rejected Promises, the rejection reason is stored in the 'reason' field.
     */
    static allSettled<TYPE = any>(promises: (Promise<TYPE | null> | Thenable<TYPE | null> | Thenable | any | null)[]): Promise<{
        'fulfilled': boolean;
        'value': TYPE | undefined | null;
        'reason': any | undefined;
    }[]>;
    /**
     *
     * @return A Promise that receives the value of the first input to be fulfilled, or is rejected with a list of every rejection reason if all inputs are rejected.
     */
    static firstFulfilled<TYPE = any>(promises: (Promise<TYPE | null> | Thenable<TYPE | null> | Thenable | any | null)[]): Promise<TYPE | null>;
    static withResolver<TYPE = any>(): Resolver<TYPE | null>;
    /**
     * Adds callbacks that will operate on the result of the Promise, returning a
     * new child Promise.
     *
     * If the Promise is fulfilled, the `onFulfilled` callback will be invoked
     * with the fulfillment value as argument, and the child Promise will be
     * fulfilled with the return value of the callback. If the callback throws an
     * exception, the child Promise will be rejected with the thrown value instead.
     *
     * If the Promise is rejected, the `onRejected` callback will be invoked
     * with the rejection reason as argument, and the child Promise will be resolved
     * with the return value or rejected with the thrown value of the callback.
     * @param opt_onFulfilled A function that will be invoked with the fulfillment value if the Promise is fulfilled.
     * @param opt_onRejected A function that will be invoked with the rejection reason if the Promise is rejected.
     * @param opt_context An optional context object that will be the execution context for the callbacks. By default, functions are executed with the default this.
     * @return A new Promise that will receive the result of the fulfillment or rejection callback.
     */
    then<VALUE = any, THIS = any, RESULT = any>(opt_onFulfilled?: ((this: THIS | null) => (VALUE | null)) | null, opt_onRejected?: ((this: THIS | null) => any) | null, opt_context?: THIS | null): RESULT | null;
    /**
     * Adds a callback that will be invoked when the Promise is settled (fulfilled
     * or rejected). The callback receives no argument, and no new child Promise is
     * created. This is useful for ensuring that cleanup takes place after certain
     * asynchronous operations. Callbacks added with `thenAlways` will be
     * executed in the same order with other calls to `then`,
     * `thenAlways`, or `thenCatch`.
     *
     * Since it does not produce a new child Promise, cancellation propagation is
     * not prevented by adding callbacks with `thenAlways`. A Promise that has
     * a cleanup handler added with `thenAlways` will be canceled if all of
     * its children created by `then` (or `thenCatch`) are canceled.
     * Additionally, since any rejections are not passed to the callback, it does
     * not stop the unhandled rejection handler from running.
     * @param opt_context An optional context object that will be the execution context for the callbacks. By default, functions are executed in the global scope.
     * @return This Promise, for chaining additional calls.
     */
    thenAlways<THIS = any>(onSettled: any, opt_context?: THIS | null): Promise<TYPE | null>;
    /**
     * Adds a callback that will be invoked only if the Promise is rejected. This
     * is equivalent to `then(null, onRejected)`.
     *
     * Note: Prefer using `catch` which is interoperable with native browser
     * Promises.
     * @param onRejected A function that will be invoked with the rejection reason if this Promise is rejected.
     * @param opt_context An optional context object that will be the execution context for the callbacks. By default, functions are executed in the global scope.
     * @return A new Promise that will resolve either to the value of this promise, or if this promise is rejected, the result of `onRejected`. The returned Promise will reject if `onRejected` throws.
     */
    thenCatch<THIS = any>(onRejected: (this: THIS | null) => any, opt_context?: THIS | null): Promise;
    /**
     * Adds a callback that will be invoked only if the Promise is rejected. This
     * is equivalent to `then(null, onRejected)`.
     * @param onRejected A function that will be invoked with the rejection reason if this Promise is rejected.
     * @param opt_context An optional context object that will be the execution context for the callbacks. By default, functions are executed in the global scope.
     * @return A new Promise that will resolve either to the value of this promise, or if this promise is rejected, the result of `onRejected`. The returned Promise will reject if `onRejected` throws.
     */
    catch<THIS = any>(a: (this: THIS | null) => any, b?: THIS | null): Promise;
    /**
     * Cancels the Promise if it is still pending by rejecting it with a cancel
     * Error. No action is performed if the Promise is already resolved.
     *
     * All child Promises of the canceled Promise will be rejected with the same
     * cancel error, as with normal Promise rejection. If the Promise to be canceled
     * is the only child of a pending Promise, the parent Promise will also be
     * canceled. Cancellation may propagate upward through multiple generations.
     * @param opt_message An optional debugging message for describing the cancellation reason.
     */
    cancel(opt_message?: string): void;
    /**
     * Sets a handler that will be called with reasons from unhandled rejected
     * Promises. If the rejected Promise (or one of its descendants) has an
     * `onRejected` callback registered, the rejection will be considered
     * handled, and the rejection handler will not be called.
     *
     * By default, unhandled rejections are rethrown so that the error may be
     * captured by the developer console or a `window.onerror` handler.
     * @param handler A function that will be called with reasons from rejected Promises. Defaults to `throwException`.
     */
    static setUnhandledRejectionHandler(handler: () => any): void;
}
export declare namespace Promise {
    /**
     * The possible internal states for a Promise. These states are not directly
     * observable to external callers.
     */
    enum State_ {
        PENDING = 0,
        BLOCKED = 1,
        FULFILLED = 2,
        REJECTED = 3
    }
    /**
     * Entries in the callback chain. Each call to `then`,
     * `thenCatch`, or `thenAlways` creates an entry containing the
     * functions that may be invoked once the Promise is settled.
     */
    class CallbackEntry_ {
        /**
         * Entries in the callback chain. Each call to `then`,
         * `thenCatch`, or `thenAlways` creates an entry containing the
         * functions that may be invoked once the Promise is settled.
         */
        constructor();
        private noStructuralTyping_closure_goog_promise_promise_CallbackEntry_;
        child: Promise | null;
        onFulfilled: Function | null;
        onRejected: Function | null;
        context: any;
        next: Promise.CallbackEntry_ | null;
        /**
         * A boolean value to indicate this is a "thenAlways" callback entry.
         * Unlike a normal "then/thenVoid" a "thenAlways doesn't participate
         * in "cancel" considerations but is simply an observer and requires
         * special handling.
         */
        always: boolean;
        /**
         * clear the object prior to reuse
         */
        reset(): void;
    }
    /**
     * Error used as a rejection reason for canceled Promises.  This will still be
     * a rejection, but should generally be ignored by other error handlers (because
     * cancellation should not be a reportable error).
     */
    class CancellationError extends DebugError {
        /**
         * Error used as a rejection reason for canceled Promises.  This will still be
         * a rejection, but should generally be ignored by other error handlers (because
         * cancellation should not be a reportable error).
         */
        constructor(opt_message?: string);
        private noStructuralTyping_closure_goog_promise_promise_CancellationError;
    }
    /**
     * Internal implementation of the resolver interface.
     */
    class Resolver_<TYPE = any> implements Resolver<TYPE | null> {
        /**
         * Internal implementation of the resolver interface.
         */
        constructor(promise: Promise<TYPE | null>, resolve: () => any, reject: any);
        private noStructuralTyping_closure_goog_promise_promise_Resolver_;
        promise: any;
        resolve: any;
        reject: any;
    }
}
