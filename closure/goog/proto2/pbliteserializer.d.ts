import { LazyDeserializer } from './lazydeserializer.js';
import type { Message } from './message.js';
/**
 * PB-Lite serializer.
 */
export declare class PbLiteSerializer extends LazyDeserializer {
    /**
     * PB-Lite serializer.
     */
    constructor();
    private noStructuralTyping_closure_goog_proto2_pbliteserializer_PbLiteSerializer;
    /**
     * By default, the proto tag with id 1 will have index 1 in the serialized
     * array.
     *
     * If the serializer is set to use zero-indexing, the tag with id 1 will have
     * index 0.
     * @param zeroIndexing Whether this serializer should deal with 0-indexed protos.
     */
    setZeroIndexed(zeroIndexing: boolean): void;
    /**
     * Serializes a message to a PB-Lite object.
     * @param message The message to be serialized.
     * @return The serialized form of the message.
     */
    serialize(message: Message | null): any[];
    deserializeField(message: any, field: any, value: any): any;
    getSerializedValue(field: any, value: any): any;
    getDeserializedValue(field: any, value: any): any;
    deserialize(descriptor: any, data: any): Message;
}
