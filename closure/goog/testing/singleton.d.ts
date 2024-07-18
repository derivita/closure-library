/**
 * Deletes all singleton instances, so `getInstance` will return a new
 * instance on next call.
 */
export declare function resetAll(): void;
/**
 * Deletes a singleton's instance, so `getInstance` will return a new instance
 * on next call.
 */
export declare function reset(singleton: {
    new (): object | null;
}): void;
export declare var addSingletonGetter: typeof goog.addSingletonGetter;
