import { EventType } from '../events/eventtype.js';
import { ActivityMonitor } from './activitymonitor.js';
/**
 * A mock implementation of ActivityMonitor for unit testing. Clients
 * of this class should override Date.now to return a synthetic time from
 * the unit test.
 */
export declare class MockActivityMonitor extends ActivityMonitor {
    /**
     * A mock implementation of ActivityMonitor for unit testing. Clients
     * of this class should override Date.now to return a synthetic time from
     * the unit test.
     */
    constructor();
    private noStructuralTyping_closure_goog_ui_mockactivitymonitor_MockActivityMonitor;
    /**
     * Simulates an event that updates the user to being non-idle.
     * @param opt_type The type of event that made the user not idle. If not specified, defaults to MOUSEMOVE.
     */
    simulateEvent(opt_type?: EventType | null): void;
    dispatchEvent(e: any): boolean;
}
