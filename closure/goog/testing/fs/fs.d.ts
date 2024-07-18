import { Deferred } from '../../../../third_party/closure/goog/mochikit/async/deferred.js';
import { PropertyReplacer } from '../propertyreplacer.js';
import { Blob } from './blob.js';
/**
 * Get a filesystem object. Since these are mocks, there's no difference between
 * temporary and persistent filesystems.
 * @param size Ignored.
 * @return The deferred {@link FileSystem}.
 */
export declare function getTemporary(size: number): Deferred;
/**
 * Get a filesystem object. Since these are mocks, there's no difference between
 * temporary and persistent filesystems.
 * @param size Ignored.
 * @return The deferred {@link FileSystem}.
 */
export declare function getPersistent(size: number): Deferred;
/**
 * Create a fake object URL for a given fake blob. This can be used as a real
 * URL, and it can be created and revoked normally.
 * @param blob The blob for which to create the URL.
 * @return The URL.
 */
export declare function createObjectUrl(blob: Blob): string;
/**
 * Remove a URL that was created for a fake blob.
 * @param url The URL to revoke.
 */
export declare function revokeObjectUrl(url: string): void;
/**
 * Return whether or not a URL has been granted for the given blob.
 * @param blob The blob to check.
 * @return Whether a URL has been granted.
 */
export declare function isObjectUrlGranted(blob: Blob): boolean;
/**
 * Concatenates one or more values together and converts them to a fake blob.
 * @param var_args The values that will make up the resulting blob.
 * @return The blob.
 */
export declare function getBlob(...var_args: (string | Blob)[]): Blob;
/**
 * Creates a blob with the given properties.
 * See https://developer.mozilla.org/en-US/docs/Web/API/Blob for more details.
 * @param parts The values that will make up the resulting blob.
 * @param opt_type The MIME type of the Blob.
 * @param opt_endings Specifies how strings containing newlines are to be written out.
 * @return The blob.
 */
export declare function getBlobWithProperties(parts: (string | Blob)[] | null, opt_type?: string, opt_endings?: string): Blob;
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices can be used
 * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
 * are always clamped to blob range. If end is omitted, all the data till
 * the end of the blob is taken.
 * @param testBlob The blob to slice.
 * @param start Index of the starting byte.
 * @param opt_end Index of the ending byte.
 * @return The new blob or null if not supported.
 */
export declare function sliceBlob(testBlob: Blob, start: number, opt_end?: number): Blob;
/**
 * Installs goog.testing.fs in place of the standard googFs. After calling
 * this, code that uses googFs should work without issue using
 * @param stubs The property replacer for stubbing out the original googFs functions.
 */
export declare function install(stubs: PropertyReplacer): void;
