import { Coordinate } from '../math/coordinate.js';
import * as positioning from './positioning.js';
import { ClientPosition } from './clientposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup is positioned relative to the
 * window (client) coordinates, and made to stay within the viewport.
 */
export declare class ViewportClientPosition extends ClientPosition {
    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     * @param arg1 Left position or coordinate.
     * @param opt_arg2 Top position if arg1 is a number representing the left position, ignored otherwise.
     */
    constructor(arg1: number | Coordinate | null, opt_arg2?: number);
    private noStructuralTyping_closure_goog_positioning_viewportclientposition_ViewportClientPosition;
    /**
     * Set the last-resort overflow strategy, if the popup fails to fit.
     * @param overflow A bitmask of Overflow strategies.
     */
    setLastResortOverflow(overflow: number): void;
    /**
     * Repositions the popup according to the current state.
     * @param element The DOM element of the popup.
     * @param popupCorner The corner of the popup element that that should be positioned adjacent to the anchorElement. One of the positioning.Corner constants.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize Preferred size fo the element.
     */
    reposition(element: Element | null, popupCorner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
