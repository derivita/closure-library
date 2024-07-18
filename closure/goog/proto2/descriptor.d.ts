import type { FieldDescriptor } from './fielddescriptor.js';
import type { Message } from './message.js';
export type Metadata = {
    'name': string | undefined;
    'fullName': string | undefined;
    'containingType': Message | undefined | null;
};
/**
 * A class which describes a Protocol Buffer 2 Message.
 */
export declare class Descriptor {
    /**
     * A class which describes a Protocol Buffer 2 Message.
     * @param messageType Constructor for the message class that this descriptor describes.
     * @param metadata The metadata about the message that will be used to construct this descriptor.
     * @param fields The fields of the message described by this descriptor.
     */
    constructor(messageType: {
        new (): Message | null;
    }, metadata: Metadata, fields: FieldDescriptor[] | null);
    private noStructuralTyping_closure_goog_proto2_descriptor_Descriptor;
    /**
     * Returns the name of the message, if any.
     * @return The name.
     */
    getName(): string | null;
    /**
     * Returns the full name of the message, if any.
     * @return The name.
     */
    getFullName(): string | null;
    /**
     * Returns the descriptor of the containing message type or null if none.
     * @return The descriptor.
     */
    getContainingType(): Descriptor | null;
    /**
     * Returns the fields in the message described by this descriptor ordered by
     * tag.
     * @return The array of field descriptors.
     */
    getFields(): FieldDescriptor[];
    /**
     * Returns the fields in the message as a key/value map, where the key is
     * the tag number of the field. DO NOT MODIFY THE RETURNED OBJECT. We return
     * the actual, internal, fields map for performance reasons, and changing the
     * map can result in undefined behavior of this library.
     * @return The field map.
     */
    getFieldsMap(): {
        [key: number]: FieldDescriptor;
    };
    /**
     * Returns the field matching the given name, if any. Note that
     * this method searches over the *original* name of the field,
     * not the camelCase version.
     * @param name The field name for which to search.
     * @return The field found, if any.
     */
    findFieldByName(name: string): FieldDescriptor | null;
    /**
     * Returns the field matching the given tag number, if any.
     * @param tag The field tag number for which to search.
     * @return The field found, if any.
     */
    findFieldByTag(tag: number | string): FieldDescriptor | null;
    /**
     * Creates an instance of the message type that this descriptor
     * describes.
     * @return The instance of the message.
     */
    createMessageInstance(): Message;
}
