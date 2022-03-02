//!! generated by clutz.
// Generated from structs/priorityqueue.js
declare namespace ಠ_ಠ.clutz.goog.structs {
  /**
   * Class for Priority Queue datastructure.
   */
  class PriorityQueue < VALUE = any > extends ಠ_ಠ.clutz.goog.structs.Heap < number , VALUE > {
    private noStructuralTyping_goog_structs_PriorityQueue : any;
    /**
     * Class for Priority Queue datastructure.
     */
    constructor ( ) ;
    /**
     * Retrieves and removes the head of this queue.
     */
    dequeue ( ) : VALUE ;
    /**
     * Puts the specified value in the queue.
     * @param priority The priority of the value. A smaller value here means a higher priority.
     * @param value The value.
     */
    enqueue (priority : number , value : VALUE ) : void ;
  }
}
declare module 'goog:goog.structs.PriorityQueue' {
  import PriorityQueue = ಠ_ಠ.clutz.goog.structs.PriorityQueue;
  export default PriorityQueue;
}
