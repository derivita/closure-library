//!! generated by clutz.
// Generated from storage/mechanism/ieuserdata.js
declare namespace ಠ_ಠ.clutz.goog.storage.mechanism {
  /**
   * Provides a storage mechanism using IE userData.
   */
  class IEUserData extends ಠ_ಠ.clutz.goog.storage.mechanism.IterableMechanism {
    private noStructuralTyping_goog_storage_mechanism_IEUserData : any;
    /**
     * Provides a storage mechanism using IE userData.
     * @param storageKey The key (store name) to store the data under.
     * @param opt_storageNodeId The ID of the associated HTML element, one will be created if not provided.
     */
    constructor (storageKey : string , opt_storageNodeId ? : string ) ;
    __iterator__ (opt_keys ? : any ) : any ;
    clear ( ) : void ;
    get (key ? : any ) : any ;
    getCount ( ) : any ;
    /**
     * Determines whether or not the mechanism is available.
     */
    isAvailable ( ) : boolean ;
    remove (key ? : any ) : void ;
    set (key ? : any , value ? : any ) : void ;
    /**
     * Encoding map for characters which are not encoded by encodeURIComponent().
     * See encodeKey_ documentation for encoding details.
     */
    static ENCODE_MAP : GlobalObject ;
  }
}
declare module 'goog:goog.storage.mechanism.IEUserData' {
  import IEUserData = ಠ_ಠ.clutz.goog.storage.mechanism.IEUserData;
  export default IEUserData;
}
