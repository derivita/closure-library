//!! generated by clutz.
// Generated from dom/textrange.js
declare namespace ಠ_ಠ.clutz.goog.dom {
  /**
   * Create a new text selection with no properties.  Do not use this constructor:
   * use one of the goog.dom.Range.createFrom* methods instead.
   */
  class TextRange extends ಠ_ಠ.clutz.goog.dom.AbstractRange {
    private noStructuralTyping_goog_dom_TextRange : any;
    /**
     * Create a new text selection with no properties.  Do not use this constructor:
     * use one of the goog.dom.Range.createFrom* methods instead.
     */
    constructor ( ) ;
    /**
     * Returns a TextRangeIterator over the contents of the range.  Regardless of
     * the direction of the range, the iterator will move in document order.
     * @param opt_keys Unused for this iterator.
     */
    __iterator__ (opt_keys ? : boolean ) : ಠ_ಠ.clutz.goog.dom.TextRangeIterator ;
    clone ( ) : ಠ_ಠ.clutz.goog.dom.TextRange ;
    collapse (toAnchor ? : any ) : void ;
    containsNode (node ? : any , opt_allowPartial ? : any ) : any ;
    containsRange (otherRange ? : any , opt_allowPartial ? : any ) : any ;
    getBrowserRangeObject ( ) : any ;
    getContainer ( ) : any ;
    getEndNode ( ) : any ;
    getEndOffset ( ) : any ;
    getEndPosition ( ) : any ;
    getHtmlFragment ( ) : any ;
    getPastableHtml ( ) : any ;
    getStartNode ( ) : any ;
    getStartOffset ( ) : any ;
    getStartPosition ( ) : any ;
    getText ( ) : any ;
    getTextRange (i ? : any ) : any ;
    getTextRangeCount ( ) : any ;
    getType ( ) : any ;
    getValidHtml ( ) : any ;
    insertNode (node ? : any , before ? : any ) : any ;
    isCollapsed ( ) : any ;
    isRangeInDocument ( ) : any ;
    isReversed ( ) : any ;
    /**
     * Moves a TextRange to the provided nodes and offsets.
     * @param startNode The node to start with.
     * @param startOffset The offset within the node to start.
     * @param endNode The node to end with.
     * @param endOffset The offset within the node to end.
     * @param isReversed Whether the range is reversed.
     */
    moveToNodes (startNode : Node | null , startOffset : number , endNode : Node | null , endOffset : number , isReversed : boolean ) : void ;
    removeContents ( ) : void ;
    saveUsingCarets ( ) : any ;
    saveUsingDom ( ) : any ;
    select ( ) : void ;
    setBrowserRangeObject (nativeRange ? : any ) : any ;
    /**
     * Surrounds the text range with the specified element (on Mozilla) or with a
     * clone of the specified element (on IE).  Returns a reference to the
     * surrounding element if the operation was successful; returns null if the
     * operation failed.
     * @param element The element with which the selection is to be surrounded.
     */
    surroundContents (element : GlobalElement | null ) : GlobalElement | null ;
    surroundWithNodes (startNode ? : any , endNode ? : any ) : void ;
    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param range The browser range object.
     * @param opt_isReversed Whether the focus node is before the anchor node.
     */
    static createFromBrowserRange (range : Range | null | ಠ_ಠ.clutz.TextRange , opt_isReversed ? : boolean ) : ಠ_ಠ.clutz.goog.dom.TextRange ;
    /**
     * Create a new range wrapper that selects the given node's text.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param node The node to select.
     * @param opt_isReversed Whether the focus node is before the anchor node.
     */
    static createFromNodeContents (node : Node | null , opt_isReversed ? : boolean ) : ಠ_ಠ.clutz.goog.dom.TextRange ;
    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.  Do not use this method directly - please
     * use goog.dom.Range.createFrom* instead.
     * @param anchorNode The node to start with.
     * @param anchorOffset The offset within the node to start.
     * @param focusNode The node to end with.
     * @param focusOffset The offset within the node to end.
     */
    static createFromNodes (anchorNode : Node | null , anchorOffset : number , focusNode : Node | null , focusOffset : number ) : ಠ_ಠ.clutz.goog.dom.TextRange ;
    /**
     * Tests if the given node is in a document.
     * @param node The node to check.
     */
    static isAttachedNode (node : Node | null ) : boolean ;
  }
}
declare module 'goog:goog.dom.TextRange' {
  import TextRange = ಠ_ಠ.clutz.goog.dom.TextRange;
  export default TextRange;
}
