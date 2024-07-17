import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import { Dragger } from './dragger.js';
import { Box } from '../math/box.js';
import { Coordinate } from '../math/coordinate.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { DragEvent } from './dragger.js';
/**
 * Abstract class that provides reusable functionality for implementing drag
 * and drop functionality.
 *
 * This class also allows clients to define their own subtargeting function
 * so that drop areas can have finer granularity than a single element. This is
 * accomplished by using a client provided function to map from element and
 * coordinates to a subregion id.
 *
 * This class can also be made aware of scrollable containers that contain
 * drop targets by calling addScrollableContainer. This will cause dnd to
 * take changing scroll positions into account while a drag is occurring.
 */
export declare class AbstractDragDrop extends EventTarget {
    /**
     * Abstract class that provides reusable functionality for implementing drag
     * and drop functionality.
     *
     * This class also allows clients to define their own subtargeting function
     * so that drop areas can have finer granularity than a single element. This is
     * accomplished by using a client provided function to map from element and
     * coordinates to a subregion id.
     *
     * This class can also be made aware of scrollable containers that contain
     * drop targets by calling addScrollableContainer. This will cause dnd to
     * take changing scroll positions into account while a drag is occurring.
     */
    constructor();
    private noStructuralTyping_closure_goog_fx_abstractdragdrop_AbstractDragDrop;
    /**
     * List of items that makes up the drag source or drop target.
     */
    protected items_: (DragDropItem | null)[] | null;
    /**
     * Constants for event names
     */
    static EventType: {
        DRAGOVER: string;
        DRAGOUT: string;
        DRAG: string;
        DROP: string;
        DRAGSTART: string;
        DRAGEND: string;
    };
    /**
     * Constant for distance threshold, in pixels, an element has to be moved to
     * initiate a drag operation.
     */
    static initDragDistanceThreshold: number;
    /**
     * Set class to add to source elements being dragged.
     * @param className Class to be added.  Must be a single, valid classname.
     */
    setDragClass(className: string): void;
    /**
     * Set class to add to source elements.
     * @param className Class to be added.  Must be a single, valid classname.
     */
    setSourceClass(className: string): void;
    /**
     * Set class to add to target elements.
     * @param className Class to be added.  Must be a single, valid classname.
     */
    setTargetClass(className: string): void;
    /**
     * Whether the control has been initialized.
     * @return True if it's been initialized.
     */
    isInitialized(): boolean;
    /**
     * Add item to drag object.
     * @param element Dom Node, or string representation of node id, to be used as drag source/drop target.
     */
    addItem(element: Element | string | null): void;
    /**
     * Associate drop target with drag element.
     * @param target Target to add.
     */
    addTarget(target: AbstractDragDrop | null): void;
    /**
     * Removes the specified target from the list of drop targets.
     * @param target Target to remove.
     */
    removeTarget(target: AbstractDragDrop): void;
    /**
     * Sets the SCROLL event target to make drag element follow scrolling.
     * @param scrollTarget The element that dispatches SCROLL events.
     */
    setScrollTarget(scrollTarget: EventTarget | null): void;
    /**
     * Initialize drag and drop functionality for sources/targets already added.
     * Sources/targets added after init has been called will initialize themselves
     * one by one.
     */
    init(): void;
    /**
     * Initializes a single item.
     * @param item Item to initialize.
     */
    protected initItem(item: DragDropItem | null): void;
    /**
     * Called when removing an item. Removes event listeners and classes.
     * @param item Item to dispose.
     */
    protected disposeItem(item: DragDropItem | null): void;
    /**
     * Removes all items.
     */
    removeItems(): void;
    /**
     * Starts a drag event for an item if the mouse button stays pressed and the
     * cursor moves a few pixels. Allows dragging of items without first having to
     * register them with addItem.
     * @param event Mouse down event.
     * @param item Item that's being dragged.
     */
    maybeStartDrag(event: BrowserEvent | null, item: DragDropItem | null): void;
    /**
     * Event handler that's used to start drag.
     * @param event Mouse move event.
     * @param item Item that's being dragged.
     */
    startDrag(event: BrowserEvent | null, item: DragDropItem | null): void;
    /**
     * Recalculates the geometry of this source's drag targets.  Call this
     * if the position or visibility of a drag target has changed during
     * a drag, or if targets are added or removed.
     *
     * TODO(user): this is an expensive operation;  more efficient APIs
     * may be necessary.
     */
    recalculateDragTargets(): void;
    /**
     * Recalculates the current scroll positions of scrollable containers and
     * allocates targets. Call this if the position of a container changed or if
     * targets are added or removed.
     */
    recalculateScrollableContainers(): void;
    /**
     * Creates the Dragger for the drag element.
     * @param sourceEl Drag source element.
     * @param el the element created by createDragElement().
     * @param event Mouse down event for start of drag.
     * @return The new Dragger.
     */
    protected createDraggerFor(sourceEl: Element | null, el: Element | null, event: BrowserEvent | null): Dragger;
    /**
     * Event handler that's used to stop drag. Fires a drop event if over a valid
     * target.
     * @param event Drag event.
     */
    endDrag(event: DragEvent | null): void;
    /**
     * Called after a drag operation has finished.
     * @param opt_dropTarget Target for successful drop.
     */
    protected afterEndDrag(opt_dropTarget?: DragDropItem | null): void;
    /**
     * Called once a drag operation has finished. Removes event listeners and
     * elements.
     */
    protected disposeDrag(): void;
    /**
     * Makes drag and drop aware of a target container that could scroll mid drag.
     * @param element The scroll container.
     */
    addScrollableContainer(element: Element | null): void;
    /**
     * Removes all scrollable containers.
     */
    removeAllScrollableContainers(): void;
    /**
     * Set a function that provides subtargets. A subtargeting function
     * returns an arbitrary identifier for each subtarget of an element.
     * DnD code will generate additional drag over / out events when
     * switching from subtarget to subtarget. This is useful for instance
     * if you are interested if you are on the top half or the bottom half
     * of the element.
     * The provided function will be given the DragDropItem, box, x, y
     * box is the current window coordinates occupied by element
     * x, y is the mouse position in window coordinates
     * @param f The new subtarget function.
     */
    setSubtargetFunction(f: Function | null): void;
    /**
     * Creates an element for the item being dragged.
     * @param sourceEl Drag source element.
     * @return The new drag element.
     */
    createDragElement(sourceEl: Element | null): Element | null;
    /**
     * Returns the position for the drag element.
     * @param el Drag source element.
     * @param dragEl The dragged element created by createDragElement().
     * @param event Mouse down event for start of drag.
     * @return The position for the drag element.
     */
    getDragElementPosition(el: Element | null, dragEl: Element | null, event: BrowserEvent | null): Coordinate;
    /**
     * Returns the dragger object.
     * @return The dragger object used by this drag and drop instance.
     */
    getDragger(): Dragger | null;
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
     * Calculates the position and dimension of a draggable element.
     * @param item Item that's being dragged.
     * @param element The element to calculate the box.
     * @return Box describing the position and dimension of element.
     */
    protected getElementBox(item: DragDropItem | null, element: Element | null): Box;
    /**
     * Checks whatever a given point is inside a given box.
     * @param x Cursor position on the x-axis.
     * @param y Cursor position on the y-axis.
     * @param box Box to check position against.
     * @return Whether the given point is inside `box`.
     */
    protected isInside(x: number, y: number, box: Box | null): boolean;
    /**
     * Gets the scroll distance as a coordinate object, using
     * the window of the current drag element's dom.
     * @return Object with scroll offsets 'x' and 'y'.
     */
    protected getScrollPos(): Coordinate;
    /**
     * Get the position of a drag event.
     * @param event Drag event.
     * @return Position of the event.
     */
    protected getEventPosition(event: DragEvent | null): Coordinate;
    disposeInternal(): void;
    /**
     * Test-only exports.
     */
    static TEST_ONLY: {
        ActiveDropTarget: typeof ActiveDropTarget_;
    };
}
/**
 * Object representing a drag and drop event.
 */
