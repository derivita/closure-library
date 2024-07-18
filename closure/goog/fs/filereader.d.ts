import { Deferred } from '../../../third_party/closure/goog/mochikit/async/deferred.js';
import { EventTarget } from '../events/eventtarget.js';
import { Error } from './error.js';
/**
 * An object for monitoring the reading of files. This emits ProgressEvents of
 * the types listed in {@link FileReader_.EventType}.
 */
declare class FileReader_ extends EventTarget {
    /**
     * An object for monitoring the reading of files. This emits ProgressEvents of
     * the types listed in {@link FileReader_.EventType}.
     */
    constructor();
    private noStructuralTyping_closure_goog_fs_filereader_FileReader_;
    /**
     * Abort the reading of the file.
     */
    abort(): void;
    getReadyState(): FileReader_.ReadyState | null;
    getResult(): any;
    getError(): Error | null;
    disposeInternal(): void;
    /**
     * Starts reading a blob as a binary string.
     * @param blob The blob to read.
     */
    readAsBinaryString(blob: Blob): void;
    /**
     * Reads a blob as a binary string.
     * @param blob The blob to read.
     * @return The deferred Blob contents as a binary string. If an error occurs, the errback is called with a {@link Error}.
     */
    static readAsBinaryString(blob: Blob): Deferred;
    /**
     * Starts reading a blob as an array buffer.
     * @param blob The blob to read.
     */
    readAsArrayBuffer(blob: Blob): void;
    /**
     * Reads a blob as an array buffer.
     * @param blob The blob to read.
     * @return The deferred Blob contents as an array buffer. If an error occurs, the errback is called with a {@link Error}.
     */
    static readAsArrayBuffer(blob: Blob): Deferred;
    /**
     * Starts reading a blob as text.
     * @param blob The blob to read.
     * @param opt_encoding The name of the encoding to use.
     */
    readAsText(blob: Blob, opt_encoding?: string): void;
    /**
     * Reads a blob as text.
     * @param blob The blob to read.
     * @param opt_encoding The name of the encoding to use.
     * @return The deferred Blob contents as text. If an error occurs, the errback is called with a {@link Error}.
     */
    static readAsText(blob: Blob, opt_encoding?: string): Deferred;
    /**
     * Starts reading a blob as a data URL.
     * @param blob The blob to read.
     */
    readAsDataUrl(blob: Blob): void;
    /**
     * Reads a blob as a data URL.
     * @param blob The blob to read.
     * @return The deferred Blob contents as a data URL. If an error occurs, the errback is called with a {@link Error}.
     */
    static readAsDataUrl(blob: Blob): Deferred;
}
declare namespace FileReader_ {
    /**
     * Possible states for a FileReader.
     */
    enum ReadyState {
        INIT = 0,
        LOADING = 1,
        DONE = 2
    }
    /**
     * Events emitted by a FileReader.
     */
    enum EventType {
        LOAD_START = "loadstart",
        PROGRESS = "progress",
        LOAD = "load",
        ABORT = "abort",
        ERROR = "error",
        LOAD_END = "loadend"
    }
}
export { FileReader_ as FileReader };
