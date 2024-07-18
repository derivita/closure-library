/**
 * Class for CircularBuffer.
 */
export declare class CircularBuffer<T = any> {
    /**
     * Class for CircularBuffer.
     * @param opt_maxSize The maximum size of the buffer.
     */
    constructor(opt_maxSize?: number);
    private noStructuralTyping_closure_goog_structs_circularbuffer_CircularBuffer;
    /**
     * Adds an item to the buffer. May remove the oldest item if the buffer is at
     * max size.
     * @param item The item to add.
     * @return The removed old item, if the buffer is at max size. Return undefined, otherwise.
     */
    add(item: T | null): T | undefined | null;
    /**
     * Returns the item at the specified index.
     * @param index The index of the item. The index of an item can change after calls to `add()` if the buffer is at maximum size.
     * @return The item at the specified index.
     */
    get(index: number): T | null;
    /**
     * Sets the item at the specified index.
     * @param index The index of the item. The index of an item can change after calls to `add()` if the buffer is at maximum size.
     * @param item The item to add.
     */
    set(index: number, item: T | null): void;
    /**
     * Returns the current number of items in the buffer.
     * @return The current number of items in the buffer.
     */
    getCount(): number;
    isEmpty(): boolean;
    /**
     * Empties the current buffer.
     */
    clear(): void;
    getValues(): (T | null)[];
    /**
     * Returns the newest values in the buffer up to `count`.
     * @param maxCount The maximum number of values to get. Should be a positive number.
     * @return The newest values in the buffer up to `count`. The values are ordered from oldest to newest.
     */
    getNewestValues(maxCount: number): (T | null)[];
    getKeys(): number[];
    /**
     * Whether the buffer contains the key/index.
     * @param key The key/index to check for.
     * @return Whether the buffer contains the key/index.
     */
    containsKey(key: number): boolean;
    /**
     * Whether the buffer contains the given value.
     * @param value The value to check for.
     * @return Whether the buffer contains the given value.
     */
    containsValue(value: T | null): boolean;
    /**
     * Returns the last item inserted into the buffer.
     * @return The last item inserted into the buffer, or null if the buffer is empty.
     */
    getLast(): T | null | null;
}
