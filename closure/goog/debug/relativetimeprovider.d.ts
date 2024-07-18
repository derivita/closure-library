/**
 * A simple object to keep track of a timestamp considered the start of
 * something. The main use is for the logger system to maintain a start time
 * that is occasionally reset. For example, in Gmail, we reset this relative
 * time at the start of a user action so that timings are offset from the
 * beginning of the action. This class also provides a singleton as the default
 * behavior for most use cases is to share the same start time.
 */
export declare class RelativeTimeProvider {
    /**
     * A simple object to keep track of a timestamp considered the start of
     * something. The main use is for the logger system to maintain a start time
     * that is occasionally reset. For example, in Gmail, we reset this relative
     * time at the start of a user action so that timings are offset from the
     * beginning of the action. This class also provides a singleton as the default
     * behavior for most use cases is to share the same start time.
     */
    constructor();
    private noStructuralTyping_closure_goog_debug_relativetimeprovider_RelativeTimeProvider;
    /**
     * Sets the start time to the specified time.
     * @param timeStamp The start time.
     */
    set(timeStamp: number): void;
    /**
     * Resets the start time to now.
     */
    reset(): void;
    get(): number;
    static getDefaultInstance(): RelativeTimeProvider;
}
