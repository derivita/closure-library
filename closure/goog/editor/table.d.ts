import { TableRow } from './tablerow.js';
/**
 * Class providing high level table editing functions.
 */
export declare class Table {
    /**
     * Class providing high level table editing functions.
     * @param node Element that is a table or descendant of a table.
     */
    constructor(node: Element | null);
    private noStructuralTyping_closure_goog_editor_table_Table;
    rows: TableRow[];
    /**
     * Walks the dom structure of this object's table element and populates
     * this.rows with TableRow objects. This is done initially
     * to populate the internal data structures, and also after each time the
     * DOM structure is modified. Currently this means that the all existing
     * information is discarded and re-read from the DOM.
     */
    refresh(): void;
    /**
     * Returns all child elements of a TR element that are of type TD or TH.
     * @param tr TR element in which to find children.
     * @return array of child cell elements.
     */
    static getChildCellElements(tr: Element | null): (Element | null)[];
    /**
     * Inserts a new row in the table. The row will be populated with new
     * cells, and existing rowspanned cells that overlap the new row will
     * be extended.
     * @param opt_rowIndex Index at which to insert the row. If this is omitted the row will be appended to the end of the table.
     * @return The new row.
     */
    insertRow(opt_rowIndex?: number): Element;
    /**
     * Inserts a new column in the table. The column will be created by
     * inserting new TD elements in each row, or extending the colspan
     * of existing TD elements.
     * @param opt_colIndex Index at which to insert the column. If this is omitted the column will be appended to the right side of the table.
     * @return Array of new cell elements that were created to populate the new column.
     */
    insertColumn(opt_colIndex?: number): (Element | null)[];
    /**
     * Removes a row from the table, removing the TR element and
     * decrementing the rowspan of any cells in other rows that overlap the row.
     * @param rowIndex Index of the row to delete.
     */
    removeRow(rowIndex: number): void;
    /**
     * Removes a column from the table. This is done by removing cell elements,
     * or shrinking the colspan of elements that span multiple columns.
     * @param colIndex Index of the column to delete.
     */
    removeColumn(colIndex: number): void;
    /**
     * Merges multiple cells into a single cell, and sets the rowSpan and colSpan
     * attributes of the cell to take up the same space as the original cells.
     * @param startRowIndex Top coordinate of the cells to merge.
     * @param startColIndex Left coordinate of the cells to merge.
     * @param endRowIndex Bottom coordinate of the cells to merge.
     * @param endColIndex Right coordinate of the cells to merge.
     * @return Whether or not the merge was possible. If the cells in the supplied coordinates can't be merged this will return false.
     */
    mergeCells(startRowIndex: number, startColIndex: number, endRowIndex: number, endColIndex: number): boolean;
    /**
     * Splits a cell with colspans or rowspans into multiple descrete cells.
     * @param rowIndex y coordinate of the cell to split.
     * @param colIndex x coordinate of the cell to split.
     * @return Array of new cell elements created by splitting the cell.
     */
    splitCell(rowIndex: number, colIndex: number): (Element | null)[];
    /**
     * Inserts a cell element at the given position. The colIndex is the logical
     * column index, not the position in the dom. This takes into consideration
     * that cells in a given logical  row may actually be children of a previous
     * DOM row that have used rowSpan to extend into the row.
     * @param td The new cell element to insert.
     * @param rowIndex Row in which to insert the element.
     * @param colIndex Column in which to insert the element.
     */
    insertCellElement(td: Element | null, rowIndex: number, colIndex: number): void;
    /**
     * Creates an empty TD element and fill it with some empty content so it will
     * show up with borders even in IE pre-7 or if empty-cells is set to 'hide'
     * @return a new TD element.
     */
    createEmptyTd(): Element;
    /**
     * Optimum size of empty cells (in pixels), if possible.
     */
    static OPTIMUM_EMPTY_CELL_WIDTH: number;
    /**
     * Maximum width for new tables.
     */
    static OPTIMUM_MAX_NEW_TABLE_WIDTH: number;
    /**
     * Default color for table borders.
     */
    static DEFAULT_BORDER_COLOR: string;
    /**
     * Creates a new table element, populated with cells and formatted.
     * @param doc Document in which to create the table element.
     * @param columns Number of columns in the table.
     * @param rows Number of rows in the table.
     * @param opt_tableStyle Object containing borderWidth and borderColor properties, used to set the initial style of the table.
     * @return a table element.
     */
    static createDomTable(doc: Document | null, columns: number, rows: number, opt_tableStyle?: object | null): Element;
}
