import type { Mechanism } from './mechanism/mechanism.js';
/**
 * The base implementation for all storage APIs.
 */
export declare class Storage {
    /**
     * The base implementation for all storage APIs.
     * @param mechanism The underlying storage mechanism.
     */
    constructor(mechanism: Mechanism);
    private noStructuralTyping_closure_goog_storage_storage_Storage;
    /**
     * The mechanism used to persist key-value pairs.
     */
    protected mechanism: Mechanism | null;
    /**
     * Sets an item in the data storage.
     * @param key The key to set.
     * @param value The value to serialize to a string and save.
     */
    set(key: string, value: any): void;
    /**
     * Gets an item from the data storage.
     * @param key The key to get.
     * @return Deserialized value or undefined if not found.
     */
    get(key: string): any;
    /**
     * Removes an item from the data storage.
     * @param key The key to remove.
     */
    remove(key: string): void;
}
