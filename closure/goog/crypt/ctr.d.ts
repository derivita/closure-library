import type { BlockCipher } from './blockcipher.js';
/**
 * Implementation of Ctr mode for block ciphers.  See
 * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
 * #Cipher-block_chaining_.28Ctr.29. for an overview, and
 * http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
 * for the spec.
 */
export declare class Ctr {
    /**
     * Implementation of Ctr mode for block ciphers.  See
     * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
     * #Cipher-block_chaining_.28Ctr.29. for an overview, and
     * http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
     * for the spec.
     * @param cipher The block cipher to use.
     */
    constructor(cipher: BlockCipher);
    private noStructuralTyping_closure_goog_crypt_ctr_Ctr;
    /**
     * Encrypts a message.
     * @param plainText Message to encrypt. An array of bytes. The length does not have to be a multiple of the blocksize.
     * @param initialVector Initial vector for the Ctr mode. An array of bytes with the same length as the block size, that should be not reused when using the same key.
     * @return Encrypted message.
     */
    encrypt(plainText: number[] | Uint8Array, initialVector: number[] | Uint8Array): number[];
    /**
     * Decrypts a message. In CTR, this is the same as encrypting.
     * @param cipherText Message to decrypt. The length does not have to be a multiple of the blocksize.
     * @param initialVector Initial vector for the Ctr mode. An array of bytes with the same length as the block size.
     * @return Decrypted message.
     */
    decrypt(a: number[] | Uint8Array, b: number[] | Uint8Array): number[];
}
