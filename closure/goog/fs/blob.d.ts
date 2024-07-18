/**
 * Concatenates one or more values together and converts them to a Blob.
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
export declare function getBlob(...var_args: (string | Blob | ArrayBuffer)[]): Blob;
/**
 * Creates a blob with the given properties.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.
 * @param parts The values that will make up the resulting blob (subset supported by both BlobBuilder.append() and Blob constructor).
 * @param opt_type The MIME type of the Blob.
 * @param opt_endings Specifies how strings containing newlines are to be written out.
 * @return The blob.
 */
export declare function getBlobWithProperties(parts: (string | Blob | ArrayBuffer)[], opt_type?: string, opt_endings?: string): Blob;
