//!! generated by clutz.
// Generated from ui/filteredmenu.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * Filtered menu class.
   */
  class FilteredMenu extends ಠ_ಠ.clutz.goog.ui.Menu {
    private noStructuralTyping_goog_ui_FilteredMenu : any;
    /**
     * Filtered menu class.
     * @param opt_renderer Renderer used to render filtered menu; defaults to {@link goog.ui.MenuRenderer}.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor (opt_renderer ? : ಠ_ಠ.clutz.goog.ui.MenuRenderer | null , opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    /**
     * Updates the content of the given menu item, bolding the part of its caption
     * from start and through the next len characters.
     * @param child The control to bold content on.
     * @param start The index at which to start bolding.
     * @param len How many characters to bold.
     */
    protected boldContent (child : ಠ_ಠ.clutz.goog.ui.Control , start : number , len : number ) : void ;
    createDom ( ) : void ;
    decorateInternal (element ? : any ) : void ;
    disposeInternal ( ) : void ;
    getAllowMultiple ( ) : boolean ;
    getContentElement ( ) : any ;
    /**
     * Gets a list of items entered in the search box.
     */
    getEnteredItems ( ) : string [] ;
    /**
     * Returns the filter string.
     */
    getFilter ( ) : string ;
    /**
     * Returns the index of first item that is affected by the filter.
     */
    getFilterFromIndex ( ) : number ;
    /**
     * Returns the filter input element.
     */
    getFilterInputElement ( ) : GlobalElement | null ;
    getFilterLabel ( ) : string ;
    /**
     * Handles filter input events.
     * @param e The event object.
     */
    handleFilterEvent (e : ಠ_ಠ.clutz.goog.events.BrowserEvent | null ) : void ;
    /**
     * Handles the menu's behavior for a key event. The highlighted menu item will
     * be given the opportunity to handle the key behavior.
     * @param e A browser event.
     */
    handleKeyEventInternal (e : ಠ_ಠ.clutz.goog.events.KeyEvent | null ) : boolean ;
    /**
     * Returns whether the specified child should be affected (shown/hidden) by the
     * filter criteria.
     * @param child Menu item to check.
     */
    hasPersistentVisibility (child : ಠ_ಠ.clutz.goog.ui.Component | null ) : boolean ;
    /**
     * Sets whether multiple items can be entered comma separated.
     * @param b Whether multiple items can be entered.
     */
    setAllowMultiple (b : boolean ) : void ;
    /**
     * Sets the filter string.
     * @param str Filter string.
     */
    setFilter (str : string | null ) : void ;
    /**
     * Sets the index of first item that should be affected by the filter. Menu
     * items with a lower index will not be affected by the filter.
     * @param index Index of first item that should be affected by filter.
     */
    setFilterFromIndex (index : number ) : void ;
    /**
     * Sets the filter label (the label displayed in the filter input element if no
     * text has been entered).
     * @param label Label text.
     */
    setFilterLabel (label : string | null ) : void ;
    /**
     * Sets the highlighted index, unless the HIGHLIGHT event is intercepted and
     * cancelled.  -1 = no highlight. Also scrolls the menu item into view.
     * @param index Index of menu item to highlight.
     */
    setHighlightedIndex (index : number ) : void ;
    /**
     * Sets whether the specified child should be affected (shown/hidden) by the
     * filter criteria.
     * @param child Child to change.
     * @param persistent Whether the child should be persistent.
     */
    setPersistentVisibility (child : ಠ_ಠ.clutz.goog.ui.Component | null , persistent : boolean ) : void ;
    setVisible (show ? : any , opt_force ? : any , opt_e ? : any ) : any ;
  }
}
// Generated from ui/filteredmenu.js
declare namespace ಠ_ಠ.clutz.goog.ui.FilteredMenu {
  /**
   * Events fired by component.
   */
  enum EventType {
    FILTER_CHANGED = 'filterchange' ,
  }
}
declare module 'goog:goog.ui.FilteredMenu' {
  import FilteredMenu = ಠ_ಠ.clutz.goog.ui.FilteredMenu;
  export default FilteredMenu;
}
