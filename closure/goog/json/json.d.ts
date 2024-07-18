export declare var USE_NATIVE_JSON: boolean;
/**
 * Tests if a string is an invalid JSON string. This only ensures that we are
 * not using any invalid characters
 * @param s The string to test.
 * @return True if the input is a valid JSON string.
 */
export declare function isValid(s: string): boolean;
/**
 * Sets an error logger to use if there's a recoverable parsing error.
 * @param errorLogger The first parameter is the error message, the second is the exception thrown by `JSON.parse`.
 */
export declare function setErrorLogger(errorLogger: () => any): void;
/**
 * Parses a JSON string and returns the result. This throws an exception if
 * the string is an invalid JSON string.
 *
 * Note that this is very slow on large strings. Use JSON.parse if possible.
 * @param s The JSON string to parse.
 * @return The object generated from the JSON string, or null.
 */
export declare function parse(s: any): object | null;
/**
 * JSON replacer, as defined in Section 15.12.3 of the ES5 spec.
 */
export type Replacer = (this: object | null) => any;
/**
 * JSON reviver, as defined in Section 15.12.2 of the ES5 spec.
 */
export type Reviver = (this: object | null) => any;
/**
 * Serializes an object or a value to a JSON string.
 * @param object The object to serialize.
 * @param opt_replacer A replacer function called for each (key, value) pair that determines how the value should be serialized. By defult, this just returns the value and allows default serialization to kick in.
 * @return A JSON string representation of the input.
 */
export declare function serialize(object: any, opt_replacer?: Replacer | null): string;
/**
 * Class that is used to serialize JSON objects to a string.
 */
export declare class Serializer {
    /**
     * Class that is used to serialize JSON objects to a string.
     * @param opt_replacer Replacer.
     */
    constructor(opt_replacer?: Replacer | null);
    private noStructuralTyping_closure_goog_json_json_Serializer;
    /**
     * Serializes an object or a value to a JSON string.
     * @param object The object to serialize.
     * @return A JSON string representation of the input.
     */
    serialize(object: any): string;
    /**
     * Serializes a generic value to a JSON string
     * @param object The object to serialize.
     * @param sb Array used as a string builder.
     */
    protected serializeInternal(object: any, sb: string[] | null): void;
    /**
     * Serializes an array to a JSON string
     * @param arr The array to serialize.
     * @param sb Array used as a string builder.
     */
    protected serializeArray(arr: string[] | null, sb: string[] | null): void;
}
