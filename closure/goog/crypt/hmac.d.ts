import { Hash } from './hash.js';
export declare class Hmac extends Hash {
    /**
     *
     * @param hasher An object to serve as a hash function.
     * @param key The secret key to use to calculate the hmac. Should be an array of not more than `blockSize` integers in {0, 255}.
     * @param opt_blockSize Optional. The block size `hasher` uses. If not specified, uses the block size from the hasher, or 16 if it is not specified.
     */
    constructor(hasher: Hash, key: number[] | null, opt_blockSize?: number);
    private noStructuralTyping_closure_goog_crypt_hmac_Hmac;
    blockSize: number;
    reset(): void;
    update(bytes: any, opt_length: any): void;
    digest(): number[];
    /**
     * Calculates an HMAC for a given message.
     * @param message Data to Hmac.
     * @return the digest of the given message.
     */
    getHmac(message: number[] | Uint8Array | string | null): number[];
}
