import { ChannelRequest } from './channelrequest.js';
import { XhrIo } from './xhrio.js';
import { ServerReachability } from './browserchannelserverreachability.js';
import { Parser } from '../string/parser.js';
import type { BrowserChannel } from './browserchannel.js';
import type { ChannelDebug } from './channeldebug.js';
/**
 * Encapsulates the logic for a single BrowserTestChannel.
 */
export declare class BrowserTestChannel {
    /**
     * Encapsulates the logic for a single BrowserTestChannel.
     * @param channel The BrowserChannel that owns this test channel.
     * @param channelDebug A ChannelDebug to use for logging.
     */
    constructor(channel: BrowserChannel | null, channelDebug: ChannelDebug | null);
    private noStructuralTyping_closure_goog_net_browsertestchannel_BrowserTestChannel;
    /**
     * Sets extra HTTP headers to add to all the requests sent to the server.
     * @param extraHeaders The HTTP headers.
     */
    setExtraHeaders(extraHeaders: object | null): void;
    /**
     * Sets a new parser for the response payload.
     * @param parser Parser.
     */
    setParser(parser: Parser): void;
    /**
     * Starts the test channel. This initiates connections to the server.
     * @param path The relative uri for the test connection.
     */
    connect(path: string): void;
    /**
     * Factory method for XhrIo objects.
     * @param hostPrefix The host prefix, if we need an XhrIo object capable of calling a secondary domain.
     * @return New XhrIo object.
     */
    createXhrIo(hostPrefix: string | null): XhrIo;
    /**
     * Aborts the test channel.
     */
    abort(): void;
    /**
     * Returns whether the test channel is closed. The ChannelRequest object expects
     * this method to be implemented on its handler.
     * @return Whether the channel is closed.
     */
    isClosed(): boolean;
    /**
     * Callback from ChannelRequest for when new data is received
     * @param req The request object.
     * @param responseText The text of the response.
     */
    onRequestData(req: ChannelRequest | null, responseText: string): void;
    /**
     * Callback from ChannelRequest that indicates a request has completed.
     * @param req The request object.
     */
    onRequestComplete(req: ChannelRequest | null): void;
    /**
     * Returns the last status code received for a request.
     * @return The last status code received for a request.
     */
    getLastStatusCode(): number;
    shouldUseSecondaryDomains(): boolean;
    /**
     * Gets whether this channel is currently active. This is used to determine the
     * length of time to wait before retrying.
     * @param browserChannel The browser channel.
     * @return Whether the channel is currently active.
     */
    isActive(browserChannel: BrowserChannel | null): boolean;
    /**
     * Notifies the channel of a fine grained network event.
     * @param reachabilityType The reachability event type.
     */
    notifyServerReachabilityEvent(reachabilityType: ServerReachability | null): void;
}
export declare namespace BrowserTestChannel {
    /**
     * Enum type for the browser test channel state machine
     */
    enum State_ {
        INIT = 0,
        CHECKING_BLOCKED = 1,
        CONNECTION_TESTING = 2
    }
}
