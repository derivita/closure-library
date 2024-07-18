import { Box } from '../math/box.js';
import { AbstractPosition } from '../positioning/abstractposition.js';
import { Corner } from '../positioning/positioning.js';
import { PopupBase } from './popupbase.js';
/**
 * The Popup class provides functionality for displaying an absolutely
 * positioned element at a particular location in the window. It's designed to
 * be used as the foundation for building controls like a menu or tooltip. The
 * Popup class includes functionality for displaying a Popup near adjacent to
 * an anchor element.
 *
 * This works cross browser and thus does not use IE's createPopup feature
 * which supports extending outside the edge of the brower window.
 */
export declare class Popup extends PopupBase {
    /**
     * The Popup class provides functionality for displaying an absolutely
     * positioned element at a particular location in the window. It's designed to
     * be used as the foundation for building controls like a menu or tooltip. The
     * Popup class includes functionality for displaying a Popup near adjacent to
     * an anchor element.
     *
     * This works cross browser and thus does not use IE's createPopup feature
     * which supports extending outside the edge of the brower window.
     * @param opt_element A DOM element for the popup.
     * @param opt_position A positioning helper object.
     */
    constructor(opt_element?: Element | null, opt_position?: AbstractPosition | null);
    private noStructuralTyping_closure_goog_ui_popup_Popup;
    /**
     * Returns the corner of the popup to used in the positioning algorithm.
     * @return The popup corner used for positioning.
     */
    getPinnedCorner(): Corner | null;
    /**
     * Sets the corner of the popup to used in the positioning algorithm.
     * @param corner The popup corner used for positioning.
     */
    setPinnedCorner(corner: Corner | null): void;
    getPosition(): AbstractPosition | null;
    /**
     * Sets the position helper object associated with the popup.
     * @param position A position helper object.
     */
    setPosition(position: AbstractPosition | null): void;
    /**
     * Returns the margin to place around the popup.
     * @return The margin.
     */
    getMargin(): Box | null;
    /**
     * Sets the margin to place around the popup.
     * @param arg1 Top value or Box.
     * @param opt_arg2 Right value.
     * @param opt_arg3 Bottom value.
     * @param opt_arg4 Left value.
     */
    setMargin(arg1: Box | number | null | null, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
    /**
     * Repositions the popup according to the current state.
     */
    reposition(): void;
}
