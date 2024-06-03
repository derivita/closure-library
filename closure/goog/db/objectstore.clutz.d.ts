//!! generated by clutz.
// Generated from db/objectstore.js
declare namespace ಠ_ಠ.clutz.goog.db {
  /**
   * Creates an IDBObjectStore wrapper object. Object stores have methods for
   * storing and retrieving records, and are accessed through a transaction
   * object. They also have methods for creating indexes associated with the
   * object store. They can only be created when setting the version of the
   * database. Should not be created directly, access object stores through
   * transactions.
   */
  class ObjectStore {
    private noStructuralTyping_goog_db_ObjectStore : any;
    /**
     * Creates an IDBObjectStore wrapper object. Object stores have methods for
     * storing and retrieving records, and are accessed through a transaction
     * object. They also have methods for creating indexes associated with the
     * object store. They can only be created when setting the version of the
     * database. Should not be created directly, access object stores through
     * transactions.
     * @param store The backing IndexedDb object.
     */
    constructor (store : IDBObjectStore ) ;
    /**
     * Adds an object to the object store. Requires that there is no object with
     * the same key already present.
     * @param value The value to add.
     * @param opt_key The key to use. Cannot be used if the keyPath was specified for the object store. If the keyPath was not specified but autoIncrement was not enabled, it must be used.
     */
    add (value : any , opt_key ? : ಠ_ಠ.clutz.IDBKeyType | null ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Deletes all objects from the store.
     */
    clear ( ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Gets number of records within a key range.
     * @param opt_range The key range. If undefined, this will count all records in the object store.
     */
    count (opt_range ? : ಠ_ಠ.clutz.goog.db.KeyRange ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Creates an index in this object store. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name of the index to create.
     * @param keyPath Attribute or array of attributes to index on.
     * @param opt_parameters Optional parameters object. The only available option is unique, which defaults to false. If unique is true, the index will enforce that there is only ever one object in the object store for each unique value it indexes on.
     */
    createIndex (name : string , keyPath : string | string [] , opt_parameters ? : GlobalObject ) : ಠ_ಠ.clutz.goog.db.Index ;
    /**
     * Deletes an index from the object store. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name of the index to delete.
     */
    deleteIndex (name : string ) : void ;
    /**
     * Gets an object from the store. If no object is present with that key
     * the result is `undefined`.
     * @param key The key to look up.
     */
    get (key : ಠ_ಠ.clutz.IDBKeyType | null ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Returns the values matching `opt_key` up to `opt_count`.
     *
     * If `obt_key` is a `KeyRange`, returns all keys in that range. If it is
     * `undefined`, returns all known keys.
     * @param opt_key Key or KeyRange to look up in the index.
     * @param opt_count The number records to return
     */
    getAll (opt_key ? : ಠ_ಠ.clutz.IDBKeyType | ಠ_ಠ.clutz.goog.db.KeyRange , opt_count ? : number ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Returns the keys matching `opt_key` up to `opt_count`.
     *
     * If `obt_key` is a `KeyRange`, returns all keys in that range. If it is
     * `undefined`, returns all known keys.
     * @param opt_key Key or KeyRange to look up in the index.
     * @param opt_count The number records to return
     */
    getAllKeys (opt_key ? : ಠ_ಠ.clutz.IDBKeyType | ಠ_ಠ.clutz.goog.db.KeyRange , opt_count ? : number ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Gets an index.
     * @param name Name of the index to fetch.
     */
    getIndex (name : string ) : ಠ_ಠ.clutz.goog.db.Index ;
    getName ( ) : string ;
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
     * cursor, goog.db.Cursor.EventType.NEW_DATA, function() {
     * // Do something with data.
     * cursor.next();
     * });
     *
     * goog.events.listenOnce(
     * cursor, goog.db.Cursor.EventType.COMPLETE, function() {
     * // Clean up listener, and perform a finishing operation on the data.
     * goog.events.unlistenByKey(key);
     * });
     * </code>
     * @param opt_range The key range. If undefined iterates over the whole object store.
     * @param opt_direction The direction. If undefined moves in a forward direction with duplicates.
     */
    openCursor (opt_range ? : ಠ_ಠ.clutz.goog.db.KeyRange , opt_direction ? : ಠ_ಠ.clutz.goog.db.Cursor.Direction ) : ಠ_ಠ.clutz.goog.db.Cursor ;
    /**
     * Adds an object to the object store. Replaces existing objects with the
     * same key.
     * @param value The value to put.
     * @param opt_key The key to use. Cannot be used if the keyPath was specified for the object store. If the keyPath was not specified but autoIncrement was not enabled, it must be used.
     */
    put (value : any , opt_key ? : ಠ_ಠ.clutz.IDBKeyType | null ) : ಠ_ಠ.clutz.goog.async.Deferred ;
    /**
     * Removes an object from the store. No-op if there is no object present with
     * the given key.
     * @param keyOrRange The key or range to remove objects under.
     */
    remove (keyOrRange : ಠ_ಠ.clutz.IDBKeyType | null | ಠ_ಠ.clutz.goog.db.KeyRange ) : ಠ_ಠ.clutz.goog.async.Deferred ;
  }
}
declare module 'goog:goog.db.ObjectStore' {
  import ObjectStore = ಠ_ಠ.clutz.goog.db.ObjectStore;
  export default ObjectStore;
}
