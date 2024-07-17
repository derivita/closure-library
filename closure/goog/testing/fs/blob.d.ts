/**
 * A mock Blob object. The data is stored as an Array of bytes, a "byte" being a
 * JS number in the range 0-255.
 *
 * This blob simplifies writing test code because it has the toString() method
 * that returns immediately, while the File API only provides asynchronous
 * reads.
 */
export declare class Blob {
    /**
     * A mock Blob object. The data is stored as an Array of bytes, a "byte" being a
     * JS number in the range 0-255.
     *
     * This blob simplifies writing test code because it has the toString() method
     * that returns immediately, while the File API only provides asynchronous
     * reads.
     * @param opt_data The data encapsulated by the blob.
     * @param opt_type The mime type of the blob.
     */
    constructor(opt_data?: string | (string | number | Uint8Array)[] | null, opt_type?: string);
    private noStructuralTyping_closure_goog_testing_fs_blob_Blob;
    type: string;
    size: number;
    /**
     * Creates a blob with bytes of a blob ranging from the optional start
     * parameter up to but not including the optional end parameter, and with a type
     * attribute that is the value of the optional contentType parameter.
     * @param opt_start The start byte offset.
     * @param opt_end The end point of a slice.
     * @param opt_contentType The type of the resulting Blob.
     * @return The result blob of the slice operation.
     */
    slice(opt_start?: number, opt_end?: number, opt_contentType?: string): Blob;
    toString(): string;
    toArrayBuffer(): ArrayBuffer;
    toDataUrl(): string;
}
