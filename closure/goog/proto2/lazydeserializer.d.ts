import { Message } from './message.js';
import { Serializer } from './serializer.js';
import type { FieldDescriptor } from './fielddescriptor.js';
/**
 * Base class for all lazy deserializers.
 */
export declare class LazyDeserializer extends Serializer {
    /**
     * Base class for all lazy deserializers.
     */
    constructor();
    private noStructuralTyping_closure_goog_proto2_lazydeserializer_LazyDeserializer;
    deserialize(descriptor: any, data: any): Message;
    deserializeTo(message: any, data: any): void;
    /**
     * Deserializes a message field from the expected format and places the
     * data in the given message
     * @param message The message in which to place the information.
     * @param field The field for which to set the message value.
     * @param data The serialized data for the field.
     * @return The deserialized data or null for no value found.
     */
    deserializeField(message: Message | null, field: FieldDescriptor | null, data: any): any;
}