export declare class DragDropEvent extends Event {
    /**
     * Object representing a drag and drop event.
     * @param type Event type.
     * @param source Source drag drop object.
     * @param sourceItem Source item.
     * @param opt_target Target drag drop object.
     * @param opt_targetItem Target item.
     * @param opt_targetElement Target element.
     * @param opt_clientX X-Position relative to the screen.
     * @param opt_clientY Y-Position relative to the screen.
     * @param opt_x X-Position relative to the viewport.
     * @param opt_y Y-Position relative to the viewport.
     * @param opt_subtarget The currently active subtarget.
     * @param opt_browserEvent The browser event that caused this dragdrop event.
     */
    constructor(type: string, source: AbstractDragDrop | null, sourceItem: DragDropItem | null, opt_target?: AbstractDragDrop | null, opt_targetItem?: DragDropItem | null, opt_targetElement?: Element | null, opt_clientX?: number, opt_clientY?: number, opt_x?: number, opt_y?: number, opt_subtarget?: object | null, opt_browserEvent?: BrowserEvent | null);
    private noStructuralTyping_closure_goog_fx_abstractdragdrop_DragDropEvent;
    /**
     * Reference to the source AbstractDragDrop object.
     */
    dragSource: AbstractDragDrop | null;
    /**
     * Reference to the source DragDropItem object.
     */
    dragSourceItem: DragDropItem | null;
    /**
     * Reference to the target AbstractDragDrop object.
     */
    dropTarget: AbstractDragDrop | undefined | null;
    /**
     * Reference to the target DragDropItem object.
     */
    dropTargetItem: DragDropItem | undefined | null;
    /**
     * The actual element of the drop target that is the target for this event.
     */
    dropTargetElement: Element | undefined | null;
    /**
     * X-Position relative to the screen.
     */
    clientX: number | undefined;
    /**
     * Y-Position relative to the screen.
     */
    clientY: number | undefined;
    /**
     * X-Position relative to the viewport.
     */
    viewportX: number | undefined;
    /**
     * Y-Position relative to the viewport.
     */
    viewportY: number | undefined;
    /**
     * The subtarget that is currently active if a subtargeting function
     * is supplied.
     */
    subtarget: object | undefined | null;
    /**
     * The browser event that caused this dragdrop event.
     */
    browserEvent: any;
}
/**
 * Class representing a source or target element for drag and drop operations.
 */
