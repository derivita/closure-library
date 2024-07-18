import { EventTarget } from './eventtarget.js';
import { NetworkStatusMonitor } from '../net/networkstatusmonitor.js';
/**
 * Basic object for detecting whether the online state changes.
 */
export declare class OnlineHandler extends EventTarget implements NetworkStatusMonitor {
    /**
     * Basic object for detecting whether the online state changes.
     */
    constructor();
    private noStructuralTyping_closure_goog_events_onlinehandler_OnlineHandler;
    isOnline(): any;
    disposeInternal(): void;
}
