import { Hash } from './hash.js';
/**
 * SHA-2 cryptographic hash constructor.
 * This constructor should not be used directly to create the object. Rather,
 * one should use the constructor of the sub-classes.
 */
export declare class Sha2 extends Hash {
    /**
     * SHA-2 cryptographic hash constructor.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of the sub-classes.
     * @param numHashBlocks The size of output in 16-byte blocks.
     * @param initHashBlocks The hash-specific initialization
     */
    constructor(numHashBlocks: number, initHashBlocks: number[]);
    private noStructuralTyping_closure_goog_crypt_sha2_Sha2;
    blockSize: number;
    reset(): void;
    update(message: any, opt_length: any): void;
    digest(): number[];
}
