import { SafeHtml } from '../html/safehtml.js';
import { Corner } from '../positioning/positioning.js';
import { AnchoredPosition } from '../positioning/anchoredposition.js';
import { Component } from './component.js';
import type { DomHelper } from '../dom/dom.js';
import type { AbstractPosition } from '../positioning/abstractposition.js';
/**
 * The Bubble provides a general purpose bubble implementation that can be
 * anchored to a particular element and displayed for a period of time.
 */
export declare class Bubble extends Component {
    /**
     * The Bubble provides a general purpose bubble implementation that can be
     * anchored to a particular element and displayed for a period of time.
     * @param message Message or an element to display inside the bubble. Strings are treated as plain-text and will be HTML escaped.
     * @param opt_config The configuration for the bubble. If not specified, the default configuration will be used. {@see Bubble.defaultConfig}.
     * @param opt_domHelper Optional DOM helper.
     */
    constructor(message: string | SafeHtml | Element | null, opt_config?: object | null, opt_domHelper?: DomHelper | null);
    private noStructuralTyping_closure_goog_ui_bubble_Bubble;
    createDom(): void;
    /**
     * Attaches the bubble to an anchor element. Computes the positioning and
     * orientation of the bubble.
     * @param anchorElement The element to which we are attaching.
     */
    attach(anchorElement: Element | null): void;
    /**
     * Sets the corner of the bubble to used in the positioning algorithm.
     * @param corner The bubble corner used for positioning constants.
     */
    setPinnedCorner(corner: Corner | null): void;
    /**
     * Sets the position of the bubble. Pass null for corner in AnchoredPosition
     * for corner to be computed automatically.
     * @param position The position of the bubble.
     */
    setPosition(position: AbstractPosition | null): void;
    /**
     * Sets the timeout after which bubble hides itself.
     * @param timeout Timeout of the bubble.
     */
    setTimeout(timeout: number): void;
    /**
     * Sets whether the bubble should be automatically hidden whenever user clicks
     * outside the bubble element.
     * @param autoHide Whether to hide if user clicks outside the bubble.
     */
    setAutoHide(autoHide: boolean): void;
    /**
     * Sets whether the bubble should be visible.
     * @param visible Desired visibility state.
     */
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    disposeInternal(): void;
    /**
     * Returns an AnchoredPosition that will position the bubble optimally
     * given the position of the anchor element and the size of the viewport.
     * @param anchorElement The element to which the bubble is attached.
     * @return The AnchoredPosition to give to {@link #setPosition}.
     */
    getComputedAnchoredPosition(anchorElement: Element | null): AnchoredPosition;
    /**
     * A default configuration for the bubble.
     */
    static defaultConfig: object | null;
}
