import { Promise } from '../promise/promise.js';
import { EventTarget } from '../events/eventtarget.js';
import type { Thenable } from '../promise/thenable.js';
/**
 * Class for handling timing events.
 */
export declare class Timer extends EventTarget {
    /**
     * Class for handling timing events.
     * @param opt_interval Number of ms between ticks (default: 1ms).
     * @param opt_timerObject An object that has `setTimeout`, `setInterval`, `clearTimeout` and `clearInterval` (e.g., `window`).
     */
    constructor(opt_interval?: number, opt_timerObject?: object | null);
    private noStructuralTyping_closure_goog_timer_timer_Timer;
    /**
     * Whether this timer is enabled
     */
    enabled: boolean;
    /**
     * An object that implements `setTimeout`, `setInterval`,
     * `clearTimeout` and `clearInterval`. We default to the global
     * object. Changing `Timer.defaultTimerObject` changes the object for
     * all timer instances which can be useful if your environment has some other
     * implementation of timers you'd like to use.
     */
    static defaultTimerObject: {
        'setTimeout': any;
        'clearTimeout': any;
    };
    /**
     * Variable that controls the timer error correction. If the timer is called
     * before the requested interval times `intervalScale`, which often
     * happens on Mozilla, the timer is rescheduled.
     */
    static intervalScale: number;
    /**
     * Gets the interval of the timer.
     * @return interval Number of ms between ticks.
     */
    getInterval(): number;
    /**
     * Sets the interval of the timer.
     * @param interval Number of ms between ticks.
     */
    setInterval(interval: number): void;
    /**
     * Dispatches the TICK event. This is its own method so subclasses can override.
     */
    dispatchTick(): void;
    /**
     * Starts the timer.
     */
    start(): void;
    /**
     * Stops the timer.
     */
    stop(): void;
    disposeInternal(): void;
    /**
     * Constant for the timer's event type.
     */
    static TICK: string;
    /**
     * Calls the given function once, after the optional pause.
     * <p>
     * The function is always called asynchronously, even if the delay is 0. This
     * is a common trick to schedule a function to run after a batch of browser
     * event processing.
     * @param listener Function or object that has a handleEvent method.
     * @param opt_delay Milliseconds to wait; default is 0.
     * @param opt_handler Object in whose scope to call the listener.
     * @return A handle to the timer ID.
     */
    static callOnce<SCOPE = any>(listener: ((this: SCOPE | null) => any) | {
        'handleEvent': () => any;
    } | null, opt_delay?: number, opt_handler?: SCOPE | null): number;
    /**
     * Clears a timeout initiated by {@link #callOnce}.
     * @param timerId A timer ID.
     */
    static clear(timerId: number | null): void;
    /**
     *
     * @param delay Milliseconds to wait.
     * @param opt_result The value with which the promise will be resolved.
     * @return A promise that will be resolved after the specified delay, unless it is canceled first.
     */
    static promise<RESULT = any>(delay: number, opt_result?: RESULT | Thenable<RESULT | null> | Thenable | null): Promise<RESULT | null>;
}
