import { Thenable } from '../../../../../closure/goog/promise/thenable.js';
import { DebugError } from '../../../../../closure/goog/debug/error.js';
/**
 * A Deferred represents the result of an asynchronous operation. A Deferred
 * instance has no result when it is created, and is "fired" (given an initial
 * result) by calling `callback` or `errback`.
 *
 * Once fired, the result is passed through a sequence of callback functions
 * registered with `addCallback` or `addErrback`. The functions may
 * mutate the result before it is passed to the next function in the sequence.
 *
 * Callbacks and errbacks may be added at any time, including after the Deferred
 * has been "fired". If there are no pending actions in the execution sequence
 * of a fired Deferred, any new callback functions will be called with the last
 * computed result. Adding a callback function is the only way to access the
 * result of the Deferred.
 *
 * If a Deferred operation is canceled, an optional user-provided cancellation
 * function is invoked which may perform any special cleanup, followed by firing
 * the Deferred's errback sequence with a `CanceledError`. If the
 * Deferred has already fired, cancellation is ignored.
 *
 * Deferreds may be templated to a specific type they produce using generics
 * with syntax such as:
 *
 * /** @type {Deferred<string>} *\
 * var d = new Deferred();
 * // Compiler can infer that foo is a string.
 * d.addCallback(function(foo) {...});
 * d.callback('string');  // Checked to be passed a string
 *
 * Since deferreds are often used to produce different values across a chain,
 * the type information is not propagated across chains, but rather only
 * associated with specifically cast objects.
 */
