import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
/**
 * Returns a temporary FileSystem object. A temporary filesystem may be deleted
 * by the user agent at its discretion.
 * @param size The size requested for the filesystem, in bytes.
 * @return The deferred {@link FileSystem}. If an error occurs, the errback is called with a {@link fsError}.
 */
export declare function getTemporary(size: number): Deferred;
/**
 * Returns a persistent FileSystem object. A persistent filesystem will never be
 * deleted without the user's or application's authorization.
 * @param size The size requested for the filesystem, in bytes.
 * @return The deferred {@link FileSystem}. If an error occurs, the errback is called with a {@link fsError}.
 */
export declare function getPersistent(size: number): Deferred;
/**
 * Slices the blob. The returned blob contains data from the start byte
 * (inclusive) till the end byte (exclusive). Negative indices can be used
 * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
 * are always clamped to blob range. If end is omitted, all the data till
 * the end of the blob is taken.
 * @param blob The blob to be sliced.
 * @param start Index of the starting byte.
 * @param opt_end Index of the ending byte.
 * @return The blob slice or null if not supported.
 */
export declare function sliceBlob(blob: Blob, start: number, opt_end?: number): Blob | null;
