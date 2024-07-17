/**
 * A JS storage instance, implementing the HTML5 Storage interface.
 * See http://www.w3.org/TR/webstorage/ for details.
 */
export declare class MockStorage implements Storage {
    /**
     * A JS storage instance, implementing the HTML5 Storage interface.
     * See http://www.w3.org/TR/webstorage/ for details.
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_mockstorage_MockStorage;
    /**
     * The number of elements in the storage.
     */
    length: number;
    /**
     * Sets an item to the storage.
     * @param key Storage key.
     * @param value Storage value. Must be convertible to string.
     */
    setItem(key: string, value: any): any;
    /**
     * Gets an item from the storage.  The item returned is the "structured clone"
     * of the value from setItem.  In practice this means it's the value cast to a
     * string.
     * @param key Storage key.
     * @return Storage value for key; null if does not exist.
     */
    getItem(key: string): string | null;
    /**
     * Removes and item from the storage.
     * @param key Storage key.
     */
    removeItem(key: string): any;
    /**
     * Clears the storage.
     */
    clear(): any;
    /**
     * Returns the key at the given index.
     * @param index The index for the key.
     * @return Key at the given index, null if not found.
     */
    key(index: number): string | null;
}
