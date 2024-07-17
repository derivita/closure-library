import { Storage } from './storage.js';
import type { Mechanism } from './mechanism/mechanism.js';
/**
 * Provides a storage for data with attached metadata.
 */
export declare class RichStorage extends Storage {
    /**
     * Provides a storage for data with attached metadata.
     * @param mechanism The underlying storage mechanism.
     */
    constructor(mechanism: Mechanism);
    private noStructuralTyping_closure_goog_storage_richstorage_RichStorage;
    /**
     * Metadata key under which the actual data is stored.
     */
    protected static DATA_KEY: string;
    set(key: any, value: any): void;
    /**
     * Get an item wrapper (the item and its metadata) from the storage.
     *
     * WARNING: This returns an Object, which once used to be
     * RichStorage.Wrapper. This is due to the fact
     * that deserialized objects lose type information and it
     * is hard to do proper typecasting in JavaScript. Be sure
     * you know what you are doing when using the returned value.
     * @param key The key to get.
     * @return The wrapper, or undefined if not found.
     */
    getWrapper(key: string): object | undefined;
    get(key: any): any;
}
export declare namespace RichStorage {
    /**
     * Wraps a value so metadata can be associated with it. You probably want
     * to use RichStorage.Wrapper.wrapIfNecessary to avoid multiple
     * embeddings.
     */
    class Wrapper {
        /**
         * Wraps a value so metadata can be associated with it. You probably want
         * to use RichStorage.Wrapper.wrapIfNecessary to avoid multiple
         * embeddings.
         * @param value The value to wrap.
         */
        constructor(value: any);
        private noStructuralTyping_closure_goog_storage_richstorage_Wrapper;
        /**
         * Convenience method for wrapping a value so metadata can be associated with
         * it. No-op if the value is already wrapped or is undefined.
         * @param value The value to wrap.
         * @return The wrapper.
         */
        static wrapIfNecessary(value: any): RichStorage.Wrapper | undefined;
        /**
         * Unwraps a value, any metadata is discarded (not returned). You might want to
         * use RichStorage.Wrapper.unwrapIfPossible to handle cases where
         * the wrapper is missing.
         * @param wrapper The wrapper.
         * @return The wrapped value.
         */
        static unwrap(wrapper: object): any;
        /**
         * Convenience method for unwrapping a value. Returns undefined if the
         * wrapper is missing.
         * @param wrapper The wrapper.
         * @return The wrapped value or undefined.
         */
        static unwrapIfPossible(wrapper: object | undefined): any;
    }
}
