/**
 * Base64 stream decoder.
 */
export declare class Base64StreamDecoder {
    /**
     * Base64 stream decoder.
     */
    constructor();
    private noStructuralTyping_closure_goog_net_streams_base64streamdecoder_Base64StreamDecoder;
    /**
     * Checks if the decoder has aborted due to invalid input.
     * @return true if the input is still valid.
     */
    isInputValid(): boolean;
    /**
     * Decodes the input stream.
     * @param input The next part of input stream
     * @return decoded bytes in an array, or null if needs more input data to decode any new bytes
     */
    decode(input: string): number[] | null;
}
