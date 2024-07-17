import { EventTarget } from '../../events/eventtarget.js';
import type { DomHelper } from '../../dom/dom.js';
/**
 * Monitors the window for changes to the ratio between device and screen
 * pixels, e.g. when the user moves the window from a high density screen to a
 * screen with normal density. Dispatches
 * PixelDensityMonitor.EventType.CHANGE events when the density
 * changes between the two predefined values NORMAL and HIGH.
 *
 * This class uses the window.devicePixelRatio value which is supported in
 * WebKit and FF18. If the value does not exist, it will always return a
 * NORMAL density. It requires support for MediaQueryList to detect changes to
 * the devicePixelRatio.
 */
export declare class PixelDensityMonitor extends EventTarget {
    /**
     * Monitors the window for changes to the ratio between device and screen
     * pixels, e.g. when the user moves the window from a high density screen to a
     * screen with normal density. Dispatches
     * PixelDensityMonitor.EventType.CHANGE events when the density
     * changes between the two predefined values NORMAL and HIGH.
     *
     * This class uses the window.devicePixelRatio value which is supported in
     * WebKit and FF18. If the value does not exist, it will always return a
     * NORMAL density. It requires support for MediaQueryList to detect changes to
     * the devicePixelRatio.
     * @param opt_domHelper The DomHelper which contains the document associated with the window to listen to. Defaults to the one in which this code is executing.
     */
    constructor(opt_domHelper?: DomHelper);
    private noStructuralTyping_closure_goog_labs_style_pixeldensitymonitor_PixelDensityMonitor;
    /**
     * The Cobalt browser (https://cobalt.dev/) doesn't implement `addListener` or
     * `addEventListener`.
     */
    mediaQueryList_: any;
    /**
     * Starts monitoring for changes in pixel density.
     */
    start(): void;
    getDensity(): PixelDensityMonitor.Density;
    disposeInternal(): void;
}
export declare namespace PixelDensityMonitor {
    /**
     * The two different pixel density modes on which the various ratios between
     * physical and device pixels are mapped.
     */
    enum Density {
        NORMAL = 1,
        HIGH = 2
    }
    /**
     * The events fired by the PixelDensityMonitor.
     */
    type EventType = string;
    const EventType: {
        CHANGE: string;
    };
}
