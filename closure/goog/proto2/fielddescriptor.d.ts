import type { Descriptor } from './descriptor.js';
import type { Message } from './message.js';
/**
 * A class which describes a field in a Protocol Buffer 2 Message.
 */
export declare class FieldDescriptor {
    /**
     * A class which describes a field in a Protocol Buffer 2 Message.
     * @param messageType Constructor for the message class to which the field described by this class belongs.
     * @param tag The field's tag index.
     * @param metadata The metadata about this field that will be used to construct this descriptor.
     */
    constructor(messageType: {
        new (): Message | null;
    }, tag: number | string, metadata: {
        'name': string;
        'fieldType': FieldDescriptor.FieldType;
        'type': Function;
        'repeated': any | undefined;
        'required': any | undefined;
        'packed': any | undefined;
        'defaultValue': any | undefined;
    });
    private noStructuralTyping_closure_goog_proto2_fielddescriptor_FieldDescriptor;
    /**
     * Returns the tag of the field that this descriptor represents.
     * @return The tag number.
     */
    getTag(): number;
    /**
     * Returns the descriptor describing the message that defined this field.
     * @return The descriptor.
     */
    getContainingType(): Descriptor;
    /**
     * Returns the name of the field that this descriptor represents.
     * @return The name.
     */
    getName(): string;
    /**
     * Returns the default value of this field.
     * @return The default value.
     */
    getDefaultValue(): any;
    /**
     * Returns the field type of the field described by this descriptor.
     * @return The field type.
     */
    getFieldType(): FieldDescriptor.FieldType | null;
    /**
     * Returns the native (i.e. ECMAScript) type of the field described by this
     * descriptor.
     * @return The native type.
     */
    getNativeType(): object | null;
    /**
     * Returns true if simple conversions between numbers and strings are permitted
     * during deserialization for this field.
     * @return Whether conversion is permitted.
     */
    deserializationConversionPermitted(): boolean;
    /**
     * Returns the descriptor of the message type of this field. Only valid
     * for fields of type GROUP and MESSAGE.
     * @return The message descriptor.
     */
    getFieldMessageType(): Descriptor;
    isCompositeType(): boolean;
    /**
     * Returns whether the field described by this descriptor is packed.
     * @return Whether the field is packed.
     */
    isPacked(): boolean;
    /**
     * Returns whether the field described by this descriptor is repeating.
     * @return Whether the field is repeated.
     */
    isRepeated(): boolean;
    /**
     * Returns whether the field described by this descriptor is required.
     * @return Whether the field is required.
     */
    isRequired(): boolean;
    /**
     * Returns whether the field described by this descriptor is optional.
     * @return Whether the field is optional.
     */
    isOptional(): boolean;
}
export declare namespace FieldDescriptor {
    /**
     * An enumeration defining the possible field types.
     * Should be a mirror of that defined in descriptor.h.
     */
    enum FieldType {
        DOUBLE = 1,
        FLOAT = 2,
        INT64 = 3,
        UINT64 = 4,
        INT32 = 5,
        FIXED64 = 6,
        FIXED32 = 7,
        BOOL = 8,
        STRING = 9,
        GROUP = 10,
        MESSAGE = 11,
        BYTES = 12,
        UINT32 = 13,
        ENUM = 14,
        SFIXED32 = 15,
        SFIXED64 = 16,
        SINT32 = 17,
        SINT64 = 18
    }
}
