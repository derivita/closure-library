/**
 * Basic interface for all storage mechanisms.
 */
export declare abstract class Mechanism {
    /**
     * Basic interface for all storage mechanisms.
     */
    constructor();
    private noStructuralTyping_closure_goog_storage_mechanism_mechanism_Mechanism;
    /**
     * Set a value for a key.
     * @param key The key to set.
     * @param value The string to save.
     */
    abstract set(key: string, value: string): any;
    /**
     * Get the value stored under a key.
     * @param key The key to get.
     * @return The corresponding value, null if not found.
     */
    abstract get(key: string): string | null;
    /**
     * Remove a key and its value.
     * @param key The key to remove.
     */
    abstract remove(key: string): any;
}
