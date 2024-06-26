//!! generated by clutz.
// Generated from storage/mechanism/iterablemechanism.js
declare namespace ಠ_ಠ.clutz.goog.storage.mechanism {
  export import IterableMechanism = ಠ_ಠ.clutz.module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism ;
}
declare module 'goog:goog.storage.mechanism.IterableMechanism' {
  import IterableMechanism = ಠ_ಠ.clutz.goog.storage.mechanism.IterableMechanism;
  export default IterableMechanism;
}
// Generated from storage/mechanism/iterablemechanism.js
declare namespace ಠ_ಠ.clutz {
  /**
   * Interface for all iterable storage mechanisms.
   */
  abstract class module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism extends ಠ_ಠ.clutz.module$exports$goog$storage$mechanism$Mechanism implements Iterable < string > {
    private noStructuralTyping_module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism : any;
    /**
     * Interface for all iterable storage mechanisms.
     */
    constructor ( ) ;
    /**
     * Returns an iterator that iterates over the elements in the storage. Will
     * throw goog.iter.StopIteration after the last element.
     * @param opt_keys True to iterate over the keys. False to iterate over the values.  The default value is false.
     */
    __iterator__ (a ? : boolean ) : ಠ_ಠ.clutz.module$exports$goog$iter.Iterator ;
    clear ( ) : void ;
    /**
     * Get the number of stored key-value pairs.
     *
     * Could be overridden in a subclass, as the default implementation is not very
     * efficient - it iterates over all keys.
     */
    getCount ( ) : number ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$storage$mechanism$IterableMechanism = ಠ_ಠ.clutz.module$contents$goog$storage$mechanism$IterableMechanism_IterableMechanism ;
}
