import { Message } from '../../proto2/message.js';
/**
 * Compares two Message instances of the same type.
 * @param expected First message.
 * @param actual Second message.
 * @param path Path to the messages.
 * @return A string describing where they differ. Empty string if they are equal.
 */
export declare function findDifferences_(expected: Message, actual: Message, path: string): string;
/**
 * Compares two Message objects. Gives more readable output than
 * assertObjectEquals on mismatch.
 * @param expected Expected proto2 message.
 * @param actual Actual proto2 message.
 * @param opt_failureMessage Failure message when the values don't match.
 */
export declare function assertEquals(expected: Message, actual: Message, opt_failureMessage?: string): void;
/**
 * Helper function to quickly build protocol buffer messages from JSON objects.
 * @param messageCtor A constructor that creates a `Message` subclass instance.
 * @param json JSON object which uses field names as keys.
 * @return The deserialized protocol buffer.
 */
export declare function fromObject<MessageType = any>(messageCtor: {
    new (): MessageType | null;
}, json: object): MessageType | null;
