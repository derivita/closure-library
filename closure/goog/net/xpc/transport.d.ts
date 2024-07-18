import { Disposable } from '../../disposable/disposable.js';
import * as dom from '../../dom/dom.js';
/**
 * The base class for transports.
 */
export declare class Transport extends Disposable {
    /**
     * The base class for transports.
     * @param opt_domHelper The dom helper to use for finding the window objects.
     */
    constructor(opt_domHelper?: dom.DomHelper | null);
    private noStructuralTyping_closure_goog_net_xpc_transport_Transport;
    /**
     * The transport type.
     */
    protected transportType: number;
    getType(): number;
    /**
     * Returns the window associated with this transport instance.
     * @return The window to use.
     */
    getWindow(): Window;
    /**
     * Return the transport name.
     * @return the transport name.
     */
    getName(): string;
    /**
     * Handles transport service messages (internal signalling).
     * @param payload The message content.
     */
    transportServiceHandler(payload: string): void;
    /**
     * Connects this transport.
     * The transport implementation is expected to call
     * CrossPageChannel.prototype.notifyConnected when the channel is ready
     * to be used.
     */
    connect(): void;
    /**
     * Sends a message.
     * @param service The name off the service the message is to be delivered to.
     * @param payload The message content.
     */
    send(service: string, payload: string): void;
}
