import { Heap } from './heap.js';
/**
 * Class for Priority Queue datastructure.
 */
declare class PriorityQueue<VALUE = any> extends Heap<number, VALUE | null> {
    /**
     * Puts the specified value in the queue.
     */
    enqueue(priority: number, value: VALUE | null): void;
    /**
     * Retrieves and removes the head of this queue.
     */
    dequeue(): VALUE | null;
}
export { PriorityQueue };
