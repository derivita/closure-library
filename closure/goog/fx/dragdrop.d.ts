import { AbstractDragDrop } from './abstractdragdrop.js';
/**
 * Drag/drop implementation for creating drag sources/drop targets consisting of
 * a single HTML Element.
 */
export declare class DragDrop<DRAG_DROP_DATA = any> extends AbstractDragDrop {
    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * a single HTML Element.
     * @param element Dom Node, or string representation of node id, to be used as drag source/drop target.
     * @param opt_data Data associated with the source/target.
     */
    constructor(element: Element | string | null, opt_data?: DRAG_DROP_DATA | null);
    private noStructuralTyping_closure_goog_fx_dragdrop_DragDrop;
}
