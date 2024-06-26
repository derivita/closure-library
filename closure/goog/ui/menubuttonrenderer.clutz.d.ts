//!! generated by clutz.
// Generated from ui/menubuttonrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
   * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
   * caption and dropdown element.
   */
  class MenuButtonRenderer extends ಠ_ಠ.clutz.goog.ui.CustomButtonRenderer {
    private noStructuralTyping_goog_ui_MenuButtonRenderer : any;
    /**
     * Renderer for {@link goog.ui.MenuButton}s.  This implementation overrides
     * {@link goog.ui.CustomButtonRenderer#createButton} to create a separate
     * caption and dropdown element.
     */
    constructor ( ) ;
    /**
     * Takes a text caption or existing DOM structure, and returns the content and
     * a dropdown arrow element wrapped in a pseudo-rounded-corner box.  Creates
     * the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-outer-box">
     * <div class="goog-inline-block goog-menu-button-inner-box">
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * <div class="goog-inline-block goog-menu-button-dropdown">
     * &nbsp;
     * </div>
     * </div>
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     */
    createButton (content : ಠ_ಠ.clutz.goog.ui.ControlContent | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     */
    createCaption (content : ಠ_ಠ.clutz.goog.ui.ControlContent | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Returns an appropriately-styled DIV containing a dropdown arrow element.
     * Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-dropdown">
     * &nbsp;
     * </div>
     * @param dom DOM helper, used for document interaction.
     */
    createDropdown (dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Takes an element, decorates it with the menu button control, and returns
     * the element.  Overrides {@link goog.ui.CustomButtonRenderer#decorate} by
     * looking for a child element that can be decorated by a menu, and if it
     * finds one, decorates it and attaches it to the menu button.
     * @param control goog.ui.MenuButton to decorate the element.
     * @param element Element to decorate.
     */
    decorate (control : ಠ_ಠ.clutz.goog.ui.Control | null , element : GlobalElement | null ) : GlobalElement | null ;
    /**
     * Takes the button's root element and returns the parent element of the
     * button's contents.  Overrides the superclass implementation by taking
     * the nested DIV structure of menu buttons into account.
     * @param element Root element of the button whose content element is to be returned.
     */
    getContentElement (element : GlobalElement | null ) : GlobalElement | null ;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     */
    getCssClass ( ) : string ;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS : string ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.MenuButtonRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.MenuButtonRenderer ;
    /**
     * Takes a text caption or existing DOM structure, and returns it wrapped in
     * an appropriately-styled DIV.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-menu-button-caption">
     * Contents...
     * </div>
     * @param content Text caption or DOM structure to wrap in a box.
     * @param cssClass The CSS class for the renderer.
     * @param dom DOM helper, used for document interaction.
     */
    static wrapCaption (content : ಠ_ಠ.clutz.goog.ui.ControlContent | null , cssClass : string , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
  }
}
declare module 'goog:goog.ui.MenuButtonRenderer' {
  import MenuButtonRenderer = ಠ_ಠ.clutz.goog.ui.MenuButtonRenderer;
  export default MenuButtonRenderer;
}
