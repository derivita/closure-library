import { Event } from '../events/event.js';
import { EventId } from '../events/eventid.js';
import { EventTarget } from '../events/eventtarget.js';
import { Dragger } from './dragger.js';
import { Coordinate } from '../math/coordinate.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { DragEvent } from './dragger.js';
/**
 * A class representing a group of one or more "drag lists" with items that can
 * be dragged within them and between them.
 *
 * Example usage:
 * var dragListGroup = new DragListGroup();
 * dragListGroup.setDragItemHandleHoverClass(className1, className2);
 * dragListGroup.setDraggerElClass(className3);
 * dragListGroup.addDragList(vertList, DragListDirection.DOWN);
 * dragListGroup.addDragList(horizList, DragListDirection.RIGHT);
 * dragListGroup.init();
 */
export declare class DragListGroup extends EventTarget {
    /**
     * A class representing a group of one or more "drag lists" with items that can
     * be dragged within them and between them.
     *
     * Example usage:
     * var dragListGroup = new DragListGroup();
     * dragListGroup.setDragItemHandleHoverClass(className1, className2);
     * dragListGroup.setDraggerElClass(className3);
     * dragListGroup.addDragList(vertList, DragListDirection.DOWN);
     * dragListGroup.addDragList(horizList, DragListDirection.RIGHT);
     * dragListGroup.init();
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_draglistgroup_DragListGroup;
    static CORRECT_POSITION_DRAG_START: boolean;
    /**
     * Sets the property of the currDragItem that it is always displayed in the
     * list.
     */
    setIsCurrDragItemAlwaysDisplayed(): void;
    /**
     * Sets the private property updateWhileDragging_ to false. This disables the
     * update of the position of the currDragItem while dragging. It will only be
     * placed to its new location once the drag ends.
     */
    setNoUpdateWhileDragging(): void;
    /**
     * Sets the correctDraggedElementInitialPos_ private property. This override the
     * DRAGLISTGROUP_CORRECT_POSITION_DRAG_START compile flag, to allow for a per
     * component control within a project.
     * @param updateInitialPosition Whether to allow/forbid the correction of the currDragEl initial position.
     */
    overrideCorrectDraggedElementInitialPos(updateInitialPosition: boolean): void;
    /**
     * Sets the distance the user has to drag the element before a drag operation
     * is started.
     * @param distance The number of pixels after which a mousedown and move is considered a drag.
     */
    setHysteresis(distance: number): void;
    getHysteresis(): number;
    isDragging(): boolean;
    /**
     * Adds a drag list to this DragListGroup.
     * All calls to this method must happen before the call to init().
     * Remember that all child nodes (except text nodes) will be made draggable to
     * any other drag list in this group.
     * @param dragListElement Must be a container for a list of items that should all be made draggable.
     * @param growthDirection The direction that this drag list grows in (i.e. if an item is appended to the DOM, the list's bounding box expands in this direction).
     * @param opt_unused Unused argument.
     * @param opt_dragHoverClass CSS class to apply to this drag list when the draggerEl hovers over it during a drag action.  If present, must be a single, valid classname (not a string of space-separated classnames).
     * @param opt_dragListPermission Defaults to DRAG_OUT_AND_DROP but can be passed in to modify to prevent users from dragging an item out of a list or dropping an item into a list.
     */
    addDragList(dragListElement: Element | null, growthDirection: DragListDirection | null, opt_unused?: boolean, opt_dragHoverClass?: string, opt_dragListPermission?: DragListPermission): void;
    /**
     * Sets a user-supplied function used to get the "handle" element for a drag
     * item. The function must accept exactly one argument. The argument may be
     * any drag item element.
     *
     * If not set, the default implementation uses the whole drag item as the
     * handle.
     * @param getHandleForDragItemFn A function that, given any drag item, returns a reference to its "handle" element (which may be the drag item element itself).
     */
    setFunctionToGetHandleForDragItem(getHandleForDragItemFn: () => (Element | null)): void;
    /**
     * Sets a user-supplied CSS class to add to a drag item on hover (not during a
     * drag action).
     * @param var_args The CSS class or classes.
     */
    setDragItemHoverClass(...var_args: string[]): void;
    /**
     * Sets a user-supplied CSS class to add to a drag item handle on hover (not
     * during a drag action).
     * @param var_args The CSS class or classes.
     */
    setDragItemHandleHoverClass(...var_args: string[]): void;
    /**
     * Sets a user-supplied CSS class to add to the current drag item (during a
     * drag action).
     *
     * If not set, the default behavior adds visibility:hidden to the current drag
     * item so that it is a block of empty space in the hover drag list (if any).
     * If this class is set by the user, then the default behavior does not happen
     * (unless, of course, the class also contains visibility:hidden).
     * @param var_args The CSS class or classes.
     */
    setCurrDragItemClass(...var_args: string[]): void;
    /**
     * Sets a user-supplied CSS class to add to the clone of the current drag item
     * that's actually being dragged around (during a drag action).
     * @param draggerElClass The CSS class.
     */
    setDraggerElClass(draggerElClass: string): void;
    /**
     * Performs the initial setup to make all items in all lists draggable.
     */
    init(): void;
    /**
     * Adds a single item to the given drag list and sets up the drag listeners for
     * it.
     * If opt_index is specified the item is inserted at this index, otherwise the
     * item is added as the last child of the list.
     * @param list The drag list where to add item to.
     * @param item The new element to add.
     * @param opt_index Index where to insert the item in the list. If not specified item is inserted as the last child of list.
     */
    addItemToDragList(list: Element, item: Element, opt_index?: number): void;
    disposeInternal(): void;
    /**
     * Caches the heights of each drag list and drag item, except for the current
     * drag item.
     */
    recacheListAndItemBounds(): void;
    /**
     * Listens for drag events on the given drag item. This method is currently used
     * to initialize drag items.
     * @param dragItem the element to initialize. This element has to be in one of the drag lists.
     */
    protected listenForDragEvents(dragItem: Element): void;
    /**
     * Generates an element to follow the cursor during dragging, given a drag
     * source element.  The default behavior is simply to clone the source element,
     * but this may be overridden in subclasses.  This method is called by
     * `createDragElement()` before the drag class is added.
     * @param sourceEl Drag source element.
     * @return The new drag element.
     */
    protected createDragElementInternal(sourceEl: Element | null): Element;
    /**
     * Updates the value of currHoverItem_.
     *
     * This method is used for insertion only when updateWhileDragging_ is false.
     * The below implementation is the basic one. This method can be extended by
     * a subclass to support changes to hovered item (eg: highlighting). Parametr
     * opt_draggerElCenter can be used for more sophisticated effects.
     * @param hoverNextItem element of the list that is hovered over.
     * @param opt_draggerElCenter current position of the dragged element.
     */
    protected updateCurrHoverItem(hoverNextItem: Element | null, opt_draggerElCenter?: Coordinate | null): void;
    /**
     * Inserts the currently dragged item in its new place.
     *
     * This method is used for insertion only when updateWhileDragging_ is false
     * (otherwise there is no need for that). In the basic implementation
     * the element is inserted before the currently hovered over item (this can
     * be changed by overriding the method in subclasses).
     */
    protected insertCurrHoverItem(): void;
}
export declare namespace DragListGroup {
    /**
     * Events dispatched by this class.
     */
    type EventType = EventId<DragListGroupEvent>;
    const EventType: {
        DRAGGERCREATED: EventId<any>;
        BEFOREDRAGSTART: EventId<any>;
        DRAGSTART: EventId<any>;
        BEFOREDRAGMOVE: EventId<any>;
        DRAGMOVE: EventId<any>;
        BEFOREDRAGEND: EventId<any>;
        DRAGEND: EventId<any>;
        DRAGGERREMOVED: EventId<any>;
    };
}
/**
 * Enum to indicate the direction that a drag list grows.
 */
