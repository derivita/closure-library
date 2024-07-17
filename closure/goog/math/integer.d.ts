/**
 * Constructs a two's-complement integer an array containing bits of the
 * integer in 32-bit (signed) pieces, given in little-endian order (i.e.,
 * lowest-order bits in the first piece), and the sign of -1 or 0.
 *
 * See the from* functions below for other convenient ways of constructing
 * Integers.
 *
 * The internal representation of an integer is an array of 32-bit signed
 * pieces, along with a sign (0 or -1) that indicates the contents of all the
 * other 32-bit pieces out to infinity.  We use 32-bit pieces because these are
 * the size of integers on which JavaScript performs bit-operations.  For
 * operations like addition and multiplication, we split each number into 16-bit
 * pieces, which can easily be multiplied within JavaScript's floating-point
 * representation without overflow or change in sign.
 */
export declare class Integer {
    /**
     * Constructs a two's-complement integer an array containing bits of the
     * integer in 32-bit (signed) pieces, given in little-endian order (i.e.,
     * lowest-order bits in the first piece), and the sign of -1 or 0.
     *
     * See the from* functions below for other convenient ways of constructing
     * Integers.
     *
     * The internal representation of an integer is an array of 32-bit signed
     * pieces, along with a sign (0 or -1) that indicates the contents of all the
     * other 32-bit pieces out to infinity.  We use 32-bit pieces because these are
     * the size of integers on which JavaScript performs bit-operations.  For
     * operations like addition and multiplication, we split each number into 16-bit
     * pieces, which can easily be multiplied within JavaScript's floating-point
     * representation without overflow or change in sign.
     * @param bits Array containing the bits of the number.
     * @param sign The sign of the number: -1 for negative and 0 positive.
     */
    constructor(bits: number[] | null, sign: number);
    private noStructuralTyping_closure_goog_math_integer_Integer;
    /**
     * Returns an Integer representing the given (32-bit) integer value.
     * @param value A 32-bit integer value.
     * @return The corresponding Integer value.
     */
    static fromInt(value: number): Integer;
    /**
     * Returns an Integer representing the given value, provided that it is a finite
     * number.  Otherwise, zero is returned.
     * @param value The value in question.
     * @return The corresponding Integer value.
     */
    static fromNumber(value: number): Integer;
    /**
     * Returns a Integer representing the value that comes by concatenating the
     * given entries, each is assumed to be 32 signed bits, given in little-endian
     * order (lowest order bits in the lowest index), and sign-extending the highest
     * order 32-bit value.
     * @param bits The bits of the number, in 32-bit signed pieces, in little-endian order.
     * @return The corresponding Integer value.
     */
    static fromBits(bits: number[] | null): Integer;
    /**
     * Returns an Integer representation of the given string, written using the
     * given radix.
     * @param str The textual representation of the Integer.
     * @param opt_radix The radix in which the text is written.
     * @return The corresponding Integer value.
     */
    static fromString(str: string, opt_radix?: number): Integer;
    static ZERO: Integer;
    static ONE: Integer;
    /**
     * Returns the value, assuming it is a 32-bit integer.
     * @return The corresponding int value.
     */
    toInt(): number;
    toNumber(): number;
    /**
     *
     * @param opt_radix The radix in which the text should be written.
     * @return The textual representation of this value.
     */
    toString(opt_radix?: number): string;
    /**
     * Returns the index-th 32-bit (signed) piece of the Integer according to
     * little-endian order (i.e., index 0 contains the smallest bits).
     * @param index The index in question.
     * @return The requested 32-bits as a signed number.
     */
    getBits(index: number): number;
    /**
     * Returns the index-th 32-bit piece as an unsigned number.
     * @param index The index in question.
     * @return The requested 32-bits as an unsigned number.
     */
    getBitsUnsigned(index: number): number;
    getSign(): number;
    isZero(): boolean;
    isNegative(): boolean;
    isOdd(): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer equals the other.
     */
    equals(other: Integer | null): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer does not equal the other.
     */
    notEquals(other: Integer | null): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer is greater than the other.
     */
    greaterThan(other: Integer | null): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer is greater than or equal to the other.
     */
    greaterThanOrEqual(other: Integer | null): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer is less than the other.
     */
    lessThan(other: Integer | null): boolean;
    /**
     *
     * @param other Integer to compare against.
     * @return Whether this Integer is less than or equal to the other.
     */
    lessThanOrEqual(other: Integer | null): boolean;
    /**
     * Compares this Integer with the given one.
     * @param other Integer to compare against.
     * @return 0 if they are the same, 1 if the this is greater, and -1 if the given one is greater.
     */
    compare(other: Integer | null): number;
    /**
     * Returns an integer with only the first numBits bits of this value, sign
     * extended from the final bit.
     * @param numBits The number of bits by which to shift.
     * @return The shorted integer value.
     */
    shorten(numBits: number): Integer;
    negate(): Integer;
    abs(): Integer;
    /**
     * Returns the sum of this and the given Integer.
     * @param other The Integer to add to this.
     * @return The Integer result.
     */
    add(other: Integer | null): Integer;
    /**
     * Returns the difference of this and the given Integer.
     * @param other The Integer to subtract from this.
     * @return The Integer result.
     */
    subtract(other: Integer | null): Integer;
    /**
     * Returns the product of this and the given Integer.
     * @param other The Integer to multiply against this.
     * @return The product of this and the other.
     */
    multiply(other: Integer | null): Integer;
    /**
     * Returns this Integer divided by the given one.
     * @param other The Integer to divide this by.
     * @return This value divided by the given one.
     */
    divide(other: Integer): Integer;
    /**
     * Returns this Integer divided by the given one, as well as the remainder of
     * that division.
     * @param other The Integer to divide this by.
     */
    divideAndRemainder(other: Integer): Integer.DivisionResult;
    /**
     * Returns this Integer modulo the given one.
     * @param other The Integer by which to mod.
     * @return This value modulo the given one.
     */
    modulo(other: Integer): Integer;
    not(): Integer;
    /**
     * Returns the bitwise-AND of this Integer and the given one.
     * @param other The Integer to AND with this.
     * @return The bitwise-AND of this and the other.
     */
    and(other: Integer | null): Integer;
    /**
     * Returns the bitwise-OR of this Integer and the given one.
     * @param other The Integer to OR with this.
     * @return The bitwise-OR of this and the other.
     */
    or(other: Integer | null): Integer;
    /**
     * Returns the bitwise-XOR of this Integer and the given one.
     * @param other The Integer to XOR with this.
     * @return The bitwise-XOR of this and the other.
     */
    xor(other: Integer | null): Integer;
    /**
     * Returns this value with bits shifted to the left by the given amount.
     * @param numBits The number of bits by which to shift.
     * @return This shifted to the left by the given amount.
     */
    shiftLeft(numBits: number): Integer;
    /**
     * Returns this value with bits shifted to the right by the given amount.
     * @param numBits The number of bits by which to shift.
     * @return This shifted to the right by the given amount.
     */
    shiftRight(numBits: number): Integer;
}
export declare namespace Integer {
    /**
     * A struct for holding the quotient and remainder of a division.
     */
    class DivisionResult {
        /**
         * A struct for holding the quotient and remainder of a division.
         */
        constructor(quotient: Integer, remainder: Integer);
        private noStructuralTyping_closure_goog_math_integer_DivisionResult;
        quotient: any;
        remainder: any;
    }
}
