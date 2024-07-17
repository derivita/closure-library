import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { Cursor } from './cursor.js';
import { KeyRange } from './keyrange.js';
/**
 * Creates an IDBIndex wrapper object. Indexes are associated with object
 * stores and provide methods for looking up objects based on their non-key
 * properties. Should not be created directly, access through the object store
 * it belongs to.
 */
export declare class Index {
    /**
     * Creates an IDBIndex wrapper object. Indexes are associated with object
     * stores and provide methods for looking up objects based on their non-key
     * properties. Should not be created directly, access through the object store
     * it belongs to.
     * @param index Underlying IDBIndex object.
     */
    constructor(index: IDBIndex);
    private noStructuralTyping_closure_goog_db_index_Index;
    getName(): string;
    getKeyPath(): any;
    isUnique(): boolean;
    /**
     * Fetches a single object from the object store. Even if there are multiple
     * objects that match the given key, this method will get only one of them.
     * @param key Key to look up in the index.
     * @return The deferred object for the given record.
     */
    get(key: IDBValidKey): Deferred;
    /**
     * Looks up a single object from the object store and gives back the key that
     * it's listed under in the object store. Even if there are multiple records
     * that match the given key, this method returns the first.
     * @param key Key to look up in the index.
     * @return The deferred key for the record that matches the key.
     */
    getKey(key: IDBValidKey): Deferred;
    /**
     * Returns the values matching `opt_key` up to `opt_count`.
     *
     * If `obt_key` is a `KeyRange`, returns all keys in that range. If it is
     * `undefined`, returns all known keys.
     * @param opt_key Key or KeyRange to look up in the index.
     * @param opt_count The number records to return
     * @return A deferred array of objects that match the key.
     */
    getAll(opt_key?: IDBValidKey | KeyRange, opt_count?: number): Deferred;
    /**
     * Returns the keys matching `opt_key` up to `opt_count`.
     *
     * If `obt_key` is a `KeyRange`, returns all keys in that range. If it is
     * `undefined`, returns all known keys.
     * @param opt_key Key or KeyRange to look up in the index.
     * @param opt_count The number records to return
     * @return A deferred array of keys for objects that match the key.
     */
    getAllKeys(opt_key?: IDBValidKey | KeyRange, opt_count?: number): Deferred;
    /**
     * Opens a cursor over the specified key range. Returns a cursor object which is
     * able to iterate over the given range.
     *
     * Example usage:
     *
     * <code>
     * var cursor = index.openCursor(KeyRange.bound('a', 'c'));
     *
     * var key = goog.events.listen(
     * cursor, Cursor.EventType.NEW_DATA,
     * function() {
     * // Do something with data.
     * cursor.next();
     * });
     *
     * goog.events.listenOnce(
     * cursor, Cursor.EventType.COMPLETE,
     * function() {
     * // Clean up listener, and perform a finishing operation on the data.
     * goog.events.unlistenByKey(key);
     * });
     * </code>
     * @param opt_range The key range. If undefined iterates over the whole object store.
     * @param opt_direction The direction. If undefined moves in a forward direction with duplicates.
     * @return The cursor.
     */
    openCursor(opt_range?: KeyRange, opt_direction?: Cursor.Direction): Cursor;
}
