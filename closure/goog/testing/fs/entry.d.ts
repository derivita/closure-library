import { Deferred } from '../../../../third_party/closure/goog/mochikit/async/deferred.js';
import { DirectoryEntry as fsDirectoryEntry, Entry as fsEntry, FileEntry as fsFileEntry } from '../../fs/entry.js';
import { File } from './file.js';
import type { FileSystem } from './filesystem.js';
/**
 * A mock filesystem entry object.
 */
export declare class Entry implements fsEntry {
    /**
     * A mock filesystem entry object.
     * @param fs The filesystem containing this entry.
     * @param parent The directory entry directly containing this entry.
     * @param name The name of this entry.
     */
    constructor(fs: FileSystem, parent: DirectoryEntry, name: string);
    private noStructuralTyping_closure_goog_testing_fs_entry_Entry;
    /**
     * The parent of this entry.
     */
    parent: DirectoryEntry;
    /**
     * Whether or not this entry has been deleted.
     */
    deleted: boolean;
    getName(): any;
    getFullPath(): any;
    getFileSystem(): FileSystem;
    moveTo(parent: any, opt_newName: any): any;
    copyTo(parent: any, opt_newName: any): any;
    clone(): Entry;
    toUrl(opt_mimetype: any): any;
    remove(): any;
    getParent(): any;
    /**
     * Return a deferred that will call its errback if this entry has been deleted.
     * In addition, the deferred will only run after a timeout of 0, and all its
     * callbacks will run with the entry as "this".
     * @param action The name of the action being performed. For error reporting.
     * @return The deferred that will be called after a timeout of 0.
     */
    protected checkNotDeleted(action: string): Deferred;
}
/**
 * A mock directory entry object.
 */
export declare class DirectoryEntry extends Entry implements fsDirectoryEntry {
    /**
     * A mock directory entry object.
     * @param fs The filesystem containing this entry.
     * @param parent The directory entry directly containing this entry. If this is null, that means this is the root directory and so is its own parent.
     * @param name The name of this entry.
     * @param children The map of child names to entry objects.
     */
    constructor(fs: FileSystem, parent: DirectoryEntry | null, name: string, children: {
        [key: string]: Entry;
    });
    private noStructuralTyping_closure_goog_testing_fs_entry_DirectoryEntry;
    /**
     * The map of child names to entry objects.
     */
    children: {
        [key: string]: Entry;
    };
    isFile(): any;
    isDirectory(): any;
    getLastModified(): any;
    getMetadata(): any;
    clone(): Entry;
    remove(): any;
    getFile(path: any, opt_behavior: any): any;
    getDirectory(path: any, opt_behavior: any): any;
    /**
     * Get a file entry synchronously, without waiting for a Deferred to resolve.
     * @param path The path to the file, relative to this directory.
     * @param opt_behavior The behavior for loading the file.
     * @param opt_data The string data encapsulated by the blob.
     * @param opt_type The mime type of the blob.
     * @return The loaded file.
     */
    getFileSync(path: string, opt_behavior?: fsDirectoryEntry.Behavior | null, opt_data?: string, opt_type?: string): FileEntry;
    /**
     * Creates a file synchronously. This is a shorthand for getFileSync, useful for
     * setting up tests.
     * @param path The path to the file, relative to this directory.
     * @return The created file.
     */
    createFileSync(path: string): FileEntry;
    /**
     * Get a directory synchronously, without waiting for a Deferred to resolve.
     * @param path The path to the directory, relative to this one.
     * @param opt_behavior The behavior for loading the directory.
     * @return The loaded directory.
     */
    getDirectorySync(path: string, opt_behavior?: fsDirectoryEntry.Behavior | null): DirectoryEntry;
    /**
     * Creates a directory synchronously. This is a shorthand for getFileSync,
     * useful for setting up tests.
     * @param path The path to the directory, relative to this directory.
     * @return The created directory.
     */
    createDirectorySync(path: string): DirectoryEntry;
    /**
     * Returns whether this directory has a child with the given name.
     * @param name The name of the entry to check for.
     * @return Whether or not this has a child with the given name.
     */
    hasChild(name: string): boolean;
    removeRecursively(): any;
    listDirectory(): any;
}
/**
 * A mock file entry object.
 */
export declare class FileEntry extends Entry implements fsFileEntry {
    /**
     * A mock file entry object.
     * @param fs The filesystem containing this entry.
     * @param parent The directory entry directly containing this entry.
     * @param name The name of this entry.
     * @param data The data initially contained in the file.
     * @param opt_type The mime type of the blob.
     */
    constructor(fs: FileSystem, parent: DirectoryEntry, name: string, data: string, opt_type?: string);
    private noStructuralTyping_closure_goog_testing_fs_entry_FileEntry;
    isFile(): any;
    isDirectory(): any;
    clone(): Entry;
    getLastModified(): any;
    getMetadata(): any;
    createWriter(): any;
    file(): any;
    /**
     * Get the internal file representation synchronously, without waiting for a
     * Deferred to resolve.
     * @return The internal file blob referenced by this FileEntry.
     */
    fileSync(): File;
}
