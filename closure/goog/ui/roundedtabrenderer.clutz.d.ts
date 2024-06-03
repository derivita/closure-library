//!! generated by clutz.
// Generated from ui/roundedtabrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Rounded corner tab renderer for {@link goog.ui.Tab}s.
   */
  class RoundedTabRenderer extends ಠ_ಠ.clutz.goog.ui.TabRenderer {
    private noStructuralTyping_goog_ui_RoundedTabRenderer : any;
    /**
     * Rounded corner tab renderer for {@link goog.ui.Tab}s.
     */
    constructor ( ) ;
    /**
     * Creates a table row implementing the tab caption.
     * @param dom DOM helper to use for element construction.
     * @param caption Text caption or DOM structure to display as the tab's caption.
     */
    protected createCaption (dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null ) : GlobalElement ;
    /**
     * Creates the tab's DOM structure, based on the containing tab bar's location
     * relative to tab contents.  For example, the DOM for a tab in a tab bar
     * located above tab contents would look like this:
     *
     * <div class="goog-rounded-tab" title="...">
     * <table class="goog-rounded-tab-table">
     * <tbody>
     * <tr>
     * <td nowrap>
     * <div class="goog-rounded-tab-outer-edge"></div>
     * <div class="goog-rounded-tab-inner-edge"></div>
     * </td>
     * </tr>
     * <tr>
     * <td nowrap>
     * <div class="goog-rounded-tab-caption">Hello, world</div>
     * </td>
     * </tr>
     * </tbody>
     * </table>
     * </div>
     * @param tab Tab to render.
     */
    createDom (tab : ಠ_ಠ.clutz.goog.ui.Control | null ) : GlobalElement | null ;
    /**
     * Creates a table row implementing a rounded tab edge.
     * @param dom DOM helper to use for element construction.
     * @param isTopEdge Whether to create a top or bottom edge.
     */
    protected createEdge (dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null , isTopEdge : boolean ) : GlobalElement ;
    /**
     * Creates a table implementing a rounded corner tab.
     * @param dom DOM helper to use for element construction.
     * @param caption Text caption or DOM structure to display as the tab's caption.
     * @param location Tab bar location relative to the tab contents.
     */
    protected createTab (dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null , caption : ಠ_ಠ.clutz.goog.ui.ControlContent | null , location : ಠ_ಠ.clutz.goog.ui.TabBar.Location | null ) : GlobalElement ;
    /**
     * Decorates the element with the tab.  Overrides the superclass implementation
     * by wrapping the tab's content in a table that implements rounded corners.
     * @param tab Tab to decorate the element.
     * @param element Element to decorate.
     */
    decorate (tab : ಠ_ಠ.clutz.goog.ui.Control | null , element : GlobalElement | null ) : GlobalElement | null ;
    getContentElement (element ? : any ) : any ;
    /**
     * Returns the CSS class name to be applied to the root element of all tabs
     * rendered or decorated using this renderer.
     */
    getCssClass ( ) : string ;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS : string ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.RoundedTabRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.RoundedTabRenderer ;
  }
}
declare module 'goog:goog.ui.RoundedTabRenderer' {
  import RoundedTabRenderer = ಠ_ಠ.clutz.goog.ui.RoundedTabRenderer;
  export default RoundedTabRenderer;
}
