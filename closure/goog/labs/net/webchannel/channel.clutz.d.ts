//!! generated by clutz.
// Generated from labs/net/webchannel/channel.js
declare namespace ಠ_ಠ.clutz.goog.labs.net.webChannel {
  /**
   * Core interface for WebChannelBase.
   */
  interface Channel {
    /**
     * Not needed for testchannel.
     *
     * Allows the handler to override a host prefix provided by the server.  Will
     * be called whenever the channel has received such a prefix and is considering
     * its use.
     * @param serverHostPrefix The host prefix provided by the server.
     */
    correctHostPrefix (a : string | null ) : string | null ;
    /**
     * Not needed for testchannel.
     *
     * Creates a data Uri applying logic for secondary hostprefix, port
     * overrides, and versioning.
     * @param hostPrefix The host prefix.
     * @param path The path on the host (may be absolute or relative).
     * @param opt_overridePort Optional override port.
     */
    createDataUri (a : string | null , b : string , c ? : number ) : ಠ_ಠ.clutz.goog.Uri | null ;
    /**
     * Called when creating an XhrIo object.  Override in a subclass if
     * you need to customize the behavior, for example to enable the creation of
     * XHR's capable of calling a secondary domain. Will also allow calling
     * a secondary domain if withCredentials (CORS) is enabled.
     * @param hostPrefix The host prefix, if we need an XhrIo object capable of calling a secondary domain.
     * @param isStreaming Whether or not fetch/streams are enabled for the underlying HTTP request.
     */
    createXhrIo (a : string | null , b ? : boolean ) : ಠ_ಠ.clutz.goog.net.XhrIo ;
    /**
     * Not needed for testchannel.
     *
     * Gets the Uri used for the connection that receives data from the server.
     * @param hostPrefix The host prefix.
     * @param path The path on the host.
     */
    getBackChannelUri (a : string | null , b : string ) : ಠ_ಠ.clutz.goog.Uri | null ;
    /**
     * Not needed for testchannel.
     * Gets the result of previous connectivity tests.
     */
    getConnectionState ( ) : ಠ_ಠ.clutz.goog.labs.net.webChannel.ConnectionState ;
    /**
     * Not needed for testchannel.
     *
     * Gets the Uri used for the connection that sends data to the server.
     * @param path The path on the host.
     */
    getForwardChannelUri (a : string ) : ಠ_ಠ.clutz.goog.Uri | null ;
    /**
     * Gets the http session id.
     */
    getHttpSessionId ( ) : string | null ;
    /**
     * Gets the parameter name for the http session id.
     */
    getHttpSessionIdParam ( ) : string | null ;
    /**
     * Gets whether this channel is currently active. This is used to determine the
     * length of time to wait before retrying. This call delegates to the handler.
     */
    isActive ( ) : boolean ;
    /**
     * Returns whether the channel is closed
     */
    isClosed ( ) : boolean ;
    /**
     * Callback from ChannelRequest for when the first byte of response body has
     * been received. This is needed for detecting buffering proxies.
     * @param request The request object.
     * @param responseText The text of the response.
     */
    onFirstByteReceived (a : ಠ_ಠ.clutz.goog.labs.net.webChannel.ChannelRequest , b : string ) : any ;
    /**
     * Callback from ChannelRequest that indicates a request has completed.
     * @param request The request object.
     */
    onRequestComplete (a : ಠ_ಠ.clutz.goog.labs.net.webChannel.ChannelRequest ) : any ;
    /**
     * Callback from ChannelRequest for when new data is received
     * @param request The request object.
     * @param responseText The text of the response.
     */
    onRequestData (a : ಠ_ಠ.clutz.goog.labs.net.webChannel.ChannelRequest | null , b : string ) : any ;
    /**
     * Sets the http session id.
     * @param httpSessionId The http session id
     */
    setHttpSessionId (a : string ) : any ;
    /**
     * Sets the parameter name for the http session id.
     * @param httpSessionIdParam The parameter name for http session id
     */
    setHttpSessionIdParam (a : string | null ) : any ;
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
     */
    shouldUseSecondaryDomains ( ) : boolean ;
    /**
     * Whether or not this channel uses WHATWG Fetch/streams.
     */
    usesFetchStreams ( ) : boolean ;
  }
}
declare module 'goog:goog.labs.net.webChannel.Channel' {
  import Channel = ಠ_ಠ.clutz.goog.labs.net.webChannel.Channel;
  export default Channel;
}
