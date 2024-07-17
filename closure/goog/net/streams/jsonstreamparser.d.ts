import { StreamParser } from './streamparser.js';
/**
 * The default JSON stream parser.
 */
export declare class JsonStreamParser implements StreamParser {
    /**
     * The default JSON stream parser.
     * @param opt_options Configuration for the new JsonStreamParser instance.
     */
    constructor(opt_options?: JsonStreamParser.Options);
    private noStructuralTyping_closure_goog_net_streams_jsonstreamparser_JsonStreamParser;
    isInputValid(): any;
    getErrorMessage(): any;
    done(): boolean;
    /**
     * Get the part of input that is after the end of the stream. Call this only
     * when `this.done()` is true.
     * @return The extra input TODO(updogliu): move this API to the base type.
     */
    getExtraInput(): string;
    acceptsBinaryInput(): boolean;
    parse(input: any): any;
}
export declare namespace JsonStreamParser {
    /**
     * Configuration spec for newly created JSON stream parser:
     *
     * allowCompactJsonArrayFormat: ignored.
     *
     * deliverMessageAsRawString: whether to deliver the raw message string without
     * decoding into JS object. Semantically insignificant whitespaces in the
     * input may be kept or ignored.
     */
    type Options = {
        'allowCompactJsonArrayFormat': boolean | undefined;
        'deliverMessageAsRawString': boolean | undefined;
    };
    /**
     * The stream state.
     */
    enum StreamState_ {
        INIT = 0,
        ARRAY_OPEN = 1,
        ARRAY_END = 2,
        INVALID = 3
    }
    /**
     * The parser state.
     */
    enum State_ {
        INIT = 0,
        VALUE = 1,
        OBJECT_OPEN = 2,
        OBJECT_END = 3,
        ARRAY_OPEN = 4,
        ARRAY_END = 5,
        STRING = 6,
        KEY_START = 7,
        KEY_END = 8,
        TRUE1 = 9,
        TRUE2 = 10,
        TRUE3 = 11,
        FALSE1 = 12,
        FALSE2 = 13,
        FALSE3 = 14,
        FALSE4 = 15,
        NULL1 = 16,
        NULL2 = 17,
        NULL3 = 18,
        NUM_DECIMAL_POINT = 19,
        NUM_DIGIT = 20
    }
}
