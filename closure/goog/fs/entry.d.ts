import type { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import type { FileSystem } from './filesystem.js';
import type { FileWriter } from './filewriter.js';
/**
 * The interface for entries in the filesystem.
 */
export interface Entry {
    isFile(): boolean;
    isDirectory(): boolean;
    getName(): string;
    getFullPath(): string;
    getFileSystem(): FileSystem;
    /**
     * Retrieves the last modified date for this entry.
     * @return The deferred Date for this entry. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    getLastModified(): Deferred;
    /**
     * Retrieves the metadata for this entry.
     * @return The deferred Metadata for this entry. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    getMetadata(): Deferred;
    /**
     * Move this entry to a new location.
     * @param parent The new parent directory.
     * @param opt_newName The new name of the entry. If omitted, the entry retains its original name.
     * @return The deferred {@link FileEntry} or {@link DirectoryEntry} for the new entry. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    moveTo(parent: DirectoryEntry, opt_newName?: string): Deferred;
    /**
     * Copy this entry to a new location.
     * @param parent The new parent directory.
     * @param opt_newName The name of the new entry. If omitted, the new entry has the same name as the original.
     * @return The deferred {@link FileEntry} or {@link DirectoryEntry} for the new entry. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    copyTo(parent: DirectoryEntry, opt_newName?: string): Deferred;
    /**
     * Wrap an HTML5 entry object in an appropriate subclass instance.
     * @param entry The underlying Entry object.
     * @return The appropriate subclass wrapper.
     */
    wrapEntry(entry: Entry): Entry;
    /**
     * Get the URL for this file.
     * @param opt_mimeType The MIME type that will be served for the URL.
     * @return The URL.
     */
    toUrl(opt_mimeType?: string): string;
    /**
     * Get the URI for this file.
     * @param opt_mimeType The MIME type that will be served for the URI.
     * @return The URI.
     */
    toUri(opt_mimeType?: string): string;
    /**
     * Remove this entry.
     * @return A deferred object. If the removal succeeds, the callback is called with true. If an error occurs, the errback is called a {@link goog.fs.Error}.
     */
    remove(): Deferred;
    /**
     * Gets the parent directory.
     * @return The deferred {@link DirectoryEntry}. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    getParent(): Deferred;
}
/**
 * A directory in a local FileSystem.
 */
export interface DirectoryEntry extends Entry {
    /**
     * Get a file in the directory.
     * @param path The path to the file, relative to this directory.
     * @param opt_behavior The behavior for handling an existing file, or the lack thereof.
     * @return The deferred {@link FileEntry}. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    getFile(path: string, opt_behavior?: DirectoryEntry.Behavior | null): Deferred;
    /**
     * Get a directory within this directory.
     * @param path The path to the directory, relative to this directory.
     * @param opt_behavior The behavior for handling an existing directory, or the lack thereof.
     * @return The deferred {@link DirectoryEntry}. If an error occurs, the errback is called a {@link goog.fs.Error}.
     */
    getDirectory(path: string, opt_behavior?: DirectoryEntry.Behavior | null): Deferred;
    /**
     * Opens the directory for the specified path, creating the directory and any
     * intermediate directories as necessary.
     * @param path The directory path to create. May be absolute or relative to the current directory. The parent directory ".." and current directory "." are supported.
     * @return A deferred {@link DirectoryEntry} for the requested path. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    createPath(path: string): Deferred;
    /**
     * Gets a list of all entries in this directory.
     * @return The deferred list of {@link Entry} results. If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    listDirectory(): Deferred;
    /**
     * Removes this directory and all its contents.
     * @return A deferred object. If the removal succeeds, the callback is called with true. If an error occurs, the errback is called a {@link goog.fs.Error}.
     */
    removeRecursively(): Deferred;
}
export declare namespace DirectoryEntry {
    /**
     * Behaviors for getting files and directories.
     */
    enum Behavior {
        DEFAULT = 1,
        CREATE = 2,
        CREATE_EXCLUSIVE = 3
    }
}
/**
 * A file in a local filesystem.
 */
export interface FileEntry extends Entry {
    /**
     * Create a writer for writing to the file.
     * @return If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    createWriter(): Deferred<FileWriter>;
    /**
     * Get the file contents as a File blob.
     * @return If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    file(): Deferred<File>;
}
