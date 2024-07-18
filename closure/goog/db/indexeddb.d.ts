import { ObjectStore } from './objectstore.js';
import { Transaction } from './transaction.js';
import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Creates an IDBDatabase wrapper object. The database object has methods for
 * setting the version to change the structure of the database and for creating
 * transactions to get or modify the stored records. Should not be created
 * directly, call {@link goog.db.openDatabase} to set up the connection.
 */
export declare class IndexedDb extends EventTarget {
    /**
     * Creates an IDBDatabase wrapper object. The database object has methods for
     * setting the version to change the structure of the database and for creating
     * transactions to get or modify the stored records. Should not be created
     * directly, call {@link goog.db.openDatabase} to set up the connection.
     * @param db Underlying IndexedDB database object.
     */
    constructor(db: IDBDatabase);
    private noStructuralTyping_closure_goog_db_indexeddb_IndexedDb;
    /**
     * Closes the database connection. Metadata queries can still be made after this
     * method is called, but otherwise this wrapper should not be used further.
     */
    close(): void;
    isOpen(): boolean;
    getName(): string;
    getVersion(): number;
    getObjectStoreNames(): DOMStringList;
    /**
     * Creates an object store in this database. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name for the new object store.
     * @param opt_params Options object. The available options are: keyPath, which is a string and determines what object attribute to use as the key when storing objects in this object store; and autoIncrement, which is a boolean, which defaults to false and determines whether the object store should automatically generate keys for stored objects. If keyPath is not provided and autoIncrement is false, then all insert operations must provide a key as a parameter.
     * @return The newly created object store.
     */
    createObjectStore(name: string, opt_params?: IDBObjectStoreParameters): ObjectStore;
    /**
     * Deletes an object store. Can only be called inside a
     * {@link goog.db.UpgradeNeededCallback}.
     * @param name Name of the object store to delete.
     */
    deleteObjectStore(name: string): void;
    /**
     * Creates a new transaction.
     * @param storeNames A list of strings that contains the transaction's scope, the object stores that this transaction can operate on.
     * @param opt_mode The mode of the transaction. If not present, the default is READ_ONLY.
     * @return The wrapper for the newly created transaction.
     */
    createTransaction(storeNames: string[], opt_mode?: Transaction.TransactionMode | null): Transaction;
    disposeInternal(): void;
}
export declare namespace IndexedDb {
    /**
     * Event types fired by a database.
     */
    enum EventType {
        ABORT = "abort",
        CLOSE = "close",
        ERROR = "error",
        VERSION_CHANGE = "versionchange"
    }
    /**
     * Event representing a (possibly attempted) change in the database structure.
     *
     * At time of writing, no Chrome versions support oldVersion or newVersion. See
     * http://crbug.com/153122.
     */
    class VersionChangeEvent extends Event {
        /**
         * Event representing a (possibly attempted) change in the database structure.
         *
         * At time of writing, no Chrome versions support oldVersion or newVersion. See
         * http://crbug.com/153122.
         * @param oldVersion The previous version of the database.
         * @param newVersion The version the database is being or has been updated to.
         */
        constructor(oldVersion: number, newVersion: number);
        private noStructuralTyping_closure_goog_db_indexeddb_VersionChangeEvent;
        /**
         * The previous version of the database.
         */
        oldVersion: number;
        /**
         * The version the database is being or has been updated to.
         */
        newVersion: number;
    }
}
