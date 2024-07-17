import { Disposable } from '../disposable/disposable.js';
import { MessageChannel } from './messagechannel.js';
/**
 * Creates a new MultiChannel wrapping a single MessageChannel. The
 * underlying channel shouldn't have any other listeners registered, but it
 * should be connected.
 *
 * Note that the other side of the channel should also be connected to a
 * MultiChannel with the same number of virtual channels.
 */
export declare class MultiChannel extends Disposable {
    /**
     * Creates a new MultiChannel wrapping a single MessageChannel. The
     * underlying channel shouldn't have any other listeners registered, but it
     * should be connected.
     *
     * Note that the other side of the channel should also be connected to a
     * MultiChannel with the same number of virtual channels.
     * @param underlyingChannel The underlying channel to use as transport for the virtual channels.
     */
    constructor(underlyingChannel: MessageChannel | null);
    private noStructuralTyping_closure_goog_messaging_multichannel_MultiChannel;
    /**
     * Creates a new virtual channel that will communicate across the underlying
     * channel.
     * @param name The name of the virtual channel. Must be unique for this MultiChannel. Cannot contain colons.
     * @return The new virtual channel.
     */
    createVirtualChannel(name: string): MultiChannel.VirtualChannel;
    disposeInternal(): void;
}
export declare namespace MultiChannel {
    /**
     * A message channel that proxies its messages over another underlying channel.
     */
    class VirtualChannel extends Disposable implements MessageChannel {
        /**
         * A message channel that proxies its messages over another underlying channel.
         * @param parent The MultiChannel which created this channel, and which contains the underlying MessageChannel that's used as the transport.
         * @param name The name of this virtual channel. Unique among the virtual channels in parent.
         */
        constructor(parent: MultiChannel | null, name: string);
        private noStructuralTyping_closure_goog_messaging_multichannel_VirtualChannel;
        /**
         * This is a no-op, since the underlying channel is expected to already be
         * initialized when it's passed in.
         */
        connect(opt_connectCb: any): any;
        /**
         * This always returns true, since the underlying channel is expected to already
         * be initialized when it's passed in.
         */
        isConnected(): any;
        registerService(serviceName: any, callback: any, opt_objectPayload: any): any;
        registerDefaultService(callback: any): any;
        send(serviceName: any, payload: any): any;
        disposeInternal(): void;
    }
}
