import type { Hash } from './hash.js';
/**
 * Runs basic tests.
 * @param hash A hash instance.
 */
export declare function runBasicTests(hash: Hash): void;
/**
 * Runs block tests.
 * @param hash A hash instance.
 * @param blockBytes Size of the hash block.
 */
export declare function runBlockTests(hash: Hash, blockBytes: number): void;
/**
 * Runs performance tests.
 * @param hashFactory A hash factory.
 * @param hashName Name of the hashing function.
 */
export declare function runPerfTests(hashFactory: () => Hash, hashName: string): void;
