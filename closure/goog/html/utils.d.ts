/**
 * Extracts plain text from HTML.
 *
 * This behaves similarly to extracting textContent from a hypothetical DOM
 * element containing the specified HTML.  Block-level elements such as div are
 * surrounded with whitespace, but inline elements are not.  Span is treated as
 * a block level element because it is often used as a container.  Breaking
 * spaces are compressed and trimmed.
 * @param value The input HTML to have tags removed.
 * @return The plain text of value without tags, HTML comments, or other non-text content.  Does NOT return safe HTML!
 */
export declare function stripHtmlTags(value: string): string;
