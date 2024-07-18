import { EventTarget } from '../events/eventtarget.js';
import type { ViewportSizeMonitor } from './viewportsizemonitor.js';
import type { Size } from '../math/size.js';
/**
 * Creates a new BufferedViewportSizeMonitor.
 */
export declare class BufferedViewportSizeMonitor extends EventTarget {
    /**
     * Creates a new BufferedViewportSizeMonitor.
     * @param viewportSizeMonitor The underlying viewport size monitor.
     * @param opt_bufferMs The buffer time, in ms. If not specified, this value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
     */
    constructor(viewportSizeMonitor: ViewportSizeMonitor, opt_bufferMs?: number);
    private noStructuralTyping_closure_goog_dom_bufferedviewportsizemonitor_BufferedViewportSizeMonitor;
    disposeInternal(): void;
    /**
     * Returns the current size of the viewport.
     * @return The current viewport size.
     */
    getSize(): Size | null;
}
export declare namespace BufferedViewportSizeMonitor {
    /**
     * Additional events to dispatch.
     */
    type EventType = string;
    const EventType: {
        RESIZE_HEIGHT: string;
        RESIZE_WIDTH: string;
    };
}
