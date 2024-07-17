import * as fs from './filesystem.js';
/**
 * A local filesystem.
 *
 * This shouldn't be instantiated directly. Instead, it should be accessed via
 * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
 */
export declare class FileSystemImpl implements fs.FileSystem {
    /**
     * A local filesystem.
     *
     * This shouldn't be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
     * @param fs The underlying FileSystem object.
     */
    constructor(fs: FileSystem);
    private noStructuralTyping_closure_goog_fs_filesystemimpl_FileSystemImpl;
    getName(): any;
    getRoot(): any;
    getBrowserFileSystem(): FileSystem;
}
