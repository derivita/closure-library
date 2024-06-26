//!! generated by clutz.
// Generated from db/transaction.js
declare namespace ಠ_ಠ.clutz.goog.db {
  /**
   * Creates a new transaction. Transactions contain methods for accessing object
   * stores and are created from the database object. Should not be created
   * directly, open a database and call createTransaction on it.
   */
  class Transaction extends ಠ_ಠ.clutz.goog.events.EventTarget {
    private noStructuralTyping_goog_db_Transaction : any;
    /**
     * Creates a new transaction. Transactions contain methods for accessing object
     * stores and are created from the database object. Should not be created
     * directly, open a database and call createTransaction on it.
     * @param tx IndexedDB transaction to back this wrapper.
     * @param db The database that this transaction modifies.
     */
    constructor (tx : IDBTransaction , db : ಠ_ಠ.clutz.goog.db.IndexedDb ) ;
    abort ( ) : void ;
    commit (allowNoopWhenUnsupported : boolean ) : void ;
    disposeInternal ( ) : void ;
    getDatabase ( ) : ಠ_ಠ.clutz.goog.db.IndexedDb ;
    getMode ( ) : ಠ_ಠ.clutz.goog.db.Transaction.TransactionMode ;
    /**
     * Opens an object store to do operations on in this transaction. The requested
     * object store must be one that is in this transaction's scope.
     * @param name The name of the requested object store.
     */
    objectStore (name : string ) : ಠ_ಠ.clutz.goog.db.ObjectStore ;
    wait ( ) : ಠ_ಠ.clutz.goog.async.Deferred ;
  }
}
// Generated from db/transaction.js
declare namespace ಠ_ಠ.clutz.goog.db.Transaction {
  /**
   * Event types the Transaction can dispatch. COMPLETE events are dispatched
   * when the transaction is committed. If a transaction is aborted it dispatches
   * both an ABORT event and an ERROR event with the ABORT_ERR code. Error events
   * are dispatched on any error.
   */
  enum EventTypes {
    ABORT = 'abort' ,
    COMPLETE = 'complete' ,
    ERROR = 'error' ,
  }
}
declare module 'goog:goog.db.Transaction' {
  import Transaction = ಠ_ಠ.clutz.goog.db.Transaction;
  export default Transaction;
}
// Generated from db/transaction.js
declare namespace ಠ_ಠ.clutz.goog.db.Transaction {
  /**
   * The three possible transaction modes.
   */
  /**
   * The three possible transaction modes.
   */
  enum TransactionMode {
    READ_ONLY = 'readonly' ,
    READ_WRITE = 'readwrite' ,
    VERSION_CHANGE = 'versionchange' ,
  }
}
declare module 'goog:goog.db.Transaction.TransactionMode' {
  import TransactionMode = ಠ_ಠ.clutz.goog.db.Transaction.TransactionMode;
  export default TransactionMode;
}
