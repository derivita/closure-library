//!! generated by clutz.
// Generated from ui/imagelessmenubuttonrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
   * contain almost arbitrary HTML content, will flow like inline elements, but
   * can be styled like block-level elements.
   */
  class ImagelessMenuButtonRenderer extends ಠ_ಠ.clutz.goog.ui.MenuButtonRenderer {
    private noStructuralTyping_goog_ui_ImagelessMenuButtonRenderer : any;
    /**
     * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
     * contain almost arbitrary HTML content, will flow like inline elements, but
     * can be styled like block-level elements.
     */
    constructor ( ) ;
    /**
     * Returns true if this renderer can decorate the element.  Overrides
     * {@link goog.ui.MenuButtonRenderer#canDecorate} by returning true if the
     * element is a DIV, false otherwise.
     * @param element Element to decorate.
     */
    canDecorate (element : GlobalElement | null ) : boolean ;
    /**
     * Takes a text caption or existing DOM structure, and returns the content
     * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-imageless-button">
     * <div class="goog-inline-block goog-imageless-button-outer-box">
     * <div class="goog-imageless-button-inner-box">
     * <div class="goog-imageless-button-pos-box">
     * <div class="goog-imageless-button-top-shadow">&nbsp;</div>
     * <div class="goog-imageless-button-content
     * goog-imageless-menubutton-caption">Contents...
     * </div>
     * <div class="goog-imageless-menubutton-dropdown"></div>
     * </div>
     * </div>
     * </div>
     * </div>
     *
     * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
     * by subclasses.
     * @param content Text caption or DOM structure to wrap in a box.
     * @param dom DOM helper, used for document interaction.
     */
    createButton (content : ಠ_ಠ.clutz.goog.ui.ControlContent | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    getContentElement (element ? : any ) : any ;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     */
    getCssClass ( ) : string ;
    /**
     * Check if the button's element has a box structure.
     * @param button Button instance whose structure is being checked.
     * @param element Element of the button.
     */
    protected hasBoxStructure (button : ಠ_ಠ.clutz.goog.ui.Button | null , element : GlobalElement | null ) : boolean ;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS : string ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.ImagelessMenuButtonRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.ImagelessMenuButtonRenderer ;
  }
}
declare module 'goog:goog.ui.ImagelessMenuButtonRenderer' {
  import ImagelessMenuButtonRenderer = ಠ_ಠ.clutz.goog.ui.ImagelessMenuButtonRenderer;
  export default ImagelessMenuButtonRenderer;
}
