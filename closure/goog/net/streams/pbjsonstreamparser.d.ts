import { StreamParser } from './streamparser.js';
/**
 * A stream parser of StreamBody message in Protobuf-JSON format.
 */
declare class PbJsonStreamParser implements StreamParser {
    /**
     * A stream parser of StreamBody message in Protobuf-JSON format.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_streams_pbjsonstreamparser_PbJsonStreamParser;
    isInputValid(): any;
    getErrorMessage(): any;
    acceptsBinaryInput(): boolean;
    parse(input: any): any;
}
export { PbJsonStreamParser };
