//!! generated by clutz.
// Generated from ui/style/app/buttonrenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui.style.app {
  /**
   * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
   * almost arbitrary HTML content, will flow like inline elements, but can be
   * styled like block-level elements.
   */
  class ButtonRenderer extends ಠ_ಠ.clutz.goog.ui.CustomButtonRenderer {
    private noStructuralTyping_goog_ui_style_app_ButtonRenderer : any;
    /**
     * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     */
    constructor ( ) ;
    /**
     * Takes a text caption or existing DOM structure, and returns the content
     * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
     *
     * <div class="goog-inline-block goog-button-base-outer-box">
     * <div class="goog-inline-block goog-button-base-inner-box">
     * <div class="goog-button-base-pos">
     * <div class="goog-button-base-top-shadow">&nbsp;</div>
     * <div class="goog-button-base-content">Contents...</div>
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
    /**
     * Returns the button's contents wrapped in the following DOM structure:
     *
     * <div class="goog-inline-block goog-button-base goog-button">
     * <div class="goog-inline-block goog-button-base-outer-box">
     * <div class="goog-button-base-inner-box">
     * <div class="goog-button-base-pos">
     * <div class="goog-button-base-top-shadow">&nbsp;</div>
     * <div class="goog-button-base-content">Contents...</div>
     * </div>
     * </div>
     * </div>
     * </div>
     */
    createDom : any ;
    getContentElement (element ? : any ) : any ;
    getCssClass ( ) : any ;
    getIe6ClassCombinations ( ) : any ;
    getStructuralCssClass ( ) : any ;
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
    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     */
    static IE6_CLASS_COMBINATIONS : ( string [] | null ) [] ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.style.app.ButtonRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.style.app.ButtonRenderer ;
  }
}
declare module 'goog:goog.ui.style.app.ButtonRenderer' {
  import ButtonRenderer = ಠ_ಠ.clutz.goog.ui.style.app.ButtonRenderer;
  export default ButtonRenderer;
}
