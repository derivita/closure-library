import { FieldDescriptor } from './fielddescriptor.js';
import { Message } from './message.js';
import type { Descriptor } from './descriptor.js';
/**
 * Abstract base class for PB2 serializers. A serializer is a class which
 * implements the serialization and deserialization of a Protocol Buffer Message
 * to/from a specific format.
 */
export declare class Serializer {
    /**
     * Abstract base class for PB2 serializers. A serializer is a class which
     * implements the serialization and deserialization of a Protocol Buffer Message
     * to/from a specific format.
     */
    constructor();
    private noStructuralTyping_closure_goog_proto2_serializer_Serializer;
    static DECODE_SYMBOLIC_ENUMS: boolean;
    /**
     * Serializes a message to the expected format.
     * @param message The message to be serialized.
     * @return The serialized form of the message.
     */
    serialize(message: Message | null): any;
    /**
     * Returns the serialized form of the given value for the given field if the
     * field is a Message or Group and returns the value unchanged otherwise, except
     * for Infinity, -Infinity and NaN numerical values which are converted to
     * string representation.
     * @param field The field from which this value came.
     * @param value The value of the field.
     * @return The value.
     */
    protected getSerializedValue(field: FieldDescriptor | null, value: any): any;
    /**
     * Deserializes a message from the expected format.
     * @param descriptor The descriptor of the message to be created.
     * @param data The data of the message.
     * @return The message created.
     */
    deserialize(descriptor: Descriptor | null, data: any): Message;
    /**
     * Deserializes a message from the expected format and places the
     * data in the message.
     * @param message The message in which to place the information.
     * @param data The data of the message.
     */
    deserializeTo(message: Message | null, data: any): void;
    /**
     * Returns the deserialized form of the given value for the given field if the
     * field is a Message or Group and returns the value, converted or unchanged,
     * for primitive field types otherwise.
     * @param field The field from which this value came.
     * @param value The value of the field.
     * @return The value.
     */
    protected getDeserializedValue(field: FieldDescriptor | null, value: any): any;
    static INTEGER_REGEX: RegExp;
}
