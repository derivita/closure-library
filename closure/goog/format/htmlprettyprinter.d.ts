/**
 * This class formats HTML to be more human-readable.
 * TODO(user): Add hierarchical indentation.
 */
export declare class HtmlPrettyPrinter {
    /**
     * This class formats HTML to be more human-readable.
     * TODO(user): Add hierarchical indentation.
     * @param opt_timeOutMillis Max # milliseconds to spend on #format. If this time is exceeded, return partially formatted. 0 or negative number indicates no timeout.
     */
    constructor(opt_timeOutMillis?: number);
    private noStructuralTyping_closure_goog_format_htmlprettyprinter_HtmlPrettyPrinter;
    /**
     * Static utility function. See prototype #format.
     * @param html The HTML text to pretty print.
     * @return Formatted result.
     */
    static format(html: string): string;
    /**
     * Breaks up HTML so it's easily readable by the user.
     * @param html The HTML text to pretty print.
     * @return Formatted result.
     */
    format(html: string): string;
}
export declare namespace HtmlPrettyPrinter {
    /**
     * This class is a buffer to which we push our output. It tracks line breaks to
     * make sure we don't add unnecessary ones.
     */
    class Buffer {
        /**
         * This class is a buffer to which we push our output. It tracks line breaks to
         * make sure we don't add unnecessary ones.
         */
        constructor();
        private noStructuralTyping_closure_goog_format_htmlprettyprinter_Buffer;
        /**
         * Tracks number of line breaks added.
         */
        breakCount: number;
        /**
         * Adds token and necessary line breaks to output buffer.
         * @param breakBefore If true, add line break before token if necessary.
         * @param token Token to push.
         * @param breakAfter If true, add line break after token if necessary.
         */
        pushToken(breakBefore: boolean, token: string, breakAfter: boolean): void;
        /**
         * Append line break if we need one.
         */
        lineBreak(): void;
        toString(): string;
    }
}
