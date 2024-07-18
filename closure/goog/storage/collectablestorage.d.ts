import * as iter from '../iter/iter.js';
import { ExpiringStorage } from './expiringstorage.js';
import type { IterableMechanism } from './mechanism/iterablemechanism.js';
/**
 * Provides a storage with expiring keys and a collection method.
 */
export declare class CollectableStorage extends ExpiringStorage {
    /**
     * Provides a storage with expiring keys and a collection method.
     * @param mechanism The underlying storage mechanism.
     */
    constructor(mechanism: IterableMechanism);
    private noStructuralTyping_closure_goog_storage_collectablestorage_CollectableStorage;
    /**
     * Cleans up the storage by removing expired keys.
     * @param keys List of all keys.
     * @param opt_strict Also remove invalid keys.
     * @return a list of expired keys.
     */
    protected collectInternal(keys: iter.Iterable | null, opt_strict?: boolean): string[];
    /**
     * Cleans up the storage by removing expired keys.
     * @param opt_strict Also remove invalid keys.
     */
    collect(opt_strict?: boolean): void;
}
