//!! generated by clutz.
// Generated from tweak/registry.js
declare namespace ಠ_ಠ.clutz.goog.tweak {
  /**
   * Singleton that manages all tweaks. This should be instantiated only from
   * goog.tweak.getRegistry().
   */
  class Registry {
    private noStructuralTyping_goog_tweak_Registry : any;
    /**
     * Singleton that manages all tweaks. This should be instantiated only from
     * goog.tweak.getRegistry().
     * @param queryParams Value of window.location.search.
     */
    constructor (queryParams : string ) ;
    /**
     * Adds a callback to be called whenever a new tweak is added.
     * @param func The callback.
     */
    addOnRegisterListener (func : Function ) : void ;
    /**
     * Creates and returns an array of all BaseSetting objects with an associted
     * query parameter.
     * @param excludeChildEntries Exclude BooleanInGroupSettings.
     * @param excludeNonSettings Exclude entries that are not subclasses of BaseSetting.
     */
    extractEntries (excludeChildEntries : boolean , excludeNonSettings : boolean ) : ಠ_ಠ.clutz.goog.tweak.BaseSetting [] ;
    /**
     * Returns the boolean setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     */
    getBooleanSetting (id : string ) : ಠ_ಠ.clutz.goog.tweak.BooleanSetting ;
    /**
     * Returns the BaseEntry with the given ID. Asserts if it does not exists.
     * @param id The unique string that identifies this entry.
     */
    getEntry (id : string ) : ಠ_ಠ.clutz.goog.tweak.BaseEntry ;
    /**
     * Returns the numeric setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     */
    getNumericSetting (id : string ) : ಠ_ಠ.clutz.goog.tweak.NumericSetting ;
    /**
     * Returns the string setting with the given ID. Asserts if the ID does not
     * refer to a registered entry or if it refers to one of the wrong type.
     * @param id The unique string that identifies this entry.
     */
    getStringSetting (id : string ) : ಠ_ಠ.clutz.goog.tweak.StringSetting ;
    hasEntry (id : string ) : boolean ;
    /**
     * Returns the query part of the URL that will apply all set tweaks.
     * @param opt_existingSearchStr The part of the url between the ? and the #. Uses window.location.search if not given.
     */
    makeUrlQuery (opt_existingSearchStr ? : string ) : string ;
    /**
     * Registers the given tweak setting/action.
     * @param entry The entry.
     */
    register (entry : ಠ_ಠ.clutz.goog.tweak.BaseEntry | null ) : void ;
    /**
     * Simple parser for query params. Makes all keys lower-case.
     * @param queryParams The part of the url between the ? and the #.
     */
    static parseQueryParams (queryParams : string ) : { [ /* warning: coerced from ? */ key: string ]: string } ;
  }
}
declare module 'goog:goog.tweak.Registry' {
  import Registry = ಠ_ಠ.clutz.goog.tweak.Registry;
  export default Registry;
}
