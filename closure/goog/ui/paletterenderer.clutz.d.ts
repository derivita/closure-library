//!! generated by clutz.
// Generated from ui/paletterenderer.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
   * HTML table wrapped in a DIV, with one palette item per cell:
   *
   * <div class="goog-palette">
   * <table class="goog-palette-table">
   * <tbody class="goog-palette-body">
   * <tr class="goog-palette-row">
   * <td class="goog-palette-cell">...Item 0...</td>
   * <td class="goog-palette-cell">...Item 1...</td>
   * ...
   * </tr>
   * <tr class="goog-palette-row">
   * ...
   * </tr>
   * </tbody>
   * </table>
   * </div>
   */
  class PaletteRenderer extends ಠ_ಠ.clutz.goog.ui.ControlRenderer {
    private noStructuralTyping_goog_ui_PaletteRenderer : any;
    /**
     * Default renderer for {@link goog.ui.Palette}s.  Renders the palette as an
     * HTML table wrapped in a DIV, with one palette item per cell:
     *
     * <div class="goog-palette">
     * <table class="goog-palette-table">
     * <tbody class="goog-palette-body">
     * <tr class="goog-palette-row">
     * <td class="goog-palette-cell">...Item 0...</td>
     * <td class="goog-palette-cell">...Item 1...</td>
     * ...
     * </tr>
     * <tr class="goog-palette-row">
     * ...
     * </tr>
     * </tbody>
     * </table>
     * </div>
     */
    constructor ( ) ;
    /**
     * Overrides {@link goog.ui.ControlRenderer#canDecorate} to always return false.
     * @param element Ignored.
     */
    canDecorate (element : GlobalElement | null ) : boolean ;
    /**
     * Returns a table cell element (or equivalent) that wraps the given palette
     * item (which must be a DOM node).
     * @param node Palette item.
     * @param dom DOM helper for document interaction.
     */
    createCell (node : Node | null | string , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Returns the palette items arranged in a table wrapped in a DIV, with the
     * renderer's own CSS class and additional state-specific classes applied to
     * it.
     * @param palette goog.ui.Palette to render.
     */
    createDom (palette : ಠ_ಠ.clutz.goog.ui.Control | null ) : GlobalElement ;
    /**
     * Returns the given items in a table with `size.width` columns and
     * `size.height` rows.  If the table is too big, empty cells will be
     * created as needed.  If the table is too small, the items that don't fit
     * will not be rendered.
     * @param items Palette items.
     * @param size Palette size (columns x rows); both dimensions must be specified as numbers.
     * @param dom DOM helper for document interaction.
     */
    createGrid (items : ( Node | null ) [] | null , size : ಠ_ಠ.clutz.goog.math.Size | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Returns a table row element (or equivalent) that wraps the given cells.
     * @param cells Array of cell elements.
     * @param dom DOM helper for document interaction.
     */
    createRow (cells : ( GlobalElement | null ) [] | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Returns a table element (or equivalent) that wraps the given rows.
     * @param rows Array of row elements.
     * @param dom DOM helper for document interaction.
     */
    createTable (rows : ( GlobalElement | null ) [] | null , dom : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) : GlobalElement ;
    /**
     * Overrides {@link goog.ui.ControlRenderer#decorate} to be a no-op, since
     * palettes don't support the decorate flow (for now).
     * @param palette Ignored.
     * @param element Ignored.
     */
    decorate (palette : ಠ_ಠ.clutz.goog.ui.Control | null , element : GlobalElement | null ) : null ;
    getCellForItem (node : Node | null ) : GlobalElement | null ;
    /**
     * Returns the item corresponding to the given node, or null if the node is
     * neither a palette cell nor part of a palette item.
     * @param palette Palette in which to look for the item.
     * @param node Node to look for.
     */
    getContainingItem (palette : ಠ_ಠ.clutz.goog.ui.Palette | null , node : Node | null ) : Node | null ;
    /**
     * Returns the CSS class to be applied to the root element of components
     * rendered using this renderer.
     */
    getCssClass ( ) : string ;
    /**
     * Updates the highlight styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param palette Palette containing the item.
     * @param node Item whose cell is to be highlighted or un-highlighted.
     * @param highlight If true, the cell is highlighted; otherwise it is un-highlighted.
     */
    highlightCell (palette : ಠ_ಠ.clutz.goog.ui.Palette | null , node : Node | null , highlight : boolean ) : void ;
    /**
     * Updates the selection styling of the palette cell containing the given node
     * based on the value of the Boolean argument.
     * @param palette Palette containing the item.
     * @param node Item whose cell is to be selected or deselected.
     * @param select If true, the cell is selected; otherwise it is deselected.
     */
    selectCell (palette : ಠ_ಠ.clutz.goog.ui.Palette | null , node : Node | null , select : boolean ) : void ;
    /**
     * Overrides {@link goog.ui.ControlRenderer#setContent} for palettes.  Locates
     * the HTML table representing the palette grid, and replaces the contents of
     * each cell with a new element from the array of nodes passed as the second
     * argument.  If the new content has too many items the table will have more
     * rows added to fit, if there are less items than the table has cells, then the
     * left over cells will be empty.
     * @param element Root element of the palette control.
     * @param content Array of items to replace existing palette items.
     */
    setContent (element : GlobalElement | null , content : ಠ_ಠ.clutz.goog.ui.ControlContent | null ) : void ;
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     */
    static CSS_CLASS : string ;
    /**
     * Data attribute to store grid width from palette control.
     */
    static GRID_WIDTH_ATTRIBUTE : string ;
    static getInstance ( ) : ಠ_ಠ.clutz.goog.ui.PaletteRenderer ;
    static instance_ : ಠ_ಠ.clutz.goog.ui.PaletteRenderer ;
  }
}
declare module 'goog:goog.ui.PaletteRenderer' {
  import PaletteRenderer = ಠ_ಠ.clutz.goog.ui.PaletteRenderer;
  export default PaletteRenderer;
}
