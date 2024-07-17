import { Uri } from '../uri/uri.js';
import { Event } from '../events/event.js';
import { EventTarget } from '../events/eventtarget.js';
import { BrowserTestChannel } from './browsertestchannel.js';
import { ChannelDebug } from './channeldebug.js';
import { ChannelRequest } from './channelrequest.js';
import { XhrIo } from './xhrio.js';
import { ServerReachability } from './browserchannelserverreachability.js';
import * as hooks from './browserchannelexecutionhooks.js';
import * as stats from './browserchannelstats.js';
import type { Parser } from '../string/parser.js';
import type { Map } from '../structs/map.js';
/**
 * Encapsulates the logic for a single BrowserChannel.
 */
export declare class BrowserChannel {
    /**
     * Encapsulates the logic for a single BrowserChannel.
     * @param opt_clientVersion An application-specific version number that is sent to the server when connected.
     * @param opt_firstTestResults Previously determined results of the first browser channel test.
     * @param opt_secondTestResults Previously determined results of the second browser channel test.
     * @param opt_asyncTest Whether to perform the test requests asynchronously. While the test is performed, we'll assume the worst (connection is buffered), in order to avoid delaying the connection until the test is performed.
     */
    constructor(opt_clientVersion?: string, opt_firstTestResults?: string[] | null, opt_secondTestResults?: boolean, opt_asyncTest?: boolean);
    private noStructuralTyping_closure_goog_net_browserchannel_BrowserChannel;
    /**
     * Alias the internal Stat module to be used from the main BrowserChannel
     * module.
     */
    static Stat: typeof stats.Stat;
    /**
     * Alias getStatEventTarget as it used to be provided from the main
     * BrowserChannel module.
     */
    static getStatEventTarget: EventTarget;
    /**
     * The latest protocol version that this class supports. We request this version
     * from the server when opening the connection. Should match
     * com.google.net.browserchannel.BrowserChannel.LATEST_CHANNEL_VERSION.
     */
    static LATEST_CHANNEL_VERSION: number;
    /**
     * The timeout in milliseconds for a forward channel request.
     */
    static FORWARD_CHANNEL_RETRY_TIMEOUT: number;
    /**
     * Maximum number of attempts to connect to the server for back channel
     * requests.
     */
    static BACK_CHANNEL_MAX_RETRIES: number;
    /**
     * A number in MS of how long we guess the maxmium amount of time a round trip
     * to the server should take. In the future this could be substituted with a
     * real measurement of the RTT.
     */
    static RTT_ESTIMATE: number;
    /**
     * When retrying for an inactive channel, we will multiply the total delay by
     * this number.
     */
    static INACTIVE_CHANNEL_RETRY_FACTOR: number;
    /**
     * Events fired by BrowserChannel and associated objects
     */
    static Event: {};
    static StatEvent: typeof stats.StatEvent;
    static ServerReachability: typeof ServerReachability;
    /**
     * A guess at a cutoff at which to no longer assume the backchannel is dead
     * when we are slow to receive data. Number in bytes.
     *
     * Assumption: The worst bandwidth we work on is 50 kilobits/sec
     * 50kbits/sec * (1 byte / 8 bits) * 6 sec dead backchannel timeout
     */
    static OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF: number;
    /**
     * Returns the browserchannel logger.
     * @return The channel debug object.
     */
    getChannelDebug(): ChannelDebug;
    /**
     * Set the browserchannel logger.
     * TODO(user): Add interface for channel loggers or remove this function.
     * @param channelDebug The channel debug object.
     */
    setChannelDebug(channelDebug: ChannelDebug | null): void;
    /**
     * Alias for execution hooks. These are currently available as top-level
     * aliases (see below), but users should prefer to use them via this alias
     * instead.
     */
    static Hooks: typeof hooks;
    /**
     * Alias setStartThreadExecutionHook from the internal Hooks module, as it was
     * previously available as a top-level export here.
     */
    static setStartThreadExecutionHook: (startHook: Function | null) => void;
    /**
     * Alias setEndThreadExecutionHook from the internal Hooks module, as it was
     * previously available as a top-level export here.
     */
    static setEndThreadExecutionHook: typeof hooks.setEndThreadExecutionHook;
    /**
     * Alias createChannelRequest from the internal Hooks module, as it was
     * previously available as a top-level export here.
     */
    static createChannelRequest: typeof ChannelRequest.createChannelRequest;
    /**
     * Starts the channel. This initiates connections to the server.
     * @param testPath The path for the test connection.
     * @param channelPath The path for the channel connection.
     * @param opt_extraParams Extra parameter keys and values to add to the requests.
     * @param opt_oldSessionId Session ID from a previous session.
     * @param opt_oldArrayId The last array ID from a previous session.
     */
    connect(testPath: string, channelPath: string, opt_extraParams?: object | null, opt_oldSessionId?: string, opt_oldArrayId?: number): void;
    /**
     * Disconnects and closes the channel.
     */
    disconnect(): void;
    /**
     * Returns the session id of the channel. Only available after the
     * channel has been opened.
     * @return Session ID.
     */
    getSessionId(): string;
    /**
     * Returns the extra HTTP headers to add to all the requests sent to the server.
     * @return The HTTP headers, or null.
     */
    getExtraHeaders(): object | null;
    /**
     * Sets extra HTTP headers to add to all the requests sent to the server.
     * @param extraHeaders The HTTP headers, or null.
     */
    setExtraHeaders(extraHeaders: object | null): void;
    /**
     * Sets the throttle for handling onreadystatechange events for the request.
     * @param throttle The throttle in ms.  A value of zero indicates no throttle.
     */
    setReadyStateChangeThrottle(throttle: number): void;
    /**
     * Sets whether cross origin requests are supported for the browser channel.
     *
     * Setting this allows the creation of requests to secondary domains and
     * sends XHRs with the CORS withCredentials bit set to true.
     *
     * In order for cross-origin requests to work, the server will also need to set
     * CORS response headers as per:
     * https://developer.mozilla.org/en-US/docs/HTTP_access_control
     *
     * See {@link XhrIo#setWithCredentials}.
     * @param supportCrossDomain Whether cross domain XHRs are supported.
     */
    setSupportsCrossDomainXhrs(supportCrossDomain: boolean): void;
    /**
     * Returns the handler used for channel callback events.
     * @return The handler.
     */
    getHandler(): BrowserChannel.Handler | null;
    /**
     * Sets the handler used for channel callback events.
     * @param handler The handler to set.
     */
    setHandler(handler: BrowserChannel.Handler | null): void;
    /**
     * Returns whether the channel allows the use of a subdomain. There may be
     * cases where this isn't allowed.
     * @return Whether a host prefix is allowed.
     */
    getAllowHostPrefix(): boolean;
    /**
     * Sets whether the channel allows the use of a subdomain. There may be cases
     * where this isn't allowed, for example, logging in with troutboard where
     * using a subdomain causes Apache to force the user to authenticate twice.
     * @param allowHostPrefix Whether a host prefix is allowed.
     */
    setAllowHostPrefix(allowHostPrefix: boolean): void;
    /**
     * Returns whether the channel is buffered or not. This state is valid for
     * querying only after the test connection has completed. This may be
     * queried in the BrowserChannel.okToMakeRequest() callback.
     * A channel may be buffered if the test connection determines that
     * a chunked response could not be sent down within a suitable time.
     * @return Whether the channel is buffered.
     */
    isBuffered(): boolean;
    /**
     * Sets whether the channel is buffered or not. This state is usually updated in
     * BrowserChannel.testConnectionFinished, but can be set manually here.
     * This updated status will be reflected in subsequent connections and requests
     * to the channel.
     * NOTE: This should ONLY be used by clients that are certain of their
     * connection status, i.e. that have performed additional test channels. Setting
     * the wrong buffered status on a client can result in undeliverable responses
     * from the server.
     * @param isBuffered Whether the channel is buffered.
     */
    setIsBuffered(isBuffered: boolean): void;
    /**
     * Returns whether chunked mode is allowed. In certain debugging situations,
     * it's useful for the application to have a way to disable chunked mode for a
     * user.
     * @return Whether chunked mode is allowed.
     */
    getAllowChunkedMode(): boolean;
    /**
     * Sets whether chunked mode is allowed. In certain debugging situations, it's
     * useful for the application to have a way to disable chunked mode for a user.
     * @param allowChunkedMode Whether chunked mode is allowed.
     */
    setAllowChunkedMode(allowChunkedMode: boolean): void;
    /**
     * Sends a request to the server. The format of the request is a Map data
     * structure of key/value pairs. These maps are then encoded in a format
     * suitable for the wire and then reconstituted as a Map data structure that
     * the server can process.
     * @param map The map to send.
     * @param opt_context The context associated with the map.
     */
    sendMap(map: object | null, opt_context?: object | null): void;
    /**
     * When set to true, this changes the behavior of the forward channel so it
     * will not retry requests; it will fail after one network failure, and if
     * there was already one network failure, the request will fail immediately.
     * @param failFast Whether or not to fail fast.
     */
    setFailFast(failFast: boolean): void;
    getForwardChannelMaxRetries(): number;
    /**
     * Sets the maximum number of attempts to connect to the server for forward
     * channel requests.
     * @param retries The maximum number of attempts.
     */
    setForwardChannelMaxRetries(retries: number): void;
    /**
     * Sets the timeout for a forward channel request.
     * @param timeoutMs The timeout in milliseconds.
     */
    setForwardChannelRequestTimeout(timeoutMs: number): void;
    getBackChannelMaxRetries(): number;
    /**
     * Returns whether the channel is closed
     * @return true if the channel is closed.
     */
    isClosed(): boolean;
    /**
     * Returns the browser channel state.
     * @return The current state of the browser channel.
     */
    getState(): BrowserChannel.State | null;
    /**
     * Return the last status code received for a request.
     * @return The last status code received for a request.
     */
    getLastStatusCode(): number;
    getLastArrayId(): number;
    /**
     * Returns whether there are outstanding requests servicing the channel.
     * @return true if there are outstanding requests.
     */
    hasOutstandingRequests(): boolean;
    /**
     * Sets a new parser for the response payload.
     * @param parser Parser.
     */
    setParser(parser: Parser): void;
    /**
     * Callback from BrowserTestChannel for when the channel is finished.
     * @param testChannel The BrowserTestChannel.
     * @param useChunked Whether we can chunk responses.
     */
    testConnectionFinished(testChannel: BrowserTestChannel | null, useChunked: boolean): void;
    /**
     * Callback from BrowserTestChannel for when the channel has an error.
     * @param testChannel The BrowserTestChannel.
     * @param errorCode The error code of the failure.
     */
    testConnectionFailure(testChannel: BrowserTestChannel | null, errorCode: ChannelRequest.Error | null): void;
    /**
     * Callback from BrowserTestChannel for when the channel is blocked.
     * @param testChannel The BrowserTestChannel.
     */
    testConnectionBlocked(testChannel: BrowserTestChannel | null): void;
    /**
     * Callback from ChannelRequest for when new data is received
     * @param request The request object.
     * @param responseText The text of the response.
     */
    onRequestData(request: ChannelRequest | null, responseText: string): void;
    /**
     * Decides which host prefix should be used, if any.  If there is a handler,
     * allows the handler to validate a host prefix provided by the server, and
     * optionally override it.
     * @param serverHostPrefix The host prefix provided by the server.
     * @return The host prefix to actually use, if any. Will return null if the use of host prefixes was disabled via setAllowHostPrefix().
     */
    correctHostPrefix(serverHostPrefix: string | null): string | null;
    /**
     * Callback from ChannelRequest that indicates a request has completed.
     * @param request The request object.
     */
    onRequestComplete(request: ChannelRequest | null): void;
    /**
     *
     * @param baseDelayMs The base part of the retry delay, in ms.
     * @param delaySeedMs A random delay between 0 and this is added to the base part.
     */
    setRetryDelay(baseDelayMs: number, delaySeedMs: number): void;
    /**
     * Gets the Uri used for the connection that sends data to the server.
     * @param path The path on the host.
     * @return The forward channel URI.
     */
    getForwardChannelUri(path: string): Uri;
    /**
     * Gets the results for the first browser channel test
     * @return The results.
     */
    getFirstTestResults(): string[] | null;
    /**
     * Gets the results for the second browser channel test
     * @return The results. True -> buffered connection, False -> unbuffered, null -> unknown.
     */
    getSecondTestResults(): boolean | null;
    /**
     * Gets the Uri used for the connection that receives data from the server.
     * @param hostPrefix The host prefix.
     * @param path The path on the host.
     * @return The back channel URI.
     */
    getBackChannelUri(hostPrefix: string | null, path: string): Uri;
    /**
     * Creates a data Uri applying logic for secondary hostprefix, port
     * overrides, and versioning.
     * @param hostPrefix The host prefix.
     * @param path The path on the host (may be absolute or relative).
     * @param opt_overridePort Optional override port.
     * @return The data URI.
     */
    createDataUri(hostPrefix: string | null, path: string, opt_overridePort?: number): Uri;
    /**
     * Called when BC needs to create an XhrIo object.  Override in a subclass if
     * you need to customize the behavior, for example to enable the creation of
     * XHR's capable of calling a secondary domain. Will also allow calling
     * a secondary domain if withCredentials (CORS) is enabled.
     * @param hostPrefix The host prefix, if we need an XhrIo object capable of calling a secondary domain.
     * @return A new XhrIo object.
     */
    createXhrIo(hostPrefix: string | null): XhrIo;
    /**
     * Gets whether this channel is currently active. This is used to determine the
     * length of time to wait before retrying. This call delegates to the handler.
     * @return Whether the channel is currently active.
     */
    isActive(): boolean;
    /**
     * Notify the channel that a particular fine grained network event has occurred.
     * Should be considered package-private.
     * @param reachabilityType The reachability event type.
     */
    notifyServerReachabilityEvent(reachabilityType: ServerReachability | null): void;
    /**
     * Helper function to notify listeners about POST request performance.
     * @param size Number of characters in the POST data.
     * @param rtt The amount of time from POST start to response.
     * @param retries The number of times the POST had to be retried.
     */
    static notifyTimingEvent(size: number, rtt: number, retries: number): void;
    /**
     * Determines whether to use a secondary domain when the server gives us
     * a host prefix. This allows us to work around browser per-domain
     * connection limits.
     *
     * Currently, we  use secondary domains when using Trident's ActiveXObject,
     * because it supports cross-domain requests out of the box.  Note that in IE10
     * we no longer use ActiveX since it's not supported in Metro mode and IE10
     * supports XHR streaming.
     *
     * If you need to use secondary domains on other browsers and IE10,
     * you have two choices:
     * 1) If you only care about browsers that support CORS
     * (https://developer.mozilla.org/en-US/docs/HTTP_access_control), you
     * can use {@link #setSupportsCrossDomainXhrs} and set the appropriate
     * CORS response headers on the server.
     * 2) Or, override this method in a subclass, and make sure that those
     * browsers use some messaging mechanism that works cross-domain (e.g
     * iframes and window.postMessage).
     * @return Whether to use secondary domains.
     */
    shouldUseSecondaryDomains(): boolean;
    /**
     * A LogSaver that can be used to accumulate all the debug logs for
     * BrowserChannels so they can be sent to the server when a problem is
     * detected.
     */
    static LogSaver: {};
}
export declare namespace BrowserChannel {
    /**
     * Simple container class for a (mapId, map) pair.
     */
    class QueuedMap {
        /**
         * Simple container class for a (mapId, map) pair.
         * @param mapId The id for this map.
         * @param map The map itself.
         * @param opt_context The context associated with the map.
         */
        constructor(mapId: number, map: object | Map | null, opt_context?: object | null);
        private noStructuralTyping_closure_goog_net_browserchannel_QueuedMap;
        /**
         * The id for this map.
         */
        mapId: number;
        /**
         * The map itself.
         */
        map: object | null;
        /**
         * The context for the map.
         */
        context: object | null;
    }
    /**
     * Enum type for the browser channel state machine.
     */
    enum State {
        CLOSED = 0,
        INIT = 1,
        OPENING = 2,
        OPENED = 3
    }
    /**
     * Enum type for identifying a BrowserChannel error.
     */
    enum Error {
        OK = 0,
        REQUEST_FAILED = 2,
        LOGGED_OUT = 4,
        NO_DATA = 5,
        UNKNOWN_SESSION_ID = 6,
        STOP = 7,
        NETWORK = 8,
        BLOCKED = 9,
        BAD_DATA = 10,
        BAD_RESPONSE = 11,
        ACTIVE_X_BLOCKED = 12
    }
    /**
     * Internal enum type for the two browser channel channel types.
     */
    enum ChannelType_ {
        FORWARD_CHANNEL = 1,
        BACK_CHANNEL = 2
    }
    /**
     * Event class for BrowserChannel.Event.TIMING_EVENT
     */
    class TimingEvent extends Event {
        /**
         * Event class for BrowserChannel.Event.TIMING_EVENT
         * @param target The stat event target for the browser channel.
         * @param size The number of characters in the POST data.
         * @param rtt The total round trip time from POST to response in MS.
         * @param retries The number of times the POST had to be retried.
         */
        constructor(target: EventTarget | null, size: number, rtt: number, retries: number);
        private noStructuralTyping_closure_goog_net_browserchannel_TimingEvent;
        size: number;
        rtt: number;
        retries: number;
    }
    /**
     * Event class for BrowserChannel.Event.SERVER_REACHABILITY_EVENT.
     */
    class ServerReachabilityEvent extends Event {
        /**
         * Event class for BrowserChannel.Event.SERVER_REACHABILITY_EVENT.
         * @param target The stat event target for the browser channel.
         * @param reachabilityType The reachability event type.
         */
        constructor(target: EventTarget | null, reachabilityType: ServerReachability | null);
        private noStructuralTyping_closure_goog_net_browserchannel_ServerReachabilityEvent;
        reachabilityType: ServerReachability | null;
    }
    /**
     * Abstract base class for the browser channel handler
     */
    class Handler {
        /**
         * Abstract base class for the browser channel handler
         */
        constructor();
        private noStructuralTyping_closure_goog_net_browserchannel_Handler;
        /**
         * Callback handler for when a batch of response arrays is received from the
         * server.
         */
        channelHandleMultipleArrays(): void;
        /**
         * Whether it's okay to make a request to the server. A handler can return
         * false if the channel should fail. For example, if the user has logged out,
         * the handler may want all requests to fail immediately.
         * @param browserChannel The browser channel.
         * @return An error code. The code should return BrowserChannel.Error.OK to indicate it's okay. Any other error code will cause a failure.
         */
        okToMakeRequest(browserChannel: BrowserChannel | null): BrowserChannel.Error | null;
        /**
         * Indicates the BrowserChannel has successfully negotiated with the server
         * and can now send and receive data.
         * @param browserChannel The browser channel.
         */
        channelOpened(browserChannel: BrowserChannel | null): void;
        /**
         * New input is available for the application to process.
         * @param browserChannel The browser channel.
         * @param array The data array.
         */
        channelHandleArray(browserChannel: BrowserChannel | null, array: any[] | null): void;
        /**
         * Indicates maps were successfully sent on the BrowserChannel.
         * @param browserChannel The browser channel.
         * @param deliveredMaps The array of maps that have been delivered to the server. This is a direct reference to the internal BrowserChannel array, so a copy should be made if the caller desires a reference to the data.
         */
        channelSuccess(browserChannel: BrowserChannel | null, deliveredMaps: (BrowserChannel.QueuedMap | null)[] | null): void;
        /**
         * Indicates an error occurred on the BrowserChannel.
         * @param browserChannel The browser channel.
         * @param error The error code.
         */
        channelError(browserChannel: BrowserChannel | null, error: BrowserChannel.Error | null): void;
        /**
         * Indicates the BrowserChannel is closed. Also notifies about which maps,
         * if any, that may not have been delivered to the server.
         * @param browserChannel The browser channel.
         * @param opt_pendingMaps The array of pending maps, which may or may not have been delivered to the server.
         * @param opt_undeliveredMaps The array of undelivered maps, which have definitely not been delivered to the server.
         */
        channelClosed(browserChannel: BrowserChannel | null, opt_pendingMaps?: (BrowserChannel.QueuedMap | null)[] | null, opt_undeliveredMaps?: (BrowserChannel.QueuedMap | null)[] | null): void;
        /**
         * Gets any parameters that should be added at the time another connection is
         * made to the server.
         * @param browserChannel The browser channel.
         * @return Extra parameter keys and values to add to the requests.
         */
        getAdditionalParams(browserChannel: BrowserChannel | null): object;
        /**
         * Gets the URI of an image that can be used to test network connectivity.
         * @param browserChannel The browser channel.
         * @return A custom URI to load for the network test.
         */
        getNetworkTestImageUri(browserChannel: BrowserChannel | null): Uri | null;
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         * @param browserChannel The browser channel.
         * @return Whether the channel is currently active.
         */
        isActive(browserChannel: BrowserChannel | null): boolean;
        /**
         * Called by the channel if enumeration of the map throws an exception.
         * @param browserChannel The browser channel.
         * @param map The map that can't be enumerated.
         */
        badMapError(browserChannel: BrowserChannel | null, map: object | null): void;
        /**
         * Allows the handler to override a host prefix provided by the server.  Will
         * be called whenever the channel has received such a prefix and is considering
         * its use.
         * @param serverHostPrefix The host prefix provided by the server.
         * @return The host prefix the client should use.
         */
        correctHostPrefix(serverHostPrefix: string | null): string | null;
    }
}
