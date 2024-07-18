import { RichStorage } from './richstorage.js';
import type { Mechanism } from './mechanism/mechanism.js';
/**
 * Provides a storage with expiring keys.
 */
export declare class ExpiringStorage extends RichStorage {
    /**
     * Provides a storage with expiring keys.
     * @param mechanism The underlying storage mechanism.
     */
    constructor(mechanism: Mechanism);
    private noStructuralTyping_closure_goog_storage_expiringstorage_ExpiringStorage;
    /**
     * Metadata key under which the expiration time is stored.
     */
    protected static EXPIRATION_TIME_KEY: string;
    /**
     * Metadata key under which the creation time is stored.
     */
    protected static CREATION_TIME_KEY: string;
    /**
     * Returns the wrapper creation time.
     * @param wrapper The wrapper.
     * @return Wrapper creation time.
     */
    static getCreationTime(wrapper: object): number | undefined;
    /**
     * Returns the wrapper expiration time.
     * @param wrapper The wrapper.
     * @return Wrapper expiration time.
     */
    static getExpirationTime(wrapper: object): number | undefined;
    /**
     * Checks if the data item has expired.
     * @param wrapper The wrapper.
     * @return True if the item has expired.
     */
    static isExpired(wrapper: object): boolean;
    /**
     * Set an item in the storage.
     * @param key The key to set.
     * @param value The value to serialize to a string and save.
     * @param opt_expiration The number of miliseconds since epoch (as in goog.now()) when the value is to expire. If the expiration time is not provided, the value will persist as long as possible.
     */
    set(key: string, value: any, opt_expiration?: number): void;
    /**
     * Get an item wrapper (the item and its metadata) from the storage.
     * @param key The key to get.
     * @param opt_expired If true, return expired wrappers as well.
     * @return The wrapper, or undefined if not found.
     */
    getWrapper(key: string, opt_expired?: boolean): object | undefined;
}
