/**
 * Namespace for string utilities
 */
export declare function splitLines(str: any, opt_keepNewlines: any): void;
/**
 * Line metadata class that records the start/end indicies of lines
 * in a string.  Can be used to implement common newline use cases such as
 * splitLines() or determining line/column of an index in a string.
 * Also implements methods to get line contents.
 *
 * Indexes are expressed as string indicies into string.substring(), inclusive
 * at the start, exclusive at the end.
 *
 * Create an array of these with getLines().
 */
export declare class Line {
    /**
     * Line metadata class that records the start/end indicies of lines
     * in a string.  Can be used to implement common newline use cases such as
     * splitLines() or determining line/column of an index in a string.
     * Also implements methods to get line contents.
     *
     * Indexes are expressed as string indicies into string.substring(), inclusive
     * at the start, exclusive at the end.
     *
     * Create an array of these with getLines().
     * @param string The original string.
     * @param startLineIndex The index of the start of the line.
     * @param endContentIndex The index of the end of the line, excluding newlines.
     * @param endLineIndex The index of the end of the line, index newlines.
     */
    constructor(string: string, startLineIndex: number, endContentIndex: number, endLineIndex: number);
    private noStructuralTyping_closure_goog_string_newlines_Line;
    /**
     * The original string.
     */
    string: string;
    /**
     * Index of the start of the line.
     */
    startLineIndex: number;
    /**
     * Index of the end of the line, excluding any newline characters.
     * Index is the first character after the line, suitable for
     * String.substring().
     */
    endContentIndex: number;
    /**
     * Index of the end of the line, excluding any newline characters.
     * Index is the first character after the line, suitable for
     * String.substring().
     */
    endLineIndex: number;
    getContent(): string;
    getFullLine(): string;
    getNewline(): string;
}
/**
 * Splits a string into an array of line metadata.
 * @param str String to split.
 * @return Array of line metadata.
 */
export declare function getLines(str: string): Line[];
