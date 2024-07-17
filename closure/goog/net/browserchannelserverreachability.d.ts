/**
 * Types of events which reveal information about the reachability of the
 * server.
 */
declare enum ServerReachability {
    REQUEST_MADE = 1,
    REQUEST_SUCCEEDED = 2,
    REQUEST_FAILED = 3,
    BACK_CHANNEL_ACTIVITY = 4
}
export { ServerReachability };
