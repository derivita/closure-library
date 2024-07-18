import { AnchoredViewportPosition } from './anchoredviewportposition.js';
import type { Corner } from './positioning.js';
/**
 * Encapsulates a popup position where the popup is anchored at a corner of
 * an element.  The positioning behavior changes based on the values of
 * opt_adjust and opt_resize.
 *
 * When using this positioning object it's recommended that the movable element
 * be absolutely positioned.
 */
export declare class MenuAnchoredPosition extends AnchoredViewportPosition {
    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.  The positioning behavior changes based on the values of
     * opt_adjust and opt_resize.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     * @param anchorElement Element the movable element should be anchored against.
     * @param corner Corner of anchored element the movable element should be positioned at.
     * @param opt_adjust Whether the positioning should be adjusted until the element fits inside the viewport even if that means that the anchored corners are ignored.
     * @param opt_resize Whether the positioning should be adjusted until the element fits inside the viewport on the X axis and its height is resized so if fits in the viewport. This take precedence over opt_adjust.
     */
    constructor(anchorElement: Element | null, corner: Corner | null, opt_adjust?: boolean, opt_resize?: boolean);
    private noStructuralTyping_closure_goog_positioning_menuanchoredposition_MenuAnchoredPosition;
}
