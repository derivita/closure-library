import { Disposable } from '../disposable/disposable.js';
/**
 * A Delay object invokes the associated function after a specified delay. The
 * interval duration can be specified once in the constructor, or can be defined
 * each time the delay is started. Calling start on an active delay will reset
 * the timer.
 */
export declare class Delay<THIS = any> extends Disposable {
    /**
     * A Delay object invokes the associated function after a specified delay. The
     * interval duration can be specified once in the constructor, or can be defined
     * each time the delay is started. Calling start on an active delay will reset
     * the timer.
     * @param listener Function to call when the delay completes.
     * @param opt_interval The default length of the invocation delay (in milliseconds).
     * @param opt_handler The object scope to invoke the function in.
     */
    constructor(listener: (this: THIS | null) => any, opt_interval?: number, opt_handler?: THIS | null);
    private noStructuralTyping_closure_goog_async_delay_Delay;
    /**
     * Disposes of the object, cancelling the timeout if it is still outstanding and
     * removing all object references.
     */
    disposeInternal(): void;
    /**
     * Starts the delay timer. The provided listener function will be called after
     * the specified interval. Calling start on an active timer will reset the
     * delay interval.
     * @param opt_interval If specified, overrides the object's default interval with this one (in milliseconds).
     */
    start(opt_interval?: number): void;
    /**
     * Starts the delay timer if it's not already active.
     * @param opt_interval If specified and the timer is not already active, overrides the object's default interval with this one (in milliseconds).
     */
    startIfNotActive(opt_interval?: number): void;
    /**
     * Stops the delay timer if it is active. No action is taken if the timer is not
     * in use.
     */
    stop(): void;
    /**
     * Fires delay's action even if timer has already gone off or has not been
     * started yet; guarantees action firing. Stops the delay timer.
     */
    fire(): void;
    /**
     * Fires delay's action only if timer is currently active. Stops the delay
     * timer.
     */
    fireIfActive(): void;
    isActive(): boolean;
}
