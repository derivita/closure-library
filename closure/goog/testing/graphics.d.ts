import { Path } from '../graphics/path.js';
/**
 * Test if the given path matches the expected array of commands and parameters.
 * @param expected The expected array of commands and parameters.
 * @param path The path to test against.
 */
export declare function assertPathEquals(expected: (string | number)[] | null, path: Path | null): void;
