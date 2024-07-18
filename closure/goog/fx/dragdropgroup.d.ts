import { AbstractDragDrop, DragDropItem } from './abstractdragdrop.js';
/**
 * Drag/drop implementation for creating drag sources/drop targets consisting of
 * multiple HTML Elements (items). All items share the same drop target(s) but
 * can be dragged individually.
 */
export declare class DragDropGroup extends AbstractDragDrop {
    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * multiple HTML Elements (items). All items share the same drop target(s) but
     * can be dragged individually.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_dragdropgroup_DragDropGroup;
    /**
     * Add item to drag object.
     * @param element Dom Node, or string representation of node id, to be used as drag source/drop target.
     * @param opt_data Data associated with the source/target.
     */
    addItem<DRAG_DROP_DATA = any>(element: Element | string | null, opt_data?: DRAG_DROP_DATA | null): void;
    /**
     * Add DragDropItem to drag object.
     * @param item DragDropItem being added to the drag object.
     */
    addDragDropItem(item: DragDropItem | null): void;
    /**
     * Remove item from drag object.
     * @param element Dom Node, or string representation of node id, that was previously added with addItem().
     */
    removeItem(element: Element | string | null): void;
    /**
     * Marks the supplied list of items as selected. A drag operation for any of the
     * selected items will affect all of them.
     * @param list List of items to select or null to clear selection. TODO(eae): Not yet implemented.
     */
    setSelection(list: (DragDropItem | null)[] | null): void;
}
