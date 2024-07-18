import * as googDom from './dom.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * This class can be used to monitor changes in font size.  Instances will
 * dispatch a `FontSizeMonitor.EventType.CHANGE` event.
 * Example usage:
 * <pre>
 * var fms = new FontSizeMonitor();
 * events.listen(fms, FontSizeMonitor.EventType.CHANGE,
 * function(e) {
 * alert('Font size was changed');
 * });
 * </pre>
 */
export declare class FontSizeMonitor extends EventTarget {
    /**
     * This class can be used to monitor changes in font size.  Instances will
     * dispatch a `FontSizeMonitor.EventType.CHANGE` event.
     * Example usage:
     * <pre>
     * var fms = new FontSizeMonitor();
     * events.listen(fms, FontSizeMonitor.EventType.CHANGE,
     * function(e) {
     * alert('Font size was changed');
     * });
     * </pre>
     * @param opt_domHelper DOM helper object that is used to determine where to insert the DOM nodes used to determine when the font size changes.
     */
    constructor(opt_domHelper?: googDom.DomHelper | null);
    private noStructuralTyping_closure_goog_dom_fontsizemonitor_FontSizeMonitor;
    /**
     * Constant for the change event.
     */
    static CHANGE_EVENT: string;
    disposeInternal(): void;
}
export declare namespace FontSizeMonitor {
    /**
     * The event types that the FontSizeMonitor fires.
     */
    enum EventType {
        CHANGE = "fontsizechange"
    }
}