export declare enum DragListDirection {
    DOWN = 0,
    RIGHT = 2,
    LEFT = 3,
    RIGHT_2D = 4,
    LEFT_2D = 5
}
/**
 * Enum to indicate the drag and drop permissions for a drag list. Default is
 * DRAG_OUT_AND_DROP.
 */
export declare enum DragListPermission {
    DRAG_OUT_AND_DROP = 0,
    ONLY_DRAG_OUT = 1,
    ONLY_DROP = 2
}
/**
 * The event object dispatched by DragListGroup.
 * The fields draggerElCenter, hoverList, and hoverNextItem are only available
 * for the BEFOREDRAGMOVE and DRAGMOVE events.
 */
export declare class DragListGroupEvent extends Event {
    /**
     * The event object dispatched by DragListGroup.
     * The fields draggerElCenter, hoverList, and hoverNextItem are only available
     * for the BEFOREDRAGMOVE and DRAGMOVE events.
     * @param dragListGroup A reference to the associated DragListGroup object.
     * @param event The event fired by the browser or fired by the dragger.
     * @param currDragItem The current drag item being moved.
     * @param draggerEl The clone of the current drag item that's actually being dragged around.
     * @param dragger The dragger object.
     * @param opt_draggerElCenter The current center position of the draggerEl.
     * @param opt_hoverList The current drag list that's being hovered over, or null if the center of draggerEl is outside of any drag lists. If not null and the drag action ends right now, then currDragItem will end up in this list.
     * @param opt_hoverNextItem The current next item in the hoverList that the draggerEl is hovering over. (I.e. If the drag action ends right now, then this item would become the next item after the new location of currDragItem.) May be null if not applicable or if currDragItem would be added to the end of hoverList.
     */
    constructor(type: DragListGroup.EventType, dragListGroup: DragListGroup | null, event: BrowserEvent | DragEvent | null, currDragItem: Element | null, draggerEl: Element | null, dragger: Dragger | null, opt_draggerElCenter?: Coordinate | null, opt_hoverList?: Element | null, opt_hoverNextItem?: Element | null);
    private noStructuralTyping_closure_goog_fx_draglistgroup_DragListGroupEvent;
    /**
     * A reference to the associated DragListGroup object.
     */
    dragListGroup: DragListGroup | null;
    /**
     * The event fired by the browser or fired by the dragger.
     */
    event: BrowserEvent | DragEvent | null;
    /**
     * The current drag item being move.
     */
    currDragItem: Element | null;
    /**
     * The clone of the current drag item that's actually being dragged around.
     */
    draggerEl: Element | null;
    /**
     * The dragger object.
     */
    dragger: Dragger | null;
    /**
     * The current center position of the draggerEl.
     */
    draggerElCenter: Coordinate | undefined | null;
    /**
     * The current drag list that's being hovered over, or null if the center of
     * draggerEl is outside of any drag lists. (I.e. If not null and the drag
     * action ends right now, then currDragItem will end up in this list.)
     */
    hoverList: Element | undefined | null;
    /**
     * The current next item in the hoverList that the draggerEl is hovering over.
     * (I.e. If the drag action ends right now, then this item would become the
     * next item after the new location of currDragItem.) May be null if not
     * applicable or if currDragItem would be added to the end of hoverList.
     */
    hoverNextItem: Element | undefined | null;
}
