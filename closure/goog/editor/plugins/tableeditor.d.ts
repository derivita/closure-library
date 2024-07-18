import { Plugin } from '../plugin.js';
import { Table } from '../table.js';
import type { AbstractRange } from '../../dom/abstractrange.js';
/**
 * Plugin that adds support for table creation and editing commands.
 */
export declare class TableEditor extends Plugin {
    /**
     * Plugin that adds support for table creation and editing commands.
     */
    constructor();
    private noStructuralTyping_closure_goog_editor_plugins_tableeditor_TableEditor;
    getTrogClassId(): string;
    /**
     * Whether the string corresponds to a command this plugin handles.
     * @param command Command string to check.
     * @return Whether the string corresponds to a command this plugin handles.
     */
    isSupportedCommand(command: string): boolean;
    enable(fieldObject: any): void;
    /**
     * Returns the current value of a given command. Currently this plugin
     * only returns a value for TableEditor.COMMAND.TABLE.
     */
    queryCommandValue(command: any): any;
    execCommandInternal(command: any, opt_arg: any): any;
    /**
     * Adds a function to filter out non-user-editable tables.
     * @param func A function to decide whether the table element could be editable by the user or not.
     */
    addIsTableEditableFunction(func: () => boolean): void;
}
export declare namespace TableEditor {
    /**
     * Commands supported by TableEditor.
     */
    enum COMMAND {
        TABLE = "+table",
        INSERT_ROW_AFTER = "+insertRowAfter",
        INSERT_ROW_BEFORE = "+insertRowBefore",
        INSERT_COLUMN_AFTER = "+insertColumnAfter",
        INSERT_COLUMN_BEFORE = "+insertColumnBefore",
        REMOVE_ROWS = "+removeRows",
        REMOVE_COLUMNS = "+removeColumns",
        SPLIT_CELL = "+splitCell",
        MERGE_CELLS = "+mergeCells",
        REMOVE_TABLE = "+removeTable"
    }
    /**
     * Class representing the selected cell objects within a single  table.
     */
    class CellSelection_ {
        /**
         * Class representing the selected cell objects within a single  table.
         * @param range Selected range from which to calculate selected cells.
         * @param getParentTableFunction A function that finds the user-editable table from a given element.
         */
        constructor(range: AbstractRange | null, getParentTableFunction: () => (Element | null));
        private noStructuralTyping_closure_goog_editor_plugins_tableeditor_CellSelection_;
        /**
         * Returns the EditableTable object of which this selection's cells are a
         * subset.
         * @return the table.
         */
        getTable(): Table;
        /**
         * Returns the row index of the uppermost cell in this selection.
         * @return The row index.
         */
        getFirstRowIndex(): number;
        /**
         * Returns the row index of the lowermost cell in this selection.
         * @return The row index.
         */
        getLastRowIndex(): number;
        /**
         * Returns the column index of the farthest left cell in this selection.
         * @return The column index.
         */
        getFirstColumnIndex(): number;
        /**
         * Returns the column index of the farthest right cell in this selection.
         * @return The column index.
         */
        getLastColumnIndex(): number;
        /**
         * Returns the cells in this selection.
         * @return Cells in this selection.
         */
        getCells(): (Element | null)[];
        /**
         * Returns a boolean value indicating whether or not the cells in this
         * selection form a rectangle.
         * @return Whether the selection forms a rectangle.
         */
        isRectangle(): boolean;
        /**
         * Returns a boolean value indicating whether or not there is exactly
         * one cell in this selection. Note that this may not be the same as checking
         * whether getCells().length == 1; if there is a single cell with
         * rowSpan/colSpan set it will appear multiple times.
         * @return Whether there is exatly one cell in this selection.
         */
        containsSingleCell(): boolean;
    }
}
