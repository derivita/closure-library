export declare class ExponentialBackoff {
    /**
     *
     * @param initialValue The initial backoff value.
     * @param maxValue The maximum backoff value.
     * @param opt_randomFactor When set, adds randomness to the backoff and decay to avoid a thundering herd problem. Should be a number between 0 and 1, where 0 means no randomness and 1 means a factor of 0x to 2x.
     * @param opt_backoffFactor The factor to backoff by. Defaults to 2. Should be a number greater than 1.
     * @param opt_decayFactor The factor to decay by. Defaults to 2. Should be a number greater than one.
     */
    constructor(initialValue: number, maxValue: number, opt_randomFactor?: number, opt_backoffFactor?: number, opt_decayFactor?: number);
    private noStructuralTyping_closure_goog_math_exponentialbackoff_ExponentialBackoff;
    /**
     * Resets the backoff value to its initial value.
     */
    reset(): void;
    getValue(): number;
    getBackoffCount(): number;
    getDecayCount(): number;
    /**
     * Initiates a backoff.
     */
    backoff(): void;
    /**
     * Initiates a decay.
     */
    decay(): void;
}
