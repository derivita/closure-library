import { Hash } from './hash.js';
/**
 * Constructs a SHA-2 64-bit cryptographic hash.
 * This class should not be used. Rather, one should use one of its
 * subclasses.
 */
export declare class Sha2_64bit extends Hash {
    /**
     * Constructs a SHA-2 64-bit cryptographic hash.
     * This class should not be used. Rather, one should use one of its
     * subclasses.
     * @param numHashBlocks The size of the output in 16-byte blocks
     * @param initHashBlocks The hash-specific initialization vector, as a sequence of sixteen 32-bit numbers.
     */
    constructor(numHashBlocks: number, initHashBlocks: number[]);
    private noStructuralTyping_closure_goog_crypt_sha2_64bit_Sha2_64bit;
    /**
     * The number of bytes that are digested in each pass of this hasher.
     */
    blockSize: number;
    /**
     * Resets this hash function.
     */
    reset(): void;
    update(message: any, opt_length: any): void;
    digest(): number[];
}
