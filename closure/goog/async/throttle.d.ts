import { Disposable } from '../disposable/disposable.js';
/**
 * Throttle will perform an action that is passed in no more than once
 * per interval (specified in milliseconds). If it gets multiple signals
 * to perform the action while it is waiting, it will only perform the action
 * once at the end of the interval.
 */
declare class Throttle<T = any> extends Disposable {
    constructor(listener: (this: T | null) => any, interval: number, handler?: T | null);
    /**
     * Notifies the throttle that the action has happened. It will throttle
     * the call so that the callback is not called too often according to the
     * interval parameter passed to the constructor, passing the arguments
     * from the last call of this function into the throttled function.
     */
    fire(...var_args: any[]): void;
    /**
     * Cancels any pending action callback. The throttle can be restarted by
     * calling {@link #fire}.
     */
    stop(): void;
    /**
     * Pauses the throttle.  All pending and future action callbacks will be
     * delayed until the throttle is resumed.  Pauses can be nested.
     */
    pause(): void;
    /**
     * Resumes the throttle.  If doing so drops the pausing count to zero,
     * pending action callbacks will be executed as soon as possible, but
     * still no sooner than an interval's delay after the previous call.
     * Future action callbacks will be executed as normal.
     */
    resume(): void;
    disposeInternal(): void;
}
export { Throttle };
