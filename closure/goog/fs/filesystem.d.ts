import type { DirectoryEntry } from './entry.js';
/**
 * A local filesystem.
 */
export interface FileSystem {
    getName(): string;
    getRoot(): DirectoryEntry;
}
