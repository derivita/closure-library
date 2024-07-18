/**
 * Derives key from password using PBKDF2-SHA1
 * @param password Byte array representation of the password from which the key is derived.
 * @param initialSalt Byte array representation of the salt.
 * @param iterations Number of interations when computing the key.
 * @param keyLength Length of the output key in bits. Must be multiple of 8.
 * @return Byte array representation of the output key.
 */
export declare function deriveKeySha1(password: number[], initialSalt: number[], iterations: number, keyLength: number): number[];
