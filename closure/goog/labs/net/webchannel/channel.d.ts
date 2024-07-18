import type { Uri } from '../../../uri/uri.js';
import type { ChannelRequest } from './channelrequest.js';
import type { ConnectionState } from './connectionstate.js';
import type { XhrIo } from '../../../net/xhrio.js';
/**
 * Core interface for WebChannelBase.
 */
export interface Channel {
    /**
     * Determines whether to use a secondary domain when the server gives us
     * a host prefix. This allows us to work around browser per-domain
     * connection limits.
     *
     * If you need to use secondary domains on different browsers and IE10,
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
     * Called when creating an XhrIo object.  Override in a subclass if
     * you need to customize the behavior, for example to enable the creation of
     * XHR's capable of calling a secondary domain. Will also allow calling
     * a secondary domain if withCredentials (CORS) is enabled.
     * @param hostPrefix The host prefix, if we need an XhrIo object capable of calling a secondary domain.
     * @param isStreaming Whether or not fetch/streams are enabled for the underlying HTTP request.
     * @return A new XhrIo object.
     */
    createXhrIo(hostPrefix: string | null, isStreaming?: boolean): XhrIo;
    /**
     * Callback from ChannelRequest that indicates a request has completed.
     * @param request The request object.
     */
    onRequestComplete(request: ChannelRequest): any;
    /**
     * Returns whether the channel is closed
     * @return true if the channel is closed.
     */
    isClosed(): boolean;
    /**
     * Callback from ChannelRequest for when new data is received
     * @param request The request object.
     * @param responseText The text of the response.
     */
    onRequestData(request: ChannelRequest | null, responseText: string): any;
    /**
     * Callback from ChannelRequest for when the first byte of response body has
     * been received. This is needed for detecting buffering proxies.
     * @param request The request object.
     * @param responseText The text of the response.
     */
    onFirstByteReceived(request: ChannelRequest, responseText: string): any;
    /**
     * Gets whether this channel is currently active. This is used to determine the
     * length of time to wait before retrying. This call delegates to the handler.
     * @return Whether the channel is currently active.
     */
    isActive(): boolean;
    /**
     * Not needed for testchannel.
     *
     * Gets the Uri used for the connection that sends data to the server.
     * @param path The path on the host.
     * @return The forward channel URI.
     */
    getForwardChannelUri(path: string): Uri | null;
    /**
     * Not needed for testchannel.
     *
     * Gets the Uri used for the connection that receives data from the server.
     * @param hostPrefix The host prefix.
     * @param path The path on the host.
     * @return The back channel URI.
     */
    getBackChannelUri(hostPrefix: string | null, path: string): Uri | null;
    /**
     * Not needed for testchannel.
     *
     * Allows the handler to override a host prefix provided by the server.  Will
     * be called whenever the channel has received such a prefix and is considering
     * its use.
     * @param serverHostPrefix The host prefix provided by the server.
     * @return The host prefix the client should use.
     */
    correctHostPrefix(serverHostPrefix: string | null): string | null;
    /**
     * Not needed for testchannel.
     *
     * Creates a data Uri applying logic for secondary hostprefix, port
     * overrides, and versioning.
     * @param hostPrefix The host prefix.
     * @param path The path on the host (may be absolute or relative).
     * @param opt_overridePort Optional override port.
     * @return The data URI.
     */
    createDataUri(hostPrefix: string | null, path: string, opt_overridePort?: number): Uri | null;
    /**
     * Not needed for testchannel.
     * Gets the result of previous connectivity tests.
     * @return The connectivity state.
     */
    getConnectionState(): ConnectionState;
    /**
     * Sets the parameter name for the http session id.
     * @param httpSessionIdParam The parameter name for http session id
     */
    setHttpSessionIdParam(httpSessionIdParam: string | null): any;
    /**
     * Gets the parameter name for the http session id.
     * @return The parameter name for the http session id.
     */
    getHttpSessionIdParam(): string | null;
    /**
     * Sets the http session id.
     * @param httpSessionId The http session id
     */
    setHttpSessionId(httpSessionId: string): any;
    /**
     * Gets the http session id.
     * @return The http session id if there is one in effect.
     */
    getHttpSessionId(): string | null;
    /**
     * Whether or not this channel uses WHATWG Fetch/streams.
     * @return true if use Fetch streams.
     */
    usesFetchStreams(): boolean;
}
