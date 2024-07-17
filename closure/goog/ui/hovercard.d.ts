import * as dom from '../dom/dom.js';
import { Event } from '../events/event.js';
import { AdvancedTooltip } from './advancedtooltip.js';
import { PopupBase } from './popupbase.js';
import type { BrowserEvent } from '../events/browserevent.js';
import type { AbstractPosition } from '../positioning/abstractposition.js';
/**
 * Create a hover card object.  Hover cards extend tooltips in that they don't
 * have to be manually attached to each element that can cause them to display.
 * Instead, you can create a function that gets called when the mouse goes over
 * any element on your page, and returns whether or not the hovercard should be
 * shown for that element.
 *
 * Alternatively, you can define a map of tag names to the attribute name each
 * tag should have for that tag to trigger the hover card.  See example below.
 *
 * Hovercards can also be triggered manually by calling
 * `triggerForElement`, shown without a delay by calling
 * `showForElement`, or triggered over other elements by calling
 * `attach`.  For the latter two cases, the application is responsible
 * for calling `detach` when finished.
 *
 * HoverCard objects fire a TRIGGER event when the mouse moves over an element
 * that can trigger a hovercard, and BEFORE_SHOW when the hovercard is
 * about to be shown.  Clients can respond to these events and can prevent the
 * hovercard from being triggered or shown.
 */
export declare class HoverCard extends AdvancedTooltip {
    /**
     * Create a hover card object.  Hover cards extend tooltips in that they don't
     * have to be manually attached to each element that can cause them to display.
     * Instead, you can create a function that gets called when the mouse goes over
     * any element on your page, and returns whether or not the hovercard should be
     * shown for that element.
     *
     * Alternatively, you can define a map of tag names to the attribute name each
     * tag should have for that tag to trigger the hover card.  See example below.
     *
     * Hovercards can also be triggered manually by calling
     * `triggerForElement`, shown without a delay by calling
     * `showForElement`, or triggered over other elements by calling
     * `attach`.  For the latter two cases, the application is responsible
     * for calling `detach` when finished.
     *
     * HoverCard objects fire a TRIGGER event when the mouse moves over an element
     * that can trigger a hovercard, and BEFORE_SHOW when the hovercard is
     * about to be shown.  Clients can respond to these events and can prevent the
     * hovercard from being triggered or shown.
     * @param isAnchor Function that returns true if a given element should trigger the hovercard.  Alternatively, it can be a map of tag names to the attribute that the tag should have in order to trigger the hovercard, e.g., {A: 'href'} for all links.  Tag names must be all upper case; attribute names are case insensitive.
     * @param opt_checkDescendants Use false for a performance gain if you are sure that none of your triggering elements have child elements. Default is true.
     * @param opt_domHelper Optional DOM helper to use for creating and rendering the hovercard element.
     * @param opt_triggeringDocument Optional document to use in place of the one included in the DomHelper for finding triggering elements. Defaults to the document included in the DomHelper.
     */
    constructor(isAnchor: Function | object | null, opt_checkDescendants?: boolean, opt_domHelper?: dom.DomHelper | null, opt_triggeringDocument?: Document | null);
    private noStructuralTyping_closure_goog_ui_hovercard_HoverCard;
    disposeInternal(): void;
    /**
     * Triggers the hovercard to show after a delay.
     * @param anchorElement Element that is triggering the hovercard.
     * @param opt_pos Position to display hovercard.
     * @param opt_data Data to pass to the onTrigger event.
     */
    triggerForElement(anchorElement: Element | null, opt_pos?: AbstractPosition | null, opt_data?: object | null): void;
    /**
     * Called when an element triggers the hovercard.  This will return false
     * if an event handler sets preventDefault to true, which will prevent
     * the hovercard from being shown.
     * @param triggerEvent Event object to use for trigger event.
     * @return Whether hovercard should be shown or cancelled.
     */
    protected onTrigger(triggerEvent: HoverCard.TriggerEvent): boolean;
    /**
     * Abort pending hovercard showing, if any.
     */
    cancelTrigger(): void;
    /**
     * This method gets called when we detect that a trigger event will not lead
     * to the hovercard being shown.
     */
    protected onCancelTrigger(): void;
    /**
     * Gets the DOM element that triggered the current hovercard.  Note that in
     * the TRIGGER or CANCEL_TRIGGER events, the current hovercard's anchor may not
     * be the one that caused the event, so use the event's anchor property instead.
     * @return Object that caused the currently displayed hovercard (or pending hovercard if none is displayed) to be triggered.
     */
    getAnchorElement(): Element | null;
    /**
     * Make sure we detach from temp anchor when we are done displaying hovercard.
     */
    onHide(): void;
    /**
     * This mouse over event is only received if the anchor is already attached.
     * If it was attached manually, then it may need to be triggered.
     * @param event Mouse over event.
     */
    handleMouseOver(event: BrowserEvent | null): void;
    /**
     * If the mouse moves out of the trigger while we're being triggered, then
     * cancel it.
     * @param event Mouse out or blur event.
     */
    handleMouseOutAndBlur(event: BrowserEvent | null): void;
    /**
     * Called by timer from mouse over handler. If this is called and the hovercard
     * is not shown for whatever reason, then send a cancel trigger event.
     * @param el Element to show tooltip for.
     * @param opt_pos Position to display popup at.
     */
    maybeShow(el: Element | null, opt_pos?: AbstractPosition | null): void;
    /**
     * Sets the max number of levels to search up the dom if checking descendants.
     * @param maxSearchSteps Maximum number of levels to search up the dom if checking descendants.
     */
    setMaxSearchSteps(maxSearchSteps: number): void;
}
export declare namespace HoverCard {
    /**
     * Enum for event type fired by HoverCard.
     */
    type EventType = string;
    const EventType: {
        TRIGGER: string;
        CANCEL_TRIGGER: string;
        BEFORE_SHOW: PopupBase.EventType;
        SHOW: PopupBase.EventType;
        BEFORE_HIDE: PopupBase.EventType;
        HIDE: PopupBase.EventType;
    };
    /**
     * Create a trigger event for specified anchor and optional data.
     */
    class TriggerEvent extends Event {
        /**
         * Create a trigger event for specified anchor and optional data.
         * @param type Event type.
         * @param target Hovercard that is triggering the event.
         * @param anchor Element that triggered event.
         * @param opt_data Optional data to be available in the TRIGGER event.
         */
        constructor(type: HoverCard.EventType | null, target: HoverCard | null, anchor: Element | null, opt_data?: object | null);
        private noStructuralTyping_closure_goog_ui_hovercard_TriggerEvent;
        /**
         * Element that triggered the hovercard event.
         */
        anchor: Element | null;
        /**
         * Optional data to be passed to the listener.
         */
        data: object | undefined | null;
    }
}
