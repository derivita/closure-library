import { EventTarget } from '../events/eventtarget.js';
import { ActivityMonitor } from './activitymonitor.js';
/**
 * Event target that will give notification of state changes between active and
 * idle. This class is designed to require few resources while the user is
 * active.
 */
export declare class IdleTimer extends EventTarget {
    /**
     * Event target that will give notification of state changes between active and
     * idle. This class is designed to require few resources while the user is
     * active.
     * @param idleThreshold Amount of time in ms at which we consider the user has gone idle.
     * @param opt_activityMonitor The activity monitor keeping track of user interaction. Defaults to a default-constructed activity monitor. If a default activity monitor is used then this class will dispose of it. If an activity monitor is passed in then the caller remains responsible for disposing of it.
     */
    constructor(idleThreshold: number, opt_activityMonitor?: ActivityMonitor | null);
    private noStructuralTyping_closure_goog_ui_idletimer_IdleTimer;
    disposeInternal(): void;
    getIdleThreshold(): number;
    getActivityMonitor(): ActivityMonitor | null;
    /**
     * Returns true if there has been no user action for at least the specified
     * interval, and false otherwise
     * @return true if the user is idle, false otherwise.
     */
    isIdle(): boolean;
}
export declare namespace IdleTimer {
    /**
     * Event constants for the idle timer event target
     */
    enum Event {
        BECOME_ACTIVE = "active",
        BECOME_IDLE = "idle"
    }
}
