//!! generated by clutz.
// Generated from dom/multirange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Creates a new multi part range with no properties.  Do not use this
   * constructor: use one of the goog.dom.Range.createFrom* methods instead.
   */
  class MultiRange extends ಠ_ಠ.clutz.goog.dom.AbstractMultiRange {
    private noStructuralTyping_goog_dom_MultiRange : any;
    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     */
    constructor ( ) ;
    __iterator__ (opt_keys ? : any ) : any ;
    clone ( ) : ಠ_ಠ.clutz.goog.dom.MultiRange ;
    /**
     * Collapses this range to a single point, either the first or last point
     * depending on the parameter.  This will result in the number of ranges in this
     * multi range becoming 1.
     * @param toAnchor Whether to collapse to the anchor.
     */
    collapse (toAnchor : boolean ) : void ;
    getBrowserRangeObject ( ) : any ;
    getContainer ( ) : any ;
    getEndNode ( ) : any ;
    getEndOffset ( ) : any ;
    getHtmlFragment ( ) : any ;
    getPastableHtml ( ) : any ;
    getSortedRanges ( ) : ( ಠ_ಠ.clutz.goog.dom.TextRange | null ) [] ;
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
    saveUsingCarets ( ) : any ;
    saveUsingDom ( ) : any ;
    select ( ) : void ;
    setBrowserRangeObject (nativeRange ? : any ) : any ;
    /**
     * Creates a new range wrapper from the given browser ranges.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param browserRanges The browser ranges.
     */
    static createFromBrowserRanges (browserRanges : ( Range | null ) [] | null ) : ಠ_ಠ.clutz.goog.dom.MultiRange ;
    /**
     * Creates a new range wrapper from the given browser selection object.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param selection The browser selection object.
     */
    static createFromBrowserSelection (selection : Selection | null ) : ಠ_ಠ.clutz.goog.dom.MultiRange ;
    /**
     * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
     * not use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param textRanges The text range objects.
     */
    static createFromTextRanges (textRanges : ( ಠ_ಠ.clutz.goog.dom.TextRange | null ) [] | null ) : ಠ_ಠ.clutz.goog.dom.MultiRange ;
  }
}
declare module 'goog:goog.dom.MultiRange' {
  import MultiRange = ಠ_ಠ.clutz.goog.dom.MultiRange;
  export default MultiRange;
}
// Generated from dom/multirange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
   * adds functions to determine the portion of each text node that is selected.
   */
  class MultiRangeIterator extends ಠ_ಠ.clutz.goog.dom.RangeIterator {
    private noStructuralTyping_goog_dom_MultiRangeIterator : any;
    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param range The range to traverse.
     */
    constructor (range : ಠ_ಠ.clutz.goog.dom.MultiRange | null ) ;
    clone ( ) : ಠ_ಠ.clutz.goog.dom.MultiRangeIterator ;
    copyFrom (other ? : any ) : void ;
    getEndNode ( ) : any ;
    getEndTextOffset ( ) : any ;
    getStartNode ( ) : any ;
    getStartTextOffset ( ) : any ;
    isLast ( ) : any ;
    next ( ) : IteratorResult < Node > ;
  }
}
declare module 'goog:goog.dom.MultiRangeIterator' {
  import MultiRangeIterator = ಠ_ಠ.clutz.goog.dom.MultiRangeIterator;
  export default MultiRangeIterator;
}
