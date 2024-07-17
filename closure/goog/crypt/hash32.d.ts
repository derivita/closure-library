/**
 * Default seed used during hashing, digits of pie.
 * See SEED32 in http://go/base.hash.java
 */
export declare var SEED32: number;
/**
 * Arbitrary constant used during hashing.
 * See CONSTANT32 in http://go/base.hash.java
 */
export declare var CONSTANT32: number;
/**
 * Hashes a string to a 32-bit value.
 * @param str String to hash.
 * @return 32-bit hash.
 */
export declare function encodeBinaryString(str: string): number;
/**
 * Hashes a string to a 32-bit value.
 * @param str String to hash.
 * @param throwSync Whether to throw synchronously on unicode input.
 * @return 32-bit hash.
 */
export declare function encodeString(str: string, throwSync?: boolean): number;
/**
 * Hashes a string to a 32-bit value, converting the string to UTF-8 before
 * doing the encoding.
 * @param str String to hash.
 * @return 32-bit hash.
 */
export declare function encodeStringUtf8(str: string): number;
/**
 * Hashes a string to a 32-bit value, converting the string to UTF-8 before
 * doing the encoding.
 * @param str String to hash.
 * @return 32-bit hash.
 */
export declare function encodeText(str: string): number;
/**
 * Hashes an integer to a 32-bit value.
 * @param value Number to hash.
 * @return 32-bit hash.
 */
export declare function encodeInteger(value: number): number;
/**
 * Hashes a "byte" array to a 32-bit value using the supplied seed.
 * @param bytes Array of bytes.
 * @param opt_offset The starting position to use for hash computation.
 * @param opt_length Number of bytes that are used for hashing.
 * @param opt_seed The seed.
 * @return 32-bit hash.
 */
export declare function encodeByteArray(bytes: number[] | null, opt_offset?: number, opt_length?: number, opt_seed?: number): number;
