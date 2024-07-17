/**
 * Utility class to facilitate string concatenation.
 */
export declare class StringBuffer {
    /**
     * Utility class to facilitate string concatenation.
     * @param opt_a1 Optional first initial item to append.
     * @param var_args Other initial items to append, e.g., new goog.string.StringBuffer('foo', 'bar').
     */
    constructor(opt_a1?: any, ...var_args: any[]);
    private noStructuralTyping_closure_goog_string_stringbuffer_StringBuffer;
    /**
     * Sets the contents of the string buffer object, replacing what's currently
     * there.
     * @param s String to set.
     */
    set(s: any): void;
    /**
     * Appends one or more items to the buffer.
     *
     * Calling this with null, undefined, or empty arguments is an error.
     * @param a1 Required first string.
     * @param opt_a2 Optional second string.
     * @param var_args Other items to append, e.g., sb.append('foo', 'bar', 'baz').
     * @return This same StringBuffer object.
     */
    append(a1: any, opt_a2?: any, ...var_args: any[]): StringBuffer;
    /**
     * Clears the internal buffer.
     */
    clear(): void;
    getLength(): number;
    toString(): string;
}
