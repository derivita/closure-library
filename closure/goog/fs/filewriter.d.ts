import { FileSaver } from './filesaver.js';
/**
 * An object for monitoring the saving of files, as well as other fine-grained
 * writing operations.
 *
 * This should not be instantiated directly. Instead, it should be accessed via
 * {@link goog.fs.FileEntry#createWriter}.
 */
declare class GoogFsFileWriter extends FileSaver {
    /**
     * An object for monitoring the saving of files, as well as other fine-grained
     * writing operations.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     * @param writer The underlying FileWriter object.
     */
    constructor(writer: FileWriter);
    private noStructuralTyping_closure_goog_fs_filewriter_GoogFsFileWriter;
    getPosition(): number;
    getLength(): number;
    /**
     * Write data to the file.
     * @param blob The data to write.
     */
    write(blob: Blob): void;
    /**
     * Set the file position at which the next write will occur.
     * @param offset An absolute byte offset into the file.
     */
    seek(offset: number): void;
    /**
     * Changes the length of the file to that specified.
     * @param size The new size of the file, in bytes.
     */
    truncate(size: number): void;
}
export { GoogFsFileWriter as FileWriter };
