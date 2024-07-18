import { StreamParser } from './streamparser.js';
/**
 * The default base64-encoded Protobuf stream parser.
 */
declare class Base64PbStreamParser implements StreamParser {
    /**
     * The default base64-encoded Protobuf stream parser.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_streams_base64pbstreamparser_Base64PbStreamParser;
    isInputValid(): any;
    getErrorMessage(): any;
    acceptsBinaryInput(): boolean;
    parse(input: any): any;
}
export { Base64PbStreamParser };
