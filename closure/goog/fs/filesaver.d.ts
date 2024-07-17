import { EventTarget } from '../events/eventtarget.js';
import { Error } from './error.js';
/**
 * An object for monitoring the saving of files. This emits ProgressEvents of
 * the types listed in {@link GoogFileSaver.EventType}.
 *
 * This should not be instantiated directly. Instead, its subclass
 * {@link goog.fs.FileWriter} should be accessed via
 * {@link goog.fs.FileEntry#createWriter}.
 */
declare class GoogFileSaver extends EventTarget {
    /**
     * An object for monitoring the saving of files. This emits ProgressEvents of
     * the types listed in {@link GoogFileSaver.EventType}.
     *
     * This should not be instantiated directly. Instead, its subclass
     * {@link goog.fs.FileWriter} should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     * @param fileSaver The underlying FileSaver object.
     */
    constructor(fileSaver: FileSaver);
    private noStructuralTyping_closure_goog_fs_filesaver_GoogFileSaver;
    /**
     * Abort the writing of the file.
     */
    abort(): void;
    getReadyState(): GoogFileSaver.ReadyState | null;
    getError(): Error | null;
    disposeInternal(): void;
}
declare namespace GoogFileSaver {
    /**
     * Possible states for a FileSaver.
     */
    enum ReadyState {
        INIT = 0,
        WRITING = 1,
        DONE = 2
    }
    /**
     * Events emitted by a FileSaver.
     */
    enum EventType {
        WRITE_START = "writestart",
        PROGRESS = "progress",
        WRITE = "write",
        ABORT = "abort",
        ERROR = "error",
        WRITE_END = "writeend"
    }
}
export { GoogFileSaver as FileSaver };
