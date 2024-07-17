export interface EntryPointMonitor {
    /**
     * Instruments a function.
     * @param fn A function to instrument.
     * @return The instrumented function.
     */
    wrap(fn: Function): Function;
    /**
     * Try to remove an instrumentation wrapper created by this monitor.
     * If the function passed to unwrap is not a wrapper created by this
     * monitor, then we will do nothing.
     *
     * Notice that some wrappers may not be unwrappable. For example, if other
     * monitors have applied their own wrappers, then it will be impossible to
     * unwrap them because their wrappers will have captured our wrapper.
     *
     * So it is important that entry points are unwrapped in the reverse
     * order that they were wrapped.
     * @param fn A function to unwrap.
     * @return The unwrapped function, or `fn` if it was not a wrapped function created by this monitor.
     */
    unwrap(fn: Function): Function;
}
/**
 * An array of entry point callbacks.
 */
export declare var refList_: (() => any)[];
/**
 * Register an entry point with this module.
 *
 * The entry point will be instrumented when a monitor is passed to
 * monitorAll. If this has already occurred, the
 * entry point is instrumented immediately.
 * @param callback A callback function which is called with a transforming function to instrument the entry point. The callback is responsible for wrapping the relevant entry point with the transforming function.
 */
export declare function register(callback: () => any): void;
/**
 * Configures a monitor to wrap all entry points.
 *
 * Entry points that have already been registered are immediately wrapped by
 * the monitor. When an entry point is registered in the future, it will also
 * be wrapped by the monitor when it is registered.
 * @param monitor An entry point monitor.
 */
export declare function monitorAll(monitor: EntryPointMonitor): void;
/**
 * Try to unmonitor all the entry points that have already been registered. If
 * an entry point is registered in the future, it will not be wrapped by the
 * monitor when it is registered. Note that this may fail if the entry points
 * have additional wrapping.
 * @param monitor The last monitor to wrap the entry points.
 */
export declare function unmonitorAllIfPossible(monitor: EntryPointMonitor): void;
