import { Uri } from '../../../uri/uri.js';
import * as maps from '../../../collections/maps.js';
import { Channel } from './channel.js';
import { ChannelRequest } from './channelrequest.js';
import { ConnectionState } from './connectionstate.js';
import { ForwardChannelRequestPool } from './forwardchannelrequestpool.js';
import { WebChannelDebug } from './webchanneldebug.js';
import { Wire } from './wire.js';
import { WebChannel } from '../webchannel.js';
import { XhrIo } from '../../../net/xhrio.js';
/**
 * This WebChannel implementation is branched off goog.net.BrowserChannel
 * for now. Ongoing changes to goog.net.BrowserChannel will be back
 * ported to this implementation as needed.
 */
export declare class WebChannelBase implements Channel {
    /**
     * This WebChannel implementation is branched off goog.net.BrowserChannel
     * for now. Ongoing changes to goog.net.BrowserChannel will be back
     * ported to this implementation as needed.
     * @param opt_options Configuration for the WebChannel instance.
     * @param opt_clientVersion An application-specific version number that is sent to the server when connected.
     * @param opt_conn Previously determined connection conditions.
     */
    constructor(opt_options?: WebChannel.Options, opt_clientVersion?: number, opt_conn?: ConnectionState);
    private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbase_WebChannelBase;
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
     * A guess at a cutoff at which to no longer assume the backchannel is dead
     * when we are slow to receive data. Number in bytes.
     *
     * Assumption: The worst bandwidth we work on is 50 kilobits/sec
     * 50kbits/sec * (1 byte / 8 bits) * 6 sec dead backchannel timeout
     */
    static OUTSTANDING_DATA_BACKCHANNEL_RETRY_CUTOFF: number;
    getServerVersion(): number;
    getForwardChannelRequestPool(): ForwardChannelRequestPool;
    getWireCodec(): object;
    /**
     * Returns the logger.
     * @return The channel debug object.
     */
    getChannelDebug(): WebChannelDebug;
    /**
     * Sets the logger.
     * @param channelDebug The channel debug object.
     */
    setChannelDebug(channelDebug: WebChannelDebug): void;
    /**
     * Starts the channel. This initiates connections to the server.
     * @param channelPath The path for the channel connection.
     * @param opt_extraParams Extra parameter keys and values to add to the requests.
     * @param opt_oldSessionId Session ID from a previous session.
     * @param opt_oldArrayId The last array ID from a previous session.
     */
    connect(channelPath: string, opt_extraParams?: object, opt_oldSessionId?: string, opt_oldArrayId?: number): void;
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
     * Returns the extra HTTP headers to add to the init requests
     * sent to the server.
     * @return The HTTP headers, or null.
     */
    getInitHeaders(): object | null;
    /**
     * Sets extra HTTP headers to add to the init requests sent to the server.
     * @param initHeaders The HTTP headers, or null.
     */
    setInitHeaders(initHeaders: object | null): void;
    /**
     * Sets the URL param name to overwrite custom HTTP headers.
     * @param httpHeadersOverwriteParam The URL param name.
     */
    setHttpHeadersOverwriteParam(httpHeadersOverwriteParam: string): void;
    setHttpSessionIdParam(httpSessionIdParam: any): any;
    getHttpSessionIdParam(): any;
    setHttpSessionId(httpSessionId: any): any;
    getHttpSessionId(): any;
    /**
     * Sets the throttle for handling onreadystatechange events for the request.
     * @param throttle The throttle in ms.  A value of zero indicates no throttle.
     */
    setReadyStateChangeThrottle(throttle: number): void;
    /**
     * Sets whether cross origin requests are supported for the channel.
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
    getHandler(): WebChannelBase.Handler | null;
    /**
     * Sets the handler used for channel callback events.
     * @param handler The handler to set.
     */
    setHandler(handler: WebChannelBase.Handler | null): void;
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
     * Returns whether the channel is buffered or not.  This may be
     * queried in the WebChannelBase.okToMakeRequest() callback.
     * @return Whether the channel is buffered.
     */
    isBuffered(): boolean;
    /**
     * Returns whether streaming mode is allowed. In certain debugging situations,
     * it's useful for the application to have a way to disable streaming mode for a
     * user.
     * @return Whether streaming mode is allowed.
     */
    getAllowStreamingMode(): boolean;
    /**
     * Sets whether streaming mode is allowed. In certain debugging situations, it's
     * useful for the application to have a way to disable streaming mode for a
     * user.
     * @param allowStreamingMode Whether streaming mode is allowed.
     */
    setAllowStreamingMode(allowStreamingMode: boolean): void;
    /**
     * Sends a request to the server. The format of the request is a Map data
     * structure of key/value pairs. These maps are then encoded in a format
     * suitable for the wire and then reconstituted as a Map data structure that
     * the server can process.
     * @param map The map to send.
     * @param opt_context The context associated with the map.
     */
    sendMap(map: object | maps.MapLike, opt_context?: object): void;
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
    isClosed(): any;
    /**
     * Returns the channel state.
     * @return The current state of the channel.
     */
    getState(): WebChannelBase.State | null;
    getLastResponseHeaders(): {
        [key: string]: string;
    } | undefined;
    getLastStatusCode(): number;
    getLastArrayId(): number;
    /**
     * Returns whether there are outstanding requests servicing the channel.
     * @return true if there are outstanding requests.
     */
    hasOutstandingRequests(): boolean;
    onFirstByteReceived(request: any, responseText: any): any;
    onRequestData(request: any, responseText: any): any;
    /**
     * Decides which host prefix should be used, if any.  If there is a handler,
     * allows the handler to validate a host prefix provided by the server, and
     * optionally override it.
     * @param serverHostPrefix The host prefix provided by the server.
     * @return The host prefix to actually use, if any. Will return null if the use of host prefixes was disabled via setAllowHostPrefix().
     */
    correctHostPrefix(serverHostPrefix: string | null): string | null;
    onRequestComplete(request: any): any;
    /**
     *
     * @param baseDelayMs The base part of the retry delay, in ms.
     * @param delaySeedMs A random delay between 0 and this is added to the base part.
     */
    setRetryDelay(baseDelayMs: number, delaySeedMs: number): void;
    getNonAckedMaps(): Wire.QueuedMap[];
    getForwardChannelUri(path: any): any;
    getConnectionState(): any;
    getBackChannelUri(hostPrefix: any, path: any): any;
    createDataUri(hostPrefix: any, path: any, opt_overridePort: any): any;
    /**
     *
     * @param hostPrefix The host prefix, if we need an XhrIo object capable of calling a secondary domain.
     * @param isStreaming Whether or not fetch/streams are enabled for the underlying HTTP request.
     * @return A new XhrIo object.
     */
    createXhrIo(hostPrefix: string | null, isStreaming?: boolean): XhrIo;
    isActive(): any;
    shouldUseSecondaryDomains(): any;
    /**
     * Sets (overwrites) the forward channel flush callback.
     * @param callback The callback to be invoked.
     */
    setForwardChannelFlushCallback(callback: () => any): void;
    /**
     * Whether or not this channel uses WHATWG Fetch/streams.
     */
    usesFetchStreams(): boolean;
}
export declare namespace WebChannelBase {
    /**
     * Enum type for the channel state machine.
     */
    enum State {
        CLOSED = 0,
        INIT = 1,
        OPENING = 2,
        OPENED = 3
    }
    /**
     * Enum type for identifying an error.
     */
    enum Error {
        OK = 0,
        REQUEST_FAILED = 2,
        LOGGED_OUT = 4,
        NO_DATA = 5,
        UNKNOWN_SESSION_ID = 6,
        STOP = 7,
        NETWORK = 8,
        BAD_DATA = 10,
        BAD_RESPONSE = 11
    }
    /**
     * Internal enum type for the two channel types.
     */
    enum ChannelType_ {
        FORWARD_CHANNEL = 1,
        BACK_CHANNEL = 2
    }
    /**
     * Abstract base class for the channel handler
     */
    class Handler {
        /**
         * Abstract base class for the channel handler
         */
        constructor();
        private noStructuralTyping_closure_goog_labs_net_webchannel_webchannelbase_Handler;
        /**
         * Callback handler for when a batch of response arrays is received from the
         * server. When null, batched dispatching is disabled.
         */
        channelHandleMultipleArrays(): void;
        /**
         * Whether it's okay to make a request to the server. A handler can return
         * false if the channel should fail. For example, if the user has logged out,
         * the handler may want all requests to fail immediately.
         * @param channel The channel.
         * @return An error code. The code should return WebChannelBase.Error.OK to indicate it's okay. Any other error code will cause a failure.
         */
        okToMakeRequest(channel: WebChannelBase | null): WebChannelBase.Error | null;
        /**
         * Indicates the WebChannel has successfully negotiated with the server
         * and can now send and receive data.
         * @param channel The channel.
         */
        channelOpened(channel: WebChannelBase | null): void;
        /**
         * New input is available for the application to process.
         * @param channel The channel.
         * @param array The data array.
         */
        channelHandleArray(channel: WebChannelBase | null, array: any[] | object): void;
        /**
         * Indicates messages that have been successfully sent on the channel.
         * @param channel The channel.
         * @param request The request object that contains the pending messages that have been successfully delivered to the server.
         */
        channelSuccess(channel: WebChannelBase | null, request: ChannelRequest): void;
        /**
         * Indicates an error occurred on the WebChannel.
         * @param channel The channel.
         * @param error The error code.
         */
        channelError(channel: WebChannelBase | null, error: WebChannelBase.Error | null): void;
        /**
         * Indicates the WebChannel is closed. Also notifies about which maps,
         * if any, that may not have been delivered to the server.
         * @param channel The channel.
         * @param opt_pendingMaps The array of pending maps, which may or may not have been delivered to the server.
         * @param opt_undeliveredMaps The array of undelivered maps, which have definitely not been delivered to the server.
         */
        channelClosed(channel: WebChannelBase | null, opt_pendingMaps?: (Wire.QueuedMap | null)[] | null, opt_undeliveredMaps?: (Wire.QueuedMap | null)[] | null): void;
        /**
         * Gets any parameters that should be added at the time another connection is
         * made to the server.
         * @param channel The channel.
         * @return Extra parameter keys and values to add to the requests.
         */
        getAdditionalParams(channel: WebChannelBase | null): object;
        /**
         * Gets the URI of an image that can be used to test network connectivity.
         * @param channel The channel.
         * @return A custom URI to load for the network test.
         */
        getNetworkTestImageUri(channel: WebChannelBase | null): Uri | null;
        /**
         * Gets whether this channel is currently active. This is used to determine the
         * length of time to wait before retrying.
         * @param channel The channel.
         * @return Whether the channel is currently active.
         */
        isActive(channel: WebChannelBase | null): boolean;
        /**
         * Called by the channel if enumeration of the map throws an exception.
         * @param channel The channel.
         * @param map The map that can't be enumerated.
         */
        badMapError(channel: WebChannelBase | null, map: object | null): void;
        /**
         * Allows the handler to override a host prefix provided by the server. Will
         * be called whenever the channel has received such a prefix and is considering
         * its use.
         * @param serverHostPrefix The host prefix provided by the server.
         * @return The host prefix the client should use.
         */
        correctHostPrefix(serverHostPrefix: string | null): string | null;
    }
}
