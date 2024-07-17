import { throwException } from '../async/throwexception.js';
/**
 * Whether to async-throw on unicode input to the legacy versions of
 * `stringToByteArray` (i.e. when `throwSync` is false).
 * NOTE: The default will change to `true` soon, after notifying users.
 */
export declare var ASYNC_THROW_ON_UNICODE_TO_BYTE: boolean;
/**
 * Test-only stub to make our use of async.throwException more testable.
 */
export declare var TEST_ONLY: {
    /**
     * Remappable alias.
     */
    throwException: typeof throwException;
    /**
     * Configurable so that we can test the async-throw behavior.
     */
    alwaysThrowSynchronously: boolean;
};
/**
 * Turns a string into an array of bytes; a "byte" being a JS number in the
 * range 0-255. Multi-byte characters will throw.
 * @param str String value to arrify.
 * @return Array of numbers corresponding to the UCS character codes of each character in str.
 */
export declare function binaryStringToByteArray(str: string): number[];
/**
 * Turns a string into an array of bytes; a "byte" being a JS number in the
 * range 0-255. Multi-byte characters are written as little-endian.
 * @param str String value to arrify.
 * @param throwSync Whether to throw synchronously.
 * @return Array of numbers corresponding to the UCS character codes of each character in str.
 */
export declare function stringToByteArray(str: string, throwSync?: boolean): number[];
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
export declare function byteArrayToString(bytes: Uint8Array | number[]): string;
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
export declare function byteArrayToBinaryString(bytes: Uint8Array | number[]): string;
/**
 * Turns an array of numbers into the hex string given by the concatenation of
 * the hex values to which the numbers correspond.
 * @param array Array of numbers representing characters.
 * @param opt_separator Optional separator between values
 * @return Hex string.
 */
export declare function byteArrayToHex(array: Uint8Array | number[] | null, opt_separator?: string): string;
/**
 * Converts a hex string into an integer array.
 * @param hexString Hex string of 16-bit integers (two characters per integer).
 * @return Array of {0,255} integers for the given string.
 */
export declare function hexToByteArray(hexString: string): number[];
/**
 * Converts a JS string to a UTF-8 "byte" array.
 * @param str 16-bit unicode string.
 * @return UTF-8 byte array.
 */
export declare function stringToUtf8ByteArray(str: string): number[];
/**
 * Converts a JS string to a UTF-8 "byte" array.
 * @param str 16-bit unicode string.
 * @return UTF-8 byte array.
 */
export declare function textToByteArray(str: string): number[];
/**
 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
 * @param bytes UTF-8 byte array.
 * @return 16-bit Unicode string.
 */
export declare function utf8ByteArrayToString(bytes: Uint8Array | number[] | null): string;
/**
 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
 * @param bytes UTF-8 byte array.
 * @return 16-bit Unicode string.
 */
export declare function byteArrayToText(bytes: Uint8Array | number[] | null): string;
/**
 * XOR two byte arrays.
 * @param bytes1 Byte array 1.
 * @param bytes2 Byte array 2.
 * @return Resulting XOR of the two byte arrays.
 */
export declare function xorByteArray(bytes1: Uint8Array | Int8Array | number[], bytes2: Uint8Array | Int8Array | number[]): number[];
