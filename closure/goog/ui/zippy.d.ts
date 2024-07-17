import { Role } from '../a11y/aria/roles.js';
import * as dom from '../dom/dom.js';
import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import type { BrowserEvent } from '../events/browserevent.js';
/**
 * Zippy widget. Expandable/collapsible container, clicking the header toggles
 * the visibility of the content.
 */
export declare class Zippy extends EventTarget {
    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     * @param header Header element, either element reference, string id or null if no header exists.
     * @param opt_content Content element (if any), either element reference or string id.  If skipped, the caller should handle the TOGGLE event in its own way. If a function is passed, then if will be called to create the content element the first time the zippy is expanded.
     * @param opt_expanded Initial expanded/visibility state. If undefined, attempts to infer the state from the DOM. Setting visibility using one of the standard Soy templates guarantees correct inference.
     * @param opt_expandedHeader Element to use as the header when the zippy is expanded.
     * @param opt_domHelper An optional DOM helper.
     * @param opt_role ARIA role, default TAB.
     */
    constructor(header: Element | string | null | null, opt_content?: Element | string | (() => (Element | null)) | null, opt_expanded?: boolean, opt_expandedHeader?: Element | string | null, opt_domHelper?: dom.DomHelper | null, opt_role?: Role | null);
    private noStructuralTyping_closure_goog_ui_zippy_Zippy;
    disposeInternal(): void;
    getAriaRole(): Role | null;
    getContentElement(): HTMLElement;
    getVisibleHeaderElement(): Element | null;
    /**
     * Expands content pane.
     */
    expand(): void;
    /**
     * Collapses content pane.
     */
    collapse(): void;
    /**
     * Toggles expanded state.
     */
    toggle(): void;
    /**
     * Sets expanded state.
     * @param expanded Expanded/visibility state.
     */
    setExpanded(expanded: boolean): void;
    /**
     * Sets expanded internal state.
     * @param expanded Expanded/visibility state.
     */
    protected setExpandedInternal(expanded: boolean): void;
    isExpanded(): boolean;
    /**
     * Updates the header element's className and ARIA (accessibility) EXPANDED
     * state.
     * @param expanded Expanded/visibility state.
     */
    protected updateHeaderClassName(expanded: boolean): void;
    isHandleKeyEvents(): boolean;
    isHandleMouseEvents(): boolean;
    /**
     * Sets whether the Zippy handles it's own keyboard events.
     * @param enable Whether the Zippy handles keyboard events.
     */
    setHandleKeyboardEvents(enable: boolean): void;
    /**
     * Sets whether the Zippy handles it's own mouse events.
     * @param enable Whether the Zippy handles mouse events.
     */
    setHandleMouseEvents(enable: boolean): void;
}
export declare namespace Zippy {
    /**
     * Constants for event names
     */
    enum Events {
        ACTION = "action",
        TOGGLE = "toggle"
    }
}
/**
 * Object representing a zippy toggle event.
 */
export declare class ZippyEvent extends Event {
    /**
     * Object representing a zippy toggle event.
     * @param type Event type.
     * @param target Zippy widget initiating event.
     * @param expanded Expanded state.
     */
    constructor(type: string, target: Zippy | null, expanded: boolean, opt_triggeringEvent?: BrowserEvent);
    private noStructuralTyping_closure_goog_ui_zippy_ZippyEvent;
    /**
     * The expanded state.
     */
    expanded: boolean;
    /**
     * For ACTION events, the key or mouse event that triggered this event, if
     * there was one.
     */
    triggeringEvent: BrowserEvent | null;
}
