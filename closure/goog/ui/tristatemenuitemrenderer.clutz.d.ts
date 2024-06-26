//!! generated by clutz.
// Generated from ui/tristatemenuitemrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
   * the following structure:
   *
   * <div class="goog-tristatemenuitem">
   * <div class="goog-tristatemenuitem-checkbox"></div>
   * <div>...(content)...</div>
   * </div>
   */
  class TriStateMenuItemRenderer extends ಠ_ಠ.clutz.goog.ui.MenuItemRenderer {
    private noStructuralTyping_goog_ui_TriStateMenuItemRenderer : any;
    /**
     * Default renderer for {@link goog.ui.TriStateMenuItemRenderer}s. Each item has
     * the following structure:
     *
     * <div class="goog-tristatemenuitem">
     * <div class="goog-tristatemenuitem-checkbox"></div>
     * <div>...(content)...</div>
     * </div>
     */
    constructor ( ) ;
    /**
     * Overrides {@link goog.ui.ControlRenderer#decorate} by initializing the
     * menu item to checkable based on whether the element to be decorated has
     * extra styling indicating that it should be.
     * @param item goog.ui.TriStateMenuItem to decorate the element.
     * @param element Element to decorate.
     */
    decorate (item : ಠ_ಠ.clutz.goog.ui.Control | null , element : GlobalElement | null ) : GlobalElement ;
    getCssClass ( ) : any ;
    /**
     * CSS class name the renderer applies to menu item elements.
     */
    static CSS_CLASS : string ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.TriStateMenuItemRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.TriStateMenuItemRenderer ;
  }
}
declare module 'goog:goog.ui.TriStateMenuItemRenderer' {
  import TriStateMenuItemRenderer = ಠ_ಠ.clutz.goog.ui.TriStateMenuItemRenderer;
  export default TriStateMenuItemRenderer;
}
