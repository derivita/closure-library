import { EventTarget } from '../events/eventtarget.js';
/**
 * The correct way to determine whether a same-domain iframe has completed
 * loading is different in IE and Firefox.  This class abstracts above these
 * differences, providing a consistent interface for:
 * <ol>
 * <li> Determing if an iframe is currently loaded
 * <li> Listening for an iframe that is not currently loaded, to finish loading
 * </ol>
 */
export declare class IframeLoadMonitor extends EventTarget {
    /**
     * The correct way to determine whether a same-domain iframe has completed
     * loading is different in IE and Firefox.  This class abstracts above these
     * differences, providing a consistent interface for:
     * <ol>
     * <li> Determing if an iframe is currently loaded
     * <li> Listening for an iframe that is not currently loaded, to finish loading
     * </ol>
     * @param iframe An iframe.
     * @param opt_hasContent Whether to wait for the loaded iframe to have content in its document body.
     */
    constructor(iframe: HTMLIFrameElement | null, opt_hasContent?: boolean);
    private noStructuralTyping_closure_goog_net_iframeloadmonitor_IframeLoadMonitor;
    /**
     * Event type dispatched by a IframeLoadMonitor when it internal iframe
     * finishes loading for the first time after construction of the
     * IframeLoadMonitor
     */
    static LOAD_EVENT: string;
    /**
     * Returns whether or not the iframe is loaded.
     * @return whether or not the iframe is loaded.
     */
    isLoaded(): boolean;
    /**
     * Returns the iframe whose load state this IframeLoader monitors.
     * @return the iframe whose load state this IframeLoader monitors.
     */
    getIframe(): HTMLIFrameElement | null;
    disposeInternal(): void;
}
