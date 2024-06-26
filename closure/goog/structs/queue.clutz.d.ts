//!! generated by clutz.
// Generated from structs/queue.js
declare namespace ಠ_ಠ.clutz.goog.structs {
  /**
   * Class for FIFO Queue data structure.
   */
  class Queue < T = any > {
    private noStructuralTyping_goog_structs_Queue : any;
    clear ( ) : void ;
    /**
     * Returns true if the given value is in the queue.
     * @param obj The value to look for.
     */
    contains (obj : T ) : boolean ;
    /**
     * Retrieves and removes the head of this queue.
     */
    dequeue ( ) : T ;
    /**
     * Puts the specified element on this queue.
     * @param element The element to be added to the queue.
     */
    enqueue (element : T ) : void ;
    /**
     * Returns the number of elements in this queue.
     */
    getCount ( ) : number ;
    /**
     * Returns all the values in the queue.
     */
    getValues ( ) : T [] ;
    /**
     * Returns true if this queue contains no elements.
     */
    isEmpty ( ) : boolean ;
    /**
     * Retrieves but does not remove the head of this queue.
     */
    peek ( ) : T ;
    /**
     * Removes the first occurrence of a particular value from the queue.
     * @param obj Object to remove.
     */
    remove (obj : T ) : boolean ;
  }
}
declare module 'goog:goog.structs.Queue' {
  import Queue = ಠ_ಠ.clutz.goog.structs.Queue;
  export default Queue;
}
