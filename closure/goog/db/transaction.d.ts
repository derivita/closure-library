import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { ObjectStore } from './objectstore.js';
import { EventTarget as GoogEventTarget } from '../events/eventtarget.js';
import type { IndexedDb } from './indexeddb.js';
/**
 * Creates a new transaction. Transactions contain methods for accessing object
 * stores and are created from the database object. Should not be created
 * directly, open a database and call createTransaction on it.
 */
export declare class Transaction extends GoogEventTarget {
    /**
     * Creates a new transaction. Transactions contain methods for accessing object
     * stores and are created from the database object. Should not be created
     * directly, open a database and call createTransaction on it.
     * @param tx IndexedDB transaction to back this wrapper.
     * @param db The database that this transaction modifies.
     */
    constructor(tx: IDBTransaction, db: IndexedDb);
    private noStructuralTyping_closure_goog_db_transaction_Transaction;
    getMode(): Transaction.TransactionMode | null;
    getDatabase(): IndexedDb;
    /**
     * Opens an object store to do operations on in this transaction. The requested
     * object store must be one that is in this transaction's scope.
     * @param name The name of the requested object store.
     * @return The wrapped object store.
     */
    objectStore(name: string): ObjectStore;
    /**
     *
     * @param allowNoopWhenUnsupported Whether it's fine for the method to act like no-op if native method is not supported by the browser.
     */
    commit(allowNoopWhenUnsupported: boolean): void;
    wait(): Deferred;
    /**
     * Aborts this transaction. No pending operations will be applied to the
     * database. Dispatches an ABORT event.
     */
    abort(): void;
    disposeInternal(): void;
}
export declare namespace Transaction {
    /**
     * Event types the Transaction can dispatch. COMPLETE events are dispatched
     * when the transaction is committed. If a transaction is aborted it dispatches
     * both an ABORT event and an ERROR event with the ABORT_ERR code. Error events
     * are dispatched on any error.
     */
    enum EventTypes {
        COMPLETE = "complete",
        ABORT = "abort",
        ERROR = "error"
    }
    /**
     * The three possible transaction modes.
     */
    enum TransactionMode {
        READ_ONLY = "readonly",
        READ_WRITE = "readwrite",
        VERSION_CHANGE = "versionchange"
    }
}
