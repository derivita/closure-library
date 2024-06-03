//!! generated by clutz.
// Generated from dom/abstractmultirange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Creates a new multi range with no properties.  Do not use this
   * constructor: use one of the goog.dom.Range.createFrom* methods instead.
   */
  abstract class AbstractMultiRange extends ಠ_ಠ.clutz.goog.dom.AbstractRange {
    private noStructuralTyping_goog_dom_AbstractMultiRange : any;
    /**
     * Creates a new multi range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     */
    constructor ( ) ;
    containsNode (node ? : any , opt_allowPartial ? : any ) : any ;
    containsRange (otherRange ? : any , opt_allowPartial ? : any ) : any ;
    insertNode (node ? : any , before ? : any ) : any ;
    surroundWithNodes (startNode ? : any , endNode ? : any ) : void ;
  }
}
declare module 'goog:goog.dom.AbstractMultiRange' {
  import AbstractMultiRange = ಠ_ಠ.clutz.goog.dom.AbstractMultiRange;
  export default AbstractMultiRange;
}
