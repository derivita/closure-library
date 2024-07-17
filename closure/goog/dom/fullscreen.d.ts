import * as dom from './dom.js';
export /**
 * Event types for full screen.
 */ type EventType = string;
export declare const EventType: {
    CHANGE: string;
};
/**
 * Options for fullscreen navigation UI:
 * https://fullscreen.spec.whatwg.org/#dictdef-fullscreenoptions
 */
export declare enum FullscreenNavigationUI {
    AUTO = "auto",
    HIDE = "hide",
    SHOW = "show"
}
interface GoogFullscreenOptions extends FullscreenOptions {
    navigationUI: FullscreenNavigationUI;
}
export { GoogFullscreenOptions as FullscreenOptions };
/**
 * Determines if full screen is supported.
 * @param opt_domHelper The DomHelper for the DOM being queried. If not provided, use the current DOM.
 * @return True iff full screen is supported.
 */
export declare function isSupported(opt_domHelper?: dom.DomHelper): boolean;
/**
 * Requests putting the element in full screen.
 * @param element The element to put full screen.
 * @param opt_options Options for full screen. This field will be ignored on older browsers.
 * @return A promise in later versions of Chrome and undefined otherwise.
 */
export declare function requestFullScreen(element: Element, opt_options?: GoogFullscreenOptions): Promise<undefined> | undefined;
/**
 * Requests putting the element in full screen with full keyboard access.
 * @param element The element to put full screen.
 * @param opt_options Options for full screen. This field will be ignored on older browsers.
 * @return A promise in later versions of Chrome and undefined otherwise.
 */
export declare function requestFullScreenWithKeys(element: Element, opt_options?: GoogFullscreenOptions): Promise<undefined> | undefined;
/**
 * Exits full screen.
 * @param opt_domHelper The DomHelper for the DOM being queried. If not provided, use the current DOM.
 */
export declare function exitFullScreen(opt_domHelper?: dom.DomHelper): void;
/**
 * Determines if the document is full screen.
 * @param opt_domHelper The DomHelper for the DOM being queried. If not provided, use the current DOM.
 * @return Whether the document is full screen.
 */
export declare function isFullScreen(opt_domHelper?: dom.DomHelper): boolean;
/**
 * Get the root element in full screen mode.
 * @param opt_domHelper The DomHelper for the DOM being queried. If not provided, use the current DOM.
 * @return The root element in full screen mode.
 */
export declare function getFullScreenElement(opt_domHelper?: dom.DomHelper): Element | null;
