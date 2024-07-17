import * as positioning from './positioning.js';
import { AbstractPosition } from './abstractposition.js';
import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
/**
 * Encapsulates a popup position where the popup is anchored at a corner of
 * an element.
 *
 * When using AnchoredPosition, it is recommended that the popup element
 * specified in the Popup constructor or Popup.setElement be absolutely
 * positioned.
 */
export declare class AnchoredPosition extends AbstractPosition {
    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     * @param anchorElement Element the movable element should be anchored against.
     * @param corner Corner of anchored element the movable element should be positioned at.
     * @param opt_overflow Overflow handling mode. Defaults to IGNORE if not specified. Bitmap, {@see positioning.Overflow}.
     */
    constructor(anchorElement: Element | null, corner: positioning.Corner | null, opt_overflow?: number);
    private noStructuralTyping_closure_goog_positioning_anchoredposition_AnchoredPosition;
    /**
     * Element the movable element should be anchored against.
     */
    element: Element | null;
    /**
     * Corner of anchored element the movable element should be positioned at.
     */
    corner: positioning.Corner | null;
    /**
     * Repositions the movable element.
     * @param movableElement Element to position.
     * @param movableCorner Corner of the movable element that should be positioned adjacent to the anchored element.
     * @param opt_margin A margin specifin pixels.
     * @param opt_preferredSize PreferredSize of the movableElement (unused in this class).
     */
    reposition(movableElement: Element | null, movableCorner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