export declare class DragDropItem<DRAG_DROP_DATA = any> extends EventTarget {
    /**
     * Class representing a source or target element for drag and drop operations.
     * @param element Dom Node, or string representation of node id, to be used as drag source/drop target.
     * @param opt_data Data associated with the source/target.
     */
    constructor(element: Element | string | null, opt_data?: DRAG_DROP_DATA | null);
    private noStructuralTyping_closure_goog_fx_abstractdragdrop_DragDropItem;
    /**
     * Reference to drag source/target element
     */
    element: Element | null;
    /**
     * Data associated with element.
     */
    data: DRAG_DROP_DATA | undefined | null;
    /**
     * Get the data associated with the source/target.
     * @return Data associated with the source/target.
     */
    getData(): DRAG_DROP_DATA | undefined | null;
    /**
     * Gets the element that is actually draggable given that the given target was
     * attempted to be dragged. This should be overridden when the element that was
     * given actually contains many items that can be dragged. From the target, you
     * can determine what element should actually be dragged.
     * @param target The target that was attempted to be dragged.
     * @return The element that is draggable given the target. If none are draggable, this will return null.
     */
    getDraggableElement(target: Element | null): Element | null;
    /**
     * Gets the element that is currently being dragged.
     * @return The element that is currently being dragged.
     */
    getCurrentDragElement(): Element | null;
    /**
     * Gets all the elements of this item that are potentially draggable/
     * @return The draggable elements.
     */
    getDraggableElements(): (Element | null)[];
    /**
     * Sets the dragdrop to which this item belongs.
     * @param parent The parent dragdrop.
     */
    setParent(parent: AbstractDragDrop | null): void;
}
/**
 * Class representing an active drop target
 */
declare class ActiveDropTarget_ {
    /**
     * Class representing an active drop target
     * @param box Box describing the position and dimension of the target item.
     * @param opt_target Target that contains the item associated with position.
     * @param opt_item Item associated with position.
     * @param opt_element Element of item associated with position.
     */
    constructor(box: Box | null, opt_target?: AbstractDragDrop | null, opt_item?: DragDropItem | null, opt_element?: Element | null);
    private noStructuralTyping_closure_goog_fx_abstractdragdrop_ActiveDropTarget_;
}
export {};
