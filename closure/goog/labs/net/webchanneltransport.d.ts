import type { WebChannel } from './webchannel.js';
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
export interface WebChannelTransport {
    /**
     * Create a new WebChannel instance.
     *
     * The new WebChannel is to be opened against the server-side resource
     * as specified by the given URL. See {@link WebChannel} for detailed
     * semantics.
     * @param url The URL path for the new WebChannel instance.
     * @param opt_options Configuration for the new WebChannel instance. The configuration object is reusable after the new channel instance is created.
     * @return the newly created WebChannel instance.
     */
    createWebChannel(url: string, opt_options?: WebChannel.Options): WebChannel;
}
export declare namespace WebChannelTransport {
    /**
     * The client version. This integer value will be passed to the server
     * when a channel is opened to inform the server the client "capabilities".
     *
     * Wire protocol version is a different concept and is internal to the
     * transport implementation.
     */
    const CLIENT_VERSION: number;
}
