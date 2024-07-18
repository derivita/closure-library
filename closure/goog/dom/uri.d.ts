/**
 * Normalizes a URL by assigning it to an anchor element and reading back href.
 *
 * This converts relative URLs to absolute, and cleans up whitespace.
 * @param uri A string containing a URI.
 * @return Normalized, absolute form of uri.
 */
declare function normalizeUri(uri: string): string;
export { normalizeUri };
/**
 * Gets the href property of an anchor element, suppressing exceptions coming
 * from certain URLs in IE.
 */
declare function getHref(element: HTMLAnchorElement): string | null;
export { getHref };
