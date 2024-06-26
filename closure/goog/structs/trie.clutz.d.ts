//!! generated by clutz.
// Generated from structs/trie.js
declare namespace ಠ_ಠ.clutz.goog.structs {
  /**
   * Class for a Trie datastructure.  Trie data structures are made out of trees
   * of Trie classes.
   */
  class Trie < VALUE = any > {
    private noStructuralTyping_goog_structs_Trie : any;
    /**
     * Class for a Trie datastructure.  Trie data structures are made out of trees
     * of Trie classes.
     * @param opt_trie Optional goog.structs.Trie or Object to initialize trie with.
     */
    constructor (opt_trie ? : ಠ_ಠ.clutz.goog.structs.Trie < VALUE > | null | { [ key: string ]: VALUE } ) ;
    /**
     * Adds the given key/value pair in the trie.  Throw an exception if the key
     * already exists in the trie.  O(L), where L is the length of the key.
     * @param key The key.
     * @param value The value.
     */
    add (key : string , value : VALUE ) : void ;
    clear ( ) : void ;
    /**
     * Clones a trie and returns a new trie.  O(N), where N is the number of nodes
     * in the trie.
     */
    clone ( ) : ಠ_ಠ.clutz.goog.structs.Trie < VALUE > ;
    /**
     * Checks to see if a certain key is in the trie.  O(L), where L is the length
     * of the key.
     * @param key A key that may be in the trie.
     */
    containsKey (key : string ) : boolean ;
    /**
     * Checks to see if a certain prefix is in the trie. O(L), where L is the length
     * of the prefix.
     * @param prefix A prefix that may be in the trie.
     */
    containsPrefix (prefix : string ) : boolean ;
    /**
     * Checks to see if a certain value is in the trie.  Worst case is O(N) where
     * N is the number of nodes in the trie.
     * @param value A value that may be in the trie.
     */
    containsValue (value : VALUE ) : boolean ;
    /**
     * Retrieves a value from the trie given a key.  O(L), where L is the length of
     * the key.
     * @param key The key to retrieve from the trie.
     */
    get (key : string ) : VALUE | undefined ;
    /**
     * Returns the number of key value pairs in the trie.  O(N), where N is the
     * number of nodes in the trie.
     * TODO: This could be optimized by storing a weight (count below) in every
     * node.
     */
    getCount ( ) : number ;
    /**
     * Retrieves all values from the trie that correspond to prefixes of the given
     * input key. O(L), where L is the length of the key.
     * @param key The key to use for lookup. The given key as well as all prefixes of the key are retrieved.
     * @param opt_keyStartIndex Optional position in key to start lookup from. Defaults to 0 if not specified.
     */
    getKeyAndPrefixes (key : string , opt_keyStartIndex ? : number | null ) : { [ /* warning: coerced from ? */ key: string ]: VALUE } ;
    /**
     * Gets the keys of the trie.  Not returned in any reliable order.  O(N) where
     * N is the number of nodes in the trie (or prefix subtree).
     * @param opt_prefix Find only keys with this optional prefix.
     */
    getKeys (opt_prefix ? : string ) : string [] ;
    /**
     * Gets the values of the trie.  Not returned in any reliable order.  O(N) where
     * N is the number of nodes in the trie.  Calls getValuesInternal_.
     */
    getValues ( ) : VALUE [] ;
    /**
     * Returns true if this trie contains no elements.  ~O(1).
     */
    isEmpty ( ) : boolean ;
    /**
     * Removes a key from the trie or throws an exception if the key is not in the
     * trie.  O(L), where L is the length of the key.
     * @param key A key that should be removed from the trie.
     */
    remove (key : string ) : VALUE ;
    /**
     * Sets the given key/value pair in the trie.  O(L), where L is the length
     * of the key.
     * @param key The key.
     * @param value The value.
     */
    set (key : string , value : VALUE ) : void ;
    /**
     * Adds multiple key/value pairs from another goog.structs.Trie or Object.
     * O(N) where N is the number of nodes in the trie.
     * @param trie Object containing the data to add.
     */
    setAll (trie : { [ key: string ]: VALUE } | ಠ_ಠ.clutz.goog.structs.Trie < VALUE > ) : void ;
  }
}
declare module 'goog:goog.structs.Trie' {
  import Trie = ಠ_ಠ.clutz.goog.structs.Trie;
  export default Trie;
}
