import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { KeyRange } from './keyrange.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Creates a new IDBCursor wrapper object. Should not be created directly,
 * access cursor through object store.
 */
export declare class Cursor extends EventTarget {
    /**
     * Creates a new IDBCursor wrapper object. Should not be created directly,
     * access cursor through object store.
     */
    constructor();
    private noStructuralTyping_closure_goog_db_cursor_Cursor;
    /**
     * Advances the cursor to the next position along its direction. When new data
     * is available, the NEW_DATA event will be fired. If the cursor has reached the
     * end of the range it will fire the COMPLETE event. If opt_key is specified it
     * will advance to the key it matches in its direction.
     *
     * This wraps the native #continue method on the underlying object.
     * @param opt_key The optional key to advance to.
     */
    next(opt_key?: IDBValidKey | null): void;
    /**
     * Updates the value at the current position of the cursor in the object store.
     * If the cursor points to a value that has just been deleted, a new value is
     * created.
     * @param value The value to be stored.
     * @return The resulting deferred request.
     */
    update(value: any): Deferred;
    /**
     * Deletes the value at the cursor's position, without changing the cursor's
     * position. Once the value is deleted, the cursor's value is set to null.
     * @return The resulting deferred request.
     */
    remove(): Deferred;
    getValue(): any;
    getKey(): IDBValidKey | null;
    /**
     * Opens a value cursor from IDBObjectStore or IDBIndex over the specified key
     * range. Returns a cursor object which is able to iterate over the given range.
     * @param source Data source to open cursor.
     * @param opt_range The key range. If undefined iterates over the whole data source.
     * @param opt_direction The direction. If undefined moves in a forward direction with duplicates.
     * @return The cursor.
     */
    static openCursor(source: IDBObjectStore | IDBIndex, opt_range?: KeyRange, opt_direction?: Cursor.Direction): Cursor;
}
export declare namespace Cursor {
    /**
     * Possible cursor directions.
     */
    enum Direction {
        NEXT = "next",
        NEXT_NO_DUPLICATE = "nextunique",
        PREV = "prev",
        PREV_NO_DUPLICATE = "prevunique"
    }
    /**
     * Event types that the cursor can dispatch. COMPLETE events are dispatched when
     * a cursor is depleted of values, a NEW_DATA event if there is new data
     * available, and ERROR if an error occurred.
     */
    enum EventType {
        COMPLETE = "c",
        ERROR = "e",
        NEW_DATA = "n"
    }
}
