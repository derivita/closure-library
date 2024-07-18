import { EventTarget } from '../events/eventtarget.js';
/**
 * Single-selection model.  Dispatches a {@link EventType.SELECT}
 * event when a selection is made.
 */
export declare class SelectionModel extends EventTarget {
    /**
     * Single-selection model.  Dispatches a {@link EventType.SELECT}
     * event when a selection is made.
     * @param opt_items Array of items; defaults to empty.
     */
    constructor(opt_items?: (object | null)[] | null);
    private noStructuralTyping_closure_goog_ui_selectionmodel_SelectionModel;
    /**
     * Returns the selection handler function used by the selection model to change
     * the internal selection state of items under its control.
     * @return Selection handler function (null if none).
     */
    getSelectionHandler(): Function | null;
    /**
     * Sets the selection handler function to be used by the selection model to
     * change the internal selection state of items under its control.  The
     * function must take two arguments:  an item and a Boolean to indicate whether
     * the item is to be selected or deselected.  Selection handler functions are
     * only needed if the items in the selection model don't natively support the
     * `setSelected(Boolean)` interface.
     * @param handler Selection handler function.
     */
    setSelectionHandler(handler: Function | null): void;
    /**
     * Returns the number of items controlled by the selection model.
     * @return Number of items.
     */
    getItemCount(): number;
    /**
     * Returns the 0-based index of the given item within the selection model, or
     * -1 if no such item is found.
     * @param item Item to look for.
     * @return Index of the given item (-1 if none).
     */
    indexOfItem(item: object | undefined | null): number;
    getFirst(): object | undefined | null;
    getLast(): object | undefined | null;
    /**
     * Returns the item at the given 0-based index.
     * @param index Index of the item to return.
     * @return Item at the given index (null if none).
     */
    getItemAt(index: number): object | null;
    /**
     * Bulk-adds items to the selection model.  This is more efficient than calling
     * {@link #addItem} for each new item.
     * @param items New items to add.
     */
    addItems(items: (object | null)[] | undefined | null): void;
    /**
     * Adds an item at the end of the list.
     * @param item Item to add.
     */
    addItem(item: object | null): void;
    /**
     * Adds an item at the given index.
     * @param item Item to add.
     * @param index Index at which to add the new item.
     */
    addItemAt(item: object | null, index: number): void;
    /**
     * Removes the given item (if it exists).  Dispatches a `SELECT` event if
     * the removed item was the currently selected item.
     * @param item Item to remove.
     */
    removeItem(item: object | null): void;
    /**
     * Removes the item at the given index.
     * @param index Index of the item to remove.
     */
    removeItemAt(index: number): void;
    getSelectedItem(): object | null;
    getItems(): (object | null)[];
    /**
     * Selects the given item, deselecting any previously selected item, and
     * dispatches a `SELECT` event.
     * @param item Item to select (null to clear the selection).
     */
    setSelectedItem(item: object | null): void;
    getSelectedIndex(): number;
    /**
     * Selects the item at the given index, deselecting any previously selected
     * item, and dispatches a `SELECT` event.
     * @param index Index to select (-1 to clear the selection).
     */
    setSelectedIndex(index: number): void;
    /**
     * Clears the selection model by removing all items from the selection.
     */
    clear(): void;
    disposeInternal(): void;
}
