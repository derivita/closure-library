import { Coordinate } from '../math/coordinate.js';
import * as positioning from './positioning.js';
import { AbstractPosition } from './abstractposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup absolutely positioned by
 * setting the left/top style elements directly to the specified values.
 * The position is generally relative to the element's offsetParent. Normally,
 * this is the document body, but can be another element if the popup element
 * is scoped by an element with relative position.
 */
export declare class AbsolutePosition extends AbstractPosition {
    /**
     * Encapsulates a popup position where the popup absolutely positioned by
     * setting the left/top style elements directly to the specified values.
     * The position is generally relative to the element's offsetParent. Normally,
     * this is the document body, but can be another element if the popup element
     * is scoped by an element with relative position.
     * @param arg1 Left position or coordinate.
     * @param opt_arg2 Top position.
     */
    constructor(arg1: number | Coordinate, opt_arg2?: number);
    private noStructuralTyping_closure_goog_positioning_absoluteposition_AbsolutePosition;
    /**
     * Coordinate to position popup at.
     */
    coordinate: Coordinate | null;
    /**
     * Repositions the popup according to the current state.
     * @param movableElement The DOM element to position.
     * @param movableCorner The corner of the movable element that should be positioned at the specified position.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize Preferred size of the movableElement.
     */
    reposition(movableElement: Element | null, movableCorner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
