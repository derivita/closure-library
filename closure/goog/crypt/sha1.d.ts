import { Hash } from './hash.js';
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 */
export declare class Sha1 extends Hash {
    /**
     * SHA-1 cryptographic hash constructor.
     *
     * The properties declared here are discussed in the above algorithm document.
     */
    constructor();
    private noStructuralTyping_closure_goog_crypt_sha1_Sha1;
    blockSize: number;
    reset(): void;
    update(bytes: any, opt_length: any): void;
    digest(): number[];
}