export declare class Deferred<VALUE = any> implements Thenable<VALUE | null> {
    /**
     * A Deferred represents the result of an asynchronous operation. A Deferred
     * instance has no result when it is created, and is "fired" (given an initial
     * result) by calling `callback` or `errback`.
     *
     * Once fired, the result is passed through a sequence of callback functions
     * registered with `addCallback` or `addErrback`. The functions may
     * mutate the result before it is passed to the next function in the sequence.
     *
     * Callbacks and errbacks may be added at any time, including after the Deferred
     * has been "fired". If there are no pending actions in the execution sequence
     * of a fired Deferred, any new callback functions will be called with the last
     * computed result. Adding a callback function is the only way to access the
     * result of the Deferred.
     *
     * If a Deferred operation is canceled, an optional user-provided cancellation
     * function is invoked which may perform any special cleanup, followed by firing
     * the Deferred's errback sequence with a `CanceledError`. If the
     * Deferred has already fired, cancellation is ignored.
     *
     * Deferreds may be templated to a specific type they produce using generics
     * with syntax such as:
     *
     * /** @type {Deferred<string>} *\
     * var d = new Deferred();
     * // Compiler can infer that foo is a string.
     * d.addCallback(function(foo) {...});
     * d.callback('string');  // Checked to be passed a string
     *
     * Since deferreds are often used to produce different values across a chain,
     * the type information is not propagated across chains, but rather only
     * associated with specifically cast objects.
     * @param opt_onCancelFunction A function that will be called if the Deferred is canceled. If provided, this function runs before the Deferred is fired with a `CanceledError`.
     * @param opt_defaultScope The default object context to call callbacks and errbacks in.
     */
    constructor(opt_onCancelFunction?: Function | null, opt_defaultScope?: object | null);
    private noStructuralTyping_third_party_closure_goog_mochikit_async_deferred_Deferred;
    static STRICT_ERRORS: boolean;
    static LONG_STACK_TRACES: boolean;
    /**
     * Cancels a Deferred that has not yet been fired, or is blocked on another
     * deferred operation. If this Deferred is waiting for a blocking Deferred to
     * fire, the blocking Deferred will also be canceled.
     *
     * If this Deferred was created by calling branch() on a parent Deferred with
     * opt_propagateCancel set to true, the parent may also be canceled. If
     * opt_deepCancel is set, cancel() will be called on the parent (as well as any
     * other ancestors if the parent is also a branch). If one or more branches were
     * created with opt_propagateCancel set to true, the parent will be canceled if
     * cancel() is called on all of those branches.
     * @param opt_deepCancel If true, cancels this Deferred's parent even if cancel() hasn't been called on some of the parent's branches. Has no effect on a branch without opt_propagateCancel set to true.
     */
    cancel(opt_deepCancel?: boolean): void;
    /**
     * Fire the execution sequence for this Deferred by passing the starting result
     * to the first registered callback.
     * @param opt_result The starting result.
     */
    callback(opt_result?: VALUE | null): void;
    /**
     * Fire the execution sequence for this Deferred by passing the starting error
     * result to the first registered errback.
     * @param opt_result The starting error.
     */
    errback(opt_result?: any): void;
    /**
     *
     * @param handler A function that will be called with the reason of Deferred's failure on unhandled errors. If none is specified, errors will fail with `throw`.
     */
    static setUnhandledErrorHandler(handler: () => any): void;
    /**
     * Register a callback function to be called with a successful result. If no
     * value is returned by the callback function, the result value is unchanged. If
     * a new value is returned, it becomes the Deferred result and will be passed to
     * the next callback in the execution sequence.
     *
     * If the function throws an error, the error becomes the new result and will be
     * passed to the next errback in the execution chain.
     *
     * If the function returns a Deferred, the execution sequence will be blocked
     * until that Deferred fires. Its result will be passed to the next callback (or
     * errback if it is an error result) in this Deferred's execution sequence.
     * @param cb The function to be called with a successful result.
     * @param opt_scope An optional scope to call the callback in.
     * @return This Deferred.
     */
    addCallback<T = any>(cb: (this: T | null) => any, opt_scope?: T | null): Deferred;
    /**
     * Register a callback function to be called with an error result. If no value
     * is returned by the function, the error result is unchanged. If a new error
     * value is returned or thrown, that error becomes the Deferred result and will
     * be passed to the next errback in the execution sequence.
     *
     * If the errback function handles the error by returning a non-error value,
     * that result will be passed to the next normal callback in the sequence.
     *
     * If the function returns a Deferred, the execution sequence will be blocked
     * until that Deferred fires. Its result will be passed to the next callback (or
     * errback if it is an error result) in this Deferred's execution sequence.
     * @param eb The function to be called on an unsuccessful result.
     * @param opt_scope An optional scope to call the errback in.
     * @return This Deferred.
     */
    addErrback<T = any>(eb: (this: T | null) => any, opt_scope?: T | null): Deferred<VALUE | null>;
    /**
     * Registers one function as both a callback and errback.
     * @param f The function to be called on any result.
     * @param opt_scope An optional scope to call the function in.
     * @return This Deferred.
     */
    addBoth<T = any>(f: (this: T | null) => any, opt_scope?: T | null): Deferred;
    /**
     * Like addBoth, but propagates uncaught exceptions in the errback.
     * @param f The function to be called on any result.
     * @param opt_scope An optional scope to call the function in.
     * @return This Deferred.
     */
    addFinally<T = any>(f: (this: T | null) => any, opt_scope?: T | null): Deferred<VALUE | null>;
    /**
     * Registers a callback function and an errback function at the same position
     * in the execution sequence. Only one of these functions will execute,
     * depending on the error state during the execution sequence.
     *
     * NOTE: This is not equivalent to {@code def.addCallback().addErrback()}! If
     * the callback is invoked, the errback will be skipped, and vice versa.
     * @param cb The function to be called on a successful result.
     * @param eb The function to be called on an unsuccessful result.
     * @param opt_scope An optional scope to call the functions in.
     * @return This Deferred.
     */
    addCallbacks<T = any>(cb: ((this: T | null) => any) | null, eb: ((this: T | null) => any) | null, opt_scope?: T | null): Deferred;
    /**
     * Implements {@see Thenable} for seamless integration with
     * {@see Promise}.
     * Deferred results are mutable and may represent multiple values over
     * their lifetime. Calling `then` on a Deferred returns a Promise
     * with the result of the Deferred at that point in its callback chain.
     * Note that if the Deferred result is never mutated, and only
     * `then` calls are made, the Deferred will behave like a Promise.
     */
    then(opt_onFulfilled: any, opt_onRejected: any, opt_context: any): any;
    /**
     * Links another Deferred to the end of this Deferred's execution sequence. The
     * result of this execution sequence will be passed as the starting result for
     * the chained Deferred, invoking either its first callback or errback.
     * @param otherDeferred The Deferred to chain.
     * @return This Deferred.
     */
    chainDeferred(otherDeferred: Deferred): Deferred;
    /**
     * Makes this Deferred wait for another Deferred's execution sequence to
     * complete before continuing.
     *
     * This is equivalent to adding a callback that returns `otherDeferred`,
     * but doesn't prevent additional callbacks from being added to
     * `otherDeferred`.
     * @param otherDeferred The Deferred to wait for.
     * @return This Deferred.
     */
    awaitDeferred(otherDeferred: Deferred | Thenable): Deferred;
    /**
     * Creates a branch off this Deferred's execution sequence, and returns it as a
     * new Deferred. The branched Deferred's starting result will be shared with the
     * parent at the point of the branch, even if further callbacks are added to the
     * parent.
     *
     * All branches at the same stage in the execution sequence will receive the
     * same starting value.
     * @param opt_propagateCancel If cancel() is called on every child branch created with opt_propagateCancel, the parent will be canceled as well.
     * @return A Deferred that will be started with the computed result from this stage in the execution sequence.
     */
    branch(opt_propagateCancel?: boolean): Deferred<VALUE | null>;
    hasFired(): boolean;
    /**
     *
     * @param res The latest result in the execution sequence.
     * @return Whether the current result is an error that should cause the next errback to fire. May be overridden by subclasses to handle special error types.
     */
    protected isError(res: any): boolean;
    /**
     * Return the most recent value fired.
     */
    getLastValueForMigration(): VALUE | undefined | null;
    /**
     * Creates a Deferred that has an initial result.
     * @param opt_result The result.
     * @return The new Deferred.
     */
    static succeed(opt_result?: any): Deferred;
    /**
     * Creates a Deferred that fires when the given promise resolves.
     * Use only during migration to Promises.
     *
     * Note: If the promise resolves to a thenable value (which is not allowed by
     * conforming promise implementations), then the deferred may behave
     * unexpectedly as it tries to wait on it. This should not be a risk when using
     * Promise, Deferred, or native Promise objects.
     * @return The new Deferred.
     */
    static fromPromise<T = any>(promise: PromiseLike<T | null>): Deferred<T | null>;
    /**
     * Creates a Deferred that has an initial error result.
     * @param res The error result.
     * @return The new Deferred.
     */
    static fail(res: any): Deferred;
    /**
     * Creates a Deferred that has already been canceled.
     * @return The new Deferred.
     */
    static canceled(): Deferred;
    /**
     * Normalizes values that may or may not be Deferreds.
     *
     * If the input value is a Deferred, the Deferred is branched (so the original
     * execution sequence is not modified) and the input callback added to the new
     * branch. The branch is returned to the caller.
     *
     * If the input value is not a Deferred, the callback will be executed
     * immediately and an already firing Deferred will be returned to the caller.
     *
     * In the following (contrived) example, if <code>isImmediate</code> is true
     * then 3 is alerted immediately, otherwise 6 is alerted after a 2-second delay.
     *
     * <pre>
     * var value;
     * if (isImmediate) {
     * value = 3;
     * } else {
     * value = new Deferred();
     * setTimeout(function() { value.callback(6); }, 2000);
     * }
     *
     * var d = Deferred.when(value, alert);
     * </pre>
     * @param value Deferred or normal value to pass to the callback.
     * @param callback The callback to execute.
     * @param opt_scope An optional scope to call the callback in.
     * @return A new Deferred that will call the input callback with the input value.
     */
    static when<T = any>(value: any, callback: (this: T | null) => any, opt_scope?: T | null): Deferred;
    /**
     * Asserts that there are no pending deferred errors. If there are any
     * scheduled errors, one will be thrown immediately to make this function fail.
     */
    static assertNoErrors(): void;
}
export declare namespace Deferred {
    /**
     * An error sub class that is used when a Deferred has already been called.
     */
    class AlreadyCalledError extends DebugError {
        /**
         * An error sub class that is used when a Deferred has already been called.
         * @param deferred The Deferred.
         */
        constructor(deferred: Deferred);
        private noStructuralTyping_third_party_closure_goog_mochikit_async_deferred_AlreadyCalledError;
        /**
         * The Deferred that raised this error.
         */
        deferred: Deferred | null;
    }
    /**
     * An error sub class that is used when a Deferred is canceled.
     */
    class CanceledError extends DebugError {
        /**
         * An error sub class that is used when a Deferred is canceled.
         * @param deferred The Deferred object.
         */
        constructor(deferred: Deferred);
        private noStructuralTyping_third_party_closure_goog_mochikit_async_deferred_CanceledError;
        /**
         * The Deferred that raised this error.
         */
        deferred: Deferred | null;
    }
    /**
     * Wrapper around errors that are scheduled to be thrown by failing deferreds
     * after a timeout.
     */
    class Error_ {
        /**
         * Wrapper around errors that are scheduled to be thrown by failing deferreds
         * after a timeout.
         * @param error Error from a failing deferred.
         */
        constructor(error: any);
        private noStructuralTyping_third_party_closure_goog_mochikit_async_deferred_Error_;
        /**
         * Actually throws the error and removes it from the list of pending
         * deferred errors.
         */
        throwError(): void;
        /**
         * Resets the error throw timer.
         */
        resetTimer(): void;
    }
}
