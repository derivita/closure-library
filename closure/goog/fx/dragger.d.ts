import { Event } from '../events/event.js';
import { EventHandler } from '../events/eventhandler.js';
import { EventTarget } from '../events/eventtarget.js';
import { Coordinate } from '../math/coordinate.js';
import { Rect } from '../math/rect.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * A class that allows mouse or touch-based dragging (moving) of an element
 */
export declare class Dragger extends EventTarget {
    /**
     * A class that allows mouse or touch-based dragging (moving) of an element
     * @param target The element that will be dragged.
     * @param opt_handle An optional handle to control the drag, if null the target is used.
     * @param opt_limits Object containing left, top, width, and height.
     */
    constructor(target: Element | null, opt_handle?: Element | null, opt_limits?: Rect | null);
    private noStructuralTyping_closure_goog_fx_dragger_Dragger;
    /**
     * Reference to drag target element.
     */
    target: Element | null;
    /**
     * Reference to the handler that initiates the drag.
     */
    handle: Element | null;
    /**
     * Object representing the limits of the drag region.
     */
    limits: Rect | null;
    /**
     * Current x position of mouse or touch relative to viewport.
     */
    clientX: number;
    /**
     * Current y position of mouse or touch relative to viewport.
     */
    clientY: number;
    /**
     * Current x position of mouse or touch relative to screen. Deprecated because
     * it doesn't take into affect zoom level or pixel density.
     */
    screenX: number;
    /**
     * Current y position of mouse or touch relative to screen. Deprecated because
     * it doesn't take into affect zoom level or pixel density.
     */
    screenY: number;
    /**
     * The x position where the first mousedown or touchstart occurred.
     */
    startX: number;
    /**
     * The y position where the first mousedown or touchstart occurred.
     */
    startY: number;
    /**
     * Current x position of drag relative to target's parent.
     */
    deltaX: number;
    /**
     * Current y position of drag relative to target's parent.
     */
    deltaY: number;
    /**
     * The current page scroll value.
     */
    pageScroll: Coordinate | null;
    /**
     * Creates copy of node being dragged.  This is a utility function to be used
     * wherever it is inappropriate for the original source to follow the mouse
     * cursor itself.
     * @param sourceEl Element to copy.
     * @return The clone of `sourceEl`.
     */
    static cloneNode(sourceEl: Element | null): Element;
    /**
     * Prevents the dragger from calling setCapture(), even in browsers that support
     * it.  If the draggable item has click handlers, setCapture() can break them.
     * @param allow True to use setCapture if the browser supports it.
     */
    setAllowSetCapture(allow: boolean): void;
    /**
     * Turns on/off true RTL behavior.  This should be called immediately after
     * construction.  This is a temporary flag to allow clients to transition
     * to the new component at their convenience.  At some point true will be the
     * default.
     * @param useRightPositioningForRtl True if "right" should be used for positioning, false if "left" should be used for positioning.
     */
    enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
    /**
     * Returns the event handler, intended for subclass use.
     * @return The event handler.
     */
    getHandler<T = any>(this: T): EventHandler<T | null>;
    /**
     * Sets (or reset) the Drag limits after a Dragger is created.
     * @param limits Object containing left, top, width, height for new Dragger limits. If target is right-to-left and enableRightPositioningForRtl(true) is called, then rect is interpreted as right, top, width, and height.
     */
    setLimits(limits: Rect | null): void;
    /**
     * Sets the distance the user has to drag the element before a drag operation is
     * started.
     * @param distance The number of pixels after which a mousedown and move is considered a drag.
     */
    setHysteresis(distance: number): void;
    /**
     * Gets the distance the user has to drag the element before a drag operation is
     * started.
     * @return distance The number of pixels after which a mousedown and move is considered a drag.
     */
    getHysteresis(): number;
    /**
     * Sets the SCROLL event target to make drag element follow scrolling.
     * @param scrollTarget The event target that dispatches SCROLL events.
     */
    setScrollTarget(scrollTarget: EventTarget | null): void;
    /**
     * Enables cancelling of built-in IE drag events.
     * @param cancelIeDragStart Whether to enable cancelling of IE dragstart event.
     */
    setCancelIeDragStart(cancelIeDragStart: boolean): void;
    getEnabled(): boolean;
    /**
     * Set whether dragger is enabled
     * @param enabled Whether dragger is enabled.
     */
    setEnabled(enabled: boolean): void;
    /**
     * Set whether mousedown should be default prevented.
     * @param preventMouseDown Whether mousedown should be default prevented.
     */
    setPreventMouseDown(preventMouseDown: boolean): void;
    disposeInternal(): void;
    /**
     * Event handler that is used to start the drag
     * @param e Event object.
     */
    startDrag(e: BrowserEvent | null): void;
    /**
     * Sets up event handlers when dragging starts.
     */
    protected setupDragHandlers(): void;
    /**
     * Event handler that is used to end the drag.
     * @param e Event object.
     * @param opt_dragCanceled Whether the drag has been canceled.
     */
    endDrag(e: BrowserEvent | null, opt_dragCanceled?: boolean): void;
    /**
     * Event handler that is used to end the drag by cancelling it.
     * @param e Event object.
     */
    endDragCancel(e: BrowserEvent | null): void;
    /**
     *
     * @param e The closure object representing the browser event that caused a drag event.
     * @param x The new horizontal position for the drag element.
     * @param y The new vertical position for the drag element.
     * @param dragFromScroll Whether dragging was caused by scrolling the associated scroll target.
     */
    protected doDrag(e: BrowserEvent | null, x: number, y: number, dragFromScroll: boolean): void;
    /**
     * Returns the 'real' x after limits are applied (allows for some
     * limits to be undefined).
     * @param x X-coordinate to limit.
     * @return The 'real' X-coordinate after limits are applied.
     */
    limitX(x: number): number;
    /**
     * Returns the 'real' y after limits are applied (allows for some
     * limits to be undefined).
     * @param y Y-coordinate to limit.
     * @return The 'real' Y-coordinate after limits are applied.
     */
    limitY(y: number): number;
    /**
     * Overridable function for computing the initial position of the target
     * before dragging begins.
     */
    protected computeInitialPosition(): void;
    /**
     * Overridable function for handling the default action of the drag behaviour.
     * Normally this is simply moving the element to x,y though in some cases it
     * might be used to resize the layer.  This is basically a shortcut to
     * implementing a default ondrag event handler.
     * @param x X-coordinate for target element. In right-to-left, x this is the number of pixels the target should be moved to from the right.
     * @param y Y-coordinate for target element.
     */
    defaultAction(x: number, y: number): void;
    isDragging(): boolean;
}
export declare namespace Dragger {
    /**
     * Constants for event names.
     */
    enum EventType {
        EARLY_CANCEL = "earlycancel",
        START = "start",
        BEFOREDRAG = "beforedrag",
        DRAG = "drag",
        END = "end"
    }
}
/**
 * Object representing a drag event
 */
