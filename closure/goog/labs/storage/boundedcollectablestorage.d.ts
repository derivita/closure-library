import { CollectableStorage } from '../../storage/collectablestorage.js';
import type { IterableMechanism } from '../../storage/mechanism/iterablemechanism.js';
/**
 * Provides a storage with bounded number of elements, expiring keys and
 * a collection method.
 */
export declare class BoundedCollectableStorage extends CollectableStorage {
    /**
     * Provides a storage with bounded number of elements, expiring keys and
     * a collection method.
     * @param mechanism The underlying storage mechanism.
     * @param maxItems Maximum number of items in storage.
     */
    constructor(mechanism: IterableMechanism, maxItems: number);
    private noStructuralTyping_closure_goog_labs_storage_boundedcollectablestorage_BoundedCollectableStorage;
    /**
     * Cleans up the storage by removing expired keys.
     * @param opt_strict Also remove invalid keys.
     */
    collect(opt_strict?: boolean): void;
    /**
     * Ensures that we keep only maxItems number of items in a local storage.
     * @param opt_skipExpired skip removing expired items first.
     * @param opt_strict Also remove invalid keys.
     */
    collectOversize(opt_skipExpired?: boolean, opt_strict?: boolean): void;
    /**
     * Set an item in the storage.
     * @param key The key to set.
     * @param value The value to serialize to a string and save.
     * @param opt_expiration The number of miliseconds since epoch (as in Date.now()) when the value is to expire. If the expiration time is not provided, the value will persist as long as possible.
     */
    set(key: string, value: any, opt_expiration?: number): void;
    /**
     * Remove an item from the data storage.
     * @param key The key to remove.
     */
    remove(key: string): void;
}
