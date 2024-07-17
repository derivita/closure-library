import { DebugError as Error } from '../../debug/error.js';
export declare var ENABLE_VERBOSE_DEBUGGING: boolean;
/**
 * Error thrown when parsing fails.
 */
export declare class ParseError extends Error {
    /**
     * Error thrown when parsing fails.
     * @param text The CSV source text being parsed.
     * @param index The index, in the string, of the position of the error.
     * @param opt_message A description of the violated parse expectation.
     */
    constructor(text: string, index: number, opt_message?: string);
    private noStructuralTyping_closure_goog_labs_format_csv_ParseError;
    position: {
        'line': number;
        'column': number;
    };
    name: string;
}
/**
 * A token -- a single-character string or a sentinel.
 */
export type Token = string | Sentinels_;
/**
 * Parses a CSV string to create a two-dimensional array.
 *
 * This function does not process header lines, etc -- such transformations can
 * be made on the resulting array.
 * @param text The entire CSV text to be parsed.
 * @param opt_ignoreErrors Whether to ignore parsing errors and instead try to recover and keep going.
 * @param opt_delimiter The delimiter to use. Defaults to ','
 * @return The parsed CSV.
 */
export declare function parse(text: string, opt_ignoreErrors?: boolean, opt_delimiter?: string): string[][];
/**
 * Sentinel tracking objects.
 */
type Sentinels_ = object;
declare const Sentinels_: {
    EMPTY: {};
    EOF: {};
    EOR: {};
    NEWLINE: {};
};
/**
 *
 * @param str A string.
 * @return Whether the string is a single character.
 */
export declare function isCharacterString_(str: string): boolean;
/**
 * Assert the parameter is a token.
 * @param o What should be a token.
 */
export declare function assertToken_(o: any): void;
export {};
