import type { Box } from '../math/box.js';
import type { Size } from '../math/size.js';
import type * as positioning from './positioning.js';
/**
 * Abstract position object. Encapsulates position and overflow handling.
 */
export declare class AbstractPosition {
    /**
     * Abstract position object. Encapsulates position and overflow handling.
     */
    constructor();
    private noStructuralTyping_closure_goog_positioning_abstractposition_AbstractPosition;
    /**
     * Repositions the element. Abstract method, should be overloaded.
     * @param movableElement Element to position.
     * @param corner Corner of the movable element that should be positioned adjacent to the anchored element.
     * @param opt_margin A margin specified in pixels.
     * @param opt_preferredSize PreferredSize of the movableElement.
     */
    reposition(movableElement: Element | null, corner: positioning.Corner | null, opt_margin?: Box | null, opt_preferredSize?: Size | null): void;
}
