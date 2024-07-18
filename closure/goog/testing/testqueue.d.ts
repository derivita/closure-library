/**
 * Generic queue for writing unit tests
 */
export declare class TestQueue {
    /**
     * Generic queue for writing unit tests
     */
    constructor();
    private noStructuralTyping_closure_goog_testing_testqueue_TestQueue;
    /**
     * Adds a new event onto the queue.
     * @param event The event to queue.
     */
    enqueue(event: object | null): void;
    /**
     * Returns whether the queue is empty.
     * @return Whether the queue is empty.
     */
    isEmpty(): boolean;
    /**
     * Gets the next event from the queue. Throws an exception if the queue is
     * empty.
     * @param opt_comment Comment if the queue is empty.
     * @return The next event from the queue.
     */
    dequeue(opt_comment?: string): object | null;
}
