import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
/**
 * Enum that identifies events for statistics that are interesting to track.
 * TODO(jonp) - Change name not to use Event or use EventTarget
 */
declare enum Stat {
    CONNECT_ATTEMPT = 0,
    ERROR_NETWORK = 1,
    ERROR_OTHER = 2,
    TEST_STAGE_ONE_START = 3,
    CHANNEL_BLOCKED = 4,
    TEST_STAGE_TWO_START = 5,
    TEST_STAGE_TWO_DATA_ONE = 6,
    TEST_STAGE_TWO_DATA_TWO = 7,
    TEST_STAGE_TWO_DATA_BOTH = 8,
    TEST_STAGE_ONE_FAILED = 9,
    TEST_STAGE_TWO_FAILED = 10,
    PROXY = 11,
    NOPROXY = 12,
    REQUEST_UNKNOWN_SESSION_ID = 13,
    REQUEST_BAD_STATUS = 14,
    REQUEST_INCOMPLETE_DATA = 15,
    REQUEST_BAD_DATA = 16,
    REQUEST_NO_DATA = 17,
    REQUEST_TIMEOUT = 18,
    BACKCHANNEL_MISSING = 19,
    BACKCHANNEL_DEAD = 20,
    BROWSER_OFFLINE = 21,
    ACTIVE_X_BLOCKED = 22
}
export { Stat };
/**
 * Helper function to call the stat event callback.
 * @param stat The stat.
 */
declare const notifyStatEvent: (stat: Stat | null) => void;
export { notifyStatEvent };
/**
 * Returns the singleton event target for stat events.
 */
declare const getStatEventTarget: EventTarget;
export { getStatEventTarget };
/**
 * Stat Event that fires when things of interest happen that may be useful for
 * applications to know about for stats or debugging purposes. This event fires
 * on the EventTarget returned by getStatEventTarget.
 */
declare const STAT_EVENT = "statevent";
export { STAT_EVENT };
/**
 * Event class for goog.net.BrowserChannel.Event.STAT_EVENT
 */
declare class StatEvent extends Event {
    constructor(eventTarget: EventTarget | null, stat: Stat | null);
    /**
     * The stat
     */
    stat: Stat | null;
}
export { StatEvent };
