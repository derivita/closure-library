import { Box } from '../math/box.js';
import { Coordinate } from '../math/coordinate.js';
import { Tooltip } from './tooltip.js';
import type { DomHelper } from '../dom/dom.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Advanced tooltip widget with cursor tracking abilities. Works like a regular
 * tooltip but can track the cursor position and direction to determine if the
 * tooltip should be dismissed or remain open.
 */
export declare class AdvancedTooltip extends Tooltip {
    /**
     * Advanced tooltip widget with cursor tracking abilities. Works like a regular
     * tooltip but can track the cursor position and direction to determine if the
     * tooltip should be dismissed or remain open.
     * @param opt_el Element to display tooltip for, either element reference or string id.
     * @param opt_str Text message to display in tooltip.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(opt_el?: Element | string | null, opt_str?: string | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_advancedtooltip_AdvancedTooltip;
    /**
     * Sets margin around the tooltip where the cursor is allowed without dismissing
     * the tooltip.
     * @param opt_box The margin around the tooltip.
     */
    setHotSpotPadding(opt_box?: Box | null): void;
    getHotSpotPadding(): Box | null;
    /**
     * Sets whether to track the cursor and thereby close the tooltip if it moves
     * away from the tooltip and keep it open if it moves towards it.
     * @param b Whether to track the cursor.
     */
    setCursorTracking(b: boolean): void;
    getCursorTracking(): boolean;
    /**
     * Sets delay in milliseconds before tooltips are hidden if cursor tracking is
     * enabled and the cursor is moving away from the tooltip.
     * @param delay The delay in milliseconds.
     */
    setCursorTrackingHideDelayMs(delay: number): void;
    getCursorTrackingHideDelayMs(): number;
    /**
     * Called after the popup is shown.
     */
    onShow(): void;
    /**
     * Called after the popup is hidden.
     */
    onHide(): void;
    /**
     * Returns true if the mouse is in the tooltip.
     * @return True if the mouse is in the tooltip.
     */
    isMouseInTooltip(): boolean;
    /**
     * Checks whether the supplied coordinate is inside the tooltip, including
     * padding if any.
     * @param coord Coordinate being tested.
     * @return Whether the coord is in the tooltip.
     */
    isCoordinateInTooltip(coord: Coordinate | null): boolean;
    /**
     * Called by timer from mouse out handler. Hides tooltip if cursor is still
     * outside element and tooltip.
     * @param el Anchor when hide timer was started.
     */
    maybeHide(el: Element | undefined | null): void;
    /**
     * Handler for mouse move events.
     * @param event Event object.
     */
    handleMouseMove(event: BrowserEvent | null): void;
    /**
     * Handler for mouse over events for the tooltip element.
     * @param event Event object.
     */
    handleTooltipMouseOver(event: BrowserEvent | null): void;
    /**
     * Override hide delay with cursor tracking hide delay while tracking.
     * @return Hide delay to use.
     */
    getHideDelayMs(): number;
    /**
     * Forces the recalculation of the hotspot on the next mouse over event.
     */
    resetHotSpot(): void;
}
