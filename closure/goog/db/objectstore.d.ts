import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { Cursor } from './cursor.js';
import { Index } from './index.js';
import { KeyRange } from './keyrange.js';
/**
 * Creates an IDBObjectStore wrapper object. Object stores have methods for
 * storing and retrieving records, and are accessed through a transaction
 * object. They also have methods for creating indexes associated with the
 * object store. They can only be created when setting the version of the
 * database. Should not be created directly, access object stores through
 * transactions.
 */
export declare class ObjectStore {
    /**
     * Creates an IDBObjectStore wrapper object. Object stores have methods for
     * storing and retrieving records, and are accessed through a transaction
     * object. They also have methods for creating indexes associated with the
     * object store. They can only be created when setting the version of the
     * database. Should not be created directly, access object stores through
     * transactions.
     * @param store The backing IndexedDb object.
     */
    constructor(store: IDBObjectStore);
    private noStructuralTyping_closure_goog_db_objectstore_ObjectStore;
    getName(): string;
    /**
     * Adds an object to the object store. Replaces existing objects with the
     * same key.
     * @param value The value to put.
     * @param opt_key The key to use. Cannot be used if the keyPath was specified for the object store. If the keyPath was not specified but autoIncrement was not enabled, it must be used.
     * @return The deferred put request.
     */
    put(value: any, opt_key?: IDBValidKey | null): Deferred;
    /**
     * Adds an object to the object store. Requires that there is no object with
     * the same key already present.
     * @param value The value to add.
     * @param opt_key The key to use. Cannot be used if the keyPath was specified for the object store. If the keyPath was not specified but autoIncrement was not enabled, it must be used.
     * @return The deferred add request.
     */
    add(value: any, opt_key?: IDBValidKey | null): Deferred;
    /**
     * Removes an object from the store. No-op if there is no object present with
     * the given key.
     * @param keyOrRange The key or range to remove objects under.
     * @return The deferred remove request.
     */
    remove(keyOrRange: IDBValidKey | KeyRange | null): Deferred;
    /**
     * Gets an object from the store. If no object is present with that key
     * the result is `undefined`.
     * @param key The key to look up.
     * @return The deferred get request.
     */
    get(key: IDBValidKey | null): Deferred;
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
     * var cursor = objectStore.openCursor(goog.db.Range.bound('a', 'c'));
     *
     * var key = goog.events.listen(
     * cursor, Cursor.EventType.NEW_DATA, function() {
     * // Do something with data.
     * cursor.next();
     * });
     *
     * goog.events.listenOnce(
     * cursor, Cursor.EventType.COMPLETE, function() {
     * // Clean up listener, and perform a finishing operation on the data.
     * goog.events.unlistenByKey(key);
     * });
     * </code>
     * @param opt_range The key range. If undefined iterates over the whole object store.
     * @param opt_direction The direction. If undefined moves in a forward direction with duplicates.
     * @return The cursor.
     */
    openCursor(opt_range?: KeyRange, opt_direction?: Cursor.Direction): Cursor;
    /**
     * Deletes all objects from the store.
     * @return The deferred clear request.
     */
    clear(): Deferred;
    /**
     * Creates an index in this object store. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name of the index to create.
     * @param keyPath Attribute or array of attributes to index on.
     * @param opt_parameters Optional parameters object. The only available option is unique, which defaults to false. If unique is true, the index will enforce that there is only ever one object in the object store for each unique value it indexes on.
     * @return The newly created, wrapped index.
     */
    createIndex(name: string, keyPath: string | string[], opt_parameters?: object): Index;
    /**
     * Gets an index.
     * @param name Name of the index to fetch.
     * @return The requested wrapped index.
     */
    getIndex(name: string): Index;
    /**
     * Deletes an index from the object store. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name of the index to delete.
     */
    deleteIndex(name: string): void;
    /**
     * Gets number of records within a key range.
     * @param opt_range The key range. If undefined, this will count all records in the object store.
     * @return The deferred number of records.
     */
    count(opt_range?: KeyRange): Deferred;
}
