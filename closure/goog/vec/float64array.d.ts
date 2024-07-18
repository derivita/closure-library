/**
 * Constructs a new Float64Array. The new array is initialized to all zeros.
 */
declare class Float64Array_ implements ArrayLike<number> {
    /**
     * Constructs a new Float64Array. The new array is initialized to all zeros.
     * @param p0 The length of the array, or an array to initialize the contents of the new Float64Array.
     */
    constructor(p0: Float64Array_ | any[] | ArrayBuffer | number | null);
    private noStructuralTyping_closure_goog_vec_float64array_Float64Array_;
    length: number;
    [key: number]: number;
    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     */
    static BYTES_PER_ELEMENT: number;
    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     */
    BYTES_PER_ELEMENT: number;
    /**
     * Sets elements of the array.
     * @param values The array of values.
     * @param opt_offset The offset in this array to start.
     */
    set(values: number[] | Float64Array | null, opt_offset?: number): void;
    /**
     * Creates a string representation of this array.
     * @return The string version of this array.
     */
    toString(...args: any[]): string;
}
export { Float64Array_ as Float64Array };
