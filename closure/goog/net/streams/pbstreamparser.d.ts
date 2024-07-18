import { StreamParser } from './streamparser.js';
/**
 * The default Protobuf stream parser.
 */
export declare class PbStreamParser implements StreamParser {
    /**
     * The default Protobuf stream parser.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_streams_pbstreamparser_PbStreamParser;
    isInputValid(): any;
    getErrorMessage(): any;
    acceptsBinaryInput(): boolean;
    parse(input: any): any;
}
export declare namespace PbStreamParser {
    /**
     * The parser state.
     */
    enum State_ {
        INIT = 0,
        LENGTH = 1,
        MESSAGE = 2,
        INVALID = 3
    }
}