export declare class DragEvent extends Event {
    /**
     * Object representing a drag event
     * @param type Event type.
     * @param dragobj Drag object initiating event.
     * @param clientX X-coordinate relative to the viewport.
     * @param clientY Y-coordinate relative to the viewport.
     * @param browserEvent The closure object representing the browser event that caused this drag event.
     * @param opt_actX Optional actual x for drag if it has been limited.
     * @param opt_actY Optional actual y for drag if it has been limited.
     * @param opt_dragCanceled Whether the drag has been canceled.
     */
    constructor(type: string, dragobj: Dragger | null, clientX: number, clientY: number, browserEvent: BrowserEvent | null, opt_actX?: number, opt_actY?: number, opt_dragCanceled?: boolean);
    private noStructuralTyping_closure_goog_fx_dragger_DragEvent;
    /**
     * X-coordinate relative to the viewport
     */
    clientX: number;
    /**
     * Y-coordinate relative to the viewport
     */
    clientY: number;
    /**
     * The closure object representing the browser event that caused this drag
     * event.
     */
    browserEvent: BrowserEvent | null;
    /**
     * The real x-position of the drag if it has been limited
     */
    left: number;
    /**
     * The real y-position of the drag if it has been limited
     */
    top: number;
    /**
     * Reference to the drag object for this event
     */
    dragger: Dragger | null;
    /**
     * Whether drag was canceled with this event. Used to differentiate between
     * a legitimate drag END that can result in an action and a drag END which is
     * a result of a drag cancelation. For now it can happen 1) with drag END
     * event on FireFox when user drags the mouse out of the window, 2) with
     * drag END event on IE7 which is generated on MOUSEMOVE event when user
     * moves the mouse into the document after the mouse button has been
     * released, 3) when TOUCHCANCEL is raised instead of TOUCHEND (on touch
     * events).
     */
    dragCanceled: boolean;
}
