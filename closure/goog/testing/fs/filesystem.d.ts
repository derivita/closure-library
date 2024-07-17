import { FileSystem as fsFileSystem } from '../../fs/filesystem.js';
import { DirectoryEntry } from './entry.js';
/**
 * A mock filesystem object.
 */
export declare class FileSystem implements fsFileSystem {
    /**
     * A mock filesystem object.
     * @param opt_name The name of the filesystem.
     */
    constructor(opt_name?: string);
    private noStructuralTyping_closure_goog_testing_fs_filesystem_FileSystem;
    getName(): any;
    getRoot(): DirectoryEntry;
}
