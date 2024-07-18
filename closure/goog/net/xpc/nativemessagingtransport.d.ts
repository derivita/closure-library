import { CrossPageChannel } from './crosspagechannel.js';
import { Transport } from './transport.js';
import type { DomHelper } from '../../dom/dom.js';
/**
 * The native messaging transport
 *
 * Uses document.postMessage() to send messages to other documents.
 * Receiving is done by listening on 'message'-events on the document.
 */
export declare class NativeMessagingTransport extends Transport {
    /**
     * The native messaging transport
     *
     * Uses document.postMessage() to send messages to other documents.
     * Receiving is done by listening on 'message'-events on the document.
     * @param channel The channel this transport belongs to.
     * @param peerHostname The hostname (protocol, domain, and port) of the peer.
     * @param opt_domHelper The dom helper to use for finding the correct window/document.
     * @param opt_oneSidedHandshake If this is true, only the outer transport sends a SETUP message and expects a SETUP_ACK.  The inner transport goes connected when it receives the SETUP.
     * @param opt_protocolVersion Which version of its setup protocol the transport should use.  The default is '2'.
     */
    constructor(channel: CrossPageChannel | null, peerHostname: string, opt_domHelper?: DomHelper | null, opt_oneSidedHandshake?: boolean, opt_protocolVersion?: number);
    private noStructuralTyping_closure_goog_net_xpc_nativemessagingtransport_NativeMessagingTransport;
    /**
     * The transport type.
     */
    transportType: number;
    /**
     * Handles transport service messages.
     * @param payload The message content.
     */
    transportServiceHandler(payload: string): void;
    /**
     * Connects this transport.
     */
    connect(): void;
    /**
     * Sends a message.
     * @param service The name off the service the message is to be delivered to.
     * @param payload The message content.
     */
    send(service: string, payload: string): void;
    disposeInternal(): void;
}
