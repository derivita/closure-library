import * as fs from './entry.js';
import type { FileSystem } from './filesystem.js';
/**
 * Base class for concrete implementations of goog.fs.Entry.
 */
export declare class EntryImpl implements fs.Entry {
    /**
     * Base class for concrete implementations of goog.fs.Entry.
     * @param fs The wrapped filesystem.
     * @param entry The underlying Entry object.
     */
    constructor(fs: FileSystem, entry: Entry);
    private noStructuralTyping_closure_goog_fs_entryimpl_EntryImpl;
    isFile(): any;
    isDirectory(): any;
    getName(): any;
    getFullPath(): any;
    getFileSystem(): any;
    getLastModified(): any;
    getMetadata(): any;
    moveTo(parent: any, opt_newName: any): any;
    copyTo(parent: any, opt_newName: any): any;
    wrapEntry(entry: any): any;
    toUrl(opt_mimeType: any): any;
    remove(): any;
    getParent(): any;
}
/**
 * A directory in a local FileSystem.
 *
 * This should not be instantiated directly. Instead, it should be accessed via
 * {@link FileSystem#getRoot} or
 * {@link fs.DirectoryEntry#getDirectoryEntry}.
 */
export declare class DirectoryEntryImpl extends EntryImpl implements fs.DirectoryEntry {
    /**
     * A directory in a local FileSystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link FileSystem#getRoot} or
     * {@link fs.DirectoryEntry#getDirectoryEntry}.
     * @param fs The wrapped filesystem.
     * @param dir The underlying DirectoryEntry object.
     */
    constructor(fs: FileSystem, dir: DirectoryEntry);
    private noStructuralTyping_closure_goog_fs_entryimpl_DirectoryEntryImpl;
    getFile(path: any, opt_behavior: any): any;
    getDirectory(path: any, opt_behavior: any): any;
    createPath(path: any): any;
    listDirectory(): any;
    removeRecursively(): any;
}
/**
 * A file in a local filesystem.
 *
 * This should not be instantiated directly. Instead, it should be accessed via
 * {@link fs.DirectoryEntry#getFile}.
 */
export declare class FileEntryImpl extends EntryImpl implements fs.FileEntry {
    /**
     * A file in a local filesystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link fs.DirectoryEntry#getFile}.
     * @param fs The wrapped filesystem.
     * @param file The underlying FileEntry object.
     */
    constructor(fs: FileSystem, file: FileEntry);
    private noStructuralTyping_closure_goog_fs_entryimpl_FileEntryImpl;
    createWriter(): any;
    file(): any;
}
