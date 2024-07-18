import { Serializer as jsonSerializer } from '../json/json.js';
/**
 * Object that can serialize objects or values to a protocol buffer string.
 */
export declare class Serializer extends jsonSerializer {
    /**
     * Object that can serialize objects or values to a protocol buffer string.
     */
    constructor();
    private noStructuralTyping_closure_goog_proto_serializer_Serializer;
    /**
     * Serializes an array to a protocol buffer string. This overrides the JSON
     * method to don't output trailing null or undefined.
     * @param arr The array to serialize.
     * @param sb Array used as a string builder.
     */
    serializeArray(arr: any[] | null, sb: string[] | null): void;
}
