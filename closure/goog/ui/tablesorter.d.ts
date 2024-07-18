import * as dom from '../dom/dom.js';
import { Component } from './component.js';
/**
 * A table sorter allows for sorting of a table by column.  This component can
 * be used to decorate an already existing TABLE element with sorting
 * features.
 *
 * The TABLE should use a THEAD containing TH elements for the table column
 * headers.
 */
export declare class TableSorter extends Component {
    /**
     * A table sorter allows for sorting of a table by column.  This component can
     * be used to decorate an already existing TABLE element with sorting
     * features.
     *
     * The TABLE should use a THEAD containing TH elements for the table column
     * headers.
     * @param opt_domHelper Optional DOM helper, used for document interaction.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_tablesorter_TableSorter;
    /**
     * Sets the row index (in <thead>) to be used for sorting.
     * By default, the first row (index 0) is used.
     * Must be called before decorate() is called.
     * @param index The row index.
     */
    setSortableHeaderRowIndex(index: number): void;
    canDecorate(element: any): boolean;
    enterDocument(): void;
    getSortColumn(): number;
    isSortReversed(): boolean;
    getDefaultSortFunction(): () => number;
    /**
     * Sets the default sort function to be used by all columns.  If not set
     * explicitly, this defaults to numeric sorting.
     * @param sortFunction The new default sort function.
     */
    setDefaultSortFunction(sortFunction: () => number): void;
    /**
     * Gets the sort function to be used by the given column.  Returns the default
     * sort function if no sort function is explicitly set for this column.
     * @param column The column index.
     * @return The sort function used by the column.
     */
    getSortFunction(column: number): () => number;
    /**
     * Set the sort function for the given column, overriding the default sort
     * function.
     * @param column The column index.
     * @param sortFunction The new sort function.
     */
    setSortFunction(column: number, sortFunction: () => number): void;
    /**
     * Sort the table contents by the values in the given column.
     * @param column The column to sort by.
     * @param opt_reverse Whether to sort in reverse.
     * @return Whether the sort was executed.
     */
    sort(column: number, opt_reverse?: boolean): boolean;
    /**
     * Disables sorting on the specified column
     * @param a First sort value.
     * @param b Second sort value.
     * @return Negative if a < b, 0 if a = b, and positive if a > b.
     */
    static noSort(a: any, b: any): number;
    /**
     * A numeric sort function.  NaN values (or values that do not parse as float
     * numbers) compare equal to each other and greater to any other number.
     * @param a First sort value.
     * @param b Second sort value.
     * @return Negative if a < b, 0 if a = b, and positive if a > b.
     */
    static numericSort(a: any, b: any): number;
    /**
     * Alphabetic sort function.
     * @param a First sort value.
     * @param b Second sort value.
     * @return Negative if a < b, 0 if a = b, and positive if a > b.
     */
    static alphaSort(a: any, b: any): number;
    /**
     * Returns a function that is the given sort function in reverse.
     * @param sortFunction The original sort function.
     * @return A new sort function that reverses the given sort function.
     */
    static createReverseSort(sortFunction: () => number): () => number;
}
export declare namespace TableSorter {
    /**
     * Table sorter events.
     */
    enum EventType {
        BEFORESORT = "beforesort",
        SORT = "sort"
    }
}
