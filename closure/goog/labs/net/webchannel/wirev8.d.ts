import * as maps from '../../../collections/maps.js';
import { Wire } from './wire.js';
/**
 * The v8 codec class.
 */
export declare class WireV8 {
    /**
     * The v8 codec class.
     */
    constructor();
    private noStructuralTyping_closure_goog_labs_net_webchannel_wirev8_WireV8;
    /**
     * Encodes a standalone message into the wire format.
     *
     * May throw exception if the message object contains any invalid elements.
     * @param message The message data. V8 only support JS objects (or Map).
     * @param buffer The text buffer to write the message to.
     * @param opt_prefix The prefix for each field of the object.
     */
    encodeMessage(message: object | maps.MapLike, buffer: string[], opt_prefix?: string): void;
    /**
     * Encodes all the buffered messages of the forward channel.
     * @param messageQueue The message data. V8 only support JS objects.
     * @param count The number of messages to be encoded.
     * @param badMapHandler Callback for bad messages.
     * @return the encoded messages
     */
    encodeMessageQueue(messageQueue: (Wire.QueuedMap | null)[], count: number, badMapHandler: (() => any) | null): string;
    /**
     * Decodes a standalone message received from the wire. May throw exception
     * if text is ill-formatted.
     *
     * Must be valid JSON as it is insecure to use eval() to decode JS literals;
     * and eval() is disallowed in Chrome apps too.
     *
     * Invalid JS literals include null array elements, quotas etc.
     * @param messageText The string content as received from the wire.
     * @return The decoded message object.
     */
    decodeMessage(messageText: string): any;
}
