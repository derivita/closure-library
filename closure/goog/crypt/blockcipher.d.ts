/**
 * Interface definition for a block cipher.
 */
export interface BlockCipher {
    /**
     * Block size, in bytes.
     */
    BLOCK_SIZE: number;
    /**
     * Encrypt a plaintext block.  The implementation may expect (and assert)
     * a particular block length.
     * @param input Plaintext array of input bytes.
     * @return Encrypted ciphertext array of bytes.  Should be the same length as input.
     */
    encrypt(input: number[] | Uint8Array): number[];
    /**
     * Decrypt a plaintext block.  The implementation may expect (and assert)
     * a particular block length.
     * @param input Ciphertext. Array of input bytes.
     * @return Decrypted plaintext array of bytes.  Should be the same length as input.
     */
    decrypt(input: number[] | Uint8Array): number[];
}
