import { Disposable } from '../disposable/disposable.js';
/**
 * Debouncer will perform a specified action exactly once for any sequence of
 * signals fired repeatedly so long as they are fired less than a specified
 * interval apart (in milliseconds). Whether it receives one signal or multiple,
 * it will always wait until a full interval has elapsed since the last signal
 * before performing the action.
 */
export declare class Debouncer<T = any> extends Disposable {
    /**
     * Debouncer will perform a specified action exactly once for any sequence of
     * signals fired repeatedly so long as they are fired less than a specified
     * interval apart (in milliseconds). Whether it receives one signal or multiple,
     * it will always wait until a full interval has elapsed since the last signal
     * before performing the action.
     * @param listener Function to callback when the action is triggered.
     * @param interval Interval over which to debounce. The listener will only be called after the full interval has elapsed since the last signal.
     * @param opt_handler Object in whose scope to call the listener.
     */
    constructor(listener: (this: T | null) => any, interval: number, opt_handler?: T | null);
    private noStructuralTyping_closure_goog_async_debouncer_Debouncer;
    /**
     * Notifies the debouncer that the action has happened. It will debounce the
     * call so that the callback is only called after the last action in a sequence
     * of actions separated by periods less the interval parameter passed to the
     * constructor, passing the arguments from the last call of this function into
     * the debounced function.
     * @param var_args Arguments to pass on to the debounced function.
     */
    fire(...var_args: any[]): void;
    /**
     * Cancels any pending action callback. The debouncer can be restarted by
     * calling {@link #fire}.
     */
    stop(): void;
    /**
     * Pauses the debouncer. All pending and future action callbacks will be delayed
     * until the debouncer is resumed. Pauses can be nested.
     */
    pause(): void;
    /**
     * Resumes the debouncer. If doing so drops the pausing count to zero, pending
     * action callbacks will be executed as soon as possible, but still no sooner
     * than an interval's delay after the previous call. Future action callbacks
     * will be executed as normal.
     */
    resume(): void;
    disposeInternal(): void;
}
