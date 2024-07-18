import { ChannelRequest } from './channelrequest.js';
import { Wire } from './wire.js';
/**
 * This class represents the state of all forward channel requests.
 */
declare class ForwardChannelRequestPool {
    /**
     * This class represents the state of all forward channel requests.
     * @param opt_maxPoolSize The maximum pool size.
     */
    constructor(opt_maxPoolSize?: number);
    private noStructuralTyping_closure_goog_labs_net_webchannel_forwardchannelrequestpool_ForwardChannelRequestPool;
    /**
     * Once we know the client protocol (from the handshake), check if we need
     * enable the request pool accordingly. This is more robust than using
     * browser-internal APIs (specific to Chrome).
     * @param clientProtocol The client protocol
     */
    applyClientProtocol(clientProtocol: string): void;
    isFull(): boolean;
    getMaxSize(): number;
    getRequestCount(): number;
    /**
     *
     * @param req The channel request.
     * @return True if the request is a included inside the pool.
     */
    hasRequest(req: ChannelRequest | null): boolean;
    /**
     * Adds a new request to the pool.
     * @param req The new channel request.
     */
    addRequest(req: ChannelRequest): void;
    /**
     * Removes the given request from the pool.
     * @param req The channel request.
     * @return Whether the request has been removed from the pool.
     */
    removeRequest(req: ChannelRequest | null): boolean;
    /**
     * Clears the pool and cancel all the pending requests.
     */
    cancel(): void;
    hasPendingRequest(): boolean;
    getPendingMessages(): (Wire.QueuedMap | null)[];
    /**
     * Records pending messages, e.g. when a request receives a failed response.
     * @param messages Pending messages.
     */
    addPendingMessages(messages: (Wire.QueuedMap | null)[]): void;
    /**
     * Clears any recorded pending messages.
     */
    clearPendingMessages(): void;
    /**
     * Cancels all pending requests and force the completion of channel requests.
     *
     * Need go through the standard onRequestComplete logic to expose the max-retry
     * failure in the standard way.
     * @param onComplete The completion callback.
     * @return true if any request has been forced to complete.
     */
    forceComplete(onComplete: () => any): boolean;
}
export { ForwardChannelRequestPool };
