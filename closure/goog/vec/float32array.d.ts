/**
 * Constructs a new Float32Array. The new array is initialized to all zeros.
 */
declare class Float32Array_ implements ArrayLike<number> {
    /**
     * Constructs a new Float32Array. The new array is initialized to all zeros.
     * @param p0 The length of the array, or an array to initialize the contents of the new Float32Array.
     */
    constructor(p0: Float32Array_ | any[] | ArrayBuffer | number | null);
    private noStructuralTyping_closure_goog_vec_float32array_Float32Array_;
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
    set(values: number[] | Float32Array | null, opt_offset?: number): void;
    /**
     * Creates a string representation of this array.
     * @return The string version of this array.
     */
    toString(...args: any[]): string;
}
export { Float32Array_ as Float32Array };
