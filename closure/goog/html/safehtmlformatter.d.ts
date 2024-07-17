import { SafeHtml } from './safehtml.js';
/**
 * Formatter producing SafeHtml from a plain text format and HTML fragments.
 * Example usage:
 * var formatter = new SafeHtmlFormatter();
 * var safeHtml = formatter.format(
 * formatter.startTag('b') +
 * 'User input:' +
 * formatter.endTag('b') +
 * ' ' +
 * formatter.text(userInput));
 * The most common usage is with goog.getMsg:
 * var MSG_USER_INPUT = goog.getMsg(
 * '{$startLink}Learn more{$endLink} about {$userInput}', {
 * 'startLink': formatter.startTag('a', {'href': url}),
 * 'endLink': formatter.endTag('a'),
 * 'userInput': formatter.text(userInput)
 * });
 * var safeHtml = formatter.format(MSG_USER_INPUT);
 * The formatting string should be constant with all variables processed by
 * formatter.text().
 */
declare class SafeHtmlFormatter {
    constructor();
    /**
     * Formats a plain text string with markers holding HTML fragments to
     * SafeHtml.
     */
    format(format: string): SafeHtml;
    /**
     * Saves a start tag and returns its marker.
     */
    startTag(tagName: string, attributes?: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | null): string;
    /**
     * Saves an end tag and returns its marker.
     */
    endTag(tagName: string): string;
    /**
     * Escapes a text, saves it and returns its marker.
     *
     * Wrapping any user input to .text() prevents the attacker with access to
     * the random number generator to duplicate tags used elsewhere in the format.
     */
    text(text: string): string;
    /**
     * Saves SafeHtml and returns its marker.
     */
    safeHtml(safeHtml: SafeHtml): string;
}
declare namespace SafeHtmlFormatter {
    type Replacement = {
        'startTag': string | undefined;
        'attributes': string | undefined;
        'endTag': string | undefined;
        'html': string | undefined;
    };
}
export { SafeHtmlFormatter };
