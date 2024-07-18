import { Coordinate } from '../math/coordinate.js';
import { Corner } from './positioning.js';
import { AbstractPosition } from './abstractposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup is positioned according to
 * coordinates relative to the  element's viewport (page). This calculates the
 * correct position to use even if the element is relatively positioned to some
 * other element.
 */
export declare class ViewportPosition extends AbstractPosition {
    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's viewport (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     * @param arg1 Left position or coordinate.
     * @param opt_arg2 Top position.
     */
    constructor(arg1: number | Coordinate | null, opt_arg2?: number);
    private noStructuralTyping_closure_goog_positioning_viewportposition_ViewportPosition;
    /**
     * Repositions the popup according to the current state
     * @param element The DOM element of the popup.
     * @param popupCorner The corner of the popup element that that should be positioned adjacent to the anchorElement.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize Preferred size of the element.
     */
    reposition(element: Element | null, popupCorner: Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
