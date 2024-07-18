import { Coordinate } from '../math/coordinate.js';
import * as positioning from './positioning.js';
import { AbstractPosition } from './abstractposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup is positioned relative to the
 * window (client) coordinates. This calculates the correct position to
 * use even if the element is relatively positioned to some other element. This
 * is for trying to position an element at the spot of the mouse cursor in
 * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
 * parameters.
 */
export declare class ClientPosition extends AbstractPosition {
    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates. This calculates the correct position to
     * use even if the element is relatively positioned to some other element. This
     * is for trying to position an element at the spot of the mouse cursor in
     * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
     * parameters.
     * @param arg1 Left position or coordinate.
     * @param opt_arg2 Top position.
     */
    constructor(arg1: number | Coordinate | null, opt_arg2?: number);
    private noStructuralTyping_closure_goog_positioning_clientposition_ClientPosition;
    /**
     * Coordinate to position popup at.
     */
    coordinate: Coordinate;
    /**
     * Repositions the popup according to the current state
     * @param movableElement The DOM element of the popup.
     * @param movableElementCorner The corner of the popup element that that should be positioned adjacent to the anchorElement.  One of the positioning.Corner constants.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize Preferred size of the element.
     */
    reposition(movableElement: Element | null, movableElementCorner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
