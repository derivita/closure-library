export declare var DETECT_DOUBLE_ESCAPING: boolean;
/**
 * Fast prefix-checker.
 * @param str The string to check.
 * @param prefix A string to look for at the start of `str`.
 * @return True if `str` begins with `prefix`.
 */
export declare function startsWith(str: string, prefix: string): boolean;
/**
 * Fast suffix-checker.
 * @param str The string to check.
 * @param suffix A string to look for at the end of `str`.
 * @return True if `str` ends with `suffix`.
 */
export declare function endsWith(str: string, suffix: string): boolean;
/**
 * Case-insensitive prefix-checker.
 * @param str The string to check.
 * @param prefix A string to look for at the end of `str`.
 * @return True if `str` begins with `prefix` (ignoring case).
 */
export declare function caseInsensitiveStartsWith(str: string, prefix: string): boolean;
/**
 * Case-insensitive suffix-checker.
 * @param str The string to check.
 * @param suffix A string to look for at the end of `str`.
 * @return True if `str` ends with `suffix` (ignoring case).
 */
export declare function caseInsensitiveEndsWith(str: string, suffix: string): boolean;
/**
 * Case-insensitive equality checker.
 * @param str1 First string to check.
 * @param str2 Second string to check.
 * @return True if `str1` and `str2` are the same string, ignoring case.
 */
export declare function caseInsensitiveEquals(str1: string, str2: string): boolean;
/**
 * Checks if a string is empty or contains only whitespaces.
 * @param str The string to check.
 * @return Whether `str` is empty or whitespace only.
 */
export declare function isEmptyOrWhitespace(str: string): boolean;
/**
 * Trims white spaces to the left and right of a string.
 * @param str The string to trim.
 * @return A trimmed copy of `str`.
 */
export declare function trim(str: string): string;
/**
 * A string comparator that ignores case.
 * -1 = str1 less than str2
 * 0 = str1 equals str2
 * 1 = str1 greater than str2
 * @param str1 The string to compare.
 * @param str2 The string to compare `str1` to.
 * @return The comparator result, as described above.
 */
export declare function caseInsensitiveCompare(str1: string, str2: string): number;
/**
 * Converts \n to <br>s or <br />s.
 * @param str The string in which to convert newlines.
 * @param opt_xml Whether to use XML compatible tags.
 * @return A copy of `str` with converted newlines.
 */
export declare function newLineToBr(str: string, opt_xml?: boolean): string;
/**
 * Escapes double quote '"' and single quote '\'' characters in addition to
 * '&', '<', and '>' so that a string can be included in an HTML tag attribute
 * value within double or single quotes.
 * @param str string to be escaped.
 * @return An escaped copy of `str`.
 */
export declare function htmlEscape(str: string, opt_isLikelyToContainHtmlChars?: boolean): string;
/**
 * Do escaping of whitespace to preserve spatial formatting. We use character
 * entity #160 to make it safer for xml.
 * @param str The string in which to escape whitespace.
 * @param opt_xml Whether to use XML compatible tags.
 * @return An escaped copy of `str`.
 */
export declare function whitespaceEscape(str: string, opt_xml?: boolean): string;
/**
 * Determines whether a string contains a substring.
 * @param str The string to search.
 * @param subString The substring to search for.
 * @return Whether `str` contains `subString`.
 */
export declare function contains(str: string, subString: string): boolean;
/**
 * Determines whether a string contains a substring, ignoring case.
 * @param str The string to search.
 * @param subString The substring to search for.
 * @return Whether `str` contains `subString`.
 */
export declare function caseInsensitiveContains(str: string, subString: string): boolean;
/**
 * Compares two version numbers.
 * @param version1 Version of first item.
 * @param version2 Version of second item.
 * @return 1 if `version1` is higher. 0 if arguments are equal. -1 if `version2` is higher.
 */
export declare function compareVersions(version1: string | number, version2: string | number): number;
