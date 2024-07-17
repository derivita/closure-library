import { Disposable } from '../disposable/disposable.js';
/**
 * A ConditionalDelay object invokes the associated function after a specified
 * interval delay and checks its return value. If the function returns
 * `true` the conditional delay is cancelled and {@see #onSuccess}
 * is called. Otherwise this object keeps to invoke the deferred function until
 * either it returns `true` or the timeout is exceeded. In the latter case
 * the {@see #onFailure} method will be called.
 *
 * The interval duration and timeout can be specified each time the delay is
 * started. Calling start on an active delay will reset the timer.
 */
export declare class ConditionalDelay extends Disposable {
    /**
     * A ConditionalDelay object invokes the associated function after a specified
     * interval delay and checks its return value. If the function returns
     * `true` the conditional delay is cancelled and {@see #onSuccess}
     * is called. Otherwise this object keeps to invoke the deferred function until
     * either it returns `true` or the timeout is exceeded. In the latter case
     * the {@see #onFailure} method will be called.
     *
     * The interval duration and timeout can be specified each time the delay is
     * started. Calling start on an active delay will reset the timer.
     * @param listener Function to call when the delay completes. Should return a value that type-converts to `true` if the call succeeded and this delay should be stopped.
     * @param opt_handler The object scope to invoke the function in.
     */
    constructor(listener: () => boolean, opt_handler?: object | null);
    private noStructuralTyping_closure_goog_async_conditionaldelay_ConditionalDelay;
    disposeInternal(): void;
    /**
     * Starts the delay timer. The provided listener function will be called
     * repeatedly after the specified interval until the function returns
     * `true` or the timeout is exceeded. Calling start on an active timer
     * will stop the timer first.
     * @param opt_interval The time interval between the function invocations (in milliseconds). Default is 0.
     * @param opt_timeout The timeout interval (in milliseconds). Takes precedence over the `opt_interval`, i.e. if the timeout is less than the invocation interval, the function will be called when the timeout is exceeded. A negative value means no timeout. Default is 0.
     */
    start(opt_interval?: number, opt_timeout?: number): void;
    /**
     * Stops the delay timer if it is active. No action is taken if the timer is not
     * in use.
     */
    stop(): void;
    isActive(): boolean;
    isDone(): boolean;
    /**
     * Called when the listener has been successfully executed and returned
     * `true`. The {@see #isDone} method should return `true` by now.
     * Designed for inheritance, should be overridden by subclasses or on the
     * instances if they care.
     */
    onSuccess(): void;
    /**
     * Called when this delayed call is cancelled because the timeout has been
     * exceeded, and the listener has never returned `true`.
     * Designed for inheritance, should be overridden by subclasses or on the
     * instances if they care.
     */
    onFailure(): void;
}
