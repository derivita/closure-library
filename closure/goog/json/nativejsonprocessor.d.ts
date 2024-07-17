import { Parser } from '../string/parser.js';
import { Stringifier } from '../string/stringifier.js';
import { Replacer } from './types.js';
/**
 * A class that parses and stringifies JSON using the browser's built-in JSON
 * library.
 */
export default class implements Parser, Stringifier {
    constructor(opt_replacer?: Replacer | null, opt_reviver?: any);
    /**
     * Serializes an object or a value to a string.
     * Agnostic to the particular format of object and string.
     */
    stringify(object: any): string;
    /**
     * Parses a string into an object and returns the result.
     * Agnostic to the format of string and object.
     */
    parse(s: string): any;
}
