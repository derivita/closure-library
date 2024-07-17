import * as dom from '../../dom/dom.js';
import { EventTarget } from '../../events/eventtarget.js';
import PageVisibilityState from './pagevisibilitystate.js';
/**
 * This event handler allows you to catch page visibility change events.
 */
export declare class PageVisibilityMonitor extends EventTarget {
    /**
     * This event handler allows you to catch page visibility change events.
     */
    constructor(opt_domHelper?: dom.DomHelper);
    private noStructuralTyping_closure_goog_labs_dom_pagevisibilitymonitor_PageVisibilityMonitor;
    isSupported(): boolean;
    isHidden(): boolean;
    getVisibilityState(): PageVisibilityState | null;
    disposeInternal(): void;
}
