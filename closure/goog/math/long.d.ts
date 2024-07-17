/**
 * Represents a 64-bit two's-complement integer, given its low and high 32-bit
 * values as *signed* integers.  See the from* functions below for more
 * convenient ways of constructing Longs.
 *
 * The internal representation of a long is the two given signed, 32-bit values.
 * We use 32-bit pieces because these are the size of integers on which
 * JavaScript performs bit-operations.  For operations like addition and
 * multiplication, we split each number into 16-bit pieces, which can easily be
 * multiplied within JavaScript's floating-point representation without overflow
 * or change in sign.
 *
 * In the algorithms below, we frequently reduce the negative case to the
 * positive case by negating the input(s) and then post-processing the result.
 * Note that we must ALWAYS check specially whether those values are MIN_VALUE
 * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
 * a positive number, it overflows back into a negative).  Not handling this
 * case would often result in infinite recursion.
 */
declare class Long {
    constructor(low: number, high: number);
    toInt(): number;
    toNumber(): number;
    isSafeInteger(): boolean;
    toString(opt_radix?: number): string;
    toUnsignedString(opt_radix?: number): string;
    getHighBits(): number;
    getLowBits(): number;
    getLowBitsUnsigned(): number;
    getNumBitsAbs(): number;
    isZero(): boolean;
    isNegative(): boolean;
    isOdd(): boolean;
    /**
     * Returns a hash code for this long object that similar java.lang.Long one.
     */
    hashCode(): number;
    equals(other: Long | null): boolean;
    notEquals(other: Long | null): boolean;
    lessThan(other: Long | null): boolean;
    lessThanOrEqual(other: Long | null): boolean;
    greaterThan(other: Long | null): boolean;
    greaterThanOrEqual(other: Long | null): boolean;
    /**
     * Compares this Long with the given one.
     */
    compare(other: Long | null): number;
    negate(): Long;
    /**
     * Returns the sum of this and the given Long.
     */
    add(other: Long | null): Long;
    /**
     * Returns the difference of this and the given Long.
     */
    subtract(other: Long | null): Long;
    /**
     * Returns the product of this and the given long.
     */
    multiply(other: Long | null): Long;
    /**
     * Returns this Long divided by the given one.
     */
    div(other: Long | null): Long;
    /**
     * Returns this Long modulo the given one.
     */
    modulo(other: Long | null): Long;
    not(): Long;
    /**
     * Returns the bitwise-AND of this Long and the given one.
     */
    and(other: Long | null): Long;
    /**
     * Returns the bitwise-OR of this Long and the given one.
     */
    or(other: Long | null): Long;
    /**
     * Returns the bitwise-XOR of this Long and the given one.
     */
    xor(other: Long | null): Long;
    /**
     * Returns this Long with bits shifted to the left by the given amount.
     */
    shiftLeft(numBits: number): Long;
    /**
     * Returns this Long with bits shifted to the right by the given amount.
     * The new leading bits match the current sign bit.
     */
    shiftRight(numBits: number): Long;
    /**
     * Returns this Long with bits shifted to the right by the given amount, with
     * zeros placed into the new leading bits.
     */
    shiftRightUnsigned(numBits: number): Long;
    /**
     * Returns a Long representing the given (32-bit) integer value.
     */
    static fromInt(value: number): Long;
    /**
     * Returns a Long representing the given value.
     * NaN will be returned as zero. Infinity is converted to max value and
     * -Infinity to min value.
     */
    static fromNumber(value: number): Long;
    /**
     * Returns a Long representing the 64-bit integer that comes by concatenating
     * the given high and low bits.  Each is assumed to use 32 bits.
     */
    static fromBits(lowBits: number, highBits: number): Long;
    /**
     * Returns a Long representation of the given string, written using the given
     * radix.
     */
    static fromString(str: string, opt_radix?: number): Long;
    /**
     * Returns the boolean value of whether the input string is within a Long's
     * range. Assumes an input string containing only numeric characters with an
     * optional preceding '-'.
     */
    static isStringInRange(str: string, opt_radix?: number): boolean;
    static getZero(): Long;
    static getOne(): Long;
    static getNegOne(): Long;
    static getMaxValue(): Long;
    static getMinValue(): Long;
    static getTwoPwr24(): Long;
}
export { Long };
