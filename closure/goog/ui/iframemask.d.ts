import { Disposable } from '../disposable/disposable.js';
import * as dom from '../dom/dom.js';
import { Pool } from '../structs/pool.js';
import type { EventTarget } from '../events/eventtarget.js';
/**
 * Controller for an iframe mask. The mask is only valid in the current
 * document, or else the document of the given DOM helper.
 */
export declare class IframeMask extends Disposable {
    /**
     * Controller for an iframe mask. The mask is only valid in the current
     * document, or else the document of the given DOM helper.
     * @param opt_domHelper The DOM helper for the relevant document.
     * @param opt_iframePool An optional source of iframes. Iframes will be grabbed from the pool when they're needed and returned to the pool (but still attached to the DOM) when they're done.
     */
    constructor(opt_domHelper?: dom.DomHelper | null, opt_iframePool?: Pool | null);
    private noStructuralTyping_closure_goog_ui_iframemask_IframeMask;
    /**
     * Removes the iframe from the DOM.
     */
    disposeInternal(): void;
    /**
     * Removes the mask from the screen.
     */
    hideMask(): void;
    /**
     * Applies the iframe mask to the screen.
     */
    applyMask(): void;
    /**
     * Sets the opacity of the mask. Will take effect the next time the mask
     * is applied.
     * @param opacity A value between 0 and 1, with 1 being totally opaque.
     */
    setOpacity(opacity: number): void;
    /**
     * Sets the z-index of the mask. Will take effect the next time the mask
     * is applied.
     * @param zIndex A z-index value.
     */
    setZIndex(zIndex: number): void;
    /**
     * Sets the element to use as the bounds of the mask. Takes effect immediately.
     * @param snapElement The snap element, which the iframe will be "snapped" around.
     */
    setSnapElement(snapElement: Element | null): void;
    /**
     * Listens on the specified target, hiding and showing the iframe mask
     * when the given event types are dispatched.
     * @param target The event target to listen on.
     * @param showEvent When this event fires, the mask will be applied.
     * @param hideEvent When this event fires, the mask will be hidden.
     * @param opt_snapElement When the mask is applied, it will automatically snap to this element. If no element is specified, it will use the default snap element.
     */
    listenOnTarget(target: EventTarget | null, showEvent: string, hideEvent: string, opt_snapElement?: Element | null): void;
    /**
     * Removes all handlers attached by listenOnTarget.
     */
    removeHandlers(): void;
}
