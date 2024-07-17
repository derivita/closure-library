/**
 * Class representing a table cell, which may span across multiple
 * rows and columns
 */
declare class TableCell {
    /**
     * Class representing a table cell, which may span across multiple
     * rows and columns
     * @param td This cell's underlying TD or TH element.
     * @param startRow Index of the row where this cell begins.
     * @param startCol Index of the column where this cell begins.
     */
    constructor(td: Element, startRow: number, startCol: number);
    private noStructuralTyping_closure_goog_editor_tablecell_TableCell;
    colSpan: any;
    rowSpan: any;
    /**
     * Set this cell's colSpan, updating both its colSpan property and the
     * underlying element's colSpan attribute.
     * @param colSpan The new colSpan.
     */
    setColSpan(colSpan: number): void;
    /**
     * Set this cell's rowSpan, updating both its rowSpan property and the
     * underlying element's rowSpan attribute.
     * @param rowSpan The new rowSpan.
     */
    setRowSpan(rowSpan: number): void;
}
export { TableCell };
