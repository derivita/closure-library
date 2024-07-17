/**
 * Gets the U+ notation string of a Unicode character. Ex: 'U+0041' for 'A'.
 * @param ch The given character.
 * @return The U+ notation of the given character.
 */
export declare function toHexString(ch: string): string;
/**
 * Gets a string padded with given character to get given size.
 * @param str The given string to be padded.
 * @param length The target size of the string.
 * @param ch The character to be padded with.
 * @return The padded string.
 */
export declare function padString_(str: string, length: number, ch: string): string;
/**
 * Gets Unicode value of the given character.
 * @param ch The given character, which in the case of a supplementary character is actually a surrogate pair. The remainder of the string is ignored.
 * @return The Unicode value of the character.
 */
export declare function toCharCode(ch: string): number;
/**
 * Gets a character from the given Unicode value. If the given code point is not
 * a valid Unicode code point, null is returned.
 * @param code The Unicode value of the character.
 * @return The character corresponding to the given Unicode value.
 */
export declare function fromCharCode(code: number): string | null;
/**
 * Returns the Unicode code point at the specified index.
 *
 * If the char value specified at the given index is in the leading-surrogate
 * range, and the following index is less than the length of `string`, and
 * the char value at the following index is in the trailing-surrogate range,
 * then the supplementary code point corresponding to this surrogate pair is
 * returned.
 *
 * If the char value specified at the given index is in the trailing-surrogate
 * range, and the preceding index is not before the start of `string`, and
 * the char value at the preceding index is in the leading-surrogate range, then
 * the negated supplementary code point corresponding to this surrogate pair is
 * returned.
 *
 * The negation allows the caller to differentiate between the case where the
 * given index is at the leading surrogate and the one where it is at the
 * trailing surrogate, and thus deduce where the next character starts and
 * preceding character ends.
 *
 * Otherwise, the char value at the given index is returned. Thus, a leading
 * surrogate is returned when it is not followed by a trailing surrogate, and a
 * trailing surrogate is returned when it is not preceded by a leading
 * surrogate.
 * @param string The string.
 * @param index The index from which the code point is to be retrieved.
 * @return The code point at the given index. If the given index is that of the start (i.e. lead surrogate) of a surrogate pair, returns the code point encoded by the pair. If the given index is that of the end (i.e. trail surrogate) of a surrogate pair, returns the negated code pointed encoded by the pair.
 */
export declare function getCodePointAround(string: string, index: number): number;
/**
 * Determines the length of the string needed to represent the specified
 * Unicode code point.
 * @return 2 if codePoint is a supplementary character, 1 otherwise.
 */
export declare function charCount(codePoint: number): number;
/**
 * Determines whether the specified Unicode code point is in the supplementary
 * Unicode characters range.
 * @return Whether then given code point is a supplementary character.
 */
export declare function isSupplementaryCodePoint(codePoint: number): boolean;
/**
 * Gets whether the given code point is a leading surrogate character.
 * @return Whether the given code point is a leading surrogate character.
 */
export declare function isLeadSurrogateCodePoint(codePoint: number): boolean;
/**
 * Gets whether the given code point is a trailing surrogate character.
 * @return Whether the given code point is a trailing surrogate character.
 */
export declare function isTrailSurrogateCodePoint(codePoint: number): boolean;
/**
 * Composes a supplementary Unicode code point from the given UTF-16 surrogate
 * pair. If leadSurrogate isn't a leading surrogate code point or trailSurrogate
 * isn't a trailing surrogate code point, null is returned.
 * @param lead The leading surrogate code point.
 * @param trail The trailing surrogate code point.
 * @return The supplementary Unicode code point obtained by decoding the given UTF-16 surrogate pair.
 */
export declare function buildSupplementaryCodePoint(lead: number, trail: number): number | null;
