import { BlockCipher } from './blockcipher.js';
/**
 * Implements the CBC mode for block ciphers. See
 * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
 * #Cipher-block_chaining_.28CBC.29
 */
export declare class Cbc {
    /**
     * Implements the CBC mode for block ciphers. See
     * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
     * #Cipher-block_chaining_.28CBC.29
     * @param cipher The block cipher to use.
     */
    constructor(cipher: BlockCipher);
    private noStructuralTyping_closure_goog_crypt_cbc_Cbc;
    /**
     * Encrypt a message.
     * @param plainText Message to encrypt. An array of bytes. The length should be a multiple of the block size.
     * @param initialVector Initial vector for the CBC mode. An array of bytes with the same length as the block size.
     * @return Encrypted message.
     */
    encrypt(plainText: number[] | Uint8Array, initialVector: number[] | Uint8Array): number[];
    /**
     * Decrypt a message.
     * @param cipherText Message to decrypt. An array of bytes. The length should be a multiple of the block size.
     * @param initialVector Initial vector for the CBC mode. An array of bytes with the same length as the block size.
     * @return Decrypted message.
     */
    decrypt(cipherText: number[] | Uint8Array, initialVector: number[] | Uint8Array): number[];
}
