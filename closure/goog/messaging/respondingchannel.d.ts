import { Disposable } from '../disposable/disposable.js';
import type { MessageChannel } from './messagechannel.js';
/**
 * Creates a new RespondingChannel wrapping a single MessageChannel.
 */
export declare class RespondingChannel extends Disposable {
    /**
     * Creates a new RespondingChannel wrapping a single MessageChannel.
     * @param messageChannel The messageChannel to to wrap and allow for responses. This channel must not have any existing services registered. All service registration must be done through the {@link RespondingChannel#registerService} api instead. The other end of channel must also be a RespondingChannel.
     */
    constructor(messageChannel: MessageChannel | null);
    private noStructuralTyping_closure_goog_messaging_respondingchannel_RespondingChannel;
    disposeInternal(): void;
    /**
     * Sends a message over the channel.
     * @param serviceName The name of the service this message should be delivered to.
     * @param payload The value of the message. If this is an Object, it is serialized to a string before sending if necessary.
     * @param callback The callback invoked with the result of the service call.
     */
    send(serviceName: string, payload: string | object, callback: () => any): void;
    /**
     * Registers a service to be called when a message is received.
     * @param serviceName The name of the service.
     * @param callback The callback to process the incoming messages. Passed the payload.
     */
    registerService(serviceName: string, callback: () => any): void;
}
