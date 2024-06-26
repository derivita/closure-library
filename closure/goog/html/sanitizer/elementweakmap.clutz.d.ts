//!! generated by clutz.
// Generated from html/sanitizer/elementweakmap.js
declare namespace ಠ_ಠ.clutz.goog.html.sanitizer {
  export import ElementWeakMap = ಠ_ಠ.clutz.module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap ;
}
declare module 'goog:goog.html.sanitizer.ElementWeakMap' {
  import ElementWeakMap = ಠ_ಠ.clutz.goog.html.sanitizer.ElementWeakMap;
  export default ElementWeakMap;
}
// Generated from html/sanitizer/elementweakmap.js
declare namespace ಠ_ಠ.clutz {
  /**
   * A weakmap-like implementation for browsers that don't support native WeakMap.
   * It uses a data attribute on the key element for O(1) lookups.
   */
  class module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap < T = any > {
    private noStructuralTyping_module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap : any;
    clear ( ) : void ;
    /**
     * Gets the value previously stored for `elementKey`, or undefined if no
     * value was stored for such key.
     */
    get (elementKey : GlobalElement ) : GlobalElement | undefined ;
    /**
     * Stores a `elementKey` -> `value` mapping.
     */
    set (elementKey : GlobalElement , value : T ) : module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap < any > ;
    /**
     * Returns either this weakmap adapter or the native weakmap implmentation, if
     * available.
     */
    static newWeakMap ( ) : module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap < any > | WeakMap ;
  }
}
declare namespace ಠ_ಠ.clutz {
  export import module$exports$goog$html$sanitizer$ElementWeakMap = ಠ_ಠ.clutz.module$contents$goog$html$sanitizer$ElementWeakMap_ElementWeakMap ;
}
