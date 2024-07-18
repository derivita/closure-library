import { Uri } from '../../uri/uri.js';
import * as dom from '../../dom/dom.js';
import { AbstractChannel } from '../../messaging/abstractchannel.js';
/**
 * A communication channel between two documents from different domains.
 * Provides asynchronous messaging.
 */
export declare class CrossPageChannel extends AbstractChannel {
    /**
     * A communication channel between two documents from different domains.
     * Provides asynchronous messaging.
     * @param cfg Channel configuration object.
     * @param opt_domHelper The optional dom helper to use for looking up elements in the dom.
     */
    constructor(cfg: object | null, opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_net_xpc_crosspagechannel_CrossPageChannel;
    /**
     * The name of the channel. Please use
     * <code>updateChannelNameAndCatalog</code> to change this from the transports
     * vs changing the property directly.
     */
    name: string;
    isConnected(): boolean;
    /**
     * Returns the configuration object for this channel.
     * Package private. Do not call from outside xpc.
     * @return The configuration object for this channel.
     */
    getConfig(): object | null;
    /**
     * Returns a reference to the iframe-element.
     * Package private. Do not call from outside xpc.
     * @return A reference to the iframe-element.
     */
    getIframeElement(): HTMLIFrameElement | null;
    /**
     * Sets the window object the foreign document resides in.
     * @param peerWindowObject The window object of the peer.
     */
    setPeerWindowObject(peerWindowObject: object | null): void;
    /**
     * Returns the transport type in use for this channel.
     * @return Transport-type identifier.
     */
    getTransportType(): number;
    /**
     * Returns the tranport name in use for this channel.
     * @return The transport name.
     */
    getTransportName(): string;
    getPeerConfiguration(): object;
    /**
     * Creates the iframe containing the peer page in a specified parent element.
     * This method does not connect the channel, connect() still has to be called
     * separately.
     * @param parentElm The container element the iframe is appended to.
     * @param opt_configureIframeCb If present, this function gets called with the iframe element as parameter to allow setting properties on it before it gets added to the DOM. If absent, the iframe's width and height are set to '100%'.
     * @param opt_addCfgParam Whether to add the peer configuration as URL parameter (default: true).
     * @return The iframe element.
     */
    createPeerIframe(parentElm: Element, opt_configureIframeCb?: Function | null, opt_addCfgParam?: boolean): HTMLIFrameElement;
    /**
     * Returns the peer URI, with an optional URL parameter for configuring the peer
     * window.
     * @param opt_addCfgParam Whether to add the peer configuration as URL parameter (default: true).
     * @return The peer URI.
     */
    getPeerUri(opt_addCfgParam?: boolean): Uri;
    /**
     * Initiates connecting the channel. When this method is called, all the
     * information needed to connect the channel has to be available.
     * @param opt_connectCb The function to be called when the channel has been connected and is ready to be used.
     */
    connect(opt_connectCb?: Function | null): any;
    /**
     * Closes the channel.
     */
    close(): void;
    /**
     * Package-private.
     * Called by the transport when the channel is connected.
     * @param opt_delay Delay this number of milliseconds before calling the connection callback. Usage is discouraged, but can be used to paper over timing vulnerabilities when there is no alternative.
     */
    notifyConnected(opt_delay?: number): void;
    /**
     * Called by the transport in case of an unrecoverable failure.
     * Package private. Do not call from outside xpc.
     */
    notifyTransportError(): void;
    send(serviceName: any, payload: any): any;
    /**
     * Returns the role of this channel (either inner or outer).
     * @return The role of this channel.
     */
    getRole(): number;
    /**
     * Sets the channel name. Note, this doesn't establish a unique channel to
     * communicate on.
     * @param name The new channel name.
     */
    updateChannelNameAndCatalog(name: string): void;
    disposeInternal(): void;
}
