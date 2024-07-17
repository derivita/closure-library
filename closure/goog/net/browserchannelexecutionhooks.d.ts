/**
 * Allows the application to set an execution hooks for when BrowserChannel
 * starts processing requests. This is useful to track timing or logging
 * special information. The function takes no parameters and return void.
 * @param startHook The function for the start hook.
 */
declare const setStartThreadExecutionHook: (startHook: Function | null) => void;
export { setStartThreadExecutionHook };
/**
 * Allows the application to set an execution hooks for when BrowserChannel
 * stops processing requests. This is useful to track timing or logging
 * special information. The function takes no parameters and return void.
 * @param endHook The function for the end hook.
 */
declare function setEndThreadExecutionHook(endHook: Function | null): void;
export { setEndThreadExecutionHook };
/**
 * Helper function to call the start hook
 */
declare function onStartExecution(): void;
export { onStartExecution };
/**
 * Helper function to call the end hook
 */
declare function onEndExecution(): void;
export { onEndExecution };
/**
 * Wrapper around SafeTimeout which calls the start and end execution hooks
 * with a try...finally block.
 * @param fn The callback function.
 * @param ms The time in MS for the timer.
 * @return The ID of the timer.
 */
declare function setTimeout(fn: Function | null, ms: number): number;
export { setTimeout };
