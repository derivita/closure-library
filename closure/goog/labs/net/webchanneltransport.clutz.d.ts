//!! generated by clutz.
// Generated from labs/net/webchanneltransport.js
declare namespace ಠ_ಠ.clutz.goog.net {
  /**
   * A WebChannelTransport instance represents a shared context of logical
   * connectivity between a browser client and a remote origin.
   *
   * Over a single WebChannelTransport instance, multiple WebChannels may be
   * created against different URLs, which may all share the same
   * underlying connectivity (i.e. TCP connection) whenever possible.
   *
   * When multi-domains are supported, such as CORS, multiple origins may be
   * supported over a single WebChannelTransport instance at the same time.
   *
   * Sharing between different window contexts such as tabs is not addressed
   * by WebChannelTransport. Applications may choose HTML5 shared workers
   * or other techniques to access the same transport instance
   * across different window contexts.
   */
  namespace WebChannelTransport {
    let /**
     * The client version. This integer value will be passed to the server
     * when a channel is opened to inform the server the client "capabilities".
     *
     * Wire protocol version is a different concept and is internal to the
     * transport implementation.
     */
    CLIENT_VERSION : number ;
  }
  interface WebChannelTransport {
    /**
     * Create a new WebChannel instance.
     *
     * The new WebChannel is to be opened against the server-side resource
     * as specified by the given URL. See {@link goog.net.WebChannel} for detailed
     * semantics.
     * @param url The URL path for the new WebChannel instance.
     * @param opt_options Configuration for the new WebChannel instance. The configuration object is reusable after the new channel instance is created.
     */
    createWebChannel (a : string , b ? : ಠ_ಠ.clutz.goog.net.WebChannel.Options ) : ಠ_ಠ.clutz.goog.net.WebChannel ;
  }
}
declare module 'goog:goog.net.WebChannelTransport' {
  import WebChannelTransport = ಠ_ಠ.clutz.goog.net.WebChannelTransport;
  export default WebChannelTransport;
}
