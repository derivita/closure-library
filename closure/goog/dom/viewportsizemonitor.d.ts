import { EventTarget } from '../events/eventtarget.js';
import { Size } from '../math/size.js';
/**
 * This class can be used to monitor changes in the viewport size.  Instances
 * dispatch a {@link EventType.RESIZE} event when the viewport size
 * changes.  Handlers can call {@link ViewportSizeMonitor#getSize} to
 * get the new viewport size.
 *
 * Use this class if you want to execute resize/reflow logic each time the
 * user resizes the browser window.  This class is guaranteed to only dispatch
 * `RESIZE` events when the pixel dimensions of the viewport change.
 * (Internet Explorer fires resize events if any element on the page is resized,
 * even if the viewport dimensions are unchanged, which can lead to infinite
 * resize loops.)
 *
 * Example usage:
 * <pre>
 * var vsm = new ViewportSizeMonitor();
 * events.listen(vsm, EventType.RESIZE, function(e) {
 * alert('Viewport size changed to ' + vsm.getSize());
 * });
 * </pre>
 *
 * Manually verified on IE6, IE7, FF2, Opera 11, Safari 4 and Chrome.
 */
export declare class ViewportSizeMonitor extends EventTarget {
    /**
     * This class can be used to monitor changes in the viewport size.  Instances
     * dispatch a {@link EventType.RESIZE} event when the viewport size
     * changes.  Handlers can call {@link ViewportSizeMonitor#getSize} to
     * get the new viewport size.
     *
     * Use this class if you want to execute resize/reflow logic each time the
     * user resizes the browser window.  This class is guaranteed to only dispatch
     * `RESIZE` events when the pixel dimensions of the viewport change.
     * (Internet Explorer fires resize events if any element on the page is resized,
     * even if the viewport dimensions are unchanged, which can lead to infinite
     * resize loops.)
     *
     * Example usage:
     * <pre>
     * var vsm = new ViewportSizeMonitor();
     * events.listen(vsm, EventType.RESIZE, function(e) {
     * alert('Viewport size changed to ' + vsm.getSize());
     * });
     * </pre>
     *
     * Manually verified on IE6, IE7, FF2, Opera 11, Safari 4 and Chrome.
     * @param opt_window The window to monitor; defaults to the window in which this code is executing.
     */
    constructor(opt_window?: Window | null);
    private noStructuralTyping_closure_goog_dom_viewportsizemonitor_ViewportSizeMonitor;
    /**
     * Returns a viewport size monitor for the given window.  A new one is created
     * if it doesn't exist already.  This prevents the unnecessary creation of
     * multiple spooling monitors for a window.
     * @param opt_window The window to monitor; defaults to the window in which this code is executing.
     * @return Monitor for the given window.
     */
    static getInstanceForWindow(opt_window?: Window | null): ViewportSizeMonitor;
    /**
     * Removes and disposes a viewport size monitor for the given window if one
     * exists.
     * @param opt_window The window whose monitor should be removed; defaults to the window in which this code is executing.
     */
    static removeInstanceForWindow(opt_window?: Window | null): void;
    /**
     * Returns the most recently recorded size of the viewport, in pixels.  May
     * return null if no window resize event has been handled yet.
     * @return The viewport dimensions, in pixels.
     */
    getSize(): Size | null;
    disposeInternal(): void;
}
