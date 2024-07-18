import { Event as eventsEvent } from '../../../events/event.js';
import { EventTarget } from '../../../events/eventtarget.js';
/**
 * Events fired.
 */
export declare var Event: {
    /**
     * The type of event that occurs every time some information about how reachable
     * the server is is discovered.
     */
    SERVER_REACHABILITY_EVENT: string;
    /**
     * Stat Event that fires when things of interest happen that may be useful for
     * applications to know about for stats or debugging purposes.
     */
    STAT_EVENT: string;
    /**
     * An event that fires when POST requests complete successfully, indicating
     * the size of the POST and the round trip time.
     */
    TIMING_EVENT: string;
};
/**
 * Types of events which reveal information about the reachability of the
 * server.
 */
export declare enum ServerReachability {
    REQUEST_MADE = 1,
    REQUEST_SUCCEEDED = 2,
    REQUEST_FAILED = 3,
    BACK_CHANNEL_ACTIVITY = 4
}
/**
 * Event class for SERVER_REACHABILITY_EVENT.
 */
export declare class ServerReachabilityEvent extends eventsEvent {
    /**
     * Event class for SERVER_REACHABILITY_EVENT.
     * @param target The stat event target for the channel.
     * @param reachabilityType The reachability event type.
     */
    constructor(target: EventTarget | null, reachabilityType: ServerReachability | null);
    private noStructuralTyping_closure_goog_labs_net_webchannel_requeststats_ServerReachabilityEvent;
    reachabilityType: ServerReachability | null;
}
/**
 * Notify the channel that a particular fine grained network event has occurred.
 * Should be considered package-private.
 * @param reachabilityType The reachability event type.
 */
export declare function notifyServerReachabilityEvent(reachabilityType: ServerReachability | null): void;
/**
 * Enum that identifies events for statistics that are interesting to track.
 */
export declare enum Stat {
    CONNECT_ATTEMPT = 0,
    ERROR_NETWORK = 1,
    ERROR_OTHER = 2,
    TEST_STAGE_ONE_START = 3,
    TEST_STAGE_TWO_START = 4,
    TEST_STAGE_TWO_DATA_ONE = 5,
    TEST_STAGE_TWO_DATA_TWO = 6,
    TEST_STAGE_TWO_DATA_BOTH = 7,
    TEST_STAGE_ONE_FAILED = 8,
    TEST_STAGE_TWO_FAILED = 9,
    PROXY = 10,
    NOPROXY = 11,
    REQUEST_UNKNOWN_SESSION_ID = 12,
    REQUEST_BAD_STATUS = 13,
    REQUEST_INCOMPLETE_DATA = 14,
    REQUEST_BAD_DATA = 15,
    REQUEST_NO_DATA = 16,
    REQUEST_TIMEOUT = 17,
    BACKCHANNEL_MISSING = 18,
    BACKCHANNEL_DEAD = 19,
    BROWSER_OFFLINE = 20
}
/**
 * Event class for STAT_EVENT.
 */
export declare class StatEvent extends eventsEvent {
    /**
     * Event class for STAT_EVENT.
     * @param eventTarget The stat event target for the channel.
     * @param stat The stat.
     */
    constructor(eventTarget: EventTarget | null, stat: Stat | null);
    private noStructuralTyping_closure_goog_labs_net_webchannel_requeststats_StatEvent;
    /**
     * The stat
     */
    stat: Stat | null;
}
/**
 * Returns the singleton event target for stat events.
 * @return The event target for stat events.
 */
export declare function getStatEventTarget(): EventTarget;
/**
 * Helper function to call the stat event callback.
 * @param stat The stat.
 */
export declare function notifyStatEvent(stat: Stat | null): void;
/**
 * Event class for requestStats.Event.TIMING_EVENT
 */
export declare class TimingEvent extends eventsEvent {
    /**
     * Event class for requestStats.Event.TIMING_EVENT
     * @param target The stat event target for the channel.
     * @param size The number of characters in the POST data.
     * @param rtt The total round trip time from POST to response in MS.
     * @param retries The number of times the POST had to be retried.
     */
    constructor(target: EventTarget | null, size: number, rtt: number, retries: number);
    private noStructuralTyping_closure_goog_labs_net_webchannel_requeststats_TimingEvent;
    size: number;
    rtt: number;
    retries: number;
}
/**
 * Helper function to notify listeners about POST request performance.
 * @param size Number of characters in the POST data.
 * @param rtt The amount of time from POST start to response.
 * @param retries The number of times the POST had to be retried.
 */
export declare function notifyTimingEvent(size: number, rtt: number, retries: number): void;
/**
 * Allows the application to set an execution hooks for when a channel
 * starts processing requests. This is useful to track timing or logging
 * special information. The function takes no parameters and return void.
 * @param startHook The function for the start hook.
 */
export declare function setStartThreadExecutionHook(startHook: Function | null): void;
/**
 * Allows the application to set an execution hooks for when a channel
 * stops processing requests. This is useful to track timing or logging
 * special information. The function takes no parameters and return void.
 * @param endHook The function for the end hook.
 */
export declare function setEndThreadExecutionHook(endHook: Function | null): void;
/**
 * Helper function to call the start hook
 */
export declare function onStartExecution(): void;
/**
 * Helper function to call the end hook
 */
export declare function onEndExecution(): void;
/**
 * Wrapper around SafeTimeout which calls the start and end execution hooks
 * with a try...finally block.
 * @param fn The callback function.
 * @param ms The time in MS for the timer.
 * @return The ID of the timer.
 */
export declare function setTimeout(fn: Function | null, ms: number): number;
