/**
 * This interface represents a stream parser.
 */
export interface StreamParser {
    /**
     * Checks if the parser is aborted due to invalid input.
     * @return true if the input is still valid.
     */
    isInputValid(): boolean;
    acceptsBinaryInput(): boolean;
    /**
     * Checks the error message.
     * @return any debug info on the first invalid input, or null if the input is still valid.
     */
    getErrorMessage(): string | null;
    /**
     * Parse the new input.
     *
     * Note that there is no Parser state to indicate the end of a stream.
     * @param input The input data
     * @return any parsed objects (atomic messages) in an array, or null if more data needs be read to parse any new object.
     */
    parse(input: string | ArrayBuffer | number[]): (string | object)[] | null;
}
