import type { Event } from '../events/event.js';
/**
 * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
 * multiple iframes to load.
 */
export declare class MultiIframeLoadMonitor {
    /**
     * Provides a wrapper around IframeLoadMonitor, to allow the caller to wait for
     * multiple iframes to load.
     * @param iframes Array of iframe elements to wait until they are loaded.
     * @param opt_hasContent true if the monitor should wait until the iframes have content (body.firstChild != null).
     */
    constructor(iframes: (HTMLIFrameElement | null)[] | null, callback: any, opt_hasContent?: boolean);
    private noStructuralTyping_closure_goog_net_multiiframeloadmonitor_MultiIframeLoadMonitor;
    /**
     * Handles a pending iframe load monitor load event.
     * @param e The IframeLoadMonitor.LOAD_EVENT event.
     */
    handleEvent(e: Event | null): void;
    /**
     * Stops monitoring the iframes, cleaning up any associated resources. In
     * general, the object cleans up its own resources before invoking the
     * callback, so this API should only be used if the caller wants to stop the
     * monitoring before the iframes are loaded (for example, if the caller is
     * implementing a timeout).
     */
    stopMonitoring(): void;
}
