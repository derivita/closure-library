import { Serializer } from './serializer.js';
import type { Message } from './message.js';
/**
 * ObjectSerializer, a serializer which turns Messages into simplified
 * ECMAScript objects.
 */
export declare class ObjectSerializer extends Serializer {
    /**
     * ObjectSerializer, a serializer which turns Messages into simplified
     * ECMAScript objects.
     * @param opt_keyOption If specified, which key option to use when serializing/deserializing.
     * @param opt_serializeBooleanAsNumber If specified and true, the serializer will convert boolean values to 0/1 representation.
     * @param opt_ignoreUnknownFields If specified and true, the serializer will ignore unknown fields in the JSON payload instead of returning an error.
     */
    constructor(opt_keyOption?: ObjectSerializer.KeyOption | null, opt_serializeBooleanAsNumber?: boolean, opt_ignoreUnknownFields?: boolean);
    private noStructuralTyping_closure_goog_proto2_objectserializer_ObjectSerializer;
    keyOption_: any;
    serializeBooleanAsNumber_: any;
    ignoreUnknownFields_: any;
    /**
     * Serializes a message to an object.
     * @param message The message to be serialized.
     * @return The serialized form of the message.
     */
    serialize(message: Message | null): object;
    getSerializedValue(field: any, value: any): any;
    getDeserializedValue(field: any, value: any): any;
    /**
     * Deserializes a message from an object and places the
     * data in the message.
     * @param message The message in which to place the information.
     * @param data The data of the message.
     */
    deserializeTo(message: Message | null, data: any): void;
}
export declare namespace ObjectSerializer {
    /**
     * An enumeration of the options for how to emit the keys in
     * the generated simplified object.
     *
     * For serialization, the option specifies the keys to use in the serialized
     * object.
     *
     * For deserialization, the option specifies which keys are allowed; an object
     * serialized by TAG may be deserialized by TAG or by NAME or by
     * CAMEL_CASE_NAME, but an object serialized by NAME cannot be deserialized by
     * TAG.  An object serialized with any option can be deserialized by
     * CAMEL_CASE_NAME.
     */
    enum KeyOption {
        TAG = 0,
        NAME = 1,
        CAMEL_CASE_NAME = 2
    }
}
