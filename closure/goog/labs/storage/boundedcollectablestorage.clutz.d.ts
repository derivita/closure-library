//!! generated by clutz.
// Generated from labs/storage/boundedcollectablestorage.js
declare namespace ಠ_ಠ.clutz.goog.labs.storage {
  /**
   * Provides a storage with bounded number of elements, expiring keys and
   * a collection method.
   */
  class BoundedCollectableStorage extends ಠ_ಠ.clutz.goog.storage.CollectableStorage {
    private noStructuralTyping_goog_labs_storage_BoundedCollectableStorage : any;
    /**
     * Provides a storage with bounded number of elements, expiring keys and
     * a collection method.
     * @param mechanism The underlying storage mechanism.
     * @param maxItems Maximum number of items in storage.
     */
    constructor (mechanism : ಠ_ಠ.clutz.goog.storage.mechanism.IterableMechanism , maxItems : number ) ;
    /**
     * Cleans up the storage by removing expired keys.
     * @param opt_strict Also remove invalid keys.
     */
    collect (opt_strict ? : boolean ) : void ;
    /**
     * Ensures that we keep only maxItems number of items in a local storage.
     * @param opt_skipExpired skip removing expired items first.
     * @param opt_strict Also remove invalid keys.
     */
    collectOversize (opt_skipExpired ? : boolean , opt_strict ? : boolean ) : void ;
    /**
     * Remove an item from the data storage.
     * @param key The key to remove.
     */
    remove (key : string ) : void ;
    /**
     * Set an item in the storage.
     * @param key The key to set.
     * @param value The value to serialize to a string and save.
     * @param opt_expiration The number of miliseconds since epoch (as in Date.now()) when the value is to expire. If the expiration time is not provided, the value will persist as long as possible.
     */
    set (key : string , value : any , opt_expiration ? : number ) : void ;
  }
}
declare module 'goog:goog.labs.storage.BoundedCollectableStorage' {
  import BoundedCollectableStorage = ಠ_ಠ.clutz.goog.labs.storage.BoundedCollectableStorage;
  export default BoundedCollectableStorage;
}
