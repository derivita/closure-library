import { Disposable } from '../disposable/disposable.js';
/**
 * A delayed callback that pegs to the next animation frame
 * instead of a user configurable timeout. By design, this should have
 * the same interface as goog.async.Delay.
 *
 * Uses requestAnimationFrame and friends when available, but falls
 * back to a timeout of AnimationDelay.TIMEOUT.
 *
 * For more on requestAnimationFrame and how you can use it to create smoother
 * animations, see:
 */
export declare class AnimationDelay<THIS = any> extends Disposable {
    /**
     * A delayed callback that pegs to the next animation frame
     * instead of a user configurable timeout. By design, this should have
     * the same interface as goog.async.Delay.
     *
     * Uses requestAnimationFrame and friends when available, but falls
     * back to a timeout of AnimationDelay.TIMEOUT.
     *
     * For more on requestAnimationFrame and how you can use it to create smoother
     * animations, see:
     * @param opt_window The window object to execute the delay in. Defaults to the global object.
     * @param opt_handler The object scope to invoke the function in.
     */
    constructor(listener: any, opt_window?: Window | null, opt_handler?: THIS | null);
    private noStructuralTyping_closure_goog_async_animationdelay_AnimationDelay;
    /**
     * Default wait timeout for animations (in milliseconds).  Only used for timed
     * animation, which uses a timer (setTimeout) to schedule animation.
     */
    static TIMEOUT: number;
    /**
     * Starts the delay timer. The provided listener function will be called
     * before the next animation frame.
     */
    start(): void;
    /**
     * Starts the delay timer if it's not already active.
     */
    startIfNotActive(): void;
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
    disposeInternal(): void;
}
