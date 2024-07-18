import { Hash } from './hash.js';
/**
 * MD5 cryptographic hash constructor.
 */
export declare class Md5 extends Hash {
    /**
     * MD5 cryptographic hash constructor.
     */
    constructor();
    private noStructuralTyping_closure_goog_crypt_md5_Md5;
    blockSize: number;
    update(bytes: any, opt_length: any): void;
    digest(): number[];
}
