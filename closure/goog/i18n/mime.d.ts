/**
 * Encodes a string for inclusion in a MIME header. The string is encoded
 * in UTF-8 according to RFC 1522, using quoted-printable form.
 * @param str The string to encode.
 * @param opt_noquote Whether double-quote characters should also be escaped (should be true if the result will be placed inside a quoted string for a parameter value in a MIME header).
 * @return The encoded string.
 */
export declare function encode(str: string, opt_noquote?: boolean): string;
/**
 * Get an array of UTF-8 hex codes for a given character.
 * @param c The matched character.
 * @return A hex array representing the character.
 */
export declare function getHexCharArray(c: string): string[];
