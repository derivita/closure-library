import * as positioning from './positioning.js';
import { AnchoredPosition } from './anchoredposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup is anchored at a corner of
 * an element. The corners are swapped if dictated by the viewport. For instance
 * if a popup is anchored with its top left corner to the bottom left corner of
 * the anchor the popup is either displayed below the anchor (as specified) or
 * above it if there's not enough room to display it below.
 *
 * When using this positioning object it's recommended that the movable element
 * be absolutely positioned.
 */
export declare class AnchoredViewportPosition extends AnchoredPosition {
    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     * @param anchorElement Element the movable element should be anchored against.
     * @param corner Corner of anchored element the movable element should be positioned at.
     * @param opt_adjust Whether the positioning should be adjusted until the element fits inside the viewport even if that means that the anchored corners are ignored.
     * @param opt_overflowConstraint Box object describing the dimensions in which the movable element could be shown.
     */
    constructor(anchorElement: Element | null, corner: positioning.Corner | null, opt_adjust?: boolean, opt_overflowConstraint?: Box | null);
    private noStructuralTyping_closure_goog_positioning_anchoredviewportposition_AnchoredViewportPosition;
    getOverflowConstraint(): Box | undefined | null;
    /**
     *
     * @param overflowConstraint Box object describing the dimensions in which the movable element could be shown.
     */
    setOverflowConstraint(overflowConstraint: Box | undefined | null): void;
    getLastResortOverflow(): number;
    /**
     *
     * @param lastResortOverflow A bitmask for the "last resort" overflow, if we fail to fit the element on-screen.
     */
    setLastResortOverflow(lastResortOverflow: number): void;
    /**
     * Repositions the movable element.
     * @param movableElement Element to position.
     * @param movableCorner Corner of the movable element that should be positioned adjacent to the anchored element.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize The preferred size of the movableElement.
     */
    reposition(movableElement: Element | null, movableCorner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
    /**
     * Adjusts the corner if X or Y positioning failed.
     * @param status The status of the last positionAtAnchor call.
     * @param corner The corner to adjust.
     * @return The adjusted corner.
     */
    protected adjustCorner(status: number, corner: positioning.Corner | null): positioning.Corner | null;
}
