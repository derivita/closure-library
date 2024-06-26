//!! generated by clutz.
// Generated from dom/browserrange/w3crange.js
declare namespace ಠ_ಠ.clutz.goog.dom.browserrange {
  /**
   * The constructor for W3C specific browser ranges.
   */
  class W3cRange extends ಠ_ಠ.clutz.goog.dom.browserrange.AbstractRange {
    private noStructuralTyping_goog_dom_browserrange_W3cRange : any;
    /**
     * The constructor for W3C specific browser ranges.
     * @param range The range object.
     */
    constructor (range : Range | null ) ;
    range_ : Range | null ;
    clone ( ) : ಠ_ಠ.clutz.goog.dom.browserrange.W3cRange ;
    collapse (toStart ? : any ) : void ;
    compareBrowserRangeEndpoints (range ? : any , thisEndpoint ? : any , otherEndpoint ? : any ) : any ;
    getBrowserRange ( ) : any ;
    getContainer ( ) : any ;
    getEndNode ( ) : any ;
    getEndOffset ( ) : any ;
    getStartNode ( ) : any ;
    getStartOffset ( ) : any ;
    getText ( ) : any ;
    getValidHtml ( ) : any ;
    insertNode (node ? : any , before ? : any ) : any ;
    isCollapsed ( ) : any ;
    removeContents ( ) : void ;
    select (reverse ? : any ) : void ;
    /**
     * Select this range.
     * @param selection Browser selection object.
     * @param reverse Whether to select this range in reverse.
     */
    protected selectInternal (selection : Selection | null , reverse : any ) : void ;
    surroundContents (element ? : any ) : any ;
    surroundWithNodes (startNode ? : any , endNode ? : any ) : void ;
    /**
     * Creates a range object that selects the given node's text.
     * @param node The node to select.
     */
    static createFromNodeContents (node : Node | null ) : ಠ_ಠ.clutz.goog.dom.browserrange.W3cRange ;
    /**
     * Creates a range object that selects between the given nodes.
     * @param startNode The node to start with.
     * @param startOffset The offset within the start node.
     * @param endNode The node to end with.
     * @param endOffset The offset within the end node.
     */
    static createFromNodes (startNode : Node | null , startOffset : number , endNode : Node | null , endOffset : number ) : ಠ_ಠ.clutz.goog.dom.browserrange.W3cRange ;
    /**
     * Returns a browser range spanning the given node's contents.
     * @param node The node to select.
     */
    protected static getBrowserRangeForNode (node : Node | null ) : Range ;
    /**
     * Returns a browser range spanning the given nodes.
     * @param startNode The node to start with - should not be a BR.
     * @param startOffset The offset within the start node.
     * @param endNode The node to end with - should not be a BR.
     * @param endOffset The offset within the end node.
     */
    protected static getBrowserRangeForNodes (startNode : Node | null , startOffset : number , endNode : Node | null , endOffset : number ) : Range ;
  }
}
declare module 'goog:goog.dom.browserrange.W3cRange' {
  import W3cRange = ಠ_ಠ.clutz.goog.dom.browserrange.W3cRange;
  export default W3cRange;
}
