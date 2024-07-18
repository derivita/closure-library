import { SafeHtml } from '../html/safehtml.js';
/**
 * A function that takes:
 * (1) the number of the term that is "hit",
 * (2) the HTML (search term) to be annotated,
 * and returns the annotated term as an HTML.
 */
export type AnnotateFn = () => SafeHtml;
/**
 * Calls `annotateFn` for each occurrence of a search term in text nodes
 * under `node`. Returns the number of hits.
 * @param node A DOM node.
 * @param terms An array of [searchTerm, matchWholeWordOnly] tuples. The matchWholeWordOnly value is a per-term attribute because some terms may be CJK, while others are not. (For correctness, matchWholeWordOnly should always be false for CJK terms.).
 * @param opt_ignoreCase Whether to ignore the case of the query terms when looking for matches.
 * @param opt_classesToSkip Nodes with one of these CSS class names (and its descendants) will be skipped.
 * @param opt_maxMs Number of milliseconds after which this function, if still annotating, should stop and return.
 * @return Whether any terms were annotated.
 */
export declare function annotateTerms(node: Node | null, terms: (string | boolean)[][] | null, annotateFn: AnnotateFn | null, opt_ignoreCase?: any, opt_classesToSkip?: string[] | null, opt_maxMs?: number): boolean;
/**
 * Annotates occurrences of query terms in plain text. This process consists of
 * identifying all occurrences of all query terms, calling a provided function
 * to get the appropriate replacement HTML for each occurrence, and
 * HTML-escaping all the text.
 * @param text The plain text to be searched.
 * @param terms An array of [{string} searchTerm, {boolean} matchWholeWordOnly] tuples. The matchWholeWordOnly value is a per-term attribute because some terms may be CJK, while others are not. (For correctness, matchWholeWordOnly should always be false for CJK terms.).
 * @param opt_ignoreCase Whether to ignore the case of the query terms when looking for matches.
 * @return The HTML equivalent of `text` with terms annotated, or null if the text did not contain any of the terms.
 */
export declare function annotateText(text: string, terms: (any[] | null)[] | null, annotateFn: AnnotateFn | null, opt_ignoreCase?: any): SafeHtml | null;
