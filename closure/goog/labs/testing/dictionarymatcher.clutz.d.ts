//!! generated by clutz.
// Generated from labs/testing/dictionarymatcher.js
declare namespace ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher {
  /**
   * The HasEntries matcher.
   */
  class HasEntriesMatcher implements ಠ_ಠ.clutz.goog.labs.testing.Matcher {
    private noStructuralTyping_goog_labs_testing_dictionarymatcher_HasEntriesMatcher : any;
    /**
     * The HasEntries matcher.
     * @param entries The entries to check in the object.
     */
    constructor (entries : GlobalObject ) ;
    describe (actualObject ? : any ) : any ;
    /**
     * Determines if an object has particular entries.
     */
    matches (actualObject ? : any ) : any ;
    /**
     * Gives a matcher that asserts an object contains all the given key-value pairs
     * in the input object.
     * @param entries The entries to check for presence in the object.
     */
    static hasEntries (entries : GlobalObject ) : ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher.HasEntriesMatcher ;
  }
  /**
   * The HasEntry matcher.
   */
  class HasEntryMatcher implements ಠ_ಠ.clutz.goog.labs.testing.Matcher {
    private noStructuralTyping_goog_labs_testing_dictionarymatcher_HasEntryMatcher : any;
    /**
     * The HasEntry matcher.
     * @param key The key for the entry.
     * @param value The value for the key.
     */
    constructor (key : string , value : any ) ;
    describe (actualObject ? : any ) : any ;
    /**
     * Determines if an object has a particular entry.
     */
    matches (actualObject ? : any ) : any ;
    /**
     * Gives a matcher that asserts an object contains the given key-value pair.
     * @param key The key to check for presence in the object.
     * @param value The value to check for presence in the object.
     */
    static hasEntry (key : string , value : any ) : ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher.HasEntryMatcher ;
  }
  /**
   * The HasKey matcher.
   */
  class HasKeyMatcher implements ಠ_ಠ.clutz.goog.labs.testing.Matcher {
    private noStructuralTyping_goog_labs_testing_dictionarymatcher_HasKeyMatcher : any;
    /**
     * The HasKey matcher.
     * @param key The key to check in the object.
     */
    constructor (key : string ) ;
    describe (actualObject ? : any ) : any ;
    /**
     * Determines if an object has a key.
     */
    matches (actualObject ? : any ) : any ;
    /**
     * Gives a matcher that asserts an object contains the given key.
     * @param key The key to check for presence in the object.
     */
    static hasKey (key : string ) : ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher.HasKeyMatcher ;
  }
  /**
   * The HasValue matcher.
   */
  class HasValueMatcher implements ಠ_ಠ.clutz.goog.labs.testing.Matcher {
    private noStructuralTyping_goog_labs_testing_dictionarymatcher_HasValueMatcher : any;
    /**
     * The HasValue matcher.
     * @param value The value to check in the object.
     */
    constructor (value : any ) ;
    describe (actualObject ? : any ) : any ;
    /**
     * Determines if an object contains a value
     */
    matches (actualObject ? : any ) : any ;
    /**
     * Gives a matcher that asserts an object contains the given value.
     * @param value The value to check for presence in the object.
     */
    static hasValue (value : any ) : ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher.HasValueMatcher ;
  }
}
declare module 'goog:goog.labs.testing.dictionarymatcher' {
  import dictionarymatcher = ಠ_ಠ.clutz.goog.labs.testing.dictionarymatcher;
  export = dictionarymatcher;
}
