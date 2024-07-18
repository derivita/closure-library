import { EventTarget } from '../events/eventtarget.js';
import type { Hash } from './hash.js';
/**
 * Construct the hash computer.
 */
export declare class BlobHasher extends EventTarget {
    /**
     * Construct the hash computer.
     * @param hashFn The hash function to use.
     * @param opt_blockSize Processing block size.
     */
    constructor(hashFn: Hash, opt_blockSize?: number);
    private noStructuralTyping_closure_goog_crypt_blobhasher_BlobHasher;
    /**
     * Start the hash computation.
     * @param blob The blob of data to compute the hash for.
     */
    hash(blob: Blob): void;
    /**
     * Sets the maximum number of bytes to hash or Infinity for no limit. Can be
     * called before hash() to throttle the hash computation. The hash computation
     * can then be continued by repeatedly calling setHashingLimit() with greater
     * byte offsets. This is useful if you don't need the hash until some time in
     * the future, for example when uploading a file and you don't need the hash
     * until the transfer is complete.
     * @param byteOffset The byte offset to compute the hash up to. Should be a non-negative integer or Infinity for no limit. Negative values are not allowed.
     */
    setHashingLimit(byteOffset: number): void;
    /**
     * Abort hash computation.
     */
    abort(): void;
    getBytesProcessed(): number;
    getHash(): number[] | null;
}
export declare namespace BlobHasher {
    /**
     * Event names for hash computation events
     */
    enum EventType {
        STARTED = "started",
        PROGRESS = "progress",
        THROTTLED = "throttled",
        COMPLETE = "complete",
        ABORT = "abort",
        ERROR = "error"
    }
}
