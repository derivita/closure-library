import { SafeHtml } from '../html/safehtml.js';
/**
 * Options bag for linkifyPlainTextAsHtml's second parameter.
 */
export interface LinkifyOptions {
    /**
     * HTML attributes to add to all links created.  Default are `rel=nofollow`
     * and `target=_blank`. To clear these defaults attributes, set them
     * explicitly to '', i.e. `{rel: '', target: ''}`.
     */
    attributes: {
        [key: string]: SafeHtml.AttributeValue | null;
    } | undefined;
    /**
     * Whether to preserve newlines with &lt;br&gt;.
     */
    preserveNewlines: boolean | undefined;
    /**
     * Whether to preserve spaces with non-breaking spaces and tabs with
     * &lt;span style="white-space:pre"&gt;
     */
    preserveSpacesAndTabs: boolean | undefined;
}
/**
 * Takes a string of plain text and linkifies URLs and email addresses. For a
 * URL (unless opt_attributes is specified), the target of the link will be
 * _blank and it will have a rel=nofollow attribute applied to it so that links
 * created by linkify will not be of interest to search engines.
 * @param text Plain text.
 * @param opt_options Options bag.
 * @return Linkified HTML. Any text that is not part of a link will be HTML-escaped.
 */
export declare function linkifyPlainTextAsHtml(text: string, opt_options?: LinkifyOptions): SafeHtml;
/**
 * Gets the first URI in text.
 * @param text Plain text.
 * @return The first URL, or an empty string if not found.
 */
export declare function findFirstUrl(text: string): string;
/**
 * Gets the first email address in text.
 * @param text Plain text.
 * @return The first email address, or an empty string if not found.
 */
export declare function findFirstEmail(text: string): string;
