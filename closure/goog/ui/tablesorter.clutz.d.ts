//!! generated by clutz.
// Generated from ui/tablesorter.js
declare namespace ಠ_ಠ.clutz.goog.ui {
  /**
   * A table sorter allows for sorting of a table by column.  This component can
   * be used to decorate an already existing TABLE element with sorting
   * features.
   *
   * The TABLE should use a THEAD containing TH elements for the table column
   * headers.
   */
  class TableSorter extends ಠ_ಠ.clutz.goog.ui.Component {
    private noStructuralTyping_goog_ui_TableSorter : any;
    /**
     * A table sorter allows for sorting of a table by column.  This component can
     * be used to decorate an already existing TABLE element with sorting
     * features.
     *
     * The TABLE should use a THEAD containing TH elements for the table column
     * headers.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor (opt_domHelper ? : ಠ_ಠ.clutz.goog.dom.DomHelper | null ) ;
    canDecorate (element ? : any ) : any ;
    enterDocument ( ) : void ;
    getDefaultSortFunction ( ) : (a : any , b : any ) => number ;
    getSortColumn ( ) : number ;
    /**
     * Gets the sort function to be used by the given column.  Returns the default
     * sort function if no sort function is explicitly set for this column.
     * @param column The column index.
     */
    getSortFunction (column : number ) : (a : any , b : any ) => number ;
    isSortReversed ( ) : boolean ;
    /**
     * Sets the default sort function to be used by all columns.  If not set
     * explicitly, this defaults to numeric sorting.
     * @param sortFunction The new default sort function.
     */
    setDefaultSortFunction (sortFunction : (a : any , b : any ) => number ) : void ;
    /**
     * Set the sort function for the given column, overriding the default sort
     * function.
     * @param column The column index.
     * @param sortFunction The new sort function.
     */
    setSortFunction (column : number , sortFunction : (a : any , b : any ) => number ) : void ;
    /**
     * Sets the row index (in <thead>) to be used for sorting.
     * By default, the first row (index 0) is used.
     * Must be called before decorate() is called.
     * @param index The row index.
     */
    setSortableHeaderRowIndex (index : number ) : void ;
    /**
     * Sort the table contents by the values in the given column.
     * @param column The column to sort by.
     * @param opt_reverse Whether to sort in reverse.
     */
    sort (column : number , opt_reverse ? : boolean ) : boolean ;
    /**
     * Alphabetic sort function.
     * @param a First sort value.
     * @param b Second sort value.
     */
    static alphaSort (a : any , b : any ) : number ;
    /**
     * Returns a function that is the given sort function in reverse.
     * @param sortFunction The original sort function.
     */
    static createReverseSort (sortFunction : (a : any , b : any ) => number ) : (a : any , b : any ) => number ;
    /**
     * Disables sorting on the specified column
     * @param a First sort value.
     * @param b Second sort value.
     */
    static noSort (a : any , b : any ) : number ;
    /**
     * A numeric sort function.  NaN values (or values that do not parse as float
     * numbers) compare equal to each other and greater to any other number.
     * @param a First sort value.
     * @param b Second sort value.
     */
    static numericSort (a : any , b : any ) : number ;
  }
}
declare module 'goog:goog.ui.TableSorter' {
  import TableSorter = ಠ_ಠ.clutz.goog.ui.TableSorter;
  export default TableSorter;
}
// Generated from ui/tablesorter.js
declare namespace ಠ_ಠ.clutz.goog.ui.TableSorter {
  /**
   * Table sorter events.
   */
  /**
   * Table sorter events.
   */
  enum EventType {
    BEFORESORT = 'beforesort' ,
    SORT = 'sort' ,
  }
}
declare module 'goog:goog.ui.TableSorter.EventType' {
  import EventType = ಠ_ಠ.clutz.goog.ui.TableSorter.EventType;
  export default EventType;
}
