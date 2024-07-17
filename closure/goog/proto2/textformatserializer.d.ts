import { Message } from './message.js';
import { Serializer } from './serializer.js';
/**
 * TextFormatSerializer, a serializer which turns Messages into the human
 * readable text format.
 */
export declare class TextFormatSerializer extends Serializer {
    /**
     * TextFormatSerializer, a serializer which turns Messages into the human
     * readable text format.
     * @param opt_ignoreMissingFields If true, then fields that cannot be found on the proto when parsing the text format will be ignored.
     * @param opt_useEnumValues If true, serialization code for enums will use enum integer values instead of human-readable symbolic names.
     */
    constructor(opt_ignoreMissingFields?: boolean, opt_useEnumValues?: boolean);
    private noStructuralTyping_closure_goog_proto2_textformatserializer_TextFormatSerializer;
    /**
     * Deserializes a message from text format and places the data in the message.
     * @param message The message in which to place the information.
     * @param data The text format data.
     * @return The parse error or null on success.
     */
    deserializeTo(message: Message | null, data: any): string | null;
    /**
     * Serializes a message to a string.
     * @param message The message to be serialized.
     * @return The serialized form of the message.
     */
    serialize(message: Message | null): string;
}
export declare namespace TextFormatSerializer {
    /**
     * Helper class used by the text format serializer for pretty-printing text.
     */
    class Printer_ {
        /**
         * Helper class used by the text format serializer for pretty-printing text.
         */
        constructor();
        private noStructuralTyping_closure_goog_proto2_textformatserializer_Printer_;
        toString(): string;
        /**
         * Increases the indentation in the printer.
         */
        indent(): void;
        /**
         * Decreases the indentation in the printer.
         */
        dedent(): void;
        /**
         * Appends the given value to the printer.
         * @param value The value to append.
         */
        append(value: any): void;
        /**
         * Appends a newline to the printer.
         */
        appendLine(): void;
    }
    /**
     * Helper class for tokenizing the text format.
     */
    class Tokenizer_ {
        /**
         * Helper class for tokenizing the text format.
         * @param data The string data to tokenize.
         * @param opt_ignoreWhitespace If true, whitespace tokens will not be reported by the tokenizer.
         * @param opt_ignoreComments If true, comment tokens will not be reported by the tokenizer.
         */
        constructor(data: string, opt_ignoreWhitespace?: boolean, opt_ignoreComments?: boolean);
        private noStructuralTyping_closure_goog_proto2_textformatserializer_Tokenizer_;
        getCurrent(): TextFormatSerializer.Tokenizer_.Token | null;
        /**
         * Advances to the next token.
         * @return True if a valid token was found, false if the end was reached or no valid token was found.
         */
        next(): boolean;
    }
    namespace Tokenizer_ {
        type Token = {
            'type': TextFormatSerializer.Tokenizer_.TokenTypes | null;
            'value': string | null;
        };
        /**
         * An enumeration of all the token types.
         */
        type TokenTypes = RegExp;
        const TokenTypes: {
            END: RegExp;
            BAD: RegExp;
            IDENTIFIER: RegExp;
            NUMBER: RegExp;
            COMMENT: RegExp;
            OPEN_BRACE: RegExp;
            CLOSE_BRACE: RegExp;
            OPEN_TAG: RegExp;
            CLOSE_TAG: RegExp;
            OPEN_LIST: RegExp;
            CLOSE_LIST: RegExp;
            STRING: RegExp;
            COLON: RegExp;
            COMMA: RegExp;
            SEMI: RegExp;
            WHITESPACE: RegExp;
        };
    }
    /**
     * Helper class for parsing the text format.
     */
    class Parser {
        /**
         * Helper class for parsing the text format.
         */
        constructor();
        private noStructuralTyping_closure_goog_proto2_textformatserializer_Parser;
        /**
         * Parses the given data, filling the message as it goes.
         * @param message The message to fill.
         * @param data The text format data.
         * @param opt_ignoreMissingFields If true, fields missing in the proto will be ignored.
         * @return True on success, false on failure. On failure, the getError method can be called to get the reason for failure.
         */
        parse(message: Message | null, data: string, opt_ignoreMissingFields?: boolean): boolean;
        getError(): string | null;
    }
}
