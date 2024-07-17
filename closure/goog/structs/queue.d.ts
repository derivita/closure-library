/**
 * Class for FIFO Queue data structure.
 */
export declare class Queue<T = any> {
    /**
     * Class for FIFO Queue data structure.
     */
    constructor();
    private noStructuralTyping_closure_goog_structs_queue_Queue;
    /**
     * Puts the specified element on this queue.
     * @param element The element to be added to the queue.
     */
    enqueue(element: T | null): void;
    /**
     * Retrieves and removes the head of this queue.
     * @return The element at the head of this queue. Returns undefined if the queue is empty.
     */
    dequeue(): T | null;
    /**
     * Retrieves but does not remove the head of this queue.
     * @return The element at the head of this queue. Returns undefined if the queue is empty.
     */
    peek(): T | null;
    /**
     * Returns the number of elements in this queue.
     * @return The number of elements in this queue.
     */
    getCount(): number;
    /**
     * Returns true if this queue contains no elements.
     * @return true if this queue contains no elements.
     */
    isEmpty(): boolean;
    /**
     * Removes all elements from the queue.
     */
    clear(): void;
    /**
     * Returns true if the given value is in the queue.
     * @param obj The value to look for.
     * @return Whether the object is in the queue.
     */
    contains(obj: T | null): boolean;
    /**
     * Removes the first occurrence of a particular value from the queue.
     * @param obj Object to remove.
     * @return True if an element was removed.
     */
    remove(obj: T | null): boolean;
    /**
     * Returns all the values in the queue.
     * @return An array of the values in the queue.
     */
    getValues(): (T | null)[];
}
