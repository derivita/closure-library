//!! generated by clutz.
// Generated from ui/separator.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Class representing a separator.  Although it extends {@link goog.ui.Control},
   * the Separator class doesn't allocate any event handlers, nor does it change
   * its appearance on mouseover, etc.
   */
  class Separator extends ಠ_ಠ.clutz.goog.ui.Control {
    private noStructuralTyping_goog_ui_Separator : any;
    /**
     * Class representing a separator.  Although it extends {@link goog.ui.Control},
     * the Separator class doesn't allocate any event handlers, nor does it change
     * its appearance on mouseover, etc.
     * @param opt_renderer Renderer to render or decorate the separator; defaults to {@link goog.ui.MenuSeparatorRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor (opt_renderer ? : ಠ_ಠ.clutz.goog.ui.MenuSeparatorRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Configures the component after its DOM has been rendered.  Overrides
     * {@link goog.ui.Control#enterDocument} by making sure no event handler
     * is allocated.
     */
    enterDocument ( ) : void ;
  }
}
declare module 'goog:goog.ui.Separator' {
  import Separator = ಠ_ಠ.clutz.goog.ui.Separator;
  export default Separator;
}
