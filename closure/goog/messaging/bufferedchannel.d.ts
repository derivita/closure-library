import { Disposable } from '../disposable/disposable.js';
import { MessageChannel } from './messagechannel.js';
/**
 * Creates a new BufferedChannel, which operates like its underlying channel
 * except that it buffers calls to send until it receives a message from its
 * peer claiming that the peer is ready to receive.  The peer is also expected
 * to be a BufferedChannel, though this is not enforced.
 */
export declare class BufferedChannel extends Disposable implements MessageChannel {
    /**
     * Creates a new BufferedChannel, which operates like its underlying channel
     * except that it buffers calls to send until it receives a message from its
     * peer claiming that the peer is ready to receive.  The peer is also expected
     * to be a BufferedChannel, though this is not enforced.
     * @param messageChannel The MessageChannel we're wrapping.
     * @param opt_interval Polling interval for sending ready notifications to peer, in ms.  Default is 50.
     */
    constructor(messageChannel: MessageChannel, opt_interval?: number);
    private noStructuralTyping_closure_goog_messaging_bufferedchannel_BufferedChannel;
    connect(opt_connectCb: any): any;
    isConnected(): any;
    isPeerReady(): boolean;
    registerService(serviceName: any, callback: any, opt_objectPayload: any): any;
    registerDefaultService(callback: any): any;
    /**
     * Send a message over the channel.  If the peer is not ready, the message will
     * be buffered and sent once we've received a ready message from our peer.
     * @param serviceName The name of the service this message should be delivered to.
     * @param payload The value of the message. If this is an Object, it is serialized to JSON before sending.  It's the responsibility of implementors of this class to perform the serialization.
     */
    send(serviceName: string, payload: string | object): any;
    disposeInternal(): void;
}
