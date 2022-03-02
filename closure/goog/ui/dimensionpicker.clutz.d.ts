//!! generated by clutz.
// Generated from ui/dimensionpicker.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * A dimension picker allows the user to visually select a row and column
   * count using their mouse and keyboard.
   *
   * The currently selected dimension is controlled by an ACTION event.  Event
   * listeners may retrieve the selected item using the
   * {@link #getValue} method.
   */
  class DimensionPicker extends ಠ_ಠ.clutz.goog.ui.Control {
    private noStructuralTyping_goog_ui_DimensionPicker : any;
    /**
     * A dimension picker allows the user to visually select a row and column
     * count using their mouse and keyboard.
     *
     * The currently selected dimension is controlled by an ACTION event.  Event
     * listeners may retrieve the selected item using the
     * {@link #getValue} method.
     * @param opt_renderer Renderer used to render or decorate the palette; defaults to {@link goog.ui.DimensionPickerRenderer}.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor (opt_renderer ? : ಠ_ಠ.clutz.goog.ui.DimensionPickerRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    disposeInternal ( ) : void ;
    enterDocument ( ) : void ;
    exitDocument ( ) : void ;
    getSize ( ) : ಠ_ಠ.clutz.goog.math.Size | null ;
    getValue ( ) : ಠ_ಠ.clutz.goog.math.Size ;
    /**
     * Handle key events if supported, so the user can use the keyboard to
     * manipulate the highlighted rows and columns.
     * @param e The key event object.
     */
    handleKeyEvent (e : ಠ_ಠ.clutz.goog.events.KeyEvent | null ) : boolean ;
    /**
     * Override `handleMouseDown` for pointer events.
     */
    handleMouseDown (e ? : any ) : void ;
    /**
     * Handles mousemove events. Determines which palette size was moused over and
     * highlights it.
     * @param e Mouse event to handle.
     */
    protected handleMouseMove (e : ಠ_ಠ.clutz.goog.events.BrowserEvent | null ) : void ;
    /**
     * Override `handleMouseUp` for pointer events.
     */
    handleMouseUp (e ? : any ) : void ;
    /**
     * Handles window resize events.  Ensures no scrollbars are introduced by the
     * renderer's mouse catcher.
     * @param e Resize event to handle.
     */
    protected handleWindowResize (e : ಠ_ಠ.clutz.goog.events.Event | null ) : void ;
    /**
     * Maximum number of columns to show in the grid.
     */
    maxColumns : number ;
    /**
     * Maximum number of rows to show in the grid.
     */
    maxRows : number ;
    /**
     * Minimum number of columns to show in the grid.
     */
    minColumns : number ;
    /**
     * Minimum number of rows to show in the grid.
     */
    minRows : number ;
    /**
     * Sets the currently highlighted dimensions. If the dimensions are not valid
     * (not between 1 and the maximum number of columns/rows to show), they will
     * be changed to the closest valid value.
     * @param columns The number of columns to highlight, or a goog.math.Size object containing both.
     * @param opt_rows The number of rows to highlight.  Can be omitted when columns is a good.math.Size object.
     */
    setValue (columns : number | ಠ_ಠ.clutz.goog.math.Size , opt_rows ? : number ) : void ;
  }
}
declare module 'goog:goog.ui.DimensionPicker' {
  import DimensionPicker = ಠ_ಠ.clutz.goog.ui.DimensionPicker;
  export default DimensionPicker;
}
