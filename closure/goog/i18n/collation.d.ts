/**
 * Returns the comparator for a locale. If a locale is not explicitly specified,
 * a comparator for the user's locale will be returned. Note that if the browser
 * does not support locale-sensitive string comparisons, the comparator returned
 * will be a simple codepoint comparator.
 * @param opt_locale the locale that the comparator is used for.
 * @param opt_options the optional set of options for use with the native collator.
 * @return The locale-specific comparator.
 */
export declare function createComparator(opt_locale?: string, opt_options?: {
    'usage': string | undefined;
    'localeMatcher': string | undefined;
    'sensitivity': string | undefined;
    'ignorePunctuation': boolean | undefined;
    'numeric': boolean | undefined;
    'caseFirst': string | undefined;
}): () => number;
/**
 * Returns true if a locale-sensitive comparator is available for a locale. If
 * a locale is not explicitly specified, the user's locale is used instead.
 * @return Whether there is a locale-sensitive comparator available for the locale.
 */
export declare function hasNativeComparator(): boolean;
