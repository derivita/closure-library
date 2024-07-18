import { EventTarget } from '../../events/eventtarget.js';
import { NetworkStatusMonitor } from '../../net/networkstatusmonitor.js';
/**
 * NetworkStatusMonitor test double.
 */
export declare class OnlineHandler extends EventTarget implements NetworkStatusMonitor {
    /**
     * NetworkStatusMonitor test double.
     * @param initialState The initial online state of the mock.
     */
    constructor(initialState: boolean);
    private noStructuralTyping_closure_goog_testing_events_onlinehandler_OnlineHandler;
    isOnline(): any;
    /**
     * Sets the online state.
     * @param newOnlineState The new online state.
     */
    setOnline(newOnlineState: boolean): void;
}
