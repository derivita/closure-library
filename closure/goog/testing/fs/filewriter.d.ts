import { EventTarget } from '../../events/eventtarget.js';
import { Error } from '../../fs/error.js';
import { FileSaver } from '../../fs/filesaver.js';
import { Blob } from './blob.js';
import type { FileEntry } from './entry.js';
/**
 * A mock FileWriter object. This emits the same events as
 * {@link FileSaver} and {@link goog.fs.FileWriter}.
 */
export declare class FileWriter extends EventTarget {
    /**
     * A mock FileWriter object. This emits the same events as
     * {@link FileSaver} and {@link goog.fs.FileWriter}.
     * @param fileEntry The file entry to write to.
     */
    constructor(fileEntry: FileEntry);
    private noStructuralTyping_closure_goog_testing_fs_filewriter_FileWriter;
    getReadyState(): FileSaver.ReadyState | null;
    getError(): Error | null;
    getPosition(): number;
    getLength(): number;
    abort(): void;
    /**
     *
     * @param blob The blob to write.
     */
    write(blob: Blob): void;
    /**
     *
     * @param size The size to truncate to.
     */
    truncate(size: number): void;
    /**
     *
     * @param offset The offset to seek to.
     */
    seek(offset: number): void;
}
