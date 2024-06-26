//!! generated by clutz.
// Generated from dom/controlrange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Create a new control selection with no properties.  Do not use this
   * constructor: use one of the goog.dom.Range.createFrom* methods instead.
   */
  class ControlRange extends ಠ_ಠ.clutz.goog.dom.AbstractMultiRange {
    private noStructuralTyping_goog_dom_ControlRange : any;
    /**
     * Create a new control selection with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     */
    constructor ( ) ;
    __iterator__ (opt_keys ? : any ) : any ;
    clone ( ) : any ;
    collapse (toAnchor ? : any ) : void ;
    getBrowserRangeObject ( ) : any ;
    getContainer ( ) : any ;
    getElements ( ) : ( GlobalElement | null ) [] ;
    getEndNode ( ) : any ;
    getEndOffset ( ) : any ;
    getHtmlFragment ( ) : any ;
    getPastableHtml ( ) : any ;
    getSortedElements ( ) : ( GlobalElement | null ) [] ;
    getStartNode ( ) : any ;
    getStartOffset ( ) : any ;
    getText ( ) : any ;
    getTextRange (i ? : any ) : any ;
    getTextRangeCount ( ) : any ;
    getType ( ) : any ;
    getValidHtml ( ) : any ;
    isCollapsed ( ) : any ;
    isRangeInDocument ( ) : any ;
    removeContents ( ) : void ;
    replaceContentsWithNode (node ? : any ) : any ;
    saveUsingCarets ( ) : any ;
    saveUsingDom ( ) : any ;
    select ( ) : void ;
    setBrowserRangeObject (nativeRange ? : any ) : any ;
    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param controlRange The browser range object.
     */
    static createFromBrowserRange (controlRange : GlobalObject | null ) : ಠ_ಠ.clutz.goog.dom.ControlRange ;
    /**
     * Create a new range wrapper that selects the given element.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param var_args The element(s) to select.
     */
    static createFromElements ( ...var_args : ( GlobalElement | null ) [] ) : ಠ_ಠ.clutz.goog.dom.ControlRange ;
  }
}
declare module 'goog:goog.dom.ControlRange' {
  import ControlRange = ಠ_ಠ.clutz.goog.dom.ControlRange;
  export default ControlRange;
}
// Generated from dom/controlrange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
   * adds functions to determine the portion of each text node that is selected.
   */
  class ControlRangeIterator extends ಠ_ಠ.clutz.goog.dom.RangeIterator {
    private noStructuralTyping_goog_dom_ControlRangeIterator : any;
    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param range The range to traverse.
     */
    constructor (range : ಠ_ಠ.clutz.goog.dom.ControlRange | null ) ;
    clone ( ) : ಠ_ಠ.clutz.goog.dom.ControlRangeIterator ;
    copyFrom (other ? : any ) : void ;
    getEndNode ( ) : any ;
    getEndTextOffset ( ) : any ;
    getStartNode ( ) : any ;
    getStartTextOffset ( ) : any ;
    isLast ( ) : any ;
    /**
     * Move to the next position in the selection.
     * Throws `goog.iter.StopIteration` when it passes the end of the range.
     */
    next ( ) : IteratorResult < Node > ;
  }
}
declare module 'goog:goog.dom.ControlRangeIterator' {
  import ControlRangeIterator = ಠ_ಠ.clutz.goog.dom.ControlRangeIterator;
  export default ControlRangeIterator;
}
