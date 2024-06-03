//!! generated by clutz.
// Generated from structs/linkedmap.js
declare namespace ಠ_ಠ.clutz.goog.structs {
  /**
   * Class for a LinkedMap datastructure, which combines O(1) map access for
   * key/value pairs with a linked list for a consistent iteration order. Sample
   * usage:
   *
   * <pre>
   * var m = new LinkedMap();
   * m.set('param1', 'A');
   * m.set('param2', 'B');
   * m.set('param3', 'C');
   * alert(m.getKeys()); // param1, param2, param3
   *
   * var c = new LinkedMap(5, true);
   * for (var i = 0; i < 10; i++) {
   * c.set('entry' + i, false);
   * }
   * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
   *
   * c.set('entry5', true);
   * c.set('entry1', false);
   * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
   * </pre>
   */
  class LinkedMap < KEY = any , VALUE = any > {
    private noStructuralTyping_goog_structs_LinkedMap : any;
    /**
     * Class for a LinkedMap datastructure, which combines O(1) map access for
     * key/value pairs with a linked list for a consistent iteration order. Sample
     * usage:
     *
     * <pre>
     * var m = new LinkedMap();
     * m.set('param1', 'A');
     * m.set('param2', 'B');
     * m.set('param3', 'C');
     * alert(m.getKeys()); // param1, param2, param3
     *
     * var c = new LinkedMap(5, true);
     * for (var i = 0; i < 10; i++) {
     * c.set('entry' + i, false);
     * }
     * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
     *
     * c.set('entry5', true);
     * c.set('entry1', false);
     * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
     * </pre>
     * @param opt_maxCount The maximum number of objects to store in the LinkedMap. If unspecified or 0, there is no maximum.
     * @param opt_cache When set, the LinkedMap stores items in order from most recently used to least recently used, instead of insertion order.
     * @param opt_evictionCallback Called with the removed stringified key as the first argument and value as the second argument after the key was evicted from the LRU because the max count was reached.
     */
    constructor (opt_maxCount ? : number , opt_cache ? : boolean , opt_evictionCallback ? : (a : string , b : VALUE ) => any ) ;
    head_ : ಠ_ಠ.clutz.goog.structs.LinkedMap.Node_ < string , undefined > ;
    clear ( ) : void ;
    /**
     * Tests whether a provided value is currently in the LinkedMap. This does not
     * affect item ordering in cache-style LinkedMaps.
     * @param value The value to check for.
     */
    contains (value : VALUE ) : boolean ;
    /**
     * Tests whether a provided key is currently in the LinkedMap. This does not
     * affect item ordering in cache-style LinkedMaps.
     * @param key The key to check for.
     */
    containsKey (key : string ) : boolean ;
    /**
     * Calls a function on each item in the LinkedMap and returns true only if every
     * function call returns a true-like value.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the Cache, and returns a boolean.
     * @param opt_obj The object context to use as "this" for the function.
     */
    every < T = any > (f : (this : T , a : VALUE , b : KEY , c : ಠ_ಠ.clutz.goog.structs.LinkedMap < KEY , VALUE > | null ) => boolean , opt_obj ? : T ) : boolean ;
    /**
     * Calls a function on each item in the LinkedMap.
     * @param opt_obj The value of "this" inside f.
     */
    forEach < T = any > (f : (this : T , a : VALUE , b : KEY , c : ಠ_ಠ.clutz.goog.structs.LinkedMap < KEY , VALUE > | null ) => any , opt_obj ? : T ) : void ;
    /**
     * Retrieves the value for a given key. If this is a caching LinkedMap, the
     * entry will become the most recently used.
     * @param key The key to retrieve the value for.
     * @param opt_val A default value that will be returned if the key is not found, defaults to undefined.
     */
    get (key : string , opt_val ? : VALUE ) : VALUE ;
    getCount ( ) : number ;
    getKeys ( ) : string [] ;
    getValues ( ) : VALUE [] ;
    isEmpty ( ) : boolean ;
    /**
     * Calls a function on each item in the LinkedMap and returns the results of
     * those calls in an array.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the LinkedMap.
     * @param opt_obj The object context to use as "this" for the function.
     */
    map < T = any , RESULT = any > (f : (this : T , a : VALUE , b : KEY , c : ಠ_ಠ.clutz.goog.structs.LinkedMap < KEY , VALUE > | null ) => RESULT , opt_obj ? : T ) : RESULT [] ;
    /**
     * Returns the value of the first node without making any modifications.
     */
    peek ( ) : VALUE ;
    /**
     * Returns the value of the last node without making any modifications.
     */
    peekLast ( ) : VALUE ;
    /**
     * Retrieves the value for a given key without updating the entry to be the
     * most recently used.
     * @param key The key to retrieve the value for.
     * @param opt_val A default value that will be returned if the key is not found.
     */
    peekValue (key : string , opt_val ? : VALUE ) : VALUE ;
    /**
     * Removes the last node from the list and returns its value.
     */
    pop ( ) : VALUE ;
    /**
     * Removes a value from the LinkedMap based on its key.
     * @param key The key to remove.
     */
    remove (key : string ) : boolean ;
    /**
     * Removes a node from the `LinkedMap`. It can be overridden to do
     * further cleanup such as disposing of the node value.
     * @param node The node to remove.
     */
    protected removeNode (node : ಠ_ಠ.clutz.goog.structs.LinkedMap.Node_ < string , VALUE > ) : void ;
    /**
     * Sets a value for a given key. If this is a caching LinkedMap, this entry
     * will become the most recently used.
     * @param key Key with which the specified value is to be associated.
     * @param value Value to be associated with the specified key.
     */
    set (key : string , value : VALUE ) : void ;
    /**
     * Sets a callback that fires when an entry is evicted because max entry
     * count is reached. The callback is called with the removed stringified key
     * as the first argument and value as the second argument after the key was
     * evicted from the LRU because the max count was reached.
     */
    setEvictionCallback (evictionCallback : (a : string , b : VALUE ) => any ) : void ;
    /**
     * Sets the maximum number of entries allowed in this object, truncating any
     * excess objects if necessary.
     * @param maxCount The new maximum number of entries to allow.
     */
    setMaxCount (maxCount : number ) : void ;
    /**
     * Removes the first node from the list and returns its value.
     */
    shift ( ) : VALUE ;
    /**
     * Calls a function on each item in the LinkedMap and returns true if any of
     * those function calls returns a true-like value.
     * @param f The function to call for each item. The function takes three arguments: the value, the key, and the LinkedMap, and returns a boolean.
     * @param opt_obj The object context to use as "this" for the function.
     */
    some < T = any > (f : (this : T , a : VALUE , b : KEY , c : ಠ_ಠ.clutz.goog.structs.LinkedMap < KEY , VALUE > | null ) => boolean , opt_obj ? : T ) : boolean ;
  }
}
// Generated from structs/linkedmap.js
declare namespace ಠ_ಠ.clutz.goog.structs.LinkedMap {
  class Node_ < KEY = any , VALUE = any > {
    private noStructuralTyping_goog_structs_LinkedMap_Node_ : any;
    key : KEY ;
    value : VALUE ;
    /**
     * The next node in the list.
     */
    next : ಠ_ಠ.clutz.goog.structs.LinkedMap.Node_ < KEY , VALUE > ;
    /**
     * The previous node in the list.
     */
    prev : ಠ_ಠ.clutz.goog.structs.LinkedMap.Node_ < KEY , VALUE > ;
    remove ( ) : void ;
  }
}
declare module 'goog:goog.structs.LinkedMap' {
  import LinkedMap = ಠ_ಠ.clutz.goog.structs.LinkedMap;
  export default LinkedMap;
}
