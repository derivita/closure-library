import * as googDom from '../dom/dom.js';
import { Transition } from '../fx/transition.js';
import { Component } from './component.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Base class for modal popup UI components. This can also be used as
 * a standalone component to render a modal popup with an empty div.
 *
 * WARNING: ModalPopup is only guaranteed to work when it is rendered
 * directly in the 'body' element.
 *
 * The Html structure of the modal popup is:
 * <pre>
 * Element         Function              Class-name, goog-modalpopup = default
 * ----------------------------------------------------------------------------
 * - iframe         Iframe mask           goog-modalpopup-bg
 * - div            Background mask       goog-modalpopup-bg
 * - div            Modal popup area      goog-modalpopup
 * - span           Tab catcher
 * </pre>
 */
export declare class ModalPopup extends Component {
    /**
     * Base class for modal popup UI components. This can also be used as
     * a standalone component to render a modal popup with an empty div.
     *
     * WARNING: ModalPopup is only guaranteed to work when it is rendered
     * directly in the 'body' element.
     *
     * The Html structure of the modal popup is:
     * <pre>
     * Element         Function              Class-name, goog-modalpopup = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask           goog-modalpopup-bg
     * - div            Background mask       goog-modalpopup-bg
     * - div            Modal popup area      goog-modalpopup
     * - span           Tab catcher
     * </pre>
     * @param opt_useIframeMask Work around windowed controls z-index issue by using an iframe instead of a div for bg element.
     * @param opt_domHelper Optional DOM helper; see {@link Component} for semantics.
     */
    constructor(opt_useIframeMask?: boolean, opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_ui_modalpopup_ModalPopup;
    protected getCssClass(): string;
    /**
     * Returns the background iframe mask element, if any.
     * @return The background iframe mask element, may return null/undefined if the modal popup does not use iframe mask.
     */
    getBackgroundIframe(): Element | null;
    /**
     * Returns the background mask element.
     * @return The background mask element.
     */
    getBackgroundElement(): Element | null;
    /**
     * Creates the initial DOM representation for the modal popup.
     */
    createDom(): void;
    /**
     * Allow a shift-tab from the top of the modal popup to the last tabbable
     * element by moving focus to the tab catcher. This should be called after
     * catching a wrapping shift-tab event and before allowing it to propagate, so
     * that focus will land on the last tabbable element before the tab catcher.
     */
    protected setupBackwardTabWrap(): void;
    canDecorate(element: any): boolean;
    decorateInternal(element: any): void;
    enterDocument(): void;
    exitDocument(): void;
    /**
     * Sets the visibility of the modal popup box and focus to the popup.
     * @param visible Whether the modal popup should be visible.
     */
    setVisible(visible: boolean): void;
    /**
     * Sets aria-hidden on the rest of the page to restrict screen reader focus.
     * Top-level elements with an explicit aria-hidden state are not altered.
     * @param hide Whether to hide or show the rest of the page.
     */
    protected setA11YDetectBackground(hide: boolean): void;
    /**
     * Sets the transitions to show and hide the popup and background.
     * @param popupShowTransition Transition to show the popup.
     * @param popupHideTransition Transition to hide the popup.
     * @param bgShowTransition Transition to show the background.
     * @param bgHideTransition Transition to hide the background.
     */
    setTransition(popupShowTransition: Transition, popupHideTransition: Transition, bgShowTransition: Transition, bgHideTransition: Transition): void;
    /**
     * Sets the parent element to center the popup and the background inside the
     * parent element.
     */
    setCenterInsideParentElement(centerInsideParent: boolean): void;
    /**
     * Called after the popup is shown. If there is a transition, this
     * will be called after the transition completed or stopped.
     */
    protected onShow(): void;
    /**
     * Called after the popup is hidden. If there is a transition, this
     * will be called after the transition completed or stopped.
     */
    protected onHide(): void;
    isVisible(): boolean;
    /**
     * Focuses on the modal popup.
     */
    focus(): void;
    /**
     * Centers the modal popup in the viewport, taking scrolling into account.
     */
    reposition(): void;
    /**
     * Handles focus events.  Makes sure that if the user tabs past the
     * elements in the modal popup, the focus wraps back to the beginning, and that
     * if the user shift-tabs past the front of the modal popup, focus wraps around
     * to the end.
     * @param e Browser's event object.
     */
    protected onFocus(e: BrowserEvent | null): void;
    /**
     * Returns the magic tab catcher element used to detect when the user has
     * rolled focus off of the popup content.  It is automatically created during
     * the createDom method() and can be used by subclasses to implement custom
     * tab-loop behavior.
     * @return The tab catcher element.
     */
    protected getTabCatcherElement(): Element | null;
    disposeInternal(): void;
}
