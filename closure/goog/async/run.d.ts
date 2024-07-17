/**
 * Fires the provided callback just before the current callstack unwinds, or as
 * soon as possible after the current JS execution context.
 * @param context Object to use as the "this value" when calling the provided function.
 */
export declare function run<THIS = any>(callback: (this: THIS | null) => any, context?: THIS | null): void;
export declare namespace run {
    /**
     * Forces run to use nextTick instead of Promise.
     * This should only be done in unit tests. It's useful because MockClock
     * replaces nextTick, but not the browser Promise implementation, so it allows
     * Promise-based code to be tested with MockClock.
     * However, we also want to run promises if the MockClock is no longer in
     * control so we schedule a backup "setTimeout" to the unmocked timeout if
     * provided.
     */
    var forceNextTick: (realSetTimeout?: () => any) => void;
    /**
     * Run any pending run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * nextTick.
     */
    var processWorkQueue: () => void;
}
